"use client";

import React, { useState } from "react";
import {
  Check,
  Cpu,
  MapPin,
  BarChart3,
  RefreshCw,
  Lock,
  Sparkles,
} from "lucide-react";

const REQUIREMENT_TABS = [
  {
    id: "device",
    label: "Device",
    icon: "cpu",
    heading: "Device identity & integration",
    bullets: [
      "Device category, manufacturer and model",
      "Modem family and SIM form factor",
      "eUICC type and firmware",
      "Can SIMs be replaced in the field?",
    ],
    notePrefix: "Please note:",
    noteText: "Never send real EIDs, IMEIs or ICCIDs through this website.",
    image: "/Images/sime/8.png",
    imageAlt: "Engineer reviewing hardware schematics at a workbench",
  },
  {
    id: "coverage",
    label: "Coverage",
    icon: "map",
    heading: "Target regions & network coverage",
    bullets: [
      "Countries, regions or roaming footprints needed",
      "Indoor, underground or remote deployment sites",
      "Supported cellular technologies (LTE-M, NB-IoT, 4G/5G)",
      "Local regulatory or roaming restrictions",
    ],
    notePrefix: "Please note:",
    noteText:
      "Exact network availability is verified per target country and site.",
    image: "/Images/sime/8.png",
    imageAlt: "Engineer reviewing hardware schematics at a workbench",
  },
  {
    id: "data",
    label: "Data",
    icon: "bar",
    heading: "Traffic profile & data usage",
    bullets: [
      "Expected monthly data volume per connected device",
      "Payload frequency, burstiness and directionality",
      "Latency sensitivity and session behaviour",
      "Planned firmware-over-the-air (FOTA) update sizes",
    ],
    notePrefix: "Please note:",
    noteText: "Estimates can be refined once telemetry patterns are known.",
    image: "/Images/sime/8.png",
    imageAlt: "Engineer reviewing hardware schematics at a workbench",
  },
  {
    id: "resilience",
    label: "Resilience",
    icon: "refresh",
    heading: "Continuity & failover expectations",
    bullets: [
      "Multi-network or multi-profile fallback requirements",
      "Behaviour during temporary coverage drops",
      "Power constraints and wake/sleep cycles",
      "Service continuity expectations for critical assets",
    ],
    notePrefix: "Please note:",
    noteText:
      "Resilience options depend on device capabilities and architecture.",
    image: "/Images/sime/8.png",
    imageAlt: "Engineer reviewing hardware schematics at a workbench",
  },
  {
    id: "security",
    label: "Security",
    icon: "lock",
    heading: "Access, routing & security controls",
    bullets: [
      "Private APN, VPN or IPsec connectivity needs",
      "Static IP or traffic filtering requirements",
      "Platform integration and access boundaries",
      "Compliance or data handling considerations",
    ],
    notePrefix: "Please note:",
    noteText:
      "Security architecture is scoped around your device and platform.",
    image: "/Images/sime/8.png",
    imageAlt: "Engineer reviewing hardware schematics at a workbench",
  },
  {
    id: "lifecycle",
    label: "Lifecycle",
    icon: "sparkles",
    heading: "Rollout scale & operational lifecycle",
    bullets: [
      "Pilot volume vs. multi-year commercial scale",
      "Target launch timeline and staging milestones",
      "SIM/eUICC provisioning, activation and suspension needs",
      "Ongoing support and account governance model",
    ],
    notePrefix: "Please note:",
    noteText: "Rollout plans can start small and scale in phases.",
    image: "/Images/sime/8.png",
    imageAlt: "Engineer reviewing hardware schematics at a workbench",
  },
] as const;

type RequirementTabId = (typeof REQUIREMENT_TABS)[number]["id"];

