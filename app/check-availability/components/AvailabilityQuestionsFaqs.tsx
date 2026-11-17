"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const AVAILABILITY_FAQ_ITEMS = [
  {
    id: "why-cant-a-postcode-confirm-availability",
    question: "Why can’t a postcode confirm availability?",
    answer:
      "A postcode covers a group of properties. Homes on the same street — or even flats within the same building — can have different connections and network serviceability.",
  },
  {
    id: "my-address-isnt-recognised-what-now",
    question: "My address isn’t recognised. What now?",
    answer:
      "New builds or unusual addresses can be checked manually by our team. Contact us with your full address and any plot or building reference.",
  },
  {
    id: "will-i-get-the-speed-shown",
    question: "Will I get the speed shown?",
    answer:
      "Actual speeds depend on the connection type reaching your property, line conditions, and your internal Wi-Fi setup. Full speed details are reviewed before you sign up.",
  },
  {
    id: "how-long-does-an-enquiry-take",
    question: "How long does an enquiry take?",
    answer:
      "We reply using the contact method you choose, though response times can vary depending on whether a network survey or manual address check is needed.",
  },
  {
    id: "i-live-in-a-flat-does-that-change-anything",
    question: "I live in a flat. Does that change anything?",
    answer:
      "Yes. Flats sharing a postcode may have different connections, and installations often require agreement from a landlord, building owner, or managing agent for shared areas.",
  },
  {
    id: "does-available-mean-it-can-be-installed",
    question: "Does ‘available’ mean it can be installed?",
    answer:
      "It means services can be offered at your property, though some installations still require landlord permission, building access, or a wayleave agreement.",
  },
  {
    id: "what-is-a-wayleave",
    question: "What is a wayleave?",
    answer:
      "A wayleave is a formal permission from a landowner allowing cables or network equipment to cross or be installed on land owned by someone else.",
  },
  {
    id: "is-my-address-stored",
    question: "Is my address stored?",
    answer:
      "We only use your address details to check network serviceability for your property and respond to your enquiry, without asking for payment or bank details.",
  },
] as const;

export default function AvailabilityQuestionsFaqs() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section
      id="faqs"
      className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            FAQS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Availability questions
          </h2>
        </div>

        {/* Two-Column FAQ Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
          {AVAILABILITY_FAQ_ITEMS.map((faq) => {
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
