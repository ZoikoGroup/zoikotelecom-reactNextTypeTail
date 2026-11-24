"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import SectionHeader from "./SectionHeader";

const FAQ_ITEMS = [
  {
    id: "what-is-protection",
    question: "What is device protection?",
    answer:
      "Device protection is an umbrella term people use for statutory consumer rights, manufacturer warranties, repair services and optional device insurance. They have different rules, costs and limits.",
  },
  {
    id: "insurance-vs-warranty",
    question: "Is device insurance the same as a warranty?",
    answer:
      "No. A manufacturer warranty is the maker’s promise against hardware defects for a set period, whereas optional insurance is a regulated policy that may cover events like accidental damage, theft or loss depending on the wording.",
  },
  {
    id: "manufacturing-fault",
    question: "What if my phone has a manufacturing fault?",
    answer:
      "Under UK consumer law, remedies for faulty goods sit with the seller — and you never need paid insurance to use your statutory rights. You can also check any manufacturer warranty.",
  },
  {
    id: "theft-automatically-covered",
    question: "Is theft automatically covered?",
    answer:
      "No. Theft is only covered if you hold a policy that expressly includes theft, and policies commonly require quick notification, a police crime reference number and SIM/IMEI barring.",
  },
  {
    id: "cosmetic-scratches",
    question: "Would cosmetic scratches be included?",
    answer:
      "Usually not. Minor scratches, dents and everyday wear and tear that do not affect how the device works are commonly excluded from warranties and insurance policies.",
  },
  {
    id: "protection-cost",
    question: "How much would protection cost?",
    answer:
      "Consumer rights are free by law. Repair costs depend on the device and fault, and no Zoiko insurance policy is priced or offered on this page — always check the premium, total term cost and excess in any policy documents.",
  },
  {
    id: "cover-start-end",
    question: "When would cover start and end?",
    answer:
      "Start dates, cooling-off periods, renewal terms and cancellation rules are set out in the provider’s policy schedule and IPID. Read those before buying.",
  },
  {
    id: "how-to-claim",
    question: "How can I claim?",
    answer:
      "There is no Zoiko claim service on this page. If you already hold cover, contact your insurer or policy administrator using the secure route in your policy wording.",
  },
  {
    id: "airtime-change",
    question: "Does my airtime change if I buy protection?",
    answer:
      "No. Optional device protection is always separate from your mobile airtime plan and your handset agreement.",
  },
  {
    id: "insurance-complaints",
    question: "How are insurance complaints handled?",
    answer:
      "Regulated insurers and distributors must explain their complaints procedure and how eligible complaints can be escalated (for example to the Financial Ombudsman Service) inside their policy documents.",
  },
] as const;

export default function ProtectionFaqs() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFaq = (id: string) =>
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));

  return (
    <section id="faqs" className="w-full scroll-mt-24 bg-[#F5F6FB] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader eyebrow="FAQs" title="Device protection questions" className="max-w-2xl" />

        <div className="mt-12 grid grid-cols-1 items-start gap-x-6 gap-y-3.5 md:grid-cols-2">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            const panelId = `${faq.id}-answer`;
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-2xl border border-[#E3E6F2] bg-white transition-colors hover:border-[#D4D9EC]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between px-[22px] py-[18px] text-left"
                >
                  <span className="text-sm font-semibold text-[#0A1446] sm:text-base">{faq.question}</span>
                  {isOpen ? (
                    <Minus className="ml-4 h-4 w-4 shrink-0 text-[#E0127C]" strokeWidth={2.5} aria-hidden="true" />
                  ) : (
                    <Plus className="ml-4 h-4 w-4 shrink-0 text-[#E0127C]" strokeWidth={2.5} aria-hidden="true" />
                  )}
                </button>
                {isOpen && (
                  <div
                    id={panelId}
                    className="border-t border-[#EEF0F7] px-[22px] py-4 text-sm leading-relaxed text-[#3A4268]"
                  >
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