function renderTabIcon(
  iconName: (typeof REQUIREMENT_TABS)[number]["icon"],
  isActive: boolean,
) {
  const className = isActive
    ? "h-4 w-4 shrink-0 text-[#0891B2]"
    : "h-4 w-4 shrink-0 text-[#0E7490]";

  switch (iconName) {
    case "cpu":
      return <Cpu className={className} strokeWidth={2} />;
    case "map":
      return <MapPin className={className} strokeWidth={2} />;
    case "bar":
      return <BarChart3 className={className} strokeWidth={2} />;
    case "refresh":
      return <RefreshCw className={className} strokeWidth={2} />;
    case "lock":
      return <Lock className={className} strokeWidth={2} />;
    case "sparkles":
      return <Sparkles className={className} strokeWidth={2} />;
    default:
      return null;
  }
}

export default function DeploymentRequirementsSection() {
  const [activeTabId, setActiveTabId] = useState<RequirementTabId>("device");

  const activeTab =
    REQUIREMENT_TABS.find((tab) => tab.id === activeTabId) ??
    REQUIREMENT_TABS[0];

  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2B3766]">
            REQUIREMENTS
          </p>
          <h2 className="mt-2.5 text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0B1B48] sm:text-[34px]">
            What we&apos;ll ask about you deployment
          </h2>
          <p className="mt-3 text-[14px] font-normal leading-[1.6] text-[#4A5568] sm:text-[14.5px]">
            Explore the questions our team uses to scope a project. You
            don&apos;t need every answer to
            <br className="hidden sm:inline" /> get started.
          </p>
        </div>

        {/* Left Tabs + Right Detail Panel */}
        <div className="mt-11 grid grid-cols-1 gap-6 lg:grid-cols-[245px_1fr] lg:items-start lg:gap-7">
          {/* Left Navigation Pills */}
          <div
            role="tablist"
            aria-label="Deployment requirement categories"
            className="flex flex-row gap-2.5 overflow-x-auto pb-1 lg:flex-col lg:gap-3 lg:overflow-visible lg:pb-0"
          >
            {REQUIREMENT_TABS.map((tab) => {
              const isActive = tab.id === activeTab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTabId(tab.id)}
                  className={
                    isActive
                      ? "flex shrink-0 items-center gap-3 rounded-[12px] border-[1.5px] border-[#06B6D4] bg-[#ECFEFF] px-4 py-3 text-left text-[13px] font-semibold text-[#0E7490] shadow-[0_2px_8px_rgba(6,182,212,0.08)] transition-all lg:w-full"
                      : "flex shrink-0 items-center gap-3 rounded-[12px] border border-[#E6EAF2] bg-[#FFFFFF] px-4 py-3 text-left text-[13px] font-semibold text-[#0B1B48] transition-all hover:border-[#CBD5E1] hover:bg-[#F8FAFC] lg:w-full"
                  }
                >
                  {renderTabIcon(tab.icon, isActive)}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Detail Card */}
          <div className="rounded-[20px] border border-[#EDF1F7] bg-[#FFFFFF] p-6 shadow-[0_14px_34px_-12px_rgba(11,27,72,0.07)] sm:p-7 lg:p-8">
            <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-[1.15fr_0.95fr] lg:gap-8">
              {/* Left Text & Notice */}
              <div>
                <h3 className="text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0B1B48] sm:text-[19px]">
                  {activeTab.heading}
                </h3>

                <ul className="mt-4 space-y-2.5">
                  {activeTab.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-[13px] font-normal leading-[1.5] text-[#4A5568]"
                    >
                      <Check
                        className="mt-[2px] h-4 w-4 shrink-0 text-[#E11D48]"
                        strokeWidth={2.4}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-[10px] bg-[#FEF9E7] px-4 py-3 text-[12px] leading-[1.5] text-[#78350F]">
                  <span className="font-bold text-[#92400E]">
                    {activeTab.notePrefix}
                  </span>{" "}
                  <span>{activeTab.noteText}</span>
                </div>
              </div>

              {/* Right Image */}
              <div className="overflow-hidden rounded-[14px] bg-[#F1F5F9]">
                <img
                  src={activeTab.image}
                  alt={activeTab.imageAlt}
                  className="h-[220px] w-full object-cover sm:h-[235px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
