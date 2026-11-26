"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const sectionContent = {
  step: "06",
  eyebrow: "QUESTIONS",
  headingPrefix: "Mobile for Business ",
  headingAccent: "FAQs",
} as const;

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: readonly FaqItem[] = [
  {
    id: "more-than-one-sim",
    question: "Can my business have more than one SIM?",
    answer:
      "Yes — we support both single-person setups and multi-line team accounts, with terms and allowances confirmed in a written business proposal.",
  },
  {
    id: "keep-existing-numbers",
    question: "Can we keep existing numbers?",
    answer:
      "Number transfers may be possible subject to ownership checks, network rules and authorisation by the account owner. Please don’t enter phone numbers in a public enquiry form.",
  },
  {
    id: "esim-available",
    question: "Is eSIM available?",
    answer:
      "eSIM requires support from both your handset and the chosen business plan; physical SIM delivery can also be arranged securely.",
  },
  {
    id: "plans-include-roaming",
    question: "Do your plans include roaming?",
    answer:
      "Roaming zones, usage caps, fair-use policies and charges vary by plan and destination country and are set out in your proposal.",
  },
  {
    id: "manage-all-lines-online",
    question: "Can we manage all lines online?",
    answer:
      "Online line management isn’t confirmed here; billing accounts, employee lines and cost centres are discussed directly with our business team.",
  },
  {
    id: "how-to-get-a-quote",
    question: "How do we get a quote?",
    answer:
      "Share your requirements through the business contact route so we can review lines, devices and coverage and prepare an itemised quote for authorised sign-off.",
  },
] as const;

export default function MobileForBusinessFaqsSection() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="mobile-for-business-faqs"
      className="w-full bg-[#f5f6fb] px-4 py-14 sm:px-8 lg:px-12"
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
            <span className="font-semibold italic text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>
        </div>

        {/* Two-column expandable FAQ grid */}
        <div className="mt-7 grid grid-cols-1 items-start gap-4 md:grid-cols-2">
          {faqItems.map((item) => {
            const isOpen = Boolean(openIds[item.id]);

            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-[#e7eaf3] bg-white shadow-[0_2px_10px_rgba(15,23,42,0.025)] transition hover:border-[#d5dbea]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleItem(item.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-[13.5px] font-bold leading-snug text-[#0c1438]">
                    {item.question}
                  </span>

                  <Plus
                    className={`h-4 w-4 shrink-0 stroke-[2.2] text-[#e11d74] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-[#f1f3f9] px-5 py-3.5 text-[12px] leading-[1.6] text-[#4b5563]">
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
