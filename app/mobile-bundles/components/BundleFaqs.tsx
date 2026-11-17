"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const BUNDLE_FAQ_ITEMS = [
  {
    id: "can-get-broadband-mobile-together",
    question: "Can I get broadband and mobile from Zoiko together?",
    answer:
      "Yes, you can explore and combine both home broadband and mobile services to manage your home and on-the-go connectivity under one roof.",
  },
  {
    id: "will-both-services-be-on-one-bill",
    question: "Will both services be on one bill?",
    answer:
      "Depending on your plan selection and billing setup, we can help coordinate your statements, though broadband and mobile contracts retain their own individual terms.",
  },
  {
    id: "what-happens-if-i-cancel-one-service",
    question: "What happens if I cancel one service?",
    answer:
      "Changing or ending one service could affect any combined bundle discount. We will explain how individual service changes impact your overall plan before you agree.",
  },
  {
    id: "is-broadband-available-at-my-address",
    question: "Is broadband available at my address?",
    answer:
      "Broadband is address-based, meaning available speeds and connection types depend entirely on your specific property. You can check your postcode with our team.",
  },
  {
    id: "will-i-save-money-with-a-bundle",
    question: "Will I save money with a bundle?",
    answer:
      "When combined offers are available, you will see standalone and bundled costs compared over the same period so you can evaluate any potential savings.",
  },
  {
    id: "do-my-contracts-have-to-end-at-the-same-time",
    question: "Do my contracts have to end at the same time?",
    answer:
      "No. Broadband and mobile contracts can start and end at different times, as they operate on separate terms.",
  },
  {
    id: "can-i-keep-my-mobile-number",
    question: "Can I keep my mobile number?",
    answer:
      "Yes. When switching mobile plans, you can use a PAC code from your current provider to bring your existing phone number across.",
  },
  {
    id: "can-i-add-more-mobile-lines",
    question: "Can I add more mobile lines?",
    answer:
      "Yes, you can customize your bundle to include multiple mobile lines depending on the data allowances needed for everyone in your household.",
  },
] as const;

export default function BundleFaqs() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="w-full bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            FAQS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Bundle questions
          </h2>
        </div>

        {/* Two-Column FAQ Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
          {BUNDLE_FAQ_ITEMS.map((faq) => {
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
