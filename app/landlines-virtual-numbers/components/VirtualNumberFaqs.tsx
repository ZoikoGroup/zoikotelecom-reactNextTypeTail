"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const VIRTUAL_NUMBER_FAQ_ITEMS = [
  {
    id: "what-is-a-virtual-number",
    question: "What is a virtual number?",
    answer:
      "A virtual number is a phone number that isn’t tied to one physical line. Calls to it are routed to a destination you choose, such as an office phone, a mobile or a business phone system.",
  },
  {
    id: "is-0800-free-to-call",
    question: "Is an 0800 number free to call?",
    answer:
      "Yes. 080 freephone numbers are free for callers from UK landlines and mobiles. Your business pays for the calls instead.",
  },
  {
    id: "what-do-084-087-cost-callers",
    question: "What do 084 and 087 numbers cost callers?",
    answer:
      "Callers pay their own provider’s access charge plus a service charge set by the number. The service charge must be shown clearly wherever you advertise the number.",
  },
  {
    id: "is-070-a-mobile-number",
    question: "Is a 070 number a mobile number?",
    answer:
      "No. 070 numbers are personal numbers, not mobiles, and can be expensive to call. They aren’t offered as a standard choice here.",
  },
  {
    id: "where-can-calls-be-sent",
    question: "Where can calls be sent?",
    answer:
      "Depending on the service, calls can go to an office phone, a mobile or a business phone system. Available destinations are confirmed by our team.",
  },
  {
    id: "outgoing-calls",
    question: "Can I make outgoing calls on a virtual number?",
    answer:
      "A virtual number is for receiving calls. It isn’t a line for making calls unless your service says so. Ask our team if you need outbound calling.",
  },
  {
    id: "keep-existing-number",
    question: "Can I keep my existing number?",
    answer:
      "Sometimes. We’ll check who owns the number, the number type and your current provider. Moving a number isn’t guaranteed, so keep your old service running until the move is confirmed.",
  },
  {
    id: "how-much-does-it-cost",
    question: "How much does a virtual number cost?",
    answer:
      "There’s no single headline price. Your quote can include rental, any set-up fee, usage, forwarding and VAT, and depends on contract length, how many numbers you need and where calls are sent.",
  },
  {
    id: "are-calls-recorded",
    question: "Are calls recorded?",
    answer:
      "No, calls aren’t recorded automatically. If recording becomes available, it will come with consent and retention rules.",
  },
  {
    id: "international-numbers",
    question: "Do you offer international numbers?",
    answer:
      "This page covers UK numbering only. International numbers are discussed separately — ask our team.",
  },
  {
    id: "which-number-type",
    question: "Which number type should I choose?",
    answer:
      "It depends on your goal. 01/02 numbers can give a local presence, 03 numbers give one national number at standard rates, and 080 numbers are free for UK callers. Our team can talk it through with you.",
  },
  {
    id: "do-03-numbers-cost-more",
    question: "Do 03 numbers cost callers more?",
    answer:
      "No. Calling an 03 number costs the same as calling an 01 or 02 number, and is often included in call bundles.",
  },
  {
    id: "can-i-get-a-030-number",
    question: "Can I get a 030 number?",
    answer:
      "030 numbers are reserved for public bodies and charities. If your organisation is eligible, our team can discuss it with you.",
  },
  {
    id: "choose-area-code",
    question: "Can I choose my area code?",
    answer:
      "You can ask for a specific UK area code with an 01 or 02 number. Availability is confirmed by our team. An area code doesn’t prove you have premises in that area.",
  },
  {
    id: "out-of-hours-routing",
    question: "Can I route calls differently out of hours?",
    answer:
      "Different routing in and out of office hours may be possible, depending on the service. Ask our team what’s supported.",
  },
  {
    id: "call-999",
    question: "Can I call 999 from a virtual number?",
    answer:
      "A virtual inbound number isn’t a guaranteed 999-enabled line. Make sure your business has a phone line that can call emergency services.",
  },
  {
    id: "how-long-to-get-a-number",
    question: "How long does it take to get a number?",
    answer:
      "Numbers aren’t issued instantly from this page. Timings depend on the number type, any checks needed and whether you’re moving an existing number. Our team will confirm.",
  },
  {
    id: "show-number-when-calling-out",
    question: "Can I show the number when I call out?",
    answer:
      "You can only display a number as your caller ID if you have the right to use it. We check this to help prevent spoofing.",
  },
  {
    id: "more-than-one-number",
    question: "Can I have more than one number?",
    answer:
      "Yes, you can ask about more than one number. How many you need is one of the things your quote depends on.",
  },
  {
    id: "how-do-i-get-started",
    question: "How do I get started?",
    answer:
      "Send us an enquiry with your business email and what you need. Our team will be in touch — no ID documents are needed at this stage.",
  },
] as const;

const HALF = Math.ceil(VIRTUAL_NUMBER_FAQ_ITEMS.length / 2);
const FAQ_COLUMNS = [
  VIRTUAL_NUMBER_FAQ_ITEMS.slice(0, HALF),
  VIRTUAL_NUMBER_FAQ_ITEMS.slice(HALF),
];

export default function VirtualNumberFaqs() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section
      id="faqs"
      className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            FAQS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Virtual number questions
          </h2>
        </div>

        {/* Two fixed columns, filled top-to-bottom to match the design */}
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
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors"
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
          ))}
        </div>
      </div>
    </section>
  );
}
