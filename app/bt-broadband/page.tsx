"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import {
  type FormattedAddress,
  type ProductCharacteristic,
  type ZoikoVariation,
  type ZoikoPlan,
  type BTProductOfferingQualificationItem,
} from "@/app/context/CartContext";

const PLANS_API_URL =
  "https://api.zoikotelecom.com/api/v1/plans/category/broadband-plans/";

// ---- API response types (marketing list) ----
type Duration = "24" | "18" | "12";

interface PlanVariation {
  id: number;
  label: string;
  duration_value: number;
  duration_unit: string;
  duration_display: string;
  price: string;
  sale_price: string | null;
  bt_plan_id: string;
  effective_bt_plan_id: string;
  is_default: boolean;
  is_active: boolean;
  sort_order: number;
}

interface PlanFeature {
  id: number;
  text: string;
  sort_order: number;
}

interface Plan {
  id: number;
  name: string;
  slug: string;
  bt_plan_id: string;
  bt_plan_name: string;
  description: string;
  download_speed: number | null;
  upload_speed: number | null;
  speed_display: string;
  is_active: boolean;
  is_featured: boolean;
  sort_order: number;
  features: PlanFeature[];
  variations: PlanVariation[];
}

interface PlansApiResponse {
  count: number;
  results: Plan[];
}

// Fallback features shown only if a plan has none configured yet.
const fallbackFeatures = [
  "No Long-Term Contracts",
  "Reliable Fibre Connection",
  "24/7 Customer Support",
];

// Pick the variation that matches the selected contract length.
const getVariation = (plan: Plan, duration: Duration) =>
  plan.variations.find((v) => String(v.duration_value) === duration);

// Format a variation's price as "£45.99/m" (uses sale_price when present).
const formatPrice = (variation?: PlanVariation) => {
  if (!variation) return "—";
  const value = variation.sale_price ?? variation.price;
  return `£${value}/m`;
};

const durationTabs = [
  { label: "24 Months Plan", value: "24" },
  { label: "18 Months Plan", value: "18" },
  { label: "12 Months Plan", value: "12" },
];

const benefits = [
  {
    title: "36 Month Contract",
    description:
      "Enjoy a fixed monthly rate that never goes up - a rare and valuable guarantee for a plan.",
  },
  {
    title: "18 Month Contract",
    description:
      "Lock in your broadband for just 18 months, with period promotions (also open your options).",
  },
  {
    title: "24 Months Contract",
    description:
      "Reliable long-term commitment period, minimizing your broadband service at a standard rate.",
  },
];

const benefits2 = [
  {
    title: "Refer a Friend",
    description:
      "Earn £50 credit when you refer a friend to Zoiko Telecom. Your friend will also receive a £50 discount on their first month’s bill.",
    icon: "/Images/BTBroadband/refer.png",
  },
  {
    title: "Price Lock Guarantee",
    description:
      "Enjoy guaranteed prices with no mid-contract price increases. If we introduce only one login by emailing a valid student ID.",
    icon: "/Images/BTBroadband/lock.png",
  },
  {
    title: "Loyalty Bonus",
    description:
      "Existing customers receive a 5% discount on all our monthly line access charges on any orders if months.",
    icon: "/Images/BTBroadband/bonus.png",
  },
];

const features = [
  {
    icon: "/Images/BTBroadband/download.png",
    title: "Unlimited Downloads",
    desc: "Enjoy unrestricted browsing, streaming and downloading with no data caps or limitations.",
  },
  {
    icon: "/Images/BTBroadband/support.png",
    title: "24/7 Support",
    desc: "Our dedicated support team is available round-the-clock to assist you with any concerns or queries.",
  },
  {
    icon: "/Images/BTBroadband/phone.png",
    title: "Easy Setup",
    desc: "Quick and easy installation process that gets you online in no time.",
  },
];

// ════════════════════════════════════════════════════════════════════════════
//  Availability modal — postcode → address → checks if the SELECTED plan is
//  present in BT's qualified plans for that address. Shows the selected plan
//  when available, plus the other available plans (or just the alternatives
//  when the selected plan can't be installed there).
// ════════════════════════════════════════════════════════════════════════════

