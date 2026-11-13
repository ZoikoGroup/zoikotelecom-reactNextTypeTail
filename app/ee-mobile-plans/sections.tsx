"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeftRight,
  ArrowRight,
  CardSim,
  ChartNoAxesColumnIncreasing,
  Check,
  ChevronRight,
  FileText,
  Globe,
  MessageSquare,
  Plus,
  ReceiptText,
} from "lucide-react";

const IMG = "/Images/ee-mobile-plans";

/** Poppins heading font (loaded in page.tsx). */
export const HEADING = "[font-family:var(--font-ee-heading)]";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a3227f]">
        {eyebrow}
      </p>
      <h2
        className={`${HEADING} mt-2 text-3xl font-bold leading-tight tracking-[-0.01em] text-[#1c1a33] sm:text-4xl`}
      >
        {title}
      </h2>
      {intro && (
        <p className="mt-3 text-base leading-relaxed text-[#5f6275]">{intro}</p>
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
    {
      icon: ChartNoAxesColumnIncreasing,
      text: "EE 4G & 5G coverage (5G where available)",
    },
    { icon: Globe, text: "EU roaming on eligible plans" },
    { icon: CardSim, text: "SIM (physical) or eSIM" },
  ];
  return (
    <div
      className={`rounded-2xl border border-white/25 bg-white/10 p-5 text-white shadow-[0_20px_50px_rgba(10,10,50,0.35)] backdrop-blur-md ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-white/15 pb-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d6338f] to-[#8a2be2]">
          <ChartNoAxesColumnIncreasing className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className={`${HEADING} text-lg font-bold uppercase leading-tight`}>
          On the EE network
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
      <p className="text-xs leading-relaxed text-white/70">
        Coverage varies by location. Roaming terms are shown per plan.
      </p>
    </div>
  );
}

function Chip({ icon: Icon, label, className = "" }: { icon: typeof CardSim; label: string; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#1c1a33] shadow-[0_10px_30px_rgba(10,10,50,0.25)] ${className}`}
    >
      <Icon className="h-4 w-4 text-[#c4237f]" aria-hidden="true" />
      {label}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b0d3b] text-white">
      {/* Skyline background */}
      <div aria-hidden="true" className="absolute inset-0 lg:left-[38%]">
        <Image
          src={`${IMG}/ee-hero-london-skyline.webp`}
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
            EE Mobile Plans
            <span aria-hidden="true" className="h-0.5 w-11 rounded bg-[#d6338f]" />
            <span aria-hidden="true" className="h-0.5 w-11 rounded bg-[#a35bd6]" />
          </p>
          <h1
            className={`${HEADING} mt-5 text-[clamp(2.1rem,5vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.02em]`}
          >
            EE mobile plans for work, life and everything in between
          </h1>
          <p className="mt-5 max-w-[580px] text-lg leading-relaxed text-white/85">
            Great data, reliable EE coverage and flexible plans, all managed by
            Zoiko Telecom.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#plans"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#e0218a] to-[#c4237f] px-8 py-4 text-base font-semibold shadow-[0_12px_30px_rgba(224,33,138,0.4)] transition-transform hover:-translate-y-0.5"
            >
              View EE mobile plans
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#keep-your-number"
              className="inline-flex items-center rounded-xl border-2 border-white/80 px-8 py-4 text-base font-semibold transition-colors hover:bg-white/10"
            >
              Keep your number
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[500px] lg:h-[592px] lg:max-w-none">
          <div className="absolute bottom-0 left-0 h-[92%] w-[78%] sm:w-[62%] lg:left-[2%]">
            <Image
              src={`${IMG}/ee-hero-customer.webp`}
              alt="Smiling customer in a light blazer sitting in a café"
              fill
              sizes="(min-width: 1024px) 340px, 60vw"
              className="object-cover object-top [mask-image:linear-gradient(to_bottom,black_75%,transparent),linear-gradient(to_right,transparent,black_15%)] [mask-composite:intersect]"
            />
          </div>

          <Chip
            icon={ArrowLeftRight}
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
        <path d="M0 70 C300 20 520 30 760 60 C1000 90 1220 60 1440 25" stroke="#d6338f" strokeWidth="2" />
        <path d="M0 85 C300 40 520 48 760 75 C1000 102 1220 78 1440 45" stroke="#8a5cf6" strokeWidth="1.5" strokeOpacity="0.8" />
      </svg>
    </section>
  );
}

