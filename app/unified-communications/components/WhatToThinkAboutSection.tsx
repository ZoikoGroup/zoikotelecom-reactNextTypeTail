import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";

const sectionContent = {
  id: "before-you-choose",
  step: "04",
  eyebrow: "BEFORE YOU CHOOSE",
  headingPrefix: "What to ",
  headingAccent: "think about",
  description:
    "Unknown answers are welcome. We won’t ask for credentials or call records.",
  footerBadge: "COMING SOON",
  footerTextPrefix: "An online needs assessment. Until then, ",
  footerCtaLabel: "tell us your requirements",
  footerHref: "/contact",
} as const;

type CardIconKey = "users" | "setup" | "devices";

interface ThinkAboutCardItem {
  key: CardIconKey;
  title: string;
  description: string;
  tags: readonly string[];
}

const thinkAboutCards: readonly ThinkAboutCardItem[] = [
  {
    key: "users",
    title: "Who and how many",
    description:
      "Count each thing separately — they’re priced and planned differently.",
    tags: ["Named users", "Call channels", "Meeting seats", "Sites", "Numbers"],
  },
  {
    key: "setup",
    title: "Your current setup",
    description:
      "Tell us about your existing phone system and equipment — “not sure” is fine. Never share passwords.",
    tags: ["Existing PBX", "Legacy equipment", "Unknown"],
  },
  {
    key: "devices",
    title: "Devices & accessibility",
    description:
      "Desk phones, headsets, screen readers and telecare needs — we’ll check what works.",
    tags: ["Desk phones", "Screen readers", "Telecare"],
  },
] as const;

function ThinkAboutIllustration({ type }: { type: CardIconKey }) {
  switch (type) {
    case "users":
      return (
        <svg
          className="h-14 w-20"
          viewBox="0 0 80 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="38" cy="51.5" rx="22" ry="2.5" fill="#e2e8f0" />
          {/* Left purple-magenta figure */}
          <circle cx="31" cy="21" r="7" fill="url(#ucUserPurpleGrad)" />
          <path
            d="M17 44C17 35.7 23.3 29 31 29C38.7 29 45 35.7 45 44V46H17V44Z"
            fill="url(#ucUserPurpleGrad)"
          />
          {/* Right warm amber-gold figure */}
          <circle cx="46" cy="23.5" r="5.5" fill="#fbbf24" />
          <path
            d="M36 45C36 38.4 40.5 33 46 33C51.5 33 56 38.4 56 45V46H36V45Z"
            fill="#fbbf24"
          />
          {/* Small accent heart above figures */}
          <path
            d="M45 12.2C45 11.1 45.9 10.3 47 10.3C47.6 10.3 48.2 10.6 48.5 11.1C48.8 10.6 49.4 10.3 50 10.3C51.1 10.3 52 11.1 52 12.2C52 13.8 48.5 15.8 48.5 15.8C48.5 15.8 45 13.8 45 12.2Z"
            fill="#f43f5e"
          />
          <defs>
            <linearGradient
              id="ucUserPurpleGrad"
              x1="19"
              y1="14"
              x2="42"
              y2="46"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#d91c81" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "setup":
      return (
        <svg
          className="h-14 w-20"
          viewBox="0 0 80 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="40" cy="51.5" rx="22" ry="2.5" fill="#e2e8f0" />
          {/* Handset cradle arch */}
          <path
            d="M30 22V18C30 14.7 32.7 12 36 12H44C47.3 12 50 14.7 50 18V22"
            stroke="#312e81"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Base unit */}
          <rect x="24" y="21" width="32" height="24" rx="5.5" fill="#6366f1" />
          {/* Keypad dots */}
          <circle cx="33" cy="29" r="1.4" fill="#e0e7ff" />
          <circle cx="40" cy="29" r="1.4" fill="#e0e7ff" />
          <circle cx="47" cy="29" r="1.4" fill="#e0e7ff" />
          <circle cx="33" cy="35" r="1.4" fill="#e0e7ff" />
          <circle cx="40" cy="35" r="1.4" fill="#e0e7ff" />
          <circle cx="47" cy="35" r="1.4" fill="#e0e7ff" />
          {/* Signal waves on top-right */}
          <path
            d="M59 17C61.2 19.2 61.2 22.8 59 25"
            stroke="#f59e0b"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M63 13.5C67.2 17.7 67.2 24.3 63 28.5"
            stroke="#fbbf24"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "devices":
      return (
        <svg
          className="h-14 w-20"
          viewBox="0 0 80 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="40" cy="51.5" rx="22" ry="2.5" fill="#e2e8f0" />
          {/* Heart badge */}
          <path
            d="M40 45.5C40 45.5 22 34.4 22 21.8C22 15.8 26.8 11 32.8 11C36.3 11 38.8 12.7 40 15.1C41.2 12.7 43.7 11 47.2 11C53.2 11 58 15.8 58 21.8C58 34.4 40 45.5 40 45.5Z"
            fill="url(#ucHeartGrad)"
          />
          {/* White plus symbol inside heart */}
          <path
            d="M40 21V31M35 26H45"
            stroke="#ffffff"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="ucHeartGrad"
              x1="24"
              y1="12"
              x2="56"
              y2="44"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>
      );
  }
}

export default function WhatToThinkAboutSection() {
  return (
    <section
      id={sectionContent.id}
      className="w-full bg-[#f5f6fb] px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Left-aligned section header */}
        <div>
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="italic text-[#e093b9]">{sectionContent.step}</span>
            <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold tracking-[-0.025em] text-[#0c1438] sm:text-[36px]">
            {sectionContent.headingPrefix}
            <span className="text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>

          <p className="mt-2 text-[13.5px] leading-[1.6] text-[#4b5563] sm:text-sm">
            {sectionContent.description}
          </p>
        </div>

        {/* Three-column cards */}
        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
          {thinkAboutCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-3xl border border-[#eaecf4] bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.045)]"
            >
              <div>
                <ThinkAboutIllustration type={card.key} />
              </div>

              <h3 className="mt-4 text-[16.5px] font-extrabold leading-snug tracking-[-0.015em] text-[#0c1438]">
                {card.title}
              </h3>

              <p className="mt-1.5 text-[12px] leading-[1.55] text-[#4b5563]">
                {card.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#f4f1fc] px-2.5 py-1 text-[10.5px] font-semibold text-[#5b21b6]"
                  >
                    <Check
                      className="h-3 w-3 shrink-0 stroke-[2.5] text-[#8b5cf6]"
                      aria-hidden="true"
                    />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom coming soon bar */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-center text-[11.5px] text-[#4b5563]">
          <span className="inline-flex items-center rounded-md bg-[#fff3d6] px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#92400e]">
            {sectionContent.footerBadge}
          </span>

          <span>
            {sectionContent.footerTextPrefix}
            <Link
              href={sectionContent.footerHref}
              className="inline-flex items-center gap-0.5 font-bold text-[#c81878] transition hover:underline"
            >
              <span>{sectionContent.footerCtaLabel}</span>
              <ChevronRight
                className="h-3.5 w-3.5 stroke-[2.5]"
                aria-hidden="true"
              />
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