type ApiPOQRow = BTProductOfferingQualificationItem & {
  zoikoPlan?: ZoikoPlan | null;
  bt_plan_id?: string | null;
};

type ContractDuration = "12-months" | "18-months" | "24-months";

interface SelectedPlan {
  name: string;
  /** BT productOffering id used to match against qualified plans */
  btid: string | null;
  duration: Duration;
}

function getChar(
  chars: ProductCharacteristic[] | undefined,
  name: string,
): string {
  return chars?.find((c) => c.name === name)?.value ?? "";
}

function formatDownload(download: string): string {
  const n = parseFloat(download);
  if (!n) return download;
  if (n < 1) return `${Math.round(n * 1000)}Kbps`;
  return `${download}Mbps`;
}

function formatUpload(upload: string): string {
  const n = parseFloat(upload);
  if (!n) return upload;
  if (n < 1) return `${Math.round(n * 1000)}Kbps upload`;
  return `${upload}Mbps upload`;
}

function durationToContract(value: Duration): ContractDuration {
  if (value === "12") return "12-months";
  if (value === "18") return "18-months";
  return "24-months";
}

const CONTRACT_LABELS: Record<ContractDuration, string> = {
  "24-months": "24 months",
  "18-months": "18 months",
  "12-months": "12 months",
};

function getVariationForContract(
  zoikoPlan: ZoikoPlan | null | undefined,
  contractType: ContractDuration,
): ZoikoVariation | null {
  if (!zoikoPlan) return null;
  const months = parseInt(contractType);
  return (
    zoikoPlan.variations.find(
      (v) => v.is_active && v.duration_value === months,
    ) ??
    zoikoPlan.variations.find((v) => v.is_active) ??
    null
  );
}

/** Does this BT row correspond to the plan the user picked? */
function makeIsSelected(selected: SelectedPlan) {
  const btid = selected.btid;
  const name = selected.name;
  return (item: ApiPOQRow): boolean => {
    const zp = item.zoikoPlan;
    if (!zp) return false;
    if (btid) {
      if (zp.bt_plan_id === btid) return true;
      if (
        zp.variations?.some(
          (v) => v.effective_bt_plan_id === btid || v.bt_plan_id === btid,
        )
      ) {
        return true;
      }
    }
    if (name && zp.name && zp.name.toLowerCase() === name.toLowerCase()) {
      return true;
    }
    return false;
  };
}

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

interface PlanCardProps {
  item: ApiPOQRow;
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

  const zoikoPlan = item.zoikoPlan!;
  const variation = getVariationForContract(zoikoPlan, contractType);
  const planName = zoikoPlan.name;
  const price = variation?.sale_price ?? variation?.price ?? null;
  const contractMonths = parseInt(contractType);

  // Write a broadband line into the shared localStorage cart (the checkout
  // reads localStorage["cart"] and normalises planType === "broadband"). We
  // also keep the BT enrichment (productOfferingQualificationItem / zoikoPlan /
  // zoikoVariation / bt_plan_id) on the raw item because /process-order reads
  // the raw cart from localStorage at order time.
  const handleAddToCart = () => {
    const {
      zoikoPlan: _strippedZoikoPlan,
      bt_plan_id: _strippedBtPlanId,
      ...productOfferingQualificationItem
    } = item;
    void _strippedZoikoPlan;
    void _strippedBtPlanId;

    const speedNum = parseFloat(download);

    const rawItem = {
      id: variation?.id ?? item.id,
      planType: "broadband",
      name: planName,
      planName,
      price: parseFloat(price ?? "0"),
      planDuration: `${contractMonths} Months`,
      // Stored bare; the checkout appends " Mbps". Omit when not a real number.
      speed: download && speedNum ? download : undefined,
      description: `${planName} broadband — up to ${formatDownload(
        download,
      )} down / ${formatUpload(upload)}.`,
      address: selectedAddress ?? undefined,
      category: "broadband",
      bt_plan_id:
        variation?.effective_bt_plan_id ??
        variation?.bt_plan_id ??
        zoikoPlan.bt_plan_id ??
        null,
      // — BT / Zoiko enrichment (needed by /process-order) —
      productOfferingQualificationItem,
      zoikoPlan,
      zoikoVariation: variation,
    };

    try {
      const existing = JSON.parse(localStorage.getItem("cart") ?? "[]");
      const cartArr = Array.isArray(existing) ? existing : [];
      cartArr.push(rawItem);
      localStorage.setItem("cart", JSON.stringify(cartArr));
    } catch {
      localStorage.setItem("cart", JSON.stringify([rawItem]));
    }

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

      <div className="px-5 pt-6 pb-4 flex items-start justify-between gap-4">
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

      <div className="border-t border-gray-100 dark:border-white/10 mx-5" />

      <div className="px-5 pt-3 pb-2">
        <h3 className="text-base font-bold text-[#c61b7f]">{planName}</h3>
      </div>

      <div className="px-5 pb-4 mt-1">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-black">{contractMonths}-Months</span> contract
        </p>
      </div>

      <div className="px-5 pb-5 mt-auto">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart();
          }}
          className="w-full py-3 rounded-xl bg-[#c61b7f] hover:bg-[#b21771] active:scale-95
            text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-md shadow-pink-500/20"
        >
          Checkout now
        </button>
      </div>
    </div>
  );
}

