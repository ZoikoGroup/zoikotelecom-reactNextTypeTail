"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const SMART_BUILDING_FAQS = [
  {
    id: "what-is-smart-building-connectivity",
    question: "What is smart building connectivity?",
    answer:
      "It is the network transport layer that links site gateways, meters, sensors and approved systems with your back-end or third-party platforms — distinct from building control or BMS software.",
  },
  {
    id: "can-i-buy-plan-online",
    question: "Can I buy a smart-building IoT plan online?",
    answer:
      "Smart building and site connectivity is scoped around your premises, device estate, security boundaries and commercial terms rather than bought as an off-the-shelf checkout item.",
  },
  {
    id: "do-i-need-iot-sim",
    question: "Do I need an IoT SIM?",
    answer:
      "That depends on your architecture — cellular connectivity (such as IoT SIMs, eSIM-capable gateways or primary/backup links) may be used alongside wired or local site networks based on technical review.",
  },
  {
    id: "will-it-work-in-basements-plant-rooms",
    question: "Will it work in basements or plant rooms?",
    answer:
      "Indoor signal varies significantly across basements, plant rooms, steel racking and thick walls, so coverage and gateway placement need site-level assessment rather than assumptions.",
  },
  {
    id: "can-service-control-hvac-or-lights",
    question: "Can this service control HVAC or lights?",
    answer:
      "No. Building control, HVAC, lighting, alarms and safety systems belong with your facilities team, integrators and specialist safety design — not assumed as a Zoiko control product.",
  },
  {
    id: "can-i-monitor-building-occupancy",
    question: "Can I monitor building occupancy?",
    answer:
      "Connectivity can carry telemetry between compatible site sensors and authorised platforms, while occupancy or privacy-sensitive data requires a clear purpose, lawful basis and appropriate safeguards.",
  },
  {
    id: "can-data-from-smart-meters-reduce-costs",
    question: "Can data from smart meters reduce costs?",
    answer:
      "Meter and sub-meter telemetry can support visibility and operational review, though cost reductions are not guaranteed and depend on how your team acts on verified readings.",
  },
  {
    id: "is-building-information-secure",
    question: "Is building information secure?",
    answer:
      "Security depends on your full architecture — including OT/IT separation, gateway/DMZ controls, brokered access and confirmed service options — rather than being assumed from this page alone.",
  },
  {
    id: "can-i-connect-multiple-sites",
    question: "Can I connect multiple sites?",
    answer:
      "Yes, multi-site estates can be scoped together, with site-by-site coverage, lifecycle stage and operational requirements reviewed for each location.",
  },
  {
    id: "what-should-i-send-in-enquiry",
    question: "What should I send in an enquiry?",
    answer:
      "Share your site type, rough number of sites, lifecycle stage and what you need connected — 'unsure' is fine, and please avoid sending access codes, camera feeds, occupant names or security plans.",
  },
] as const;

export default function SmartBuildingsFaqSection() {
  const [openIds, setOpenIds] = useState<readonly string[]>([]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section id="faqs" className="w-full bg-[#F6F8FC] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2B3766]">
            FAQS
          </p>

          <h2 className="mt-2.5 text-[30px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0B1B48] sm:text-[36px]">
            Smart buildings &amp; sites questions
          </h2>
        </div>

        {/* 2-Column Accordion Grid */}
        <div className="mt-10 grid grid-cols-1 items-start gap-x-6 gap-y-4 md:grid-cols-2 lg:gap-x-7">
          {SMART_BUILDING_FAQS.map((item) => {
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
