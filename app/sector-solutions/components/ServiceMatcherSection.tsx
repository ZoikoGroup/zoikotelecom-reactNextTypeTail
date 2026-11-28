"use client";

import { useState } from "react";
import { Phone, Smartphone, Wifi, type LucideIcon } from "lucide-react";

const sectionContent = {
  id: "service-matcher",
  eyebrow: "SERVICE MATCHER",
  heading: "See which categories might fit",
  description:
    'A simple tool will suggest service categories to explore based on your sector — always explaining why, and never showing prices, coverage or a "best for you" badge.',
  badge: "COMING SOON",
  previewLabel: "Illustrative preview",
} as const;

type SectorKey = "professional" | "retail" | "healthcare" | "logistics";

interface MatchedServiceItem {
  title: string;
  reason: string;
  icon: LucideIcon;
  iconBoxClass: string;
}

interface SectorPreviewConfig {
  key: SectorKey;
  tabLabel: string;
  services: readonly MatchedServiceItem[];
}

const sectorPreviews: readonly SectorPreviewConfig[] = [
  {
    key: "professional",
    tabLabel: "Professional",
    services: [
      {
        title: "Business mobile",
        reason: "Hybrid & client calls",
        icon: Smartphone,
        iconBoxClass: "bg-[#2563eb] text-white",
      },
      {
        title: "Broadband & fibre",
        reason: "Office & remote access",
        icon: Wifi,
        iconBoxClass: "bg-[#7c3aed] text-white",
      },
      {
        title: "Business voice",
        reason: "Client & team calling",
        icon: Phone,
        iconBoxClass: "bg-[#db2777] text-white",
      },
    ],
  },
  {
    key: "retail",
    tabLabel: "Retail & hospitality",
    services: [
      {
        title: "Broadband",
        reason: "Per-site assessment",
        icon: Wifi,
        iconBoxClass: "bg-[#7c3aed] text-white",
      },
      {
        title: "Business voice",
        reason: "Front-of-house calls",
        icon: Phone,
        iconBoxClass: "bg-[#db2777] text-white",
      },
      {
        title: "Business mobile",
        reason: "Optional",
        icon: Smartphone,
        iconBoxClass: "bg-[#2563eb] text-white",
      },
    ],
  },
  {
    key: "healthcare",
    tabLabel: "Healthcare",
    services: [
      {
        title: "Broadband",
        reason: "Clinic site review",
        icon: Wifi,
        iconBoxClass: "bg-[#7c3aed] text-white",
      },
      {
        title: "Business voice",
        reason: "Telephony & continuity",
        icon: Phone,
        iconBoxClass: "bg-[#db2777] text-white",
      },
      {
        title: "Business mobile",
        reason: "Care team mobility",
        icon: Smartphone,
        iconBoxClass: "bg-[#2563eb] text-white",
      },
    ],
  },
  {
    key: "logistics",
    tabLabel: "Logistics",
    services: [
      {
        title: "Business mobile",
        reason: "Mobile workforces",
        icon: Smartphone,
        iconBoxClass: "bg-[#2563eb] text-white",
      },
      {
        title: "Broadband",
        reason: "Depot connectivity",
        icon: Wifi,
        iconBoxClass: "bg-[#7c3aed] text-white",
      },
      {
        title: "Business voice",
        reason: "Site & dispatch calls",
        icon: Phone,
        iconBoxClass: "bg-[#db2777] text-white",
      },
    ],
  },
] as const;

export default function ServiceMatcherSection() {
  const [selectedSector, setSelectedSector] = useState<SectorKey>("retail");

  const activePreview =
    sectorPreviews.find((item) => item.key === selectedSector) ??
    sectorPreviews[1];

  return (
    <section
      id={sectionContent.id}
      className="w-full bg-gradient-to-br from-[#0d0728] via-[#1c0c47] to-[#2b1059] px-4 py-14 text-white sm:px-8 lg:px-12 lg:py-16"
    >
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
        {/* Left column: Eyebrow, heading, description, Coming Soon badge */}
        <div className="lg:col-span-5">
          <p className="text-[10.5px] font-extrabold uppercase tracking-[0.18em] text-[#ec4899]">
            {sectionContent.eyebrow}
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold leading-[1.12] tracking-[-0.025em] text-white sm:text-[38px]">
            {sectionContent.heading}
          </h2>

          <p className="mt-3.5 max-w-[420px] text-[12.5px] leading-[1.62] text-white/75 sm:text-[13px]">
            {sectionContent.description}
          </p>

          <div className="mt-5">
            <span className="inline-flex items-center rounded-md bg-[#ffe8b3] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#854d0e]">
              {sectionContent.badge}
            </span>
          </div>
        </div>

        {/* Right column: Illustrative dark violet preview card */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-white/15 bg-white/[0.08] p-5 shadow-[0_20px_48px_rgba(6,3,20,0.42)] backdrop-blur-md sm:p-6">
            <p className="text-[11px] font-semibold text-white/80">
              {sectionContent.previewLabel}
            </p>

            {/* Sector pill selector */}
            <div
              role="tablist"
              aria-label="Illustrative sector preview"
              className="mt-3.5 flex flex-wrap items-center gap-2"
            >
              {sectorPreviews.map((sector) => {
                const isSelected = sector.key === selectedSector;

                return (
                  <button
                    key={sector.key}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedSector(sector.key)}
                    className={`rounded-full px-3.5 py-1.5 text-[11px] font-semibold transition ${
                      isSelected
                        ? "bg-white text-[#1e1042] shadow-xs"
                        : "border border-white/15 bg-white/[0.08] text-white/85 hover:bg-white/[0.15]"
                    }`}
                  >
                    {sector.tabLabel}
                  </button>
                );
              })}
            </div>

            {/* Stacked white service suggestion rows */}
            <div className="mt-4 space-y-2.5">
              {activePreview.services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="flex items-center justify-between gap-4 rounded-xl bg-white px-3.5 py-2.5 text-[#0c1438] shadow-[0_6px_18px_rgba(9,4,26,0.18)]"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${service.iconBoxClass}`}
                      >
                        <Icon
                          className="h-3.5 w-3.5 stroke-[2.2]"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="text-[12.5px] font-extrabold text-[#0c1438]">
                        {service.title}
                      </span>
                    </div>

                    <span className="text-right text-[10.5px] font-medium text-[#64748b]">
                      {service.reason}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
