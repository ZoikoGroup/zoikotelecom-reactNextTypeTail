"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const SPEED_TEST_FAQ_ITEMS = [
  {
    id: "why-is-speed-test-lower",
    question: "Why is my speed test lower than my plan?",
    answer:
      "Browser speed tests measure the real-time throughput on your specific device at that moment. Wi-Fi interference, background app activity, distance from your router, and network congestion can all cause test results to appear lower than your maximum headline contract speed.",
  },
  {
    id: "is-phone-speed-test-accurate",
    question: "Is a speed test on my phone accurate?",
    answer:
      "Testing on a phone reflects your device and wireless connection quality rather than your home line capacity. Wireless signals are easily affected by walls, distance, and interference.",
  },
  {
    id: "how-many-times-should-i-test",
    question: "How many times should I test?",
    answer:
      "It is best to take several readings at different times of the day to get an accurate average, as network traffic fluctuates.",
  },
  {
    id: "what-is-a-good-latency",
    question: "What is a good latency?",
    answer:
      "Lower latency is better for real-time applications like video calls and gaming. Generally, under 30 milliseconds is considered very good for most online activities.",
  },
  {
    id: "should-i-turn-off-my-vpn",
    question: "Should I turn off my VPN?",
    answer:
      "Personal VPNs route your traffic through remote servers, which can lower your speed test results. You can temporarily disable personal VPNs during testing, but keep any security tools required by your work or school active.",
  },
  {
    id: "does-wifi-slow-my-speed",
    question: "Does Wi-Fi slow my speed?",
    answer:
      "Yes. Wireless speeds are typically lower than wired Ethernet connections due to signal degradation caused by distance, walls, and competing household devices.",
  },
  {
    id: "will-upgrading-plan-fix-slow-wifi",
    question: "Will upgrading my plan fix slow Wi-Fi?",
    answer:
      "Upgrading your line speed increases the total bandwidth reaching your router, but if your Wi-Fi signal is blocked by thick walls or interference, upgrading alone may not improve wireless performance in distant rooms.",
  },
  {
    id: "can-you-test-my-line-for-me",
    question: "Can you test my line for me?",
    answer:
      "We provide tools and guidance to record your own tests, and our support team can review your logged readings and help diagnose line issues when you contact us.",
  },
] as const;

export default function SpeedTestFaqs() {
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
            Speed test questions
          </h2>
        </div>

        {/* Two-Column FAQ Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
          {SPEED_TEST_FAQ_ITEMS.map((faq) => {
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
