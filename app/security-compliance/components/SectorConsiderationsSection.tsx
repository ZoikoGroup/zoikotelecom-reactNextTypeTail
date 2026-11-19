"use client";

import React from "react";
import { ChevronRight, Scale } from "lucide-react";

type SectorBadgeVariant = "healthcare" | "finance" | "public-sector" | "retail";

interface SectorCardItem {
  readonly id: string;
  readonly badge: string;
  readonly badgeVariant: SectorBadgeVariant;
  readonly title: string;
  readonly description: string;
  readonly ctaLabel: string;
  readonly href: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
}

const SECTOR_BADGE_STYLES = {
  healthcare: "bg-[#FCE7F3] text-[#E11D88]",
  finance: "bg-[#E0E7FF] text-[#2563EB]",
  "public-sector": "bg-[#DCFCE7] text-[#15803D]",
  retail: "bg-[#FEF3C7] text-[#B45309]",
} as const satisfies Record<SectorBadgeVariant, string>;

const SECTOR_CARDS = [
  {
    id: "healthcare",
    badge: "Healthcare",
    badgeVariant: "healthcare",
    title: "Healthcare",
    description:
      "Patient data and records duties may affect how you use voice and mobile services.",
    ctaLabel: "Discuss requirements",
    href: "#",
    imageSrc: "/Images/comp/18.png",
    imageAlt:
      "Healthcare professional holding smartphone with stethoscope visible",
  },
  {
    id: "financial-services",
    badge: "Finance",
    badgeVariant: "finance",
    title: "Financial services",
    description:
      "Call recording and record-keeping rules may apply to your business.",
    ctaLabel: "Discuss requirements",
    href: "#",
    imageSrc: "/Images/comp/19.png",
    imageAlt: "Financial documents, calculator, and records on desk",
  },
  {
    id: "public-sector",
    badge: "Public sector",
    badgeVariant: "public-sector",
    title: "Public sector",
    description:
      "Procurement frameworks may ask for specific evidence and terms.",
    ctaLabel: "Discuss requirements",
    href: "#",
    imageSrc: "/Images/comp/20.png",
    imageAlt: "Tall commercial and civic office buildings seen from below",
  },
  {
    id: "retail-payments",
    badge: "Retail",
    badgeVariant: "retail",
    title: "Retail & payments",
    description:
      "Card payment terminals and guest Wi-Fi need careful separation.",
    ctaLabel: "Discuss requirements",
    href: "#",
    imageSrc: "/Images/comp/21.png",
    imageAlt: "Retail shop interior with merchandise displays and counter",
  },
] as const satisfies readonly SectorCardItem[];

export default function SectorConsiderationsSection() {
  return (
    <section
      aria-labelledby="sector-considerations-heading"
      className="w-full bg-[#F5F6FB] py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[740px] mx-auto mb-11 sm:mb-12">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#565B75] mb-2.5">
            SECTOR CONSIDERATIONS
          </p>
          <h2
            id="sector-considerations-heading"
            className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B] mb-3"
          >
            Regulated sectors have extra obligations
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] leading-[1.58] text-[#5B6078] font-normal">
            General considerations only &mdash; we don&rsquo;t claim
            sector-specific certification. Your own due diligence is needed.
          </p>
        </div>

        {/* 4 Sector Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {SECTOR_CARDS.map((card) => (
            <article
              key={card.id}
              className="group flex flex-col rounded-[18px] bg-white border border-[#ECEEF6] shadow-[0_10px_28px_rgba(15,23,66,0.05)] overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
            >
              {/* Top Image */}
              <div className="h-[138px] w-full bg-[#E5E7EB] overflow-hidden shrink-0">
                <img
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold leading-4 mb-3 ${
                      SECTOR_BADGE_STYLES[card.badgeVariant]
                    }`}
                  >
                    {card.badge}
                  </span>

                  <h3 className="text-[15.5px] font-bold leading-[1.3] tracking-[-0.01em] text-[#070B2B] mb-2">
                    {card.title}
                  </h3>

                  <p className="text-[11.5px] leading-[1.52] text-[#5B6078] mb-4">
                    {card.description}
                  </p>
                </div>

                <div>
                  <a
                    href={card.href}
                    className="inline-flex items-center gap-1 text-[11.5px] font-bold text-[#E61E88] hover:text-[#C81474] transition-colors"
                  >
                    <span>{card.ctaLabel}</span>
                    <ChevronRight className="h-3.5 w-3.5 stroke-[2.5] transition-transform duration-150 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Regulatory Notice Banner */}
        <div className="rounded-[12px] bg-[#EEF1FB] border border-[#E1E6F7] px-4 sm:px-5 py-3.5 flex items-start sm:items-center gap-3">
          <Scale
            className="h-4 w-4 shrink-0 text-[#4F46E5] mt-0.5 sm:mt-0"
            strokeWidth={2.2}
          />
          <p className="text-[12px] leading-[1.5] text-[#4B5068]">
            The UK has telecom-specific security duties, including the
            Telecommunications Security Act 2021 and its codes of practice for
            certain providers. Which obligations apply depends on the provider
            and service &mdash; we don&rsquo;t claim conformity on this page.
          </p>
        </div>
      </div>
    </section>
  );
}
