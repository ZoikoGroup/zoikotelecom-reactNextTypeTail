"use client";

import { useState, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormattedAddress {
  id: string;
  display: string;
  streetNr: string;
  streetName: string;
  city: string;
  postcode: string;
  districtCode: string;
  uprn: string;
  exchangeGroupCode: string;
  qualifier: string;
}

interface ProductCharacteristic {
  name: string;
  value: string;
}

interface BTProductOfferingQualificationItem {
  id: string;
  state?: string;
  product: {
    productOffering: { id: string };
    productCharacteristic?: ProductCharacteristic[];
    place?: { id?: string; districtId?: string; role?: string }[];
  };
  zoikoPlan?: ZoikoPlan | null;
  bt_plan_id?: string | null;
}

interface ZoikoPlan {
  id: number;
  name: string;
  slug: string;
  bt_plan_id: string;
  bt_plan_name: string;
  description: string;
  variations: {
    id: number;
    label: string;
    price: string;
    sale_price: string | null;
    duration_display: string;
    effective_bt_plan_id: string;
  }[];
}

interface TimeSlot {
  id?: string;
  start: string;
  end: string;
}

interface BookedAppointment {
  id: string;
  start: string;
  end: string;
}

type Step = "postcode" | "address" | "lines" | "appointment" | "confirmed";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function readChar(chars: ProductCharacteristic[] | undefined, name: string): string {
  return chars?.find((c) => c.name.toLowerCase() === name.toLowerCase())?.value ?? "";
}

function techLabel(raw: string): string {
  const map: Record<string, string> = {
    FTTP: "Full Fibre (FTTP)",
    SOGEA: "SOGEA",
    FTTC: "Fibre to Cabinet (FTTC)",
    SOADSL: "SOADSL",
    ADSL: "ADSL",
  };
  return map[raw.toUpperCase()] ?? raw;
}

function techBadgeColor(raw: string): string {
  switch (raw.toUpperCase()) {
    case "FTTP":   return "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300";
    case "SOGEA":  return "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300";
    case "FTTC":   return "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300";
    default:       return "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300";
  }
}

function mapToAppointmentTech(rawTech: string, isNewLine: boolean): string {
  const t = rawTech.toUpperCase();
  if (t === "FTTP")   return "FTTP";
  if (t === "SOGEA")  return isNewLine ? "SOGEA New Line" : "SOGEA Existing Line";
  if (t === "FTTC")   return "FTTC";
  if (t === "SOADSL") return "SOADSL";
  return isNewLine ? "FTTP" : "SOGEA Existing Line";
}

function getProductSpec(appointmentTech: string): { id: string; family: string } {
  if (/generic ethernet|mpf/i.test(appointmentTech)) return { id: "Ethernet", family: "Ethernet" };
  return { id: "BB1", family: "BB1hub" };
}

function formatDateTime(iso: string): string {
  try {
    return new Date(iso).toLocaleString("en-GB", {
      weekday: "long", day: "numeric", month: "long", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });
  } catch { return iso; }
}

// ─── UI atoms ─────────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <svg className="animate-spin w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
    </svg>
  );
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p role="alert" className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
    <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
    {msg}
  </p>;
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 sm:p-8 ${className}`}>
      {children}
    </section>
  );
}

function SectionHeading({ step, title, sub }: { step: number; title: string; sub?: string }) {
  return (
    <div className="mb-6">
      <p className="text-[11px] font-bold text-[#f5c241] uppercase tracking-widest mb-1">Step {step}</p>
      <h2 className="text-xl font-bold text-[#10446C] dark:text-white">{title}</h2>
      {sub && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{sub}</p>}
    </div>
  );
}

function RadioDot({ selected }: { selected: boolean }) {
  return (
    <div className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors duration-150
      ${selected ? "border-[#10446C] bg-[#10446C] dark:border-[#f5c241] dark:bg-[#f5c241]" : "border-gray-300 dark:border-gray-600"}`}>
      {selected && <div className="w-2 h-2 rounded-full bg-white dark:bg-[#10446C]" />}
    </div>
  );
}

function SelectableRow({
  selected, onClick, disabled = false, children,
}: {
  selected: boolean; onClick: () => void; disabled?: boolean; children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`w-full text-left rounded-xl border-2 px-4 py-3.5 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c241] disabled:opacity-50 disabled:cursor-not-allowed
        ${selected
          ? "border-[#10446C] bg-[#10446C]/5 dark:bg-[#10446C]/25"
          : "border-gray-200 dark:border-gray-700 hover:border-[#10446C]/40 dark:hover:border-[#10446C]/50"
        }`}
    >
      {children}
    </button>
  );
}

