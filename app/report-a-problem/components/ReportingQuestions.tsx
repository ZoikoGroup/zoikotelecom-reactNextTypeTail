"use client";

import { useState } from "react";

interface ReportingFaqItem {
  question: string;
  answer: string;
}

const leftColumnQuestions: ReportingFaqItem[] = [
  {
    question: "How do I report a problem?",
    answer:
      "Use our Contact page to reach support by phone or the enquiry form. You can prepare your details on this page first and paste them in, though clicking a link here does not send a report.",
  },
  {
    question: "What information should I provide?",
    answer:
      "Share which service is affected, who is impacted, how often it happens, whether it works at all, when it started, what you've tried, and a brief plain-words description. Never include passwords, one-time codes, SIM QR codes, PIN/PUK numbers, or card numbers.",
  },
  {
    question: "Can I report a digital landline issue?",
    answer:
      "Yes. Tell us what's happening with your voice service, and let us know if there is a power cut or if you rely on your landline for care or safety. Digital voice usually needs power, so use a charged mobile in an emergency.",
  },
  {
    question: "Will I get a case number?",
    answer:
      "Any case reference comes from our support team after you contact them — not from this page.",
  },
  {
    question: "What if I'm unhappy with the response?",
    answer:
      "Ask our team to handle it as a formal complaint. Depending on eligibility and Ofcom guidance, unresolved complaints can typically go to free Alternative Dispute Resolution (ADR) after six weeks, or sooner with a deadlock letter.",
  },
];

const rightColumnQuestions: ReportingFaqItem[] = [
  {
    question: "Do I need to troubleshoot first?",
    answer:
      "You don't have to complete everything before reaching out, though basic checks like restarting a device or router can be helpful. Let us know what you've already tried so we don't repeat steps unnecessarily.",
  },
  {
    question: "Can I report a business fault?",
    answer:
      "Yes. Select Business or mention your business service when contacting support, including which site, line, or users are affected and how urgent the impact is.",
  },
  {
    question: "Can I track my fault online?",
    answer:
      "There is no online fault tracker on this page yet. If you have already reported an issue and want an update, contact our team and mention any reference you were given.",
  },
  {
    question: "How long will a repair take?",
    answer:
      "Repair times aren't fixed here because they depend on the nature of the fault, engineering requirements, and your service terms.",
  },
  {
    question: "Will I get compensation?",
    answer:
      "Whether compensation applies depends on your contract terms, service type, and the specific circumstances of the fault.",
  },
];

export default function ReportingQuestions() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggleItem = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  const renderFaqCard = (item: ReportingFaqItem, key: string) => {
    const isOpen = openKey === key;

    return (
      <div
        key={key}
        className="rounded-xl bg-white border border-[#ECEAF2] shadow-[0_2px_10px_rgba(17,12,58,0.025)] transition-shadow hover:shadow-[0_5px_18px_rgba(17,12,58,0.05)]"
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
      id="reporting-faqs"
      className="w-full bg-[#F5F6FB] px-4 py-14 text-[#18133E] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#5B5675]">
            FAQs
          </p>
          <h2 className="mt-2.5 text-[32px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#110C3A] sm:text-[42px]">
            Reporting questions
          </h2>
        </div>

        {/* Two-Column Independent Accordion Columns */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
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
