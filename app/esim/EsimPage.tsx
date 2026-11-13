"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CardSim,
  Check,
  ChevronRight,
  HelpCircle,
  Lock,
  Phone,
  Plus,
  QrCode,
  RefreshCw,
  Smartphone,
} from "lucide-react";

const IMG = "/Images/esim";

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
          dark ? "text-white" : "text-[#1c1a33]"
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
    { icon: CardSim, text: "No physical SIM card" },
    { icon: Smartphone, text: "Compatible device needed" },
    { icon: Check, text: "Eligible plan needed" },
  ];
  return (
    <div
      className={`rounded-2xl border border-white/25 bg-gradient-to-b from-[#283AA08C] to-[#141E63BF] p-5 text-white shadow-[0_20px_50px_rgba(10,10,50,0.35)] backdrop-blur-md ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-white/15 pb-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d6338f] to-[#8a2be2]">
          <CardSim className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className={`${HEADING} text-lg font-bold uppercase leading-tight`}>
          ESIM ESSENTIALS
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
        eSIM details are sent for eligible orders. Timings vary.
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
      {/* Background */}
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
            MOBILE / ESIM
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
            eSIM: a digital way to connect.
          </h1>
          <p className="mt-5 max-w-[580px] text-lg leading-relaxed text-white/85">
            An eSIM is a SIM built into your phone, so you don&apos;t need a
            physical card. You need a compatible device and an eligible plan on
            the EE network.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/ee-mobile-plans"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#e0218a] to-[#c4237f] px-8 py-4 text-base font-semibold shadow-[0_12px_30px_rgba(224,33,138,0.4)] transition-transform hover:-translate-y-0.5"
            >
              View Mobile Plans
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="#choose-task"
              className="inline-flex items-center rounded-xl border-2 border-white/80 px-8 py-4 text-base font-semibold transition-colors hover:bg-white/10"
            >
              Get eSIM Help
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[500px] lg:h-[592px] lg:max-w-none">
          <div className="absolute bottom-10 left-0 h-[92%] w-[78%] sm:w-[62%] lg:left-[-20px]">
            <Image
              src={`${IMG}/2.png`}
              alt="Smartphone with eSIM and wireless earbuds on a table"
              fill
              sizes="(min-width: 1024px) 340px, 60vw"
              className="object-cover object-top [mask-image:linear-gradient(to_bottom,black_75%,transparent),linear-gradient(to_right,transparent,black_15%)] [mask-composite:intersect]"
            />
          </div>

          <Chip
            icon={Lock}
            label="Never share your QR"
            className="absolute right-0 top-[6%] lg:top-[8%]"
          />
          <NetworkCard className="absolute right-0 top-[19%] hidden w-[340px] sm:block" />
          <Chip
            icon={QrCode}
            label="Scan to install"
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

/* ─── Your eSIM Journey ────────────────────────────────────────────────── */

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

function ESimJourney() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h2
            className={`${HEADING} text-2xl font-bold tracking-[-0.01em] text-[#1c1a33] sm:text-3xl`}
          >
            Your eSIM Journey
          </h2>
          <p className="text-sm text-[#5f6275] sm:text-base">
            From checking your phone to your eSIM working.
          </p>
        </div>

        {/* Row 1: Steps 1 to 4 */}
        <div className="mt-8 flex flex-col items-stretch gap-3 xl:flex-row xl:items-center">
          {/* Step 1 */}
          <div className="flex-1 rounded-2xl border border-[#eceef3] bg-white p-5 shadow-[0_10px_30px_rgba(15,27,61,0.06)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a3227f] text-xs font-bold text-white">
                  1
                </span>
                <p className={`${HEADING} text-sm font-bold text-[#1c1a33]`}>
                  Check your device
                </p>
              </div>
              <Smartphone
                className="h-4 w-4 text-[#a3227f]"
                aria-hidden="true"
              />
            </div>
            <div className="mt-4 space-y-2.5 text-xs">
              <div className="rounded-xl border border-[#eceef3] bg-[#f8f8fb] p-3 font-medium text-[#1c1a33]">
                Apple iPhone
              </div>
              <div className="rounded-xl border border-[#eceef3] bg-[#f8f8fb] p-3 text-[11px] leading-relaxed text-[#5f6275]">
                iPhone XS/XR and later usually support eSIM. Check Settings ›
                Mobile Service › Add eSIM. We confirm compatibility before
                activation.
              </div>
            </div>
          </div>

          <JourneyArrow />

          {/* Step 2 */}
          <div className="flex-1 rounded-2xl border border-[#eceef3] bg-white p-5 shadow-[0_10px_30px_rgba(15,27,61,0.06)]">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a3227f] text-xs font-bold text-white">
                2
              </span>
              <p className={`${HEADING} text-sm font-bold text-[#1c1a33]`}>
                Choose a plan
              </p>
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

          <JourneyArrow />

          {/* Step 3 */}
          <div className="flex-1 rounded-2xl border border-[#eceef3] bg-white p-5 shadow-[0_10px_30px_rgba(15,27,61,0.06)]">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a3227f] text-xs font-bold text-white">
                3
              </span>
              <p className={`${HEADING} text-sm font-bold text-[#1c1a33]`}>
                eSIM or physical SIM
              </p>
            </div>
            <div className="mt-4 space-y-2.5 text-xs">
              <div className="rounded-xl border border-[#eceef3] p-3">
                <p className="font-semibold text-[#1c1a33]">Physical SIM</p>
                <p className="mt-0.5 text-[11px] text-[#5f6275]">
                  Delivered to your address
                </p>
              </div>
              <div className="rounded-xl border border-[#a3227f] bg-[#fbe6f1]/45 p-3">
                <p className="font-bold text-[#a3227f]">eSIM</p>
                <p className="mt-0.5 text-[11px] text-[#5f6275]">
                  Get an activation code to set up on a compatible device
                </p>
              </div>
            </div>
          </div>

          <JourneyArrow />

          {/* Step 4 */}
          <div className="flex-1 rounded-2xl border border-[#eceef3] bg-white p-5 shadow-[0_10px_30px_rgba(15,27,61,0.06)]">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a3227f] text-xs font-bold text-white">
                4
              </span>
              <p className={`${HEADING} text-sm font-bold text-[#1c1a33]`}>
                Keep or change your number
              </p>
            </div>
            <div className="mt-4 space-y-2 text-xs">
              <div className="rounded-xl border border-[#a3227f] bg-[#fbe6f1]/45 p-3">
                <p className="font-bold text-[#a3227f]">
                  Keep my existing number
                </p>
                <p className="mt-0.5 text-[11px] text-[#5f6275]">
                  I have a PAC code
                </p>
              </div>
              <div className="rounded-xl border border-[#eceef3] p-3">
                <p className="font-semibold text-[#1c1a33]">
                  Switch without keeping my number
                </p>
                <p className="mt-0.5 text-[11px] text-[#5f6275]">
                  I have a STAC code
                </p>
              </div>
              <div className="rounded-xl border border-[#eceef3] p-3">
                <p className="font-semibold text-[#1c1a33]">
                  Get a new Zoiko number
                </p>
              </div>
            </div>
            <p className="mt-2 text-[10px] text-[#5f6275]">
              Text PAC to 65075 or STAC to 75075 to get your code. Don&apos;t
              enter codes here — we&apos;ll ask for them securely.
            </p>
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
                Enter your details
              </p>
            </div>
            <div className="mt-4 space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-[#1c1a33]">
                  Full name <span className="text-[#a3227f]">*</span>
                </label>
                <input
                  type="text"
                  readOnly
                  value="Your full name"
                  className="mt-1 w-full rounded-lg border border-[#eceef3] bg-[#f8f8fb] px-3 py-2 text-[#5f6275]"
                />
              </div>
              <div>
                <label className="block font-semibold text-[#1c1a33]">
                  Email address <span className="text-[#a3227f]">*</span>
                </label>
                <input
                  type="text"
                  readOnly
                  value="name@example.co.uk"
                  className="mt-1 w-full rounded-lg border border-[#eceef3] bg-[#f8f8fb] px-3 py-2 text-[#5f6275]"
                />
              </div>
              <div>
                <label className="block font-semibold text-[#1c1a33]">
                  Mobile number <span className="text-[#a3227f]">*</span>
                </label>
                <input
                  type="text"
                  readOnly
                  value="07xxx xxxxxx"
                  className="mt-1 w-full rounded-lg border border-[#eceef3] bg-[#f8f8fb] px-3 py-2 text-[#5f6275]"
                />
              </div>
            </div>
            <p className="mt-2 text-[10px] text-[#5f6275]">
              Never enter card details or passwords here. Your eSIM QR code is
              sent to this email for eligible orders.
            </p>
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
                  Review & pay
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-xs">
              <p className="font-bold text-[#1c1a33]">Your order</p>
              <div className="flex justify-between border-b border-[#eceef3] pb-1.5">
                <span className="text-[#5f6275]">Z-Comfort (20GB)</span>
                <span className="font-semibold text-[#1c1a33]">£10.99</span>
              </div>
              <div className="flex justify-between border-b border-[#eceef3] pb-1.5">
                <span className="text-[#5f6275]">SIM</span>
                <span className="font-semibold text-[#1c1a33]">SIM (eSIM)</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="font-bold text-[#1c1a33]">Monthly total</span>
                <span className="font-bold text-[#1c1a33]">£10.99</span>
              </div>
            </div>
            <label className="mt-3 flex items-start gap-2 text-[11px] text-[#5f6275]">
              <input
                type="checkbox"
                readOnly
                checked={false}
                className="mt-0.5 rounded border-[#eceef3]"
              />
              <span>
                I agree to the contract terms, price changes and pre-contract
                information.
              </span>
            </label>
            <Link
              href="/ee-mobile-plans"
              className="mt-3 block w-full rounded-full bg-gradient-to-r from-[#e0218a] to-[#a3227f] py-2 text-center text-xs font-semibold text-white"
            >
              Continue to payment
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
                  Get your QR & activate
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
                <span className="font-semibold text-[#1c1a33]">
                  Your order is confirmed
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <span className="font-semibold text-[#1c1a33]">
                  Zoiko requests your eSIM profile
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <span className="font-semibold text-[#1c1a33]">
                  Your QR code arrives by email
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <span className="font-semibold text-[#1c1a33]">
                  Scan, install & test your line
                </span>
              </li>
            </ul>
            <p className="mt-3 text-[10px] text-[#5f6275]">
              Then manage everything in MyZoiko.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Choose a Task ────────────────────────────────────────────────────── */

