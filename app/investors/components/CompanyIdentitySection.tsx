"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  ChevronRight,
  Copy,
  FileText,
  Info,
  Search,
} from "lucide-react";

const sectionContent = {
  step: "01",
  eyebrow: "COMPANY IDENTITY",
  headingPrefix: "The ",
  headingAccent: "registered entity",
  description:
    "Check the details below against the official register before relying on them.",
} as const;

const entityCard = {
  title: "Zoiko Telecom Ltd",
  companyNumber: "15021457",
  rows: [
    { label: "Legal name", value: "Zoiko Telecom Ltd" },
    { label: "Company number", value: "15021457", copyable: true },
    {
      label: "Company type",
      value: "Private limited company",
      subtext: "As described by Companies House.",
    },
    { label: "Incorporated", value: "23 July 2023" },
    {
      label: "Register status",
      value: "See the live register",
      subtext: "Status can change — we don’t restate it here.",
    },
    {
      label: "Source last checked",
      value: "Pending review",
      subtext: "A review date will appear once details are re-checked.",
    },
  ],
  cta: {
    label: "View company information on Companies House",
    href: "https://find-and-update.company-information.service.gov.uk/company/15021457",
  },
} as const;

const infoCards = [
  {
    title: "Information, not an offer",
    description:
      "Zoiko Telecom Ltd is a private company. Nothing on this page is an offer of shares or an invitation to invest, and it isn’t financial advice.",
    icon: Info,
    dark: true,
  },
  {
    title: "The register is the source",
    description:
      "Public filings are records of what was filed. They aren’t an independent check of the company’s activity or performance.",
    icon: Search,
    dark: false,
  },
  {
    title: "Entity, not brand",
    description:
      "Details here relate to Zoiko Telecom Ltd only — not to any other company using the Zoiko name.",
    icon: FileText,
    dark: false,
  },
] as const;

export default function CompanyIdentitySection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(entityCard.companyNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="company-identity"
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

        {/* Two-column layout: Entity table card + 3 stacked info cards */}
        <div className="mt-8 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {/* Left card: Entity details */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#eaecf4] bg-white p-6 shadow-[0_4px_18px_rgba(15,23,42,0.03)] sm:p-8 lg:col-span-7">
            <div>
              <h3 className="text-[19px] font-extrabold tracking-[-0.015em] text-[#0c1438]">
                {entityCard.title}
              </h3>

              <dl className="mt-5 divide-y divide-[#eef0f6] border-t border-[#eef0f6]">
                {entityCard.rows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-1 gap-1 py-3.5 sm:grid-cols-12 sm:items-start sm:gap-4"
                  >
                    <dt className="text-[12.5px] font-medium text-[#64748b] sm:col-span-4">
                      {row.label}
                    </dt>

                    <dd className="sm:col-span-8">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-[13.5px] font-bold text-[#0c1438]">
                          {row.value}
                        </span>

                        {"copyable" in row && row.copyable && (
                          <button
                            type="button"
                            onClick={handleCopy}
                            className="inline-flex items-center gap-1 rounded-md border border-[#dde2f0] bg-[#f8faff] px-2.5 py-0.5 text-[11px] font-semibold text-[#2563eb] transition hover:border-[#bfdbfe] hover:bg-[#eff6ff]"
                          >
                            {copied ? (
                              <>
                                <Check className="h-3 w-3" aria-hidden="true" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3" aria-hidden="true" />
                                Copy
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      {"subtext" in row && row.subtext && (
                        <p className="mt-0.5 text-[11.5px] leading-[1.45] text-[#64748b]">
                          {row.subtext}
                        </p>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-6 pt-2">
              <Link
                href={entityCard.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#c81878] transition hover:underline"
              >
                {entityCard.cta.label}
                <ChevronRight
                  className="h-3.5 w-3.5 stroke-[2.5]"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Right column: 3 stacked cards */}
          <div className="flex flex-col justify-between gap-4 lg:col-span-5">
            {infoCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className={`flex flex-1 flex-col justify-center rounded-2xl p-6 ${
                    card.dark
                      ? "bg-[#060f35] text-white shadow-[0_10px_26px_rgba(6,15,53,0.18)]"
                      : "border border-[#eaecf4] bg-[#f6f7fb] text-[#0c1438]"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      card.dark
                        ? "bg-white/10 text-[#93c5fd]"
                        : "bg-[#e7ecf8] text-[#2563eb]"
                    }`}
                  >
                    <Icon className="h-4 w-4 stroke-[2]" aria-hidden="true" />
                  </span>

                  <h3
                    className={`mt-4 text-[15px] font-bold leading-snug ${
                      card.dark ? "text-white" : "text-[#0c1438]"
                    }`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`mt-1.5 text-[12.5px] leading-[1.55] ${
                      card.dark ? "text-white/75" : "text-[#4b5563]"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
