import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  FileText,
  Flag,
  Phone,
  Smartphone,
  Timer,
  TriangleAlert,
} from "lucide-react";

const COUNTRY_CHIPS = [
  { code: "+33", country: "France", position: "left-0 top-6 sm:left-4" },
  { code: "+91", country: "India", position: "right-0 top-[26%]" },
  { code: "+1", country: "USA & Canada", position: "bottom-10 right-2 sm:right-6" },
] as const;

const GREETINGS = [
  { text: "Hello!", position: "left-[22%] top-0", bg: "bg-[#E11D74]" },
  { text: "Bonjour!", position: "right-[8%] top-[10%]", bg: "bg-[#7B3FE4]" },
  { text: "Namaste!", position: "bottom-0 right-[18%]", bg: "bg-[#3D7BFE]" },
] as const;

const COST_GUIDE = [
  { label: "Country you call", icon: Flag },
  { label: "Landline or mobile", icon: Smartphone },
  { label: "Call length", icon: Timer },
  { label: "Your plan", icon: FileText },
] as const;

export default function InternationalCallsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F5FF]">
      <Image
        src="/Images/landlines-international-calls/hero-wave-background.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 px-4 py-12 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:px-10 lg:py-14">
        {/* Left */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#F7C6DD] bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#E11D74]">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#E11D74]" />
            International calls
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#3F4FA6] sm:text-5xl lg:text-[52px]">
            Call overseas from the UK with{" "}
            <span className="bg-gradient-to-r from-[#E11D74] to-[#8E37E8] bg-clip-text text-transparent">
              clear information about charges.
            </span>
          </h1>

          <p className="mt-5 max-w-[560px] text-base leading-7 text-[#4B5375] sm:text-lg">
            Understand how international call charges work, how to dial abroad,
            and which Zoiko Telecom service fits — for home or business.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#ask-about-international-calling"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(225,29,116,0.35)] transition-transform hover:scale-[1.01] sm:text-base"
            >
              Ask about international calling
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <Link
              href="#how-charges-work"
              className="inline-flex items-center justify-center rounded-xl border border-[#11183C] bg-white px-7 py-3.5 text-sm font-bold text-[#11183C] transition-colors hover:bg-[#F5F6FB] sm:text-base"
            >
              How charges work
            </Link>
          </div>

          <div className="mt-4 flex max-w-[560px] items-start gap-3 rounded-xl border border-[#ECEEF6] bg-white p-4 shadow-[0_8px_24px_rgba(17,24,60,0.06)]">
            <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-[#7B3FE4]" strokeWidth={2} aria-hidden="true" />
            <p className="text-sm leading-relaxed text-[#4B5375]">
              <strong className="font-bold text-[#11183C]">
                Rates and included destinations depend on the service and your plan.
              </strong>{" "}
              Ask us for current terms.
            </p>
          </div>
        </div>

        {/* Right: illustration */}
        <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[540px]">
          <div className="absolute inset-[6%] rounded-full border-2 border-dashed border-[#C4B5FD]" />
          <div className="absolute inset-[14%] overflow-hidden rounded-full border-[8px] border-white shadow-[0_20px_60px_rgba(142,55,232,0.25)]">
            <Image
              src="/Images/landlines-international-calls/hero-reaching-hands.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 35vw, 80vw"
              className="object-cover"
            />
          </div>

          {GREETINGS.map((g) => (
            <span
              key={g.text}
              className={`absolute z-10 hidden rounded-lg px-3 py-1.5 text-sm font-bold text-white shadow-lg sm:block ${g.bg} ${g.position}`}
            >
              {g.text}
            </span>
          ))}

          {COUNTRY_CHIPS.map((chip) => (
            <div
              key={chip.code}
              className={`absolute z-10 flex items-center gap-2.5 rounded-xl bg-white px-3 py-2.5 shadow-xl ${chip.position}`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F1ECFE] text-[#7B3FE4]">
                <Phone className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="text-base font-extrabold text-[#C026D3]">{chip.code}</span>
              <span className="text-sm font-semibold text-[#11183C]">{chip.country}</span>
            </div>
          ))}

          <div className="absolute left-0 top-[48%] z-10 hidden w-[46%] min-w-[220px] rounded-2xl bg-white p-4 shadow-[0_20px_50px_rgba(17,24,60,0.15)] sm:block">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-[#11183C]">What sets the cost</p>
              <span className="rounded-md bg-[#F1F3F9] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#8A90A6]">
                Guide
              </span>
            </div>
            <ul className="mt-3 space-y-2">
              {COST_GUIDE.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm text-[#4B5375]">
                  <Icon className="h-4 w-4 text-[#E11D74]" strokeWidth={2} />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
