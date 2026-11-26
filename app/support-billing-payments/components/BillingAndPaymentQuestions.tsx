"use client";

import { useState } from "react";

interface BillingFaqItem {
  question: string;
  answer: string;
}

const leftColumnFaqs: BillingFaqItem[] = [
  {
    question: "When do I pay my bill?",
    answer:
      "Your payment due date is set by your agreement and shown on your bill. Check the total and due date line on your statement so you know when funds need to be ready.",
  },
  {
    question: "What is a pro-rated charge?",
    answer:
      "If a service starts or changes part-way through a billing period, you may see a charge covering only that portion of the cycle. Your first or post-change bill can look different for this reason.",
  },
  {
    question: "How do taxes appear?",
    answer:
      "Applicable taxes such as VAT are shown on your actual bill depending on your service, agreement terms, and billing entity.",
  },
  {
    question: "Can I pay on behalf of someone else?",
    answer:
      "Payment arrangements depend on the account holder's agreement and payment method. Contact our support team to check what is supported before making a payment.",
  },
  {
    question: "Can I see my invoices in My Account?",
    answer:
      "Online account sign-in and invoice downloads aren't available on this page yet. Contact our support team through a secure route if you need a copy or breakdown of your bill.",
  },
];

const rightColumnFaqs: BillingFaqItem[] = [
  {
    question: "Can I change my payment method online?",
    answer:
      "Payment changes aren't handled directly on this page. Reach out to our support team for the current route to update how you pay, and never share card details or passwords in public messages.",
  },
  {
    question: "Why have I been charged more than expected?",
    answer:
      "Differences often come from part-period (pro-rated) charges, one-off fees, usage or roaming outside your allowance, or separate device and airtime agreements. Check the line items and contact us if something still looks wrong.",
  },
  {
    question: "Can I ask for an itemised bill?",
    answer:
      "Yes — if you need clarity on what makes up your charges, contact our support team with your billing period and service details so they can help explain the breakdown.",
  },
  {
    question: "How do I dispute an incorrect charge?",
    answer:
      "First note the billing month, service, and why the charge looks wrong, then contact support as a billing enquiry. If it isn't resolved to your satisfaction, you can ask about our formal complaints process.",
  },
  {
    question: "Why do device and airtime costs look separate?",
    answer:
      "Your handset or device payment and your mobile airtime or plan can be separate agreements — sometimes even with different providers or billing dates.",
  },
];

export default function BillingAndPaymentQuestions() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggleItem = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  const renderFaqCard = (item: BillingFaqItem, key: string) => {
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
      id="billing-faqs"
      className="w-full bg-[#F8F8FB] px-4 py-14 text-[#18133E] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#5B5675]">
            Billing FAQs
          </p>
          <h2 className="mt-2.5 text-[32px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#110C3A] sm:text-[42px]">
            Billing and payment questions
          </h2>
        </div>

        {/* Two-Column Independent Accordion Columns */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          <div className="space-y-4">
            {leftColumnFaqs.map((item, idx) =>
              renderFaqCard(item, `left-${idx}`),
            )}
          </div>
          <div className="space-y-4">
            {rightColumnFaqs.map((item, idx) =>
              renderFaqCard(item, `right-${idx}`),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
