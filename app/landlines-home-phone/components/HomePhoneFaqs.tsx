"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import SectionHeader from "./SectionHeader";

const FAQ_ITEMS = [
  {
    id: "power-cut",
    question: "Will my home phone work in a power cut?",
    answer:
      "A digital landline generally needs mains-powered equipment, so calls may not work during a power cut unless you have a backup. If you rely on your landline, ask us about a backup solution.",
  },
  {
    id: "telecare-alarm",
    question: "I have a telecare alarm. What should I do?",
    answer:
      "Before any change to your landline, contact your device supplier or care provider, tell us you use the device, and don’t switch until you know it will keep working.",
  },
  {
    id: "existing-phone",
    question: "Will my existing phone work?",
    answer:
      "Many existing phones work, usually plugged into your router or a small adapter, but compatibility isn’t guaranteed. We’ll check with you.",
  },
  {
    id: "cost",
    question: "How much does a home phone cost?",
    answer:
      "Home phone plans aren’t listed on this page yet. Our team can tell you what’s available, with the monthly charge, call rates, equipment and any price rises shown in full.",
  },
  {
    id: "international-calls",
    question: "Are international calls included?",
    answer:
      "It depends on the plan. Ask about rates for international and premium numbers before you choose — see our international calls page for how charges work.",
  },
  {
    id: "call-999-112",
    question: "Can I still call 999 or 112?",
    answer:
      "Yes, while your equipment has power and a connection. In a power cut, providers must offer eligible landline-dependent customers a free solution giving at least one hour of access to emergency services.",
  },
  {
    id: "keep-number",
    question: "Can I keep my phone number?",
    answer:
      "You may be able to. It’s a request your current and new providers must confirm. Don’t cancel your current line yourself — you could lose your number.",
  },
  {
    id: "need-broadband",
    question: "Do I need broadband for a digital landline?",
    answer:
      "Digital landlines carry calls as data through your broadband connection and router, so you’ll usually need a working internet connection.",
  },
  {
    id: "switch-provider",
    question: "How do I switch provider?",
    answer:
      "For most home landline switches, One Touch Switch means you only contact your new provider, who arranges it with your old one.",
  },
  {
    id: "stops-working",
    question: "What if my landline stops working?",
    answer:
      "Check your router has power and its lights are on, check the phone is plugged into the right port, and if it’s safe, restart the router once. Still not working? Contact us.",
  },
] as const;

const HALF = Math.ceil(FAQ_ITEMS.length / 2);
const FAQ_COLUMNS = [FAQ_ITEMS.slice(0, HALF), FAQ_ITEMS.slice(HALF)];

export default function HomePhoneFaqs() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFaq = (id: string) =>
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));

  return (
    <section id="faqs" className="w-full scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader eyebrow="FAQS" title="Home phone questions" className="max-w-2xl" />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
          {FAQ_COLUMNS.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4">
              {column.map((faq) => {
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
                      <span className="text-sm font-bold text-[#11183C] sm:text-base">{faq.question}</span>
                      <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FCE8F1] text-[#E11D74]">
                        {isOpen ? <Minus className="h-4 w-4" strokeWidth={2.5} /> : <Plus className="h-4 w-4" strokeWidth={2.5} />}
                      </span>
                    </button>
                    {isOpen && (
                      <div id={panelId} className="border-t border-[#EEF0F7] px-6 py-4 text-sm leading-relaxed text-[#4B5563]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
