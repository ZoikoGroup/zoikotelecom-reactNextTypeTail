"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const sectionContent = {
  id: "call-features-faqs",
  step: "05",
  eyebrow: "QUESTIONS",
  headingPrefix: "Call Features ",
  headingAccent: "FAQs",
} as const;

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: readonly FaqItem[] = [
  {
    id: "what-are-call-features",
    question: "What are call features?",
    answer:
      "Call features are calling controls and extras — such as call forwarding, voicemail, caller ID, call waiting, call barring and business schedules — subject to your service, plan and permissions.",
  },
  {
    id: "are-all-features-included",
    question: "Are all features included?",
    answer:
      "Not every feature is included automatically or available on every service or plan; availability, scope and charges depend on your specific setup.",
  },
  {
    id: "can-i-forward-calls",
    question: "Can I forward calls?",
    answer:
      "Where supported on your line, user, site or SIP setup, calls can be forwarded to another destination, though forwarded calls may incur charges depending on where they go.",
  },
  {
    id: "can-i-change-my-caller-id",
    question: "Can I change my caller ID?",
    answer:
      "Caller ID presentation and privacy options depend on your service and rules; only identities authorised for your service can be used, and emergency services still receive your details.",
  },
  {
    id: "can-i-turn-off-voicemail",
    question: "Can I turn off voicemail?",
    answer:
      "Where supported and authorised, voicemail can be toggled off, though before doing so you should check what happens to saved messages and shared mailboxes.",
  },
  {
    id: "what-if-a-change-fails",
    question: "What if a change fails?",
    answer:
      "A change isn’t treated as applied until confirmed on the network; if a request doesn’t go through or needs assistance, contact our support team with your reference details.",
  },
] as const;

export default function CallFeaturesFaqsSection() {
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
      className="w-full bg-[#FFFFFF] px-4 py-14 sm:px-8 lg:px-12"
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
