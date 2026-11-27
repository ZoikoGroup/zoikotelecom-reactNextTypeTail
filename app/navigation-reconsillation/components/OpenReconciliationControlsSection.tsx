"use client";

import { useState } from "react";

const sectionContent = {
  step: "03",
  eyebrow: "DISCREPANCY REGISTER",
  headingPrefix: "Open ",
  headingAccent: "reconciliation controls",
  description:
    "Not defects in the approved files. No automatic rename, deletion or addition is authorised.",
} as const;

type OwnerName =
  | "Product"
  | "Support"
  | "Operations"
  | "Finance"
  | "Legal"
  | "Engineering"
  | "Design";

type FilterOption = "All owners" | OwnerName;

const filterOptions: readonly FilterOption[] = [
  "All owners",
  "Product",
  "Support",
  "Operations",
  "Finance",
  "Legal",
  "Engineering",
  "Design",
] as const;

const ownerBadgeStyles: Record<OwnerName, { code: string; pillClass: string }> =
  {
    Product: {
      code: "P",
      pillClass: "bg-[#f3e8ff] text-[#6d28d9]",
    },
    Support: {
      code: "S",
      pillClass: "bg-[#e0f2fe] text-[#0284c7]",
    },
    Operations: {
      code: "O",
      pillClass: "bg-[#dcfce7] text-[#15803d]",
    },
    Finance: {
      code: "F",
      pillClass: "bg-[#fae8ff] text-[#a21caf]",
    },
    Legal: {
      code: "L",
      pillClass: "bg-[#ffe4e6] text-[#be123c]",
    },
    Engineering: {
      code: "E",
      pillClass: "bg-[#fce7f3] text-[#be185d]",
    },
    Design: {
      code: "D",
      pillClass: "bg-[#fef3c7] text-[#b45309]",
    },
  };

interface DiscrepancyItem {
  id: string;
  title: string;
  description: string;
  owners: readonly OwnerName[];
  status: "Open";
  codeBadgeClass: string;
  cornerTintClass: string;
}

const discrepancies: readonly DiscrepancyItem[] = [
  {
    id: "D01",
    title: "v5/v6 label drift",
    description:
      "Signed crosswalk of exact labels, order, link type and destination; preserve both source labels.",
    owners: ["Product"],
    status: "Open",
    codeBadgeClass: "bg-[#7c3aed] text-white",
    cornerTintClass: "bg-[#f3e8ff]",
  },
  {
    id: "D02",
    title: "Support 02",
    description:
      "Previously approved Billing & Payments; original v5 text unavailable. Recover screenshot and sign decision.",
    owners: ["Product"],
    status: "Open",
    codeBadgeClass: "bg-[#8b5cf6] text-white",
    cornerTintClass: "bg-[#f5f3ff]",
  },
  {
    id: "D03",
    title: "Support 03",
    description:
      "Previously approved Manage My Account; original v5 text unavailable. Recover screenshot and sign decision.",
    owners: ["Product"],
    status: "Open",
    codeBadgeClass: "bg-[#9333ea] text-white",
    cornerTintClass: "bg-[#faf5ff]",
  },
  {
    id: "D04",
    title: "Support 04",
    description:
      "Original Troubleshoot a Service differs from Service Status. Keep the approved troubleshooting design; status only as a distinct verified capability.",
    owners: ["Support"],
    status: "Open",
    codeBadgeClass: "bg-[#2563eb] text-white",
    cornerTintClass: "bg-[#eff6ff]",
  },
  {
    id: "D05",
    title: "Support booking",
    description:
      "Book a Call or Visit; verify supported channels, addresses, hours and booking backend before exposure.",
    owners: ["Operations"],
    status: "Open",
    codeBadgeClass: "bg-[#059669] text-white",
    cornerTintClass: "bg-[#ecfdf5]",
  },
  {
    id: "D06",
    title: "Investors route",
    description:
      "No dedicated Investor route in the v6 R00–R13 register. Hold public activation; Finance/Legal verify entity and disclosures.",
    owners: ["Finance", "Legal"],
    status: "Open",
    codeBadgeClass: "bg-[#c026d3] text-white",
    cornerTintClass: "bg-[#fdf4ff]",
  },
  {
    id: "D07",
    title: "About label mismatch",
    description:
      "v6 groups corporate links differently. No automatic inference that approved Careers/Investors are live.",
    owners: ["Product"],
    status: "Open",
    codeBadgeClass: "bg-[#7e22ce] text-white",
    cornerTintClass: "bg-[#f3e8ff]",
  },
  {
    id: "D08",
    title: "Account gate",
    description:
      "G04 account access remains hidden until the authenticated Telecom workflow passes.",
    owners: ["Engineering"],
    status: "Open",
    codeBadgeClass: "bg-[#db2777] text-white",
    cornerTintClass: "bg-[#fdf2f8]",
  },
  {
    id: "D09",
    title: "Complaints gate",
    description:
      "G11 requires an approved published process and route; never substitute a generic form as the complaints procedure.",
    owners: ["Legal", "Support"],
    status: "Open",
    codeBadgeClass: "bg-[#be123c] text-white",
    cornerTintClass: "bg-[#fff1f2]",
  },
  {
    id: "D10",
    title: "Evidence incomplete",
    description:
      "Recover the missing module-level approval ledger; report unknowns instead of claiming 8/8 closure.",
    owners: ["Design"],
    status: "Open",
    codeBadgeClass: "bg-[#d97706] text-white",
    cornerTintClass: "bg-[#fffbeb]",
  },
] as const;

