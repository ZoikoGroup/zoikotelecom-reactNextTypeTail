import Image from "next/image";
import {
  AlertCircle,
  Flag,
  Globe,
  HelpCircle,
  Lightbulb,
  Quote,
  Users,
} from "lucide-react";

const sectionContent = {
  step: "01",
  eyebrow: "EXECUTIVE DECISION",
  headingPrefix: "Freeze, then ",
  headingAccent: "reconcile",
  description:
    "A design approval never establishes a functioning destination or authorisation to release it.",
} as const;

const decisionCard = {
  image: "/Images/nav/2.png",
  alt: "Hand connecting pinned UI flow cards with string on a planning board",
  eyebrow: "THE DECISION",
  statement:
    "Freeze the approved individual design artifacts. Reconcile the requested v5-style submenu sequence with the v6 navigation and verified-destination register before publishing links.",
} as const;

const decisionRows = [
  {
    title: "About Zoiko",
    badge: "Approved",
    badgeClass: "bg-[#dcfce7] text-[#15803d]",
    dotClass: "bg-[#22c55e]",
    accentBarClass: "bg-[#10b981]",
    iconBgClass: "bg-[#ecfdf5] text-[#059669]",
    icon: Users,
    description:
      "7/7 design approvals recorded; 07 Investors approved 17 Nov 2026.",
  },
  {
    title: "Support discrepancy",
    badge: "Open",
    badgeClass: "bg-[#fef3c7] text-[#b45309]",
    dotClass: "bg-[#f59e0b]",
    accentBarClass: "bg-[#f59e0b]",
    iconBgClass: "bg-[#fffbeb] text-[#d97706]",
    icon: HelpCircle,
    description:
      "Positions 02–03 need original labels recovered; position 04 keeps the approved Troubleshoot a Service intent.",
  },
  {
    title: "v6 navigation",
    badge: "Retain",
    badgeClass: "bg-[#dcfce7] text-[#15803d]",
    dotClass: "bg-[#22c55e]",
    accentBarClass: "bg-[#2563eb]",
    iconBgClass: "bg-[#eef2ff] text-[#4f46e5]",
    icon: Globe,
    description:
      "Keep eight menu triggers and release gates; don’t overwrite the locked homepage hero.",
  },
  {
    title: "Footer",
    badge: "Awaiting scope",
    badgeClass: "bg-[#e2e8f0] text-[#475569]",
    dotClass: "bg-[#64748b]",
    accentBarClass: "bg-[#7c3aed]",
    iconBgClass: "bg-[#f5f3ff] text-[#7c3aed]",
    icon: Lightbulb,
    description:
      "No new footer architecture authorised by this document; await source and scope.",
  },
  {
    title: "Release",
    badge: "Not certified",
    badgeClass: "bg-[#fee2e2] text-[#be123c]",
    dotClass: "bg-[#e11d48]",
    accentBarClass: "bg-[#e11d48]",
    iconBgClass: "bg-[#fff1f2] text-[#e11d48]",
    icon: Flag,
    description:
      "Route, evidence, security, accessibility and operational gates remain open.",
  },
] as const;

export default function FreezeReconcileSection() {
  return (
    <section
      id="executive-decision"
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

          <p className="mt-2 text-[13.5px] leading-[1.6] text-[#4b5563] sm:text-sm">
            {sectionContent.description}
          </p>
        </div>

        {/* Two-column layout: Left quote photo card + Right decision rows */}
        <div className="mt-8 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {/* Left card: Image overlay with decision statement */}
          <article className="relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-3xl bg-[#070d2e] p-6 text-white shadow-[0_14px_34px_rgba(7,13,46,0.16)] sm:p-7 lg:col-span-5">
            <Image
              src={decisionCard.image}
              alt={decisionCard.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />

            {/* Dark navy + magenta gradient scrim for legibility */}
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,18,54,0.35)_0%,rgba(10,16,48,0.68)_52%,rgba(6,11,38,0.94)_100%)]"
              aria-hidden="true"
            />

            {/* Top-left magenta quote badge */}
            <div className="relative z-10">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#e11d74] text-white shadow-[0_8px_20px_rgba(225,29,116,0.45)]">
                <Quote className="h-4 w-4 fill-current" aria-hidden="true" />
              </span>
            </div>

            {/* Bottom decision copy */}
            <div className="relative z-10 mt-16">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f472b6]">
                {decisionCard.eyebrow}
              </p>

              <p className="mt-2.5 text-[18px] font-extrabold leading-[1.32] tracking-[-0.015em] text-white sm:text-[19px]">
                {decisionCard.statement}
              </p>
            </div>
          </article>

          {/* Right column: 5 status rows */}
          <div className="flex flex-col justify-between gap-3 lg:col-span-7">
            {decisionRows.map((row) => {
              const Icon = row.icon;

              return (
                <div
                  key={row.title}
                  className="relative flex items-start gap-4 overflow-hidden rounded-2xl border border-[#eaecf4] bg-white px-5 py-3.5 shadow-[0_4px_16px_rgba(15,23,42,0.03)]"
                >
                  {/* Left vertical accent bar */}
                  <span
                    className={`absolute bottom-0 left-0 top-0 w-1 ${row.accentBarClass}`}
                    aria-hidden="true"
                  />

                  <span
                    className={`relative mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${row.iconBgClass}`}
                  >
                    <Icon className="h-5 w-5 stroke-[1.9]" aria-hidden="true" />
                    {row.title === "Release" && (
                      <AlertCircle
                        className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-white text-[#f59e0b]"
                        aria-hidden="true"
                      />
                    )}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-[14.5px] font-bold leading-snug text-[#0c1438]">
                        {row.title}
                      </h3>

                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${row.badgeClass}`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${row.dotClass}`}
                          aria-hidden="true"
                        />
                        <span>{row.badge}</span>
                      </span>
                    </div>

                    <p className="mt-1 text-[12px] leading-[1.5] text-[#4b5563]">
                      {row.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
