import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ChevronRight,
  FileText,
  HelpCircle,
  MapPin,
  Scale,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const IMG = "/Images/device-protection";

const PROTECTION_KINDS = [
  {
    title: "Consumer rights",
    subtitle: "Remedies for faulty goods",
    tag: "Free · by law",
    bar: "bg-[#0E9E7B]",
    tagClass: "bg-[#DDF1ED] text-[#0E9E7B]",
  },
  {
    title: "Manufacturer warranty",
    subtitle: "The maker’s own promise",
    tag: "Varies",
    bar: "bg-[#3D7BFF]",
    tagClass: "bg-[#E4EDFF] text-[#3D7BFF]",
  },
  {
    title: "Repair service",
    subtitle: "One-off or agreement",
    tag: "Conditional",
    bar: "bg-[#7B3FE4]",
    tagClass: "bg-[#EDE4FB] text-[#7B3FE4]",
  },
  {
    title: "Insurance",
    subtitle: "Regulated, with exclusions",
    tag: "Optional",
    bar: "bg-[#E0127C]",
    tagClass: "bg-[#FBDEED] text-[#E0127C]",
  },
] as const;

const PROCESS_STEPS = [
  { step: "STEP 1", label: "What happened?", icon: HelpCircle, bg: "bg-[#3D7BFF]" },
  { step: "STEP 2", label: "Know your rights", icon: Scale, bg: "bg-[#0E9E7B]" },
  { step: "STEP 3", label: "Check any cover", icon: FileText, bg: "bg-[#7B3FE4]" },
  { step: "STEP 4", label: "Ask our team", icon: Smartphone, bg: "bg-[#E0127C]" },
] as const;

