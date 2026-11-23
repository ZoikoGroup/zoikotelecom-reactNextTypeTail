"use client";

import React from "react";
import { ChevronRight, Info } from "lucide-react";

const GUIDANCE_CARDS = [
  {
    id: "roaming-networks",
    badge: "Coverage",
    badgeStyle: "bg-[#E0E7FF] text-[#4338CA]",
    title: "Roaming & networks",
    description:
      "Country and network needs are confirmed country by country. Worldwide roaming isn't assumed.",
    dependsLabel: "Depends on:",
    dependsText: "the service contract and partner coverage.",
    ctaText: "Ask about coverage",
    href: "#",
    image: "/Images/sime/15.png",
    imageAlt: "Wireless router with glowing status indicators",
  },
  {
    id: "reliability-planning",
    badge: "Resilience",
    badgeStyle: "bg-[#FCE7F3] text-[#BE185D]",
    title: "Reliability planning",
    description:
      "Fallback and outage planning are design questions we work through with you — not promised features.",
    dependsLabel: "Depends on:",
    dependsText: "your deployment and agreed terms.",
    ctaText: "Discuss resilience",
    href: "#",
    image: "/Images/sime/16.png",
    imageAlt: "Engineers collaborating over hardware diagnostics with a laptop",
  },
  {
    id: "security-privacy",
    badge: "Security",
    badgeStyle: "bg-[#DCFCE7] text-[#15803D]",
    title: "Security & privacy",
    description:
      "Private APNs, VPNs and private addressing are options to discuss. Security features are confirmed per service.",
    dependsLabel: "Depends on:",
    dependsText: "the confirmed service.",
    ctaText: "Discuss security",
    href: "#",
    image: "/Images/sime/17.png",
    imageAlt: "High-density circuit board microchip architecture",
  },
] as const;

export default function ThingsToKnowSection() {
  return (
    <section className="w-full bg-[#F6F8FC] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2B3766]">
            PLAN WITH CONFIDENCE
          </p>
          <h2 className="mt-2.5 text-[30px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0B1B48] sm:text-[36px]">
            Things to know before you start
          </h2>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="mt-11 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7">
          {GUIDANCE_CARDS.map((card) => (
            <div
              key={card.id}
              className="flex flex-col overflow-hidden rounded-[20px] border border-[#EDF1F7] bg-[#FFFFFF] shadow-[0_14px_34px_-10px_rgba(11,27,72,0.08)]"
            >
              {/* Top Image */}
              <div className="h-[175px] w-full overflow-hidden sm:h-[185px]">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold leading-4 ${card.badgeStyle}`}
                  >
                    {card.badge}
                  </span>

                  <h3 className="mt-3 text-[17px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0B1B48]">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-[12.5px] font-normal leading-[1.55] text-[#4A5568]">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-dashed border-[#E2E8F0] pt-3.5">
                  <p className="text-[11.5px] leading-[1.45] text-[#64748B]">
                    <span className="font-bold text-[#1E293B]">
                      {card.dependsLabel}
                    </span>{" "}
                    <span>{card.dependsText}</span>
                  </p>

                  <a
                    href={card.href}
                    className="mt-3 inline-flex items-center gap-1 text-[12px] font-bold text-[#E11D48] transition-colors hover:text-[#BE123C]"
                  >
                    <span>{card.ctaText}</span>
                    <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info Banner */}
        <div className="mt-6 flex items-center gap-2.5 rounded-[12px] border border-[#E2E8F0] bg-[#EEF2FF]/70 px-4 py-3 text-[11.5px] font-normal leading-[1.45] text-[#4A5568]">
          <Info className="h-4 w-4 shrink-0 text-[#4F46E5]" strokeWidth={2} />
          <span>
            Network coverage, supported technologies, data allowances,
            provisioning and rates need confirming for each deployment.
          </span>
        </div>
      </div>
    </section>
  );
}
