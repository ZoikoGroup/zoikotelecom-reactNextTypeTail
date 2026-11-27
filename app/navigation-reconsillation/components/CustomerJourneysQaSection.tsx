"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  Check,
  Clock,
  Flag,
  Headphones,
  Keyboard,
  PoundSterling,
  Receipt,
  RotateCcw,
  User,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const sectionContent = {
  step: "07",
  eyebrow: "JOURNEYS & ACCEPTANCE",
  headingPrefix: "Customer journeys ",
  headingAccent: "& QA",
} as const;

const journeysHeroCard = {
  image: "/Images/nav/11.png",
  alt: "Point-of-sale terminal and card reader on a counter during customer journey testing",
  title: "Ten journeys to prove",
  description:
    "Each must pass before the matching links are released — from Support entry to rollback.",
} as const;

interface JourneyItem {
  code: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconBoxClass: string;
  codeClass: string;
}

const journeys: readonly JourneyItem[] = [
  {
    code: "J01",
    title: "Support entry",
    description:
      "Customer opens Support on desktop or mobile; only eligible task links appear in a stable order.",
    icon: Headphones,
    iconBoxClass: "bg-[#eef2ff] text-[#4f46e5]",
    codeClass: "text-[#4f46e5]",
  },
  {
    code: "J02",
    title: "Billing intent",
    description:
      "Billing link uses the approved relevant journey; no redirect to an unrelated brand.",
    icon: Receipt,
    iconBoxClass: "bg-[#f3e8ff] text-[#7c3aed]",
    codeClass: "text-[#7c3aed]",
  },
  {
    code: "J03",
    title: "Account intent",
    description:
      "G04 closed: account action absent. G04 open: signed Telecom entry works.",
    icon: User,
    iconBoxClass: "bg-[#fdf2f8] text-[#db2777]",
    codeClass: "text-[#db2777]",
  },
  {
    code: "J04",
    title: "Troubleshooting",
    description:
      "Customer reaches task guidance, not a fabricated outage result; verified fallback to support.",
    icon: Wrench,
    iconBoxClass: "bg-[#ecfdf5] text-[#059669]",
    codeClass: "text-[#059669]",
  },
  {
    code: "J05",
    title: "Report a Problem",
    description:
      "Route verified for fault-related intent; no promise of ticket creation without a backend.",
    icon: Flag,
    iconBoxClass: "bg-[#fffbeb] text-[#d97706]",
    codeClass: "text-[#d97706]",
  },
  {
    code: "J06",
    title: "Book a Call or Visit",
    description:
      "Shown only if an actual booking service is confirmed; no invented appointment.",
    icon: Calendar,
    iconBoxClass: "bg-[#eff6ff] text-[#2563eb]",
    codeClass: "text-[#2563eb]",
  },
  {
    code: "J07",
    title: "Investor discovery",
    description:
      "Investor link suppressed until new mapping and disclosure approval.",
    icon: PoundSterling,
    iconBoxClass: "bg-[#f3e8ff] text-[#6d28d9]",
    codeClass: "text-[#6d28d9]",
  },
  {
    code: "J08",
    title: "Keyboard navigation",
    description:
      "Tab, Enter/Space and Escape work; focus never lost after escape or route fallback.",
    icon: Keyboard,
    iconBoxClass: "bg-[#fdf2f8] text-[#e11d74]",
    codeClass: "text-[#e11d74]",
  },
  {
    code: "J09",
    title: "Stale evidence",
    description:
      "Expired or withdrawn link removed from all configured surfaces.",
    icon: Clock,
    iconBoxClass: "bg-[#ecfdf5] text-[#10b981]",
    codeClass: "text-[#059669]",
  },
  {
    code: "J10",
    title: "Release rollback",
    description:
      "Failed smoke test restores the previous eligible snapshot, not a defective route.",
    icon: RotateCcw,
    iconBoxClass: "bg-[#fffbeb] text-[#d97706]",
    codeClass: "text-[#d97706]",
  },
] as const;