export default function DeviceProtectionHero() {
  return (
    <div className="w-full">
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#EEF3FF] via-[#F5F0FF] to-[#FFF1F6]">
        {/* Decorative background blobs, rings and watermarks */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-36 -top-36 h-[440px] w-[440px] rounded-full bg-[#BFD3FF]/50 blur-[64px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-28 h-[400px] w-[400px] rounded-full bg-[#E1D3FA]/50 blur-[64px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 left-[40%] h-[320px] w-[320px] rounded-full bg-[#F7B9D9]/50 blur-[64px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-5 top-1/2 hidden h-[640px] w-[640px] -translate-y-1/2 rounded-full border-2 border-[#2457C5]/[0.14] lg:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-1/2 hidden h-[820px] w-[820px] -translate-y-1/2 rounded-full border-2 border-dashed border-[#E0127C]/[0.12] lg:block"
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${IMG}/hero-bg-shield.svg`}
          alt=""
          width={90}
          height={100}
          aria-hidden="true"
          className="pointer-events-none absolute left-[37%] top-4 hidden -rotate-12 opacity-15 lg:block"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${IMG}/hero-bg-shield.svg`}
          alt=""
          width={70}
          height={78}
          aria-hidden="true"
          className="pointer-events-none absolute bottom-6 left-12 hidden rotate-12 opacity-15 lg:block"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[26%] top-14 hidden text-3xl font-medium text-[#E0127C]/35 lg:block"
        >
          +
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[44%] top-[62%] hidden text-3xl font-medium text-[#2457C5]/35 lg:block"
        >
          +
        </span>

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-4 py-12 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:py-16 xl:px-[112px]">
          {/* Left column */}
          <div>
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#C8DAFF] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#2457C5] shadow-[0_6px_14px_rgba(91,47,184,0.08)]">
              <ShieldCheck className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              Device protection
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.03] tracking-tight text-[#0A1446] sm:text-5xl lg:text-[60px]">
              Understand your
              <span className="block bg-gradient-to-r from-[#2457C5] via-[#7B3FE4] to-[#E0127C] bg-clip-text text-transparent">
                device protection
              </span>
              <span className="block bg-gradient-to-r from-[#2457C5] via-[#7B3FE4] to-[#E0127C] bg-clip-text text-transparent">
                options.
              </span>
            </h1>

            <p className="mt-4 max-w-[540px] text-base leading-7 text-[#3A4268] sm:text-lg">
              Learn the difference between your consumer rights, warranties, repair services and optional insurance — and
              where to ask for help.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#protection-enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F0168A] via-[#E0127C] to-[#C8106E] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(224,18,124,0.35)] transition-transform hover:scale-[1.01] sm:text-base"
              >
                Ask about device protection
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              </Link>
              <Link
                href="#faqs"
                className="inline-flex items-center justify-center rounded-xl border border-[#0A1446] bg-white px-6 py-3.5 text-sm font-semibold text-[#0A1446] transition-colors hover:bg-[#F5F6FB] sm:text-base"
              >
                Read device help
              </Link>
            </div>
          </div>

          {/* Right column: Stage */}
          <div className="relative mx-auto min-h-[480px] w-full max-w-[640px] sm:min-h-[580px]">
            {/* Dashed outer decorative border */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-4 hidden h-[576px] w-[510px] rounded-bl-[150px] rounded-br-[52px] rounded-tl-[52px] rounded-tr-[52px] border-2 border-dashed border-[#3D7BFF]/30 sm:block"
            />

            {/* Main photo container */}
            <div className="relative ml-auto h-[380px] w-full overflow-hidden rounded-bl-[110px] rounded-br-[36px] rounded-tl-[36px] rounded-tr-[36px] bg-gradient-to-br from-[#BFD3FF] via-[#C9B6F5] to-[#F7B9D9] shadow-[0_36px_70px_rgba(30,30,90,0.28)] sm:h-[540px] sm:w-[78%] sm:rounded-bl-[140px] sm:rounded-br-[44px] sm:rounded-tl-[44px] sm:rounded-tr-[44px]">
              <Image
                src={`${IMG}/hero-device-protection.png`}
                alt="Person using a smartphone with digital security icons"
                fill
                priority
                sizes="(min-width: 1024px) 490px, 90vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F1640]/55"
              />
            </div>

            {/* 3 Floating Glass Chips */}
            <div className="absolute left-3 top-5 z-10 flex items-center gap-2.5 rounded-2xl border border-white/90 bg-white/85 py-2 pl-2 pr-3.5 shadow-[0_20px_45px_rgba(30,30,90,0.2)] backdrop-blur-md sm:left-[26%] sm:top-7">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#3D7BFF] text-white">
                <AlertTriangle className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="text-[13px] font-bold text-[#0A1446]">Fault or defect</span>
            </div>

            <div className="absolute right-2 top-20 z-10 flex items-center gap-2.5 rounded-2xl border border-white/90 bg-white/85 py-2 pl-2 pr-3.5 shadow-[0_20px_45px_rgba(30,30,90,0.2)] backdrop-blur-md sm:right-0 sm:top-28">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#E0127C] text-white">
                <Smartphone className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="text-[13px] font-bold text-[#0A1446]">Accidental damage</span>
            </div>

            <div className="absolute bottom-6 right-3 z-10 hidden items-center gap-2.5 rounded-2xl border border-white/90 bg-white/85 py-2 pl-2 pr-3.5 shadow-[0_20px_45px_rgba(30,30,90,0.2)] backdrop-blur-md sm:flex sm:bottom-14 sm:right-7">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#7B3FE4] text-white">
                <MapPin className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="text-[13px] font-bold text-[#0A1446]">Lost or stolen</span>
            </div>

            {/* Shield Emblem (overlapping right edge) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 top-[195px] z-10 hidden items-center justify-center sm:flex lg:-right-8 lg:top-[220px]"
            >
              <div className="relative h-[180px] w-[164px] drop-shadow-[0_20px_40px_rgba(20,20,80,0.45)] lg:h-[220px] lg:w-[200px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/hero-shield-outer.svg`}
                  alt=""
                  width={180}
                  height={208}
                  className="absolute inset-[3.64%_6%] h-[92.72%] w-[88%]"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/hero-shield-inner.svg`}
                  alt=""
                  width={136}
                  height={158}
                  className="absolute inset-[13.64%_17%_14.55%_17%] h-[71.81%] w-[66%]"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/hero-shield-check.svg`}
                  alt=""
                  width={64}
                  height={48}
                  className="absolute inset-[40%_34%_39.09%_35%] h-[20.91%] w-[31%]"
                />
              </div>
            </div>

            {/* Bottom-left Guide Card */}
            <div className="relative z-20 -mt-12 w-full max-w-[348px] rounded-[28px] border border-white/90 bg-white/85 p-5 shadow-[0_24px_54px_rgba(30,30,90,0.2)] backdrop-blur-md sm:absolute sm:bottom-6 sm:left-4 sm:mt-0">
              <div className="flex items-center justify-between pb-3">
                <p className="text-[15px] font-extrabold text-[#0A1446]">Four kinds of protection</p>
                <span className="rounded-md bg-[#F1F2F8] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#6B7194]">
                  Guide
                </span>
              </div>

              <ul className="divide-y divide-dashed divide-[#0F1640]/12 border-t border-dashed border-[#0F1640]/12">
                {PROTECTION_KINDS.map(({ title, subtitle, tag, bar, tagClass }) => (
                  <li key={title} className="flex items-center gap-3 py-2.5">
                    <span aria-hidden="true" className={`h-8 w-2 shrink-0 rounded ${bar}`} />
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-[#0A1446]">{title}</span>
                      <span className="block text-[11.5px] text-[#6B7194]">{subtitle}</span>
                    </span>
                    <span
                      className={`shrink-0 rounded-lg px-2 py-1 text-[10.5px] font-extrabold uppercase tracking-[0.06em] ${tagClass}`}
                    >
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Strip */}
      <div className="w-full border-y border-[#E3E6F2] bg-white">
        <ul className="mx-auto grid max-w-[1440px] grid-cols-1 divide-y divide-[#E3E6F2] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {PROCESS_STEPS.map(({ step, label, icon: Icon, bg }, index) => (
            <li
              key={step}
              className="relative flex items-center gap-3.5 px-6 py-5 sm:border-b sm:border-[#E3E6F2] sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0"
            >
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] text-white ${bg}`}>
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#8A90A8]">
                  {step}
                </span>
                <span className="block text-[15.5px] font-bold text-[#0A1446]">{label}</span>
              </span>
              {index < PROCESS_STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-[9px] top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rotate-45 border-r border-t border-[#E3E6F2] bg-white lg:block"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
