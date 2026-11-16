"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeftRight,
  ArrowRight,
  CardSim,
  ChartNoAxesColumnIncreasing,
  Check,
  ChevronRight,
  MessageSquare,
  Plus,
  Send,
  Smartphone,
  Sparkles,
  UserPlus,
} from "lucide-react";

const IMG = "/Images/switch";

/** Poppins heading font (loaded in page.tsx). */
export const HEADING = "[font-family:var(--font-ee-heading)]";

function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`text-xs font-bold uppercase tracking-[0.2em] ${
          dark ? "text-[#e056a8]" : "text-[#a3227f]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`${HEADING} mt-2 text-3xl font-bold leading-tight tracking-[-0.01em] sm:text-4xl ${
          dark ? "text-black" : "text-[#1c1a33]"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-3 text-base leading-relaxed ${
            dark ? "text-white/75" : "text-[#5f6275]"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#a3227f] to-[#7a2a8f] text-white">
      {children}
    </span>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────────────── */

function NetworkCard({ className = "" }: { className?: string }) {
  const rows = [
    { icon: ArrowLeftRight, text: "PAC — text to 65075" },
    { icon: Send, text: "STAC — text to 75075" },
    { icon: Sparkles, text: "INFO — text to 85075" },
  ];
  return (
    <div
      className={`rounded-2xl border border-white/25 bg-gradient-to-b from-[#283AA08C] to-[#141E63BF] p-5 text-white shadow-[0_20px_50px_rgba(10,10,50,0.35)] backdrop-blur-md ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-white/15 pb-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d6338f] to-[#8a2be2]">
          <ArrowLeftRight className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className={`${HEADING} text-lg font-bold uppercase leading-tight`}>
          YOUR FREE SWITCH CODES
        </p>
      </div>
      <ul>
        {rows.map(({ icon: Icon, text }) => (
          <li
            key={text}
            className="flex items-start gap-3 border-b border-white/15 py-3.5 text-[15px] font-medium leading-snug last:border-b-0"
          >
            <Icon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {text}
          </li>
        ))}
      </ul>
      <p className="mt-1 text-xs leading-relaxed text-white/70">
        Codes are free and usually valid for 30 days.
      </p>
    </div>
  );
}

function Chip({
  icon: Icon,
  label,
  className = "",
}: {
  icon: typeof CardSim;
  label: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#1c1a33] shadow-[0_10px_30px_rgba(10,10,50,0.25)] ${className}`}
    >
      <Icon className="h-4 w-4 text-[#c4237f]" aria-hidden="true" />
      {label}
    </span>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b0d3b] text-white">
      {/* Skyline background */}
      <div aria-hidden="true" className="absolute inset-0 lg:left-[38%]">
        <Image
          src={`${IMG}/1.png`}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0b0d3b]/80 lg:bg-transparent lg:bg-gradient-to-r lg:from-[#0b0d3b] lg:via-[#1b1659]/55 lg:to-[#5a2f8a]/30" />
      </div>

      <div className="relative mx-auto grid max-w-[1340px] items-center gap-10 px-6 pb-20 pt-14 lg:min-h-[592px] lg:grid-cols-[1.05fr_1fr] lg:px-12 lg:py-0">
        {/* Copy */}
        <div>
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.12em]">
            SWITCH & SAVE
            <span
              aria-hidden="true"
              className="h-0.5 w-11 rounded bg-[#d6338f]"
            />
            <span
              aria-hidden="true"
              className="h-0.5 w-11 rounded bg-[#a35bd6]"
            />
          </p>
          <h1
            className={`${HEADING} mt-5 text-[clamp(2.1rem,5vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.02em]`}
          >
            Switch your mobile service with confidence
          </h1>
          <p className="mt-5 max-w-[580px] text-lg leading-relaxed text-white/85">
            Keep your number or start fresh. Check your costs first, then choose
            a plan on the EE network that works for you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/ee-mobile-plans"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#e0218a] to-[#c4237f] px-8 py-4 text-base font-semibold shadow-[0_12px_30px_rgba(224,33,138,0.4)] transition-transform hover:-translate-y-0.5"
            >
              View current mobile plans
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center rounded-xl border-2 border-white/80 px-8 py-4 text-base font-semibold transition-colors hover:bg-white/10"
            >
              Ask about switching
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[500px] lg:h-[592px] lg:max-w-none">
          <div className="absolute bottom-0 left-0 h-[92%] w-[78%] sm:w-[62%] lg:left-[2%]">
            <Image
              src={`${IMG}/2.png`}
              alt="Customer holding a smartphone while switching mobile service"
              fill
              sizes="(min-width: 1024px) 340px, 60vw"
              className="object-cover object-top [mask-image:linear-gradient(to_bottom,black_75%,transparent),linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [mask-composite:intersect]"
            />
          </div>

          <Chip
            icon={AlertTriangle}
            label="Don't cancel first"
            className="absolute right-0 top-[6%] lg:top-[8%]"
          />
          <NetworkCard className="absolute right-0 top-[19%] hidden w-[340px] sm:block" />
          <Chip
            icon={Sparkles}
            label="Codes valid 30 days"
            className="absolute bottom-[12%] left-[22%] sm:left-[34%]"
          />
        </div>

        <NetworkCard className="sm:hidden" />
      </div>

      {/* Bottom wave */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full sm:h-24"
        fill="none"
      >
        <path
          d="M0 70 C300 20 520 30 760 60 C1000 90 1220 60 1440 25"
          stroke="#d6338f"
          strokeWidth="2"
        />
        <path
          d="M0 85 C300 40 520 48 760 75 C1000 102 1220 78 1440 45"
          stroke="#8a5cf6"
          strokeWidth="1.5"
          strokeOpacity="0.8"
        />
      </svg>
    </section>
  );
}

/* ─── Your switching journey ───────────────────────────────────────────── */

function JourneyArrow() {
  return (
    <span
      aria-hidden="true"
      className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#c4237f] xl:flex"
    >
      <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
    </span>
  );
}

function SwitchingJourney() {
  return (
    <section className="bg-[#F5F6FB] py-16 lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h2
            className={`${HEADING} text-2xl font-bold tracking-[-0.01em] text-[#1c1a33] sm:text-3xl`}
          >
            Your Switching Journey
          </h2>
          <p className="text-sm text-[#5f6275] sm:text-base">
            From getting your code to your number working with Zoiko.
          </p>
        </div>

        {/* Row 1: Steps 1 to 4 */}
        <div className="mt-8 flex flex-col items-stretch gap-3 xl:flex-row xl:items-center">
          {/* Step 1 */}
          <div className="flex-1 rounded-2xl border border-[#eceef3] bg-white p-5 shadow-[0_10px_30px_rgba(15,27,61,0.06)]">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a3227f] text-xs font-bold text-white">
                1
              </span>
              <p className={`${HEADING} text-sm font-bold text-[#1c1a33]`}>
                What do you want?
              </p>
            </div>
            <div className="mt-4 space-y-2.5 text-xs">
              <div className="rounded-xl border border-[#a3227f] bg-[#fbe6f1]/45 p-3">
                <p className="font-bold text-[#a3227f]">Keep my number</p>
                <p className="mt-0.5 text-[11px] text-[#5f6275]">
                  Move it to Zoiko
                </p>
              </div>
              <div className="rounded-xl border border-[#eceef3] p-3">
                <p className="font-semibold text-[#1c1a33]">Get a new number</p>
                <p className="mt-0.5 text-[11px] text-[#5f6275]">
                  Leave the old one
                </p>
              </div>
              <div className="rounded-xl border border-[#eceef3] p-3">
                <p className="font-semibold text-[#1c1a33]">
                  Check my contract first
                </p>
                <p className="mt-0.5 text-[11px] text-[#5f6275]">
                  See any exit costs
                </p>
              </div>
            </div>
          </div>

          <JourneyArrow />

          {/* Step 2 */}
          <div className="flex-1 rounded-2xl border border-[#eceef3] bg-white p-5 shadow-[0_10px_30px_rgba(15,27,61,0.06)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a3227f] text-xs font-bold text-white">
                  2
                </span>
                <p className={`${HEADING} text-sm font-bold text-[#1c1a33]`}>
                  Get your code
                </p>
              </div>
              <MessageSquare
                className="h-4 w-4 text-[#a3227f]"
                aria-hidden="true"
              />
            </div>
            <div className="mt-4 rounded-xl border border-[#f5d5e6] bg-gradient-to-r from-[#FBEFF7] to-[#F3EAF8] p-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#5f6275]">Text</span>
                <span className="text-[11px] text-[#5f6275]">to 65075</span>
              </div>
              <p className="mt-1 font-bold text-[#a3227f]">PAC</p>
            </div>
            <div className="mt-3 rounded-xl border border-[#eceef3] bg-[#f8f8fb] p-3 text-[11px] leading-relaxed text-[#5f6275]">
              Valid for 30 days. Give it to us when you order — your old
              contract usually ends when the switch completes.
            </div>
          </div>

          <JourneyArrow />

          {/* Step 3 */}
          <div className="flex-1 rounded-2xl border border-[#eceef3] bg-white p-5 shadow-[0_10px_30px_rgba(15,27,61,0.06)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a3227f] text-xs font-bold text-white">
                  3
                </span>
                <p className={`${HEADING} text-sm font-bold text-[#1c1a33]`}>
                  Check your costs
                </p>
              </div>
              <Smartphone
                className="h-4 w-4 text-[#a3227f]"
                aria-hidden="true"
              />
            </div>
            <div className="mt-4 space-y-2 text-xs">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  readOnly
                  checked={false}
                  className="rounded border-[#eceef3]"
                />
                <span className="text-[#1c1a33]">Early-exit charges</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  readOnly
                  checked={false}
                  className="rounded border-[#eceef3]"
                />
                <span className="text-[#1c1a33]">Phone balance owed</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  readOnly
                  checked={false}
                  className="rounded border-[#eceef3]"
                />
                <span className="text-[#1c1a33]">
                  Price rises in £ and pence
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  readOnly
                  checked={false}
                  className="rounded border-[#eceef3]"
                />
                <span className="text-[#1c1a33]">Add-ons you&apos;ll lose</span>
              </label>
            </div>
            <p className="mt-3 text-[10px] text-[#5f6275]">0 of 4 checked</p>
          </div>

          <JourneyArrow />

          {/* Step 4 */}
          <div className="flex-1 rounded-2xl border border-[#eceef3] bg-white p-5 shadow-[0_10px_30px_rgba(15,27,61,0.06)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a3227f] text-xs font-bold text-white">
                  4
                </span>
                <p className={`${HEADING} text-sm font-bold text-[#1c1a33]`}>
                  Choose your new plan
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-xs">
              <div className="flex items-center justify-between rounded-lg border border-[#eceef3] px-3 py-2">
                <div>
                  <span className="font-semibold text-[#1c1a33]">
                    Z-Essentials
                  </span>
                  <p className="text-[10px] text-[#5f6275]">10GB</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#1c1a33]">£8.99</span>
                  <p className="text-[10px] text-[#5f6275]">/month</p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-[#a3227f] bg-[#fbe6f1]/45 px-3 py-2">
                <div>
                  <span className="font-bold text-[#a3227f]">Z-Comfort</span>
                  <p className="text-[10px] text-[#5f6275]">20GB</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#a3227f]">£10.99</span>
                  <p className="text-[10px] text-[#5f6275]">/month</p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-[#eceef3] px-3 py-2">
                <div>
                  <span className="font-semibold text-[#1c1a33]">Z-Royal</span>
                  <p className="text-[10px] text-[#5f6275]">50GB</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#1c1a33]">£14.99</span>
                  <p className="text-[10px] text-[#5f6275]">/month</p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-[#eceef3] px-3 py-2">
                <div>
                  <span className="font-semibold text-[#1c1a33]">
                    Z-Unlimited
                  </span>
                  <p className="text-[10px] text-[#5f6275]">Unlimited</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#1c1a33]">£19.99</span>
                  <p className="text-[10px] text-[#5f6275]">/month</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Steps 5 to 7 centered */}
        <div className="mx-auto mt-6 flex max-w-[1020px] flex-col items-stretch gap-3 xl:flex-row xl:items-center">
          {/* Step 5 */}
          <div className="flex-1 rounded-2xl border border-[#eceef3] bg-white p-5 shadow-[0_10px_30px_rgba(15,27,61,0.06)]">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a3227f] text-xs font-bold text-white">
                5
              </span>
              <p className={`${HEADING} text-sm font-bold text-[#1c1a33]`}>
                SIM or eSIM
              </p>
            </div>
            <div className="mt-4 space-y-2.5 text-xs">
              <div className="rounded-xl border border-[#a3227f] bg-[#fbe6f1]/45 p-3">
                <p className="font-bold text-[#a3227f]">Physical SIM</p>
                <p className="mt-0.5 text-[11px] text-[#5f6275]">
                  Delivered to your address
                </p>
              </div>
              <div className="rounded-xl border border-[#eceef3] p-3">
                <p className="font-semibold text-[#1c1a33]">eSIM</p>
                <p className="mt-0.5 text-[11px] text-[#5f6275]">
                  Get an activation code to set up on a compatible device
                </p>
              </div>
            </div>
          </div>

          <JourneyArrow />

          {/* Step 6 */}
          <div className="flex-1 rounded-2xl border border-[#eceef3] bg-white p-5 shadow-[0_10px_30px_rgba(15,27,61,0.06)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a3227f] text-xs font-bold text-white">
                  6
                </span>
                <p className={`${HEADING} text-sm font-bold text-[#1c1a33]`}>
                  Review your switch
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-xs">
              <p className="font-bold text-[#1c1a33]">Your switch</p>
              <div className="flex justify-between border-b border-[#eceef3] pb-1.5">
                <span className="text-[#5f6275]">Code</span>
                <span className="font-semibold text-[#1c1a33]">PAC</span>
              </div>
              <div className="flex justify-between border-b border-[#eceef3] pb-1.5">
                <span className="text-[#5f6275]">New plan</span>
                <span className="font-semibold text-[#1c1a33]">
                  Z-Comfort (20GB)
                </span>
              </div>
              <div className="flex justify-between border-b border-[#eceef3] pb-1.5">
                <span className="text-[#5f6275]">SIM</span>
                <span className="font-semibold text-[#1c1a33]">
                  Physical SIM
                </span>
              </div>
              <div className="flex justify-between pt-1">
                <div>
                  <p className="font-bold text-[#1c1a33]">New plan / month</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#1c1a33]">£10.99</span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-[10px] text-[#5f6275]">
              Keep your old service until the switch is done.
            </p>
            <Link
              href="/ee-mobile-plans"
              className="mt-3 block w-full rounded-full bg-gradient-to-r from-[#e0218a] to-[#a3227f] py-2 text-center text-xs font-semibold text-white"
            >
              Start my switch
            </Link>
          </div>

          <JourneyArrow />

          {/* Step 7 */}
          <div className="flex-1 rounded-2xl border border-[#eceef3] bg-white p-5 shadow-[0_10px_30px_rgba(15,27,61,0.06)]">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#15803d] text-xs font-bold text-white">
                7
              </span>
              <div>
                <p className={`${HEADING} text-xs font-bold text-[#1c1a33]`}>
                  Switch & activate
                </p>
                <p className="text-[10px] text-[#5f6275]">
                  (EE via BT Wholesale)
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <div>
                  <p className="font-semibold text-[#1c1a33]">
                    Your order is confirmed
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <div>
                  <p className="font-semibold text-[#1c1a33]">
                    Zoiko submits your switch & SIM details
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <div>
                  <p className="font-semibold text-[#1c1a33]">
                    Most switches complete within one working day*
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <div>
                  <p className="font-semibold text-[#1c1a33]">
                    Activate and manage in MyZoiko
                  </p>
                </div>
              </li>
            </ul>
            <p className="mt-3 text-[9px] text-[#5f6275]">
              *Under Ofcom rules; exceptions can apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Interactive Tabs: What would you like to do? ─────────────────────── */

type SwitchOptionKey = "keep" | "new" | "fresh";

const SWITCH_OPTIONS: Record<
  SwitchOptionKey,
  {
    tabLabel: string;
    icon: typeof ArrowLeftRight;
    title: string;
    subtitle: string;
    codeTag: string;
    codeNumber: string;
    codeHint: string;
    bullets: string[];
  }
> = {
  keep: {
    tabLabel: "Keep my number",
    icon: ArrowLeftRight,
    title: "Keep my number",
    subtitle:
      "Ask your current provider for a PAC (Porting Authorisation Code).",
    codeTag: "Text",
    codeNumber: "PAC",
    codeHint: "to 65075",
    bullets: [
      "The code is usually valid for 30 days.",
      "Give it to your new provider when you order.",
      "Your old contract usually ends when the switch completes.",
    ],
  },
  new: {
    tabLabel: "New number",
    icon: Send,
    title: "New number",
    subtitle:
      "Ask your current provider for a STAC (Service Termination Authorisation Code).",
    codeTag: "Text",
    codeNumber: "STAC",
    codeHint: "to 75075",
    bullets: [
      "The code is usually valid for 30 days.",
      "Give it to your new provider when you order.",
      "Your old contract usually ends when the switch completes.",
    ],
  },
  fresh: {
    tabLabel: "Check contract",
    icon: Sparkles,
    title: "Check contract",
    subtitle:
      "Review your current agreement and potential termination charges.",
    codeTag: "Text",
    codeNumber: "INFO",
    codeHint: "to 85075",
    bullets: [
      "Find out if you have any early-exit fees.",
      "Check remaining device financing balance.",
      "Review contract dates before you make a switch.",
    ],
  },
};

function WhatWouldYouLikeToDo() {
  const [selected, setSelected] = useState<SwitchOptionKey>("keep");
  const active = SWITCH_OPTIONS[selected];

  return (
    <section className="bg-[#F8F7FA] py-16 lg:py-20">
      <div className="mx-auto max-w-[1000px] px-6">
        <SectionHeading
          eyebrow="YOUR CHOICE"
          title="What would you like to do?"
          intro="Pick one to see the right code and steps."
        />

        {/* 3 Option Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {(Object.keys(SWITCH_OPTIONS) as SwitchOptionKey[]).map((key) => {
            const opt = SWITCH_OPTIONS[key];
            const Icon = opt.icon;
            const isSelected = selected === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelected(key)}
                aria-pressed={isSelected}
                className={`flex flex-col items-center justify-center rounded-2xl px-6 py-6 text-center transition-all ${
                  isSelected
                    ? "bg-gradient-to-br from-[#a3227f] to-[#7a2a8f] text-white shadow-[0_14px_34px_rgba(163,34,127,0.28)]"
                    : "border border-[#eceef3] bg-white text-[#1c1a33] shadow-[0_8px_24px_rgba(15,27,61,0.05)] hover:border-[#a3227f]"
                }`}
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-[#fbe6f1] text-[#a3227f]"
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className={`${HEADING} mt-3 text-sm font-semibold`}>
                  {opt.tabLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detail Card */}
        <div className="mt-6 rounded-2xl border border-[#eceef3] bg-white p-6 shadow-[0_14px_40px_rgba(15,27,61,0.06)] sm:p-8">
          <h3 className={`${HEADING} text-xl font-bold text-[#1c1a33]`}>
            {active.title}
          </h3>
          <p className="mt-1 text-sm text-[#5f6275]">{active.subtitle}</p>

          {/* Highlighted Banner */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#f2cde2] bg-[#fdf4f9] px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-[#5f6275]">
                {active.codeTag}
              </span>
              <span className={`${HEADING} text-2xl font-bold text-[#a3227f]`}>
                {active.codeNumber}
              </span>
            </div>
            <span className="text-sm font-bold text-[#1c1a33]">
              {active.codeHint}
            </span>
          </div>

          <ul className="mt-5 space-y-3">
            {active.bullets.map((line) => (
              <li
                key={line}
                className="flex items-center gap-3 rounded-xl border border-[#eceef3] px-5 py-3.5 text-sm text-[#1c1a33]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
                  <Check
                    className="h-3 w-3"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─── More than one number ─────────────────────────────────────────────── */

function MoreThanOneNumber() {
  return (
    <section className="bg-white py-16 text-white lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          dark
          eyebrow="MORE THAN ONE NUMBER?"
          title="Switching several lines"
        />

        <div className="relative mt-10 aspect-[1200/460] min-h-[300px] w-full overflow-hidden rounded-3xl border border-white/10">
          <Image
            src={`${IMG}/3.png`}
            alt="Three smartphones showing separate codes on a desk"
            fill
            sizes="(min-width: 1200px) 1200px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d17]/95 via-[#0b0d17]/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <h3
              className={`${HEADING} text-xl font-bold text-white sm:text-2xl`}
            >
              Each number needs its own code
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              If you have several numbers on one account, your current provider
              may give codes online or by phone instead of by text.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── How it works: Three steps to switch ──────────────────────────────── */

function ThreeStepsToSwitch() {
  const steps = [
    {
      title: "Get your code",
      text: "From your current provider by text, online or by phone.",
      img: "4.png",
      alt: "Smartphone displaying various application icons",
    },
    {
      title: "Choose your plan",
      text: "Review the price, term and contract summary.",
      img: "5.png",
      alt: "Laptop open on a wooden desk next to small decor items",
    },
    {
      title: "Give your code",
      text: "Your new provider arranges the switch. Ofcom rules mean most switches complete within one working day, though exceptions can apply.",
      img: "6.png",
      alt: "Person reviewing a tablet or laptop next to a screen",
    },
  ];

  return (
    <section id="how-it-works" className="scroll-mt-28 bg-[#F8F7FA] py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading eyebrow="HOW IT WORKS" title="Three steps to switch" />

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.title}
              className="overflow-hidden rounded-2xl border border-[#eceef3] bg-white shadow-[0_14px_40px_rgba(15,27,61,0.08)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f8f8fb]">
                <Image
                  src={`${IMG}/${step.img}`}
                  alt={step.alt}
                  fill
                  sizes="(min-width: 768px) 380px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className={`${HEADING} text-base font-bold text-[#1c1a33]`}>
                  {step.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#5f6275]">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─── Good to know: Don't cancel first ─────────────────────────────────── */

function GoodToKnow() {
  return (
    <section className="bg-[#FFFFFF] py-16 text-white lg:py-20">
      <div className="mx-auto max-w-[900px] px-6">
        <SectionHeading
          dark
          eyebrow="AVOID MISTAKES"
          title="Don’t cancel first"
        />

        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-[#f3d19e] bg-[#fff4e0] p-6 text-[#1c1a33] shadow-[0_14px_40px_rgba(0,0,0,0.25)]">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f59e0b] text-white">
            <AlertTriangle className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className={`${HEADING} text-base font-bold text-[#6b4300]`}>
              Keep your old service until the switch is done
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[#7c530b]">
              Cancelling your old contract before switching can mean losing your
              number. Check your code hasn&apos;t expired.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Is switching worth it for you? ───────────────────────────────────── */

function WorthItSection() {
  const cards = [
    {
      title: "Early-exit charges",
      text: "Any fee for leaving your current contract early.",
    },
    {
      title: "Phone balance",
      text: "Device payments may continue separately.",
    },
    {
      title: "New monthly price",
      text: "And the contract term.",
    },
    {
      title: "Price rises",
      text: "Any annual changes, in pounds and pence.",
    },
    {
      title: "Add-ons",
      text: "Extras you pay for now and may need again.",
    },
  ];

  return (
    <section className="bg-[#F8F7FA] py-16 lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <SectionHeading
          eyebrow="FULL COST CHECKLIST"
          title="Is switching worth it for you?"
          intro="Check these before you decide."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-[#eceef3] bg-white p-6 shadow-[0_10px_30px_rgba(15,27,61,0.06)]"
            >
              <h3 className={`${HEADING} text-base font-bold text-[#1c1a33]`}>
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5f6275]">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Before you switch: Coverage, SIM & eSIM ──────────────────────────── */

function BeforeYouSwitch() {
  const items = [
    {
      icon: ChartNoAxesColumnIncreasing,
      title: "Check coverage",
      text: "Check signal where you live and work before you switch. We don’t guarantee coverage at any address.",
    },
    {
      icon: CardSim,
      title: "SIM or eSIM",
      text: "Depends on your plan and your device. We’ll confirm this with you.",
    },
  ];

  return (
    <section className="bg-white py-16 text-white lg:py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionHeading
          dark
          eyebrow="BEFORE YOU SWITCH"
          title="Coverage, SIM & eSIM"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#eceef3] bg-white p-7 text-[#1c1a33] shadow-[0_14px_40px_rgba(0,0,0,0.2)]"
            >
              <IconTile>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </IconTile>
              <h3
                className={`${HEADING} mt-5 text-xl font-bold text-[#1c1a33]`}
              >
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#5f6275]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Checklist: Have these ready ──────────────────────────────────────── */

function HaveTheseReady() {
  const items = [
    "Your current provider's name",
    "Your contract end date, if you know it",
    "Whether you want to keep your number",
    "Your phone's make and model",
  ];

  return (
    <section className="bg-[#F8F7FA] py-16 lg:py-20">
      <div className="mx-auto max-w-[1000px] px-6">
        <SectionHeading eyebrow="GET READY" title="Have these ready" />

        <div className="mt-10 rounded-3xl bg-gradient-to-br from-[#a3227f] via-[#8a2585] to-[#68268c] p-7 text-white shadow-[0_20px_50px_rgba(163,34,127,0.25)] sm:p-10">
          <h3 className={`${HEADING} text-xl font-bold`}>
            Before you talk to us
          </h3>
          <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px]">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                  <Check
                    className="h-3 w-3"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-7 border-t border-white/15 pt-5 text-xs text-white/80">
            Please don&apos;t send PAC or STAC codes through the general contact
            form. We&apos;ll tell you when and how to share them.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQs ─────────────────────────────────────────────────────────────── */

const SWITCH_FAQS = [
  {
    q: "What is a PAC code?",
    a: "A Porting Authorisation Code (PAC) is a free 9-character code from your current network that lets you move your existing mobile number to Zoiko Telecom.",
  },
  {
    q: "What is a STAC code?",
    a: "A Service Termination Authorisation Code (STAC) closes your old mobile contract automatically when you switch to Zoiko with a brand-new number.",
  },
  {
    q: "How do I check my contract charges?",
    a: "You can text INFO to 85075 for free to find out if you have any early-exit fees or outstanding phone balances with your current provider.",
  },
  {
    q: "How long does switching take?",
    a: "Once you activate your new SIM or eSIM and submit your PAC or STAC, your number usually transfers within one working day (excluding weekends and bank holidays).",
  },
  {
    q: "Will I save money?",
    a: "Comparing our current mobile plans with your existing tariff can help you find a package that matches your data needs and budget more closely.",
  },
];

function SwitchFaqs() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white py-16 text-white lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <SectionHeading dark eyebrow="FAQS" title="Switching questions" />
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_480px]">
          <ul className="space-y-3">
            {SWITCH_FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={item.q}
                  className="rounded-xl border border-[#eceef3] bg-white text-[#1c1a33]"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className={`${HEADING} flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-medium text-[#1c1a33]`}
                  >
                    {item.q}
                    <Plus
                      className={`h-4 w-4 shrink-0 text-[#a3227f] transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-[15px] leading-relaxed text-[#5f6275]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="relative mx-auto aspect-[482/361] w-full max-w-[480px] overflow-hidden rounded-2xl">
            <Image
              src={`${IMG}/7.png`}
              alt="Wooden blocks displaying Q and A with question and exclamation marks"
              fill
              sizes="480px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page Export ─────────────────────────────────────────────────── */

export default function SwitchPage() {
  return (
    <div className="bg-white text-[#1c1a33]">
      <Hero />
      <SwitchingJourney />
      <WhatWouldYouLikeToDo />
      <MoreThanOneNumber />
      <ThreeStepsToSwitch />
      <GoodToKnow />
      <WorthItSection />
      <BeforeYouSwitch />
      <HaveTheseReady />
      <SwitchFaqs />
    </div>
  );
}
