import Link from "next/link";
import { ChevronRight } from "lucide-react";

const bannerContent = {
  eyebrow: "RESOURCES",
  title: "Our published ESG policy",
  description:
    "The full policy sets out our objectives across environmental, social and governance areas.",
  rows: [
    { label: "Stated approval", value: "4 May 2024 (per policy)" },
    { label: "Review", value: "Annual or as needed" },
  ],
  cta: { label: "Read ESG policy", href: "/about/esg-policy" },
  footnotePrefix: "Spotted something out of date? ",
  footnoteLink: { label: "Let us know", href: "/contact" },
} as const;

export default function EsgPolicyBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1e0b2b] bg-[linear-gradient(100deg,#1a0b24_0%,#2f0f3d_38%,#5a1666_74%,#7b1c80_100%)] px-4 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1120px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
        {/* Left column: copy, metadata rows & CTA */}
        <div className="w-full max-w-[580px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d69be0]">
            {bannerContent.eyebrow}
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold tracking-[-0.025em] text-white sm:text-4xl lg:text-[40px] lg:leading-[1.12]">
            {bannerContent.title}
          </h2>

          <p className="mt-3 text-[14px] leading-[1.6] text-white/75 sm:text-[15px]">
            {bannerContent.description}
          </p>

          {/* Metadata rows */}
          <dl className="mt-6 divide-y divide-white/15 border-y border-white/15">
            {bannerContent.rows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between gap-4 py-3 text-[13px] sm:text-[13.5px]"
              >
                <dt className="text-white/65">{row.label}</dt>
                <dd className="font-bold text-white">{row.value}</dd>
              </div>
            ))}
          </dl>

          {/* Primary CTA button */}
          <div className="mt-7">
            <Link
              href={bannerContent.cta.href}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#ea157d] to-[#cf1286] px-6 text-[13.5px] font-semibold text-white shadow-[0_10px_28px_rgba(234,21,125,0.45)] transition hover:brightness-110"
            >
              {bannerContent.cta.label}
              <ChevronRight
                className="h-4 w-4 stroke-[2.5]"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Footnote */}
          <p className="mt-4 text-[12px] text-white/60">
            {bannerContent.footnotePrefix}
            <Link
              href={bannerContent.footnoteLink.href}
              className="font-medium text-[#6ee7b7] underline underline-offset-4 transition hover:text-[#a7f3d0]"
            >
              {bannerContent.footnoteLink.label}
            </Link>
            .
          </p>
        </div>

        {/* Right column: custom inline SVG globe & dashed orbital arc */}
        <div className="flex w-full items-center justify-center lg:w-auto lg:pr-8">
          <svg
            viewBox="0 0 240 200"
            className="h-[175px] w-[210px] sm:h-[200px] sm:w-[240px]"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="esgGlobeGradient"
                x1="15%"
                y1="15%"
                x2="85%"
                y2="85%"
              >
                <stop offset="0%" stopColor="#14b882" />
                <stop offset="52%" stopColor="#1098ad" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>

            {/* Subtle ground shadow */}
            <ellipse
              cx="120"
              cy="176"
              rx="64"
              ry="9"
              fill="#1b0726"
              fillOpacity="0.45"
            />

            {/* Dashed lavender orbital arc */}
            <path
              d="M 48 64 Q 120 26 192 64"
              fill="none"
              stroke="#c084fc"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeDasharray="1 11"
            />

            {/* Orbit endpoint nodes */}
            <circle cx="46" cy="65" r="7.5" fill="#d8b4fe" />
            <circle cx="194" cy="65" r="7.5" fill="#d8b4fe" />

            {/* Globe circle */}
            <circle cx="120" cy="108" r="54" fill="url(#esgGlobeGradient)" />

            {/* White longitude & latitude lines */}
            <path
              d="M 120 54 C 95 76, 95 140, 120 162"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.85"
              strokeWidth="2.5"
            />
            <path
              d="M 120 54 C 145 76, 145 140, 120 162"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.85"
              strokeWidth="2.5"
            />
            <line
              x1="66"
              y1="108"
              x2="174"
              y2="108"
              stroke="#ffffff"
              strokeOpacity="0.85"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