type QaTabKey = "atomic" | "release";

interface QaCheckItem {
  code: string;
  text: string;
}

const atomicQaItems: readonly QaCheckItem[] = [
  {
    code: "Q01",
    text: "At ≤1440px, eight approved top-level labels fit with no clipping.",
  },
  {
    code: "Q02",
    text: "At 320px and 400% zoom, the drawer reflows with no horizontal loss of content.",
  },
  {
    code: "Q03",
    text: "Only one mega menu opens; the locked hero stays geometrically unchanged.",
  },
  {
    code: "Q04",
    text: "Header, mobile and footer use identical eligible route IDs where shared.",
  },
  {
    code: "Q05",
    text: "Every visible link resolves to the intended page; redirect destination and meaning checked.",
  },
  {
    code: "Q06",
    text: "Every G-coded unready feature is absent from all configured discovery surfaces.",
  },
  {
    code: "Q07",
    text: "Tab order, visible focus, Escape and focus restoration pass a manual keyboard test.",
  },
  {
    code: "Q08",
    text: "Screen readers announce label, state and hierarchy without duplicate controls.",
  },
  {
    code: "Q09",
    text: "Contrast, target size and reduced motion pass relevant WCAG 2.2 AA checks.",
  },
  {
    code: "Q10",
    text: "Expired verification forces HOLD; the published snapshot rejects a stale editor revision.",
  },
] as const;

const releaseQaItems: readonly QaCheckItem[] = [
  {
    code: "Q11",
    text: "Every published link has a valid proof_id, test environment record and non-expired timestamp.",
  },
  {
    code: "Q12",
    text: "All applicable G01–G12 capability, operational and legal gates pass prior to release.",
  },
  {
    code: "Q13",
    text: "Separation of duties holds: distinct editor, domain approver and release operator signatures.",
  },
  {
    code: "Q14",
    text: "Canonical route codes R00–R13 and HTTPS allowlist rules pass with no unapproved redirect chain.",
  },
  {
    code: "Q15",
    text: "Suppressed or HOLD items are excluded from header, mobile drawer, footer, search, sitemap and deep links.",
  },
  {
    code: "Q16",
    text: "Journeys J01–J07 pass end-to-end with verified fallback behaviour and zero fabricated destinations.",
  },
  {
    code: "Q17",
    text: "Keyboard and rollback drills J08–J10 succeed, restoring a known-good snapshot on failure.",
  },
  {
    code: "Q18",
    text: "Append-only audit log and rollback_ref are recorded before snapshot publication.",
  },
] as const;

const qaStatusBadge = "Proposed — not executed";

