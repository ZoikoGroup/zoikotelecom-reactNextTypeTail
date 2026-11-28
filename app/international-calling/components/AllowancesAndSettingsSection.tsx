import Link from "next/link";
import { ChevronRight } from "lucide-react";

const sectionContent = {
  id: "your-account",
  step: "04",
  eyebrow: "YOUR ACCOUNT",
  headingPrefix: "Allowances ",
  headingAccent: "& settings",
} as const;

type AccountCardKey = "allowance" | "international" | "businessVoice";

interface AccountCardItem {
  key: AccountCardKey;
  title: string;
  description: string;
  badgeLabel?: string;
  ctaLabel?: string;
  href?: string;
}

const accountCards: readonly AccountCardItem[] = [
  {
    key: "allowance",
    title: "Check your allowance",
    description: "See any international minutes included in your plan.",
    badgeLabel: "SIGN-IN NOT LIVE",
  },
  {
    key: "international",
    title: "Turn international calling on or off",
    description:
      "If your service supports it and you have authority, we’ll review the policy and charges with you.",
    ctaLabel: "Ask the team",
    href: "/contact",
  },
  {
    key: "businessVoice",
    title: "For business voice",
    description:
      "Compare plan-specific terms, permissions and restrictions before requesting a quote.",
    ctaLabel: "Talk to the business team",
    href: "/business-voice",
  },
] as const;

