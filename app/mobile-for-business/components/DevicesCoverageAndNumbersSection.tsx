import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";

const sectionContent = {
  step: "03",
  eyebrow: "GOOD TO KNOW",
  headingPrefix: "Devices, coverage ",
  headingAccent: "& numbers",
} as const;

type CardIconKey = "sim" | "coverage" | "switching";

interface InfoCardItem {
  key: CardIconKey;
  variant: "light" | "dark";
  eyebrow: string;
  eyebrowClass: string;
  title: string;
  summaryParts: readonly { text: string; bold?: boolean }[];
  points: readonly string[];
  ctaLabel: string;
  href: string;
}

const infoCards: readonly InfoCardItem[] = [
  {
    key: "sim",
    variant: "light",
    eyebrow: "SIM & ESIM",
    eyebrowClass: "text-[#7c3aed]",
    title: "Check both device and plan",
    summaryParts: [
      { text: "eSIM needs support from the handset " },
      { text: "and", bold: true },
      { text: " the plan." },
    ],
    points: [
      "Bring your own: check the model supports eSIM",
      "Need devices: ask about procurement",
      "Physical SIM delivery is arranged securely",
    ],
    ctaLabel: "Ask about devices",
    href: "/contact",
  },
  {
    key: "coverage",
    variant: "light",
    eyebrow: "COVERAGE & ROAMING",
    eyebrowClass: "text-[#3b82f6]",
    title: "Coverage is indicative",
    summaryParts: [
      {
        text: "Network maps are a guide — coverage varies by location and device.",
      },
    ],
    points: [
      "We can review your key business locations",
      "Roaming zones, caps and fees depend on the plan",
      "Ask us to confirm before you rely on it",
    ],
    ctaLabel: "Request a coverage check",
    href: "/contact",
  },
  {
    key: "switching",
    variant: "dark",
    eyebrow: "SWITCHING",
    eyebrowClass: "text-[#f472b6]",
    title: "Keeping your numbers",
    summaryParts: [
      {
        text: "Transfers may be possible, subject to ownership, network and an authorised process.",
      },
    ],
    points: [
      "Rules differ for single lines and fleets",
      "The authorised account owner must approve",
      "Please don’t enter numbers in a public form",
    ],
    ctaLabel: "Talk to a specialist",
    href: "/contact",
  },
] as const;

