"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import SectionHeader from "./SectionHeader";

const FAQ_ITEMS = [
  {
    id: "cost-to-call-abroad",
    question: "How much does it cost to call abroad?",
    answer:
      "It depends on the country you call, the type of number, your plan, any connection charge and how calls are rounded. We don’t show rates online yet — ask us and we’ll give you current, confirmed rates.",
  },
  {
    id: "mobile-abroad-more-expensive",
    question: "Is calling a mobile abroad more expensive?",
    answer:
      "It can be. Calls to mobiles in some countries cost more than calls to landlines in the same country. Your rate details will show the difference.",
  },
  {
    id: "connection-charge",
    question: "What is a connection charge?",
    answer:
      "A connection charge is a one-off fee added when a call connects, on top of any per-minute rate. Not every call or plan has one — check your rate details.",
  },
  {
    id: "prices-include-vat",
    question: "Do prices include VAT?",
    answer:
      "Every rate we give you will say whether VAT is included, along with when it applies from and any exclusions.",
  },
  {
    id: "number-in-another-country",
    question: "Can I get a number in another country?",
    answer:
      "An international number is a separate service from international calling, with its own charges. Ask our team about the countries available.",
  },
  {
    id: "block-international-calls",
    question: "Can I block international calls?",
    answer:
      "Online controls such as destination restrictions or spending limits aren’t available yet. Contact us to talk about what can be set up for your service.",
  },
  {
    id: "satellite-phones",
    question: "Can I call satellite phones?",
    answer:
      "Satellite numbers are charged differently from standard international numbers and can cost much more. Ask us before you call one.",
  },
  {
    id: "business-options",
    question: "Can businesses get international call options?",
    answer:
      "Yes. International calls on business landlines or business voice are options to discuss with our business team.",
  },
  {
    id: "store-numbers-looked-up",
    question: "Do you store the numbers I look up?",
    answer:
      "No. We don’t record which countries you look up or store dialled numbers from this page, and we don’t ask for the number you want to call.",
  },
  {
    id: "can-rates-change",
    question: "Can rates change?",
    answer:
      "Yes, rates can change. Your plan’s terms explain how and when, and every rate we give you will show the date it applies from.",
  },
  {
    id: "calls-included",
    question: "Are any international calls included?",
    answer:
      "Some plans include international minutes to certain destinations. Check which countries and number types are included and what happens when the minutes run out.",
  },
  {
    id: "how-to-dial-abroad",
    question: "How do I dial a number abroad?",
    answer:
      "Start with 00 or +, add the country code, then add the number — usually without its first 0. For example, for France dial +33 then the number without its first 0.",
  },
  {
    id: "how-calls-rounded",
    question: "How are calls rounded?",
    answer:
      "Calls are charged in billing increments, which set how call time is rounded and whether there’s a minimum charge. You’ll find these in your rate details.",
  },
  {
    id: "same-as-roaming",
    question: "Is international calling the same as roaming?",
    answer:
      "No. International calling is calling abroad from the UK. Roaming is using your mobile while you’re outside the UK, and it’s charged under your mobile plan’s roaming terms.",
  },
  {
    id: "bill-higher-than-expected",
    question: "Why was my bill higher than expected?",
    answer:
      "Check which numbers were called and when, and whether your plan includes those destinations. Calls to mobiles, premium or special numbers can cost more. Contact billing support and we’ll explain the charges.",
  },
  {
    id: "premium-numbers-abroad",
    question: "Are premium numbers abroad expensive?",
    answer:
      "Premium and special numbers abroad can cost much more than standard numbers. Check before you call.",
  },
  {
    id: "territories",
    question: "Do territories cost the same as their country?",
    answer:
      "Not always. Some territories and number ranges are charged differently from their country. Ask us about any destination.",
  },
  {
    id: "cheapest-rate",
    question: "Will you show me the cheapest rate?",
    answer:
      "We don’t claim to be cheapest without evidence. We’ll give you clear, current rates so you can compare for yourself.",
  },
  {
    id: "usage-online",
    question: "Can I see my international usage online?",
    answer:
      "Not yet. Signing in to see international usage isn’t available. Contact us if you have a question about your calls.",
  },
  {
    id: "get-current-rates",
    question: "How do I get current rates?",
    answer:
      "Send us an enquiry with the countries you call and whether it’s for home or business. We’ll reply with current terms.",
  },
] as const;

const HALF = Math.ceil(FAQ_ITEMS.length / 2);
const FAQ_COLUMNS = [FAQ_ITEMS.slice(0, HALF), FAQ_ITEMS.slice(HALF)];

export default function InternationalCallingFaqs() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section id="faqs" className="w-full scroll-mt-24 bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader eyebrow="FAQS" title="International calling questions" className="max-w-2xl" />

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
