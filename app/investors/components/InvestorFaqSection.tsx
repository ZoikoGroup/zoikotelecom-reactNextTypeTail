"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const sectionContent = {
  step: "06",
  eyebrow: "QUESTIONS",
  headingPrefix: "Investor ",
  headingAccent: "FAQs",
} as const;

const faqs = [
  {
    question: "What is this page for?",
    answer:
      "This page provides factual company registration details for Zoiko Telecom Ltd and direct links to official public records on Companies House.",
  },
  {
    question: "Where can I find Zoiko Telecom’s company registration?",
    answer:
      "Zoiko Telecom Ltd is registered as a private limited company in the UK under company number 15021457, incorporated on 23 July 2023. You can check the live register directly on Companies House.",
  },
  {
    question: "Where can I read filed accounts?",
    answer:
      "Filed accounts, confirmation statements, and other public documents can be viewed in the Filing history section of the official Companies House record for company 15021457.",
  },
  {
    question: "Are all filed accounts audited?",
    answer:
      "No — do not assume filed accounts are audited. Check each individual document’s stated accounting basis and audit status on the register.",
  },
  {
    question: "Does this page offer shares?",
    answer:
      "No. Zoiko Telecom Ltd is a private company, and nothing on this page is an offer of shares, an invitation to invest, or financial advice.",
  },
  {
    question: "Can I see a share price or dividend?",
    answer:
      "No. Share prices, tickers, dividends, forecasts, and projections are not published or included on this page.",
  },
  {
    question: "How can I request general company information?",
    answer:
      "You can reach out for general company enquiries through our Contact page. There is no dedicated investor relations desk or guaranteed response time listed here.",
  },
  {
    question: "Can I send identity documents or bank details?",
    answer:
      "No. Never send payment details, identification documents, or investment instructions — always verify any request through our Contact page.",
  },
  {
    question: "How can I identify a corrected disclosure?",
    answer:
      "Any updated or corrected information will be clearly dated and noted against its source status once reviewed and published.",
  },
  {
    question: "Can I access private stakeholder documents?",
    answer:
      "Private stakeholder resources are not live on this page and are restricted to authorised existing stakeholders only.",
  },
] as const;

export default function InvestorFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="w-full bg-white px-4 py-14 sm:px-8 lg:px-12">
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

        {/* Two-column FAQ grid */}
        <div className="mt-7 grid grid-cols-1 items-start gap-3.5 md:grid-cols-2">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-[#eaecf4] bg-white shadow-[0_2px_10px_rgba(15,23,42,0.03)] transition hover:border-[#dce0ee]"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-[13.5px] font-semibold leading-snug text-[#0c1438] sm:text-[14px]">
                    {item.question}
                  </span>

                  <Plus
                    className={`h-4 w-4 shrink-0 stroke-[2.5] text-[#c81878] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-[#f1f3f9] px-5 pb-4 pt-3 text-[13px] leading-[1.6] text-[#4b5563]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
