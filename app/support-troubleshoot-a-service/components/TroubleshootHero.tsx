import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertCircle,
  Ban,
  Check,
  ChevronRight,
  Clock,
  FileText,
  Heart,
  Wifi,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const IMG = "/Images/support-troubleshoot-a-service";

const HERO_OPTIONS: { label: string; icon: LucideIcon; active?: boolean }[] = [
  { label: "No internet", icon: Ban },
  { label: "Wi-Fi, no internet", icon: Wifi, active: true },
  { label: "Slow Wi-Fi", icon: Clock },
  { label: "One room", icon: FileText },
];

const SAFE_CHECKS = ["Restart, don’t factory reset", "One device or all?", "Note when it started"];

const NOTICES: {
  title: string;
  body: string;
  icon: LucideIcon;
  card: string;
  iconBg: string;
}[] = [
  {
    title: "Immediate danger?",
    body: "Call 999 or 112. An emergency call may connect through another network, but that isn’t guaranteed if none is available.",
    icon: AlertCircle,
    card: "border-[#F6D4D0] bg-[#FDF1EF]",
    iconBg: "bg-[#D63B2F]",
  },
  {
    title: "Power cut and digital landline?",
    body: "Digital landlines usually need power. If you rely on yours for emergencies, use a mobile and tell us.",
    icon: Zap,
    card: "border-[#F5E2BF] bg-[#FDF7EA]",
    iconBg: "bg-[#F09A1A]",
  },
  {
    title: "Need extra support?",
    body: "If you depend on your service for health or care, contact us directly — skip the guide.",
    icon: Heart,
    card: "border-[#E2D8F7] bg-[#F6F2FD]",
    iconBg: "bg-[#7B3FE4]",
  },
];

/* Zigzag left edge of the photo (desktop only): two points cutting in at 25% and 75% height */
const PHOTO_CLIP =
  "lg:[clip-path:polygon(10%_0,100%_0,100%_100%,10%_100%,0_75%,10%_50%,0_25%)]";

const HEADING = "[font-family:var(--font-ts-heading)]";

function QuestionMark({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 60" fill="none" className={`pointer-events-none absolute ${className}`}>
      <path
        d="M9 17c0-7 5-12 11.5-12S32 10 32 16.5c0 8.5-11 9.5-11 19"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="21" cy="48" r="5" stroke="currentColor" strokeWidth="3.5" />
    </svg>
  );
}

