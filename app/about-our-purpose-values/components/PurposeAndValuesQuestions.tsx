"use client";

import { useState } from "react";

interface PurposeFaqItem {
  question: string;
  answer: string;
}

const leftColumnQuestions: PurposeFaqItem[] = [
  {
    question: "What is Zoiko Telecom's purpose?",
    answer:
      "Our aim is to make connectivity easier to understand and more useful in everyday life and work.",
  },
  {
    question: "What are the values?",
    answer:
      "We focus on three core themes: innovation, international connectivity, and customer focus — using technology thoughtfully, considering cross-border connections, and starting with customer needs.",
  },
  {
    question: "How can I explore available services?",
    answer:
      "You can browse our mobile, broadband, landline, and business sections across the site to review current options, availability, and terms before choosing a service.",
  },
  {
    question: "Are values service guarantees?",
    answer:
      "No. Our purpose, vision, and values describe what we aim for and how we want to show up — actual service coverage, features, and terms are set by each product agreement.",
  },
  {
    question: "Where can I find sustainability information?",
    answer:
      "Check our published company and policy pages for current details on how we approach sustainability and responsible operations.",
  },
];

const rightColumnQuestions: PurposeFaqItem[] = [
  {
    question: "What is the vision?",
    answer:
      "A future in which people and organisations can connect more easily, wherever their needs take them.",
  },
  {
    question: "Does international connectivity mean coverage everywhere?",
    answer:
      "No. International calling, roaming, and cross-border availability depend on your specific plan, destination, and service terms.",
  },
  {
    question: "Where can I get help?",
    answer:
      "Visit the Help Centre for answers, safe troubleshooting checks, and reporting guidance, or use our Contact page to reach the support team.",
  },
  {
    question: "Where can I learn about the company?",
    answer:
      "Our About and company story pages share who we are, what we offer, and where to verify company details.",
  },
  {
    question: "How can I discuss business requirements?",
    answer:
      "Explore our Business Solutions area or contact our business support team with your organisation's needs, sites, and connectivity requirements.",
  },
];

export default function PurposeAndValuesQuestions() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggleItem = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  const renderFaqCard = (item: PurposeFaqItem, key: string) => {
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
      id="purpose-values-faqs"
      className="w-full bg-white px-4 py-14 text-[#110C3A] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Section Eyebrow & Heading */}
        <div>
          <p className="flex items-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.14em]">
            <span className="font-semibold italic text-[#E5A9C3]">05</span>
            <span className="text-[#A3367A]">Questions</span>
          </p>

          <h2 className="mt-2.5 text-[34px] font-black leading-[1.12] tracking-[-0.025em] text-[#0B092E] sm:text-[42px]">
            Purpose &amp;{" "}
            <span className="font-extrabold italic text-[#9E2A76]">values</span>
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

        {/* Bottom Footnote Notice */}
        <div className="mt-7 flex items-center gap-2.5 border-t border-[#F2ECE6] pt-4 text-[11px] text-[#7A768E]">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 shrink-0 text-[#EC1C7A]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v5" strokeLinecap="round" />
            <circle cx="12" cy="8" r="0.8" fill="currentColor" stroke="none" />
          </svg>
          <p>
            Service availability and terms vary by product. Review current
            service information before making a decision.
          </p>
        </div>
      </div>
    </section>
  );
}
