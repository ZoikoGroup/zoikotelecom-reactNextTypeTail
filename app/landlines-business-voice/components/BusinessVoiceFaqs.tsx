"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Minus, Plus, Printer } from "lucide-react";
import SectionHeader from "./SectionHeader";

const BUSINESS_VOICE_FAQ_ITEMS = [
  {
    id: "what-is-business-voip",
    question: "What is business VoIP?",
    answer:
      "Business VoIP carries your calls over an internet connection instead of a traditional phone line. Your team can answer on desk phones, apps or mobiles, depending on the service.",
  },
  {
    id: "keep-business-number",
    question: "Can I keep my business number?",
    answer:
      "You can ask to. Moving a number is a request that has to be checked by the operators involved, so it isn’t guaranteed. Don’t cancel your current service until the transfer is confirmed.",
  },
  {
    id: "need-new-phones",
    question: "Do I need new phones?",
    answer:
      "Not always. Some existing handsets may work, and many people use apps or softphones instead. Our team confirms handset compatibility with you.",
  },
  {
    id: "power-cut",
    question: "Will it work in a power cut?",
    answer:
      "VoIP depends on power and broadband, so it may not work in a power cut. Talk to us about practical protection such as backup power or a mobile alternative.",
  },
  {
    id: "calls-recorded",
    question: "Can calls be recorded?",
    answer:
      "Call recording is only offered where it’s been approved for a service, with clear controls for telling callers, how long recordings are kept and who can access them.",
  },
  {
    id: "several-sites",
    question: "We have several sites. Is that OK?",
    answer:
      "Yes. Each site needs its own address, numbers and a plan for local emergency access. We’ll review this with you.",
  },
  {
    id: "keep-phone-system",
    question: "Can we keep our existing phone system?",
    answer:
      "It depends on your system and the service you choose. Tell us what you use today — for example a traditional line, SIP trunk or hosted system — and we’ll check.",
  },
  {
    id: "minimum-contract",
    question: "Is there a minimum contract?",
    answer:
      "Contract length depends on the service. You’ll see the contract length, renewal terms and cancellation terms in writing before you agree.",
  },
  {
    id: "fax-and-alarms",
    question: "What about fax machines or alarms?",
    answer:
      "Alarms, lift lines, fax, card terminals and monitoring equipment can rely on your phone lines. Tell us what you have — even if you’re not sure — and we’ll check together.",
  },
  {
    id: "home-users",
    question: "Do you sell to home users?",
    answer:
      "This page is for business customers. For a home phone, see our landlines pages, which explain digital landlines in plain English.",
  },
] as const;

export default function BusinessVoiceFaqs() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section id="faqs" className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader eyebrow="FAQS" title="Business voice questions" className="max-w-2xl" />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col gap-3">
            {BUSINESS_VOICE_FAQ_ITEMS.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              const panelId = `${faq.id}-answer`;

              return (
                <div
                  key={faq.id}
                  className="overflow-hidden rounded-2xl border border-[#E6E9F2] bg-white shadow-[0_2px_10px_rgba(17,24,60,0.02)] transition-colors hover:border-[#DCE1F0]"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFaq(faq.id)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-sm font-bold text-[#11183C] sm:text-base">
                      {faq.question}
                    </span>
                    <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FCE8F1] text-[#E11D74]">
                      {isOpen ? (
                        <Minus className="h-4 w-4" strokeWidth={2.5} />
                      ) : (
                        <Plus className="h-4 w-4" strokeWidth={2.5} />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={panelId}
                      className="border-t border-[#EEF0F7] px-6 py-4 text-sm leading-relaxed text-[#4B5563]"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="relative hidden min-h-[480px] overflow-hidden rounded-3xl lg:block">
            <Image
              src="/Images/landlines-business-voice/faq-man-on-phone.webp"
              alt="Man taking a business call at his desk"
              fill
              sizes="45vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-8 text-center print:hidden">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-xl border border-[#11183C] bg-white px-5 py-2.5 text-sm font-bold text-[#11183C] transition-colors hover:bg-[#F5F6FB]"
          >
            <Printer className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            Print or save a text summary
          </button>
        </div>
      </div>
    </section>
  );
}
