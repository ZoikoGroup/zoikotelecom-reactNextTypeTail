"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const sectionContent = {
  step: "04",
  eyebrow: "QUESTIONS",
  headingPrefix: "Sustainability ",
  headingAccent: "(ESG)",
} as const;

const faqs = [
  {
    question: "What is ESG?",
    answer:
      "ESG stands for Environmental, Social and Governance — the three areas our published policy uses to set out our stated operational objectives and responsibilities.",
  },
  {
    question: "Where is Zoiko Telecom’s policy?",
    answer:
      "You can read our full published ESG policy on our ESG policy page, which details our environmental, social, and governance objectives.",
  },
  {
    question: "What does the environmental policy cover?",
    answer:
      "Our environmental policy identifies energy efficiency, renewable energy, waste reduction, and recycling as stated objectives, while noting that partner network operations are distinct from our own.",
  },
  {
    question: "Does Zoiko publish carbon emissions?",
    answer:
      "Performance figures, carbon emissions data, and certification badges are not included in the policy overview. Measured results will only be published alongside a clear methodology, scope, and reporting period.",
  },
  {
    question: "Does the policy mean every service is carbon neutral?",
    answer:
      "No. Having a stated policy objective does not make any service carbon neutral; any such claim depends on measured, verified evidence.",
  },
  {
    question: "Can I recycle a device with Zoiko?",
    answer:
      "Please contact us directly for confirmed disposal or take-back instructions rather than assuming a collection point, as options depend on the equipment and current arrangements.",
  },
  {
    question: "What are the social objectives?",
    answer:
      "The policy sets out diversity and inclusion, supporting communities, and maintaining an ethical supply chain and business practices as stated objectives.",
  },
  {
    question: "How is governance addressed?",
    answer:
      "Governance focuses on transparency about how we work, identifying and managing risks, and responsible decision-making backed by legal compliance and accountability.",
  },
  {
    question: "When was the policy approved?",
    answer:
      "Per the published policy, it was approved on 4 May 2024 and is reviewed annually or as needed.",
  },
  {
    question: "How can I raise a question about ESG information?",
    answer:
      "If you have a question about our ESG policy or spot something that appears out of date, please get in touch through our Contact page.",
  },
] as const;

export default function EsgFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-white px-4 py-14 sm:px-8 lg:px-12">
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