export default function OpenReconciliationControlsSection() {
  const [selectedOwner, setSelectedOwner] =
    useState<FilterOption>("All owners");

  const filteredItems =
    selectedOwner === "All owners"
      ? discrepancies
      : discrepancies.filter((item) => item.owners.includes(selectedOwner));

  return (
    <section
      id="discrepancy-register"
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

        {/* Owner filter pills + count */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {filterOptions.map((option) => {
            const isActive = selectedOwner === option;

            return (
              <button
                key={option}
                type="button"
                onClick={() => setSelectedOwner(option)}
                aria-pressed={isActive}
                className={`inline-flex h-8 items-center justify-center rounded-full px-3.5 text-[11.5px] font-bold transition ${
                  isActive
                    ? "bg-[#090d2c] text-white shadow-[0_4px_12px_rgba(9,13,44,0.18)]"
                    : "border border-[#e4e7f2] bg-[#f8f9fd] text-[#475569] hover:border-[#cfd5e6] hover:bg-white hover:text-[#0c1438]"
                }`}
              >
                {option}
              </button>
            );
          })}

          <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-[#eef0f8] px-3 text-[11px] font-semibold text-[#475569]">
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#64748b]"
              aria-hidden="true"
            />
            <span>{filteredItems.length} shown</span>
          </span>
        </div>

        {/* 2-column discrepancy cards grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="relative flex items-start gap-4 overflow-hidden rounded-2xl border border-[#eaecf4] bg-white p-5 shadow-[0_6px_20px_rgba(15,23,42,0.035)]"
            >
              {/* Subtle top-right decorative quarter circle */}
              <span
                className={`pointer-events-none absolute -right-7 -top-7 h-16 w-16 rounded-full ${item.cornerTintClass}`}
                aria-hidden="true"
              />

              {/* Left ID square badge */}
              <span
                className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[12px] font-extrabold tracking-tight shadow-sm ${item.codeBadgeClass}`}
              >
                {item.id}
              </span>

              {/* Main card content */}
              <div className="relative z-10 min-w-0 flex-1">
                <h3 className="text-[14.5px] font-bold leading-snug text-[#0c1438]">
                  {item.title}
                </h3>

                <p className="mt-1 text-[12px] leading-[1.52] text-[#4b5563]">
                  {item.description}
                </p>

                <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {item.owners.map((owner) => {
                      const style = ownerBadgeStyles[owner];

                      return (
                        <span
                          key={owner}
                          className="inline-flex items-center gap-1.5 rounded-full border border-[#e6e9f2] bg-[#f8f9fd] py-0.5 pl-1 pr-2.5 text-[10.5px] font-semibold text-[#1e293b]"
                        >
                          <span
                            className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-extrabold ${style.pillClass}`}
                          >
                            {style.code}
                          </span>
                          <span>{owner}</span>
                        </span>
                      );
                    })}
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fef3c7] px-2.5 py-0.5 text-[10px] font-bold text-[#b45309]">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]"
                      aria-hidden="true"
                    />
                    <span>{item.status}</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