export default function TroubleshootHero() {
  return (
    <div className="w-full bg-white">
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#FFEADF] via-[#FDF1F5] to-[#FBE4EE]">
        {/* Soft colour washes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#FFD9C4]/70 blur-[80px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-[30%] h-[300px] w-[360px] rounded-full bg-[#EBDDF7]/80 blur-[80px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-[10%] h-[320px] w-[420px] rounded-full bg-[#F9CFE1]/60 blur-[80px]"
        />

        {/* Decorations (left side, desktop) */}
        <QuestionMark className="left-[20.5%] top-[52px] hidden h-[56px] w-[38px] rotate-[8deg] text-[#F5A98A]/60 lg:block" />
        <QuestionMark className="bottom-[48px] left-[1.6%] hidden h-[44px] w-[30px] -rotate-[8deg] text-[#F5A98A]/55 lg:block" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[14.5%] top-[113px] hidden h-2.5 w-2.5 rounded-full bg-[#F5915F] lg:block"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[22%] top-[374px] hidden h-[28px] w-[40px] rounded-full bg-[#F8B48F]/70 lg:block"
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 70 56"
          fill="none"
          className="pointer-events-none absolute bottom-[82px] left-[17.2%] hidden h-[56px] w-[70px] text-[#F5B79A]/70 lg:block"
        >
          <path
            d="M6 3h58a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H28l-12 12V39H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          aria-hidden="true"
          viewBox="0 0 760 120"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-0 left-0 hidden h-[120px] w-[53%] text-[#F2B8C6]/70 lg:block"
        >
          <path d="M0 70 C140 30 260 30 400 52 S640 96 760 60" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M0 92 C160 56 280 60 420 80 S650 116 760 88"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
        </svg>

        <div className="relative mx-auto max-w-[1440px] lg:min-h-[714px]">
          {/* Left column */}
          <div className="relative z-10 flex flex-col justify-center px-4 py-12 sm:px-8 lg:min-h-[714px] lg:w-[50%] lg:py-16 lg:pl-[112px] lg:pr-0">
            <p className="inline-flex w-fit items-center gap-2.5 [font-family:var(--font-ts-heading)] rounded-full border border-white bg-white px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-[#C2410C] shadow-[0_8px_20px_rgba(224,18,124,0.08)]">
              <Wrench className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden="true" />
              Troubleshoot a service
            </p>

            <h1
              className={`${HEADING} mt-6 text-[38px] font-bold leading-[0.95] tracking-[-0.035em] text-[#0F1452] sm:text-[56px] lg:text-[66px]`}
            >
              <span className="block sm:whitespace-nowrap">Something not</span>
              <span className="block sm:whitespace-nowrap">
                working?{" "}
                <span className="bg-gradient-to-r from-[#E0127C] to-[#A93BC4] bg-clip-text text-transparent">Let’s</span>
              </span>
              <span className="block pb-1 sm:whitespace-nowrap">
                <span className="bg-gradient-to-r from-[#F26A1B] via-[#E0127C] to-[#8A3FE0] bg-clip-text text-transparent">
                  check it together.
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-[540px] text-base leading-[1.75] text-[#3A4268] sm:text-lg">
              Answer a few questions about your mobile, broadband, landline or business service and follow safe checks —
              then know exactly when to contact us.
            </p>

            <div className={`${HEADING} mt-10 flex flex-col gap-3 sm:flex-row sm:gap-3.5`}>
              <Link
                href="#troubleshoot-guide"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#F0168A] to-[#C8106E] px-[26px] py-4 text-base font-semibold text-white shadow-[0_14px_28px_rgba(224,18,124,0.35)] transition-transform hover:scale-[1.01] sm:text-[17px]"
              >
                Start troubleshooting
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-[#0F1452] bg-white px-[24px] py-4 text-base font-semibold text-[#0F1452] transition-colors hover:bg-[#F5F6FB] sm:text-[17px]"
              >
                I’m not sure — contact us
              </Link>
            </div>
          </div>

          {/* Right: chevron-cut photo with overlay cards */}
          <div
            className={`${HEADING} relative h-[560px] sm:h-[620px] lg:absolute lg:inset-y-0 lg:left-[48%] lg:right-0 lg:h-auto`}
          >
            <div className={`absolute inset-0 overflow-hidden ${PHOTO_CLIP}`}>
              <Image
                src={`${IMG}/hero-engineer-checking-equipment.webp`}
                alt="Engineer checking technical drawings and network equipment at a desk"
                fill
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              {/* Light pink fade over the lower-left of the photo */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-[#FBE4EE]/85 via-[#FBE4EE]/10 to-transparent"
              />
            </div>

            {/* Troubleshooting guide card */}
            <div className="absolute left-4 top-6 z-10 w-[min(340px,calc(100%-2rem))] rounded-[20px] border border-white/80 bg-white/90 px-5 pb-5 pt-[22px] shadow-[0_24px_50px_rgba(30,30,90,0.2)] backdrop-blur-md sm:left-8 lg:left-[18%] lg:top-[70px]">
              <div className="flex items-center justify-between">
                <p className="text-[15px] font-extrabold text-[#0F1452]">Troubleshooting guide</p>
                <span className="rounded-md bg-[#F1F2F8] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#6B7194]">
                  Step 2 of 4
                </span>
              </div>
              <div aria-hidden="true" className="mt-3 grid grid-cols-4 gap-1.5">
                <span className="h-[5px] rounded-full bg-gradient-to-r from-[#F26A1B] to-[#E0127C]" />
                <span className="h-[5px] rounded-full bg-gradient-to-r from-[#F26A1B] to-[#E0127C]" />
                <span className="h-[5px] rounded-full bg-[#EDE8F5]" />
                <span className="h-[5px] rounded-full bg-[#EDE8F5]" />
              </div>
              <p className="mt-4 text-[13px] font-bold text-[#0F1452]">What’s happening with your broadband?</p>
              <ul className="mt-3 grid grid-cols-2 gap-2">
                {HERO_OPTIONS.map(({ label, icon: Icon, active }) => (
                  <li
                    key={label}
                    className={`flex min-h-[44px] items-center gap-2.5 rounded-[10px] border px-3 py-2 text-[12.5px] font-semibold leading-tight text-[#0F1452] ${
                      active ? "border-[#E0127C] bg-[#FDEEF5]" : "border-[#E6E8F2] bg-white"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 text-[#F26A1B]" strokeWidth={2.25} aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Safe checks card */}
            <div className="absolute right-4 top-[300px] z-20 w-[230px] rounded-[18px] border border-white/80 bg-white/90 px-4 py-4 shadow-[0_20px_44px_rgba(30,30,90,0.18)] backdrop-blur-md sm:right-8 lg:right-[40px] lg:top-[44px]">
              <p className="text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-[#0E8A5F]">Safe checks</p>
              <ul className="mt-2.5 space-y-2">
                {SAFE_CHECKS.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[12.5px] font-semibold text-[#0F1452]">
                    <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#14A06B] text-white">
                      <Check className="h-3 w-3" strokeWidth={3.5} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Please note card */}
            <div className="absolute bottom-6 right-4 z-10 w-[260px] rounded-[18px] bg-[#111A4D] px-4 py-5 shadow-[0_24px_50px_rgba(10,20,70,0.35)] sm:right-8 lg:bottom-[39px] lg:right-[40px]">
              <p className="text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-[#F7A14B]">Please note</p>
              <p className="mt-2 text-[15px] font-bold leading-[1.45] text-white">
                This guide can’t check live network status or repair faults.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety notices */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 pt-6 sm:px-6">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {NOTICES.map(({ title, body, icon: Icon, card, iconBg }) => (
            <li key={title} className={`flex gap-4 rounded-2xl border p-5 ${card}`}>
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white ${iconBg}`}>
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-extrabold text-[#0A1446] sm:text-[15px]">{title}</span>
                <span className="mt-1 block text-[13px] leading-relaxed text-[#3A4268]">{body}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
