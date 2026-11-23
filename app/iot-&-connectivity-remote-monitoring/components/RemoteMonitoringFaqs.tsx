"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import SectionHeader from "./SectionHeader";

const FAQ_ITEMS = [
  {
    id: "what-is-remote-monitoring",
    question: "What is remote IoT monitoring?",
    answer:
      "It means using connected sensors to send readings — such as temperature, level or run state — from equipment to a system you can check from elsewhere. Connectivity is one part. Sensors, a platform and a response plan are the others.",
  },
  {
    id: "sim-remote-sensor",
    question: "Can a SIM connect a remote sensor?",
    answer:
      "Many sensors and gateways can send readings over a mobile network using a SIM or eSIM, if the device supports it and coverage at the site is suitable. We check both with you.",
  },
  {
    id: "always-real-time",
    question: "Is remote monitoring always real time?",
    answer:
      "No. Readings arrive at the interval the device is set to, and can be delayed or held on the device when signal drops. A good system shows how old each reading is.",
  },
  {
    id: "temperature",
    question: "Can I monitor temperature remotely?",
    answer:
      "Yes, with a suitable sensor and system. Validated food or medicine cold-chain logging has its own requirements and isn’t what this page describes.",
  },
  {
    id: "fire-alarms",
    question: "Can this replace fire alarms or emergency systems?",
    answer:
      "No. Monitoring connectivity isn’t a fire, life-safety or emergency system and must never replace one.",
  },
  {
    id: "sms-notifications",
    question: "Can the service send SMS notifications?",
    answer:
      "There’s no Zoiko alerting service today. Where alerts are used, they come from your own platform or supplier. We can discuss the connectivity those alerts rely on.",
  },
  {
    id: "supply-sensors",
    question: "Do you supply monitoring sensors?",
    answer:
      "No. We don’t supply or certify sensors. You or your integrator choose the devices, and we talk through how they could connect.",
  },
  {
    id: "multiple-sites",
    question: "Can monitoring work across multiple sites?",
    answer:
      "Yes. Each site’s coverage, power and network set-up is checked on its own, so we don’t promise coverage everywhere in advance.",
  },
  {
    id: "enquiry-contents",
    question: "What should I include in an enquiry?",
    answer:
      "What you want to monitor and why, roughly how many sites and devices, how often readings are needed and where the data should go. Please leave out passwords, API keys and exact security locations.",
  },
  {
    id: "pricing",
    question: "How are plans priced?",
    answer:
      "Pricing depends on the number of devices, data use, roaming regions and support needs. It’s confirmed in writing after a consultation, before you agree to anything.",
  },
] as const;

export default function RemoteMonitoringFaqs() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFaq = (id: string) =>
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));

  return (
    <section id="faqs" className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader eyebrow="FAQs" title="Remote monitoring questions" className="max-w-2xl" />

        <div className="mt-12 grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col gap-3.5">
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

          <div className="relative hidden min-h-[600px] overflow-hidden lg:block">
            <Image
              src="/Images/iot-&-connectivity-remote-monitoring/faq-team-meeting.webp"
              alt="Colleagues discussing a project in a meeting room"
              fill
              sizes="500px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
