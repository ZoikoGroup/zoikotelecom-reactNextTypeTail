"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const LEFT_FAQS: readonly FaqItem[] = [
  {
    question: "What is a business voice bundle?",
    answer:
      "A business voice bundle combines your phone lines, user seats, call allowances, and features into a unified package tailored for your business needs.",
  },
  {
    question: "Which calls are included?",
    answer:
      "Standard UK landline calls (01, 02) and UK mobile calls (07) are typically included depending on your specific plan.",
  },
  {
    question: "Are international calls included?",
    answer:
      "International calls are generally excluded unless your specific plan includes certain international destinations.",
  },
  {
    question: "What happens if I use more than my allowance?",
    answer:
      "Any calls made outside your allowance or over fair-use limits are charged separately according to standard listed rates.",
  },
  {
    question: "Can I keep my current business number?",
    answer:
      "Yes, number porting is usually possible subject to eligibility and coordination with your current provider.",
  },
  {
    question: "Is a handset included?",
    answer:
      "Handsets and equipment depend on your chosen setup and can be included or quoted separately as needed.",
  },
  {
    question: "How much does a voice bundle cost?",
    answer:
      "Costs vary depending on the number of lines, user seats, features, and call allowances. A custom itemized quote is provided for your exact requirements.",
  },
  {
    question: "How long is the contract?",
    answer:
      "Small business contracts are capped at a maximum of 24 months, with shorter or flexible terms available depending on the plan.",
  },
  {
    question: "Can I bundle voice with broadband or mobile?",
    answer:
      "Yes, you can combine your voice service with business broadband or mobile plans under a single supplier relationship.",
  },
  {
    question: "Can I compare voice bundles online?",
    answer:
      "Online comparison isn't available yet as prices and allowances are confirmed by our team in a tailored quote.",
  },
] as const;

const RIGHT_FAQS: readonly FaqItem[] = [
  {
    question: "Does Zoiko Telecom offer inclusive call bundles?",
    answer:
      "Yes, we offer various inclusive call bundles tailored to your calling habits and business size.",
  },
  {
    question: "Are all calls unlimited?",
    answer:
      "No calls are automatically unlimited; plans are subject to fair-use limits and specific number type exclusions.",
  },
  {
    question: "Does a voice bundle include mobile roaming?",
    answer:
      "Mobile roaming is managed through mobile plans and is typically separate from landline voice bundles unless specified.",
  },
  {
    question: "Does a voice bundle include a phone number?",
    answer:
      "Yes, every voice bundle includes either new numbers or kept numbers from your previous provider.",
  },
  {
    question: "Do I need an internet connection?",
    answer:
      "Digital voice services require a reliable broadband internet connection at each site to function properly.",
  },
  {
    question: "Are voicemail, menus and call queues included?",
    answer:
      "Features depend on your tier; standard features include voicemail, while advanced queues and menus can be added.",
  },
  {
    question: "Do I pay VAT?",
    answer:
      "VAT is applicable depending on your business status and is clearly shown in your itemized quote.",
  },
  {
    question: "Does adding minutes restart my contract?",
    answer:
      "Adding minutes or features should never restart your contract term without your explicit agreement.",
  },
  {
    question: "What happens in a power cut?",
    answer:
      "Digital voice equipment relies on electricity and may stop working during a power outage unless battery backup is provided.",
  },
  {
    question: "I already have a Zoiko voice service. How do I get help?",
    answer:
      "You can contact our support team directly or review your account and billing references for assistance.",
  },
] as const;

export default function VoiceBundleFaqs() {
  const [openLeft, setOpenLeft] = useState<Record<number, boolean>>({});
  const [openRight, setOpenRight] = useState<Record<number, boolean>>({});

  const toggleLeft = (index: number) => {
    setOpenLeft((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleRight = (index: number) => {
    setOpenRight((prev) => ({ ...prev, [index]: !prev[index] }));
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
            Voice bundle questions
          </h2>
        </div>

        {/* Two Columns FAQ Accordion */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-4">
            {LEFT_FAQS.map((faq, index) => {
              const isOpen = !!openLeft[index];
              return (
                <div
                  key={faq.question}
                  className="rounded-[20px] border border-[#ecebf4] bg-white shadow-[0_4px_16px_rgba(19,17,56,0.03)] transition"
                >
                  <button
                    type="button"
                    onClick={() => toggleLeft(index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-extrabold text-[#131138] sm:p-6"
                  >
                    <span>{faq.question}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fdf5fa] text-[#e6007e]">
                      {isOpen ? (
                        <Minus className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-[#f0f1f6] px-5 py-4 text-xs leading-5 text-[#545275] sm:px-6 sm:text-sm">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {RIGHT_FAQS.map((faq, index) => {
              const isOpen = !!openRight[index];
              return (
                <div
                  key={faq.question}
                  className="rounded-[20px] border border-[#ecebf4] bg-white shadow-[0_4px_16px_rgba(19,17,56,0.03)] transition"
                >
                  <button
                    type="button"
                    onClick={() => toggleRight(index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-extrabold text-[#131138] sm:p-6"
                  >
                    <span>{faq.question}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fdf5fa] text-[#e6007e]">
                      {isOpen ? (
                        <Minus className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-[#f0f1f6] px-5 py-4 text-xs leading-5 text-[#545275] sm:px-6 sm:text-sm">
                      {faq.answer}
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
