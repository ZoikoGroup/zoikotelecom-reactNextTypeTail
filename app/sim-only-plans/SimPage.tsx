"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Calendar,
  CardSim,
  Check,
  ChevronRight,
  Globe,
  MessageSquare,
  Package,
  Phone,
  Plus,
  Shield,
  Smartphone,
  Wifi,
} from "lucide-react";

const IMG = "/Images/sim";

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
    { icon: Wifi, text: "EE 4G & 5G coverage (5G where available)" },
    { icon: Globe, text: "EU roaming on eligible plans" },
    { icon: CardSim, text: "SIM (physical) or eSIM" },
  ];
  return (
    <div
      className={`rounded-2xl border border-white/25 bg-gradient-to-r from-[#283AA08C] to-[#141E63BF] p-5 text-white shadow-[0_20px_50px_rgba(10,10,50,0.35)] backdrop-blur-md ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-white/15 pb-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d6338f] to-[#8a2be2]">
          <BarChart3 className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className={`${HEADING} text-lg font-bold uppercase leading-tight`}>
          ON THE EE NETWORK
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
        Coverage varies by location. Roaming terms are shown per plan.
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
          src={`${IMG}/1.jpg`}
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
            PHONE &amp; SIM PLANS
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
            A new phone and EE plan, sorted together
          </h1>
          <p className="mt-5 max-w-[580px] text-lg leading-relaxed text-white/85">
            Choose your phone and an airtime plan in one quote. Device cost,
            airtime and any fees are always shown separately.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#journey"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#e0218a] to-[#c4237f] px-8 py-4 text-base font-semibold shadow-[0_12px_30px_rgba(224,33,138,0.4)] transition-transform hover:-translate-y-0.5"
            >
              Build my quote
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              href="/sim"
              className="inline-flex items-center rounded-xl border-2 border-white/80 px-8 py-4 text-base font-semibold transition-colors hover:bg-white/10"
            >
              See SIM-only plans
            </Link>
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[500px] lg:h-[592px] lg:max-w-none">
          <div className="absolute bottom-0 left-0 h-[92%] w-[78%] sm:w-[62%] lg:left-[2%]">
            <Image
              src={`${IMG}/2.png`}
              alt="Smartphones and accessories arranged on a desk"
              fill
              sizes="(min-width: 1024px) 340px, 60vw"
              className="object-cover object-top [mask-image:linear-gradient(to_bottom,black_75%,transparent),linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [mask-composite:intersect]"
            />
          </div>

          <Chip
            icon={Phone}
            label="Keep your number"
            className="absolute right-0 top-[6%] lg:top-[8%]"
          />
          <NetworkCard className="absolute right-0 top-[19%] hidden w-[340px] sm:block" />
          <Chip
            icon={CardSim}
            label="eSIM or physical SIM"
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

/* ─── Your Phone & SIM Journey ─────────────────────────────────────────── */

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

function PhoneSimJourney() {
  return (
    <section id="journey" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h2
            className={`${HEADING} text-2xl font-bold tracking-[-0.01em] text-[#1c1a33] sm:text-3xl`}
          >
            Your Phone &amp; SIM Journey
          </h2>
          <p className="text-sm text-[#5f6275] sm:text-base">
            Seven steps from choosing a phone to activation.
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
                  Choose your phone
                </p>
              </div>
              <Smartphone
                className="h-4 w-4 text-[#a3227f]"
                aria-hidden="true"
              />
            </div>
            <div className="mt-4 space-y-2 text-xs">
              <div className="rounded-xl border border-[#a3227f] bg-[#fbe6f1]/45 p-3">
                <p className="font-bold text-[#a3227f]">Apple iPhone</p>
                <p className="mt-0.5 text-[10px] text-[#5f6275]">
                  Model and storage confirmed with you
                </p>
              </div>
              <div className="rounded-xl border border-[#eceef3] p-3">
                <p className="font-semibold text-[#1c1a33]">Samsung Galaxy</p>
                <p className="mt-0.5 text-[10px] text-[#5f6275]">
                  Model and storage confirmed with you
                </p>
              </div>
              <div className="rounded-xl border border-[#eceef3] p-3">
                <p className="font-semibold text-[#1c1a33]">Google Pixel</p>
                <p className="mt-0.5 text-[10px] text-[#5f6275]">
                  Model and storage confirmed with you
                </p>
              </div>
              <div className="rounded-xl border border-[#eceef3] p-3">
                <p className="font-semibold text-[#1c1a33]">Not sure yet</p>
                <p className="mt-0.5 text-[10px] text-[#5f6275]">
                  We&apos;ll help you choose
                </p>
              </div>
            </div>
            <p className="mt-2 text-[10px] text-[#5f6275]">
              Device prices and stock are confirmed in your quote.
            </p>
          </div>

          <JourneyArrow />

          {/* Step 2 */}
          <div className="flex-1 rounded-2xl border border-[#eceef3] bg-white p-5 shadow-[0_10px_30px_rgba(15,27,61,0.06)]">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a3227f] text-xs font-bold text-white">
                2
              </span>
              <p className={`${HEADING} text-sm font-bold text-[#1c1a33]`}>
                Choose an airtime plan
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
                Choose SIM or eSIM
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
              Never enter card details or passwords here.
            </p>
          </div>

          <JourneyArrow />

          {/* Step 6 */}
          <div className="flex-1 rounded-2xl border border-[#eceef3] bg-white p-5 shadow-[0_10px_30px_rgba(15,27,61,0.06)]">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a3227f] text-xs font-bold text-white">
                6
              </span>
              <p className={`${HEADING} text-sm font-bold text-[#1c1a33]`}>
                Review your quote
              </p>
            </div>
            <div className="mt-4 space-y-2 text-xs">
              <p className="font-bold text-[#1c1a33]">Your quote</p>
              <div className="flex justify-between border-b border-[#eceef3] pb-1.5">
                <span className="text-[#5f6275]">Apple iPhone</span>
                <span className="font-semibold text-[#1c1a33]">Quoted</span>
              </div>
              <div className="flex justify-between border-b border-[#eceef3] pb-1.5">
                <span className="text-[#5f6275]">Z-Comfort (20GB)</span>
                <span className="font-semibold text-[#1c1a33]">£10.99</span>
              </div>
              <div className="flex justify-between border-b border-[#eceef3] pb-1.5">
                <span className="text-[#5f6275]">SIM (Physical)</span>
                <span className="font-semibold text-[#1c1a33]">£0.00</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="font-bold text-[#1c1a33]">
                  Airtime / month
                </span>
                <span className="font-bold text-[#1c1a33]">£10.99</span>
              </div>
            </div>
            <p className="mt-3 text-[10px] text-[#5f6275]">
              Device cost, any upfront payment and term are added by our team.
            </p>
            <Link
              href="/contact"
              className="mt-3 block w-full rounded-full bg-gradient-to-r from-[#e0218a] to-[#a3227f] py-2 text-center text-xs font-semibold text-white"
            >
              Request my quote
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
                  Delivery &amp; activation
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
                  Zoiko submits your SIM details to BT Wholesale (EE)
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <span className="font-semibold text-[#1c1a33]">
                  We receive the activation code
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <span className="font-semibold text-[#1c1a33]">
                  We share your activation code with you (email/SMS)
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

/* ─── Every cost, shown separately ─────────────────────────────────────── */

function EveryCostShownSeparately() {
  const items = [
    {
      icon: Smartphone,
      title: "Device cost",
      subtitle: "Upfront and/or monthly",
    },
    {
      icon: CardSim,
      title: "Airtime plan",
      subtitle: "Monthly allowances and price",
    },
    {
      icon: CardSim,
      title: "One-off fees",
      subtitle: "Any setup or delivery charges",
    },
    {
      icon: Calendar,
      title: "Contract term",
      subtitle: "How long each part lasts",
    },
    {
      icon: BarChart3,
      title: "Price changes",
      subtitle: "In pounds and pence, if any",
    },
  ];

  return (
    <section className="bg-[#f8f8fb] py-16 lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <SectionHeading
          eyebrow="WHAT YOU PAY"
          title="Every cost, shown separately"
          intro="No borrowed prices. Each line is confirmed in writing before you agree."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map(({ icon: Icon, title, subtitle }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl border border-[#eceef3] bg-white px-5 py-6 text-center shadow-[0_10px_30px_rgba(15,27,61,0.06)]"
            >
              <IconTile>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </IconTile>
              <h3
                className={`${HEADING} mt-4 text-sm font-bold text-[#1c1a33]`}
              >
                {title}
              </h3>
              <p className="mt-1 text-xs text-[#5f6275]">{subtitle}</p>
              <span className="mt-3 inline-block rounded-md bg-[#fff4e0] px-2.5 py-0.5 text-[11px] font-semibold text-[#7c530b]">
                Quoted
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── What to check before you choose ──────────────────────────────────── */

function WhatToCheckBeforeChoosing() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <SectionHeading
          eyebrow="CHOOSING A PHONE"
          title="What to check before you choose"
          intro="Our team will go through these with you."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Featured Photo Card */}
          <div className="relative flex min-h-[270px] flex-col justify-end overflow-hidden rounded-2xl bg-[#1c1a33] p-6 text-white shadow-[0_14px_40px_rgba(15,27,61,0.12)]">
            <Image
              src={`${IMG}/3.png`}
              alt="Smartphone screen displaying apps on a desk"
              fill
              sizes="(min-width: 1024px) 270px, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140c29]/95 via-[#140c29]/55 to-transparent" />
            <div className="relative z-10">
              <h3 className={`${HEADING} text-lg font-bold leading-snug`}>
                Model, storage &amp; colour
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/85">
                Exact model and variant are confirmed with stock before you
                order.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-[#eceef3] bg-white p-7 shadow-[0_14px_40px_rgba(15,27,61,0.06)]">
            <IconTile>
              <CardSim className="h-5 w-5" aria-hidden="true" />
            </IconTile>
            <h3 className={`${HEADING} mt-5 text-lg font-bold text-[#1c1a33]`}>
              SIM or eSIM
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5f6275]">
              We confirm the phone and plan work together, including eSIM where
              supported.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-[#eceef3] bg-white p-7 shadow-[0_14px_40px_rgba(15,27,61,0.06)]">
            <IconTile>
              <Shield className="h-5 w-5" aria-hidden="true" />
            </IconTile>
            <h3 className={`${HEADING} mt-5 text-lg font-bold text-[#1c1a33]`}>
              Warranty &amp; condition
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5f6275]">
              Warranty, condition and returns are set out in your written terms.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-[#eceef3] bg-white p-7 shadow-[0_14px_40px_rgba(15,27,61,0.06)]">
            <IconTile>
              <Package className="h-5 w-5" aria-hidden="true" />
            </IconTile>
            <h3 className={`${HEADING} mt-5 text-lg font-bold text-[#1c1a33]`}>
              Delivery &amp; returns
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5f6275]">
              Timings and return rules are confirmed for your order. We
              don&apos;t promise same-day delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── From question to new phone ───────────────────────────────────────── */

function FromQuestionToNewPhone() {
  const steps = [
    {
      title: "Tell us what you need",
      text: "Your budget, the phone you like and how you use data.",
      image: "4.png",
      alt: "Team meeting to discuss phone and plan requirements",
    },
    {
      title: "Get a combined quote",
      text: "Device, airtime and fees listed separately.",
      image: "5.png",
      alt: "Reviewing an itemized quote sheet together",
    },
    {
      title: "Check your written terms",
      text: "Including your contract summary and any price changes.",
      image: "6.png",
      alt: "Magnifying glass over contract terms document",
    },
    {
      title: "Receive and set up",
      text: "Activate your SIM or eSIM and move your number if you like.",
      image: "7.png",
      alt: "Smartphone with SIM card and ejector tool",
    },
  ];

  return (
    <section className="bg-[#f8f8fb] py-16 lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="From question to new phone"
          intro="Clear steps, no pressure."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col justify-between rounded-2xl border border-[#eceef3] bg-white p-6 shadow-[0_14px_40px_rgba(15,27,61,0.06)]"
            >
              <div>
                <h3 className={`${HEADING} text-base font-bold text-[#1c1a33]`}>
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#5f6275]">
                  {step.text}
                </p>
              </div>
              <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#f8f8fb]">
                <Image
                  src={`${IMG}/${step.image}`}
                  alt={step.alt}
                  fill
                  sizes="(min-width: 1024px) 270px, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Keep your number ─────────────────────────────────────────────────── */

function KeepYourNumberSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1140px] px-6 lg:px-12">
        <SectionHeading
          eyebrow="SWITCHING"
          title="Keep your number"
          intro="Bring your existing number to your new phone and plan."
        />

        <div className="relative mt-10 aspect-[16/7] w-full overflow-hidden rounded-3xl bg-[#f8f8fb] shadow-[0_14px_40px_rgba(15,27,61,0.08)]">
          <Image
            src={`${IMG}/8.png`}
            alt="Hands holding two smartphones while keeping an existing number"
            fill
            sizes="(min-width: 1024px) 1080px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
              <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
            </span>
            <div>
              <p className={`${HEADING} text-sm font-bold text-[#1c1a33]`}>
                Get your PAC code
              </p>
              <p className="mt-1 text-xs text-[#5f6275]">
                Text &ldquo;PAC&rdquo; to 65075 (UK rules).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
              <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
            </span>
            <div>
              <p className={`${HEADING} text-sm font-bold text-[#1c1a33]`}>
                Share it with our team
              </p>
              <p className="mt-1 text-xs text-[#5f6275]">
                We&apos;ll explain the next steps.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-xl border border-[#f3d19e] bg-[#fff4e0] px-5 py-3.5 text-xs font-semibold text-[#7c530b]">
          <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Online number transfer is not available on this page yet.</span>
        </div>
      </div>
    </section>
  );
}

/* ─── Ask about phone & SIM options ────────────────────────────────────── */

function AskAboutPhoneSim() {
  return (
    <section className="bg-[#f8f8fb] py-16 lg:py-20">
      <div className="mx-auto max-w-[900px] px-6">
        <SectionHeading
          eyebrow="ASK OUR TEAM"
          title="Ask about phone &amp; SIM options"
          intro="Tell us what you're looking for. We'll come back with options and a full quote."
        />

        <div className="mx-auto mt-10 max-w-md rounded-2xl border border-[#eceef3] bg-white px-7 py-8 text-center shadow-[0_14px_40px_rgba(15,27,61,0.06)]">
          <div className="mx-auto flex justify-center">
            <IconTile>
              <MessageSquare className="h-5 w-5" aria-hidden="true" />
            </IconTile>
          </div>
          <h3 className={`${HEADING} mt-4 text-lg font-bold text-[#1c1a33]`}>
            Contact our team
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-[#5f6275]">
            Mention &ldquo;Phone &amp; SIM&rdquo; so we can help faster. Please
            don&apos;t share card or bank details.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-block rounded-full bg-gradient-to-r from-[#a3227f] to-[#7a2a8f] px-6 py-2.5 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Go to contact page
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQs ─────────────────────────────────────────────────────────────── */

const PHONE_SIM_FAQS = [
  {
    q: "How is the price made up?",
    a: "Your quote separates device cost, airtime plan charges, any one-off fees, and contract terms so you can see every line clearly before agreeing.",
  },
  {
    q: "Can I spread the cost of the phone?",
    a: "Our team can explain available device and airtime options in your written quote, including any upfront or monthly amounts and contract lengths.",
  },
  {
    q: "Can I keep my number?",
    a: "Yes. Request a PAC code from your current UK provider by texting PAC to 65075 and share it with our team during your order.",
  },
  {
    q: "What if I change my mind?",
    a: "Return rules, cooling-off periods, and contract terms are set out in your written terms and pre-contract summary before you commit.",
  },
  {
    q: "Can I just get a SIM?",
    a: "Yes. If you already have a compatible phone you want to keep, explore our SIM-only plans for flexible 30-day, 12-month, and 24-month options.",
  },
];

function PhoneSimFaqs() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <SectionHeading eyebrow="FAQS" title="Phone &amp; SIM questions" />
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_480px]">
          <ul className="space-y-3">
            {PHONE_SIM_FAQS.map((item, i) => {
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
          <div className="relative mx-auto aspect-[482/361] w-full max-w-[480px] overflow-hidden rounded-2xl border border-[#eceef3]">
            <Image
              src={`${IMG}/9.png`}
              alt="Customer talking on a smartphone outdoors in the evening"
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

export default function SimPage() {
  return (
    <div className="bg-white text-[#1c1a33]">
      <Hero />
      <PhoneSimJourney />
      <EveryCostShownSeparately />
      <WhatToCheckBeforeChoosing />
      <FromQuestionToNewPhone />
      <KeepYourNumberSection />
      <AskAboutPhoneSim />
      <PhoneSimFaqs />

      {/* Footer CTA */}
      <section className="bg-gradient-to-br from-[#c4318f] via-[#a3227f] to-[#7a2a8f] px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold tracking-[-0.01em] [font-family:var(--font-ee-heading)] sm:text-4xl">
          Ready for a new phone?
        </h2>
        <p className="mt-3 text-base text-white/90">
          Speak to our team, or keep your phone with a SIM-only plan.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#a3227f] [font-family:var(--font-ee-heading)] transition-transform hover:-translate-y-0.5"
          >
            Speak to our team
          </Link>
          <Link
            href="/sim"
            className="rounded-full border-2 border-white/70 bg-white/10 px-8 py-3.5 text-sm font-semibold [font-family:var(--font-ee-heading)] hover:bg-white/20"
          >
            See SIM-only plans
          </Link>
        </div>
      </section>
    </div>
  );
}
