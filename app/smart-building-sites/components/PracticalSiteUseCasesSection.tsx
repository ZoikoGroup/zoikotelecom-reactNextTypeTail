"use client";

import React, { useState } from "react";
import {
  Gauge,
  Thermometer,
  SunMedium,
  DoorClosed,
  Map,
  ChevronRight,
  AlertTriangle,
  AlertCircle,
} from "lucide-react";

const SITE_USE_CASES = [
  {
    id: "building-meters",
    label: "Building meters",
    icon: "gauge",
    title: "Building meters",
    summary: "Remote connectivity for utility and sub-meters.",
    exampleDevice: "Meter gateways, pulse or data loggers",
    networkNeed: "Low, periodic data — indoor reach matters",
    ctaLabel: "Scope this use case",
    href: "#",
    image: "/Images/sites/11.png",
    imageAlt: "High-voltage power pylons and lines at dusk",
  },
  {
    id: "environment-sensors",
    label: "Environment sensors",
    icon: "thermometer",
    title: "Environment sensors",
    summary: "Monitoring temperature, humidity, air quality or occupancy.",
    exampleDevice: "Wireless sensor nodes and floor gateways",
    networkNeed: "Scheduled telemetry — consistent uplink reliability",
    ctaLabel: "Scope this use case",
    href: "#",
    image: "/Images/sites/11.png",
    imageAlt: "High-voltage power pylons and lines at dusk",
  },
  {
    id: "remote-plant-visibility",
    label: "Remote plant visibility",
    icon: "sun",
    title: "Remote plant visibility",
    summary: "Observing boiler rooms, chillers, pumps and site equipment.",
    exampleDevice: "Edge gateways and industrial telemetry units",
    networkNeed: "Resilient backhaul — attention to plant room signal",
    ctaLabel: "Scope this use case",
    href: "#",
    image: "/Images/sites/11.png",
    imageAlt: "High-voltage power pylons and lines at dusk",
  },
  {
    id: "access-systems",
    label: "Access systems",
    icon: "door",
    title: "Access systems",
    summary: "Connectivity supporting door controllers and entry points.",
    exampleDevice: "Site access gateways and network controllers",
    networkNeed: "Low-latency reachability — local fallback design",
    ctaLabel: "Scope this use case",
    href: "#",
    image: "/Images/sites/11.png",
    imageAlt: "High-voltage power pylons and lines at dusk",
  },
  {
    id: "estates-multi-site",
    label: "Estates & multi-site",
    icon: "map",
    title: "Estates & multi-site",
    summary: "Consistent connectivity planning across multiple buildings.",
    exampleDevice: "Site gateways, routers and SIM/eUICC estates",
    networkNeed: "Standardised patterns — per-site coverage checks",
    ctaLabel: "Scope this use case",
    href: "#",
    image: "/Images/sites/11.png",
    imageAlt: "High-voltage power pylons and lines at dusk",
  },
] as const;

type SiteUseCaseId = (typeof SITE_USE_CASES)[number]["id"];

function renderUseCaseTabIcon(
  iconName: (typeof SITE_USE_CASES)[number]["icon"],
  isActive: boolean,
) {
  const className = isActive
    ? "h-3.5 w-3.5 shrink-0 text-[#FFFFFF]"
    : "h-3.5 w-3.5 shrink-0 text-[#4F46E5]";

  switch (iconName) {
    case "gauge":
      return <Gauge className={className} strokeWidth={2} />;
    case "thermometer":
      return <Thermometer className={className} strokeWidth={2} />;
    case "sun":
      return <SunMedium className={className} strokeWidth={2} />;
    case "door":
      return <DoorClosed className={className} strokeWidth={2} />;
    case "map":
      return;
    default:
      return null;
  }
}

