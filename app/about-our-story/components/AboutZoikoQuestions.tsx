"use client";

import { useState } from "react";

interface AboutFaqItem {
  question: string;
  answer: string;
}

const leftColumnQuestions: AboutFaqItem[] = [
  {
    question: "What is Zoiko Telecom?",
    answer:
      "Zoiko Telecom brings together connectivity and communications services for individuals and organisations in the UK, operating through Zoiko Telecom Ltd.",
  },
  {
    question: "What services are described?",
    answer:
      "Across our site we highlight areas including mobile, broadband, digital voice/landlines, business connectivity, and IoT options, with specific details and availability varying by service.",
  },
  {
    question: "Can I get help with my existing service?",
    answer:
      "Yes. Visit the Help Centre for answers, safe troubleshooting checks, and reporting guidance, or use our Contact page to reach the support team.",
  },
  {
    question: "Are performance figures guaranteed?",
    answer:
      "No. General descriptions, aspirations, and design intentions do not act as coverage, speed, uptime, or performance guarantees — always review current service terms and availability.",
  },
];

const rightColumnQuestions: AboutFaqItem[] = [
  {
    question: "Where can I verify the company?",
    answer:
      "You can check Zoiko Telecom Ltd (company number 15021457) directly on the official Companies House register.",
  },
  {
    question: "Does Zoiko own the networks?",
    answer:
      "How connectivity is delivered depends on the specific service and underlying network arrangements in place; check the relevant service information for current details.",
  },
  {
    question: "Can I visit an office?",
    answer:
      "Please check our Contact page for current contact routes and availability before travelling, rather than assuming walk-in access.",
  },
  {
    question: "How can I ask a company question?",
    answer:
      "Use our Contact page to reach the appropriate team with your question or enquiry.",
  },
];

export default function AboutZoikoQuestions() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggleItem = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  const renderFaqCard = (item: AboutFaqItem, key: string) => {
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
      id="about-zoiko-faqs"
      className="w-full bg-[#FFFFFF] px-4 py-14 text-[#110C3A] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Section Eyebrow & Heading */}
        <div>
          <p className="flex items-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.14em]">
            <span className="font-semibold italic text-[#E5A9C3]">05</span>
            <span className="text-[#A3367A]">Questions</span>
          </p>

          <h2 className="mt-2.5 text-[34px] font-black leading-[1.12] tracking-[-0.025em] text-[#0B092E] sm:text-[42px]">
            About{" "}
            <span className="font-extrabold text-[#9E2A76]">Zoiko Telecom</span>
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
