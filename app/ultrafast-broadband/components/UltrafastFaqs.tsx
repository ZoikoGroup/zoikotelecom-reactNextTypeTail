"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: "what-is-ultrafast",
    question: "What is ultrafast broadband?",
    answer:
      "Ultrafast broadband generally refers to download speeds of 100Mbit/s or higher, allowing for seamless streaming, heavy gaming, and multiple connected devices at once.",
  },
  {
    id: "is-ultrafast-full-fibre",
    question: "Is ultrafast the same as full fibre?",
    answer:
      "Not necessarily. While full fibre (FTTP) is one of the main technologies capable of delivering ultrafast speeds, other technologies like cable (HFC) can also achieve ultrafast speeds depending on the network.",
  },
  {
    id: "do-i-need-ultrafast",
    question: "Do I need ultrafast?",
    answer:
      "It depends on your household. If you have multiple people streaming 4K video, gaming, and working from home simultaneously, ultrafast keeps everything running without slowdowns.",
  },
  {
    id: "can-i-get-ultrafast",
    question: "Can I get ultrafast at my address?",
    answer:
      "Availability depends entirely on your exact location and the infrastructure connected to your property. Neighbouring homes can sometimes have different options available.",
  },
  {
    id: "will-wifi-be-faster",
    question: "Will ultrafast make my Wi-Fi faster?",
    answer:
      "Ultrafast improves your maximum line speed coming into the home. Your Wi-Fi speed also depends on your router, distance from the router, thick walls, and device capabilities.",
  },
  {
    id: "what-does-mbit-mean",
    question: "What does Mbit/s mean?",
    answer:
      "Mbit/s stands for megabits per second, which measures how much data can be transferred per second. Higher numbers mean faster downloads and uploads.",
  },
  {
    id: "what-is-latency",
    question: "What is latency?",
    answer:
      "Latency is the delay or response time before data starts moving over your connection. Lower latency is especially important for online gaming and real-time video calls.",
  },
  {
    id: "will-price-rise",
    question: "Will my price rise during the contract?",
    answer:
      "Price rise policies depend on your provider and contract terms. Many providers apply annual price increases linked to inflation plus a percentage.",
  },
  {
    id: "how-do-i-switch",
    question: "How do I switch?",
    answer:
      "Switching is usually handled seamlessly under One Touch Switch guidelines where your new provider coordinates with your old provider. Always check for any exit fees first.",
  },
  {
    id: "does-affect-landline",
    question: "Does ultrafast affect my landline?",
    answer:
      "Many full fibre ultrafast connections use digital voice (VoIP) through your router rather than a traditional copper socket, meaning your phone plugs into your broadband router.",
  },
] as const;

export default function UltrafastFaqs() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            FAQS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Ultrafast questions
          </h2>
        </div>

        {/* Two-Column FAQ Grid */}
        <div className="mx-auto mt-12 grid max-w-[1300px] grid-cols-1 gap-4 md:grid-cols-2">
          {FAQ_ITEMS.map((faq) => {
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
