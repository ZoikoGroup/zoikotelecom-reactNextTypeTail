"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import SectionHeader from "./SectionHeader";

const FAQ_ITEMS = [
  {
    id: "family-discount",
    question: "Is there a family discount?",
    answer:
      "No multi-line discount is applied in the plan builder on this page. Any eligible multi-line offer will be shown in your confirmed quote.",
  },
  {
    id: "share-data",
    question: "Can lines share data?",
    answer:
      "Each line has its own data allowance unless your confirmed plan says otherwise. Ask our team whether shared allowances are available.",
  },
  {
    id: "children-line",
    question: "Can children have a line?",
    answer:
      "The account owner holds the account and agrees the contract, and a line can be used day to day by someone else in your household. Ask our team about any age requirements for line users.",
  },
  {
    id: "one-bill",
    question: "Will everything be on one bill?",
    answer:
      "Ask our team. Whether lines are on one bill or several, and who pays for which line, is confirmed before you agree.",
  },
  {
    id: "business-lines",
    question: "Is this for business lines?",
    answer:
      "This page is for household and personal lines. Business lines have their own route — see our business pages or talk to our team.",
  },
] as const;

export default function MultiLineFaqs() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFaq = (id: string) =>
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));

  return (
    <section id="faqs" className="w-full scroll-mt-24 bg-[#F7F7FA] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1220px]">
        <SectionHeader eyebrow="FAQS" title="Multi-line questions" className="max-w-2xl" />

        <div className="mt-6 grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              const panelId = `${faq.id}-answer`;
              return (
                <div key={faq.id} className="overflow-hidden rounded-2xl border border-[#ECEDF3] bg-white">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFaq(faq.id)}
                    className="flex w-full items-center justify-between px-6 py-6 text-left"
                  >
                    <span className="text-base font-semibold text-[#1C1A33]">{faq.question}</span>
                    <span className="ml-4 text-[#A3227F]">
                      {isOpen ? <Minus className="h-4 w-4" strokeWidth={2.5} /> : <Plus className="h-4 w-4" strokeWidth={2.5} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div id={panelId} className="border-t border-[#ECEDF3] px-6 py-4 text-sm leading-relaxed text-[#5F6275]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="relative hidden aspect-[616/372] w-full overflow-hidden lg:block">
            <Image
              src="/Images/multi-line-plans/faq-question-marks.webp"
              alt="Paper speech bubbles with question marks"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
