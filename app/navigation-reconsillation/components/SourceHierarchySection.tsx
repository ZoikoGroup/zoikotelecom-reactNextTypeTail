import Image from "next/image";

const sectionContent = {
  step: "02",
  eyebrow: "SOURCE HIERARCHY & COVERAGE",
  headingPrefix: "Evidence, ",
  headingAccent: "not assumption",
  description:
    "v6 is evidence of deployed-intent architecture, not proof of current public operation. This document reconciles rather than silently choosing one.",
} as const;

const sourceCards = [
  {
    code: "S01",
    title: "v6 navigation",
    description:
      "Illustrated Top Navigation and Dropdowns Wireframe v6, 10 Nov 2026 — eight tabs, Support/About groupings, R/G codes, conditional release.",
    image: "/Images/nav/3.png",
    alt: "Hand sketching interface wireframes and flow diagrams on paper",
  },
  {
    code: "S02",
    title: "Project decisions",
    description:
      "Approval history to 17 Nov 2026. About 07 Investors closed after the latest explicit approval; earlier deliverables unchanged.",
    image: "/Images/nav/4.png",
    alt: "Team collaborating around sticky notes and laptops in a bright workspace",
  },
  {
    code: "S03",
    title: "v5 screenshot",
    description:
      "Original Support 04 label recovered. Actual 02/03 label text and original image unavailable — do not infer.",
    image: "/Images/nav/5.png",
    alt: "Smartphone screen displaying application icons on a light desk",
  },
  {
    code: "S04",
    title: "Benchmark",
    description:
      "Sema Admin Console Designer Wireframe Spec v2 Final and its assessment; source files not re-inspected for this pack.",
    image: "/Images/nav/6.png",
    alt: "Dark analytics monitor showing performance charts and telemetry graphs",
  },
] as const;

type CoverageIconKey =
  | "mobile"
  | "broadband"
  | "landlines"
  | "business"
  | "iot"
  | "devices"
  | "support"
  | "about";

const coverageCards: ReadonlyArray<{
  key: CoverageIconKey;
  title: string;
  badge: string;
  badgeClass: string;
  dotClass: string;
  tintClass: string;
  summary: string;
}> = [
  {
    key: "mobile",
    title: "Mobile",
    badge: "Approved",
    badgeClass: "bg-[#dcfce7] text-[#15803d]",
    dotClass: "bg-[#22c55e]",
    tintClass: "from-[#f5f3ff] via-white to-white",
    summary: "7/7 approved in prior record.",
  },
  {
    key: "broadband",
    title: "Broadband & Fibre",
    badge: "Approved",
    badgeClass: "bg-[#dcfce7] text-[#15803d]",
    dotClass: "bg-[#22c55e]",
    tintClass: "from-[#f3f6ff] via-white to-white",
    summary: "7/7 approved in prior record.",
  },
  {
    key: "landlines",
    title: "Landlines & Voice",
    badge: "Approved",
    badgeClass: "bg-[#dcfce7] text-[#15803d]",
    dotClass: "bg-[#22c55e]",
    tintClass: "from-[#fdf2f8] via-white to-white",
    summary: "6/6 approved in prior record.",
  },
  {
    key: "business",
    title: "Business",
    badge: "Ledger to recover",
    badgeClass: "bg-[#fef3c7] text-[#b45309]",
    dotClass: "bg-[#f59e0b]",
    tintClass: "from-[#fffbeb] via-white to-white",
    summary: "Earlier approvals recorded; complete ledger to recover.",
  },
  {
    key: "iot",
    title: "IoT & Connectivity",
    badge: "Not re-verified",
    badgeClass: "bg-[#e0f2fe] text-[#0369a1]",
    dotClass: "bg-[#0ea5e9]",
    tintClass: "from-[#f0f9ff] via-white to-white",
    summary: "Menu exists in v6; approval ledger not re-verified.",
  },
  {
    key: "devices",
    title: "Devices",
    badge: "Not re-verified",
    badgeClass: "bg-[#e0f2fe] text-[#0369a1]",
    dotClass: "bg-[#0ea5e9]",
    tintClass: "from-[#fffbeb] via-white to-white",
    summary: "Menu exists in v6; approval ledger not re-verified.",
  },
  {
    key: "support",
    title: "Support",
    badge: "Ledger to recover",
    badgeClass: "bg-[#fef3c7] text-[#b45309]",
    dotClass: "bg-[#f59e0b]",
    tintClass: "from-[#fffbeb] via-white to-white",
    summary:
      "01–05 approved; 06 delivery recorded — recover explicit 06 approval.",
  },
  {
    key: "about",
    title: "About Zoiko",
    badge: "Approved",
    badgeClass: "bg-[#dcfce7] text-[#15803d]",
    dotClass: "bg-[#22c55e]",
    tintClass: "from-[#fdf4ff] via-white to-white",
    summary: "7/7 approved; latest approval is Investors.",
  },
];

