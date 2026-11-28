"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const sectionContent = {
  id: "sector-faqs",
  step: "05",
  eyebrow: "QUESTIONS",
  headingPrefix: "Sector ",
  headingAccent: "FAQs",
} as const;

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: readonly FaqItem[] = [
  {
    id: "what-are-sector-solutions",
    question: "What are Sector Solutions?",
    answer:
      "Sector solutions group common business connectivity, mobile and voice considerations by industry as discovery starting points — not pre-packaged offers or regulated-industry certifications.",
  },
  {
    id: "do-i-have-to-pick-a-sector",
    question: "Do I have to pick a sector?",
    answer:
      "No. You don’t have to choose a sector — you can share how your organisation works and we’ll review the relevant options with you.",
  },
  {
    id: "are-these-regulated-industry-solutions",
    question: "Are these regulated-industry solutions?",
    answer:
      "No. None of these sector groupings is a validated regulated-industry, clinical, NHS, optical, dental or care-compliance solution.",
  },
  {
    id: "can-you-guarantee-coverage-at-all-our-sites",
    question: "Can you guarantee coverage at all our sites?",
    answer:
      "No. Coverage, connectivity and backup connections are never promised upfront; each site, location and contingency is assessed before any offer is made.",
  },
  {
    id: "is-there-a-bundle-for-my-sector",
    question: "Is there a bundle for my sector?",
    answer:
      "No fixed off-the-shelf bundle is implied here. Relevant services are scoped around your sites, users, devices and resilience needs in a written offer.",
  },
  {
    id: "what-should-i-avoid-sharing",
    question: "What should I avoid sharing?",
    answer:
      "Never share passwords, credentials, client files, matter details or patient-identifiable information, and don’t share home addresses unless there is a clear purpose.",
  },
] as const;

export default function SectorFaqsSection() {
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
