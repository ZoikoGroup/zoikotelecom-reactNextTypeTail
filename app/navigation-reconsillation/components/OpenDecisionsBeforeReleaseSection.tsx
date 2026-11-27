import Image from "next/image";

const sectionContent = {
  step: "08",
  eyebrow: "OWNERSHIP & SIGN-OFF",
  headingPrefix: "Open decisions ",
  headingAccent: "before release",
  description:
    "The product owner must resolve C01–C07 before the corresponding release.",
} as const;

type DecisionOwner =
  | "Product"
  | "Design"
  | "Finance"
  | "Legal"
  | "Operations"
  | "Engineering"
  | "QA";

const ownerMeta: Record<DecisionOwner, { code: string; badgeClass: string }> = {
  Product: {
    code: "P",
    badgeClass: "bg-[#6d28d9] text-white",
  },
  Design: {
    code: "D",
    badgeClass: "bg-[#d97706] text-white",
  },
  Finance: {
    code: "F",
    badgeClass: "bg-[#7e22ce] text-white",
  },
  Legal: {
    code: "L",
    badgeClass: "bg-[#be123c] text-white",
  },
  Operations: {
    code: "O",
    badgeClass: "bg-[#059669] text-white",
  },
  Engineering: {
    code: "E",
    badgeClass: "bg-[#db2777] text-white",
  },
  QA: {
    code: "Q",
    badgeClass: "bg-[#0284c7] text-white",
  },
};

interface DecisionCardItem {
  code: string;
  codeClass: string;
  topBorderClass: string;
  title: string;
  description: string;
  owners: readonly DecisionOwner[];
  status: "Open";
}

const decisionCards: readonly DecisionCardItem[] = [
  {
    code: "C01",
    codeClass: "text-[#7c3aed]",
    topBorderClass: "border-t-[3px] border-t-[#8b5cf6]",
    title: "Source precedence",
    description: "Original Support screenshot and signed 02/03/04 resolution",
    owners: ["Product"],
    status: "Open",
  },
  {
    code: "C02",
    codeClass: "text-[#d97706]",
    topBorderClass: "border-t-[3px] border-t-[#f59e0b]",
    title: "Approval ledger",
    description:
      "Recover individual Business, IoT, Devices and Support 06 approvals",
    owners: ["Design"],
    status: "Open",
  },
  {
    code: "C03",
    codeClass: "text-[#a21caf]",
    topBorderClass: "border-t-[3px] border-t-[#c026d3]",
    title: "Investor publication",
    description:
      "Exact Telecom entity, approved public content and dedicated route",
    owners: ["Finance", "Legal"],
    status: "Open",
  },
  {
    code: "C04",
    codeClass: "text-[#059669]",
    topBorderClass: "border-t-[3px] border-t-[#10b981]",
    title: "Contact & booking",
    description: "Channel, location, hours and workflow evidence",
    owners: ["Operations"],
    status: "Open",
  },
  {
    code: "C05",
    codeClass: "text-[#db2777]",
    topBorderClass: "border-t-[3px] border-t-[#ec4899]",
    title: "Route and feature gates",
    description: "Test reports for the R/G register; signed crosswalk",
    owners: ["Engineering", "QA"],
    status: "Open",
  },
  {
    code: "C06",
    codeClass: "text-[#0284c7]",
    topBorderClass: "border-t-[3px] border-t-[#06b6d4]",
    title: "Accessibility & rollback",
    description:
      "Manual assistive-tech results; regression and rollback evidence",
    owners: ["QA"],
    status: "Open",
  },
  {
    code: "C07",
    codeClass: "text-[#7c3aed]",
    topBorderClass: "border-t-[3px] border-t-[#a855f7]",
    title: "Footer scope",
    description:
      "Separate approved Telecom-specific footer source and item sequence",
    owners: ["Product"],
    status: "Open",
  },
] as const;

const summaryCard = {
  countLabel: "7 open · 0 resolved",
  note: "No decision is recorded as closed in this document.",
} as const;

const approvalBoundary = {
  image: "/Images/nav/12.png",
  alt: "Hand holding a fountain pen signing a printed control document on a desk",
  eyebrow: "APPROVAL BOUNDARY",
  heading: "Approves the approach — not publication",
  description:
    "Approval authorises this reconciliation approach only — not automatic publication, changes to locked individual documents, or an invented next submenu. A standalone footer specification may begin only after the actual footer architecture is identified and scope is authorised.",
  slots: [
    { label: "Design approval", state: "Not signed" },
    { label: "Product / release owner", state: "Not signed" },
  ] as const,
} as const;