function CoverageIllustration({ type }: { type: CoverageIconKey }) {
  switch (type) {
    case "mobile":
      return (
        <svg
          className="h-11 w-14"
          viewBox="0 0 56 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="28" cy="40.5" rx="13" ry="2.2" fill="#e2e8f0" />
          <rect x="23" y="4" width="16" height="31" rx="3.2" fill="#1e1b4b" />
          <rect x="25" y="7" width="12" height="22" rx="1.5" fill="#6366f1" />
          <circle cx="31" cy="32" r="1.3" fill="#cbd5e1" />
          <rect x="17" y="18" width="13" height="17" rx="2.5" fill="#f59e0b" />
          <rect x="19.5" y="21.5" width="8" height="2" rx="1" fill="#fef3c7" />
          <rect x="19.5" y="25.5" width="6" height="2" rx="1" fill="#fef3c7" />
        </svg>
      );

    case "broadband":
      return (
        <svg
          className="h-11 w-14"
          viewBox="0 0 56 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="28" cy="40.5" rx="15" ry="2.2" fill="#e2e8f0" />
          <path
            d="M21 12.5C24.8 8.7 31.2 8.7 35 12.5"
            stroke="#f59e0b"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M23.8 15.3C26.1 13 29.9 13 32.2 15.3"
            stroke="#f59e0b"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line
            x1="16"
            y1="14"
            x2="16"
            y2="23"
            stroke="#4f46e5"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <line
            x1="40"
            y1="14"
            x2="40"
            y2="23"
            stroke="#4f46e5"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <rect x="11" y="22" width="34" height="12" rx="4" fill="#4f46e5" />
          <circle cx="17" cy="28" r="1.8" fill="#86efac" />
          <circle cx="22.5" cy="28" r="1.8" fill="#fde047" />
          <line
            x1="31"
            y1="26.5"
            x2="39"
            y2="26.5"
            stroke="#a5b4fc"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <line
            x1="31"
            y1="29.8"
            x2="39"
            y2="29.8"
            stroke="#a5b4fc"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case "landlines":
      return (
        <svg
          className="h-11 w-14"
          viewBox="0 0 56 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="28" cy="40.5" rx="14" ry="2.2" fill="#e2e8f0" />
          <path
            d="M17 13.5C23.5 10.2 32.5 10.2 39 13.5"
            stroke="#64748b"
            strokeWidth="3.6"
            strokeLinecap="round"
          />
          <rect x="17" y="17" width="22" height="17" rx="4" fill="#db2777" />
          <rect x="21" y="21" width="14" height="9" rx="1.8" fill="#fbcfe8" />
          <circle cx="24" cy="24" r="1.1" fill="#be185d" />
          <circle cx="28" cy="24" r="1.1" fill="#be185d" />
          <circle cx="32" cy="24" r="1.1" fill="#be185d" />
          <circle cx="24" cy="27.2" r="1.1" fill="#be185d" />
          <circle cx="28" cy="27.2" r="1.1" fill="#be185d" />
          <circle cx="32" cy="27.2" r="1.1" fill="#be185d" />
          <path
            d="M42.5 15.5C44.5 17.5 44.5 21 42.5 23"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "business":
      return (
        <svg
          className="h-11 w-14"
          viewBox="0 0 56 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="28" cy="40.5" rx="14" ry="2.2" fill="#e2e8f0" />
          <rect x="16" y="9" width="16" height="26" rx="2.5" fill="#1e3a8a" />
          <rect
            x="19.5"
            y="13"
            width="2.5"
            height="2.5"
            rx="0.6"
            fill="#93c5fd"
          />
          <rect
            x="24.5"
            y="13"
            width="2.5"
            height="2.5"
            rx="0.6"
            fill="#93c5fd"
          />
          <rect
            x="19.5"
            y="18"
            width="2.5"
            height="2.5"
            rx="0.6"
            fill="#93c5fd"
          />
          <rect
            x="24.5"
            y="18"
            width="2.5"
            height="2.5"
            rx="0.6"
            fill="#93c5fd"
          />
          <rect
            x="19.5"
            y="23"
            width="2.5"
            height="2.5"
            rx="0.6"
            fill="#93c5fd"
          />
          <rect
            x="24.5"
            y="23"
            width="2.5"
            height="2.5"
            rx="0.6"
            fill="#93c5fd"
          />
          <rect x="30" y="18" width="10" height="17" rx="2" fill="#f59e0b" />
          <rect
            x="32.5"
            y="21.5"
            width="2"
            height="2"
            rx="0.5"
            fill="#fef3c7"
          />
          <rect x="36" y="21.5" width="2" height="2" rx="0.5" fill="#fef3c7" />
          <rect x="32.5" y="26" width="2" height="2" rx="0.5" fill="#fef3c7" />
          <rect x="36" y="26" width="2" height="2" rx="0.5" fill="#fef3c7" />
        </svg>
      );

    case "iot":
      return (
        <svg
          className="h-11 w-14"
          viewBox="0 0 56 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="28" cy="40.5" rx="13" ry="2.2" fill="#e2e8f0" />
          <line
            x1="22"
            y1="8"
            x2="22"
            y2="13"
            stroke="#0d9488"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line
            x1="28"
            y1="8"
            x2="28"
            y2="13"
            stroke="#0d9488"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line
            x1="34"
            y1="8"
            x2="34"
            y2="13"
            stroke="#0d9488"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line
            x1="22"
            y1="29"
            x2="22"
            y2="34"
            stroke="#0d9488"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line
            x1="28"
            y1="29"
            x2="28"
            y2="34"
            stroke="#0d9488"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line
            x1="34"
            y1="29"
            x2="34"
            y2="34"
            stroke="#0d9488"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line
            x1="14"
            y1="17"
            x2="19"
            y2="17"
            stroke="#0d9488"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line
            x1="14"
            y1="25"
            x2="19"
            y2="25"
            stroke="#0d9488"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line
            x1="37"
            y1="17"
            x2="42"
            y2="17"
            stroke="#0d9488"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line
            x1="37"
            y1="25"
            x2="42"
            y2="25"
            stroke="#0d9488"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <rect x="19" y="13" width="18" height="16" rx="3.5" fill="#1e3a8a" />
          <rect
            x="23.5"
            y="17.5"
            width="9"
            height="7"
            rx="1.5"
            fill="#2dd4bf"
          />
        </svg>
      );

    case "devices":
      return (
        <svg
          className="h-11 w-14"
          viewBox="0 0 56 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="28" cy="40.5" rx="12" ry="2.2" fill="#e2e8f0" />
          <rect x="20" y="6" width="16" height="29" rx="3.2" fill="#1e1b4b" />
          <rect x="22" y="9" width="12" height="20" rx="1.5" fill="#db2777" />
          <rect x="25" y="14" width="6" height="8" rx="1.2" fill="#f59e0b" />
          <circle cx="28" cy="32" r="1.3" fill="#cbd5e1" />
          <circle cx="38" cy="11" r="4.5" fill="#fbbf24" />
          <path
            d="M36.2 11L37.5 12.4L40 9.8"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "support":
      return (
        <svg
          className="h-11 w-14"
          viewBox="0 0 56 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="28" cy="40.5" rx="14" ry="2.2" fill="#e2e8f0" />
          <rect x="14" y="10" width="21" height="15" rx="4" fill="#6366f1" />
          <path d="M19 25L16 29.5L23.5 25H19Z" fill="#6366f1" />
          <text
            x="24.5"
            y="21"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="10"
            fontWeight="800"
          >
            ?
          </text>
          <rect x="26" y="19" width="17" height="12" rx="3.5" fill="#f59e0b" />
          <circle cx="31.5" cy="25" r="1.2" fill="#ffffff" />
          <circle cx="34.5" cy="25" r="1.2" fill="#ffffff" />
          <circle cx="37.5" cy="25" r="1.2" fill="#ffffff" />
        </svg>
      );

    case "about":
      return (
        <svg
          className="h-11 w-14"
          viewBox="0 0 56 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="28" cy="40.5" rx="14" ry="2.2" fill="#e2e8f0" />
          <circle cx="23" cy="17" r="5" fill="#c026d3" />
          <path
            d="M14 32C14 27.2 18 24 23 24C28 24 32 27.2 32 32V34H14V32Z"
            fill="#c026d3"
          />
          <circle cx="34.5" cy="19" r="4" fill="#f59e0b" />
          <path
            d="M28 34V32.5C28 28.8 30.9 26.2 34.5 26.2C38.1 26.2 41 28.8 41 32.5V34H28Z"
            fill="#f59e0b"
          />
        </svg>
      );
  }
}

export default function SourceHierarchySection() {
  return (
    <section
      id="source-hierarchy"
      className="w-full bg-[#f5f6fb] px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Centered section header */}
        <div className="mx-auto max-w-[660px] text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="italic text-[#e093b9]">{sectionContent.step}</span>
            <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold tracking-[-0.025em] text-[#0c1438] sm:text-[36px]">
            {sectionContent.headingPrefix}
            <span className="font-semibold italic text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>

          <p className="mt-2 text-[13.5px] leading-[1.6] text-[#4b5563] sm:text-sm">
            {sectionContent.description}
          </p>
        </div>

        {/* First row: 4 source cards (S01 - S04) */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sourceCards.map((card) => (
            <article
              key={card.code}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#eaecf4] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
            >
              <div className="relative h-[126px] w-full overflow-hidden bg-[#eef0f6]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="relative flex flex-1 flex-col px-5 pb-5 pt-4">
                <span className="-mt-7 mb-2.5 inline-flex w-fit items-center rounded-md bg-[#b81d78] px-2.5 py-0.5 text-[9.5px] font-extrabold uppercase tracking-[0.12em] text-white shadow-sm">
                  {card.code}
                </span>

                <h3 className="text-[14.5px] font-bold leading-snug text-[#0c1438]">
                  {card.title}
                </h3>

                <p className="mt-1.5 text-[11.5px] leading-[1.52] text-[#4b5563]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Second & third rows: 8 coverage status cards with custom SVGs */}
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coverageCards.map((item) => (
            <article
              key={item.title}
              className={`flex flex-col items-center rounded-2xl border border-[#eaecf4] bg-gradient-to-b ${item.tintClass} px-5 py-6 text-center shadow-[0_6px_20px_rgba(15,23,42,0.03)]`}
            >
              <CoverageIllustration type={item.key} />

              <h3 className="mt-3 text-[14.5px] font-bold leading-snug text-[#0c1438]">
                {item.title}
              </h3>

              <span
                className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${item.badgeClass}`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${item.dotClass}`}
                  aria-hidden="true"
                />
                <span>{item.badge}</span>
              </span>

              <p className="mt-2.5 text-[11.5px] leading-[1.5] text-[#64748b]">
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
