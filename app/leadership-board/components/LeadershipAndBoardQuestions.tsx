"use client";

import { useState } from "react";

interface LeadershipFaqItem {
  question: string;
  answer: string;
}

const leftColumnQuestions: LeadershipFaqItem[] = [
  {
    question: "Where can I verify Zoiko Telecom directors?",
    answer:
      "Statutory director appointments and resignations for Zoiko Telecom Ltd (company number 15021457) can be checked directly on the official Companies House register.",
  },
  {
    question: "Can a company be a director?",
    answer:
      "Yes. Under UK company law, a corporate body can be appointed as a statutory director and appear on the public register alongside individual directors.",
  },
  {
    question: "Who manages Zoiko Telecom?",
    answer:
      "Day-to-day management and leadership roles are set by the organisation; leadership profiles are published here once confirmed and approved.",
  },
  {
    question: "Can I contact a director directly?",
    answer:
      "We do not publish personal contact details for directors. For corporate or service enquiries, please use our Contact page or Help Centre.",
  },
  {
    question: "Where are governance policies?",
    answer:
      "Published governance and policy information — including our ESG policy — is available through our governance and sustainability pages.",
  },
];

const rightColumnQuestions: LeadershipFaqItem[] = [
  {
    question: "Are directors and executives the same?",
    answer:
      "No. Statutory directors are appointed under company law and recorded at Companies House, whereas executive roles are organisational titles published once confirmed — though one person can hold both.",
  },
  {
    question: "Does the register confirm trading activity?",
    answer:
      "No. Companies House records statutory filings and officer appointments; it is not an assurance of trading activity or service quality, and records can lag recent changes.",
  },
  {
    question: "Where can I contact the company?",
    answer:
      "Visit our Contact page to reach the relevant team for general, corporate, or account-related enquiries.",
  },
  {
    question: "How can I report an issue with my service?",
    answer:
      "Head to the Help Centre for troubleshooting checks, guidance, and support routes to report an issue with an existing service.",
  },
  {
    question: "How is this information kept current?",
    answer:
      "We only publish confirmed information here and encourage checking Companies House directly for the most up-to-date statutory register records.",
  },
];

export default function LeadershipAndBoardQuestions() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggleItem = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  const renderFaqCard = (item: LeadershipFaqItem, key: string) => {
    const isOpen = openKey === key;

    return (
      <div
        key={key}
        className="rounded-xl border border-[#ECEAF2] bg-white shadow-[0_2px_10px_rgba(17,12,58,0.025)] transition-shadow hover:shadow-[0_5px_18px_rgba(17,12,58,0.05)]"
      >
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={() => toggleItem(key)}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-[18px]"
        >
          <span className="text-[13.5px] font-bold leading-snug text-[#110C3A] sm:text-[14px]">
            {item.question}
          </span>
          <span
            className={`flex h-5 w-5 shrink-0 items-center justify-center text-[#EC1C7A] transition-transform duration-200 ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>

        {isOpen && (
          <div className="border-t border-[#F1EFF6] px-5 pb-4 pt-3 text-[12.5px] leading-[1.6] text-[#55506E] sm:px-6">
            {item.answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      id="leadership-board-faqs"
      className="w-full bg-[#F5F6FB] px-4 py-14 text-[#110C3A] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Section Eyebrow & Heading */}
        <div>
          <p className="flex items-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.14em]">
            <span className="font-semibold italic text-[#E5A9C3]">06</span>
            <span className="text-[#A3367A]">Questions</span>
          </p>

          <h2 className="mt-2.5 text-[34px] font-black leading-[1.12] tracking-[-0.025em] text-[#0B092E] sm:text-[42px]">
            Leadership{" "}
            <span className="font-extrabold text-[#9E2A76]">&amp; board</span>
          </h2>
        </div>

        {/* Two-Column Independent Accordion Columns */}
        <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          <div className="space-y-4">
            {leftColumnQuestions.map((item, idx) =>
              renderFaqCard(item, `left-${idx}`),
            )}
          </div>
          <div className="space-y-4">
            {rightColumnQuestions.map((item, idx) =>
              renderFaqCard(item, `right-${idx}`),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
