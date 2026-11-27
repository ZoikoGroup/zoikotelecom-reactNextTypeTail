import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import { Inter, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-intl-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-intl-inter",
});

const FONT_POPPINS = "font-[family-name:var(--font-intl-poppins)]";
const FONT_INTER = "font-[family-name:var(--font-intl-inter)]";

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1030]";

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

export default function CallingVsRoaming() {
  return (
    <section
      aria-labelledby="calling-vs-roaming-heading"
      className={`${poppins.variable} ${inter.variable} ${FONT_INTER} bg-white px-5 py-16 sm:px-8 md:px-12 lg:py-24`}
    >
      <div className="mx-auto max-w-[1140px]">
        {/* Section Header */}
        <div className="mx-auto max-w-[640px] text-center">
          <p
            className={`${FONT_POPPINS} text-[11px] font-bold uppercase tracking-[0.2em] text-[#c8106e]`}
          >
            <span className="mr-2 italic text-[#e0127c]">01</span>
            <span>Know the difference</span>
          </p>

          <h2
            id="calling-vs-roaming-heading"
            className={`${FONT_POPPINS} mt-2.5 text-[30px] font-bold leading-[1.15] tracking-[-0.025em] text-[#0a1030] sm:text-[38px] md:text-[42px]`}
          >
            Calling abroad vs{" "}
            <span className="bg-[linear-gradient(90deg,#cd1171_0%,#c051fc_100%)] bg-clip-text italic text-transparent">
              roaming
            </span>
          </h2>

          <p className="mt-3 text-[15px] leading-[1.6] text-[#4a5068] sm:text-[16px]">
            Two different things — and two different places to look.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="relative mt-11 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-14 lg:gap-16">
          {/* Center "vs" Badge on Desktop */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0a1030] text-[12px] font-bold uppercase tracking-wider text-white shadow-[0_8px_20px_rgba(10,16,48,0.25)] md:flex"
          >
            vs
          </div>

          {/* Card 1: International calling */}
          <article className="group flex flex-col overflow-hidden rounded-[22px] border border-slate-200/80 bg-white shadow-[0_14px_34px_-12px_rgba(10,16,48,0.08)] transition-shadow duration-200 hover:shadow-[0_20px_42px_-12px_rgba(10,16,48,0.14)]">
            <div className="relative h-[210px] w-full overflow-hidden bg-slate-100 sm:h-[235px]">
              <Image
                src="/Images/int/4.png"
                alt="Desk setup with laptop, monitor, plants, and workspace accessories for UK fixed voice calls"
                fill
                quality={85}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <p
                  className={`${FONT_POPPINS} text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#2563eb]`}
                >
                  This page
                </p>
                <h3
                  className={`${FONT_POPPINS} mt-1.5 text-[21px] font-bold leading-snug text-[#0a1030] sm:text-[22px]`}
                >
                  International calling
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#525870]">
                  Calling an overseas number from your UK home phone or business
                  voice service.
                </p>
              </div>
            </div>
          </article>

          {/* Mobile "vs" Divider */}
          <div className="flex items-center justify-center md:hidden">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0a1030] text-[11px] font-bold uppercase tracking-wider text-white"
            >
              vs
            </span>
          </div>

          {/* Card 2: Roaming */}
          <article className="group flex flex-col overflow-hidden rounded-[22px] border border-slate-200/80 bg-white shadow-[0_14px_34px_-12px_rgba(10,16,48,0.08)] transition-shadow duration-200 hover:shadow-[0_20px_42px_-12px_rgba(10,16,48,0.14)]">
            <div className="relative h-[210px] w-full overflow-hidden bg-slate-100 sm:h-[235px]">
              <Image
                src="/Images/int/5.png"
                alt="Airplane wing at sunset viewed from a cabin window representing mobile roaming abroad"
                fill
                quality={85}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <p
                  className={`${FONT_POPPINS} text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#e0127c]`}
                >
                  Different page
                </p>
                <h3
                  className={`${FONT_POPPINS} mt-1.5 text-[21px] font-bold leading-snug text-[#0a1030] sm:text-[22px]`}
                >
                  Roaming
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#525870]">
                  Using your mobile while you&apos;re abroad. That&apos;s a
                  different journey with its own terms.
                </p>
              </div>

              <div className="mt-5">
                <Link
                  href="/roaming"
                  className={`${FONT_POPPINS} inline-flex items-center gap-1 text-[13px] font-semibold text-[#e0127c] transition-colors hover:text-[#b80d65] ${FOCUS_RING}`}
                >
                  <span>Roaming &amp; international mobile</span>
                  <ChevronRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