export default function OpenDecisionsBeforeReleaseSection() {
  return (
    <section
      id="open-decisions"
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
            <span className="font-semibold italic text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>

          <p className="mt-2 text-[13.5px] leading-[1.6] text-[#4b5563] sm:text-sm">
            {sectionContent.description}
          </p>
        </div>

        {/* 2x4 grid: C01 - C07 + Dark summary card */}
        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {decisionCards.map((card) => (
            <article
              key={card.code}
              className={`flex flex-col justify-between rounded-2xl border border-[#eaecf4] bg-white p-5 shadow-[0_6px_20px_rgba(15,23,42,0.035)] ${card.topBorderClass}`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`font-mono text-[10.5px] font-extrabold tracking-[0.06em] ${card.codeClass}`}
                  >
                    {card.code}
                  </span>

                  <span className="inline-flex items-center gap-1 rounded-full bg-[#fef3c7] px-2 py-0.5 text-[9.5px] font-bold text-[#b45309]">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]"
                      aria-hidden="true"
                    />
                    <span>{card.status}</span>
                  </span>
                </div>

                <h3 className="mt-2 text-[14.5px] font-bold leading-snug text-[#0c1438]">
                  {card.title}
                </h3>

                <p className="mt-1.5 text-[11.5px] leading-[1.5] text-[#4b5563]">
                  {card.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-1.5">
                {card.owners.map((owner) => {
                  const meta = ownerMeta[owner];

                  return (
                    <span
                      key={owner}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#e6e9f2] bg-[#f8f9fd] py-0.5 pl-1 pr-2.5 text-[10px] font-semibold text-[#1e293b]"
                    >
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded-full text-[8.5px] font-extrabold ${meta.badgeClass}`}
                      >
                        {meta.code}
                      </span>
                      <span>{owner}</span>
                    </span>
                  );
                })}
              </div>
            </article>
          ))}

          {/* 8th card: Dark summary card */}
          <article className="flex flex-col items-center justify-center rounded-2xl bg-[#070c2e] bg-[radial-gradient(ellipse_85%_75%_at_50%_15%,rgba(124,58,237,0.35)_0%,transparent_72%)] p-6 text-center text-white shadow-[0_12px_28px_rgba(7,12,46,0.2)]">
            <svg
              className="h-11 w-11"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="22"
                cy="18"
                r="10"
                fill="#fb7185"
                fillOpacity="0.22"
              />
              <path
                d="M22 8C17.03 8 13 12.03 13 17C13 20.36 14.84 23.29 17.57 24.83C18.18 25.17 18.5 25.81 18.5 26.51V27.5H25.5V26.51C25.5 25.81 25.82 25.17 26.43 24.83C29.16 23.29 31 20.36 31 17C31 12.03 26.97 8 22 8Z"
                fill="#fb923c"
              />
              <path
                d="M19 17.5L21.2 19.7L25.5 15.3"
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="18.5"
                y="29.5"
                width="7"
                height="2.2"
                rx="1.1"
                fill="#cbd5e1"
              />
              <rect
                x="19.5"
                y="33"
                width="5"
                height="2"
                rx="1"
                fill="#94a3b8"
              />
            </svg>

            <h3 className="mt-3 text-[15px] font-extrabold tracking-[-0.01em] text-white">
              {summaryCard.countLabel}
            </h3>

            <p className="mt-1.5 max-w-[190px] text-[11px] leading-[1.5] text-white/70">
              {summaryCard.note}
            </p>
          </article>
        </div>

        {/* Bottom approval boundary banner */}
        <article className="mt-6 flex flex-col overflow-hidden rounded-3xl bg-[#060c2c] text-white shadow-[0_16px_40px_rgba(6,12,44,0.22)] lg:flex-row">
          {/* Left signing photo panel */}
          <div className="relative h-52 w-full shrink-0 overflow-hidden bg-[#1e293b] lg:h-auto lg:w-[270px]">
            <Image
              src={approvalBoundary.image}
              alt={approvalBoundary.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 270px"
              className="object-cover object-center"
            />
          </div>

          {/* Right approval copy & signature slots */}
          <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
            <div>
              <p className="text-[9.5px] font-extrabold uppercase tracking-[0.18em] text-[#f472b6]">
                {approvalBoundary.eyebrow}
              </p>

              <h3 className="mt-1.5 text-[20px] font-extrabold leading-snug tracking-[-0.015em] text-white">
                {approvalBoundary.heading}
              </h3>

              <p className="mt-2 text-[12px] leading-[1.58] text-white/75">
                {approvalBoundary.description}
              </p>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {approvalBoundary.slots.map((slot) => (
                <div
                  key={slot.label}
                  className="flex flex-col justify-between rounded-xl border border-dashed border-white/20 bg-white/[0.03] px-4 py-3.5"
                >
                  <p className="text-[11px] font-semibold text-white/85">
                    {slot.label}
                  </p>

                  <div className="mt-6 border-b border-white/25" />

                  <p className="mt-2 text-[10px] font-semibold text-[#fbbf24]">
                    {slot.state}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
