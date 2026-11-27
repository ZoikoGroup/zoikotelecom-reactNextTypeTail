"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const sectionContent = {
  id: "unified-communications-faqs",
  step: "07",
  eyebrow: "QUESTIONS",
  headingPrefix: "Unified communications ",
  headingAccent: "FAQs",
} as const;

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: readonly FaqItem[] = [
  {
    id: "what-is-unified-communications",
    question: "What is unified communications?",
    answer:
      "Unified communications (UC) brings calling, meetings and messaging together so your team can work from one place.",
  },
  {
    id: "is-uc-available-from-zoiko",
    question: "Is unified communications available from Zoiko?",
    answer:
      "Business voice can be discussed with our team now. Meetings, messaging and integrations are currently under assessment and not yet confirmed.",
  },
  {
    id: "what-should-my-business-assess-first",
    question: "What should my business assess first?",
    answer:
      "Start with your named users, call channels, meeting seats, sites and numbers, alongside your existing phone system, devices, accessibility needs and resilience requirements.",
  },
  {
    id: "will-999-calls-work",
    question: "Will 999 calls work?",
    answer:
      "Internet-based calling behaves differently from a traditional line. We review 999 and 112 calling rules, registered site locations, power or internet loss backups and critical equipment before any service is offered.",
  },
  {
    id: "can-we-keep-our-numbers",
    question: "Can we keep our numbers?",
    answer:
      "Existing business numbers are reviewed during the assessment stage based on your current provider, setup and site locations before any written offer is issued.",
  },
  {
    id: "is-there-pricing-online",
    question: "Is there pricing online?",
    answer:
      "No. Users, seats, VAT, minimum term and exclusions are confirmed in a written offer following an assessment — no prices are published or committed online beforehand.",
  },
] as const;

export default function UnifiedCommunicationsFaqsSection() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id={sectionContent.id}
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
            <span className="text-[#b81d78]">
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