export default function CustomerJourneysQaSection() {
  const [activeTab, setActiveTab] = useState<QaTabKey>("atomic");
  const [checkedCodes, setCheckedCodes] = useState<Record<string, boolean>>({});

  const activeChecks = activeTab === "atomic" ? atomicQaItems : releaseQaItems;

  const toggleCheck = (code: string) => {
    setCheckedCodes((prev) => ({
      ...prev,
      [code]: !prev[code],
    }));
  };

  return (
    <section
      id="journeys-and-qa"
      className="w-full bg-[#f5f6fb] px-4 py-14 sm:px-8 lg:px-12"
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
        </div>

        {/* Top grid: Left dark feature card + Right 10 journey cards (J01 - J10) */}
        <div className="mt-7 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12">
          {/* Left card */}
          <article className="flex flex-col overflow-hidden rounded-3xl bg-[#060c2c] text-white shadow-[0_14px_34px_rgba(6,12,44,0.18)] lg:col-span-4">
            <div className="relative h-[220px] w-full overflow-hidden bg-[#1e293b] sm:h-[245px] lg:flex-1">
              <Image
                src={journeysHeroCard.image}
                alt={journeysHeroCard.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>

            <div className="p-6 sm:p-7">
              <h3 className="text-[20px] font-extrabold leading-snug tracking-[-0.015em] text-white">
                {journeysHeroCard.title}
              </h3>

              <p className="mt-2.5 text-[12.5px] leading-[1.6] text-white/75">
                {journeysHeroCard.description}
              </p>
            </div>
          </article>

          {/* Right 2x5 journeys grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
            {journeys.map((journey) => {
              const Icon = journey.icon;

              return (
                <article
                  key={journey.code}
                  className="flex items-start gap-3.5 rounded-2xl border border-[#eaecf4] bg-white p-4 shadow-[0_4px_16px_rgba(15,23,42,0.03)]"
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${journey.iconBoxClass}`}
                  >
                    <Icon className="h-4 w-4 stroke-[2]" aria-hidden="true" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-[9.5px] font-extrabold uppercase tracking-[0.14em] ${journey.codeClass}`}
                    >
                      {journey.code}
                    </p>

                    <h3 className="mt-0.5 text-[13.5px] font-bold leading-snug text-[#0c1438]">
                      {journey.title}
                    </h3>

                    <p className="mt-1 text-[11px] leading-[1.48] text-[#4b5563]">
                      {journey.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom QA section: Tabs + status pill + 2-column checklist */}
        <div className="mt-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div
              role="tablist"
              aria-label="Quality assurance suites"
              className="flex flex-wrap items-center gap-2"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "atomic"}
                onClick={() => setActiveTab("atomic")}
                className={`inline-flex h-9 items-center justify-center rounded-lg px-4 text-[11.5px] font-bold transition ${
                  activeTab === "atomic"
                    ? "bg-[#7c3aed] text-white shadow-[0_6px_16px_rgba(124,58,237,0.3)]"
                    : "border border-[#e4e7f2] bg-white text-[#475569] hover:border-[#cfd5e6] hover:text-[#0c1438]"
                }`}
              >
                Atomic QA · Q01–Q10
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "release"}
                onClick={() => setActiveTab("release")}
                className={`inline-flex h-9 items-center justify-center rounded-lg px-4 text-[11.5px] font-bold transition ${
                  activeTab === "release"
                    ? "bg-[#7c3aed] text-white shadow-[0_6px_16px_rgba(124,58,237,0.3)]"
                    : "border border-[#e4e7f2] bg-white text-[#475569] hover:border-[#cfd5e6] hover:text-[#0c1438]"
                }`}
              >
                Release QA · Q11–Q18
              </button>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f5d08a] bg-[#fff7e6] px-3.5 py-1 text-[10.5px] font-bold text-[#92400e]">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]"
                aria-hidden="true"
              />
              <span>{qaStatusBadge}</span>
            </span>
          </div>

          <div
            role="tabpanel"
            className="mt-4 grid grid-cols-1 gap-3.5 md:grid-cols-2"
          >
            {activeChecks.map((item) => {
              const isChecked = Boolean(checkedCodes[item.code]);

              return (
                <button
                  key={item.code}
                  type="button"
                  role="checkbox"
                  aria-checked={isChecked}
                  onClick={() => toggleCheck(item.code)}
                  className="flex w-full items-center gap-3 rounded-xl border border-[#eaecf4] bg-white px-4 py-3.5 text-left shadow-[0_2px_10px_rgba(15,23,42,0.025)] transition hover:border-[#d8dff0]"
                >
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition ${
                      isChecked
                        ? "border-[#7c3aed] bg-[#7c3aed] text-white"
                        : "border-[#cbd5e1] bg-white text-transparent"
                    }`}
                    aria-hidden="true"
                  >
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>

                  <span className="inline-flex shrink-0 items-center rounded-md bg-[#f3e8ff] px-2 py-0.5 font-mono text-[10px] font-extrabold text-[#7c3aed]">
                    {item.code}
                  </span>

                  <span className="text-[11.5px] font-medium leading-[1.48] text-[#1e293b]">
                    {item.text}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
