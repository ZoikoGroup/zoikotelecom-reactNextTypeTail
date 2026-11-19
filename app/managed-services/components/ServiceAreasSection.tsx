"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

type BadgeVariant = "mobile" | "broadband" | "voice" | "multisite";

interface ServiceAreaCard {
  readonly id: string;
  readonly badge: string;
  readonly badgeVariant: BadgeVariant;
  readonly title: string;
  readonly description: string;
  readonly dependsOn: string;
  readonly ctaLabel: string;
  readonly href: "#";
  readonly imageSrc: string;
  readonly imageAlt: string;
}

const BADGE_STYLES = {
  mobile: "bg-[#FCE7F3] text-[#E11D88]",
  broadband: "bg-[#E0E7FF] text-[#2563EB]",
  voice: "bg-[#DCFCE7] text-[#15803D]",
  multisite: "bg-[#FEF3C7] text-[#D97706]",
} as const satisfies Record<BadgeVariant, string>;

const SERVICE_AREAS = [
  {
    id: "business-mobile",
    badge: "Mobile",
    badgeVariant: "mobile",
    title: "Business mobile",
    description:
      "Provisioning and activation coordination via our EE wholesale arrangements, with a support contact.",
    dependsOn: "your signed SIM, billing and support scope.",
    ctaLabel: "Business Mobile",
    href: "#",
    imageSrc: "/Images/mng/11.png",
    imageAlt: "Smartphone showing business mobile apps",
  },
  {
    id: "broadband-fibre",
    badge: "Broadband",
    badgeVariant: "broadband",
    title: "Broadband & fibre",
    description:
      "Structured installation and fault coordination with the wholesale provider.",
    dependsOn: "business repair terms, once signed.",
    ctaLabel: "Business Broadband",
    href: "#",
    imageSrc: "/Images/mng/12.png",
    imageAlt: "Network patch panel and ethernet cables",
  },
  {
    id: "voice-numbers",
    badge: "Voice",
    badgeVariant: "voice",
    title: "Voice & numbers",
    description:
      "Voice onboarding, number porting coordination and account support, subject to availability.",
    dependsOn: "your number inventory and routing support scope.",
    ctaLabel: "Business Voice",
    href: "#",
    imageSrc: "/Images/mng/13.png",
    imageAlt: "Point of sale and business voice terminal",
  },
  {
    id: "multi-site-oversight",
    badge: "Multi-site",
    badgeVariant: "multisite",
    title: "Multi-site oversight",
    description: "One business contact for the services across your sites.",
    dependsOn: "the sites and delegated contacts you agree.",
    ctaLabel: "Discuss multi-site",
    href: "#",
    imageSrc: "/Images/mng/14.png",
    imageAlt: "Multi-site commercial office buildings",
  },
] as const satisfies readonly ServiceAreaCard[];

export default function ServiceAreasSection() {
  return (
    <section
      aria-labelledby="service-areas-heading"
      className="w-full bg-gradient-to-b from-[#FFFFFF] via-[#F9F8FD] to-[#F4F3FA] py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[680px] mx-auto mb-11 sm:mb-13">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#565B75] mb-2.5">
            SERVICE AREAS
          </p>
          <h2
            id="service-areas-heading"
            className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B] mb-3"
          >
            What we can coordinate
          </h2>
          <p className="text-[14px] sm:text-[15px] leading-[1.58] text-[#5B6078] font-normal">
            Telecom services from Zoiko — with the scope confirmed for your
            business.
          </p>
        </div>

        {/* 4 Service Area Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {SERVICE_AREAS.map((area) => (
            <article
              key={area.id}
              className="group flex flex-col rounded-[20px] bg-white border border-[#ECEAF4] shadow-[0_12px_32px_rgba(15,23,66,0.06)] overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
            >
              {/* Top Image */}
              <div className="h-[146px] w-full bg-[#E5E7EB] overflow-hidden shrink-0">
                <img
                  src={area.imageSrc}
                  alt={area.imageAlt}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold leading-4 mb-3 ${
                      BADGE_STYLES[area.badgeVariant]
                    }`}
                  >
                    {area.badge}
                  </span>

                  <h3 className="text-[17px] font-bold leading-[1.3] tracking-[-0.015em] text-[#070B2B] mb-2.5">
                    {area.title}
                  </h3>

                  <p className="text-[12.5px] leading-[1.52] text-[#4B5068] mb-5">
                    {area.description}
                  </p>
                </div>

                <div>
                  <div className="pt-3.5 pb-4 border-t border-dashed border-[#E4E7F1] text-[11px] leading-[1.45] text-[#6B7280]">
                    <span className="font-bold text-[#111827]">
                      Depends on:
                    </span>{" "}
                    <span>{area.dependsOn}</span>
                  </div>

                  <a
                    href={area.href}
                    className="inline-flex items-center gap-1 text-[12px] font-bold text-[#E61E88] hover:text-[#C81474] transition-colors"
                  >
                    <span>{area.ctaLabel}</span>
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
