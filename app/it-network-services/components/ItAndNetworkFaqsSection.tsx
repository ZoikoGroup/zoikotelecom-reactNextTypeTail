"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const sectionContent = {
  step: "06",
  eyebrow: "QUESTIONS",
  headingPrefix: "IT & Network ",
  headingAccent: "FAQs",
} as const;

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: readonly FaqItem[] = [
  {
    id: "it-and-network-services-discuss",
    question: "What IT and network services can I discuss?",
    answer:
      "You can discuss network design and connectivity, managed network operations, IT service requirements, and security and resilience needs — framed around scoping rather than a catalogue of fixed products.",
  },
  {
    id: "buy-managed-network-online",
    question: "Can I buy a managed network online?",
    answer:
      "No. Managed network and IT requirements are reviewed site by site with an engineer and scoped in a written proposal rather than purchased directly online.",
  },
  {
    id: "guaranteed-response-time",
    question: "Do you offer a guaranteed response time?",
    answer:
      "No guaranteed response or restoration target is made on this page. Response targets differ from restoration targets and apply only when agreed in writing for accepted services.",
  },
  {
    id: "send-network-diagram",
    question: "Should I send our network diagram?",
    answer:
      "Please do not enter passwords, IP addresses, credentials, unredacted configs or network diagrams in a public form; share high-level needs first.",
  },
  {
    id: "several-sites-how-it-works",
    question: "We have several sites — how does that work?",
    answer:
      "Each site is assessed on its own, as network availability at an address is not the same as eligibility for a managed service.",
  },
  {
    id: "existing-customer-with-problem",
    question: "I’m an existing customer with a problem — where do I go?",
    answer:
      "Use the dedicated existing-customer routes for faults, approved change control, billing questions or suspected security incidents rather than a general sales enquiry.",
  },
] as const;

export default function ItAndNetworkFaqsSection() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="it-and-network-faqs"
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
            <span className="font-semibold italic text-[#b81d78]">
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
