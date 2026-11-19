"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const LEFT_FAQS: readonly FaqItem[] = [
  {
    question: "What are business call features?",
    answer:
      "Business call features are digital tools like call forwarding, time-based routing, menus, queues and voicemail that help your business manage incoming calls effectively.",
  },
  {
    question: "What is call forwarding?",
    answer:
      "Call forwarding sends an eligible incoming call to another destination, such as a colleague's desk, a mobile, or another number when you're busy or away.",
  },
  {
    question: "Can my business set opening hours?",
    answer:
      "Yes, time-based routing allows you to handle calls differently during opening hours, out of hours, and on public holidays.",
  },
  {
    question: "How is a menu different from a voicemail greeting?",
    answer:
      "A menu (auto-attendant) greets callers and lets them press options (like 'Press 1 for sales') to route their call, whereas a voicemail greeting simply plays a message when nobody is available to answer.",
  },
  {
    question: "What is a hunt group?",
    answer:
      "A hunt group (or ring group) is a group of phones that ring in a set pattern (all at once, in order, or rotating) so a call reaches someone who's free.",
  },
  {
    question: "Does Zoiko Telecom offer call recording?",
    answer:
      "Call recording and transcription are possible features subject to legal, security, and product approvals. They are never switched on by default.",
  },
  {
    question: "Can I choose any number as caller ID?",
    answer:
      "No. You can only show or withhold numbers your business owns or has permission to use, in compliance with UK caller ID rules.",
  },
  {
    question: "Will forwarding change how 999 calls work?",
    answer:
      "No. Menus and forwarding must never interfere with emergency 999 and 112 calls or your registered location.",
  },
  {
    question: "Are call features free?",
    answer:
      "Feature availability and costs vary depending on your specific plan and service tier. Some advanced features or forwarded legs may incur extra charges.",
  },
  {
    question: "How do I check what my current plan includes?",
    answer:
      "Contact our business support team with your account or bill reference ready, and we'll provide a confirmed review of your plan inclusions.",
  },
] as const;

const RIGHT_FAQS: readonly FaqItem[] = [
  {
    question: "Does every Zoiko Telecom plan include these features?",
    answer:
      "No. Feature availability depends on your selected voice service, tier, and plan configuration.",
  },
  {
    question: "Can calls go to a mobile when no one answers?",
    answer:
      "Yes, you can configure no-answer forwarding to route calls to a mobile or alternative destination, though additional call charges may apply.",
  },
  {
    question: "What is an auto-attendant?",
    answer:
      "An auto-attendant (or reception menu) greets callers with a recorded message and routes them based on their keypad selections.",
  },
  {
    question: "What is a call queue?",
    answer:
      "A call queue holds incoming calls in order while your team is busy, connecting them to the next available agent as soon as they become free.",
  },
  {
    question: "Does voicemail transcription come with my plan?",
    answer:
      "Transcription is a possible feature on select plans. Transcripts may contain limitations or errors and require appropriate privacy settings.",
  },
  {
    question: "Do recorded calls need a privacy notice?",
    answer:
      "Yes. Staff and callers must be properly notified when call recording or monitoring is active.",
  },
  {
    question: "Will call features work in a power cut?",
    answer:
      "Digital VoIP phones generally require mains power and a working broadband connection. You should arrange battery backup or alternative devices if relied upon for safety.",
  },
  {
    question: "Is CRM integration supported?",
    answer:
      "CRM integrations (linking calls to customer systems) depend on your specific software platform, plan capabilities, and data-processing review.",
  },
  {
    question: "Can I configure features online?",
    answer:
      "Self-service online management for forwarding, hours, and menus is coming soon. For now, our team will set up and update features for you.",
  },
  {
    question: "How can I get started?",
    answer:
      "Tell us about your opening hours, team structure, and call handling preferences by contacting our team to build a tailored plan outline.",
  },
] as const;

export default function CallFeaturesFaqs() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="w-full bg-[#F5F6FB] py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
            FAQs
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight text-[#131138] sm:text-4xl lg:text-[42px]">
            Call features questions
          </h2>
          <p className="mx-auto mt-3 max-w-[560px] text-sm text-[#545275] sm:text-base">
            Ask our team to confirm features, fees, prerequisites and any
            recording requirements for your specific service.
          </p>
        </div>

        {/* 2-Column Accordion Layout */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
          {/* Left Column FAQs */}
          <div className="space-y-4">
            {LEFT_FAQS.map((faq, index) => {
              const key = `left-${index}`;
              const isOpen = !!openItems[key];
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-[#ecebf4] bg-white shadow-[0_4px_16px_rgba(19,17,56,0.02)] transition"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(key)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-extrabold text-[#131138] transition hover:text-[#e6007e]"
                  >
                    <span>{faq.question}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f8f9fc] text-[#e6007e]">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs leading-5 text-[#545275] sm:text-sm">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column FAQs */}
          <div className="space-y-4">
            {RIGHT_FAQS.map((faq, index) => {
              const key = `right-${index}`;
              const isOpen = !!openItems[key];
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-[#ecebf4] bg-white shadow-[0_4px_16px_rgba(19,17,56,0.02)] transition"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(key)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-extrabold text-[#131138] transition hover:text-[#e6007e]"
                  >
                    <span>{faq.question}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f8f9fc] text-[#e6007e]">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs leading-5 text-[#545275] sm:text-sm">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
