"use client";

import { useState, useRef } from "react";


// ─── Types ────────────────────────────────────────────────────────────────────

interface LandlineAddress {
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

interface ReservedNumber {
  number: string;
  status: string;
  prefix: string;
}

interface LandlineChoice {
  number: string;       // formatted number or "new"
  type: "new" | "port";
}

interface TimeSlot {
  id: string | null;
  start: string;
  end: string;
}

interface BookedAppointment {
  id: string;
  start: string;
  end: string;
  status: string;
}

interface LandlineCartItem {
  type: "landline";
  addedAt: string;
  address: LandlineAddress;
  landlineChoice: LandlineChoice;
  reservationKey: string;
  appointment: BookedAppointment;
}

type Step = 1 | 2 | 3 | 4 | 5 | 6;

const CART_KEY = "zoiko_landline_cart";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmtNumber(raw: string): string {
  const n = raw.replace(/\D/g, "");
  if (n.length === 11) return `${n.slice(0, 5)} ${n.slice(5, 8)} ${n.slice(8)}`;
  if (n.length === 10) return `${n.slice(0, 4)} ${n.slice(4, 7)} ${n.slice(7)}`;
  return raw;
}

function fmtDate(iso: string): string {
  try {
    return new Date(iso).toLocaleString("en-GB", {
      weekday: "short", day: "numeric", month: "short",
      year: "numeric", hour: "2-digit", minute: "2-digit",
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
  return (
    <p role="alert" className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
      <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
      {msg}
    </p>
  );
}

function ApiError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <div className="rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 px-4 py-3 flex gap-2 items-start">
      <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
      <p className="text-sm text-red-700 dark:text-red-400">{msg}</p>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 sm:p-8 ${className}`}>
      {children}
    </div>
  );
}

function StepLabel({ n, title, active, done }: { n: number; title: string; active: boolean; done: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all
        ${done ? "bg-[#f5c241] text-[#10446C]" : active ? "bg-[#10446C] text-white ring-2 ring-[#f5c241] ring-offset-2" : "bg-gray-100 dark:bg-gray-800 text-gray-400"}`}>
        {done
          ? <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          : n}
      </div>
      <div>
        <p className="text-[10px] font-bold text-[#f5c241] uppercase tracking-widest leading-none">Step {n}</p>
        <h2 className="text-lg font-bold text-[#10446C] dark:text-white leading-tight">{title}</h2>
      </div>
    </div>
  );
}

function RadioRow({ selected, onClick, disabled = false, children }: {
  selected: boolean; onClick: () => void; disabled?: boolean; children: React.ReactNode;
}) {
  return (
    <button
      type="button" onClick={onClick} disabled={disabled}
      className={`w-full text-left rounded-xl border-2 px-4 py-3.5 transition-all duration-150
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c241] disabled:opacity-50 disabled:cursor-not-allowed
        ${selected
          ? "border-[#10446C] bg-[#10446C]/5 dark:bg-[#10446C]/25"
          : "border-gray-200 dark:border-gray-700 hover:border-[#10446C]/40"}`}
    >
      <div className="flex items-center justify-between gap-3">
        {children}
        <div className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors
          ${selected ? "border-[#10446C] bg-[#10446C] dark:border-[#f5c241] dark:bg-[#f5c241]" : "border-gray-300 dark:border-gray-600"}`}>
          {selected && <div className="w-2 h-2 rounded-full bg-white dark:bg-[#10446C]" />}
        </div>
      </div>
    </button>
  );
}

function ProgressBar({ step }: { step: Step }) {
  const steps = ["Postcode", "Address", "Numbers", "Pick", "Slot", "Done"];
  return (
    <div className="flex items-start justify-center gap-0 max-w-md mx-auto mt-7 mb-1">
      {steps.map((label, i) => {
        const n = i + 1;
        const done = step > n; const active = step === n;
        return (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-all duration-300
                ${done ? "bg-[#f5c241] text-[#10446C]" : active ? "bg-white text-[#10446C] ring-2 ring-[#f5c241]" : "bg-white/20 text-white/50"}`}>
                {done ? <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> : n}
              </div>
              <span className={`text-[9px] mt-1 whitespace-nowrap ${active ? "text-white font-semibold" : "text-white/40"}`}>{label}</span>
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

export default function Landline() {
  const [step, setStep] = useState<Step>(1);

  // Step 1 — postcode
  const [postcode, setPostcode]         = useState("");
  const [postcodeErr, setPostcodeErr]   = useState("");
  const [loadingAddr, setLoadingAddr]   = useState(false);
  const [addrApiErr, setAddrApiErr]     = useState("");

  // Step 2 — address
  const [addresses, setAddresses]       = useState<LandlineAddress[]>([]);
  const [selectedAddr, setSelectedAddr] = useState<LandlineAddress | null>(null);
  const [loadingNums, setLoadingNums]   = useState(false);
  const [numsApiErr, setNumsApiErr]     = useState("");

  // Step 3 — available numbers from exchange
  const [numbers, setNumbers]           = useState<ReservedNumber[]>([]);
  const [reservationKey, setReservationKey] = useState("");

  // Step 4 — pick number (from list or enter own)
  const [selectedNum, setSelectedNum]   = useState<ReservedNumber | null>(null);
  const [portMode, setPortMode]         = useState(false);
  const [portNumber, setPortNumber]     = useState("");
  const [portNumberErr, setPortNumberErr] = useState("");
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotsApiErr, setSlotsApiErr]   = useState("");

  // Step 5 — appointment slots
  const [slots, setSlots]               = useState<TimeSlot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [bookingAppt, setBookingAppt]   = useState(false);
  const [apptApiErr, setApptApiErr]     = useState("");

  // Step 6 — confirmed
  const [appointment, setAppointment]   = useState<BookedAppointment | null>(null);
  const [confirmedChoice, setConfirmedChoice] = useState<LandlineChoice | null>(null);
  const [cartAdded, setCartAdded]       = useState(false);

  const addrRef  = useRef<HTMLDivElement>(null);
  const numsRef  = useRef<HTMLDivElement>(null);
  const pickRef  = useRef<HTMLDivElement>(null);
  const apptRef  = useRef<HTMLDivElement>(null);
  const doneRef  = useRef<HTMLDivElement>(null);

  function scrollTo(ref: React.RefObject<HTMLDivElement | null>) {
    setTimeout(() => ref.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
  }

  // ── 1. Postcode → addresses ───────────────────────────────────────────────
  async function handleSearchAddress(e: React.FormEvent) {
    e.preventDefault();
    const pc = postcode.trim().toUpperCase().replace(/\s+/, " ");
    if (!pc) { setPostcodeErr("Please enter your postcode"); return; }
    if (!/^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/.test(pc)) {
      setPostcodeErr("Enter a valid UK postcode (e.g. SW1A 1AA)"); return;
    }
    setPostcodeErr(""); setAddrApiErr(""); setLoadingAddr(true);
    setAddresses([]); setSelectedAddr(null); setNumbers([]); setReservationKey("");
    setSelectedNum(null); setSlots([]); setSelectedSlot(null);
    setAppointment(null); setConfirmedChoice(null); setCartAdded(false); setStep(1);

    try {
      const res  = await fetch("/api/BritishTelecom/landline/search-address", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postcode: pc }),
      });
      const data = await res.json();
      if (!data.success || !data.addresses?.length) {
        setAddrApiErr(data.message ?? "No addresses found.");
      } else {
        setAddresses(data.addresses); setStep(2); scrollTo(addrRef);
      }
    } catch { setAddrApiErr("Network error — please try again."); }
    finally { setLoadingAddr(false); }
  }

  // ── 2. Address selected → fetch available numbers via servingExchangeId ───
  async function handleSelectAddress(addr: LandlineAddress) {
    setSelectedAddr(addr);
    setNumbers([]); setReservationKey(""); setSelectedNum(null);
    setSlots([]); setSelectedSlot(null);
    setAppointment(null); setConfirmedChoice(null); setCartAdded(false);
    setNumsApiErr(""); setLoadingNums(true);

    try {
      const res  = await fetch("/api/BritishTelecom/landline/reserve-numbers", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode:              "servingExchangeId",
          exchangeGroupCode: addr.exchangeGroupCode,
          districtCode:      addr.districtCode,
          quantity:          5,
        }),
      });
      const data = await res.json();
      if (!data.success || !data.numbers?.length) {
        setNumsApiErr(data.message ?? "No numbers available for this exchange area.");
      } else {
        setNumbers(data.numbers);
        setReservationKey(data.reservationKey ?? "");
        setStep(3); scrollTo(numsRef);
      }
    } catch { setNumsApiErr("Network error — please try again."); }
    finally { setLoadingNums(false); }
  }

  // ── 3→4. Number selected or port entered → fetch slots ───────────────────
  async function handleProceedToSlots(e: React.FormEvent) {
    e.preventDefault();

    // Validate if porting
    if (portMode) {
      const n = portNumber.replace(/\s/g, "");
      if (!n) { setPortNumberErr("Please enter your existing landline number"); return; }
      if (!/^0\d{9,10}$/.test(n)) { setPortNumberErr("Must be 10–11 digits starting with 0"); return; }
    } else {
      if (!selectedNum) { setSlotsApiErr("Please select a number first"); return; }
    }

    setPortNumberErr(""); setSlotsApiErr(""); setLoadingSlots(true);
    setSlots([]); setSelectedSlot(null);
    setAppointment(null); setConfirmedChoice(null); setCartAdded(false);

    try {
      const res  = await fetch("/api/BritishTelecom/landline/search-slots", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ addressId: selectedAddr!.id }),
      });
      const data = await res.json();
      if (!data.success || !data.slots?.length) {
        setSlotsApiErr(data.message ?? "No appointment slots available for this address.");
      } else {
        setSlots(data.slots); setStep(5); scrollTo(apptRef);
      }
    } catch { setSlotsApiErr("Network error — please try again."); }
    finally { setLoadingSlots(false); }
  }

  // ── 5. Book appointment ───────────────────────────────────────────────────
  async function handleBookAppointment() {
    if (!selectedSlot || !selectedAddr) return;
    setBookingAppt(true); setApptApiErr("");

    try {
      const res  = await fetch("/api/BritishTelecom/landline/book-appointment", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          addressId: selectedAddr.id,
          startTime: selectedSlot.start,
          endTime:   selectedSlot.end,
        }),
      });
      const data = await res.json();
      if (!data.success || !data.appointment) {
        setApptApiErr(data.message ?? "Booking failed — try another slot.");
      } else {
        const choice: LandlineChoice = portMode
          ? { number: portNumber.replace(/\s/g, ""), type: "port" }
          : { number: selectedNum!.number, type: "new" };
        setConfirmedChoice(choice);
        setAppointment(data.appointment);
        setStep(6); scrollTo(doneRef);
      }
    } catch { setApptApiErr("Network error — please try again."); }
    finally { setBookingAppt(false); }
  }

  // ── 6. Add to cart ────────────────────────────────────────────────────────
  function handleAddToCart() {
    if (!selectedAddr || !confirmedChoice || !appointment) return;
    const item: LandlineCartItem = {
      type: "landline", addedAt: new Date().toISOString(),
      address: selectedAddr, landlineChoice: confirmedChoice,
      reservationKey, appointment,
    };
    let cart: unknown[] = [];
    try { const raw = localStorage.getItem(CART_KEY); if (raw) cart = JSON.parse(raw); } catch {}
    cart = cart.filter((i: unknown) => (i as LandlineCartItem).type !== "landline");
    cart.push(item);
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    setCartAdded(true);
  }

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-24">

      <section className="bg-[#10446C] dark:bg-gray-900 py-12 px-4 text-center">
        <p className="text-[#f5c241] text-[11px] font-bold uppercase tracking-widest mb-2">Zoiko Broadband</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Add a Landline</h1>
        <p className="mt-2 text-white/70 text-sm max-w-md mx-auto">
          Reserve a local number or port your existing one — installed with your broadband.
        </p>
        <ProgressBar step={step} />
      </section>

      <div className="max-w-2xl mx-auto px-4 mt-10 space-y-8">

        {/* ── Step 1: Postcode ── */}
        <Card>
          <StepLabel n={1} title="Enter your postcode" active={step === 1} done={step > 1} />
          <form onSubmit={handleSearchAddress} noValidate className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label htmlFor="postcode" className="sr-only">Postcode</label>
              <input
                id="postcode" type="text" autoComplete="postal-code" placeholder="e.g. SW1A 1AA"
                value={postcode}
                onChange={(e) => { setPostcode(e.target.value); setPostcodeErr(""); setAddrApiErr(""); }}
                className={`w-full rounded-xl border px-4 py-3 text-sm bg-white dark:bg-gray-800 text-gray-900
                  dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10446C] transition
                  ${postcodeErr ? "border-red-400" : "border-gray-300 dark:border-gray-600"}`}
              />
              <FieldError msg={postcodeErr} />
            </div>
            <button type="submit" disabled={loadingAddr}
              className="rounded-xl bg-[#10446C] text-white font-semibold px-7 py-3 text-sm hover:bg-[#0d3a5c]
                transition disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none
                focus-visible:ring-2 focus-visible:ring-[#f5c241] flex items-center gap-2 justify-center whitespace-nowrap">
              {loadingAddr ? <><Spinner />Searching…</> : "Search"}
            </button>
          </form>
          {addrApiErr && <div className="mt-3"><ApiError msg={addrApiErr} /></div>}
        </Card>

        {/* ── Step 2: Address list ── */}
        {addresses.length > 0 && (
          <div ref={addrRef}>
            <Card>
              <StepLabel n={2} title="Select your address" active={step === 2} done={step > 2} />
              {loadingNums && (
                <div className="flex items-center gap-2 text-sm text-[#10446C] dark:text-[#f5c241] font-medium mb-4">
                  <Spinner /> Finding available numbers…
                </div>
              )}
              {numsApiErr && <div className="mb-4"><ApiError msg={numsApiErr} /></div>}
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {addresses.length} address{addresses.length !== 1 ? "es" : ""} found for{" "}
                <span className="font-semibold text-gray-700 dark:text-gray-300">{postcode.trim().toUpperCase()}</span>
              </p>
              <ul className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {addresses.map((addr) => (
                  <li key={addr.id}>
                    <RadioRow
                      selected={selectedAddr?.id === addr.id}
                      onClick={() => !loadingNums && handleSelectAddress(addr)}
                      disabled={loadingNums}
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-gray-800 dark:text-white truncate">{addr.display}</p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {[addr.city, addr.postcode].filter(Boolean).join(", ")}
                          {addr.qualifier && (
                            <span className={`ml-2 px-1.5 py-0.5 rounded text-[10px] font-bold
                              ${addr.qualifier === "Gold" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-500"}`}>
                              {addr.qualifier}
                            </span>
                          )}
                          {addr.exchangeGroupCode && (
                            <span className="ml-2 text-gray-300 dark:text-gray-600">
                              Exchange: {addr.exchangeGroupCode}
                            </span>
                          )}
                        </p>
                      </div>
                    </RadioRow>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        )}

        {/* ── Step 3: Available numbers from exchange ── */}
        {numbers.length > 0 && step >= 3 && (
          <div ref={numsRef}>
            <Card>
              <StepLabel n={3} title="Available numbers" active={step === 3} done={step > 4} />
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {numbers.length} number{numbers.length !== 1 ? "s" : ""} available in the{" "}
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  {selectedAddr?.exchangeGroupCode}
                </span> exchange area.
              </p>
              <ul className="space-y-2">
                {numbers.map((num) => (
                  <li key={num.number}>
                    <RadioRow
                      selected={!portMode && selectedNum?.number === num.number}
                      onClick={() => { setSelectedNum(num); setPortMode(false); setPortNumberErr(""); scrollTo(pickRef); }}
                    >
                      <div>
                        <p className="text-base font-bold text-[#10446C] dark:text-white tracking-wide font-mono">
                          {fmtNumber(num.number.length < 10 ? "0" + num.number : num.number)}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          Area code: <span className="font-medium">{num.prefix}</span>
                          <span className={`ml-2 px-1.5 py-0.5 rounded text-[10px] font-bold
                            ${num.status === "RESERVED" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-gray-100 text-gray-500"}`}>
                            {num.status}
                          </span>
                        </p>
                      </div>
                    </RadioRow>
                  </li>
                ))}
              </ul>
              {/* Port existing toggle */}
              <button
                type="button"
                onClick={() => { setPortMode(true); setSelectedNum(null); scrollTo(pickRef); }}
                className={`mt-4 w-full rounded-xl border-2 px-4 py-3 text-sm font-semibold transition
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c241]
                  ${portMode
                    ? "border-[#10446C] bg-[#10446C]/5 dark:bg-[#10446C]/25 text-[#10446C] dark:text-[#f5c241]"
                    : "border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-[#10446C]/40"}`}
              >
                {portMode ? "✓ Porting my existing number" : "I want to keep my existing number instead →"}
              </button>
            </Card>
          </div>
        )}

        {/* ── Step 4: Confirm choice + optional port input ── */}
        {(selectedNum || portMode) && step >= 3 && (
          <div ref={pickRef}>
            <Card>
              <StepLabel n={4} title={portMode ? "Enter your existing number" : "Confirm your number"} active={step === 4 || step === 3} done={step > 4} />
              {slotsApiErr && <div className="mb-4"><ApiError msg={slotsApiErr} /></div>}

              <form onSubmit={handleProceedToSlots} noValidate className="space-y-5">
                {portMode ? (
                  <div>
                    <label htmlFor="portnum" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Your current landline number
                    </label>
                    <input
                      id="portnum" type="tel" placeholder="e.g. 01234 567890"
                      value={portNumber}
                      onChange={(e) => { setPortNumber(e.target.value); setPortNumberErr(""); }}
                      className={`w-full rounded-xl border px-4 py-3 text-sm font-mono bg-white dark:bg-gray-800
                        text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none
                        focus:ring-2 focus:ring-[#10446C] transition
                        ${portNumberErr ? "border-red-400" : "border-gray-300 dark:border-gray-600"}`}
                    />
                    <FieldError msg={portNumberErr} />
                    <p className="text-xs text-gray-400 mt-1.5">Full number including area code, starting with 0.</p>
                  </div>
                ) : selectedNum && (
                  <div className="rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 px-5 py-4">
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Selected number</p>
                    <p className="text-2xl font-extrabold text-[#10446C] dark:text-white font-mono tracking-wide">
                      {fmtNumber(selectedNum.number.length < 10 ? "0" + selectedNum.number : selectedNum.number)}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">Area code: {selectedNum.prefix}</p>
                  </div>
                )}

                <button type="submit" disabled={loadingSlots}
                  className="w-full rounded-xl bg-[#10446C] text-white font-bold py-3.5 text-sm
                    hover:bg-[#0d3a5c] transition disabled:opacity-60 disabled:cursor-not-allowed
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c241]
                    flex items-center justify-center gap-2">
                  {loadingSlots ? <><Spinner />Finding slots…</> : "Find installation slots"}
                </button>
              </form>
            </Card>
          </div>
        )}

        {/* ── Step 5: Appointment slots ── */}
        {slots.length > 0 && step >= 5 && (
          <div ref={apptRef}>
            <Card>
              <StepLabel n={5} title="Choose an installation slot" active={step === 5} done={step > 5} />
              {apptApiErr && <div className="mb-4"><ApiError msg={apptApiErr} /></div>}
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Engineer visit at <span className="font-semibold text-gray-700 dark:text-gray-300">{selectedAddr?.display}</span>.
              </p>
              <ul className="space-y-2 mb-6">
                {slots.map((slot, i) => (
                  <li key={i}>
                    <RadioRow selected={selectedSlot?.start === slot.start}
                      onClick={() => { setSelectedSlot(slot); setApptApiErr(""); }}>
                      <div>
                        <p className="text-sm font-semibold text-gray-800 dark:text-white">{fmtDate(slot.start)}</p>
                        <p className="text-xs text-gray-400 mt-0.5">Until {fmtDate(slot.end)}</p>
                      </div>
                    </RadioRow>
                  </li>
                ))}
              </ul>
              {selectedSlot && (
                <button type="button" onClick={handleBookAppointment} disabled={bookingAppt}
                  className="w-full rounded-xl bg-[#f5c241] text-[#10446C] font-bold py-3.5 text-sm
                    hover:bg-[#e6b438] transition disabled:opacity-60 disabled:cursor-not-allowed
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10446C]
                    flex items-center justify-center gap-2">
                  {bookingAppt ? <><Spinner />Booking…</> : "Confirm appointment"}
                </button>
              )}
            </Card>
          </div>
        )}

        {/* ── Step 6: Confirmed + cart ── */}
        {appointment && confirmedChoice && selectedAddr && (
          <div ref={doneRef}>
            <Card>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#f5c241] uppercase tracking-widest">Step 6</p>
                  <h2 className="text-xl font-bold text-[#10446C] dark:text-white">Appointment booked!</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Add to cart to complete your order.</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700 mb-6">
                {[
                  { label: "Landline number", value: confirmedChoice.type === "port" ? fmtNumber(confirmedChoice.number) : fmtNumber(confirmedChoice.number.length < 10 ? "0" + confirmedChoice.number : confirmedChoice.number) },
                  { label: "Number type",     value: confirmedChoice.type === "port" ? "Port existing number" : "New number" },
                  { label: "Reservation key", value: reservationKey || "—", mono: true },
                  { label: "Install address", value: selectedAddr.display },
                  { label: "Engineer visit",  value: fmtDate(appointment.start) },
                  { label: "Slot ends",       value: fmtDate(appointment.end) },
                  { label: "Appointment ID",  value: appointment.id, mono: true },
                ].map(({ label, value, mono }) => (
                  <div key={label} className="flex justify-between items-start px-4 py-3 gap-4 bg-gray-50 dark:bg-gray-800/60">
                    <span className="text-xs text-gray-500 dark:text-gray-400 shrink-0 pt-px">{label}</span>
                    <span className={`text-xs font-semibold text-gray-800 dark:text-white text-right break-all ${mono ? "font-mono" : ""}`}>{value}</span>
                  </div>
                ))}
              </div>

              {!cartAdded ? (
                <button type="button" onClick={handleAddToCart}
                  className="w-full rounded-xl bg-[#10446C] text-white font-bold py-4 text-sm hover:bg-[#0d3a5c]
                    transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c241]
                    flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add landline to cart
                </button>
              ) : (
                <div className="space-y-3">
                  <div className="rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-4 py-3 flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="text-sm font-bold text-green-700 dark:text-green-400">Added to cart!</p>
                      <p className="text-xs text-green-600 dark:text-green-500">Saved to <code className="font-mono">localStorage["{CART_KEY}"]</code></p>
                    </div>
                  </div>
                  <a href="/fibre-packages"
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#f5c241]
                      text-[#10446C] font-bold py-3.5 text-sm hover:bg-[#e6b438] transition
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10446C]">
                    Continue to broadband packages
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              )}
            </Card>
          </div>
        )}

      </div>
    </main>
  );
}