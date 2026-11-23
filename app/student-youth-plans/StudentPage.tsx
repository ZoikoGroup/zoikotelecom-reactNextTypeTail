"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CardSim,
  Check,
  ChevronRight,
  GraduationCap,
  HeartHandshake,
  Lock,
  MessageSquare,
  Phone,
  Plus,
  Search,
  Smartphone,
} from "lucide-react";

const IMG = "/Images/student";

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
    { icon: BarChart3, text: "Compare data, term & total cost" },
    { icon: Lock, text: "No age, school or ID asked here" },
    { icon: BarChart3, text: "Plans run on the EE network" },
  ];
  return (
    <div
      className={`rounded-2xl border border-white/25 bg-white/10 p-5 text-white shadow-[0_20px_50px_rgba(10,10,50,0.35)] backdrop-blur-md ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-white/15 pb-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d6338f] to-[#8a2be2]">
          <GraduationCap className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className={`${HEADING} text-lg font-bold uppercase leading-tight`}>
          CHOOSING A PLAN?
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
        Student or youth offers are shown only once confirmed.
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
            STUDENT &amp; YOUTH
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
            Mobile options for students and young people
          </h1>
          <p className="mt-5 max-w-[580px] text-lg leading-relaxed text-white/85">
            Explore current mobile plans, compare what matters, and ask us about
            options for your circumstances.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/sim"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#e0218a] to-[#c4237f] px-8 py-4 text-base font-semibold shadow-[0_12px_30px_rgba(224,33,138,0.4)] transition-transform hover:-translate-y-0.5"
            >
              View current mobile plans
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border-2 border-white/80 px-8 py-4 text-base font-semibold transition-colors hover:bg-white/10"
            >
              Ask about mobile options
            </Link>
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[500px] lg:h-[592px] lg:max-w-none">
          <div className="absolute bottom-0 left-0 h-[92%] w-[78%] sm:w-[62%] lg:left-[2%]">
            <Image
              src={`${IMG}/2.png`}
              alt="Students studying together with a laptop beside a bookshelf"
              fill
              sizes="(min-width: 1024px) 340px, 60vw"
              className="object-cover object-top [mask-image:linear-gradient(to_bottom,black_75%,transparent),linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [mask-composite:intersect]"
            />
          </div>

          <Chip
            icon={MessageSquare}
            label="Ask our team anything"
            className="absolute right-0 top-[6%] lg:top-[8%]"
          />
          <NetworkCard className="absolute right-0 top-[19%] hidden w-[340px] sm:block" />
          <Chip
            icon={GraduationCap}
            label="No ID needed to browse"
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

/* ─── Your Student Mobile Journey ──────────────────────────────────────── */

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

function StudentMobileJourney() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h2
            className={`${HEADING} text-2xl font-bold tracking-[-0.01em] text-[#1c1a33] sm:text-3xl`}
          >
            Your Student Mobile Journey
          </h2>
          <p className="text-sm text-[#5f6275] sm:text-base">
            Seven simple steps — no personal details needed until you&apos;re
            ready.
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
                  Who&apos;s choosing?
                </p>
              </div>
              <GraduationCap
                className="h-4 w-4 text-[#a3227f]"
                aria-hidden="true"
              />
            </div>
            <div className="mt-4 space-y-2 text-xs">
              <div className="rounded-xl border border-[#a3227f] bg-[#fbe6f1]/45 p-3">
                <p className="font-bold text-[#a3227f]">I&apos;m studying</p>
                <p className="mt-0.5 text-[10px] text-[#5f6275]">
                  Choosing for myself
                </p>
              </div>
              <div className="rounded-xl border border-[#eceef3] p-3">
                <p className="font-semibold text-[#1c1a33]">Parent or carer</p>
                <p className="mt-0.5 text-[10px] text-[#5f6275]">
                  Helping a young person
                </p>
              </div>
              <div className="rounded-xl border border-[#eceef3] p-3">
                <p className="font-semibold text-[#1c1a33]">Just browsing</p>
                <p className="mt-0.5 text-[10px] text-[#5f6275]">
                  Seeing what&apos;s out there
                </p>
              </div>
            </div>
            <p className="mt-2 text-[10px] text-[#5f6275]">
              We don&apos;t save this or ask your age.
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
                How much data?
              </p>
            </div>
            <div className="mt-4 space-y-2 text-xs">
              <div className="flex items-center justify-between rounded-lg border border-[#a3227f] bg-[#fbe6f1]/45 px-3 py-2">
                <div>
                  <span className="font-bold text-[#a3227f]">Z-Essentials</span>
                  <p className="text-[10px] text-[#5f6275]">10GB</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#a3227f]">£8.99</span>
                  <p className="text-[10px] text-[#5f6275]">/month</p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-[#eceef3] px-3 py-2">
                <div>
                  <span className="font-semibold text-[#1c1a33]">
                    Z-Comfort
                  </span>
                  <p className="text-[10px] text-[#5f6275]">20GB</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#1c1a33]">£10.99</span>
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
              Standard plans. No student discount is confirmed yet.
            </p>
          </div>

          <JourneyArrow />

          {/* Step 3 */}
          <div className="flex-1 rounded-2xl border border-[#eceef3] bg-white p-5 shadow-[0_10px_30px_rgba(15,27,61,0.06)]">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a3227f] text-xs font-bold text-white">
                3
              </span>
              <p className={`${HEADING} text-sm font-bold text-[#1c1a33]`}>
                Contract length
              </p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded-xl bg-[#a3227f] px-2 py-2.5 font-bold text-white">
                <p>30</p>
                <p className="text-[10px] font-normal">days</p>
              </div>
              <div className="rounded-xl border border-[#eceef3] px-2 py-2.5 font-semibold text-[#1c1a33]">
                <p>12</p>
                <p className="text-[10px] font-normal text-[#5f6275]">mo</p>
              </div>
              <div className="rounded-xl border border-[#eceef3] px-2 py-2.5 font-semibold text-[#1c1a33]">
                <p>24</p>
                <p className="text-[10px] font-normal text-[#5f6275]">mo</p>
              </div>
            </div>
            <p className="mt-3 text-[10px] leading-relaxed text-[#5f6275]">
              Shorter terms can suit term times. Availability confirmed with
              you.
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
                Keep your number
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

          <JourneyArrow />

          {/* Step 6 */}
          <div className="flex-1 rounded-2xl border border-[#eceef3] bg-white p-5 shadow-[0_10px_30px_rgba(15,27,61,0.06)]">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a3227f] text-xs font-bold text-white">
                6
              </span>
              <p className={`${HEADING} text-sm font-bold text-[#1c1a33]`}>
                Your summary
              </p>
            </div>
            <div className="mt-4 space-y-2 text-xs">
              <p className="font-bold text-[#1c1a33]">Your choices</p>
              <div className="flex justify-between border-b border-[#eceef3] pb-1.5">
                <span className="text-[#5f6275]">Choosing for</span>
                <span className="font-semibold text-[#1c1a33]">Myself</span>
              </div>
              <div className="flex justify-between border-b border-[#eceef3] pb-1.5">
                <span className="text-[#5f6275]">Plan</span>
                <span className="font-semibold text-[#1c1a33]">
                  Z-Essentials (10GB)
                </span>
              </div>
              <div className="flex justify-between border-b border-[#eceef3] pb-1.5">
                <span className="text-[#5f6275]">Term</span>
                <span className="font-semibold text-[#1c1a33]">30-day</span>
              </div>
              <div className="flex justify-between border-b border-[#eceef3] pb-1.5">
                <span className="text-[#5f6275]">SIM</span>
                <span className="font-semibold text-[#1c1a33]">
                  Physical SIM
                </span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="font-bold text-[#1c1a33]">From / month</span>
                <span className="font-bold text-[#1c1a33]">£8.99</span>
              </div>
            </div>
            <p className="mt-3 text-[10px] text-[#5f6275]">
              Contracts are agreed by an eligible adult.
            </p>
            <Link
              href="/contact"
              className="mt-3 block w-full rounded-full bg-gradient-to-r from-[#e0218a] to-[#a3227f] py-2 text-center text-xs font-semibold text-white"
            >
              Ask about this plan
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
                  What happens next
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <span className="font-semibold text-[#1c1a33]">
                  Talk to our team about your choices
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <span className="font-semibold text-[#1c1a33]">
                  Read your contract summary
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <span className="font-semibold text-[#1c1a33]">
                  Order &amp; activation (EE via BT Wholesale)
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <span className="font-semibold text-[#1c1a33]">
                  Manage it all in MyZoiko
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Quick Choice: Which best describes you? ──────────────────────────── */

type PersonaKey = "studying" | "parent" | "browsing";
type QuestionKey = "data" | "cost" | "flexibility";

const PERSONA_OPTIONS: {
  key: PersonaKey;
  title: string;
  subtitle: string;
  icon: typeof GraduationCap;
}[] = [
  {
    key: "studying",
    title: "I'm studying",
    subtitle: "Choosing a plan for myself",
    icon: GraduationCap,
  },
  {
    key: "parent",
    title: "I'm a parent or carer",
    subtitle: "Helping a young person choose",
    icon: HeartHandshake,
  },
  {
    key: "browsing",
    title: "Just browsing",
    subtitle: "Seeing what's out there",
    icon: Search,
  },
];

const QUESTION_PILLS: {
  key: QuestionKey;
  label: string;
  answer: string;
}[] = [
  {
    key: "data",
    label: "How much data do you use each month?",
    answer:
      "Check how often you stream video, use maps, or hotspot away from campus or home Wi-Fi so you don't pay for unused data or run short.",
  },
  {
    key: "cost",
    label: "What monthly cost suits your budget?",
    answer:
      "Look at the monthly price alongside any one-off charges and check how each line appears in your contract summary.",
  },
  {
    key: "flexibility",
    label: "Would a shorter contract give you more flexibility?",
    answer:
      "30-day rolling terms can suit changing study or accommodation plans, while longer terms may offer different monthly pricing.",
  },
];

function WhichBestDescribesYou() {
  const [persona, setPersona] = useState<PersonaKey | null>(null);
  const [question, setQuestion] = useState<QuestionKey | null>(null);

  const activeQuestion = QUESTION_PILLS.find((q) => q.key === question);

  return (
    <section className="bg-[#f8f8fb] py-16 lg:py-20">
      <div className="mx-auto max-w-[1000px] px-6">
        <SectionHeading
          eyebrow="QUICK CHOICE"
          title="Which best describes you?"
          intro="Optional. We don't save your answer or ask for your age, school or ID."
        />

        {/* Top 3 Persona Cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PERSONA_OPTIONS.map(({ key, title, subtitle, icon: Icon }) => {
            const selected = persona === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setPersona(selected ? null : key)}
                aria-pressed={selected}
                className={`flex items-center justify-between gap-3 rounded-2xl border bg-white p-5 text-left transition-all shadow-[0_10px_30px_rgba(15,27,61,0.05)] ${
                  selected
                    ? "border-[#a3227f] ring-2 ring-[#a3227f]/20"
                    : "border-[#eceef3] hover:border-[#a3227f]"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                      selected
                        ? "bg-[#a3227f] text-white"
                        : "bg-[#fbe6f1] text-[#a3227f]"
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p
                      className={`${HEADING} text-xs font-bold text-[#1c1a33]`}
                    >
                      {title}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-snug text-[#5f6275]">
                      {subtitle}
                    </p>
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                    selected
                      ? "border-[#a3227f] bg-[#a3227f]"
                      : "border-[#d1d5db]"
                  }`}
                >
                  {selected && (
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom 3 Question Pills */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {QUESTION_PILLS.map(({ key, label }) => {
            const active = question === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setQuestion(active ? null : key)}
                aria-expanded={active}
                className={`flex items-center gap-3 rounded-xl border bg-white px-4 py-3.5 text-left text-xs transition-all shadow-[0_6px_18px_rgba(15,27,61,0.04)] ${
                  active
                    ? "border-[#a3227f] font-semibold text-[#a3227f]"
                    : "border-[#eceef3] text-[#1c1a33] hover:border-[#a3227f]"
                }`}
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[10px] font-bold text-[#a3227f]">
                  ?
                </span>
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {activeQuestion && (
          <div className="mt-4 rounded-xl border border-[#eceef3] bg-white p-4 text-xs leading-relaxed text-[#5f6275] shadow-[0_8px_24px_rgba(15,27,61,0.05)]">
            <span className="font-bold text-[#1c1a33]">
              {activeQuestion.label}{" "}
            </span>
            {activeQuestion.answer}
          </div>
        )}

        <div className="mt-5 text-center">
          <button
            type="button"
            onClick={() => {
              setPersona(null);
              setQuestion(null);
            }}
            className="text-xs font-semibold text-[#a3227f] hover:underline"
          >
            Reset choice
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── Four things to compare ───────────────────────────────────────────── */

function FourThingsToCompare() {
  const cards = [
    {
      title: "Data",
      subtitle: "How much you really use",
      image: "3.png",
      alt: "Student checking monthly data usage on a laptop",
    },
    {
      title: "Monthly cost",
      subtitle: "Plus any one-off charges",
      image: "4.png",
      alt: "Planning monthly budget with notebook and calculator",
    },
    {
      title: "Contract",
      subtitle: "Term and any price changes",
      image: "5.png",
      alt: "Contract document with pen on a desk",
    },
    {
      title: "Coverage",
      subtitle: "Check where you live and study",
      image: "6.png",
      alt: "Map showing routes and coverage areas",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <SectionHeading
          eyebrow="WHAT MATTERS MOST"
          title="Four things to compare"
          intro="The same questions apply to any plan you look at."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-2xl border border-[#eceef3] bg-white p-5 shadow-[0_14px_40px_rgba(15,27,61,0.06)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#f8f8fb]">
                <Image
                  src={`${IMG}/${card.image}`}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1024px) 270px, 50vw"
                  className="object-cover"
                />
              </div>
              <h3
                className={`${HEADING} mt-4 text-base font-bold text-[#1c1a33]`}
              >
                {card.title}
              </h3>
              <p className="mt-1 text-xs text-[#5f6275]">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Student & youth offers ───────────────────────────────────────────── */

function StudentYouthOffers() {
  return (
    <section className="bg-[#f8f8fb] py-16 lg:py-20">
      <div className="mx-auto max-w-[900px] px-6">
        <SectionHeading
          eyebrow="CURRENT OFFERS"
          title="Student &amp; youth offers"
        />

        <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-[#eceef3] bg-white px-8 py-10 text-center shadow-[0_14px_40px_rgba(15,27,61,0.06)]">
          <div className="mx-auto flex justify-center">
            <IconTile>
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </IconTile>
          </div>
          <h3 className={`${HEADING} mt-4 text-base font-bold text-[#1c1a33]`}>
            No confirmed student or youth offer right now
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-[#5f6275]">
            When an offer is approved, it will appear here with its full terms,
            eligibility and price. For now, view our general plans or ask our
            team.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/sim"
              className="rounded-full bg-gradient-to-r from-[#8e24aa] to-[#6a1b9a] px-6 py-2.5 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              General plans
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[#a3227f] bg-white px-6 py-2.5 text-xs font-semibold text-[#a3227f] transition-colors hover:bg-[#fbe6f1]/40"
            >
              Ask us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Know the full cost before you agree ──────────────────────────────── */

function KnowFullCost() {
  const bullets = [
    {
      title: "Monthly price and term",
      text: "Shown in pounds and pence.",
    },
    {
      title: "One-off charges",
      text: "Any upfront or setup costs.",
    },
    {
      title: "Price changes",
      text: "Any rises shown in pounds and pence before you agree.",
    },
    {
      title: "Contract summary",
      text: "You'll see it before you sign.",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1040px] px-6 lg:px-12">
        <SectionHeading
          eyebrow="COST GUIDE"
          title="Know the full cost before you agree"
        />

        <div className="relative mt-10 aspect-[16/7] w-full overflow-hidden rounded-3xl bg-[#f8f8fb] shadow-[0_14px_40px_rgba(15,27,61,0.08)]">
          <Image
            src={`${IMG}/7.png`}
            alt="Reviewing an itemized quotation sheet with a pen and calculator"
            fill
            sizes="(min-width: 1024px) 980px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {bullets.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
                <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
              </span>
              <div>
                <p className={`${HEADING} text-sm font-bold text-[#1c1a33]`}>
                  {item.title}
                </p>
                <p className="mt-0.5 text-xs text-[#5f6275]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SIM, eSIM or new phone? ──────────────────────────────────────────── */

function SimEsimOrNewPhone() {
  return (
    <section className="bg-[#f8f8fb] py-16 lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <SectionHeading
          eyebrow="YOUR PHONE"
          title="SIM, eSIM or new phone?"
          intro="Options depend on the plan and your device."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#eceef3] bg-white p-7 shadow-[0_14px_40px_rgba(15,27,61,0.06)]">
            <IconTile>
              <CardSim className="h-5 w-5" aria-hidden="true" />
            </IconTile>
            <h3 className={`${HEADING} mt-5 text-lg font-bold text-[#1c1a33]`}>
              Keep your phone
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5f6275]">
              A SIM-only plan works with the phone you already have.
            </p>
            <Link
              href="/sim"
              className="mt-4 inline-block text-xs font-bold text-[#a3227f] hover:underline"
            >
              SIM-only plans →
            </Link>
          </div>

          <div className="rounded-2xl border border-[#eceef3] bg-white p-7 shadow-[0_14px_40px_rgba(15,27,61,0.06)]">
            <IconTile>
              <Smartphone className="h-5 w-5" aria-hidden="true" />
            </IconTile>
            <h3 className={`${HEADING} mt-5 text-lg font-bold text-[#1c1a33]`}>
              eSIM
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5f6275]">
              Needs a compatible device and an eligible plan.
            </p>
          </div>

          <div className="rounded-2xl border border-[#eceef3] bg-white p-7 shadow-[0_14px_40px_rgba(15,27,61,0.06)]">
            <IconTile>
              <Phone className="h-5 w-5" aria-hidden="true" />
            </IconTile>
            <h3 className={`${HEADING} mt-5 text-lg font-bold text-[#1c1a33]`}>
              Keep your number
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5f6275]">
              Text &ldquo;PAC&rdquo; to 65075 to get a code from your current
              provider.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Four simple steps ────────────────────────────────────────────────── */

function FourSimpleSteps() {
  const steps = [
    {
      title: "Compare plans",
      text: "Look at data, term and total cost.",
      image: "8.png",
      alt: "Smartphone displaying apps next to a laptop",
    },
    {
      title: "Ask us",
      text: "Our team explains what's available to you.",
      image: "9.png",
      alt: "Team discussing plan options around a table",
    },
    {
      title: "Review the terms",
      text: "Read your contract summary.",
      image: "10.png",
      alt: "Signing and reviewing contract summary paperwork",
    },
    {
      title: "Agree only if it's right",
      text: "No pressure, no countdowns.",
      image: "11.png",
      alt: "Pointing to plan details on a screen without pressure",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <SectionHeading eyebrow="WHAT HAPPENS NEXT" title="Four simple steps" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="overflow-hidden rounded-2xl border border-[#eceef3] bg-white p-5 shadow-[0_14px_40px_rgba(15,27,61,0.06)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#f8f8fb]">
                <Image
                  src={`${IMG}/${step.image}`}
                  alt={step.alt}
                  fill
                  sizes="(min-width: 1024px) 270px, 50vw"
                  className="object-cover"
                />
              </div>
              <h3
                className={`${HEADING} mt-4 text-base font-bold text-[#1c1a33]`}
              >
                {step.title}
              </h3>
              <p className="mt-1 text-xs text-[#5f6275]">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Your privacy comes first ─────────────────────────────────────────── */

function PrivacyComesFirst() {
  return (
    <section className="bg-[#f8f8fb] py-16 lg:py-20">
      <div className="mx-auto max-w-[1040px] px-6 lg:px-12">
        <SectionHeading eyebrow="PRIVACY" title="Your privacy comes first" />

        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-[#f5d0e6] bg-[#fdf2f8] p-6 shadow-[0_10px_30px_rgba(163,34,127,0.06)]">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#a3227f] text-white">
            <Lock className="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <p className={`${HEADING} text-sm font-bold text-[#1c1a33]`}>
              Don&apos;t send proof of study or ID
            </p>
            <p className="mt-1 text-xs leading-relaxed text-[#5f6275]">
              Please don&apos;t send student cards, dates of birth or documents
              through the contact form. We&apos;ll explain a secure way if
              it&apos;s ever needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQs ─────────────────────────────────────────────────────────────── */

const STUDENT_FAQS = [
  {
    q: "Is there a student discount?",
    a: "There is no confirmed student or youth discount active right now. Any approved student or youth offer will be published here with full eligibility and pricing details.",
  },
  {
    q: "Who can take out a contract?",
    a: "Mobile contracts are entered into by an eligible adult in accordance with our terms and credit or eligibility checks where applicable.",
  },
  {
    q: "Can a parent pay for a young person's plan?",
    a: "A parent or carer can help choose a plan and discuss contract options with our team before any agreement is made.",
  },
  {
    q: "Do I need to prove I'm a student?",
    a: "You do not need to send student ID or proof of study to browse plans or ask questions. Never send ID or documents via general contact forms.",
  },
  {
    q: "Where can I get help with my existing plan?",
    a: "Existing customers can manage account details through MyZoiko or reach our support team for help with billing, renewals, or plan changes.",
  },
];

function StudentFaqs() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <SectionHeading eyebrow="FAQS" title="Student &amp; youth questions" />
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_480px]">
          <ul className="space-y-3">
            {STUDENT_FAQS.map((item, i) => {
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
              src={`${IMG}/12.png`}
              alt="Student raising a hand to ask a question in class"
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

export default function StudentPage() {
  return (
    <div className="bg-white text-[#1c1a33]">
      <Hero />
      <StudentMobileJourney />
      <WhichBestDescribesYou />
      <FourThingsToCompare />
      <StudentYouthOffers />
      <KnowFullCost />
      <SimEsimOrNewPhone />
      <FourSimpleSteps />
      <PrivacyComesFirst />
      <StudentFaqs />

      {/* Footer CTA */}
      <section className="bg-gradient-to-br from-[#c4318f] via-[#a3227f] to-[#7a2a8f] px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold tracking-[-0.01em] [font-family:var(--font-ee-heading)] sm:text-4xl">
          Find a plan that fits your studies
        </h2>
        <p className="mt-3 text-base text-white/90">
          View our current plans or ask us about your options.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/sim"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#a3227f] [font-family:var(--font-ee-heading)] transition-transform hover:-translate-y-0.5"
          >
            Explore current mobile plans
          </Link>
          <Link
            href="/contact"
            className="rounded-full border-2 border-white/70 bg-white/10 px-8 py-3.5 text-sm font-semibold [font-family:var(--font-ee-heading)] hover:bg-white/20"
          >
            Ask Zoiko
          </Link>
        </div>
      </section>
    </div>
  );
}