function AccountCardIllustration({ type }: { type: AccountCardKey }) {
  switch (type) {
    case "allowance":
      return (
        <svg
          className="h-14 w-20"
          viewBox="0 0 80 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Soft shadow beneath card */}
          <ellipse cx="38" cy="51.5" rx="22" ry="2.5" fill="#e2e8f0" />

          {/* Account allowance card */}
          <rect
            x="17"
            y="12"
            width="42"
            height="32"
            rx="5"
            fill="#f1f5f9"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />

          {/* Avatar circle */}
          <circle cx="27.5" cy="24" r="5" fill="#4f46e5" />
          <path
            d="M21.5 34.5C21.5 31.5 24.2 29.5 27.5 29.5C30.8 29.5 33.5 31.5 33.5 34.5"
            stroke="#4f46e5"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Detail lines */}
          <rect
            x="37"
            y="20.5"
            width="14"
            height="2.4"
            rx="1.2"
            fill="#cbd5e1"
          />
          <rect x="37" y="26" width="10" height="2.4" rx="1.2" fill="#cbd5e1" />

          {/* Amber allowance pill */}
          <rect x="37" y="32" width="13" height="6" rx="3" fill="#fbbf24" />

          {/* Top-right purple lock badge */}
          <circle cx="58" cy="14" r="6.5" fill="#7c3aed" />
          <path
            d="M56 13.5V12.2C56 11.1 56.9 10.2 58 10.2C59.1 10.2 60 11.1 60 12.2V13.5"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <rect
            x="55.3"
            y="13.5"
            width="5.4"
            height="4.2"
            rx="1"
            fill="#ffffff"
          />
        </svg>
      );

    case "international":
      return (
        <svg
          className="h-14 w-20"
          viewBox="0 0 80 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Soft shadow beneath globe */}
          <ellipse cx="38" cy="51.5" rx="22" ry="2.5" fill="#e2e8f0" />

          {/* Globe sphere */}
          <circle cx="38" cy="28" r="15" fill="url(#acctGlobeGrad)" />

          {/* Latitude & longitude meridians */}
          <ellipse
            cx="38"
            cy="28"
            rx="7"
            ry="15"
            stroke="#f5d0fe"
            strokeWidth="1.35"
          />
          <line
            x1="23"
            y1="28"
            x2="53"
            y2="28"
            stroke="#f5d0fe"
            strokeWidth="1.35"
          />
          <path
            d="M25.5 21C29.2 22.8 33.5 23.8 38 23.8C42.5 23.8 46.8 22.8 50.5 21"
            stroke="#f5d0fe"
            strokeWidth="1.2"
          />
          <path
            d="M25.5 35C29.2 33.2 33.5 32.2 38 32.2C42.5 32.2 46.8 33.2 50.5 35"
            stroke="#f5d0fe"
            strokeWidth="1.2"
          />

          {/* Small amber toggle/signal accent top-right */}
          <rect
            x="55"
            y="14"
            width="6.5"
            height="3.2"
            rx="1.6"
            transform="rotate(-32 55 14)"
            fill="#fbbf24"
          />

          <defs>
            <linearGradient
              id="acctGlobeGrad"
              x1="25"
              y1="14"
              x2="51"
              y2="42"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="55%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "businessVoice":
      return (
        <svg
          className="h-14 w-20"
          viewBox="0 0 80 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Soft shadow beneath buildings */}
          <ellipse cx="38" cy="51.5" rx="22" ry="2.5" fill="#e2e8f0" />

          {/* Taller blue office tower */}
          <rect
            x="23"
            y="12"
            width="18"
            height="34"
            rx="3"
            fill="url(#acctTowerBlueGrad)"
          />
          <rect x="27" y="17" width="3" height="3.2" rx="0.7" fill="#bfdbfe" />
          <rect
            x="33.5"
            y="17"
            width="3"
            height="3.2"
            rx="0.7"
            fill="#bfdbfe"
          />
          <rect
            x="27"
            y="23.5"
            width="3"
            height="3.2"
            rx="0.7"
            fill="#bfdbfe"
          />
          <rect
            x="33.5"
            y="23.5"
            width="3"
            height="3.2"
            rx="0.7"
            fill="#bfdbfe"
          />
          <rect x="27" y="30" width="3" height="3.2" rx="0.7" fill="#bfdbfe" />
          <rect
            x="33.5"
            y="30"
            width="3"
            height="3.2"
            rx="0.7"
            fill="#bfdbfe"
          />
          <rect
            x="27"
            y="36.5"
            width="3"
            height="3.2"
            rx="0.7"
            fill="#bfdbfe"
          />
          <rect
            x="33.5"
            y="36.5"
            width="3"
            height="3.2"
            rx="0.7"
            fill="#bfdbfe"
          />

          {/* Shorter warm amber-gold building */}
          <rect
            x="41"
            y="22"
            width="14.5"
            height="24"
            rx="2.5"
            fill="#fbbf24"
          />
          <rect
            x="44.5"
            y="26.5"
            width="2.5"
            height="2.8"
            rx="0.6"
            fill="#fef3c7"
          />
          <rect
            x="49.5"
            y="26.5"
            width="2.5"
            height="2.8"
            rx="0.6"
            fill="#fef3c7"
          />
          <rect
            x="44.5"
            y="32"
            width="2.5"
            height="2.8"
            rx="0.6"
            fill="#fef3c7"
          />
          <rect
            x="49.5"
            y="32"
            width="2.5"
            height="2.8"
            rx="0.6"
            fill="#fef3c7"
          />
          <rect
            x="44.5"
            y="37.5"
            width="2.5"
            height="2.8"
            rx="0.6"
            fill="#fef3c7"
          />
          <rect
            x="49.5"
            y="37.5"
            width="2.5"
            height="2.8"
            rx="0.6"
            fill="#fef3c7"
          />

          <defs>
            <linearGradient
              id="acctTowerBlueGrad"
              x1="24"
              y1="12"
              x2="40"
              y2="46"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
        </svg>
      );
  }
}

export default function AllowancesAndSettingsSection() {
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
        </div>

        {/* Three-column account cards */}
        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
          {accountCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col justify-between rounded-3xl border border-[#eaecf4] bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.045)]"
            >
              <div>
                <AccountCardIllustration type={card.key} />

                <h3 className="mt-4 text-[16.5px] font-extrabold leading-snug tracking-[-0.015em] text-[#0c1438]">
                  {card.title}
                </h3>

                <p className="mt-1.5 text-[12px] leading-[1.55] text-[#4b5563]">
                  {card.description}
                </p>
              </div>

              <div className="mt-5">
                {card.badgeLabel && (
                  <span className="inline-flex items-center rounded-md bg-[#eef1f8] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#64748b]">
                    {card.badgeLabel}
                  </span>
                )}

                {card.ctaLabel && card.href && (
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1 text-[12px] font-bold text-[#c81878] transition hover:underline"
                  >
                    <span>{card.ctaLabel}</span>
                    <ChevronRight
                      className="h-3.5 w-3.5 stroke-[2.5]"
                      aria-hidden="true"
                    />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