export default function PracticalSiteUseCasesSection() {
  const [activeId, setActiveId] = useState<SiteUseCaseId>("building-meters");

  const activeCase =
    SITE_USE_CASES.find((item) => item.id === activeId) ?? SITE_USE_CASES[0];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2B3766]">
            USE CASES
          </p>

          <h2 className="mt-2.5 text-[30px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0B1B48] sm:text-[36px]">
            Practical connectivity uses on site
          </h2>

          <p className="mt-2.5 text-[13.5px] font-normal leading-[1.6] text-[#4A5568] sm:text-[14.5px]">
            Examples of connectivity needs — not Zoiko software products.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Site connectivity use cases"
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
        >
          {SITE_USE_CASES.map((item) => {
            const isActive = item.id === activeCase.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(item.id)}
                className={
                  isActive
                    ? "inline-flex h-[36px] items-center gap-2 rounded-full bg-[#070E2B] px-4 text-[12px] font-semibold text-[#FFFFFF] shadow-[0_6px_16px_-4px_rgba(7,14,43,0.3)] transition-all"
                    : "inline-flex h-[36px] items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#FFFFFF] px-4 text-[12px] font-semibold text-[#0B1B48] transition-colors hover:border-[#CBD5E1] hover:bg-[#F8FAFC]"
                }
              >
                {renderUseCaseTabIcon(item.icon, isActive)}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Banner Image + Floating Card Container */}
        <div className="relative mt-7 h-[310px] w-full overflow-hidden rounded-[22px] bg-[#1E293B] shadow-[0_16px_36px_-12px_rgba(11,27,72,0.16)] sm:h-[340px] lg:h-[360px]">
          <img
            src={activeCase.image}
            alt={activeCase.imageAlt}
            className="h-full w-full object-cover object-center"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0F172A]/45 via-transparent to-[#0F172A]/20"
          />

          <div className="absolute inset-0 z-10 flex items-center p-5 sm:p-8 lg:p-10">
            <div className="w-full max-w-[390px] rounded-[18px] bg-[#FFFFFF] p-6 shadow-[0_18px_40px_-10px_rgba(11,27,72,0.24)] sm:p-7">
              <h3 className="text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0B1B48] sm:text-[19px]">
                {activeCase.title}
              </h3>

              <p className="mt-2 text-[12.5px] font-normal leading-[1.55] text-[#4A5568]">
                {activeCase.summary}
              </p>

              <dl className="mt-4 space-y-2 text-[11.5px] leading-[1.45]">
                <div className="grid grid-cols-[105px_1fr] gap-2">
                  <dt className="font-bold text-[#2563EB]">Example device</dt>
                  <dd className="text-[#334155]">{activeCase.exampleDevice}</dd>
                </div>
                <div className="grid grid-cols-[105px_1fr] gap-2">
                  <dt className="font-bold text-[#2563EB]">Network need</dt>
                  <dd className="text-[#334155]">{activeCase.networkNeed}</dd>
                </div>
              </dl>

              <a
                href={activeCase.href}
                className="mt-4 inline-flex items-center gap-1 border-b border-[#0B1B48] pb-0.5 text-[12px] font-bold text-[#0B1B48] transition-colors hover:border-[#E11D48] hover:text-[#E11D48]"
              >
                <span>{activeCase.ctaLabel}</span>
                <ChevronRight
                  className="h-3.5 w-3.5 text-[#E11D48]"
                  strokeWidth={2.5}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Two Callout Cards */}
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
          {/* Amber Compatibility Callout */}
          <div className="flex items-start gap-3.5 rounded-[14px] border border-[#FDE68A] bg-[#FFFBEB] px-5 py-4">
            <AlertTriangle
              className="mt-0.5 h-4 w-4 shrink-0 text-[#D97706]"
              strokeWidth={2.2}
            />
            <div>
              <h4 className="text-[12.5px] font-bold leading-[1.35] text-[#0B1B48]">
                Compatibility needs checking
              </h4>
              <p className="mt-1 text-[11.5px] font-normal leading-[1.5] text-[#4A5568]">
                Protocols, gateways and supplier dependencies need engineering
                validation. Nothing is assumed to be compatible.
              </p>
            </div>
          </div>

          {/* Rose Safety Callout */}
          <div className="flex items-start gap-3.5 rounded-[14px] border border-[#FECDD3] bg-[#FFF1F2] px-5 py-4">
            <AlertCircle
              className="mt-0.5 h-4 w-4 shrink-0 text-[#E11D48]"
              strokeWidth={2.2}
            />
            <div>
              <h4 className="text-[12.5px] font-bold leading-[1.35] text-[#0B1B48]">
                Safety-critical systems need approved design
              </h4>
              <p className="mt-1 text-[11.5px] font-normal leading-[1.5] text-[#4A5568]">
                Fire, lift, alarm and emergency-access systems need validated,
                independent design, a safe offline mode and specialist approval.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
