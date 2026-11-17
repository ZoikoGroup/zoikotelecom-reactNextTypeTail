"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FULL_FIBRE_FAQ_ITEMS = [
  {
    id: "what-is-full-fibre-fttp",
    question: "What is full fibre (FTTP)?",
    answer:
      "Full fibre (FTTP - Fibre to the Premises) runs pure fibre-optic cable directly from the local exchange all the way into your home, replacing old copper wires with light-based data transmission.",
  },
  {
    id: "is-full-fibre-available-address",
    question: "Is full fibre available at my address?",
    answer:
      "Full fibre rollout is ongoing across the UK. Availability depends on whether your street and property have been connected to the new fibre network infrastructure.",
  },
  {
    id: "how-fast-is-full-fibre",
    question: "How fast is full fibre?",
    answer:
      "Full fibre offers significantly higher speeds than traditional copper-based broadband, often ranging from 150 Mbps to over 1 Gbps (1,000 Mbps), with matching or very fast upload speeds.",
  },
  {
    id: "does-installation-need-engineer",
    question: "Does installation need an engineer?",
    answer:
      "Yes, most full fibre installations require an engineer visit to run the fibre cable to your property, install an internal termination box (ONT), and set up your new equipment.",
  },
  {
    id: "do-i-need-landline-full-fibre",
    question: "Do I need a landline for full fibre?",
    answer:
      "No. Full fibre operates entirely over fibre-optic lines, meaning a traditional copper telephone line is not required unless you choose to bundle a digital VoIP landline service.",
  },
  {
    id: "will-my-wifi-be-faster",
    question: "Will my Wi-Fi be faster?",
    answer:
      "While full fibre dramatically increases your incoming line speed, your actual Wi-Fi performance also depends on your router positioning, home layout, walls, and device capabilities.",
  },
  {
    id: "how-much-does-it-cost",
    question: "How much does it cost?",
    answer:
      "Full fibre prices vary depending on the provider, speed tier, and contract length. Promotional deals and introductory rates are common, with all fees shown clearly before you sign.",
  },
  {
    id: "can-i-switch-easily",
    question: "Can I switch easily?",
    answer:
      "Switching is straightforward, especially between providers on compatible networks using the One Touch Switch process, which handles coordinating your old and new services.",
  },
] as const;

export default function FullFibreFaqs() {
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
            Full-fibre questions
          </h2>
        </div>

        {/* Two-Column FAQ Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
          {FULL_FIBRE_FAQ_ITEMS.map((faq) => {
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
