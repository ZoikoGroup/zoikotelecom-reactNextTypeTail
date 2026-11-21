"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: "what-is-iot-sim",
    question: "What is an IoT SIM?",
    answer:
      "A removable subscriber identity module used by compatible cellular devices to connect over mobile networks. It sits in a SIM slot on your hardware in an approved form factor.",
  },
  {
    id: "what-is-iot-esim",
    question: "What is an IoT eSIM?",
    answer:
      "An eUICC chip capable of hosting connectivity profiles that can be managed remotely where supported by the device, network architecture, and service platform.",
  },
  {
    id: "can-zoiko-provide-iot-esim",
    question: "Can Zoïko Telecom provide an IoT eSIM today?",
    answer:
      "Availability depends on your device compatibility, deployment architecture, and commercial scope. Confirm options directly with our business team during technical review.",
  },
  {
    id: "what-is-euicc",
    question: "What is an eUICC?",
    answer:
      "Embedded Universal Integrated Circuit Card — the underlying hardware component that enables secure storage and remote provisioning or switching of operator profiles.",
  },
  {
    id: "roam-internationally",
    question: "Can one IoT SIM roam internationally?",
    answer:
      "Roaming and network access are confirmed country by country and depend on your service contract, partner coverage, and any regional or device restrictions.",
  },
  {
    id: "how-much-data",
    question: "How much data does an IoT device need?",
    answer:
      "Data usage varies widely based on message size, transmission frequency, protocol overhead, retries, and firmware-over-the-air (FOTA) updates.",
  },
  {
    id: "battery-powered-device",
    question: "Can I use a SIM in a battery-powered device?",
    answer:
      "Yes, provided the device modem, sleep/wake cycles, and cellular technology match your power budget and battery life targets.",
  },
  {
    id: "manage-sims-online",
    question: "Can I manage all my SIMs online?",
    answer:
      "An IoT self-service account portal isn't available yet; our team supports provisioning and account requests directly while portal capabilities are planned.",
  },
  {
    id: "how-much-cost",
    question: "How much does an IoT SIM cost?",
    answer:
      "Pricing and allowances are scoped per deployment based on volume, data profile, coverage footprint, and agreed commercial terms rather than fixed off-the-shelf rates.",
  },
  {
    id: "security-controls",
    question: "What security controls are included?",
    answer:
      "Options such as private APNs, VPNs, private addressing, and traffic controls are discussed and confirmed per service based on your device and platform requirements.",
  },
] as const;

export default function IotFaqSection() {
  const [openIds, setOpenIds] = useState<readonly string[]>([]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section id="faqs" className="w-full bg-[#FFFFFF] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2B3766]">
            FAQS
          </p>
          <h2 className="mt-2.5 text-[30px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0B1B48] sm:text-[36px]">
            IoT connectivity questions
          </h2>
        </div>

        {/* 2-Column Accordion Grid */}
        <div className="mt-10 grid grid-cols-1 items-start gap-x-6 gap-y-4 md:grid-cols-2 lg:gap-x-7">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-[12px] border border-[#E8ECF4] bg-[#FFFFFF] shadow-[0_6px_20px_-10px_rgba(11,27,72,0.06)] transition-colors hover:border-[#D8E0EE]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleItem(item.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-[13px] font-bold leading-[1.4] text-[#0B1B48] sm:text-[13.5px]">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <Minus
                      className="h-4 w-4 shrink-0 text-[#E11D48]"
                      strokeWidth={2.4}
                    />
                  ) : (
                    <Plus
                      className="h-4 w-4 shrink-0 text-[#E11D48]"
                      strokeWidth={2.4}
                    />
                  )}
                </button>

                {isOpen && (
                  <div className="border-t border-[#F1F5F9] px-5 pb-4 pt-3 text-[12.5px] font-normal leading-[1.6] text-[#4A5568]">
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
