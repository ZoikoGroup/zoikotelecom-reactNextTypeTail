"use client";

import React, { useState } from "react";
import { Check, ChevronRight } from "lucide-react";

interface ChecklistItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

const CHECKLIST_ITEMS = [
  {
    id: "scope-of-service",
    title: "Scope of service",
    description:
      "Services, sites and activities covered — and what's excluded.",
  },
  {
    id: "responsibility-split",
    title: "Responsibility split",
    description: "Who does what between you, Zoiko and suppliers.",
  },
  {
    id: "support-hours",
    title: "Support hours",
    description: "Days, times, holidays and out-of-hours arrangements.",
  },
  {
    id: "response-vs-repair",
    title: "Response vs repair",
    description: "Separate targets, and how they're measured.",
  },
  {
    id: "escalation-route",
    title: "Escalation route",
    description: "Stages and contacts if something isn't resolved.",
  },
  {
    id: "fees-and-changes",
    title: "Fees & changes",
    description: "Recurring, one-off and usage charges, with VAT basis.",
  },
  {
    id: "data-protection",
    title: "Data protection",
    description: "How your information is handled and who can access it.",
  },
  {
    id: "contract-length",
    title: "Contract length",
    description: "Terms per service — 24 months max for 10 or fewer employees.",
  },
  {
    id: "remedies",
    title: "Remedies",
    description: "Any service credits, and how to dispute.",
  },
  {
    id: "exit-and-renewal",
    title: "Exit & renewal",
    description: "Notice, portability and handover.",
  },
] as const satisfies readonly ChecklistItem[];

export default function ProcurementChecklist() {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const totalCount = CHECKLIST_ITEMS.length;
  const confirmedCount = checkedIds.length;
  const progressPercent = (confirmedCount / totalCount) * 100;

  return (
    <section
      aria-labelledby="procurement-checklist-heading"
      className="w-full bg-[#F5F6FB] py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="text-center max-w-[720px] mx-auto mb-11 sm:mb-12">
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#565B75] mb-2.5">
              CHOOSING A PROVIDER
            </p>
            <h2
              id="procurement-checklist-heading"
              className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B] mb-3"
            >
              Your procurement checklist
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[1.58] text-[#5B6078] font-normal">
              Tick what you&rsquo;ve confirmed. Everything here should be in
              writing before you sign.
            </p>
          </div>

          {/* 2-Column Checklist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-6">
            {CHECKLIST_ITEMS.map((item) => {
              const isChecked = checkedIds.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  role="checkbox"
                  aria-checked={isChecked}
                  onClick={() => toggleItem(item.id)}
                  className={`w-full text-left flex items-start gap-3.5 rounded-[12px] bg-white px-4 py-3.5 transition cursor-pointer ${
                    isChecked
                      ? "border border-[#E61E88] shadow-[0_6px_18px_rgba(230,30,136,0.08)]"
                      : "border border-[#E6E8F0] shadow-[0_4px_14px_rgba(15,23,66,0.03)] hover:border-[#CFD4E3]"
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-[4px] border transition-colors ${
                      isChecked
                        ? "border-[#E61E88] bg-[#E61E88] text-white"
                        : "border-[#C4C9D8] bg-white"
                    }`}
                  >
                    {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] font-bold leading-[1.3] text-[#070B2B]">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-[11.5px] leading-[1.42] text-[#686E86]">
                      {item.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Progress Bar + Counter */}
          <div className="flex items-center gap-4 mb-7">
            <div className="flex-1 h-[6px] rounded-full bg-[#E5E7F0] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#DF1A86] to-[#EB2690] transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="shrink-0 text-[12px] font-bold text-[#070B2B] tabular-nums">
              {confirmedCount} of {totalCount} confirmed
            </span>
          </div>

          {/* Primary Action Button */}
          <div>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-1.5 rounded-[9px] bg-gradient-to-r from-[#DF1A86] to-[#EB2690] px-6 py-3 text-[13.5px] font-bold text-white shadow-[0_12px_26px_rgba(230,26,134,0.35)] hover:brightness-105 transition"
            >
              <span>Ask for a proposal</span>
              <ChevronRight className="h-4 w-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