interface AvailabilityModalProps {
  open: boolean;
  onClose: () => void;
  selected: SelectedPlan | null;
}

function AvailabilityModal({ open, onClose, selected }: AvailabilityModalProps) {
  const [step, setStep] = useState<"search" | "select" | "result">("search");
  const [postcode, setPostcode] = useState("");
  const [addresses, setAddresses] = useState<FormattedAddress[]>([]);
  const [selectedAddress, setSelectedAddress] =
    useState<FormattedAddress | null>(null);
  const [contractType, setContractType] = useState<ContractDuration>(
    durationToContract(selected?.duration ?? "24"),
  );
  const [plans, setPlans] = useState<ApiPOQRow[]>([]);
  const [loadingAddresses, setLoadingAddresses] = useState(false);
  const [loadingPlans, setLoadingPlans] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  // Reset whenever the modal is (re)opened for a plan.
  useEffect(() => {
    if (open) {
      setStep("search");
      setPostcode("");
      setAddresses([]);
      setSelectedAddress(null);
      setPlans([]);
      setError(null);
      setContractType(durationToContract(selected?.duration ?? "24"));
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open, selected]);

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

  const handleSelectAddress = useCallback(
    async (address: FormattedAddress, contract: ContractDuration) => {
      setSelectedAddress(address);
      setError(null);
      setLoadingPlans(true);
      setPlans([]);
      setStep("result");

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
      if (selectedAddress) handleSelectAddress(selectedAddress, contract);
    },
    [selectedAddress, handleSelectAddress],
  );

  if (!open || !selected) return null;

  const isSelected = makeIsSelected(selected);

  const matchedPlans = plans.filter(
    (p) => p.zoikoPlan !== null && p.zoikoPlan !== undefined,
  );
  const availablePlans = matchedPlans.filter(
    (p) =>
      getChar(p.product?.productCharacteristic, "AVAILABILITY_FLAG") === "Y",
  );

  const selectedAvailable = availablePlans.find(isSelected) ?? null;
  const otherAvailablePlans = availablePlans.filter(
    (p) => p !== selectedAvailable,
  );

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm px-4 sm:px-6 pt-[50px] pb-10"
      onClick={onClose}
    >
      <div
        className="relative w-full md:w-[60%] mb-6 rounded-3xl bg-[#faf6fb] dark:bg-[#0f1117] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 rounded-t-3xl border-b border-gray-100 dark:border-white/10 bg-white dark:bg-[#181c25] px-5 sm:px-6 py-4">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-[#7B2983] flex items-center justify-center shrink-0">
              <span className="text-white text-[10px] font-black tracking-tight">
                ZT
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-widest text-gray-400">
                Check availability
              </p>
              <p className="font-bold text-gray-900 dark:text-white text-sm truncate">
                {selected.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <nav className="hidden sm:flex items-center gap-1 text-xs font-medium">
              {(
                [
                  { key: "search", label: "Postcode" },
                  { key: "select", label: "Address" },
                  { key: "result", label: "Result" },
                ] as const
              ).map(({ key, label }, i, arr) => (
                <span key={key} className="flex items-center gap-1">
                  <span
                    className={`px-2.5 py-1 rounded-full transition-colors ${
                      step === key
                        ? "bg-[#c61b7f] text-white"
                        : ["search", "select", "result"].indexOf(step) >
                            ["search", "select", "result"].indexOf(key)
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
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-5 sm:px-6 py-6">
          {/* STEP 1: Postcode */}
          {step === "search" && (
            <div className="flex flex-col items-center text-center gap-6 py-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight mb-2">
                  Is <span className="text-[#c61b7f]">{selected.name}</span>{" "}
                  available?
                </h2>
                <p className="text-gray-500 dark:text-gray-300 max-w-md mx-auto">
                  Enter your postcode and we&apos;ll check if your selected plan
                  can be installed at your address.
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
                    placeholder:tracking-normal placeholder:font-normal placeholder:text-gray-400 transition-colors disabled:opacity-50"
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
                    "Check postcode →"
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

          {/* STEP 2: Address */}
          {step === "select" && (
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
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
                <div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white">
                    Select your address
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 text-sm">
                    {addresses.length} address
                    {addresses.length !== 1 ? "es" : ""} found for{" "}
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      {postcode}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 max-h-[55vh] overflow-y-auto pr-1">
                {addresses.map((addr, index) => (
                  <button
                    key={addr.id || addr.uprn || `${addr.display}-${index}`}
                    onClick={() => handleSelectAddress(addr, contractType)}
                    className="w-full text-left bg-white border border-gray-200 hover:border-[#c61b7f]
                      dark:bg-[#181c25] dark:border-white/10 dark:hover:border-[#c61b7f] rounded-xl px-5 py-4 transition-all duration-200 hover:shadow-md group"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 dark:text-white group-hover:text-[#c61b7f] transition-colors truncate">
                          {addr.display}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-300 mt-0.5">
                          {[addr.city, addr.postcode]
                            .filter(Boolean)
                            .join(", ")}
                        </p>
                      </div>
                      <span className="text-[#c61b7f] opacity-0 group-hover:opacity-100 transition-opacity text-lg shrink-0">
                        →
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {error && (
                <p className="text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm font-medium">
                  {error}
                </p>
              )}
            </div>
          )}

          {/* STEP 3: Result */}
          {step === "result" && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
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
                {selectedAddress && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1.5 min-w-0">
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
                    <span className="truncate font-medium">
                      {selectedAddress.display},{" "}
                      {[selectedAddress.city, selectedAddress.postcode]
                        .filter(Boolean)
                        .join(", ")}
                    </span>
                  </p>
                )}
              </div>

              {/* Contract toggle */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 mr-1">
                  Contract:
                </span>
                {(
                  Object.entries(CONTRACT_LABELS) as [
                    ContractDuration,
                    string,
                  ][]
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
                <div className="flex flex-col items-center justify-center py-16 gap-4">
                  <Spinner size={36} />
                  <p className="text-gray-500 dark:text-gray-300 font-medium">
                    Checking your selected plan…
                  </p>
                </div>
              )}

              {/* Error */}
              {!loadingPlans && error && (
                <p className="text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm font-medium">
                  {error}
                </p>
              )}

              {/* Plans */}
              {!loadingPlans && !error && (
                <>
                  {matchedPlans.length > 0 ? (
                    <>
                      {/* Status banner about the SELECTED plan */}
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
                            {selected.name} is available at this address.
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
                              {selected.name} isn&apos;t available
                            </span>{" "}
                            at this address. Here are the plans you can get
                            instead.
                          </p>
                        </div>
                      )}

                      {/* Selected plan (highlighted) */}
                      {/* All available plans — selected first & highlighted */}
                      {availablePlans.length > 0 && (
                        <section>
                          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                            {selectedAvailable
                              ? "Plans available at your address"
                              : `${availablePlans.length} plan${
                                  availablePlans.length !== 1 ? "s" : ""
                                } available at your address`}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {(selectedAvailable
                              ? [selectedAvailable, ...otherAvailablePlans]
                              : availablePlans
                            ).map((item) => (
                              <PlanCard
                                key={item.id}
                                item={item}
                                contractType={contractType}
                                selectedAddress={selectedAddress}
                                highlight={item === selectedAvailable}
                              />
                            ))}
                          </div>
                        </section>
                      )}

                      {/* Nothing available */}
                      {availablePlans.length === 0 && (
                        <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#181c25] px-5 py-8 text-center">
                          <p className="font-bold text-gray-800 dark:text-white">
                            No plans available at this address
                          </p>
                          <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">
                            None of our broadband plans can be installed here
                            for this contract. Try another address or contract
                            length.
                          </p>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-white/10 flex items-center justify-center text-3xl">
                        📡
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 dark:text-white text-lg">
                          No plans found
                        </p>
                        <p className="text-gray-500 dark:text-gray-300 text-sm mt-1 max-w-xs mx-auto">
                          We couldn&apos;t find any broadband plans for this
                          address and contract.
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
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
//  Page
// ════════════════════════════════════════════════════════════════════════════

export default function Page() {
  const [selectedDuration, setSelectedDuration] = useState<Duration>("24");

  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Availability modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan | null>(null);

  const openAvailability = (plan: Plan, variation?: PlanVariation) => {
    const btid =
      variation?.effective_bt_plan_id ??
      variation?.bt_plan_id ??
      plan.bt_plan_id ??
      null;
    setSelectedPlan({ name: plan.name, btid, duration: selectedDuration });
    setModalOpen(true);
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchPlans = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(PLANS_API_URL, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        const data: PlansApiResponse = await res.json();

        const activePlans = (data.results ?? [])
          .filter((p) => p.is_active)
          .sort((a, b) => a.sort_order - b.sort_order);

        setPlans(activePlans);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError("Unable to load broadband plans. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
    return () => controller.abort();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#7B2983] dark:bg-[#3E1542] py-8 md:py-12">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-white text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            High-Speed Broadband
          </h1>

          <p className="mt-4 font-semibold text-white text-lg md:text-2xl">
            Only Deals from Zoiko Telecom
          </p>

          <p className="mt-6 mx-auto max-w-4xl text-sm leading-relaxed text-white/90 sm:text-base md:text-lg">
            Discover Zoiko Telecom's extensive range of high-speed broadband only
            packages, designed to cater to every Residences Connectivity needs.
            Enjoy lightning-fast fibre optic speeds, unlimited downloads, and
            reliable connections that keep you connected to the digital world
            24/7.
          </p>
        </div>
      </section>

      {/* Plans section */}
      <section className="bg-[#f8f6f8] dark:bg-[#0f1117] py-5 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d2b4f] dark:text-white">
              Broadband Only Packages
            </h2>
          </div>

          {/* Duration Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {durationTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedDuration(tab.value as Duration)}
                className={`rounded-full border px-5 py-2.5 text-sm md:text-base font-semibold transition-all duration-300 ${
                  selectedDuration === tab.value
                    ? "bg-[#c61b7f] border-[#c61b7f] text-white shadow-lg shadow-pink-500/20"
                    : "bg-white dark:bg-[#181c25] border-gray-300 dark:border-white/10 text-[#1d2b4f] dark:text-gray-300 hover:border-pink-500"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Loading state */}
          {loading && (
            <p className="mt-14 text-center text-[#5f6470] dark:text-gray-300">
              Loading plans…
            </p>
          )}

          {/* Error state */}
          {!loading && error && (
            <p className="mt-14 text-center text-red-500">{error}</p>
          )}

          {/* Empty state */}
          {!loading && !error && plans.length === 0 && (
            <p className="mt-14 text-center text-[#5f6470] dark:text-gray-300">
              No broadband plans available right now.
            </p>
          )}

          {/* Plans */}
          {!loading && !error && plans.length > 0 && (
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {plans.map((plan) => {
                const variation = getVariation(plan, selectedDuration);
                return (
                  <div
                    key={plan.id}
                    className={`relative rounded-[28px] border bg-white dark:bg-[#181c25] border-[#dfe3ea] dark:border-white/10 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/10 ${
                      plan.is_featured ? "ring-2 ring-pink-500 scale-[1.02]" : ""
                    }`}
                  >
                    {/* Badge */}
                    {plan.is_featured && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="rounded-full bg-[#c61b7f] px-4 py-1.5 text-[10px] md:text-xs font-semibold text-white shadow-lg">
                          MOST POPULAR
                        </span>
                      </div>
                    )}

                    {/* Top Text */}
                    <div className="text-center">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8d8d9c]">
                        Powered By
                      </p>
                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8d8d9c]">
                        EE'S AWARD-WINNING NETWORK
                      </p>

                      {/* Plan Name */}
                      <h3 className="mt-8 text-xl sm:text-2xl md:text-3xl font-bold text-[#c61b7f]">
                        {plan.name}
                      </h3>

                      {/* SPEED */}
                      <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-[#8d8d9c]">
                        SPEED
                      </p>
                      <h2 className="mt-2 text-2xl md:text-3xl lg:text-5xl font-extrabold text-[#c61b7f] break-words">
                        {plan.speed_display || "—"}
                      </h2>

                      {/* Contract length */}
                      <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[#8d8d9c]">
                        {variation?.duration_display ??
                          `${selectedDuration} Month(s)`}
                      </p>

                      {/* Price */}
                      <p className="mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1d2b4f] dark:text-white">
                        {formatPrice(variation)}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mt-8 space-y-4">
                      {(plan.features.length > 0
                        ? plan.features.map((f) => ({
                            key: String(f.id),
                            text: f.text,
                          }))
                        : fallbackFeatures.map((text, i) => ({
                            key: `fb-${i}`,
                            text,
                          }))
                      ).map((feature) => (
                        <div
                          key={feature.key}
                          className="flex items-start gap-3 border-b border-[#eceef3] dark:border-white/10 pb-3"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            className="mt-1 h-4 w-4 flex-shrink-0 text-[#c61b7f]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <p className="text-sm leading-relaxed text-[#5f6470] dark:text-gray-300">
                            {feature.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* CTA — select this plan, then check the postcode */}
                    <button
                      onClick={() => openAvailability(plan, variation)}
                      className="mt-8 w-full rounded-full bg-[#c61b7f] py-2 text-sm md:text-base md:py-3 font-semibold text-white transition-all duration-300 hover:bg-[#b21771] hover:shadow-lg hover:shadow-pink-500/20"
                    >
                      Buy Now
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Features section */}
      <section className="bg-[#f8f6f8] dark:bg-[#0f1117] py-5 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative rounded-[28px] border bg-white dark:bg-[#181c25] border-[#dfe3ea] dark:border-white/10 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10"
              >
                <div className="text-center">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-colors group-hover:bg-[#C12172]/20 dark:bg-pink-400/10 dark:group-hover:bg-pink-400/20">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={64}
                      height={64}
                      className="h-16 w-16 object-contain"
                    />
                  </div>

                  <h3 className="mt-2 text-lg md:text-2xl font-bold text-[#c61b7f]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-base md:text-lg leading-relaxed text-[#8d8d9c] dark:text-gray-300">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our guarantees */}
      <section className="bg-[#c61b7f] dark:bg-[#3E1542] py-8 md:py-16">
        <div className="mx-auto max-w-[1320px] px-5 md:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/Images/BTBroadband/speed-test.png"
                  alt="Speed Test"
                  width={500}
                  height={300}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </div>

            {/* Right Image */}
            <div>
              <h2 className="text-2xl font-bold text-white dark:text-white sm:text-3xl lg:text-4xl">
                Our Guarantees
              </h2>
              <div className="mt-8 space-y-5">
                {benefits.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#c61b7f] dark:text-[#c61b7f]">
                      <FaCheck className="text-sm" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-xl font-semibold text-white dark:text-white">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm md:text-base text-white dark:text-white">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#f6f6f7] dark:bg-[#0f1117] py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits2.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 rounded-[14px] border border-[#d8dee8] dark:border-white/10 bg-white dark:bg-[#181c25] px-5 py-5 md:py-6 transition-all duration-300 hover:border-[#7B2983]"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-[#7B2983]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-[20px] font-semibold leading-tight text-[#7B2983] dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-7 text-[#6b7280] dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability modal (postcode check for the selected plan) */}
      <AvailabilityModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        selected={selectedPlan}
      />
    </>
  );
}