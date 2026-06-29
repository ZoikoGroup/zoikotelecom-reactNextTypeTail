"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  useCart,
  type FormattedAddress,
  type ProductCharacteristic,
  type ZoikoVariation,
  type ZoikoPlan,
  type BTProductOfferingQualificationItem,
  type Plan,
} from "@/app/context/CartContext";

// ─── Local types ──────────────────────────────────────────────────────────────

/**
 * What /api/BritishTelecom/get-products returns per row: a BT POQ item with two
 * extra Zoiko-side fields tacked on at the top level. We strip those out before
 * storing the canonical BT shape in the cart.
 */
type ApiPOQRow = BTProductOfferingQualificationItem & {
  zoikoPlan?: ZoikoPlan | null;
  bt_plan_id?: string | null;
};

type ProductOfferingQualificationItem = ApiPOQRow;

type ContractDuration = "12-months" | "18-months" | "24-months";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getChar(
  chars: ProductCharacteristic[] | undefined,
  name: string,
): string {
  return chars?.find((c) => c.name === name)?.value ?? "";
}

function downloadTimeLabel(speed: string): string {
  const s = parseFloat(speed);
  if (s >= 60) return "5 minutes 10 seconds";
  if (s >= 40) return "6 minutes 50 seconds";
  return "9 minutes 19 seconds";
}

function deviceLabel(speed: string): string {
  return parseFloat(speed) >= 60 ? "5–8 Devices" : "1-4 Devices";
}

function formatUpload(upload: string): string {
  const n = parseFloat(upload);
  if (!n) return upload;
  if (n < 1) return `${Math.round(n * 1000)}Kbps upload`;
  return `${upload}Mbps upload`;
}

function formatDownload(download: string): string {
  const n = parseFloat(download);
  if (!n) return download;
  if (n < 1) return `${Math.round(n * 1000)}Kbps`;
  return `${download}Mbps`;
}

/** Pick the variation matching the selected contract duration */
function getVariationForContract(
  zoikoPlan: ZoikoPlan | null | undefined,
  contractType: ContractDuration,
): ZoikoVariation | null {
  if (!zoikoPlan) return null;
  const months = parseInt(contractType); // "24-months" → 24
  return (
    zoikoPlan.variations.find(
      (v) => v.is_active && v.duration_value === months,
    ) ??
    zoikoPlan.variations.find((v) => v.is_active) ??
    null
  );
}

const CONTRACT_LABELS: Record<ContractDuration, string> = {
  "24-months": "24 months",
  "18-months": "18 months",
  "12-months": "12 months",
};

/** Map the bt-broadband duration query param ("24" | "18" | "12") → ContractDuration */
function durationParamToContract(value: string | null): ContractDuration {
  if (value === "12") return "12-months";
  if (value === "18") return "18-months";
  return "24-months";
}

/**
 * Does this POQ row correspond to the plan the user pre-selected on the
 * bt-broadband page? We match on bt_plan_id first (most reliable), then fall
 * back to the plan name.
 */
function makeIsPreselected(
  preBtid: string | null,
  preName: string | null,
) {
  return (item: ProductOfferingQualificationItem): boolean => {
    const zp = item.zoikoPlan;
    if (!zp) return false;

    if (preBtid) {
      if (zp.bt_plan_id === preBtid) return true;
      if (
        zp.variations?.some(
          (v) =>
            v.effective_bt_plan_id === preBtid || v.bt_plan_id === preBtid,
        )
      ) {
        return true;
      }
    }

    if (preName && zp.name && zp.name.toLowerCase() === preName.toLowerCase()) {
      return true;
    }

    return false;
  };
}

// ─── Spinner ──────────────────────────────────────────────────────────────────

function Spinner({ size = 20 }: { size?: number }) {
  return (
    <svg
      className="animate-spin text-[#c61b7f]"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
      />
    </svg>
  );
}

// ─── PlanCard ─────────────────────────────────────────────────────────────────

interface PlanCardProps {
  item: ProductOfferingQualificationItem;
  contractType: ContractDuration;
  selectedAddress: FormattedAddress | null;
  highlight?: boolean;
}

