"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import SectionHeader from "./SectionHeader";

const FAQ_ITEMS = [
  {
    id: "what-is",
    question: "What is an IoT data plan?",
    answer:
      "A mobile data service for devices rather than people — sensors, trackers, gateways and terminals that send data over a mobile network using a SIM or eSIM.",
  },
  {
    id: "sensor-usage",
    question: "How much data does an IoT sensor use?",
    answer:
      "It varies a lot. A simple sensor might use well under 1 MB a month, while cameras or firmware-heavy devices can use far more. The estimate tool above shows how device count, cadence, payload and updates add up.",
  },
  {
    id: "pooled",
    question: "Are IoT data allowances pooled?",
    answer:
      "Not automatically. Shared allowances need a specific eligible contract, and Zoiko pooling isn’t confirmed. We’ll explain the allowance model in any proposal.",
  },
  {
    id: "roaming",
    question: "Do IoT plans include roaming?",
    answer:
      "Only where the contract says so. Tell us which countries devices operate in and for how long, and roaming countries and charges will be set out before you agree.",
  },
  {
    id: "exceeds",
    question: "What happens if a device exceeds its allowance?",
    answer:
      "It depends on the signed terms — extra charges, slower speeds or a block. Automatic blocking isn’t promised, so it’s worth planning for peaks.",
  },
  {
    id: "low-data-tech",
    question: "Are low-data technologies supported?",
    answer:
      "LTE-M and NB-IoT availability depends on the network, location and your device’s module. Support must be verified for your deployment rather than assumed.",
  },
  {
    id: "private-apn",
    question: "Does an IoT data plan include a private APN?",
    answer:
      "Not by default. Private APN, fixed IP or VPN options are discussed and confirmed separately, based on your security needs.",
  },
  {
    id: "usage-online",
    question: "Can I check device-level usage online?",
    answer:
      "Not at the moment. There’s no Zoiko device-level or pooled usage portal, and this page doesn’t show any customer usage or billing information.",
  },
  {
    id: "compare-costs",
    question: "What costs should I compare?",
    answer:
      "The total over the term: one-time charges (setup, SIMs, activation), the recurring commitment and variable costs such as excess usage and roaming — shown ex- and inc-VAT.",
  },
  {
    id: "order-directly",
    question: "Can I order IoT SIMs directly?",
    answer:
      "Not online. IoT data is arranged through a conversation with our business team, so we can check devices, coverage and terms with you first.",
  },
] as const;

export default function DataPlanFaqs() {
  const [openIds, setOpenIds] = useState<string[]>([]);
  const toggle = (id: string) =>
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));

  return (
    <section id="faqs" className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader eyebrow="FAQs" title="IoT data plan questions" className="max-w-2xl" />

        <div className="mt-10 grid grid-cols-1 items-start gap-3.5 md:grid-cols-2">
          {FAQ_ITEMS.map(({ id, question, answer }) => {
            const isOpen = openIds.includes(id);
            const panelId = `${id}-answer`;
            return (
              <div key={id} className="overflow-hidden rounded-2xl border border-[#E6E9F2] bg-white">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(id)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-sm font-bold text-[#11183C] sm:text-base">{question}</span>
                  {isOpen ? (
                    <Minus className="ml-4 h-4 w-4 shrink-0 text-[#E11D74]" strokeWidth={2.5} aria-hidden="true" />
                  ) : (
                    <Plus className="ml-4 h-4 w-4 shrink-0 text-[#E11D74]" strokeWidth={2.5} aria-hidden="true" />
                  )}
                </button>
                {isOpen && (
                  <p id={panelId} className="border-t border-[#EEF0F7] px-6 py-4 text-sm leading-relaxed text-[#4B5563]">
                    {answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
