import Image from "next/image";
import { ChevronRight } from "lucide-react";

const pills = [
  {
    label: "Innovation",
    bg: "bg-[#F97316]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-2.5 w-2.5"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z" />
      </svg>
    ),
  },
  {
    label: "International connectivity",
    bg: "bg-[#3B82F6]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-2.5 w-2.5"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
      </svg>
    ),
  },
  {
    label: "Customer focus",
    bg: "bg-[#EC4899]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-2.5 w-2.5"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
      </svg>
    ),
  },
] as const;

export default function PurposeHero() {
  return (
    <section
      id="purpose-hero"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#2A0A3E] via-[#4A0E4E] to-[#6B1259] text-white antialiased"
    >
      <div className="relative grid grid-cols-1 lg:min-h-[390px] lg:grid-cols-[49%_51%]">
        {/* Left */}
        <div className="relative z-10 overflow-hidden px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
          {/* Soft circle behind text */}
          <div
            className="pointer-events-none absolute -right-20 top-[28%] hidden h-[300px] w-[420px] rounded-full bg-white/[0.06] lg:block"
            aria-hidden="true"
          />
          {/* Wavy dotted line */}
          <svg
            className="pointer-events-none absolute bottom-3 left-0 hidden h-8 w-[85%] text-white/30 sm:block"
            viewBox="0 0 400 32"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 20 C 60 4, 110 30, 190 16 S 320 2, 400 18"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="2 4"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative flex items-center gap-3">
            <span className="h-px w-9 bg-white/60" aria-hidden="true" />
            <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/80">
              About Zoiko
            </span>
          </div>

          <h1 className="relative mt-6 max-w-[440px] text-[44px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white sm:text-[52px]">
            Our purpose <span className="text-[#F5A9D6]">&amp;</span>
            <br />
            <span className="font-medium italic text-[#F5B8DD]">values</span>
          </h1>

          <p className="relative mt-5 max-w-[340px] text-[13px] leading-[1.65] text-white/85">
            Connectivity should help people and businesses do what matters.
            Explore the aims and principles behind how we want to work.
          </p>

          <div className="relative mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#E11D74] to-[#F43F8E] px-5 py-3 text-[12px] font-bold text-white shadow-[0_8px_20px_rgba(225,29,116,0.35)] transition-opacity hover:opacity-90"
            >
              Explore our values
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-md bg-white px-5 py-3 text-[12px] font-bold text-[#2A0A3E] transition-colors hover:bg-white/90"
            >
              Contact us
            </a>
          </div>

          <div className="relative mt-6 flex flex-wrap items-center gap-2.5">
            {pills.map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 py-1 pl-1 pr-3 text-[9px] font-semibold text-white backdrop-blur-sm"
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full ${p.bg}`}
                >
                  {p.icon}
                </span>
                {p.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: image mosaic */}
        <div className="relative grid min-h-[360px] grid-cols-1 gap-1 sm:grid-cols-[1.3fr_1fr] lg:min-h-0">
          {/* Large image */}
          <div className="relative min-h-[320px] w-full overflow-hidden">
            <Image
              src="/Images/vals/3.png"
              alt="Two people sharing a high five"
              fill
              priority
              sizes="(min-width: 1024px) 28vw, 100vw"
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3 text-[8px] font-medium italic text-white">
              People first
            </span>
          </div>

          {/* Right column */}
          <div className="grid grid-rows-2 gap-1">
            <div className="relative min-h-[180px] w-full overflow-hidden">
              <Image
                src="/Images/vals/2.png"
                alt="Team working on laptops at a shared table"
                fill
                sizes="(min-width: 1024px) 22vw, 100vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 left-3 text-[8px] font-medium italic text-white">
                Innovation
              </span>
            </div>

            <div className="relative min-h-[180px] w-full overflow-hidden">
              <Image
                src="/Images/vals/1.png"
                alt="Colleagues connecting across a table"
                fill
                sizes="(min-width: 1024px) 22vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1A0A2E]/60" />

              <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 rounded-2xl border border-white/20 bg-white/10 p-3.5 backdrop-blur-md sm:inset-x-3">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3"
                  fill="none"
                  stroke="#F5A9D6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 7H5v5h4v-1c0 2-1 3-3 4M19 7h-4v5h4v-1c0 2-1 3-3 4" />
                </svg>
                <p className="mt-2 text-[10px] italic leading-[1.5] text-white">
                  To make connectivity easier to understand — and more useful in
                  everyday life and work.
                </p>
                <p className="mt-2 text-[7px] font-bold uppercase tracking-[0.12em] text-white/70">
                  Our purpose
                </p>
              </div>

              <span className="absolute bottom-3 left-3 text-[8px] font-medium italic text-white">
                Connected
              </span>
            </div>
          </div>

          {/* Circular badge */}
          <div className="absolute -left-10 top-4 z-20 hidden h-[72px] w-[72px] items-center justify-center rounded-full bg-[#F7B6DA] shadow-[0_8px_20px_rgba(0,0,0,0.25)] lg:flex">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="badge-circle"
                  d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0"
                />
              </defs>
              <text
                fontSize="9"
                fontWeight="700"
                letterSpacing="2.2"
                fill="#4A0E4E"
              >
                <textPath href="#badge-circle">
                  VALUES · ABOUT ZOIKO · PURPOSE ·
                </textPath>
              </text>
            </svg>
            <p className="relative text-center text-[10px] font-bold leading-[1.1] text-[#4A0E4E]">
              Our
              <br />
              <span className="italic">purpose</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
