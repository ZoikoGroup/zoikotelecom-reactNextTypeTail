"use client";

import React from "react";
import { Info } from "lucide-react";

type AssuranceStatusVariant =
  | "published"
  | "on-request"
  | "not-published"
  | "not-offered";

interface AssuranceEvidenceItem {
  readonly id: string;
  readonly status: string;
  readonly statusVariant: AssuranceStatusVariant;
  readonly title: string;
  readonly description: string;
}

const ASSURANCE_STATUS_STYLES = {
  published: "bg-[#DCFCE7] text-[#15803D]",
  "on-request": "bg-[#E0E7FF] text-[#2563EB]",
  "not-published": "bg-[#FEF3C7] text-[#B45309]",
  "not-offered": "bg-[#FCE7F3] text-[#E11D88]",
} as const satisfies Record<AssuranceStatusVariant, string>;

const ASSURANCE_ITEMS = [
  {
    id: "privacy-notice",
    status: "Published",
    statusVariant: "published",
    title: "Privacy notice",
    description: "Our published privacy information.",
  },
  {
    id: "service-safeguards",
    status: "On request",
    statusVariant: "on-request",
    title: "Service safeguards",
    description: "How a specific service handles account changes and access.",
  },
  {
    id: "contract-data-terms",
    status: "On request",
    statusVariant: "on-request",
    title: "Contract & data terms",
    description: "Responsibilities and any data processing agreement.",
  },
  {
    id: "supplier-responsibilities",
    status: "On request",
    statusVariant: "on-request",
    title: "Supplier responsibilities",
    description: "Which wholesale providers are involved.",
  },
  {
    id: "iso-27001",
    status: "Not published",
    statusVariant: "not-published",
    title: "ISO 27001",
    description: "No current scoped certificate is published here.",
  },
  {
    id: "cyber-essentials",
    status: "Not published",
    statusVariant: "not-published",
    title: "Cyber Essentials",
    description: "No certification is published here.",
  },
  {
    id: "soc-2-report",
    status: "Not published",
    statusVariant: "not-published",
    title: "SOC 2 report",
    description: "No audit report is published here.",
  },
  {
    id: "security-monitoring-24-7",
    status: "Not offered",
    statusVariant: "not-offered",
    title: "24/7 security monitoring",
    description: "Not offered on this page.",
  },
] as const satisfies readonly AssuranceEvidenceItem[];

export default function AssuranceEvidenceSection() {
  return (
    <section
      aria-labelledby="assurance-evidence-heading"
      className="w-full bg-[#F5F6FB] py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Centered Header */}
        <div className="text-center max-w-[720px] mx-auto mb-11 sm:mb-12">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#565B75] mb-2.5">
            ASSURANCE EVIDENCE
          </p>
          <h2
            id="assurance-evidence-heading"
            className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B] mb-3"
          >
            Request relevant assurance information
          </h2>
          <p className="text-[14px] sm:text-[15px] leading-[1.58] text-[#5B6078] font-normal">
            We don&rsquo;t display certification badges. Here&rsquo;s what you
            can ask about — and what isn&rsquo;t published.
          </p>
        </div>

        {/* 4x2 Assurance Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          {ASSURANCE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="rounded-[16px] bg-white border border-[#ECEEF6] p-5 shadow-[0_8px_24px_rgba(15,23,66,0.04)] flex flex-col justify-between"
            >
              <div>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold leading-4 mb-3 ${
                    ASSURANCE_STATUS_STYLES[item.statusVariant]
                  }`}
                >
                  {item.status}
                </span>

                <h3 className="text-[14.5px] font-bold leading-[1.3] tracking-[-0.01em] text-[#070B2B] mb-1.5">
                  {item.title}
                </h3>

                <p className="text-[12px] leading-[1.48] text-[#5B6078] font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info Notice Banner */}
        <div className="rounded-[12px] bg-[#EEF1FB] border border-[#E1E6F7] px-4 sm:px-5 py-3.5 flex items-start sm:items-center gap-3">
          <Info
            className="h-4 w-4 shrink-0 text-[#4F46E5] mt-0.5 sm:mt-0"
            strokeWidth={2.2}
          />
          <p className="text-[12px] leading-[1.5] text-[#4B5068]">
            If a document isn&rsquo;t published here, contact our team to ask
            what evidence is appropriate for your service and purpose.
            Restricted information may need verification first.
          </p>
        </div>
      </div>
    </section>
  );
}
