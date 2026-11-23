"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import SectionHeader from "./SectionHeader";

const FAQ_ITEMS = [
  {
    id: "what-is-hotspot",
    question: "What is a mobile hotspot?",
    answer:
      "A small, usually battery-powered device that takes a mobile data connection from a SIM or eSIM and shares it over Wi-Fi with your phone, laptop or tablet.",
  },
  {
    id: "any-sim",
    question: "Can I use any SIM in a 4G/5G router?",
    answer:
      "Not always. The router may be locked to a network, need a particular SIM size or support only certain radio bands. The plan also has to allow router or hotspot use. Check the exact model and plan first.",
  },
  {
    id: "esim-hotspot",
    question: "Can I use an eSIM in a hotspot?",
    answer:
      "Only if the hotspot model supports eSIM. Many still use a physical nano SIM. Check the device specification before choosing an eSIM plan.",
  },
  {
    id: "abroad",
    question: "Can I use a hotspot abroad?",
    answer:
      "It depends on your plan’s roaming terms and destination, and on whether the device supports the bands used there. Charges and data limits can differ abroad, so check before you travel.",
  },
  {
    id: "cant-connect",
    question: "What if the hotspot can’t connect?",
    answer:
      "Check the signal, that the SIM is active and inserted correctly, your data allowance and the APN settings, then restart the device. See the troubleshooting tips above for more.",
  },
  {
    id: "all-routers-sim",
    question: "Do all routers need a SIM?",
    answer:
      "No. 4G/5G routers use a SIM or eSIM for mobile data. A Wi-Fi router for fixed broadband usually has no SIM — it shares an existing broadband line.",
  },
  {
    id: "wifi6-vs-5g",
    question: "Is a Wi-Fi 6 router the same as a 5G router?",
    answer:
      "No. 5G is a mobile network connection between the router and the mast. Wi-Fi 6 is a local wireless standard between the router and your devices. A router can have one, both or neither.",
  },
  {
    id: "how-many-devices",
    question: "How many devices can connect?",
    answer:
      "Each model has a maximum, shown in its specification. That’s a connection limit, not a performance promise — more devices share the same connection, so speeds can drop.",
  },
  {
    id: "ethernet",
    question: "Can I connect by Ethernet?",
    answer:
      "Many routers have Ethernet ports; most portable hotspots don’t. Check the exact model if you need a wired connection.",
  },
  {
    id: "buy-online",
    question: "Can I buy a router from Zoiko Telecom online today?",
    answer:
      "Not from this page. It helps you work out what to check. Send us a question and we’ll confirm availability, compatibility and price before anything else.",
  },
] as const;

export default function HotspotFaqs() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFaq = (id: string) =>
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));

  return (
    <section id="faqs" className="w-full scroll-mt-24 bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader eyebrow="FAQs" title="Hotspot and router questions" className="max-w-2xl" />

        <div className="mt-12 grid grid-cols-1 items-start gap-4 md:grid-flow-col md:grid-cols-2 md:grid-rows-5">
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