function CardIllustration({ type }: { type: CardIconKey }) {
  switch (type) {
    case "sim":
      return (
        <svg
          className="h-14 w-20"
          viewBox="0 0 80 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="40" cy="51.5" rx="22" ry="2.5" fill="#e2e8f0" />
          <circle cx="17" cy="28" r="4" fill="#ddd6fe" />
          <rect x="27" y="6" width="24" height="44" rx="5" fill="#0f172a" />
          <rect
            x="29.5"
            y="9"
            width="19"
            height="38"
            rx="3.2"
            fill="url(#simPhoneScreenGrad)"
          />
          <rect
            x="36"
            y="10.5"
            width="6"
            height="1.4"
            rx="0.7"
            fill="#0f172a"
          />
          <rect x="34" y="21" width="10" height="11" rx="2" fill="#fbbf24" />
          <line
            x1="34"
            y1="24.5"
            x2="44"
            y2="24.5"
            stroke="#b45309"
            strokeWidth="0.9"
          />
          <line
            x1="34"
            y1="28.5"
            x2="44"
            y2="28.5"
            stroke="#b45309"
            strokeWidth="0.9"
          />
          <line
            x1="39"
            y1="21"
            x2="39"
            y2="32"
            stroke="#b45309"
            strokeWidth="0.9"
          />
          <circle cx="60" cy="17" r="7" fill="#fbbf24" />
          <path
            d="M57 17.2L59.1 19.3L63.2 15.1"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="simPhoneScreenGrad"
              x1="29.5"
              y1="9"
              x2="48.5"
              y2="47"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="55%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "coverage":
      return (
        <svg
          className="h-14 w-20"
          viewBox="0 0 80 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="40" cy="51.5" rx="22" ry="2.5" fill="#e2e8f0" />
          <circle cx="40" cy="29" r="17.5" fill="url(#coverageGlobeGrad)" />
          <ellipse
            cx="40"
            cy="29"
            rx="7.5"
            ry="17.5"
            stroke="#c7d2fe"
            strokeWidth="1.3"
          />
          <line
            x1="22.5"
            y1="29"
            x2="57.5"
            y2="29"
            stroke="#c7d2fe"
            strokeWidth="1.3"
          />
          <rect
            x="57"
            y="14"
            width="8"
            height="3.6"
            rx="1.2"
            transform="rotate(-38 57 14)"
            fill="#fbbf24"
          />
          <defs>
            <linearGradient
              id="coverageGlobeGrad"
              x1="22.5"
              y1="11.5"
              x2="57.5"
              y2="46.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "switching":
      return (
        <svg
          className="h-14 w-20"
          viewBox="0 0 80 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="33" y="6" width="21" height="40" rx="4.5" fill="#090d26" />
          <rect
            x="35.2"
            y="8.5"
            width="16.6"
            height="35"
            rx="3"
            fill="url(#switchingPhoneGrad)"
          />
          <path
            d="M21 25C21 22.8 22.8 21 25 21H34L38 25V42C38 44.2 36.2 46 34 46H25C22.8 46 21 44.2 21 42V25Z"
            fill="#fbbf24"
          />
          <line
            x1="25"
            y1="29"
            x2="33"
            y2="29"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="25"
            y1="33"
            x2="31"
            y2="33"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="29.5" cy="40" r="1.6" fill="#0f172a" />
          <defs>
            <linearGradient
              id="switchingPhoneGrad"
              x1="35.2"
              y1="8.5"
              x2="51.8"
              y2="43.5"
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

export default function DevicesCoverageAndNumbersSection() {
  return (
    <section
      id="good-to-know"
      className="w-full bg-white px-4 py-14 sm:px-8 lg:px-12"
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

        {/* Three-column cards grid */}
        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
          {infoCards.map((card) => {
            const isDark = card.variant === "dark";

            return (
              <article
                key={card.title}
                className={`flex flex-col justify-between rounded-3xl p-7 ${
                  isDark
                    ? "bg-[#060c2c] bg-[radial-gradient(ellipse_85%_75%_at_80%_15%,rgba(88,28,135,0.42)_0%,transparent_70%),linear-gradient(155deg,#070d33_0%,#110a3b_100%)] text-white shadow-[0_14px_34px_rgba(6,12,44,0.18)]"
                    : "border border-[#eaecf4] bg-white text-[#0c1438] shadow-[0_8px_24px_rgba(15,23,42,0.045)]"
                }`}
              >
                <div>
                  <div>
                    <CardIllustration type={card.key} />
                  </div>

                  <p
                    className={`mt-4 text-[9.5px] font-extrabold uppercase tracking-[0.16em] ${card.eyebrowClass}`}
                  >
                    {card.eyebrow}
                  </p>

                  <h3
                    className={`mt-1.5 text-[18px] font-extrabold leading-snug tracking-[-0.015em] ${
                      isDark ? "text-white" : "text-[#0c1438]"
                    }`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`mt-2 text-[12px] leading-[1.55] ${
                      isDark ? "text-white/75" : "text-[#4b5563]"
                    }`}
                  >
                    {card.summaryParts.map((part) =>
                      part.bold ? (
                        <strong
                          key={part.text}
                          className={`font-bold ${
                            isDark ? "text-white" : "text-[#0c1438]"
                          }`}
                        >
                          {part.text}
                        </strong>
                      ) : (
                        <span key={part.text}>{part.text}</span>
                      ),
                    )}
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {card.points.map((point) => (
                      <li
                        key={point}
                        className={`flex items-start gap-2.5 text-[11.5px] leading-[1.48] ${
                          isDark ? "text-white/80" : "text-[#475569]"
                        }`}
                      >
                        <Check
                          className={`mt-0.5 h-3.5 w-3.5 shrink-0 stroke-[2.2] ${
                            isDark ? "text-[#f472b6]" : "text-[#d946ef]"
                          }`}
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <Link
                    href={card.href}
                    className={`inline-flex items-center gap-1 text-[12px] font-bold transition hover:underline ${
                      isDark ? "text-[#f472b6]" : "text-[#c81878]"
                    }`}
                  >
                    <span>{card.ctaLabel}</span>
                    <ChevronRight
                      className="h-3.5 w-3.5 stroke-[2.5]"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
