"use client";

import React from "react";
import { Users, Headphones, BarChart3, Check } from "lucide-react";

type PartyIconKey = "business" | "zoiko" | "providers";

interface ResponsibilityParty {
  readonly id: string;
  readonly title: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly iconKey: PartyIconKey;
  readonly badgeClass: string;
  readonly items: readonly string[];
}

const RESPONSIBILITY_PARTIES = [
  {
    id: "your-business",
    title: "Your business",
    imageSrc: "/Images/mng/3.png",
    imageAlt: "Your business colleagues high-fiving in office",
    iconKey: "business",
    badgeClass: "from-[#6A35FF] to-[#5625F2]",
    items: [
      "Names authorised contacts",
      "Reports issues and business impact",
      "Approves changes and site access",
      "Looks after your own devices and Wi-Fi",
    ],
  },
  {
    id: "zoiko-telecom",
    title: "Zoiko Telecom",
    imageSrc: "/Images/mng/4.png",
    imageAlt: "Zoiko Telecom point of sale and connectivity coordination",
    iconKey: "zoiko",
    badgeClass: "from-[#D91C8A] to-[#9B27D6]",
    items: [
      "Your point of coordination",
      "Onboarding and service changes",
      "Triage and escalation to suppliers",
      "Updates as agreed in your terms",
    ],
  },
  {
    id: "wholesale-providers",
    title: "Wholesale providers",
    imageSrc: "/Images/mng/5.png",
    imageAlt:
      "Wholesale providers reviewing technical schematics and network plans",
    iconKey: "providers",
    badgeClass: "from-[#2526B8] to-[#1A1A96]",
    items: [
      "Network infrastructure, such as BT Wholesale and EE",
      "Installations and line repairs",
      "Their own repair timescales",
      "Work requested through Zoiko",
    ],
  },
] as const satisfies readonly ResponsibilityParty[];

export default function ThreePartiesSection() {
  const renderPartyIcon = (iconKey: PartyIconKey) => {
    switch (iconKey) {
      case "business":
        return (
          <Users className="h-[18px] w-[18px] text-white" strokeWidth={2} />
        );
      case "zoiko":
        return (
          <Headphones
            className="h-[18px] w-[18px] text-white"
            strokeWidth={2}
          />
        );
      case "providers":
        return (
          <BarChart3 className="h-[18px] w-[18px] text-white" strokeWidth={2} />
        );
    }
  };

  return (
    <section
      aria-labelledby="who-does-what-heading"
      className="w-full bg-gradient-to-b from-[#FFFFFF] py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[1000px] mx-auto mb-12 sm:mb-14">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#5A5F7A] mb-2.5">
            WHO DOES WHAT
          </p>
          <h2
            id="who-does-what-heading"
            className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B] mb-3.5"
          >
            Three parties, clear responsibilities
          </h2>
          <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[#5B6078] font-normal">
            Managed services work best when everyone knows their part. Exact
            responsibilities are set out in your agreement.
          </p>
        </div>

        {/* 3 Responsibility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {RESPONSIBILITY_PARTIES.map((party) => (
            <article
              key={party.id}
              className="group relative flex flex-col rounded-[22px] bg-white shadow-[0_14px_36px_rgba(15,23,66,0.06)] border border-[#F0EEF7] overflow-visible transition-transform duration-200 hover:-translate-y-0.5"
            >
              {/* Top Image Header */}
              <div className="relative h-[168px] w-full rounded-t-[22px] overflow-hidden bg-[#E5E7EB]">
                <img
                  src={party.imageSrc}
                  alt={party.imageAlt}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              {/* Overlapping Rounded Icon Badge */}
              <div
                aria-hidden="true"
                className={`-mt-5 ml-6 relative z-10 flex h-10 w-10 items-center justify-center rounded-[11px] bg-gradient-to-br ${party.badgeClass} shadow-[0_8px_18px_rgba(37,38,184,0.24)]`}
              >
                {renderPartyIcon(party.iconKey)}
              </div>

              {/* Card Body */}
              <div className="px-6 pt-3.5 pb-7 flex-1 flex flex-col">
                <h3 className="text-[18px] font-bold leading-[1.3] tracking-[-0.015em] text-[#070B2B] mb-4">
                  {party.title}
                </h3>

                <ul className="space-y-3 text-[13px] leading-[1.45] text-[#4B5068]">
                  {party.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check
                        className="h-4 w-4 shrink-0 text-[#E61E88] mt-[1px]"
                        strokeWidth={2.4}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
