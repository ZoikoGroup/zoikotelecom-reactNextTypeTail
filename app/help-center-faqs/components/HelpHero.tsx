import Image from "next/image";
import { ChevronRight } from "lucide-react";

const topics = [
  {
    label: "eSIM & mobile",
    bg: "bg-[#7C3AED]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 3h7l4 4v14H7z" />
        <rect x="10" y="12" width="5" height="5" rx="1" />
      </svg>
    ),
  },
  {
    label: "Broadband & Wi-Fi",
    bg: "bg-[#10B981]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M5 12a10 10 0 0 1 14 0" />
        <path d="M8.5 15.5a5 5 0 0 1 7 0" />
        <circle cx="12" cy="19" r="1" fill="white" />
      </svg>
    ),
  },
  {
    label: "Billing & payments",
    bg: "bg-[#EC1C7A]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    ),
  },
  {
    label: "Your account",
    bg: "bg-[#FF7A59]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c1-4 4-6 7-6s6 2 7 6" />
      </svg>
    ),
  },
] as const;

export default function HelpHero() {
  return (
    <section
      id="help-hero"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#FFE8DE] via-[#F7E8F8] to-[#EFE8FC] text-[#1A1240] antialiased"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: copy & decorative line art */}
        <div className="relative flex flex-col justify-center px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          {/* Decorative background elements */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[15%] top-[20%] hidden h-2 w-2 rounded-full bg-[#FF9E80]/70 sm:block"
          />
          <svg
            className="pointer-events-none absolute left-[20%] top-8 hidden h-9 w-9 text-[#D8C5EC] sm:block"
            viewBox="0 0 40 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M14 14a6.5 6.5 0 1 1 10 5.5c-2.5 1.8-3.5 2.8-3.5 5.5" />
            <circle cx="20.5" cy="30" r="1.2" fill="currentColor" />
          </svg>
          <svg
            className="pointer-events-none absolute left-[26%] top-6 hidden h-10 w-11 text-[#E5C9E8] sm:block"
            viewBox="0 0 44 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 6h30a2 2 0 0 1 2 2v17a2 2 0 0 1-2 2H17l-7 6v-6H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
          </svg>
          <svg
            className="pointer-events-none absolute right-[10%] top-[16%] hidden h-5 w-9 text-[#B89BE8] sm:block"
            viewBox="0 0 36 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <ellipse cx="18" cy="10" rx="16" ry="8" />
          </svg>
          <svg
            className="pointer-events-none absolute left-[24%] top-[53%] hidden h-5 w-9 text-[#CBB3EE]/70 sm:block"
            viewBox="0 0 36 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <ellipse cx="18" cy="10" rx="16" ry="8" />
          </svg>
          <svg
            className="pointer-events-none absolute bottom-12 left-[18%] hidden h-12 w-14 text-[#DFC8EE] sm:block"
            viewBox="0 0 56 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M8 6h38a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H22l-8 8v-8H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
          </svg>
          <svg
            className="pointer-events-none absolute bottom-5 left-3 hidden h-8 w-8 text-[#D8C5EC] sm:block"
            viewBox="0 0 40 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M14 14a6.5 6.5 0 1 1 10 5.5c-2.5 1.8-3.5 2.8-3.5 5.5" />
            <circle cx="20.5" cy="30" r="1.2" fill="currentColor" />
          </svg>
          {/* Subtle bottom wave */}
          <svg
            className="pointer-events-none absolute bottom-0 left-0 w-full text-[#E3CEF2]"
            viewBox="0 0 600 60"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 40 Q 150 60, 300 30 T 600 35"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>

          {/* Badge */}
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-[#9D26B0] shadow-[0_4px_14px_rgba(26,18,64,0.06)]">
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="#EC1C7A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="4" y="4" width="16" height="14" rx="3" />
                <path d="M9 20l3-2h4" />
                <path d="M10.2 9.2a2 2 0 1 1 2.8 1.8c-.5.3-.8.7-.8 1.3" />
                <circle cx="12.2" cy="14.8" r="0.6" fill="#EC1C7A" />
              </svg>
              Help Centre &amp; FAQs
            </span>
          </div>

          {/* Heading */}
          <h1 className="relative mt-6 max-w-[460px] text-[40px] font-black leading-[1.06] tracking-[-0.025em] text-[#18133E] sm:text-[48px]">
            What can we{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
              help
            </span>{" "}
            <span className="bg-gradient-to-r from-[#FF7A59] via-[#F43F8E] to-[#EC1C7A] bg-clip-text text-transparent">
              you with?
            </span>
          </h1>

          {/* Subtitle */}
          <p className="relative mt-5 max-w-[420px] text-[13.5px] leading-[1.65] text-[#4A4563]">
            Find clear answers about mobile, broadband, billing and your account
            — and the quickest way to reach us when you need a person.
          </p>

          {/* CTAs */}
          <div className="relative mt-7 flex flex-wrap items-center gap-3.5">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-[#EC1C7A] px-5 py-3 text-[12.5px] font-bold text-white shadow-[0_8px_22px_rgba(236,28,122,0.32)] transition-all hover:bg-[#d6166d]"
            >
              Browse help topics
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-lg border border-[#18133E] bg-white px-5 py-3 text-[12.5px] font-bold text-[#18133E] transition-colors hover:bg-[#F8F7FC]"
            >
              Contact support
            </a>
          </div>
        </div>

        {/* Right: grayscale image, curved gradient arc & floating cards */}
        <div className="relative min-h-[420px] w-full lg:min-h-[480px]">
          <Image
            src="/Images/help/1.png"
            alt="People working together at laptops"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover grayscale contrast-105"
          />

          {/* Curved gradient divider arc along the left edge */}
          <svg
            className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden h-full w-24 lg:block"
            viewBox="0 0 100 500"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="heroArcGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FF7A59" />
                <stop offset="48%" stopColor="#EC1C7A" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
            <path
              d="M 85 0 C -15 165, -15 335, 75 500"
              stroke="url(#heroArcGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>

          {/* Popular topics floating card */}
          <div className="absolute right-4 top-6 z-20 w-[210px] rounded-2xl bg-[#F4F2F8]/95 p-4 shadow-[0_14px_34px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:right-6 sm:w-[225px]">
            <p className="text-[8.5px] font-extrabold uppercase tracking-[0.1em] text-[#7D7893]">
              Popular topics
            </p>
            <ul className="mt-3 divide-y divide-[#E4E0EE]">
              {topics.map((t) => (
                <li
                  key={t.label}
                  className="flex items-center gap-3 py-2 first:pt-0 last:pb-0"
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${t.bg}`}
                  >
                    {t.icon}
                  </span>
                  <span className="text-[11.5px] font-bold text-[#18133E]">
                    {t.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom floating chat stack */}
          <div className="absolute bottom-5 left-4 right-4 z-20 flex flex-col items-end gap-2.5 sm:left-auto sm:right-0 sm:w-[290px]">
            {/* "You asked" white speech bubble */}
            <div className="mr-4 w-[225px] rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-[0_12px_28px_rgba(0,0,0,0.18)] sm:mr-6 sm:w-[240px]">
              <p className="text-[8.5px] font-extrabold uppercase tracking-[0.08em] text-[#EC1C7A]">
                You asked
              </p>
              <p className="mt-1 text-[11px] font-bold leading-[1.35] text-[#18133E]">
                How do I activate an eSIM?
              </p>
            </div>

            {/* "Answer first" magenta-to-purple gradient card */}
            <div className="w-full rounded-l-2xl rounded-r-2xl bg-gradient-to-r from-[#8B2CE2] via-[#C026A3] to-[#EC1C7A] px-4 py-3.5 text-white shadow-[0_12px_30px_rgba(192,38,163,0.38)] sm:rounded-r-none">
              <p className="text-[8.5px] font-extrabold uppercase tracking-[0.08em] text-white/85">
                Answer first
              </p>
              <p className="mt-1 text-[10.5px] leading-[1.45] text-white/95">
                Follow the instructions supplied with your service — and contact
                us if your activation route is unclear.
              </p>
            </div>

            {/* Bottom pill row: typing dots + dark contact badge */}
            <div className="mr-4 flex items-center gap-2 self-end sm:mr-6">
              <div className="flex h-6 items-center gap-1 rounded-full bg-white px-2.5 shadow-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C4BFD4]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#B0A9C6]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#9B93B8]" />
              </div>

              <div className="flex items-center gap-2 rounded-full bg-[#18133E] py-1.5 pl-1.5 pr-3.5 shadow-lg">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10B981]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3 w-3"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </span>
                <span className="text-[10px] font-semibold text-white">
                  Real people, via our Contact page
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
