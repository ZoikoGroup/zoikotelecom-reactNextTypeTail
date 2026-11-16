"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const HOME_FAQ_ITEMS = [
  {
    id: "broadband-available-address",
    question: "Is broadband available at my address?",
    answer:
      "Availability varies by property and local street infrastructure. Running an address-level check confirms which connection types and speeds can reach your home.",
  },
  {
    id: "what-speed-do-i-need",
    question: "What speed do I need?",
    answer:
      "Light browsing and email work well on standard speeds, while households with multiple people streaming HD/4K video, gaming, or working from home benefit from superfast or ultrafast plans.",
  },
  {
    id: "will-price-go-up",
    question: "Will my price go up during my contract?",
    answer:
      "Many broadband contracts include scheduled annual price increases. Any fixed or inflation-linked price changes are shown clearly in pounds and pence in your contract summary before you sign.",
  },
  {
    id: "do-i-need-a-landline",
    question: "Do I need a landline?",
    answer:
      "Not always. Full fibre (FTTP) and many modern broadband plans provide broadband-only connections without requiring a traditional copper phone line.",
  },
  {
    id: "what-happens-if-move-home",
    question: "What happens if I move home?",
    answer:
      "You can usually transfer your broadband service to your new address if your provider covers the area. If they cannot supply your new property, early exit rules vary by provider.",
  },
  {
    id: "can-i-cancel",
    question: "Can I cancel?",
    answer:
      "You have a 14-day cooling-off period after ordering to cancel without penalty. After that, cancelling within your minimum term typically incurs an early exit fee.",
  },
  {
    id: "how-long-installation-take",
    question: "How long does installation take?",
    answer:
      "If your home already has a compatible line or socket, activation usually takes around 1 to 2 weeks. If an engineer needs to install new fibre cables, it may take slightly longer.",
  },
  {
    id: "is-there-a-data-limit",
    question: "Is there a data limit?",
    answer:
      "Almost all modern UK home broadband plans come with truly unlimited data usage, so you can stream, download, and browse without monthly usage caps.",
  },
] as const;

export default function HomeBroadbandFaqs() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            FAQS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Home broadband questions
          </h2>
        </div>

        {/* Two-Column FAQ Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
          {HOME_FAQ_ITEMS.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-2xl border border-[#E6E9F2] bg-white shadow-[0_2px_10px_rgba(17,24,60,0.02)] transition-colors hover:border-[#DCE1F0]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors"
                >
                  <span className="text-sm font-bold text-[#11183C] sm:text-base">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FCE8F1] text-[#E11D74] transition-transform">
                    {isOpen ? (
                      <Minus className="h-4 w-4" strokeWidth={2.5} />
                    ) : (
                      <Plus className="h-4 w-4" strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[#EEF0F7] px-6 py-4 text-sm leading-relaxed text-[#4B5563]">
                    {faq.answer}
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