function PlanCard({
  item,
  contractType,
  selectedAddress,
  highlight = false,
}: PlanCardProps) {
  const chars = item.product?.productCharacteristic;
  const download = getChar(chars, "productAdvertisedDownloadSpeed");
  const upload = getChar(chars, "productAdvertisedUploadSpeed");

  // zoikoPlan is guaranteed non-null here (filtered before render)
  const zoikoPlan = item.zoikoPlan!;
  const variation = getVariationForContract(zoikoPlan, contractType);
  const planName = zoikoPlan.name;
  const price = variation?.sale_price ?? variation?.price ?? null;
  const contractMonths = parseInt(contractType);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    // Strip the two Zoiko-side fields so what we store under
    // productOfferingQualificationItem is a clean BT POQ row — exactly the
    // shape /api/BritishTelecom/process-order needs.
    const {
      zoikoPlan: _strippedZoikoPlan,
      bt_plan_id: _strippedBtPlanId,
      ...productOfferingQualificationItem
    } = item;
    void _strippedZoikoPlan;
    void _strippedBtPlanId;

    const plan: Plan = {
      // — display fields (legacy) —
      id: Number(variation?.id ?? item.id),
      name: planName,
      price: parseFloat(price ?? "0"),
      speed: download || "Unknown",
      validity: `${contractMonths}`,
      description: `${planName} broadband — up to ${formatDownload(
        download,
      )} down / ${formatUpload(upload)}.`,
      address: selectedAddress,
      bt_plan_id:
        variation?.effective_bt_plan_id ??
        variation?.bt_plan_id ??
        zoikoPlan.bt_plan_id ??
        null,

      // — BT / Zoiko enrichment (needed by /process-order) —
      productOfferingQualificationItem,
      zoikoPlan,
      zoikoVariation: variation,

      slug: String(variation?.id ?? item.id),
      image: "",
      category: "broadband",
      quantity: 1,
    };

    addToCart(plan);
    window.location.href = "/checkout";
  };

  return (
    <div
      onClick={handleAddToCart}
      className={`relative flex flex-col rounded-2xl border bg-white overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer dark:bg-[#181c25] ${
        highlight
          ? "border-[#c61b7f] ring-2 ring-[#c61b7f] shadow-pink-500/10"
          : "border-gray-200 dark:border-white/10"
      }`}
    >
      {highlight && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2 z-10">
          <span className="rounded-b-lg bg-[#c61b7f] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow">
            Your selected plan
          </span>
        </div>
      )}

      {/* ── Top: speed + price ── */}
      <div className="px-5 pt-6 pb-4 flex items-start justify-between gap-4">
        {/* Left: download speed */}
        <div>
          {download ? (
            <>
              <p className="text-2xl font-black text-gray-900 leading-tight dark:text-white">
                {formatDownload(download)}
              </p>
              <p className="text-xs text-gray-500 font-medium mt-0.5 dark:text-gray-300">
                download speed
              </p>
            </>
          ) : (
            <p className="text-sm text-gray-400 dark:text-gray-300">
              Speed unavailable
            </p>
          )}

          {/* Upload */}
          {upload && (
            <div className="flex items-center gap-1.5 mt-2">
              <svg
                className="w-4 h-4 text-[#c61b7f] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16V8m0 0l-3 3m3-3l3 3M6.5 19a4.5 4.5 0 01-.5-8.97A5 5 0 0116.5 10H17a3 3 0 010 6h-.5"
                />
              </svg>
              <span className="text-xs text-gray-500 font-medium dark:text-gray-300">
                {formatUpload(upload)}
              </span>
            </div>
          )}
        </div>

        {/* Right: price */}
        <div className="text-right shrink-0">
          {price ? (
            <>
              <p className="text-2xl font-black text-[#c61b7f] leading-tight">
                £ {parseFloat(price).toFixed(2)}
              </p>
              <p className="text-xs text-gray-500 font-medium mt-0.5 dark:text-gray-300">
                a month
              </p>
            </>
          ) : (
            <p className="text-xs text-gray-400 italic dark:text-gray-300">
              Price unavailable
            </p>
          )}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-gray-100 dark:border-white/10 mx-5" />

      {/* ── Plan name ── */}
      <div className="px-5 pt-3 pb-2">
        <h3 className="text-base font-bold text-[#c61b7f]">{planName}</h3>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-gray-100 dark:border-white/10 mx-5" />

      {/* ── Feature checklist ── */}
      <div className="px-5 pt-3 pb-4 flex flex-col gap-2.5">
        {download && (
          <div className="flex items-center gap-2.5">
            <span className="w-4 h-4 rounded border border-gray-300 shrink-0 bg-white dark:bg-gray-600" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {downloadTimeLabel(download)} Movie Download time
            </span>
          </div>
        )}
        {download && (
          <div className="flex items-center gap-2.5">
            <svg
              className="w-4 h-4 text-[#c61b7f] shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <circle cx="12" cy="17" r="1" fill="currentColor" />
              <line x1="9" y1="5" x2="15" y2="5" strokeLinecap="round" />
            </svg>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {deviceLabel(download)}
            </span>
          </div>
        )}
      </div>

      {/* ── Contract ── */}
      <div className="px-5 pb-4">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-black">{contractMonths}-Months</span> contract
        </p>
      </div>

      {/* ── CTA ── */}
      <div className="px-5 pb-5 mt-auto">
        <button
          onClick={handleAddToCart}
          className="w-full py-3 rounded-xl bg-[#c61b7f] hover:bg-[#b21771] active:scale-95
            text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-md shadow-pink-500/20"
        >
          Checkout now
        </button>
      </div>
    </div>
  );
}

