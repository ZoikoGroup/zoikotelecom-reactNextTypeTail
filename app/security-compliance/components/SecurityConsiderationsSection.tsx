"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

type SafeguardBadgeType = "mobile" | "broadband" | "voice";

interface SafeguardCard {
  readonly id: string;
  readonly badge: string;
  readonly badgeType: SafeguardBadgeType;
  readonly title: string;
  readonly description: string;
  readonly dependsOn: string;
  readonly ctaLabel: string;
  readonly href: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
}

const SAFEGUARD_BADGE_STYLES = {
  mobile: "bg-[#FCE7F3] text-[#E11D88]",
  broadband: "bg-[#E0E7FF] text-[#2563EB]",
  voice: "bg-[#DCFCE7] text-[#15803D]",
} as const satisfies Record<SafeguardBadgeType, string>;

const SAFEGUARD_CARDS = [
  {
    id: "business-mobile",
    badge: "Mobile",
    badgeType: "mobile",
    title: "Business mobile",
    description:
      "Authorisation before new SIMs, number transfers and account changes; what to do if a device is lost.",
    dependsOn:
      "provider processes and account checks — no network is fraud-proof.",
    ctaLabel: "Ask about mobile safeguards",
    href: "#",
    imageSrc: "/Images/comp/6.png",
    imageAlt: "Smartphone screen with apps for business mobile safeguards",
  },
  {
    id: "broadband-fibre",
    badge: "Broadband",
    badgeType: "broadband",
    title: "Broadband & fibre",
    description:
      "Router, line and wholesale network responsibilities — and your own Wi-Fi settings.",
    dependsOn:
      "equipment ownership and your contract. Endpoint protection isn't included.",
    ctaLabel: "Ask about broadband",
    href: "#",
    imageSrc: "/Images/comp/7.png",
    imageAlt: "Network switch and ethernet cables for broadband and fibre",
  },
  {
    id: "hosted-voice",
    badge: "Voice",
    badgeType: "voice",
    title: "Hosted voice",
    description:
      "Account privileges, caller location for 999, continuity and lawful call recording.",
    dependsOn: "the service and supplier. Encryption isn't assumed.",
    ctaLabel: "Ask about voice",
    href: "#",
    imageSrc: "/Images/comp/8.png",
    imageAlt: "Person working on laptop at desk for hosted voice safeguards",
  },
] as const satisfies readonly SafeguardCard[];

export default function SecurityConsiderationsSection() {
  return (
    <section
      aria-labelledby="security-considerations-heading"
      className="w-full bg-white py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[740px] mx-auto mb-11 sm:mb-12">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#565B75] mb-2.5">
            TELECOM SAFEGUARDS
          </p>
          <h2
            id="security-considerations-heading"
            className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B] mb-3"
          >
            Security considerations for each service
          </h2>
          <p className="text-[14px] sm:text-[15px] leading-[1.58] text-[#5B6078] font-normal">
            Examples of what to ask about. Specific controls depend on the
            provider and contract — we don&rsquo;t claim universal protections.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAFEGUARD_CARDS.map((card) => (
            <article
              key={card.id}
              className="group flex flex-col rounded-[20px] bg-white border border-[#ECEAF4] shadow-[0_12px_32px_rgba(15,23,66,0.06)] overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
            >
              {/* Top Image */}
              <div className="h-[186px] w-full bg-[#E5E7EB] overflow-hidden shrink-0">
                <img
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold leading-4 mb-3.5 ${
                      SAFEGUARD_BADGE_STYLES[card.badgeType]
                    }`}
                  >
                    {card.badge}
                  </span>

                  <h3 className="text-[18px] font-bold leading-[1.3] tracking-[-0.015em] text-[#070B2B] mb-2.5">
                    {card.title}
                  </h3>

                  <p className="text-[13px] leading-[1.52] text-[#4B5068] mb-5">
                    {card.description}
                  </p>
                </div>

                <div>
                  <div className="pt-3.5 pb-4 border-t border-dashed border-[#E4E7F1] text-[11.5px] leading-[1.45] text-[#6B7280]">
                    <span className="font-bold text-[#111827]">
                      Depends on:
                    </span>{" "}
                    <span>{card.dependsOn}</span>
                  </div>

                  <a
                    href={card.href}
                    className="inline-flex items-center gap-1 text-[12.5px] font-bold text-[#E61E88] hover:text-[#C81474] transition-colors"
                  >
                    <span>{card.ctaLabel}</span>
                    <ChevronRight className="h-3.5 w-3.5 stroke-[2.5] transition-transform duration-150 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
