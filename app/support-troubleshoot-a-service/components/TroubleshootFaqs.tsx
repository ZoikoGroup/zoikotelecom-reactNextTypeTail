"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import SectionHeader from "./SectionHeader";

const FAQ_ITEMS = [
  {
    id: "is-zoiko-down",
    question: "Is Zoiko Telecom currently down?",
    answer:
      "This guide can’t check live network status. If several of your services or devices stop working at once, contact our team and they can tell you whether a wider issue has been reported.",
  },
  {
    id: "see-outages",
    question: "Can I see current service outages here?",
    answer:
      "No. There’s no live outage map or incident feed on this page. Contact us if you think a whole area is affected.",
  },
  {
    id: "mobile-no-signal",
    question: "My mobile has no signal. What should I try?",
    answer:
      "Toggle airplane mode, restart your phone and check whether others nearby have signal. Don’t reset your phone to factory settings. If it continues, note where and when it started and contact us.",
  },
  {
    id: "signal-no-data",
    question: "My phone shows signal but mobile data doesn’t work.",
    answer:
      "Check mobile data is switched on, that you haven’t reached a data limit or spend cap, and — if you’re abroad — that data roaming is on. Then restart your phone.",
  },
  {
    id: "calls-no-texts",
    question: "My calls work but texts don’t.",
    answer:
      "Restart your phone, clear space in your messages app and try texting a different number. If texts still fail, contact us with the time you last sent one successfully.",
  },
  {
    id: "esim-delete",
    question: "My eSIM isn’t working. Should I delete it?",
    answer:
      "No. Only remove an eSIM profile if we’ve told you to and you have a confirmed way to reactivate it. Restart your phone and check the eSIM line is switched on first.",
  },
  {
    id: "wifi-no-internet",
    question: "Why does Wi-Fi work but the internet doesn’t?",
    answer:
      "Your device can be connected to the router while the router itself can’t reach the internet. Restart the router and check its lights, then try another device.",
  },
  {
    id: "wifi-one-room",
    question: "Why is Wi-Fi slow in one room?",
    answer:
      "Walls, distance, radiators and appliances can weaken Wi-Fi. Compare speeds next to the router; if they’re fine there, the line is likely working and coverage is the issue.",
  },
  {
    id: "factory-reset",
    question: "Should I reset my router to factory settings?",
    answer:
      "No — a factory reset can remove settings needed for your service. Restart it instead (off for 30 seconds, then on). Only reset if our team asks you to.",
  },
  {
    id: "whole-area",
    question: "How can I tell if a whole area is affected?",
    answer:
      "Ask neighbours or colleagues on the same service, and check whether there’s a local power cut. Our team can confirm whether a wider issue has been reported.",
  },
  {
    id: "landline-power-cut",
    question: "My digital landline is off during a power cut.",
    answer:
      "Digital landlines usually need mains power. Use a mobile for urgent calls. If you rely on your landline for emergencies or a care alarm, tell us so we can discuss backup options.",
  },
  {
    id: "999-no-signal",
    question: "Can I call 999 without my normal mobile signal?",
    answer:
      "An emergency call may connect through another network, but that isn’t guaranteed if no network is available. In immediate danger, call 999 or 112.",
  },
  {
    id: "business-voip",
    question: "My business VoIP service is interrupted.",
    answer:
      "Check whether all users or only some are affected, restart phones or softphone apps and confirm the site internet is working. Then contact us with the time it started.",
  },
  {
    id: "iot-no-data",
    question: "My IoT device has stopped sending data.",
    answer:
      "Check device power or battery, note the last reading time and see whether other devices on the same site are reporting. A missing reading isn’t always a network fault.",
  },
  {
    id: "repair-from-page",
    question: "Can Zoiko repair my service from this page?",
    answer: "No. This guide only suggests safe checks. Repairs and investigations are handled by our support team.",
  },
  {
    id: "report-fault",
    question: "How do I report a continuing fault?",
    answer:
      "Contact our team and tell them the service, what’s happening, when it started and what you’ve already tried. Never share passwords, PINs or SIM codes.",
  },
  {
    id: "ticket-number",
    question: "Will I receive a ticket number?",
    answer: "Not from this page. A reference is given when you report the fault to our team.",
  },
  {
    id: "restore-time",
    question: "How long until my service is restored?",
    answer:
      "It depends on the cause. Our team will explain what happens next and any expected timescales once they’ve looked into your fault.",
  },
  {
    id: "compensation",
    question: "Do I qualify for automatic compensation?",
    answer:
      "Some broadband and landline faults may qualify under Ofcom’s automatic compensation scheme. Eligibility depends on your service and the fault — ask our team when you report it.",
  },
  {
    id: "escalate",
    question: "How do I escalate an unresolved fault?",
    answer:
      "If you’re unhappy with how a fault is handled, you can make a complaint using our complaints code. If it remains unresolved, you may be able to take it to an independent ombudsman.",
  },
] as const;

export default function TroubleshootFaqs() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFaq = (id: string) =>
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));

  return (
    <section id="faqs" className="w-full scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader eyebrow="FAQs" title="Troubleshooting questions" />

        <div className="mt-12 grid grid-cols-1 items-start gap-x-6 gap-y-3.5 md:grid-cols-2">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            const panelId = `${faq.id}-answer`;
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-xl border border-[#E3E6F2] bg-white transition-colors hover:border-[#D4D9EC]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between px-5 py-[18px] text-left"
                >
                  <span className="text-sm font-semibold text-[#0A1446]">{faq.question}</span>
                  {isOpen ? (
                    <Minus className="ml-4 h-4 w-4 shrink-0 text-[#E0127C]" strokeWidth={2.5} aria-hidden="true" />
                  ) : (
                    <Plus className="ml-4 h-4 w-4 shrink-0 text-[#E0127C]" strokeWidth={2.5} aria-hidden="true" />
                  )}
                </button>
                {isOpen && (
                  <div id={panelId} className="border-t border-[#EEF0F7] px-5 py-4 text-sm leading-relaxed text-[#3A4268]">
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