/* ─── What's included ──────────────────────────────────────────────────── */

export function WhatsIncluded() {
  const items = [
    {
      icon: FileText,
      title: "Physical SIM",
      text: "Delivered for your existing phone. Delivery details are confirmed when you order.",
    },
    {
      icon: CardSim,
      title: "eSIM, where supported",
      text: "Needs a compatible device and an eligible plan. Check compatibility before you choose.",
      link: { label: "Check eSIM help", href: "/faqs" },
    },
    {
      icon: ChartNoAxesColumnIncreasing,
      title: "Your data, your way",
      text: "Tiered or unlimited data. Any fair-use or speed limits are shown in plan details.",
    },
  ];
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <SectionHeading
          eyebrow="What’s included"
          title="What comes with your SIM"
          intro="Shown per plan from approved product details."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text, link }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#efe7f0] bg-white p-7 shadow-[0_14px_40px_rgba(163,34,127,0.08)]"
            >
              <IconTile>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </IconTile>
              <h3 className={`${HEADING} mt-5 text-xl font-semibold text-[#1c1a33]`}>
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#5f6275]">{text}</p>
              {link && (
                <Link
                  href={link.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#a3227f] hover:underline"
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Keep your number ─────────────────────────────────────────────────── */

export function KeepYourNumber() {
  const steps = [
    {
      title: "Ask your current provider",
      text: "Text “PAC” to 65075 for a code to keep your number (UK rules).",
    },
    {
      title: "Share the code when you order",
      text: "We’ll explain how to use it during the order process.",
    },
    {
      title: "Your number moves across",
      text: "Timings are confirmed when you order.",
    },
  ];
  return (
    <section id="keep-your-number" className="scroll-mt-28 bg-[#f8f8fb] py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="Switching"
          title="Keep your number"
          intro="In the UK you can usually keep your number when you switch."
        />
        <div className="relative mt-8 aspect-[1200/452] w-full overflow-hidden rounded-3xl">
          <Image
            src={`${IMG}/ee-keep-your-number-phones.webp`}
            alt="Person holding two smartphones while switching their number"
            fill
            sizes="(min-width: 1200px) 1200px, 100vw"
            className="object-cover"
          />
        </div>
        <ul className="mt-10 grid gap-x-16 gap-y-6 md:grid-cols-2">
          {steps.map((step) => (
            <li key={step.title} className="flex gap-4">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fbe6f1] text-[#a3227f]">
                <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
              </span>
              <div>
                <p className={`${HEADING} font-semibold text-[#1c1a33]`}>{step.title}</p>
                <p className="mt-1 text-sm text-[#5f6275]">{step.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 flex items-center gap-1.5 rounded-xl bg-[#fff4e0] px-4 py-3 text-sm font-semibold text-[#8a5a00]">
          <span aria-hidden="true" className="h-2 w-2 rounded-full border border-current" />
          Online number transfer is not available on this page yet.
        </p>
      </div>
    </section>
  );
}

/* ─── How it works ─────────────────────────────────────────────────────── */

export function HowItWorks() {
  const steps = [
    {
      title: "Choose a plan",
      text: "Compare data, term and price.",
      img: "ee-step-choose-plan.webp",
      alt: "Calculator, charts and a magnifying glass on a desk",
    },
    {
      title: "Talk to our team",
      text: "We confirm availability and answer questions.",
      img: "ee-step-talk-to-team.webp",
      alt: "Customer support team wearing headsets at laptops",
    },
    {
      title: "Read your contract summary",
      text: "Price, term and any price changes, before you agree.",
      img: "ee-step-contract-summary.webp",
      alt: "Two people reviewing a printed contract",
    },
    {
      title: "Get your SIM",
      text: "Activate and, if you like, keep your number.",
      img: "ee-step-get-sim.webp",
      alt: "Smartphone with its SIM tray and SIM card",
    },
  ];
  return (
    <section className="bg-[#f8f8fb] py-16 lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <SectionHeading
          eyebrow="How it works"
          title="Ordering, step by step"
          intro="No surprises before you commit."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.title}
              className="rounded-2xl border border-[#eceef3] bg-white p-6 shadow-[0_14px_40px_rgba(15,27,61,0.08)]"
            >
              <p className={`${HEADING} text-[15px] font-semibold text-[#1c1a33]`}>{step.title}</p>
              <p className="mt-1 min-h-[2.75rem] text-sm leading-snug text-[#5f6275]">{step.text}</p>
              <div className="relative mt-4 aspect-[3/2] overflow-hidden">
                <Image
                  src={`${IMG}/${step.img}`}
                  alt={step.alt}
                  fill
                  sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─── Help choosing ────────────────────────────────────────────────────── */

export function HelpChoosing() {
  const cards = [
    {
      icon: MessageSquare,
      title: "Speak to our team",
      text: "Get advice on data, terms and switching.",
      link: { label: "Contact us", href: "/contact" },
    },
    {
      icon: ReceiptText,
      title: "Already with us?",
      text: "Help with billing, changing or renewing your plan.",
      link: { label: "Customer help", href: "/faqs" },
    },
  ];
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          align="left"
          eyebrow="Help choosing"
          title="Not sure which plan?"
          intro="Our team can help you choose. Current customers can find billing and plan help."
        />
        <div className="mt-10 grid max-w-[600px] gap-6 sm:grid-cols-2">
          {cards.map(({ icon: Icon, title, text, link }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#efe7f0] bg-white p-7 shadow-[0_14px_40px_rgba(163,34,127,0.08)]"
            >
              <IconTile>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </IconTile>
              <h3 className={`${HEADING} mt-5 text-xl font-semibold text-[#1c1a33]`}>{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#5f6275]">{text}</p>
              <Link
                href={link.href}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#a3227f] hover:underline"
              >
                {link.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQs ─────────────────────────────────────────────────────────────── */

const FAQS = [
  {
    q: "What is a SIM-only plan?",
    a: "A SIM-only plan gives you a SIM card (or eSIM) with minutes, texts and data, without a new handset. You keep using the phone you already have.",
  },
  {
    q: "Can I keep my number?",
    a: "In the UK you can usually keep your number. Text “PAC” to 65075 to get a code from your current provider, then share it with us when you order.",
  },
  {
    q: "Will my price change during the contract?",
    a: "Your contract summary shows the price, the term and any price changes before you agree, so you know what to expect.",
  },
  {
    q: "Does eSIM work on my phone?",
    a: "eSIM needs a compatible device and an eligible plan. If your phone doesn’t support eSIM, choose a physical SIM when you order.",
  },
  {
    q: "Can I use my plan abroad?",
    a: "Roaming terms differ by plan. EU roaming is included on eligible plans, and our Day Pass Roaming plans cover travel further afield. Check each plan’s details for where it works and what it costs.",
  },
];

export function Faqs() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-[#f8f8fb] py-16 lg:py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-12">
        <SectionHeading eyebrow="FAQs" title="SIM-only questions" />
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_480px]">
          <ul className="space-y-3">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className="rounded-xl border border-[#eceef3] bg-white">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className={`${HEADING} flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-medium text-[#1c1a33]`}
                  >
                    {item.q}
                    <Plus
                      className={`h-4 w-4 shrink-0 text-[#a3227f] transition-transform ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-[15px] leading-relaxed text-[#5f6275]">{item.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="relative mx-auto aspect-[482/361] w-full max-w-[480px]">
            <Image
              src={`${IMG}/ee-faq-sim-question.webp`}
              alt="Cartoon SIM card standing next to a large question mark"
              fill
              sizes="480px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
