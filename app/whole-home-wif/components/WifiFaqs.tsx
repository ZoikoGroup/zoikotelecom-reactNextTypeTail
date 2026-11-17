"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const WIFI_FAQ_ITEMS = [
  {
    id: "why-is-wifi-weak-in-some-rooms",
    question: "Why is my Wi-Fi weak in some rooms?",
    answer:
      "Wireless signals can be blocked or weakened by thick walls, floors, metal, mirrors, or appliances located between your device and the router.",
  },
  {
    id: "will-a-mesh-system-fix-it",
    question: "Will a mesh system fix it?",
    answer:
      "Mesh systems use multiple units working as one network to spread Wi-Fi around larger or awkward homes, though results depend on your specific house layout.",
  },
  {
    id: "should-i-restart-my-router",
    question: "Should I restart my router?",
    answer:
      "Yes, restarting your main broadband router by unplugging it for 30 seconds can clear temporary glitches and help restore performance.",
  },
  {
    id: "do-i-need-a-new-router",
    question: "Do I need a new router?",
    answer:
      "If your current equipment is outdated or unable to keep up with your broadband plan and connected devices, our support team can advise on compatible options.",
  },
  {
    id: "is-wifi-speed-the-same-as-my-broadband-speed",
    question: "Is Wi-Fi speed the same as my broadband speed?",
    answer:
      "Not always. Your broadband speed is the connection reaching your router, while Wi-Fi speed depends on wireless interference, distance, and your device capabilities.",
  },
  {
    id: "whats-the-difference-between-2-4-ghz-and-5-ghz",
    question: "What’s the difference between 2.4 GHz and 5 GHz?",
    answer:
      "2.4 GHz covers a wider range and penetrates walls better but runs slower, while 5 GHz offers faster speeds over shorter distances with less interference.",
  },
  {
    id: "can-you-check-my-wifi-remotely",
    question: "Can you check my Wi-Fi remotely?",
    answer:
      "Our support team can review line status and router connectivity when you contact us with details about your setup.",
  },
  {
    id: "will-you-ask-for-my-wifi-password",
    question: "Will you ask for my Wi-Fi password?",
    answer:
      "No. We will never ask for your Wi-Fi or account password when you contact support.",
  },
] as const;

export default function WifiFaqs() {
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
            Wi-Fi questions
          </h2>
        </div>

        {/* Two-Column FAQ Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
          {WIFI_FAQ_ITEMS.map((faq) => {
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
