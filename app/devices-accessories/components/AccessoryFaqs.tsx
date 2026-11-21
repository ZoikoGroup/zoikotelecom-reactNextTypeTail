"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import SectionHeader from "./SectionHeader";

const FAQ_ITEMS = [
  {
    id: "what-accessories",
    question: "What accessories can I ask Zoiko Telecom about?",
    answer:
      "Cases, screen protectors, tablet folios, chargers, cables, earbuds, headphones and headsets. Tell us your device and what you need, and we’ll confirm what’s available and whether it fits.",
  },
  {
    id: "usb-c-cables",
    question: "Do all USB-C cables carry the same power and data?",
    answer:
      "No. USB-C is a connector shape, not a guarantee of speed. Cables are rated for different power levels and data speeds, so check the rating — a basic cable may charge slowly or transfer data slowly.",
  },
  {
    id: "wireless-through-case",
    question: "Do wireless chargers work through every phone case?",
    answer:
      "Not always. Thick cases, metal plates, card wallets and some magnetic accessories can slow or stop wireless charging. It depends on the charger, the case and the phone.",
  },
  {
    id: "business-headsets",
    question: "Are business headsets compatible with my meeting software?",
    answer:
      "Most headsets work for basic audio, but call controls, mute sync and certified features depend on the headset and the meeting platform. We check against tested features and platform data, not assumptions.",
  },
  {
    id: "unknown-model",
    question: "What if I don’t know my exact device model?",
    answer:
      "Look in your device’s settings, often under “About”, or on its box. If you still can’t find it, tell us what you can and our team will help work it out before suggesting anything.",
  },
  {
    id: "tablet-cases",
    question: "Do tablet cases fit every generation?",
    answer:
      "No. Screen size, camera position, buttons, magnets and stylus areas often change between generations, even when the name stays the same. Check the exact generation first.",
  },
  {
    id: "hot-charger",
    question: "What should I do if my charger becomes unusually hot?",
    answer:
      "Unplug it safely and stop using it. Don’t cover chargers while they’re in use, and check for damage to the plug or cable. Contact the seller or manufacturer about a replacement.",
  },
  {
    id: "wired-headset-mic",
    question: "Will a wired headset microphone always work?",
    answer:
      "Not always. 3.5 mm plugs are wired in different ways, and many phones need a USB-C adapter that supports a microphone. Check the plug type and your device before buying.",
  },
  {
    id: "buy-online",
    question: "Can I buy accessories online from this page?",
    answer:
      "No. This page helps you work out what to check. Send us a question and we’ll confirm availability, compatibility and price before anything else.",
  },
  {
    id: "opened-earbuds",
    question: "Are opened earbuds always non-returnable?",
    answer:
      "Not always. A hygiene exception only applies where it legally does, and your rights for faulty or misdescribed goods remain. It depends on the item and circumstances.",
  },
] as const;

export default function AccessoryFaqs() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFaq = (id: string) =>
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));

  return (
    <section id="faqs" className="w-full scroll-mt-24 bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader eyebrow="FAQs" title="Accessory questions" className="max-w-2xl" />

        <div className="mt-12 grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:grid-flow-col md:grid-rows-5">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            const panelId = `${faq.id}-answer`;
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-2xl border border-[#E6E9F2] bg-white transition-colors hover:border-[#DCE1F0]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-sm font-bold text-[#11183C] sm:text-base">{faq.question}</span>
                  {isOpen ? (
                    <Minus className="ml-4 h-4 w-4 shrink-0 text-[#E11D74]" strokeWidth={2.5} aria-hidden="true" />
                  ) : (
                    <Plus className="ml-4 h-4 w-4 shrink-0 text-[#E11D74]" strokeWidth={2.5} aria-hidden="true" />
                  )}
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
      </div>
    </section>
  );
}
