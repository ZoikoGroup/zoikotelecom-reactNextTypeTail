"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const sectionContent = {
  step: "06",
  eyebrow: "QUESTIONS",
  headingPrefix: "Careers ",
  headingAccent: "FAQs",
} as const;

const faqs = [
  {
    question: "Are there jobs at Zoiko?",
    answer:
      "Current vacancies cannot be confirmed on this page yet because no verified listing source is connected. We do not show empty slots or invented roles.",
  },
  {
    question: "How do I apply?",
    answer:
      "Online applications are not live yet. When verified roles are published, each listing will set out its approved application route, details, and UK closing time.",
  },
  {
    question: "Can I work remotely?",
    answer:
      "Work arrangements — on-site, hybrid, or remote — will be stated clearly on each approved role listing once published.",
  },
  {
    question: "What are the pay and benefits?",
    answer:
      "A pay range will only be shown where approved on a published role listing — never as an estimated or invented figure.",
  },
  {
    question: "Can I request an adjustment?",
    answer:
      "A dedicated recruitment assistance route will be shared with approved roles. Please do not include medical details in general enquiries.",
  },
  {
    question: "Will I need a right-to-work check?",
    answer:
      "Where applicable to a role or jurisdiction, eligibility and right-to-work requirements will be outlined before an application is submitted.",
  },
  {
    question: "How will my data be used?",
    answer:
      "A candidate-specific privacy notice will be shown before any application asks for your personal details.",
  },
  {
    question: "Can I check my application status?",
    answer:
      "A candidate account feature to check or withdraw an application is not live yet.",
  },
  {
    question: "What if a role is closed?",
    answer:
      "Once a role closes or is no longer open, it will no longer accept applications under that active listing.",
  },
  {
    question: "How can I spot suspicious recruitment?",
    answer:
      "Never pay a fee to apply or interview, never share passwords or bank credentials, and do not send identity documents through general contact channels. Always verify requests through our official Contact page.",
  },
] as const;

export default function CareersFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="w-full bg-[#F5F6FB] px-4 py-14 sm:px-8 lg:px-12">
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
