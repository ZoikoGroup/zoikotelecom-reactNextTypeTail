"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const sectionContent = {
  step: "04",
  eyebrow: "QUESTIONS",
  headingPrefix: "News ",
  headingAccent: "& media",
} as const;

const faqs = [
  {
    question: "Where can I read Zoiko Telecom articles?",
    answer:
      "You can browse our practical guides, broadband & connectivity insights, and digital skills posts in the Browse section above, where each topic opens our full article list.",
  },
  {
    question: "Does Zoiko publish press releases?",
    answer:
      "Official company announcements are published in our Media resources section once released, complete with a clear publication date.",
  },
  {
    question: "How do I make a media enquiry?",
    answer:
      "Please submit general and media enquiries through our Contact page. For customer faults, billing, or account support, use our Service support page instead.",
  },
  {
    question: "Is there a media kit?",
    answer:
      "Our downloadable media kit—including approved logos, brand assets, usage terms, formats, and file sizes—is currently being prepared and will be available soon.",
  },
  {
    question: "Where do I get help with my service?",
    answer:
      "For faults, billing questions, or account assistance, visit our Support page so our customer service team can help you directly.",
  },
] as const;

export default function NewsMediaFaqSection() {
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
