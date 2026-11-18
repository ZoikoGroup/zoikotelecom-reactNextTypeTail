import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftRight, ChevronRight, Globe, Signal, Smartphone } from "lucide-react";

const NETWORK_POINTS = [
  { text: "EE 4G & 5G coverage (5G where available)", icon: Signal },
  { text: "EU roaming on eligible plans", icon: Globe },
  { text: "SIM (physical) or eSIM", icon: Smartphone },
] as const;

// Fades the cut-out photo into the background on every side except the top.
const PHOTO_FADE: React.CSSProperties = {
  maskImage:
    "linear-gradient(to right, transparent 0%, #000 22%, #000 80%, transparent 100%), linear-gradient(to bottom, #000 75%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, #000 22%, #000 80%, transparent 100%), linear-gradient(to bottom, #000 75%, transparent 100%)",
  maskComposite: "intersect",
  WebkitMaskComposite: "source-in",
};

const CHIP_CLASS =
  "inline-flex items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#1C1A33] shadow-[0_10px_30px_rgba(14,11,58,0.25)]";

export default function MultiLineHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0E0B3A] text-white lg:min-h-[613px]">
      {/* Layer 1: Big Ben, kept bright on the right */}
      <Image
        src="/Images/multi-line-plans/hero-big-ben.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />

      {/* Layer 2: purple tint over the whole photo */}
      <div aria-hidden="true" className="absolute inset-0 bg-[#5B4FC8]/30" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-l from-[#8B80E8]/35 via-transparent to-transparent" />

      {/* Layer 3: dark navy on the left, fading out by the middle */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#0E0B3A_0%,rgba(14,11,58,0.92)_32%,rgba(14,11,58,0.55)_46%,transparent_62%)]"
      />

      {/* Layer 4: the woman, blended into the background (desktop) */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-[38%] hidden w-[40%] lg:block"
        style={PHOTO_FADE}
      >
        <Image
          src="/Images/multi-line-plans/hero-woman-on-phone.webp"
          alt=""
          fill
          sizes="40vw"
          className="object-cover object-top"
        />
      </div>

      {/* Layer 5: wave line along the bottom */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full"
        viewBox="0 0 1440 112"
        preserveAspectRatio="none"
      >
        <path d="M0 95 C 300 40, 620 70, 900 90 S 1300 40, 1440 30" fill="none" stroke="url(#mlh-wave)" strokeWidth="3" />
        <path d="M0 105 C 360 80, 720 110, 1080 95 S 1440 70, 1440 70" fill="none" stroke="url(#mlh-wave)" strokeOpacity="0.4" strokeWidth="2" />
        <defs>
          <linearGradient id="mlh-wave" x1="0" x2="1">
            <stop offset="0" stopColor="#8E37E8" />
            <stop offset="0.55" stopColor="#E11D74" />
            <stop offset="1" stopColor="#3D7BFE" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative mx-auto max-w-[1440px] px-4 py-14 sm:px-8 lg:min-h-[613px] lg:px-[50px] lg:py-20">
        <div className="max-w-[600px]">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.12em]">
            Multi-line plans
            <span aria-hidden="true" className="h-0.5 w-10 rounded-full bg-[#C026D3]" />
            <span aria-hidden="true" className="h-0.5 w-10 rounded-full bg-[#C026D3]" />
          </p>
          <h1 className="mt-4 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-[60px]">
            Mobile plans for more than one line.
          </h1>
          <p className="mt-5 max-w-[580px] text-base leading-7 text-white/85 sm:text-lg">
            Put several mobile lines on one account with Zoiko Telecom. You’ll see
            the price of each line and the total before you agree.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#build-your-lines"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-7 py-3.5 text-base font-bold text-white shadow-[0_8px_22px_rgba(225,29,116,0.4)] transition-transform hover:scale-[1.01]"
            >
              Plan your lines
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/70 px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              Talk to Sales
            </Link>
          </div>
        </div>

        {/* Floating chips (desktop) */}
        <span className={`${CHIP_CLASS} absolute left-[58%] top-[22%] hidden lg:inline-flex`}>
          <ArrowLeftRight className="h-4 w-4 text-[#E11D74]" strokeWidth={2} aria-hidden="true" />
          Keep your number
        </span>
        <span className={`${CHIP_CLASS} absolute left-[58%] top-[71%] hidden lg:inline-flex`}>
          <Smartphone className="h-4 w-4 text-[#E11D74]" strokeWidth={2} aria-hidden="true" />
          eSIM or physical SIM
        </span>

        {/* EE network card: below the copy on mobile, floating right on desktop */}
        <div className="mt-10 max-w-[340px] rounded-3xl border border-white/25 bg-[#5A4FC0]/60 p-6 shadow-[0_20px_50px_rgba(14,11,58,0.35)] backdrop-blur-md lg:absolute lg:right-[3%] lg:top-1/2 lg:mt-0 lg:-translate-y-1/2">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E11D74] to-[#8E37E8]">
              <Signal className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
            </span>
            <p className="text-lg font-bold uppercase leading-tight">On the EE network</p>
          </div>
          <ul className="mt-4 divide-y divide-white/15 border-t border-white/15">
            {NETWORK_POINTS.map(({ text, icon: Icon }) => (
              <li key={text} className="flex items-start gap-3 py-3 text-[15px] font-semibold">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-white/80" strokeWidth={2} aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
          <p className="text-xs text-white/70">
            Coverage varies by location. Roaming terms are shown per plan.
          </p>
        </div>
      </div>
    </section>
  );
}
