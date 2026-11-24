import { ArrowRight, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";

type Topic = {
  title: string;
  text: string;
  answers: string;
  bg: string;
  art: ReactNode;
};

const topics: readonly Topic[] = [
  {
    title: "eSIM & Mobile Plans",
    text: "eSIM, activation, switching and roaming.",
    answers: "4 answers",
    bg: "from-[#EFE7FD] to-[#F7F2FF]",
    art: (
      <svg
        viewBox="0 0 80 80"
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <ellipse cx="40" cy="70" rx="28" ry="6" fill="#DCCFF7" />
        <rect x="22" y="8" width="36" height="60" rx="7" fill="#7C3AED" />
        <rect x="26" y="14" width="28" height="48" rx="4" fill="#9F67F5" />
        <rect x="32" y="28" width="16" height="16" rx="3" fill="#F97316" />
        <path d="M32 36h16M40 28v16" stroke="#FDBA74" strokeWidth="1.5" />
        <circle cx="62" cy="22" r="5" fill="#F9A8D4" />
      </svg>
    ),
  },
  {
    title: "Broadband & Fibre",
    text: "Speeds, routers, installation and faults.",
    answers: "4 answers",
    bg: "from-[#DDF3EE] to-[#EDF9F6]",
    art: (
      <svg
        viewBox="0 0 80 80"
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <ellipse cx="40" cy="68" rx="30" ry="6" fill="#BDE5DC" />
        <path
          d="M18 30a32 32 0 0 1 44 0"
          stroke="#F59E0B"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M26 38a20 20 0 0 1 28 0"
          stroke="#F97316"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M34 46a8 8 0 0 1 12 0"
          stroke="#EF4444"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <rect x="14" y="52" width="52" height="14" rx="4" fill="#2A9D8F" />
        <circle cx="24" cy="59" r="2" fill="#fff" />
        <circle cx="32" cy="59" r="2" fill="#fff" />
        <circle cx="40" cy="59" r="2" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "Business Solutions",
    text: "Services, requirements and contracts.",
    answers: "1 answer",
    bg: "from-[#E4E8FB] to-[#F1F3FD]",
    art: (
      <svg
        viewBox="0 0 80 80"
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <ellipse cx="40" cy="70" rx="28" ry="6" fill="#CDD4F5" />
        <rect x="24" y="12" width="32" height="56" rx="3" fill="#4F5BD5" />
        <g fill="#C7CCF7">
          <rect x="30" y="20" width="6" height="6" />
          <rect x="44" y="20" width="6" height="6" />
          <rect x="30" y="32" width="6" height="6" />
          <rect x="44" y="32" width="6" height="6" />
          <rect x="30" y="44" width="6" height="6" />
          <rect x="44" y="44" width="6" height="6" />
        </g>
        <rect x="35" y="56" width="10" height="12" fill="#2E3A9E" />
      </svg>
    ),
  },
  {
    title: "Billing & Payments",
    text: "Charges, due dates and billing errors.",
    answers: "4 answers",
    bg: "from-[#FDE7EE] to-[#FEF1F5]",
    art: (
      <svg
        viewBox="0 0 80 80"
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <ellipse cx="40" cy="70" rx="28" ry="6" fill="#F8CFDB" />
        <rect
          x="20"
          y="10"
          width="38"
          height="52"
          rx="4"
          fill="#fff"
          stroke="#F4B6C8"
          strokeWidth="2"
        />
        <path
          d="M26 24h26M26 32h26M26 40h16"
          stroke="#F4B6C8"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="56" cy="54" r="12" fill="#EC4899" />
        <path
          d="M56 48v12M52 52h6a2 2 0 0 1 0 4h-4a2 2 0 0 0 0 4h6"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Account Management",
    text: "Access, profile updates and services.",
    answers: "1 answer",
    bg: "from-[#FDE9E4] to-[#FEF3F0]",
    art: (
      <svg
        viewBox="0 0 80 80"
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <ellipse cx="40" cy="70" rx="28" ry="6" fill="#F9D2C8" />
        <rect
          x="12"
          y="16"
          width="56"
          height="42"
          rx="5"
          fill="#fff"
          stroke="#F5B8A8"
          strokeWidth="2"
        />
        <circle cx="30" cy="32" r="7" fill="#F97316" />
        <path d="M18 50c2-8 8-10 12-10s10 2 12 10" fill="#FDBA74" />
        <path
          d="M48 28h14M48 36h14M48 44h8"
          stroke="#F5B8A8"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="62" cy="56" r="7" fill="#EF4444" />
        <path
          d="M59 56l2 2 4-4"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "General Questions",
    text: "Contact, cancellation and escalation.",
    answers: "5 answers",
    bg: "from-[#EDE7FB] to-[#F6F2FE]",
    art: (
      <svg
        viewBox="0 0 80 80"
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <ellipse cx="40" cy="70" rx="28" ry="6" fill="#D9CDF4" />
        <path
          d="M12 16h38a4 4 0 0 1 4 4v22a4 4 0 0 1-4 4H30l-10 9v-9h-8a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4z"
          fill="#7C3AED"
        />
        <path
          d="M40 34h28a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4h-6v8l-9-8H40a4 4 0 0 1-4-4V38a4 4 0 0 1 4-4z"
          fill="#EC4899"
        />
        <path
          d="M24 26h18M24 34h10"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const;

export default function HelpTopics() {
  return (
    <section
      id="help-topics"
      className="w-full bg-white pb-8 text-[#1A1240] antialiased"
    >
      <div className="mx-auto max-w-[1300px] px-6 sm:px-10 lg:px-16">
        {/* Alert banner */}
        <div className="flex flex-col gap-3 rounded-xl border border-[#F3DFA8] bg-[#FEF6DC] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F5A524]">
              <TriangleAlert
                className="h-4 w-4 text-white"
                aria-hidden="true"
              />
            </span>
            <div>
              <p className="text-[11px] font-bold text-[#1A1240]">
                Power cut or emergency?
              </p>
              <p className="mt-0.5 text-[10px] leading-[1.5] text-[#5C5873]">
                Digital landline services may not work during a power cut. Keep
                a charged mobile for emergencies and call 999. If you rely on a
                telecare device, contact us about your needs.
              </p>
            </div>
          </div>
          <a
            href="#"
            className="inline-flex shrink-0 items-center gap-1.5 text-[10px] font-bold text-[#1A1240] transition-opacity hover:opacity-70"
          >
            Contact us
            <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>

        {/* Heading */}
        <div className="mt-12 text-center sm:mt-14">
          <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#1A1240]">
            Browse by topic
          </p>
          <h2 className="mt-3 text-[28px] font-extrabold leading-[1.2] tracking-[-0.01em] text-[#1A1240] sm:text-[32px]">
            Six ways into our help
          </h2>
          <p className="mt-2 text-[12px] text-[#5C5873]">
            Pick a topic to jump to its questions.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <a
              key={t.title}
              href="#"
              className={`group flex items-center gap-4 rounded-2xl border border-[#E9E5F3] bg-gradient-to-br ${t.bg} px-5 py-5 shadow-[0_2px_10px_rgba(26,18,64,0.05)] transition-shadow hover:shadow-[0_8px_24px_rgba(26,18,64,0.1)]`}
            >
              <div className="h-[84px] w-[84px] shrink-0">{t.art}</div>
              <div className="min-w-0">
                <h3 className="text-[13px] font-bold leading-[1.3] text-[#1A1240]">
                  {t.title}
                </h3>
                <p className="mt-1 text-[10px] leading-[1.5] text-[#5C5873]">
                  {t.text}
                </p>
                <p className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold text-[#7C3AED]">
                  {t.answers}
                  <ArrowRight
                    className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
