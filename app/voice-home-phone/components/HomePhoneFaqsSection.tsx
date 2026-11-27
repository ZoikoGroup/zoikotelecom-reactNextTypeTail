"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const sectionContent = {
  id: "home-phone-faqs",
  step: "05",
  eyebrow: "QUESTIONS",
  headingPrefix: "Home Phone ",
  headingAccent: "FAQs",
} as const;

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: readonly FaqItem[] = [
  {
    id: "what-is-digital-home-phone",
    question: "What is a digital home phone?",
    answer:
      "A digital home phone is a home calling service delivered over a digital connection rather than a traditional copper line. Equipment requirements, power needs and internet dependency vary depending on the service.",
  },
  {
    id: "what-happens-in-power-cut-or-outage",
    question: "What happens in a power cut or internet outage?",
    answer:
      "A digital home phone usually stops working during a power cut or if your internet connection goes down. If you rely on your landline for emergency calls or a care alarm, speak with our team before making any changes.",
  },
  {
    id: "can-i-get-standalone-home-phone",
    question: "Can I get a standalone home phone without broadband?",
    answer:
      "Standalone home phone without broadband isn’t confirmed. Availability depends on your exact address and service options, which we check with you before placing any order.",
  },
  {
    id: "can-i-keep-my-number",
    question: "Can I keep my existing home phone number?",
    answer:
      "Keeping your number is usually possible when switching, subject to checks on your current provider, linked services, authority and transfer sequence.",
  },
  {
    id: "will-my-care-alarm-work",
    question: "Will my care alarm or security equipment work?",
    answer:
      "Connected equipment such as care alarms or security alarms can be affected when moving to a digital service. Check compatibility with us and inform your alarm supplier before anything changes.",
  },
  {
    id: "how-do-i-get-advice-before-ordering",
    question: "How do I get advice before ordering?",
    answer:
      "Every route starts with advice rather than an automated order. Contact our team or check availability for your address so we can review safety checkpoints and compatibility together.",
  },
] as const;

export default function HomePhoneFaqsSection() {
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
