"use client";

import { useState, type SVGProps } from "react";
import Link from "next/link";
import { Inter, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-intl-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-intl-inter",
});

const FONT_POPPINS = "font-[family-name:var(--font-intl-poppins)]";
const FONT_INTER = "font-[family-name:var(--font-intl-inter)]";

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1030]";

type NumberType = "Landline" | "Mobile" | "Other" | "Not sure";

const NUMBER_TYPES: readonly NumberType[] = [
  "Landline",
  "Mobile",
  "Other",
  "Not sure",
];

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M3.5 8.5L6.5 11.5L12.5 4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WarningIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M8 2.5L14 13H2L8 2.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M8 6.2V9.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="8" cy="11.2" r="0.75" fill="currentColor" />
    </svg>
  );
}

function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M6 3.5L10.5 8L6 12.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function RateFinderSection() {
  const [service, setService] = useState("");
  const [destination, setDestination] = useState("");
  const [numberType, setNumberType] = useState<NumberType | null>(null);

  return (
    <section
      aria-labelledby="rate-finder-heading"
      className={`${poppins.variable} ${inter.variable} ${FONT_INTER} bg-[#f5f6fb] px-5 py-16 sm:px-8 md:px-12 lg:py-24`}
    >
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-10 lg:grid-cols-[470px_minmax(0,1fr)] lg:gap-16">
        {/* Left: Rate Finder Card */}
        <div className="rounded-[24px] border border-slate-200/70 bg-white p-6 shadow-[0_20px_50px_-16px_rgba(10,16,48,0.12)] sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <h3
              className={`${FONT_POPPINS} text-[19px] font-bold leading-snug text-[#0a1030]`}
            >
              Rate finder
            </h3>
            <span
              className={`${FONT_POPPINS} inline-flex items-center rounded-[6px] bg-[#fdf1d6] px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-[0.08em] text-[#9b6b12]`}
            >
              Coming soon
            </span>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-5 flex flex-col gap-4"
          >
            {/* Service */}
            <div>
              <label
                htmlFor="rate-service"
                className="block text-[12px] font-semibold text-[#0a1030]"
              >
                Service
              </label>
              <input
                id="rate-service"
                type="text"
                disabled
                value={service}
                onChange={(e) => setService(e.target.value)}
                placeholder="Choose a service — Home or Business"
                className={`mt-1.5 h-[42px] w-full cursor-not-allowed rounded-[10px] border border-slate-200 bg-slate-50/70 px-3.5 text-[12.5px] text-[#0a1030] placeholder:text-slate-400 ${FOCUS_RING}`}
              />
            </div>

            {/* Destination */}
            <div>
              <label
                htmlFor="rate-destination"
                className="block text-[12px] font-semibold text-[#0a1030]"
              >
                Destination
              </label>
              <input
                id="rate-destination"
                type="text"
                disabled
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Search country or territory"
                className={`mt-1.5 h-[42px] w-full cursor-not-allowed rounded-[10px] border border-slate-200 bg-slate-50/70 px-3.5 text-[12.5px] text-[#0a1030] placeholder:text-slate-400 ${FOCUS_RING}`}
              />
            </div>

            {/* Number type */}
            <div>
              <span className="block text-[12px] font-semibold text-[#0a1030]">
                Number type
              </span>
              <div className="mt-1.5 grid grid-cols-4 gap-2">
                {NUMBER_TYPES.map((type) => {
                  const selected = numberType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      disabled
                      onClick={() => setNumberType(type)}
                      className={`${FONT_POPPINS} h-[38px] cursor-not-allowed rounded-[8px] border px-2 text-[11px] font-semibold transition-colors ${
                        selected
                          ? "border-[#e0127c] bg-[#e0127c]/10 text-[#e0127c]"
                          : "border-slate-200 bg-slate-50/80 text-slate-400"
                      } ${FOCUS_RING}`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Check rates CTA */}
            <button
              type="submit"
              disabled
              className={`${FONT_POPPINS} mt-1 h-[44px] w-full cursor-not-allowed rounded-[10px] bg-[#c9cedc] text-[12.5px] font-semibold text-white transition-colors ${FOCUS_RING}`}
            >
              Check rates
            </button>

            {/* Notice banner */}
            <div
              role="note"
              className="mt-0.5 flex items-center gap-2.5 rounded-[10px] border border-[#f6dfa8] bg-[#fff9eb] px-3.5 py-2.5 text-[11.5px] leading-[1.45] text-[#8a6219]"
            >
              <WarningIcon className="h-4 w-4 shrink-0 text-[#c98a1c]" />
              <span>
                Verified rates aren&apos;t available yet. This doesn&apos;t mean
                calls are free or blocked.
              </span>
            </div>
          </form>
        </div>

        {/* Right: Editorial Copy */}
        <div className="max-w-[540px]">
          <p
            className={`${FONT_POPPINS} text-[11px] font-bold uppercase tracking-[0.2em] text-[#b0186a]`}
          >
            <span className="mr-2 italic text-[#f2a7c6]">02</span>
            <span>Rates</span>
          </p>

          <h2
            id="rate-finder-heading"
            className={`${FONT_POPPINS} mt-2.5 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-[#0a1030] sm:text-[40px]`}
          >
            Check the rate{" "}
            <span className="bg-[linear-gradient(90deg,#cd1171_0%,#c051fc_100%)] bg-clip-text text-transparent">
              before you call
            </span>
          </h2>

          <p className="mt-4 text-[14.5px] leading-[1.65] text-[#4a5068] sm:text-[15.5px]">
            When verified rates are available, you&apos;ll choose your service,
            destination and number type to see the applicable charge — with fees
            and billing rules, and the tariff version it comes from.
          </p>

          <ul className="mt-6 space-y-3 text-[13.5px] text-[#3a4056] sm:text-[14px]">
            <li className="flex items-center gap-2.5">
              <CheckIcon className="h-4 w-4 shrink-0 text-[#e0127c]" />
              <span>Rates shown only from a verified tariff</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckIcon className="h-4 w-4 shrink-0 text-[#e0127c]" />
              <span>Connection fees and billing increments included</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckIcon className="h-4 w-4 shrink-0 text-[#e0127c]" />
              <span>An estimate is never your final bill</span>
            </li>
          </ul>

          <div className="mt-6">
            <Link
              href="/contact"
              className={`${FONT_POPPINS} inline-flex items-center gap-1 text-[13px] font-semibold text-[#e0127c] transition-colors hover:text-[#b80d65] ${FOCUS_RING}`}
            >
              <span>Ask our team about a rate</span>
              <ChevronRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
