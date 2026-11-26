import React from "react";
import Link from "next/link";
import { HEADING, SectionHeader } from "./shared";

function SignInIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="h-[140px] w-auto" aria-hidden="true">
      <ellipse cx="96" cy="124" rx="82" ry="9" fill="#D9D0F2" />
      <rect x="34" y="34" width="130" height="80" rx="10" fill="#fff" stroke="#E3DCF7" strokeWidth="2" />
      <circle cx="70" cy="66" r="17" fill="#5B3FD6" />
      <circle cx="70" cy="61" r="6" fill="#fff" />
      <path d="M59 77a11 9 0 0 1 22 0" fill="#fff" />
      <rect x="98" y="54" width="50" height="7" rx="3.5" fill="#E3DFF3" />
      <rect x="98" y="68" width="38" height="7" rx="3.5" fill="#E3DFF3" />
      <rect x="114" y="84" width="46" height="14" rx="7" fill="#0E9E7B" />
      <circle cx="166" cy="28" r="14" fill="#3D7BFF" />
      <rect x="160" y="26" width="12" height="9" rx="2" fill="#fff" />
      <path d="M162.5 26v-3a3.5 3.5 0 0 1 7 0v3" fill="none" stroke="#fff" strokeWidth="2" />
    </svg>
  );
}

function ReceiptIllustration() {
  return (
    <svg viewBox="0 0 200 150" className="h-[140px] w-auto" aria-hidden="true">
      <ellipse cx="100" cy="134" rx="82" ry="9" fill="#C9D5F7" />
      <path d="M60 14h76v110l-9.5-7-9.5 7-9.5-7-9.5 7-9.5-7-9.5 7-9.5-7-9.5 7Z" fill="#fff" stroke="#E2E6F5" strokeWidth="1.5" />
      <rect x="70" y="28" width="46" height="8" rx="4" fill="#5B5FEF" />
      <rect x="70" y="46" width="56" height="5" rx="2.5" fill="#E3E6F3" />
      <rect x="70" y="58" width="46" height="5" rx="2.5" fill="#E3E6F3" />
      <rect x="70" y="70" width="52" height="5" rx="2.5" fill="#E3E6F3" />
      <rect x="70" y="92" width="56" height="12" rx="6" fill="#FBC56A" />
      <circle cx="140" cy="40" r="17" fill="#4F46E5" />
      <text x="140" y="46" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff" fontFamily="Arial, sans-serif">
        £
      </text>
    </svg>
  );
}

function FlagIllustration() {
  return (
    <svg viewBox="0 0 200 150" className="h-[140px] w-auto" aria-hidden="true">
      <ellipse cx="100" cy="134" rx="82" ry="9" fill="#F2CFDD" />
      <rect x="62" y="16" width="6" height="116" rx="3" fill="#2B2F55" />
      <path d="M68 20h82l-18 23 18 23H68Z" fill="url(#flagGrad)" />
      <circle cx="136" cy="106" r="20" fill="#FBB03B" />
      <rect x="134" y="94" width="4" height="15" rx="2" fill="#fff" />
      <circle cx="136" cy="116" r="2.5" fill="#fff" />
      <defs>
        <linearGradient id="flagGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E0127C" />
          <stop offset="1" stopColor="#7B3FE4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function BuildingsIllustration() {
  const windows = [0, 1, 2, 3].flatMap((row) => [0, 1, 2].map((col) => ({ row, col })));
  return (
    <svg viewBox="0 0 200 150" className="h-[140px] w-auto" aria-hidden="true">
      <ellipse cx="100" cy="134" rx="82" ry="9" fill="#C7E7DD" />
      <rect x="64" y="22" width="64" height="106" rx="4" fill="url(#towerGrad)" />
      {windows.map(({ row, col }) => (
        <rect key={`${row}-${col}`} x={73 + col * 17} y={34 + row * 19} width="10" height="10" rx="2" fill="#DDF3EF" />
      ))}
      <rect x="134" y="58" width="44" height="70" rx="4" fill="#FF7A59" />
      <rect x="143" y="70" width="10" height="10" rx="2" fill="#FFE2D8" />
      <rect x="159" y="70" width="10" height="10" rx="2" fill="#FFE2D8" />
      <rect x="143" y="88" width="10" height="10" rx="2" fill="#FFE2D8" />
      <rect x="159" y="88" width="10" height="10" rx="2" fill="#FFE2D8" />
      <defs>
        <linearGradient id="towerGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#14A08A" />
          <stop offset="1" stopColor="#3D7BFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const TASKS = [
  {
    title: "Sign-in help",
    body: "Signing in safely on the official site.",
    href: "#sign-in-safely",
    bg: "bg-[#ECE6FC]",
    Illustration: SignInIllustration,
  },
  {
    title: "Change my details",
    body: "How to request an update.",
    href: "#your-details",
    bg: "bg-[#E1E8FD]",
    Illustration: ReceiptIllustration,
  },
  {
    title: "Recover access",
    body: "Forgotten password, lockouts and more.",
    href: "#recover-access",
    bg: "bg-[#FCE6EF]",
    Illustration: FlagIllustration,
  },
  {
    title: "Business access",
    body: "Owners, admins and roles.",
    href: "#account-access",
    bg: "bg-[#DDF3EC]",
    Illustration: BuildingsIllustration,
  },
];

export default function ChooseTaskSection() {
  return (
    <section id="account-tasks" className="w-full scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader eyebrow="What do you need?" title="Choose an account task" />

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TASKS.map(({ title, body, href, bg, Illustration }) => (
            <li key={title}>
              <Link
                href={href}
                className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[#ECEEF5] bg-white shadow-[0_14px_34px_rgba(30,30,90,0.08)] transition-transform hover:-translate-y-1"
              >
                <span className={`flex h-[172px] items-center justify-center ${bg}`}>
                  <Illustration />
                </span>
                <span className="flex flex-1 flex-col px-5 pb-7 pt-5">
                  <span className={`${HEADING} block text-lg font-semibold text-[#0F1452]`}>{title}</span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-[#5A6283]">{body}</span>
                  <span className={`${HEADING} mt-3 block text-sm font-semibold text-[#E0127C]`}>
                    Go <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