// ─── Availability checker (uses useSearchParams) ────────────────────────────────

function AvailabilityChecker() {
  const searchParams = useSearchParams();

  // Pre-selected plan, carried over from the bt-broadband page.
  const preName = searchParams.get("name");
  const preBtid = searchParams.get("btid");
  const preDuration = searchParams.get("duration");

  const isPreselected = makeIsPreselected(preBtid, preName);
  const hasPreselection = Boolean(preBtid || preName);

  const [step, setStep] = useState<"search" | "select" | "plans">("search");

  const [postcode, setPostcode] = useState("");
  const [addresses, setAddresses] = useState<FormattedAddress[]>([]);
  const [selectedAddress, setSelectedAddress] =
    useState<FormattedAddress | null>(null);

  const [contractType, setContractType] = useState<ContractDuration>(
    durationParamToContract(preDuration),
  );
  const [plans, setPlans] = useState<ProductOfferingQualificationItem[]>([]);

  const [loadingAddresses, setLoadingAddresses] = useState(false);
  const [loadingPlans, setLoadingPlans] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // ── Postcode search ──────────────────────────────────────────────────────

  const handlePostcodeSearch = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const trimmed = postcode.trim();
      if (!trimmed) return;

      setError(null);
      setLoadingAddresses(true);
      setAddresses([]);

      try {
        const res = await fetch("/api/BritishTelecom/search-address", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ postcode: trimmed }),
        });

        const data = await res.json();

        if (!data.success) {
          setError(data.message ?? "Failed to find addresses.");
          return;
        }

        setAddresses(data.addresses ?? []);
        setStep("select");
      } catch {
        setError("Network error. Please try again.");
      } finally {
        setLoadingAddresses(false);
      }
    },
    [postcode],
  );

  // ── Address selection + fetch plans ─────────────────────────────────────

  const handleSelectAddress = useCallback(
    async (address: FormattedAddress, contract: ContractDuration) => {
      setSelectedAddress(address);
      setError(null);
      setLoadingPlans(true);
      setPlans([]);
      setStep("plans");

      try {
        const res = await fetch("/api/BritishTelecom/get-products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            address_id: address.id,
            district_code: address.districtCode || "NS",
            contract_type: contract,
            catalog: "telecom",
          }),
        });

        const data = await res.json();

        if (!data.success) {
          setError(data.message ?? "Could not load plans.");
          return;
        }

        setPlans(data.productOfferingQualificationItem ?? []);
      } catch {
        setError("Network error. Please try again.");
      } finally {
        setLoadingPlans(false);
      }
    },
    [],
  );

  const handleContractChange = useCallback(
    (contract: ContractDuration) => {
      setContractType(contract);
      if (selectedAddress) {
        handleSelectAddress(selectedAddress, contract);
      }
    },
    [selectedAddress, handleSelectAddress],
  );

  // ── Filter ───────────────────────────────────────────────────────────────
  //
  // Items with zoikoPlan === null have no Zoiko match (ADSL, SOADSL, etc.)
  // and are intentionally hidden from the UI.

  const matchedPlans = plans.filter(
    (p) => p.zoikoPlan !== null && p.zoikoPlan !== undefined,
  );

  const availablePlans = matchedPlans.filter(
    (p) =>
      getChar(p.product?.productCharacteristic, "AVAILABILITY_FLAG") === "Y",
  );

  const unavailablePlans = matchedPlans.filter(
    (p) =>
      getChar(p.product?.productCharacteristic, "AVAILABILITY_FLAG") !== "Y",
  );

  // ── Pre-selected plan resolution ──────────────────────────────────────────
  const selectedAvailable = hasPreselection
    ? availablePlans.find(isPreselected) ?? null
    : null;
  const selectedUnavailable = hasPreselection
    ? unavailablePlans.find(isPreselected) ?? null
    : null;

  // Everything available that ISN'T the pre-selected plan.
  const otherAvailablePlans = availablePlans.filter(
    (p) => p !== selectedAvailable,
  );

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#faf6fb] dark:bg-[#0f1117] font-sans py-4">
      {/* ── Top bar ── */}
      <header className="max-w-2xl mx-auto rounded-2xl bg-white dark:bg-[#181c25] border-b border-gray-100 dark:border-white/10 sticky top-0 z-30 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#7B2983] flex items-center justify-center">
              <span className="text-white text-[10px] font-black tracking-tight">
                ZT
              </span>
            </div>
            <span className="font-bold text-gray-900 dark:text-white text-sm tracking-tight">
              Broadband Deals
            </span>
          </div>

          {/* Breadcrumb steps */}
          <nav className="hidden sm:flex items-center gap-1 text-xs font-medium">
            {(
              [
                { key: "search", label: "Postcode" },
                { key: "select", label: "Address" },
                { key: "plans", label: "Plans" },
              ] as const
            ).map(({ key, label }, i, arr) => (
              <span key={key} className="flex items-center gap-1">
                <span
                  className={`px-2.5 py-1 rounded-full transition-colors ${
                    step === key
                      ? "bg-[#c61b7f] text-white"
                      : ["search", "select", "plans"].indexOf(step) >
                          ["search", "select", "plans"].indexOf(key)
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-gray-100 text-gray-400 dark:bg-white/10 dark:text-gray-400"
                  }`}
                >
                  {label}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-gray-300">›</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* ────────────────── STEP 1: Postcode ────────────────── */}
        {step === "search" && (
          <div className="flex flex-col items-center text-center gap-8 py-12">
            <div>
              {hasPreselection && preName && (
                <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#c61b7f]/10 px-4 py-1.5 text-sm font-semibold text-[#c61b7f]">
                  Checking availability for {preName}
                </p>
              )}
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-3">
                Find your <span className="text-[#c61b7f]">broadband deals</span>
              </h1>
              <p className="text-gray-500 dark:text-gray-300 text-lg max-w-md mx-auto">
                Enter your postcode to see which fibre plans are available at
                your address.
              </p>
            </div>

            <form
              onSubmit={handlePostcodeSearch}
              className="w-full max-w-md flex flex-col sm:flex-row gap-3"
            >
              <input
                ref={inputRef}
                value={postcode}
                onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                placeholder="e.g. SW1A 1AA"
                maxLength={10}
                required
                disabled={loadingAddresses}
                className="flex-1 px-5 py-3.5 rounded-xl border-2 border-gray-200 dark:border-white/10 focus:border-[#c61b7f] focus:ring-2 focus:ring-[#c61b7f]/30
                  outline-none text-base font-semibold tracking-widest text-gray-900 dark:text-white bg-white dark:bg-[#181c25]
                  placeholder:tracking-normal placeholder:font-normal placeholder:text-gray-400
                  transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loadingAddresses || !postcode.trim()}
                className="px-6 py-3.5 rounded-xl bg-[#c61b7f] hover:bg-[#b21771] text-white
                  font-bold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-pink-500/30
                  disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 flex items-center gap-2 justify-center"
              >
                {loadingAddresses ? (
                  <>
                    <Spinner size={16} />
                    <span className="text-white">Searching…</span>
                  </>
                ) : (
                  "See your deals →"
                )}
              </button>
            </form>

            {error && (
              <p className="text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm font-medium max-w-md">
                {error}
              </p>
            )}
          </div>
        )}

        {/* ────────────────── STEP 2: Select Address ────────────────── */}
        {step === "select" && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-center gap-4 text-center">
              <button
                onClick={() => {
                  setStep("search");
                  setError(null);
                }}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors dark:text-gray-300 text-gray-500 shrink-0"
                aria-label="Back"
              >
                ←
              </button>

              <div className="justify-center">
                <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-1">
                  Select your address
                </h2>
                <p className="text-gray-500 dark:text-gray-300 text-sm">
                  {addresses.length} address
                  {addresses.length !== 1 ? "es" : ""} found for{" "}
                  <span className="font-semibold text-gray-700 dark:text-gray-300">
                    {postcode}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {addresses.map((addr, index) => (
                <button
                  key={addr.id || addr.uprn || `${addr.display}-${index}`}
                  onClick={() => handleSelectAddress(addr, contractType)}
                  className="w-full text-left bg-white border border-gray-200 hover:border-[#c61b7f]
                    dark:bg-[#181c25] dark:border-white/10 dark:hover:border-[#c61b7f] rounded-xl px-5 py-4 transition-all duration-200 hover:shadow-md group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-[#c61b7f] transition-colors">
                        {addr.display}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-300 mt-0.5">
                        {[addr.city, addr.postcode].filter(Boolean).join(", ")}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {addr.qualifier &&
                        (addr.qualifier === "Gold" ? (
                          <span
                            className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold"
                            style={{
                              background:
                                "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
                              color: "#7a4f00",
                              border: "1px solid #e6b800",
                              boxShadow: "0 1px 3px rgba(214,158,0,0.3)",
                            }}
                          >
                            ★ Gold
                          </span>
                        ) : addr.qualifier === "Silver" ? (
                          <span
                            className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold"
                            style={{
                              background:
                                "linear-gradient(135deg, #e0e0e0 0%, #bdbdbd 100%)",
                              color: "#4a4a4a",
                              border: "1px solid #9e9e9e",
                              boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                            }}
                          >
                            ✦ Silver
                          </span>
                        ) : (
                          <span className="text-xs text-gray-400 italic">
                            ( {addr.qualifier} )
                          </span>
                        ))}
                      <span className="text-[#c61b7f] opacity-0 group-hover:opacity-100 transition-opacity text-lg">
                        →
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {error && (
              <p className="text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm font-medium dark:bg-red-900 dark:border-red-600 dark:text-red-300">
                {error}
              </p>
            )}
          </div>
        )}

        {/* ────────────────── STEP 3: Plans ────────────────── */}
        {step === "plans" && (
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="relative flex flex-col items-center text-center gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setStep("select");
                    setError(null);
                  }}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors dark:text-gray-300 text-gray-500 shrink-0"
                  aria-label="Back"
                >
                  ←
                </button>
                <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-1">
                  Available broadband plans
                </h2>
              </div>
              {selectedAddress && (
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <svg
                    className="w-4 h-4 text-[#c61b7f] shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="font-medium">
                    {selectedAddress.display},{" "}
                    {[selectedAddress.city, selectedAddress.postcode]
                      .filter(Boolean)
                      .join(", ")}
                  </span>
                </div>
              )}
            </div>

            {/* Contract toggle */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 mr-1">
                Contract:
              </span>
              {(
                Object.entries(CONTRACT_LABELS) as [ContractDuration, string][]
              ).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => handleContractChange(key)}
                  disabled={loadingPlans}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 disabled:opacity-50 ${
                    contractType === key
                      ? "bg-[#c61b7f] text-white shadow-md shadow-pink-500/25"
                      : "bg-white border border-gray-200 text-gray-600 hover:border-[#c61b7f] hover:text-[#c61b7f] dark:bg-[#181c25] dark:border-white/10 dark:text-gray-300 dark:hover:border-[#c61b7f] dark:hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Loading */}
            {loadingPlans && (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <Spinner size={36} />
                <p className="text-gray-500 dark:text-gray-300 font-medium">
                  Checking available plans…
                </p>
              </div>
            )}

            {/* Error */}
            {!loadingPlans && error && (
              <p className="text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm font-medium">
                {error}
              </p>
            )}

            {/* Plans content — only Zoiko-matched plans shown */}
            {!loadingPlans && !error && matchedPlans.length > 0 && (
              <>
                {/* Pre-selected plan status banner */}
                {hasPreselection && (
                  <>
                    {selectedAvailable ? (
                      <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 dark:border-emerald-700/50 dark:bg-emerald-900/20">
                        <svg
                          className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="text-sm text-emerald-800 dark:text-emerald-200">
                          <span className="font-bold">Great news!</span>{" "}
                          {preName ?? "Your selected plan"} is available at this
                          address.
                        </p>
                      </div>
                    ) : (
                      <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 dark:border-amber-700/50 dark:bg-amber-900/20">
                        <svg
                          className="w-5 h-5 text-amber-600 shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="text-sm text-amber-800 dark:text-amber-200">
                          <span className="font-bold">
                            {preName ?? "Your selected plan"} isn&apos;t
                            available
                          </span>{" "}
                          at this address
                          {selectedUnavailable ? "" : " for this contract"}.
                          Here are the plans you can get instead.
                        </p>
                      </div>
                    )}
                  </>
                )}

                {/* Selected plan (available) — shown first, highlighted */}
                {selectedAvailable && (
                  <section>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                      Your selected plan
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      <PlanCard
                        key={selectedAvailable.id}
                        item={selectedAvailable}
                        contractType={contractType}
                        selectedAddress={selectedAddress}
                        highlight
                      />
                    </div>
                  </section>
                )}

                {/* Other available plans */}
                {otherAvailablePlans.length > 0 && (
                  <section>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                      {selectedAvailable
                        ? `Other plans available at your address`
                        : `${otherAvailablePlans.length} plan${
                            otherAvailablePlans.length !== 1 ? "s" : ""
                          } available`}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {otherAvailablePlans.map((item) => (
                        <PlanCard
                          key={item.id}
                          item={item}
                          contractType={contractType}
                          selectedAddress={selectedAddress}
                        />
                      ))}
                    </div>
                  </section>
                )}

                {/* Nothing available at all */}
                {availablePlans.length === 0 && (
                  <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#181c25] px-5 py-8 text-center">
                    <p className="font-bold text-gray-800 dark:text-white">
                      No plans available at this address
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">
                      None of our broadband plans can be installed here for the
                      selected contract. Try another address or contract length.
                    </p>
                  </div>
                )}

                {/* Not available at this address (muted) */}
                {unavailablePlans.length > 0 && (
                  <section>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                      Not available at your address
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {unavailablePlans.map((item) => (
                        <div key={item.id} className="relative">
                          <div className="absolute inset-0 bg-white/70 dark:bg-[#0f1117]/70 z-10 rounded-2xl flex items-center justify-center">
                            <span className="text-xs font-semibold bg-red-50 text-red-600 border border-red-200 px-3 py-1.5 rounded-full shadow-sm">
                              Not available at your address
                            </span>
                          </div>
                          <div className="opacity-50 pointer-events-none">
                            <PlanCard
                              item={item}
                              contractType={contractType}
                              selectedAddress={selectedAddress}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </>
            )}

            {/* No matched plans at all */}
            {!loadingPlans && !error && matchedPlans.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-white/10 flex items-center justify-center text-3xl">
                  📡
                </div>
                <div>
                  <p className="font-bold text-gray-800 dark:text-white text-lg">
                    No plans found
                  </p>
                  <p className="text-gray-500 dark:text-gray-300 text-sm mt-1 max-w-xs mx-auto">
                    We couldn&apos;t find any broadband plans for this address
                    and contract duration.
                  </p>
                </div>
                <button
                  onClick={() => setStep("select")}
                  className="mt-2 px-5 py-2.5 rounded-xl border-2 border-[#c61b7f] text-[#c61b7f]
                    font-semibold text-sm hover:bg-[#c61b7f] hover:text-white transition-all duration-200"
                >
                  Try a different address
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

// ─── Page (Suspense boundary required for useSearchParams) ──────────────────────

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#faf6fb] dark:bg-[#0f1117] flex items-center justify-center">
          <Spinner size={36} />
        </div>
      }
    >
      <AvailabilityChecker />
    </Suspense>
  );
}