import React from "react";
import Link from "next/link";
import { ChevronRight, RadioTower } from "lucide-react";
import SectionHeader from "./SectionHeader";

function RouterIllustration() {
  return (
    <svg viewBox="0 0 200 130" className="h-[120px] w-auto" aria-hidden="true">
      <ellipse cx="100" cy="116" rx="70" ry="8" fill="#F2D6BF" />
      <path d="M72 44a40 40 0 0 1 56 0" fill="none" stroke="#7B3FE4" strokeWidth="7" strokeLinecap="round" />
      <path d="M82 56a25 25 0 0 1 36 0" fill="none" stroke="#7B3FE4" strokeWidth="7" strokeLinecap="round" />
      <circle cx="100" cy="68" r="5" fill="#7B3FE4" />
      <rect x="58" y="70" width="6" height="24" rx="3" fill="#0F1640" />
      <rect x="136" y="70" width="6" height="24" rx="3" fill="#0F1640" />
      <rect x="40" y="88" width="120" height="26" rx="8" fill="#F0532D" />
      <circle cx="58" cy="101" r="4" fill="#FFE7A8" />
      <circle cx="72" cy="101" r="4" fill="#6EE7B7" />
    </svg>
  );
}

function EsimIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="h-[130px] w-auto" aria-hidden="true">
      <circle cx="44" cy="84" r="9" fill="#F7A8CB" />
      <rect x="72" y="10" width="62" height="118" rx="12" fill="#0F1640" />
      <rect x="78" y="18" width="50" height="102" rx="8" fill="url(#esimScreen)" />
      <rect x="91" y="54" width="24" height="24" rx="4" fill="#FBC536" />
      <path d="M97 54v24M103 54v24M109 54v24M91 62h24M91 70h24" stroke="#D9A21A" strokeWidth="1.4" />
      <circle cx="148" cy="30" r="16" fill="#FBC536" />
      <path d="m141 30 5 5 9-10" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="esimScreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7B3FE4" />
          <stop offset="1" stopColor="#E0127C" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function BuildingsIllustration() {
  const windows = [0, 1, 2, 3].flatMap((row) => [0, 1, 2].map((col) => ({ row, col })));
  return (
    <svg viewBox="0 0 200 140" className="h-[130px] w-auto" aria-hidden="true">
      <ellipse cx="100" cy="128" rx="68" ry="7" fill="#D7CCF0" />
      <rect x="58" y="16" width="56" height="110" rx="4" fill="#5B5FEF" />
      {windows.map(({ row, col }) => (
        <rect key={`${row}-${col}`} x={66 + col * 15} y={26 + row * 18} width="10" height="10" rx="2" fill="#E6E8FF" />
      ))}
      <rect x="120" y="58" width="36" height="68" rx="4" fill="#F97316" />
      <rect x="127" y="68" width="9" height="9" rx="2" fill="#FFE2CC" />
      <rect x="141" y="68" width="9" height="9" rx="2" fill="#FFE2CC" />
      <rect x="127" y="84" width="9" height="9" rx="2" fill="#FFE2CC" />
      <rect x="141" y="84" width="9" height="9" rx="2" fill="#FFE2CC" />
    </svg>
  );
}

const CARDS = [
  {
    title: "Wi-Fi ≠ broadband",
    body: "Your device can connect to the router without the router reaching the internet — and Wi-Fi can be slow in one room even when the line is fine.",
    bg: "bg-[#FDF1E4]",
    Illustration: RouterIllustration,
  },
  {
    title: "Don’t delete your eSIM",
    body: "Only remove an eSIM profile if we’ve told you to and you have a confirmed way to reactivate it.",
    bg: "bg-[#FCE7F1]",
    Illustration: EsimIllustration,
  },
  {
    title: "Stale data ≠ outage",
    body: "For IoT devices, a missing reading can come from power or the device itself, not only the network.",
    bg: "bg-[#EEEAFB]",
    Illustration: BuildingsIllustration,
  },
];

export default function NotOurNetworkSection() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader eyebrow="Good to know" title="Why it might not be our network" />

        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {CARDS.map(({ title, body, bg, Illustration }) => (
            <li key={title} className="overflow-hidden rounded-2xl border border-[#E3E6F2] bg-white">
              <div className={`flex h-[200px] items-center justify-center ${bg}`}>
                <Illustration />
              </div>
              <div className="p-5">
                <h3 className="text-base font-extrabold text-[#0A1446]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#3A4268]">{body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-4 rounded-2xl border-2 border-dashed border-[#D4D9EC] bg-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F1F2F8] text-[#3A4268]">
              <RadioTower className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <p className="text-base font-extrabold text-[#0A1446]">We can’t confirm service status from this guide.</p>
              <p className="mt-1 text-sm text-[#3A4268]">
                There’s no live outage map or incident feed on this page, and no ticket number is created here.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#F0168A] via-[#E0127C] to-[#C8106E] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(224,18,124,0.3)] transition-transform hover:scale-[1.01]"
          >
            Report a continuing fault
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
