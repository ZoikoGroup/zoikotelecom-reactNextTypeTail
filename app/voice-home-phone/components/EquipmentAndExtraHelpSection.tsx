import Link from "next/link";
import { ChevronRight } from "lucide-react";

const sectionContent = {
  id: "good-to-know",
  step: "04",
  eyebrow: "GOOD TO KNOW",
  headingPrefix: "Equipment ",
  headingAccent: "& extra help",
  comingSoonBadge: "COMING SOON",
  comingSoonNote: "Home phone plans and prices.",
} as const;

type EquipmentCardKey = "handset" | "support";

interface EquipmentCardItem {
  key: EquipmentCardKey;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}

const equipmentCards: readonly EquipmentCardItem[] = [
  {
    key: "handset",
    title: "Can I use my handset?",
    description:
      "It depends on the phone, the connection and supported equipment. Check compatibility before changing service.",
    ctaLabel: "Ask about equipment",
    href: "/contact?topic=handset-compatibility",
  },
  {
    key: "support",
    title: "Need extra support?",
    description:
      "If you need help because of your health, age or circumstances, tell us so we can talk through your options.",
    ctaLabel: "Accessibility help",
    href: "/accessibility-help",
  },
] as const;

function EquipmentCardIllustration({ type }: { type: EquipmentCardKey }) {
  switch (type) {
    case "handset":
      return (
        <svg
          className="h-14 w-16"
          viewBox="0 0 64 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Soft shadow beneath items */}
          <ellipse cx="32" cy="51.5" rx="22" ry="2.5" fill="#e2e8f0" />

          {/* Left amber spec/compatibility card */}
          <rect x="10" y="24" width="18" height="22" rx="3.5" fill="#fbbf24" />
          <line
            x1="14"
            y1="30"
            x2="24"
            y2="30"
            stroke="#fef3c7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="14"
            y1="34.5"
            x2="22"
            y2="34.5"
            stroke="#fef3c7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="15.5" cy="40" r="1.4" fill="#fef3c7" />

          {/* Right handset/device frame */}
          <rect x="27" y="9" width="21" height="37" rx="4.5" fill="#1e1b4b" />
          <rect
            x="29.5"
            y="12.5"
            width="16"
            height="29.5"
            rx="2.5"
            fill="url(#equipHandsetScreenGrad)"
          />
          {/* Speaker notch & home indicator */}
          <rect
            x="35.5"
            y="10.4"
            width="4"
            height="1"
            rx="0.5"
            fill="#64748b"
          />
          <circle cx="37.5" cy="44" r="1.1" fill="#94a3b8" />

          <defs>
            <linearGradient
              id="equipHandsetScreenGrad"
              x1="30"
              y1="13"
              x2="45"
              y2="42"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="55%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "support":
      return (
        <svg
          className="h-14 w-16"
          viewBox="0 0 64 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Soft shadow beneath heart */}
          <ellipse cx="32" cy="51.5" rx="18" ry="2.5" fill="#e2e8f0" />

          {/* Gradient heart */}
          <path
            d="M32 45.5C32 45.5 15 35.1 15 22.8C15 17.6 19.1 13.5 24.2 13.5C27.5 13.5 30.4 15.2 32 17.8C33.6 15.2 36.5 13.5 39.8 13.5C44.9 13.5 49 17.6 49 22.8C49 35.1 32 45.5 32 45.5Z"
            fill="url(#equipSupportHeartGrad)"
          />

          {/* Centered white plus cross */}
          <path
            d="M32 22.5V32.5M27 27.5H37"
            stroke="#ffffff"
            strokeWidth="2.6"
            strokeLinecap="round"
          />

          <defs>
            <linearGradient
              id="equipSupportHeartGrad"
              x1="18"
              y1="14"
              x2="45"
              y2="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
          </defs>
        </svg>
      );
  }
}

export default function EquipmentAndExtraHelpSection() {
  return (
    <section
      id={sectionContent.id}
      className="w-full bg-[#FFFFFF] px-4 py-14 sm:px-8 lg:px-12"
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

        {/* Two-column horizontal cards */}
        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2">
          {equipmentCards.map((card) => (
            <article
              key={card.title}
              className="flex items-center gap-5 rounded-3xl border border-[#eaecf4] bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.045)] sm:p-7"
            >
              <div className="shrink-0">
                <EquipmentCardIllustration type={card.key} />
              </div>

              <div>
                <h3 className="text-[16px] font-extrabold leading-snug tracking-[-0.015em] text-[#0c1438]">
                  {card.title}
                </h3>

                <p className="mt-1.5 text-[11.5px] leading-[1.52] text-[#4b5563]">
                  {card.description}
                </p>

                <div className="mt-3.5">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1 text-[11.5px] font-bold text-[#c81878] transition hover:underline"
                  >
                    <span>{card.ctaLabel}</span>
                    <ChevronRight
                      className="h-3.5 w-3.5 stroke-[2.5]"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom coming-soon note */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 text-center">
          <span className="inline-flex items-center rounded-md bg-[#f8e7c4] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#b45309]">
            {sectionContent.comingSoonBadge}
          </span>
          <span className="text-[11.5px] font-medium text-[#4b5563]">
            {sectionContent.comingSoonNote}
          </span>
        </div>
      </div>
    </section>
  );
}
