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
  Globe,
  Phone,
  Plus,
  Shield,
  Sparkles,
} from "lucide-react";

const IMG = "/Images/roaming";

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

/* ─── Hero ─────────────────────────────────────────────────────────────── */

function NetworkCard({ className = "" }: { className?: string }) {
  const rows = [
    { icon: Globe, text: "Roaming & calling abroad" },
    { icon: Sparkles, text: "EU roaming on eligible plans" },
    { icon: AlertTriangle, text: "Ship & plane networks cost more" },
  ];
  return (
    <div
      className={`rounded-2xl border border-white/25 bg-gradient-to-b from-[#283AA08C] to-[#141E63BF] p-5 text-white shadow-[0_20px_50px_rgba(10,10,50,0.35)] backdrop-blur-md ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-white/15 pb-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d6338f] to-[#8a2be2]">
          <Globe className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className={`${HEADING} text-lg font-bold uppercase leading-tight`}>
          TRAVEL SMART
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
        Rates depend on your plan and destination.
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

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-6 pb-20 pt-14 lg:min-h-[592px] lg:grid-cols-[1.05fr_1fr] lg:px-12 lg:py-0">
        {/* Copy */}
        <div>
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.12em]">
            MOBILE TRAVEL & INTERNATIONAL
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
            Stay informed before you travel or call abroad
          </h1>
          <p className="mt-5 max-w-[580px] text-lg leading-relaxed text-white/85">
            Roaming abroad and calling another country from the UK may be
            charged differently. Check your plan, destination and current terms
            first.
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
              href="#topics"
              className="inline-flex items-center rounded-xl border-2 border-white/80 px-8 py-4 text-base font-semibold transition-colors hover:bg-white/10"
            >
              Ask our team
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[500px] lg:h-[592px] lg:max-w-none">
          <div className="absolute bottom-10 left-0 h-[92%] w-[78%] sm:w-[62%] lg:left-[-20px]">
            <Image
              src={`${IMG}/2.png`}
              alt="Travel map, notebook, pencil and camera laid out on a table"
              fill
              sizes="(min-width: 1024px) 340px, 60vw"
              className="object-cover object-top [mask-image:radial-gradient(ellipse_55%_55%_at_50%_50%,black_45%,transparent_100%)]"
            />
          </div>

          <Chip
            icon={Shield}
            label="Set a spend limit"
            className="absolute right-0 top-[6%] lg:top-[8%]"
          />
          <NetworkCard className="absolute right-0 top-[19%] hidden w-[340px] sm:block" />
          <Chip
            icon={Globe}
            label="Check before you fly"
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

/* ─── Your Travel-Ready Journey ────────────────────────────────────────── */

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

function TravelJourney() {
  return (
    <section className="bg-[#F5F6FB] py-16 lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h2
            className={`${HEADING} text-2xl font-bold tracking-[-0.01em] text-[#1c1a33] sm:text-3xl`}
          >
            Your Travel-Ready Journey
          </h2>
          <p className="text-sm text-[#5f6275] sm:text-base">
            Seven steps to use your phone abroad without surprises.
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
                Where are you going?
              </p>
            </div>
            <div className="mt-4 space-y-2.5 text-xs">
              <div className="rounded-xl border border-[#eceef3] bg-[#f8f8fb] p-3 font-medium text-[#1c1a33]">
                EU / EEA country
              </div>
              <div className="rounded-xl border border-[#eceef3] bg-[#f8f8fb] p-3 text-[11px] leading-relaxed text-[#5f6275]">
                Roaming terms depend on your plan. Not every plan includes EU
                roaming — check yours.
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
                What will you use?
              </p>
            </div>
            <div className="mt-4 space-y-2 text-xs">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  readOnly
                  checked={false}
                  className="mt-0.5 rounded border-[#eceef3]"
                />
                <div>
                  <span className="font-semibold text-[#1c1a33]">
                    Mobile data
                  </span>
                  <p className="text-[10px] text-[#5f6275]">
                    Maps, messages, social
                  </p>
                </div>
              </label>
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  readOnly
                  checked={false}
                  className="mt-0.5 rounded border-[#eceef3]"
                />
                <div>
                  <span className="font-semibold text-[#1c1a33]">Calls</span>
                  <p className="text-[10px] text-[#5f6275]">Home and local</p>
                </div>
              </label>
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  readOnly
                  checked={false}
                  className="mt-0.5 rounded border-[#eceef3]"
                />
                <span className="font-semibold text-[#1c1a33]">Texts</span>
              </label>
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
                Check your plan
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
            <p className="mt-2 text-[10px] text-[#5f6275]">
              Roaming terms are shown in each plan&apos;s details.
            </p>
          </div>

          <JourneyArrow />

          {/* Step 4 */}
          <div className="flex-1 rounded-2xl border border-[#eceef3] bg-white p-5 shadow-[0_10px_30px_rgba(15,27,61,0.06)]">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a3227f] text-xs font-bold text-white">
                4
              </span>
              <p className={`${HEADING} text-sm font-bold text-[#1c1a33]`}>
                Set your limits
              </p>
            </div>
            <div className="mt-4 space-y-3 text-xs">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  readOnly
                  checked={false}
                  className="mt-0.5 rounded border-[#eceef3]"
                />
                <span className="text-[#1c1a33]">Ask about a spend limit</span>
              </label>
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  readOnly
                  checked={false}
                  className="mt-0.5 rounded border-[#eceef3]"
                />
                <span className="text-[#1c1a33]">
                  Know how to turn off data roaming
                </span>
              </label>
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  readOnly
                  checked={false}
                  className="mt-0.5 rounded border-[#eceef3]"
                />
                <span className="text-[#1c1a33]">Use Wi-Fi where you can</span>
              </label>
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
                Before you fly
              </p>
            </div>
            <div className="mt-4 space-y-3 text-xs">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  readOnly
                  checked={false}
                  className="mt-0.5 rounded border-[#eceef3]"
                />
                <span className="text-[#1c1a33]">Download maps & tickets</span>
              </label>
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  readOnly
                  checked={false}
                  className="mt-0.5 rounded border-[#eceef3]"
                />
                <div>
                  <span className="text-[#1c1a33]">
                    Save emergency contacts
                  </span>
                  <p className="text-[10px] text-[#5f6275]">
                    In the EU, 112 works
                  </p>
                </div>
              </label>
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  readOnly
                  checked={false}
                  className="mt-0.5 rounded border-[#eceef3]"
                />
                <span className="text-[#1c1a33]">
                  Watch for ship & plane networks
                </span>
              </label>
            </div>
          </div>

          <JourneyArrow />

          {/* Step 6 */}
          <div className="flex-1 rounded-2xl border border-[#eceef3] bg-white p-5 shadow-[0_10px_30px_rgba(15,27,61,0.06)]">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a3227f] text-xs font-bold text-white">
                6
              </span>
              <p className={`${HEADING} text-sm font-bold text-[#1c1a33]`}>
                Your travel summary
              </p>
            </div>
            <div className="mt-4 space-y-2 text-xs">
              <p className="font-bold text-[#1c1a33]">Your trip</p>
              <div className="flex justify-between border-b border-[#eceef3] pb-1.5">
                <span className="text-[#5f6275]">Going to</span>
                <span className="font-semibold text-[#1c1a33]">EU / EEA</span>
              </div>
              <div className="flex justify-between border-b border-[#eceef3] pb-1.5">
                <span className="text-[#5f6275]">Using</span>
                <span className="font-semibold text-[#1c1a33]">—</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-[#5f6275]">Plan</span>
                <span className="font-semibold text-[#1c1a33]">
                  Z-Comfort (20GB)
                </span>
              </div>
            </div>
            <p className="mt-3 text-[10px] text-[#5f6275]">
              Rates for your destination are in your plan terms.
            </p>
            <Link
              href="/contact"
              className="mt-3 block w-full rounded-full bg-gradient-to-r from-[#e0218a] to-[#a3227f] py-2 text-center text-xs font-semibold text-white"
            >
              Ask about roaming
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
                  Away & back home
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <span className="font-semibold text-[#1c1a33]">
                  Read the arrival text you receive
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <span className="font-semibold text-[#1c1a33]">
                  Track usage in MyZoiko
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <span className="font-semibold text-[#1c1a33]">
                  Check your bill when you&apos;re home
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <span className="font-semibold text-[#1c1a33]">
                  Contact us if something looks wrong
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Interactive Tabs: Choose your topic ──────────────────────────────── */

type TopicKey = "roaming" | "international" | "bill";

const TOPIC_OPTIONS: Record<
  TopicKey,
  {
    tabLabel: string;
    icon: typeof Globe;
    title: string;
    subtitle: string;
    bullets: string[];
  }
> = {
  roaming: {
    tabLabel: "Roaming abroad",
    icon: Globe,
    title: "Using your phone abroad",
    subtitle:
      "Roaming is using your UK mobile while you're in another country.",
    bullets: [
      "Charges depend on your plan and the country you visit.",
      "Data, calls and texts may be charged differently.",
      "Check your plan's roaming terms before you travel.",
    ],
  },
  international: {
    tabLabel: "International calls",
    icon: Phone,
    title: "Calling abroad from the UK",
    subtitle: "Making international calls or texts from your UK phone line.",
    bullets: [
      "Standard UK plan minutes usually only cover calls within the UK.",
      "Calling numbers abroad incurs international call charges.",
      "Check country rates before dialing out.",
    ],
  },
  bill: {
    tabLabel: "Bill safety",
    icon: Shield,
    title: "Managing your roaming spend",
    subtitle: "Stay in control of your monthly bill while traveling.",
    bullets: [
      "Set up spend limits to cap unexpected roaming charges.",
      "Receive real-time text alerts when data thresholds are reached.",
      "Track your usage live through your MyZoiko account.",
    ],
  },
};

function ChooseYourTopic() {
  const [selected, setSelected] = useState<TopicKey>("roaming");
  const active = TOPIC_OPTIONS[selected];

  return (
    <section id="topics" className="bg-[#f8f8fb] py-16 lg:py-20">
      <div className="mx-auto max-w-[1000px] px-6">
        <SectionHeading eyebrow="WHAT DO YOU NEED?" title="Choose your topic" />

        {/* 3 Option Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {(Object.keys(TOPIC_OPTIONS) as TopicKey[]).map((key) => {
            const opt = TOPIC_OPTIONS[key];
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

/* ─── Check rates for a country ────────────────────────────────────────── */

function CheckRates() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[900px] px-6">
        <SectionHeading eyebrow="RATES" title="Check rates for a country" />

        <div className="mt-8 rounded-2xl border border-[#eceef3] bg-white p-6 shadow-[0_14px_40px_rgba(15,27,61,0.06)] sm:p-8">
          <label className="block text-sm font-bold text-[#1c1a33]">
            Country or destination
          </label>
          <div className="mt-3">
            <input
              type="text"
              readOnly
              value="Rate lookup coming soon"
              className="w-full rounded-xl border border-[#eceef3] bg-[#f8f8fb] px-4 py-3 text-sm text-[#5f6275] outline-none"
            />
          </div>
          <p className="mt-3 text-xs text-[#5f6275]">
            Country rates will appear here once our rate information is
            verified. Until then, check your plan terms or ask our team.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Ships, planes and satellites ─────────────────────────────────────── */

function ShipsPlanesSatellites() {
  return (
    <section className="bg-[#f8f8fb] py-16 lg:py-20">
      <div className="mx-auto max-w-[900px] px-6">
        <SectionHeading
          eyebrow="SPECIAL NETWORKS"
          title="Ships, planes and satellites"
        />

        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-[#f3d19e] bg-[#fff4e0] p-6 text-[#1c1a33] shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f59e0b] text-white">
            <AlertTriangle className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className={`${HEADING} text-base font-bold text-[#6b4300]`}>
              Can cost much more
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[#7c530b]">
              Mobile networks on ships, aircraft and via satellite are not land
              networks and may be charged differently. Your phone may connect to
              them automatically, even near the coast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Before, during and after your trip ──────────────────────────────── */

function TravelChecklist() {
  const cards = [
    {
      title: "Get ready",
      tag: "Before",
      image: "3.png",
      items: [
        "Check your plan's roaming terms",
        "Set a spend limit if available",
        "Download maps and tickets",
        "Save emergency contacts",
      ],
    },
    {
      title: "While you're there",
      tag: "Away",
      image: "4.png",
      items: [
        "Read any arrival text you receive",
        "Keep track of your usage",
        "Use trusted Wi-Fi where possible",
      ],
    },
    {
      title: "When you're home",
      tag: "Back",
      image: "5.png",
      items: [
        "Check your bill against your usage",
        "Contact us if something looks wrong",
      ],
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <SectionHeading
          eyebrow="TRAVEL CHECKLIST"
          title="Before, during and after your trip"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-2xl border border-[#eceef3] bg-white shadow-[0_14px_40px_rgba(15,27,61,0.08)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f8f8fb]">
                <Image
                  src={`${IMG}/${card.image}`}
                  alt={card.title}
                  fill
                  sizes="(min-width: 768px) 380px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-[#fbe6f1] px-3 py-1 text-[11px] font-bold text-[#a3227f]">
                  {card.tag}
                </span>
                <p
                  className={`${HEADING} mt-3 text-lg font-bold text-[#1c1a33]`}
                >
                  {card.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[#5f6275]"
                    >
                      <Check
                        className="mt-1 h-3.5 w-3.5 shrink-0 text-[#a3227f]"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQs ─────────────────────────────────────────────────────────────── */

const ROAMING_FAQS = [
  {
    q: "Is roaming free in the EU?",
    a: "Roaming terms depend on your specific plan. Some plans include EU roaming allowances, while others require a roaming pass or apply standard roaming charges.",
  },
  {
    q: "What’s the difference between roaming and international calls?",
    a: "Roaming is using your phone while you are physically outside the UK. International calls are making calls or sending texts from the UK to a number based abroad.",
  },
  {
    q: "How do I avoid surprise charges?",
    a: "You can set up spend limits, monitor your usage via MyZoiko, turn off data roaming when not in use, and connect to trusted Wi-Fi networks.",
  },
  {
    q: "Why was I charged on a ferry?",
    a: "Ferries and cruise ships use maritime satellite networks rather than land-based mobile masts, which carry significantly higher roaming rates.",
  },
  {
    q: "Can I buy a roaming pass?",
    a: "Yes, eligible destination-specific or day-pass roaming plans are available to purchase depending on your travel requirements.",
  },
];

function RoamingFaqs() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white py-16 text-white lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <SectionHeading
          dark
          eyebrow="FAQS"
          title="Roaming & international questions"
        />
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_480px]">
          <ul className="space-y-3">
            {ROAMING_FAQS.map((item, i) => {
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
              src={`${IMG}/6.png`}
              alt="Speech bubbles with question marks arranged on a desk"
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

export default function RoamingPage() {
  return (
    <div className="bg-white text-[#1c1a33]">
      <Hero />
      <TravelJourney />
      <ChooseYourTopic />
      <CheckRates />
      <ShipsPlanesSatellites />
      <TravelChecklist />
      <RoamingFaqs />

      {/* Footer CTA */}
      <section className="bg-gradient-to-br from-[#c4318f] via-[#a3227f] to-[#7a2a8f] px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold tracking-[-0.01em] [font-family:var(--font-ee-heading)] sm:text-4xl">
          Travelling soon?
        </h2>
        <p className="mt-3 text-base text-white/90">
          Check your plan or ask our team about roaming before you go.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/ee-mobile-plans"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#a3227f] [font-family:var(--font-ee-heading)] transition-transform hover:-translate-y-0.5"
          >
            View current mobile plans
          </Link>
          <Link
            href="/contact"
            className="rounded-full border-2 border-white/70 bg-white/10 px-8 py-3.5 text-sm font-semibold [font-family:var(--font-ee-heading)] hover:bg-white/20"
          >
            Ask our team
          </Link>
        </div>
      </section>
    </div>
  );
}
