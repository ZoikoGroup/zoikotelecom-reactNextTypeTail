"use client";

import React from "react";
import {
  BarChart3,
  RefreshCw,
  Building2,
  Plug,
  Radio,
  Layers,
} from "lucide-react";

const LIFECYCLE_STAGES = [
  {
    step: "01",
    title: "New-build",
    description: "Design connectivity in early, with the main contractor.",
    variant: "pink",
  },
  {
    step: "02",
    title: "Retrofit",
    description: "Work around existing systems, walls and access.",
    variant: "white",
  },
  {
    step: "03",
    title: "Expand",
    description: "Add floors, buildings or sites in phases.",
    variant: "pink",
  },
  {
    step: "04",
    title: "Relocate",
    description: "Move devices and services with minimal disruption.",
    variant: "white",
  },
  {
    step: "05",
    title: "Decommission",
    description: "Retire devices and connections safely.",
    variant: "pink",
  },
] as const;

const CONNECTIVITY_NEEDS = [
  {
    id: "data-cadence",
    icon: "chart",
    title: "Data cadence",
    description: "How often devices send and how much.",
  },
  {
    id: "resilience",
    icon: "refresh",
    title: "Resilience",
    description: "What should happen if a connection drops.",
  },
  {
    id: "indoor-reach",
    icon: "building",
    title: "Indoor reach",
    description: "Basements, thick walls and plant rooms.",
  },
  {
    id: "power",
    icon: "plug",
    title: "Power",
    description: "Mains, battery or backup arrangements.",
  },
  {
    id: "coverage",
    icon: "radio",
    title: "Coverage",
    description: "Assessed per site, not from a postcode.",
  },
  {
    id: "tenant-separation",
    icon: "layers",
    title: "Tenant separation",
    description: "Keeping systems and tenants apart.",
  },
] as const;

function renderNeedIcon(iconName: (typeof CONNECTIVITY_NEEDS)[number]["icon"]) {
  const iconClass = "h-4 w-4 text-[#4F46E5]";
  switch (iconName) {
    case "chart":
      return <BarChart3 className={iconClass} strokeWidth={2} />;
    case "refresh":
      return <RefreshCw className={iconClass} strokeWidth={2} />;
    case "building":
      return <Building2 className={iconClass} strokeWidth={2} />;
    case "plug":
      return <Plug className={iconClass} strokeWidth={2} />;
    case "radio":
      return <Radio className={iconClass} strokeWidth={2} />;
    case "layers":
      return <Layers className={iconClass} strokeWidth={2} />;
    default:
      return null;
  }
}

export default function SiteLifecycleSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#070529] via-[#0B083B] to-[#120D52] py-16 text-[#FFFFFF] md:py-20">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#CBD5E1]">
            SITE LIFECYCLE
          </p>

          <h2 className="mt-2.5 text-[30px] font-bold leading-[1.18] tracking-[-0.02em] text-[#FFFFFF] sm:text-[36px]">
            Where is your site in its lifecycle?
          </h2>

          <p className="mt-2.5 text-[13.5px] font-normal leading-[1.6] text-[#CBD5E1] sm:text-[14px]">
            Each stage brings different obligations.
          </p>
        </div>

        {/* 5-Stage Chevron Ribbon */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {LIFECYCLE_STAGES.map((stage, index) => {
            const isPink = stage.variant === "pink";
            const isFirst = index === 0;
            const isLast = index === LIFECYCLE_STAGES.length - 1;

            return (
              <div
                key={stage.step}
                className={`relative flex min-h-[145px] flex-col justify-start px-6 py-5 lg:-ml-3 lg:first:ml-0 lg:px-8 ${
                  isPink
                    ? "bg-gradient-to-br from-[#F4257A] to-[#D91668] text-[#FFFFFF]"
                    : "bg-[#FFFFFF] text-[#0B1B48]"
                } ${isFirst ? "rounded-l-[12px]" : ""} ${
                  isLast ? "rounded-r-[12px]" : ""
                }`}
                style={{
                  zIndex: LIFECYCLE_STAGES.length - index,
                  clipPath: isLast
                    ? "polygon(0% 0%, calc(100% - 18px) 0%, 100% 50%, calc(100% - 18px) 100%, 0% 100%, 18px 50%)"
                    : "polygon(0% 0%, calc(100% - 18px) 0%, 100% 50%, calc(100% - 18px) 100%, 0% 100%, 18px 50%)",
                }}
              >
                <span
                  className={`text-[10px] font-bold tracking-[0.06em] ${
                    isPink ? "text-white/90" : "text-[#E11D48]"
                  }`}
                >
                  {stage.step}
                </span>

                <h3
                  className={`mt-2 text-[14.5px] font-bold leading-[1.3] ${
                    isPink ? "text-[#FFFFFF]" : "text-[#0B1B48]"
                  }`}
                >
                  {stage.title}
                </h3>

                <p
                  className={`mt-1.5 text-[11.5px] font-normal leading-[1.45] ${
                    isPink ? "text-white/90" : "text-[#4A5568]"
                  }`}
                >
                  {stage.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Sub-section: What your site's connectivity needs to handle */}
        <div className="mt-12">
          <h3 className="text-[16.5px] font-bold leading-[1.3] tracking-[-0.01em] text-[#FFFFFF]">
            What your site&apos;s connectivity needs to handle
          </h3>

          <div className="mt-4 overflow-hidden rounded-[16px] bg-[#FFFFFF] text-[#0B1B48] shadow-[0_16px_36px_-12px_rgba(0,0,0,0.25)]">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {CONNECTIVITY_NEEDS.map((item, idx) => {
                const isRightCol = (idx + 1) % 3 === 0;
                const isBottomRow = idx >= 3;

                return (
                  <div
                    key={item.id}
                    className={`flex items-start gap-3.5 px-6 py-5 ${
                      !isRightCol ? "md:border-r md:border-[#EEF2F7]" : ""
                    } ${!isBottomRow ? "border-b border-[#EEF2F7]" : "border-b border-[#EEF2F7] md:border-b-0"}`}
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF]">
                      {renderNeedIcon(item.icon)}
                    </div>

                    <div>
                      <h4 className="text-[13px] font-bold leading-[1.35] text-[#0B1B48]">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-[11.5px] font-normal leading-[1.45] text-[#64748B]">
                        {item.description}
                      </p>
                    </div>
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
