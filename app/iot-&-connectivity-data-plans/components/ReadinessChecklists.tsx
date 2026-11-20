"use client";

import React, { useState } from "react";
import { Cpu, FileText } from "lucide-react";
import SectionHeader from "./SectionHeader";

const CHECKLISTS = [
  {
    id: "deployment",
    title: "Deployment checklist",
    icon: Cpu,
    items: [
      "Device and module type",
      "Estimated device numbers by phase",
      "Typical and peak data per device",
      "Countries and regions of use",
      "APN, IP and security needs",
      "Rollout schedule",
    ],
  },
  {
    id: "procurement",
    title: "Procurement proof checklist",
    icon: FileText,
    items: [
      "A signed price sheet",
      "What’s included and what isn’t",
      "Allowance limits and over-use terms",
      "Roaming countries and charges",
      "Support arrangements",
      "Exit and cancellation clauses",
    ],
  },
] as const;

export default function ReadinessChecklists() {
  // Kept in component state only — nothing is saved or sent.
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => setChecked((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Get ready"
          title="Two checklists before you ask for a proposal"
          subtitle="Tick them off as you go — nothing is saved or sent."
          className="max-w-3xl"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {CHECKLISTS.map(({ id, title, icon: Icon, items }) => {
            const done = items.filter((item) => checked[`${id}:${item}`]).length;
            return (
              <div key={id} className="rounded-[22px] border border-[#E6E9F2] bg-white p-6">
                <h3 className="flex items-center gap-2.5 text-xl font-bold text-[#11183C]">
                  <Icon className="h-5 w-5 text-[#8E37E8]" strokeWidth={2} aria-hidden="true" />
                  {title}
                </h3>
                <p className="mt-1 text-xs font-bold text-[#6B7194]" aria-live="polite">
                  {done} of {items.length} ready
                </p>
                <div
                  role="progressbar"
                  aria-label={`${title} progress`}
                  aria-valuemin={0}
                  aria-valuemax={items.length}
                  aria-valuenow={done}
                  className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#ECEAF7]"
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#E11D74] to-[#8E37E8] transition-all duration-300"
                    style={{ width: `${(done / items.length) * 100}%` }}
                  />
                </div>

                <ul className="mt-4 divide-y divide-dashed divide-[#E6E9F2]">
                  {items.map((item) => {
                    const key = `${id}:${item}`;
                    return (
                      <li key={item}>
                        <label className="flex cursor-pointer items-center gap-3 py-3 text-sm text-[#2B3150]">
                          <input
                            type="checkbox"
                            checked={Boolean(checked[key])}
                            onChange={() => toggle(key)}
                            className="h-4 w-4 shrink-0 accent-[#E11D74]"
                          />
                          <span className={checked[key] ? "text-[#8A90A6] line-through" : ""}>{item}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
