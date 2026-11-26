"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

type Audience = "personal" | "business";

interface FaqItem {
  question: string;
  answer: string;
}

const faqsByAudience: Record<Audience, FaqItem[]> = {
  personal: [
    {
      question: "What is an eSIM?",
      answer:
        "An eSIM is a digital SIM built into compatible devices that lets you activate a mobile plan without inserting a physical plastic SIM card.",
    },
    {
      question: "Why is my Wi-Fi slower than my broadband line?",
      answer:
        "Wi-Fi speeds can be affected by distance from your router, wall interference, network congestion, or older device hardware—even when your line speed is strong.",
    },
    {
      question: "When is my bill due?",
      answer:
        "Your billing date depends on when your service was activated and is listed on each monthly statement as well as inside your account dashboard.",
    },
    {
      question: "Can I cancel at any time?",
      answer:
        "Rolling plans can generally be cancelled before your next billing period, while fixed-term contracts may include an early termination fee.",
    },
  ],
  business: [
    {
      question: "What is an eSIM?",
      answer:
        "An eSIM is a digital SIM built into compatible business handsets and tablets, enabling remote provisioning and easier multi-line management.",
    },
    {
      question: "Why is my Wi-Fi slower than my broadband line?",
      answer:
        "Office layout, wireless channel overlap, high device density, or router placement can limit Wi-Fi throughput below your leased or business broadband capacity.",
    },
    {
      question: "When is my bill due?",
      answer:
        "Business invoice due dates follow your agreed payment terms and appear clearly on every invoice and in your billing portal.",
    },
    {
      question: "Can I cancel at any time?",
      answer:
        "Cancellation terms depend on your business agreement—rolling services can typically be ended with notice, while minimum-term contracts may carry remaining charges.",
    },
  ],
};

export default function PopularQuestions() {
  const [audience, setAudience] = useState<Audience>("personal");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = faqsByAudience[audience];

  const handleSwitchAudience = (next: Audience) => {
    setAudience(next);
    setOpenIndex(null);
  };

  return (
    <section
      id="popular-questions"
      className="w-full bg-[#F8F8FB] px-4 py-14 text-[#18133E] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Header */}
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6E6A85]">
            Popular questions
          </p>
          <h2 className="mt-2.5 text-[32px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#18133E] sm:text-[42px]">
            Questions people often ask
          </h2>
          <p className="mt-2.5 text-[13.5px] text-[#7A7691]">
            Chosen by our editors — not ranked by popularity data.
          </p>
        </div>

        {/* Segmented Personal / Business Toggle */}
        <div className="mt-7 flex justify-center">
          <div
            role="tablist"
            aria-label="Audience"
            className="inline-flex items-center rounded-xl bg-[#ECEAF3] p-1"
          >
            <button
              type="button"
              role="tab"
              aria-selected={audience === "personal"}
              onClick={() => handleSwitchAudience("personal")}
              className={`rounded-[9px] px-4 py-1.5 text-[12px] font-semibold transition-all ${
                audience === "personal"
                  ? "bg-white text-[#18133E] shadow-[0_2px_6px_rgba(24,19,62,0.08)]"
                  : "text-[#7A7691] hover:text-[#18133E]"
              }`}
            >
              Personal
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={audience === "business"}
              onClick={() => handleSwitchAudience("business")}
              className={`rounded-[9px] px-4 py-1.5 text-[12px] font-semibold transition-all ${
                audience === "business"
                  ? "bg-white text-[#18133E] shadow-[0_2px_6px_rgba(24,19,62,0.08)]"
                  : "text-[#7A7691] hover:text-[#18133E]"
              }`}
            >
              Business
            </button>
          </div>
        </div>

        {/* 2x2 FAQ Grid */}
        <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className="rounded-xl border border-[#ECEAF2] bg-white shadow-[0_4px_16px_rgba(24,19,62,0.03)] transition-shadow hover:shadow-[0_6px_22px_rgba(24,19,62,0.06)]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-[18px]"
                >
                  <span className="text-[14.5px] font-bold leading-snug text-[#18133E] sm:text-[15px]">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EFEAFE] text-[#7C3AED] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus
                      className="h-3.5 w-3.5 stroke-[2.5]"
                      aria-hidden="true"
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[#F1EFF6] px-5 pb-4 pt-3 text-[13px] leading-[1.6] text-[#55506E] sm:px-6">
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
