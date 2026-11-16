import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const HEADLINE = [
  [
    { text: "Understand ", accent: false },
    { text: "ultrafast", accent: true },
  ],
  [{ text: "broadband before", accent: false }],
  [{ text: "you choose.", accent: false }],
] as const;

const ACTIONS = [
  {
    label: "View broadband plans",
    href: "/bt-broadband",
    primary: true,
  },
  {
    label: "Ask about broadband options",
    href: "/contact",
    primary: false,
  },
] as const;

const TICKS = [-62, -50, -38, -26, -14, -2, 10, 22, 34, 46, 58] as const;

const LABELS = [
  { text: "Standard", position: "left-[4%] top-[63%]" },
  { text: "Superfast", position: "left-[41%] top-[-4%]" },
  { text: "Ultrafast", position: "right-[0%] top-[57%]" },
] as const;

function Gauge() {
  return (
    <div className="relative mx-auto aspect-[1/0.88] w-full max-w-[420px]">
      <svg
        viewBox="0 0 400 350"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Speed gauge moving from Standard to Superfast to Ultrafast, showing 300 plus megabits per second"
      >
        <defs>
          <linearGradient id="ultra-arc" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#4b4f7a" />
            <stop offset="0.35" stopColor="#5b7fe0" />
            <stop offset="0.7" stopColor="#7b4fe0" />
            <stop offset="1" stopColor="#ec1c8c" />
          </linearGradient>
        </defs>

        {/* Arc */}
        <path
          d="M52 270 A150 150 0 0 1 348 270"
          fill="none"
          stroke="url(#ultra-arc)"
          strokeWidth="34"
          strokeLinecap="round"
        />

        {/* Ticks */}
        <g
          transform="translate(200 270)"
          stroke="#dfe6ff"
          strokeWidth="2"
          strokeOpacity="0.8"
        >
          {TICKS.map((angle) => (
            <line
              key={angle}
              x1="0"
              y1="-158"
              x2="0"
              y2="-146"
              transform={`rotate(${angle})`}
            />
          ))}
        </g>

        {/* Needle */}
        <g transform="translate(200 270) rotate(52)">
          <polygon points="-3,0 3,0 0,-125" fill="#ffffff" />
        </g>
        <circle
          cx="200"
          cy="270"
          r="11"
          fill="#ec1c8c"
          stroke="#fff"
          strokeWidth="3"
        />
        <circle cx="200" cy="270" r="4" fill="#fff" />
      </svg>

      {LABELS.map((label) => (
        <span
          key={label.text}
          className={`absolute rounded-full border border-white/50 bg-[#1b1740]/90 px-3 py-1 text-sm font-semibold text-white ${label.position}`}
        >
          {label.text}
        </span>
      ))}

      <div className="absolute inset-x-0 bottom-0 text-center">
        <p className="text-3xl font-extrabold text-[#e86bd0]">300+</p>
        <p className="mt-1 text-sm text-white/70">Mbit/s · ultrafast band</p>
      </div>
    </div>
  );
}

export default function UltrafastHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0b0a24] text-white">
      <Image
        src="/Images/ultra/1.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#05092A] via-[#05092AF2] via-[#05092A8C] to-[#05092ACC]"
      />

      <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 px-6 py-14 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-20">
        {/* Left */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.08em] backdrop-blur">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[#ec1c8c]"
            />
            Ultrafast Broadband
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[52px]">
            {HEADLINE.map((line, i) => (
              <span key={i} className="block">
                {line.map((part) => (
                  <span
                    key={part.text}
                    className={part.accent ? "text-[#ff3d9a]" : ""}
                  >
                    {part.text}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p className="mt-5 max-w-[400px] text-base leading-7 text-white/80">
            Learn what high download speeds mean, what changes at home and how
            to explore plans.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {ACTIONS.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={
                  action.primary
                    ? "inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#e6007e] to-[#c4237f] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#e6007e]/30"
                    : "inline-flex items-center gap-2 rounded-lg border border-white/70 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
                }
              >
                {action.label}
                {action.primary && (
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Right */}
        <Gauge />
      </div>
    </section>
  );
}