type TaskKey = "check" | "activate" | "move" | "fix";

const TASK_CARDS: Record<
  TaskKey,
  {
    title: string;
    subtitle: string;
    image: string;
    alt: string;
  }
> = {
  check: {
    title: "Check my device",
    subtitle: "Does it support eSIM?",
    image: "1.png",
    alt: "Smartphone displaying app icons",
  },
  activate: {
    title: "Activate an eSIM",
    subtitle: "How set-up works",
    image: "2.png",
    alt: "Hand scanning card reader with phone",
  },
  move: {
    title: "Move to a new phone",
    subtitle: "Transfer or replace",
    image: "3.png",
    alt: "Two smartphones side-by-side",
  },
  fix: {
    title: "Fix a problem",
    subtitle: "Troubleshooting",
    image: "4.png",
    alt: "Customer support specialist wearing headset",
  },
};

function ChooseATask() {
  const [activeTask, setActiveTask] = useState<TaskKey>("check");

  return (
    <section id="choose-task" className="bg-[#f8f8fb] py-16 lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <SectionHeading
          eyebrow="CHOOSE A TASK"
          title="What do you need to do?"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {(Object.keys(TASK_CARDS) as TaskKey[]).map((key) => {
            const task = TASK_CARDS[key];
            const isSelected = activeTask === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTask(key)}
                className={`overflow-hidden rounded-2xl border bg-white p-6 text-left transition-all shadow-[0_14px_40px_rgba(15,27,61,0.08)] ${
                  isSelected
                    ? "border-[#a3227f] ring-2 ring-[#a3227f]/20"
                    : "border-[#eceef3] hover:border-[#a3227f]"
                }`}
              >
                <p className={`${HEADING} text-lg font-bold text-[#1c1a33]`}>
                  {task.title}
                </p>
                <p className="mt-1 text-sm text-[#5f6275]">{task.subtitle}</p>
                <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#f8f8fb]">
                  <Image
                    src={`${IMG}/${task.image}`}
                    alt={task.alt}
                    fill
                    sizes="(min-width: 1024px) 270px, 50vw"
                    className="object-cover"
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Your eSIM checklist ──────────────────────────────────────────────── */

function ESimChecklist() {
  const checklist = [
    {
      title: "A compatible phone",
      text: "Check your phone settings or the manufacturer's website.",
    },
    { title: "An eligible plan", text: "Not every plan supports eSIM." },
    {
      title: "An internet connection",
      text: "Wi-Fi is needed to download your eSIM.",
    },
    {
      title: "Secure email access",
      text: "Your eSIM details may be sent by email for eligible orders.",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1000px] px-6">
        <SectionHeading
          eyebrow="BEFORE YOU START"
          title="Your eSIM checklist"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {checklist.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3.5 rounded-2xl border border-[#eceef3] bg-white p-6 shadow-[0_10px_30px_rgba(15,27,61,0.06)]"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
                <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
              </span>
              <div>
                <p className={`${HEADING} text-base font-bold text-[#1c1a33]`}>
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-[#5f6275]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── From order to active ─────────────────────────────────────────────── */

function FromOrderToActive() {
  const steps = [
    { title: "Choose a plan", text: "Pick an eligible plan." },
    { title: "We confirm eligibility", text: "For your plan and device." },
    {
      title: "You receive your details",
      text: "For eligible orders, usually a QR code by email.",
    },
    { title: "Install on your phone", text: "Follow your device's steps." },
    { title: "Test your line", text: "Make a call and check data." },
    { title: "Need help?", text: "Contact our team if anything doesn't work." },
  ];

  return (
    <section className="bg-[#f8f8fb] py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="From order to active"
          intro="Timings vary. We don't promise instant activation."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="rounded-2xl border border-[#eceef3] bg-white p-6 shadow-[0_10px_30px_rgba(15,27,61,0.06)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fbe6f1] text-xs font-bold text-[#a3227f]">
                {idx + 1}
              </span>
              <p
                className={`${HEADING} mt-4 text-base font-bold text-[#1c1a33]`}
              >
                {step.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#5f6275]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Device Guides: iPhone and Android ────────────────────────────────── */

function DeviceGuides() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="DEVICE GUIDES"
          title="iPhone and Android"
          intro="General steps. Labels vary by model."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-br from-[#2b163d] to-[#4a1c52] p-8 text-white shadow-[0_20px_50px_rgba(43,22,61,0.25)]">
            <h3 className={`${HEADING} text-xl font-bold`}>iPhone</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/85">
              Go to Settings › Mobile Service (or Mobile Data) › Add eSIM, then
              scan the QR code.
            </p>
            <a
              href="https://support.apple.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-white underline hover:text-[#fbe6f1]"
            >
              Apple eSIM support ↗
            </a>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#6b1c5a] to-[#a3227f] p-8 text-white shadow-[0_20px_50px_rgba(163,34,127,0.25)]">
            <h3 className={`${HEADING} text-xl font-bold`}>Android</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/85">
              Usually Settings › Network & internet › SIMs › Add eSIM. Menus
              differ by manufacturer.
            </p>
            <a
              href="https://support.google.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-white underline hover:text-[#fbe6f1]"
            >
              Android help ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Protect your QR code ─────────────────────────────────────────────── */

function ProtectYourQr() {
  return (
    <section className="bg-[#f8f8fb] py-16 lg:py-20">
      <div className="mx-auto max-w-[900px] px-6">
        <SectionHeading eyebrow="STAY SAFE" title="Protect your QR code" />

        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-[#f3d19e] bg-[#fff4e0] p-6 text-[#1c1a33] shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#dc2626] text-white">
            <Lock className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className={`${HEADING} text-base font-bold text-[#7f1d1d]`}>
              Treat it like a key
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[#991b1b]">
              Never forward or share your eSIM QR code. Anyone with it could
              install your line. We will never ask you to send it to us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── New phone, lost phone or switching ───────────────────────────────── */

function MovingOrReplacing() {
  const cards = [
    {
      icon: Smartphone,
      title: "New phone",
      text: "Moving your eSIM may need our help. Contact us before you reset your old phone.",
    },
    {
      icon: AlertTriangle,
      title: "Lost or stolen",
      text: "Contact us straight away. We'll check your identity before issuing a replacement.",
    },
    {
      icon: ArrowRight,
      title: "Keep your number",
      text: 'Switching to us? Get a PAC by texting "PAC" to 65075. This is separate from installing your eSIM.',
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <SectionHeading
          eyebrow="MOVING OR REPLACING"
          title="New phone, lost phone or switching"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#eceef3] bg-white p-7 shadow-[0_14px_40px_rgba(15,27,61,0.08)]"
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

/* ─── Troubleshooting: Something not working? ──────────────────────────── */

const TROUBLESHOOTING_ITEMS = [
  {
    q: "I haven't received my eSIM email",
    a: "Check your spam or junk folder. Eligible orders usually receive their QR code within a few hours. If it's missing, contact our team.",
  },
  {
    q: "My phone says eSIM isn't supported",
    a: "Ensure your phone model supports eSIM and is unlocked to the network. Older devices or regional variants may lack eSIM hardware.",
  },
  {
    q: "The QR code says it's invalid",
    a: "QR codes can only be scanned once. If you've already scanned it or tried re-using an old code, you will need a replacement from support.",
  },
  {
    q: "The download failed",
    a: "Ensure you have a stable Wi-Fi or mobile data connection before attempting to download your eSIM profile again.",
  },
  {
    q: "I have no signal after installing",
    a: "Restart your device, check that your line is toggled on in your mobile settings, and allow a few minutes for network registration.",
  },
];

function Troubleshooting() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#f8f8fb] py-16 lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <SectionHeading
          eyebrow="TROUBLESHOOTING"
          title="Something not working?"
        />
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_480px]">
          <ul className="space-y-3">
            {TROUBLESHOOTING_ITEMS.map((item, i) => {
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
              src={`${IMG}/5.png`}
              alt="Support team working together at desks in an office"
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

/* ─── FAQs ─────────────────────────────────────────────────────────────── */

const ESIM_FAQS = [
  {
    q: "What is an eSIM?",
    a: "An eSIM is a digital SIM embedded directly into your phone's hardware, letting you connect without inserting a physical plastic card.",
  },
  {
    q: "Can I use two SIMs at once?",
    a: "Yes! Many modern smartphones support Dual SIM functionality, allowing you to use a physical SIM and an eSIM (or two eSIMs) simultaneously.",
  },
  {
    q: "Does eSIM work abroad?",
    a: "Yes, eSIMs support roaming and international travel exactly like physical SIM cards depending on your plan terms.",
  },
  {
    q: "Can I switch my physical SIM to eSIM?",
    a: "Yes, you can request a switch from a physical SIM to an eSIM through your MyZoiko account or by contacting customer support.",
  },
];

function ESimFaqs() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1000px] px-6">
        <SectionHeading eyebrow="FAQS" title="eSIM questions" />
        <ul className="mt-10 space-y-3">
          {ESIM_FAQS.map((item, i) => {
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
      </div>
    </section>
  );
}

/* ─── Main Page Export ─────────────────────────────────────────────────── */

export default function EsimPage() {
  return (
    <div className="bg-white text-[#1c1a33]">
      <Hero />
      <ESimJourney />
      <ChooseATask />
      <ESimChecklist />
      <FromOrderToActive />
      <DeviceGuides />
      <ProtectYourQr />
      <MovingOrReplacing />
      <Troubleshooting />
      <ESimFaqs />

      {/* Footer CTA */}
      <section className="bg-gradient-to-br from-[#c4318f] via-[#a3227f] to-[#7a2a8f] px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold tracking-[-0.01em] [font-family:var(--font-ee-heading)] sm:text-4xl">
          Ready for eSIM?
        </h2>
        <p className="mt-3 text-base text-white/90">
          View our plans or get help from our team.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/ee-mobile-plans"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#a3227f] [font-family:var(--font-ee-heading)] transition-transform hover:-translate-y-0.5"
          >
            View Mobile Plans
          </Link>
          <Link
            href="/contact"
            className="rounded-full border-2 border-white/70 bg-white/10 px-8 py-3.5 text-sm font-semibold [font-family:var(--font-ee-heading)] hover:bg-white/20"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
}