// Progress bar
function StepBar({ current }: { current: Step }) {
  const steps: { key: Step; label: string }[] = [
    { key: "postcode",    label: "Postcode" },
    { key: "address",     label: "Address" },
    { key: "lines",       label: "Lines" },
    { key: "appointment", label: "Slot" },
    { key: "confirmed",   label: "Done" },
  ];
  const idx = steps.findIndex((s) => s.key === current);
  return (
    <div className="flex items-start justify-center gap-0 max-w-sm mx-auto mt-7">
      {steps.map((s, i) => {
        const done   = i < idx;
        const active = i === idx;
        return (
          <div key={s.key} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-all duration-300
                ${done ? "bg-[#f5c241] text-[#10446C]" : active ? "bg-[#10446C] text-white ring-2 ring-[#f5c241] ring-offset-1 ring-offset-[#10446C]" : "bg-white/20 text-white/50"}`}>
                {done
                  ? <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  : i + 1}
              </div>
              <span className={`text-[9px] mt-1 whitespace-nowrap font-medium ${active ? "text-white" : "text-white/40"}`}>{s.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-1 mb-4 rounded transition-colors duration-500 ${done ? "bg-[#f5c241]" : "bg-white/20"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CheckAvailabilityPage() {
  const [step, setStep] = useState<Step>("postcode");

  // Step 1
  const [postcode, setPostcode]             = useState("");
  const [postcodeError, setPostcodeError]   = useState("");
  const [loadingAddresses, setLoadingAddresses] = useState(false);
  const [addressApiError, setAddressApiError]   = useState("");

  // Step 2
  const [addresses, setAddresses]               = useState<FormattedAddress[]>([]);
  const [selectedAddress, setSelectedAddress]   = useState<FormattedAddress | null>(null);
  const [loadingLines, setLoadingLines]         = useState(false);
  const [linesApiError, setLinesApiError]       = useState("");

  // Step 3
  const [lines, setLines]                       = useState<BTProductOfferingQualificationItem[]>([]);
  const [selectedLine, setSelectedLine]         = useState<BTProductOfferingQualificationItem | null>(null);
  const [loadingSlots, setLoadingSlots]         = useState(false);
  const [slotsApiError, setSlotsApiError]       = useState("");

  // Step 4
  const [slots, setSlots]                       = useState<TimeSlot[]>([]);
  const [selectedSlot, setSelectedSlot]         = useState<TimeSlot | null>(null);
  const [bookingAppt, setBookingAppt]           = useState(false);
  const [bookingError, setBookingError]         = useState("");

  // Step 5
  const [bookedAppt, setBookedAppt]             = useState<BookedAppointment | null>(null);

  const addressRef  = useRef<HTMLDivElement>(null);
  const linesRef    = useRef<HTMLDivElement>(null);
  const apptRef     = useRef<HTMLDivElement>(null);
  const confirmedRef = useRef<HTMLDivElement>(null);

  function scrollTo(ref: React.RefObject<HTMLDivElement | null>) {
    setTimeout(() => ref.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  }

  // ── 1. Postcode → addresses ──────────────────────────────────────────────
  async function handlePostcodeSearch(e: React.FormEvent) {
    e.preventDefault();
    const pc = postcode.trim().toUpperCase().replace(/\s+/, " ");
    if (!pc) { setPostcodeError("Please enter your postcode"); return; }
    if (!/^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/.test(pc)) {
      setPostcodeError("Enter a valid UK postcode (e.g. SW1A 1AA)");
      return;
    }
    setPostcodeError("");
    setAddressApiError("");
    setLoadingAddresses(true);
    // Reset downstream
    setAddresses([]); setSelectedAddress(null);
    setLines([]);     setSelectedLine(null);
    setSlots([]);     setSelectedSlot(null);
    setBookedAppt(null);

    try {
      const res  = await fetch("/api/BritishTelecom/search-address", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postcode: pc }),
      });
      const data = await res.json();
      if (!data.success || !data.addresses?.length) {
        setAddressApiError(data.message ?? "No addresses found for this postcode.");
      } else {
        setAddresses(data.addresses);
        setStep("address");
        scrollTo(addressRef);
      }
    } catch {
      setAddressApiError("Network error — please try again.");
    } finally {
      setLoadingAddresses(false);
    }
  }

  // ── 2. Address → available lines ─────────────────────────────────────────
  async function handleSelectAddress(addr: FormattedAddress) {
    setSelectedAddress(addr);
    setLines([]); setSelectedLine(null);
    setSlots([]); setSelectedSlot(null);
    setBookedAppt(null);
    setLinesApiError("");
    setLoadingLines(true);

    try {
      const res  = await fetch("/api/BritishTelecom/get-products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address_id: addr.id, district_code: addr.districtCode || "NS" }),
      });
      const data = await res.json();
      if (!data.success || !data.productOfferingQualificationItem?.length) {
        setLinesApiError(data.message ?? "No lines available at this address.");
      } else {
        const items: BTProductOfferingQualificationItem[] = data.productOfferingQualificationItem;
        // Prefer matched items; fall back to all if none matched
        const matched = items.filter((i) => i.zoikoPlan !== null);
        setLines(matched.length ? matched : items);
        setStep("lines");
        scrollTo(linesRef);
      }
    } catch {
      setLinesApiError("Network error — please try again.");
    } finally {
      setLoadingLines(false);
    }
  }

  // ── 3. Line → appointment slots ──────────────────────────────────────────
  async function handleSelectLine(line: BTProductOfferingQualificationItem) {
    setSelectedLine(line);
    setSlots([]); setSelectedSlot(null);
    setBookedAppt(null);
    setSlotsApiError("");
    setLoadingSlots(true);

    const rawTech       = readChar(line.product.productCharacteristic, "AccessTechnology") || "FTTP";
    const apptTech      = mapToAppointmentTech(rawTech, true);
    const productSpec   = getProductSpec(apptTech);

    try {
      const res  = await fetch("/api/BritishTelecom/search-slots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          addressId:      selectedAddress!.id,
          appointmentTech: apptTech,
          productSpecId:  productSpec.id,
          productFamily:  productSpec.family,
        }),
      });
      const data = await res.json();
      if (!data.success || !data.slots?.length) {
        setSlotsApiError(data.message ?? "No appointment slots available.");
      } else {
        setSlots(data.slots);
        setStep("appointment");
        scrollTo(apptRef);
      }
    } catch {
      setSlotsApiError("Network error — please try again.");
    } finally {
      setLoadingSlots(false);
    }
  }

  // ── 4. Book appointment ───────────────────────────────────────────────────
  async function handleBookAppointment() {
    if (!selectedSlot || !selectedLine || !selectedAddress) return;
    setBookingAppt(true);
    setBookingError("");

    const rawTech     = readChar(selectedLine.product.productCharacteristic, "AccessTechnology") || "FTTP";
    const apptTech    = mapToAppointmentTech(rawTech, true);
    const productSpec = getProductSpec(apptTech);

    try {
      const res  = await fetch("/api/BritishTelecom/book-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          addressId:       selectedAddress.id,
          appointmentTech: apptTech,
          productSpecId:   productSpec.id,
          productFamily:   productSpec.family,
          startTime:       selectedSlot.start,
          endTime:         selectedSlot.end,
        }),
      });
      const data = await res.json();
      if (!data.success || !data.appointment) {
        setBookingError(data.message ?? "Booking failed — please try another slot.");
      } else {
        setBookedAppt(data.appointment);
        setStep("confirmed");
        scrollTo(confirmedRef);
      }
    } catch {
      setBookingError("Network error — please try again.");
    } finally {
      setBookingAppt(false);
    }
  }

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-24">

      {/* Hero */}
      <section className="bg-[#10446C] dark:bg-gray-900 py-12 px-4 text-center">
        <p className="text-[#f5c241] text-[11px] font-bold uppercase tracking-widest mb-2">Zoiko Broadband</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
          Check Availability & Book Installation
        </h1>
        <p className="mt-3 text-white/70 text-sm sm:text-base max-w-md mx-auto">
          Enter your postcode to find available broadband lines at your address and book an engineer slot.
        </p>
        <StepBar current={step} />
      </section>

      <div className="max-w-2xl mx-auto px-4 mt-10 space-y-8">

        {/* ── Step 1: Postcode ─────────────────────────────────────────── */}
        <Card>
          <SectionHeading
            step={1}
            title="Enter your postcode"
            sub="We'll search for addresses and show what broadband lines are available."
          />
          <form onSubmit={handlePostcodeSearch} noValidate className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label htmlFor="postcode" className="sr-only">Postcode</label>
              <input
                id="postcode"
                type="text"
                inputMode="text"
                autoComplete="postal-code"
                placeholder="e.g. SW1A 1AA"
                value={postcode}
                onChange={(e) => { setPostcode(e.target.value); setPostcodeError(""); setAddressApiError(""); }}
                className={`w-full rounded-xl border px-4 py-3 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10446C] transition
                  ${postcodeError ? "border-red-400" : "border-gray-300 dark:border-gray-600"}`}
              />
              <FieldError msg={postcodeError} />
              <FieldError msg={addressApiError} />
            </div>
            <button
              type="submit"
              disabled={loadingAddresses}
              className="rounded-xl bg-[#10446C] text-white font-semibold px-7 py-3 text-sm hover:bg-[#0d3a5c]
                transition disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none
                focus-visible:ring-2 focus-visible:ring-[#f5c241] flex items-center gap-2 justify-center whitespace-nowrap"
            >
              {loadingAddresses ? <><Spinner />Searching…</> : "Find address"}
            </button>
          </form>
        </Card>

        {/* ── Step 2: Address list ─────────────────────────────────────── */}
        {addresses.length > 0 && (
          <div ref={addressRef}>
            <Card>
              <SectionHeading
                step={2}
                title="Select your address"
                sub={`${addresses.length} address${addresses.length !== 1 ? "es" : ""} found — pick the one you want broadband at.`}
              />

              {loadingLines && (
                <div className="flex items-center gap-2 text-sm text-[#10446C] dark:text-[#f5c241] mb-4 font-medium">
                  <Spinner /> Checking available lines…
                </div>
              )}
              <FieldError msg={linesApiError} />

              <ul className="space-y-2 max-h-72 overflow-y-auto pr-1 -mr-1">
                {addresses.map((addr) => {
                  const isSelected = selectedAddress?.id === addr.id;
                  return (
                    <li key={addr.id}>
                      <SelectableRow
                        selected={isSelected}
                        onClick={() => !loadingLines && handleSelectAddress(addr)}
                        disabled={loadingLines}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-gray-800 dark:text-white truncate">{addr.display}</p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                              {[addr.city, addr.postcode].filter(Boolean).join(", ")}
                            </p>
                          </div>
                          <RadioDot selected={isSelected} />
                        </div>
                      </SelectableRow>
                    </li>
                  );
                })}
              </ul>
            </Card>
          </div>
        )}

        {/* ── Step 3: Available lines ──────────────────────────────────── */}
        {lines.length > 0 && selectedAddress && (
          <div ref={linesRef}>
            <Card>
              <SectionHeading
                step={3}
                title="Available broadband lines"
                sub={`${lines.length} line${lines.length !== 1 ? "s" : ""} available at ${selectedAddress.display}`}
              />

              {loadingSlots && (
                <div className="flex items-center gap-2 text-sm text-[#10446C] dark:text-[#f5c241] mb-4 font-medium">
                  <Spinner /> Finding installation slots…
                </div>
              )}
              <FieldError msg={slotsApiError} />

              <div className="space-y-3">
                {lines.map((item) => {
                  const rawTech  = readChar(item.product.productCharacteristic, "AccessTechnology") || item.product.productOffering.id;
                  const down     = readChar(item.product.productCharacteristic, "productAdvertisedDownloadSpeed");
                  const up       = readChar(item.product.productCharacteristic, "productAdvertisedUploadSpeed");
                  const plan     = item.zoikoPlan;
                  const price    = plan?.variations?.[0]?.sale_price ?? plan?.variations?.[0]?.price;
                  const isSelected = selectedLine?.id === item.id;

                  return (
                    <SelectableRow
                      key={item.id}
                      selected={isSelected}
                      onClick={() => !loadingSlots && handleSelectLine(item)}
                      disabled={loadingSlots}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          {/* Tech badge + name */}
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${techBadgeColor(rawTech)}`}>
                              {techLabel(rawTech)}
                            </span>
                            {plan && (
                              <span className="text-xs font-semibold text-[#10446C] dark:text-[#f5c241]">
                                {plan.name}
                              </span>
                            )}
                          </div>

                          {/* Speed + price */}
                          <div className="mt-2.5 flex items-end gap-5 flex-wrap">
                            {down && (
                              <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-wide leading-none">Download</p>
                                <p className="text-base font-extrabold text-gray-800 dark:text-white mt-0.5">{down}<span className="text-xs font-normal ml-0.5">Mbps</span></p>
                              </div>
                            )}
                            {up && (
                              <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-wide leading-none">Upload</p>
                                <p className="text-base font-extrabold text-gray-800 dark:text-white mt-0.5">{up}<span className="text-xs font-normal ml-0.5">Mbps</span></p>
                              </div>
                            )}
                            {price && (
                              <div className="ml-auto">
                                <p className="text-[10px] text-gray-400 uppercase tracking-wide leading-none text-right">From</p>
                                <p className="text-lg font-extrabold text-[#10446C] dark:text-[#f5c241] mt-0.5">
                                  £{price}<span className="text-xs font-normal">/mo</span>
                                </p>
                              </div>
                            )}
                          </div>

                          {plan?.description && (
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 line-clamp-1">{plan.description}</p>
                          )}
                        </div>

                        <RadioDot selected={isSelected} />
                      </div>
                    </SelectableRow>
                  );
                })}
              </div>
            </Card>
          </div>
        )}

        {/* ── Step 4: Appointment slots ────────────────────────────────── */}
        {slots.length > 0 && selectedLine && (
          <div ref={apptRef}>
            <Card>
              <SectionHeading
                step={4}
                title="Choose an installation slot"
                sub="Pick a date and time that suits you for the engineer visit."
              />

              <FieldError msg={bookingError} />

              <ul className="space-y-2 mb-6">
                {slots.map((slot, i) => {
                  const isSelected = selectedSlot?.start === slot.start;
                  return (
                    <li key={i}>
                      <SelectableRow selected={isSelected} onClick={() => { setSelectedSlot(slot); setBookingError(""); }}>
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold text-gray-800 dark:text-white">
                              {formatDateTime(slot.start)}
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                              Until {formatDateTime(slot.end)}
                            </p>
                          </div>
                          <RadioDot selected={isSelected} />
                        </div>
                      </SelectableRow>
                    </li>
                  );
                })}
              </ul>

              {selectedSlot && (
                <button
                  type="button"
                  onClick={handleBookAppointment}
                  disabled={bookingAppt}
                  className="w-full rounded-xl bg-[#f5c241] text-[#10446C] font-bold py-3.5 text-sm
                    hover:bg-[#e6b438] transition disabled:opacity-60 disabled:cursor-not-allowed
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10446C]
                    flex items-center justify-center gap-2"
                >
                  {bookingAppt ? <><Spinner />Booking appointment…</> : "Confirm appointment"}
                </button>
              )}
            </Card>
          </div>
        )}

        {/* ── Step 5: Confirmed ─────────────────────────────────────────── */}
        {bookedAppt && (
          <div ref={confirmedRef}>
            <Card>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#f5c241] uppercase tracking-widest">Step 5</p>
                  <h2 className="text-xl font-bold text-[#10446C] dark:text-white mt-0.5">Appointment confirmed!</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Your installation is booked. An engineer will visit at the time below.
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700">
                {[
                  { label: "Appointment ID",  value: bookedAppt.id },
                  { label: "Address",         value: selectedAddress?.display },
                  { label: "Line type",       value: techLabel(readChar(selectedLine?.product.productCharacteristic, "AccessTechnology") || "") },
                  { label: "Engineer visit",  value: formatDateTime(bookedAppt.start) },
                  { label: "Slot ends",       value: formatDateTime(bookedAppt.end) },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-start px-4 py-3.5 gap-4 bg-gray-50 dark:bg-gray-800/60">
                    <span className="text-xs text-gray-500 dark:text-gray-400 shrink-0 pt-px">{label}</span>
                    <span className="text-xs font-semibold text-gray-800 dark:text-white text-right">{value}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-4">
                Confirmation has been sent to BT. Keep your appointment ID for your records.
              </p>

              <a
                href="/fibre-packages"
                className="mt-5 flex items-center justify-center gap-2 w-full rounded-xl bg-[#10446C] text-white
                  font-semibold py-3.5 text-sm hover:bg-[#0d3a5c] transition
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c241]"
              >
                Back to broadband packages
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </Card>
          </div>
        )}

      </div>
    </main>
  );
}