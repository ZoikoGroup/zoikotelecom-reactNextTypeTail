import Link from "next/link";
import { ChevronRight } from "lucide-react";

const sectionContent = {
  id: "scope",
  step: "01",
  eyebrow: "SCOPE",
  headingPrefix: "Starting points, ",
  headingAccent: "not certifications",
  description:
    "The six sectors below are discovery categories. They describe common needs and the services worth exploring — none is a validated regulated-industry solution, and nothing here is a price, coverage result or named offer.",
  callout: {
    title: "Not sure where you fit?",
    description:
      "You don’t have to choose a sector. Tell us how you work and we’ll take it from there.",
    ctaLabel: "General business enquiry",
    href: "/contact",
  },
} as const;

function LightbulbIllustration() {
  return (
    <svg
      className="h-16 w-16 shrink-0"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Soft shadow beneath bulb */}
      <ellipse cx="32" cy="57.5" rx="18" ry="2.5" fill="#e2e8f0" />

      {/* Amber light rays around bulb */}
      <line
        x1="32"
        y1="4"
        x2="32"
        y2="8.5"
        stroke="#fbbf24"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <line
        x1="15.5"
        y1="10.5"
        x2="18.8"
        y2="13.8"
        stroke="#fbbf24"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <line
        x1="48.5"
        y1="10.5"
        x2="45.2"
        y2="13.8"
        stroke="#fbbf24"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <line
        x1="9.5"
        y1="26"
        x2="14"
        y2="26"
        stroke="#fbbf24"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <line
        x1="50"
        y1="26"
        x2="54.5"
        y2="26"
        stroke="#fbbf24"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Bulb body */}
      <path
        d="M32 11.5C23.7 11.5 17 18.1 17 26.3C17 31.8 20.1 36.6 24.7 39.1C26.1 39.9 27 41.3 27 42.9V45.5H37V42.9C37 41.3 37.9 39.9 39.3 39.1C43.9 36.6 47 31.8 47 26.3C47 18.1 40.3 11.5 32 11.5Z"
        fill="url(#scopeBulbGrad)"
      />

      {/* Checkmark inside bulb */}
      <path
        d="M28.5 26.5L31 29L36 24"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dark navy screw base */}
      <rect x="27" y="46.5" width="10" height="3.2" rx="1.2" fill="#1e293b" />
      <rect x="27.8" y="50.5" width="8.4" height="3" rx="1.2" fill="#0f172a" />
      <rect x="29.5" y="54.2" width="5" height="2" rx="1" fill="#334155" />

      <defs>
        <linearGradient
          id="scopeBulbGrad"
          x1="20"
          y1="12"
          x2="44"
          y2="45"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="55%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function StartingPointsNotCertificationsSection() {
  return (
    <section
      id={sectionContent.id}
      className="w-full bg-white px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Left column: Eyebrow, heading & scope note */}
        <div className="lg:col-span-6">
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="italic text-[#e093b9]">{sectionContent.step}</span>
            <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1438] sm:text-[36px]">
            {sectionContent.headingPrefix}
            <span className="block text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>

          <p className="mt-3.5 max-w-[490px] text-[12px] leading-[1.6] text-[#4b5563]">
            {sectionContent.description}
          </p>
        </div>

        {/* Right column: General enquiry card */}
        <div className="lg:col-span-6">
          <div className="flex flex-col items-start gap-5 rounded-3xl border border-[#eaecf4] bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:flex-row sm:items-center sm:px-8 sm:py-7">
            <LightbulbIllustration />

            <div>
              <h3 className="text-[15.5px] font-extrabold leading-snug text-[#0c1438]">
                {sectionContent.callout.title}
              </h3>

              <p className="mt-1.5 max-w-[360px] text-[12px] leading-[1.55] text-[#4b5563]">
                {sectionContent.callout.description}
              </p>

              <div className="mt-3.5">
                <Link
                  href={sectionContent.callout.href}
                  className="inline-flex items-center gap-1 text-[12px] font-bold text-[#c81878] transition hover:underline"
                >
                  <span>{sectionContent.callout.ctaLabel}</span>
                  <ChevronRight
                    className="h-3.5 w-3.5 stroke-[2.5]"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
