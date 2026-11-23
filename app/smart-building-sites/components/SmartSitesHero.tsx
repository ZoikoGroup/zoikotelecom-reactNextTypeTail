"use client";

import React from "react";
import {
  ChevronRight,
  Building2,
  Warehouse,
  Landmark,
  Fan,
  Radio,
  Map,
  Shield,
  FileText,
} from "lucide-react";

const FEATURE_CARDS = [
  {
    id: "device-connectivity",
    icon: "radio",
    title: "Device connectivity",
    subtitle: "For meters, sensors and gateways",
  },
  {
    id: "distributed-premises",
    icon: "map",
    title: "Distributed premises",
    subtitle: "One site or many",
  },
  {
    id: "security-review",
    icon: "shield",
    title: "Security review",
    subtitle: "IT and OT boundaries considered",
  },
  {
    id: "planning-first",
    icon: "file",
    title: "Planning first",
    subtitle: "Feasibility before commitment",
  },
] as const;

function renderFeatureIcon(iconName: (typeof FEATURE_CARDS)[number]["icon"]) {
  const iconClass = "h-4 w-4 text-[#4F46E5]";
  switch (iconName) {
    case "radio":
      return <Radio className={iconClass} strokeWidth={2} />;
    case "map":
      return;
    case "shield":
      return <Shield className={iconClass} strokeWidth={2} />;
    case "file":
      return <FileText className={iconClass} strokeWidth={2} />;
    default:
      return null;
  }
}

export default function SmartSiteHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F9FAFE] py-14 md:py-20">
      {/* Subtle Topographic Contour Pattern Overlay */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.45]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="sites-topographic-waves"
            width="420"
            height="420"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M-60 90 C 60 20, 180 160, 300 90 C 370 50, 420 110, 480 90"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="1"
            />
            <path
              d="M-60 150 C 70 80, 190 220, 310 150 C 380 110, 430 170, 480 150"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="1"
            />
            <path
              d="M-60 210 C 80 140, 200 280, 320 210 C 390 170, 440 230, 480 210"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="1"
            />
            <path
              d="M-60 270 C 60 200, 180 340, 300 270 C 370 230, 420 290, 480 270"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="1"
            />
            <path
              d="M-60 330 C 70 260, 190 400, 310 330 C 380 290, 430 350, 480 330"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sites-topographic-waves)" />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.02fr_1.15fr] lg:gap-12">
          {/* Left Column Copy */}
          <div className="max-w-[530px]">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#FFFFFF] px-3.5 py-1.5 shadow-[0_2px_10px_rgba(11,27,72,0.03)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4F46E5]" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#2B3766]">
                SMART BUILDINGS &amp; SITES
              </span>
            </div>

            {/* Hero Headline */}
            <h1 className="mt-5 text-[38px] font-extrabold leading-[1.08] tracking-[-0.025em] sm:text-[46px] lg:text-[50px]">
              <span className="block bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#6366F1] bg-clip-text text-transparent">
                Plan secure
              </span>
              <span className="block">
                <span className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                  connectivity{" "}
                </span>
                <span className="bg-gradient-to-r from-[#C026D3] to-[#E11D84] bg-clip-text text-transparent">
                  for
                </span>
              </span>
              <span className="block bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                connected
              </span>
              <span className="block bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                premises.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-[14.5px] font-normal leading-[1.6] text-[#4A5568] sm:text-[15.5px]">
              Scope the networks your building devices, gateways and site
              systems need — from one office to a whole estate. We help with
              connectivity, not building control.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <a
                href="#"
                className="inline-flex h-[44px] items-center justify-center gap-1.5 rounded-[9px] bg-gradient-to-r from-[#E11D48] via-[#DB2777] to-[#C026D3] px-5 text-[13px] font-bold text-[#FFFFFF] shadow-[0_10px_24px_-4px_rgba(219,39,119,0.5)] transition-opacity hover:opacity-95"
              >
                <span>Discuss site requirements</span>
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </a>

              <a
                href="#"
                className="inline-flex h-[44px] items-center justify-center rounded-[9px] border border-[#0B1B48]/30 bg-[#FFFFFF] px-5 text-[13px] font-bold text-[#0B1B48] transition-colors hover:border-[#0B1B48]/50 hover:bg-[#F8FAFC]"
              >
                Explore site use cases
              </a>
            </div>
          </div>

          {/* Right Column Collage with Central Cellular Gateway Card */}
          <div className="relative mx-auto w-full max-w-[640px]">
            <div className="grid grid-cols-12 gap-3.5 sm:gap-4">
              {/* Left Tall Office Card */}
              <div className="relative col-span-5 h-[360px] overflow-hidden rounded-[22px] bg-[#0B1B48] shadow-[0_14px_32px_-10px_rgba(11,27,72,0.18)] sm:h-[410px]">
                <img
                  src="/Images/sites/1.png"
                  alt="Modern high-rise commercial office buildings"
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060B19]/85 via-transparent to-[#F8FAFC]/30"
                />
                <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 text-[11.5px] font-semibold text-[#FFFFFF]">
                  <Building2
                    className="h-3.5 w-3.5 text-white/90"
                    strokeWidth={2.2}
                  />
                  <span>Office</span>
                </div>
              </div>

              {/* Right 2x2 Sub-Grid */}
              <div className="col-span-7 flex flex-col gap-3.5 sm:gap-4">
                {/* Top Row: Warehouse + Campus */}
                <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                  {/* Warehouse Card */}
                  <div className="relative h-[173px] overflow-hidden rounded-[20px] bg-[#0F172A] shadow-[0_12px_26px_-8px_rgba(11,27,72,0.15)] sm:h-[197px]">
                    <img
                      src="/Images/sites/2.png"
                      alt="Logistics warehouse storage shelving"
                      className="h-full w-full object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#060B19]/65 via-transparent to-[#060B19]/40"
                    />
                    <div className="absolute left-3.5 top-3 flex items-center gap-1.5 text-[11.5px] font-semibold text-[#FFFFFF]">
                      <Warehouse
                        className="h-3.5 w-3.5 text-white/90"
                        strokeWidth={2.2}
                      />
                      <span>Warehouse</span>
                    </div>
                  </div>

                  {/* Campus Card */}
                  <div className="relative h-[173px] overflow-hidden rounded-[20px] bg-[#0F172A] shadow-[0_12px_26px_-8px_rgba(11,27,72,0.15)] sm:h-[197px]">
                    <img
                      src="/Images/sites/3.png"
                      alt="Institutional campus building behind green lawn"
                      className="h-full w-full object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060B19]/80 via-transparent to-transparent"
                    />
                    <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 text-[11.5px] font-semibold text-[#FFFFFF]">
                      <Landmark
                        className="h-3.5 w-3.5 text-white/90"
                        strokeWidth={2.2}
                      />
                      <span>Campus</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Wide Plant Room Card */}
                <div className="relative h-[173px] overflow-hidden rounded-[20px] bg-[#0F172A] shadow-[0_12px_26px_-8px_rgba(11,27,72,0.15)] sm:h-[197px]">
                  <img
                    src="/Images/sites/4.png"
                    alt="Industrial plant room piping and ventilation equipment"
                    className="h-full w-full object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060B19]/85 via-transparent to-transparent"
                  />
                  <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 text-[11.5px] font-semibold text-[#FFFFFF]">
                    <Fan
                      className="h-3.5 w-3.5 text-white/90"
                      strokeWidth={2.2}
                    />
                    <span>Plant room</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top-Right Illustration Disclaimer Pill */}
            <div className="absolute right-3 top-3 z-20 rounded-full bg-[#FFFFFF]/95 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-[#334155] shadow-[0_4px_14px_rgba(11,27,72,0.1)]">
              ILLUSTRATION &middot; NOT LIVE DATA
            </div>

            {/* Dotted Connector Spokes */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 h-full w-full"
              viewBox="0 0 640 410"
              fill="none"
            >
              <line
                x1="280"
                y1="205"
                x2="145"
                y2="205"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeDasharray="3 4"
                strokeOpacity="0.85"
              />
              <line
                x1="345"
                y1="145"
                x2="345"
                y2="95"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeDasharray="3 4"
                strokeOpacity="0.85"
              />
              <line
                x1="415"
                y1="175"
                x2="515"
                y2="115"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeDasharray="3 4"
                strokeOpacity="0.85"
              />
              <line
                x1="345"
                y1="265"
                x2="345"
                y2="325"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeDasharray="3 4"
                strokeOpacity="0.85"
              />
            </svg>

            {/* Central Floating Cellular Gateway Hub Card */}
            <div className="absolute left-[54%] top-1/2 z-20 w-[165px] -translate-x-1/2 -translate-y-1/2 rounded-[18px] bg-[#FFFFFF] px-4 py-4 text-center shadow-[0_18px_40px_-8px_rgba(11,27,72,0.22)] ring-1 ring-[#EDF1F7] sm:w-[180px] sm:px-5 sm:py-5">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-[11px] bg-gradient-to-br from-[#3B82F6] to-[#6366F1] text-[#FFFFFF] shadow-[0_6px_14px_rgba(79,70,229,0.3)]">
                <Radio className="h-5 w-5" strokeWidth={2.2} />
              </div>

              <h2 className="mt-3 text-[13px] font-bold leading-[1.25] text-[#0B1B48]">
                Cellular gateway
              </h2>

              <p className="mt-1 text-[10.5px] font-normal leading-[1.4] text-[#64748B]">
                Links site devices to your systems
              </p>
            </div>
          </div>
        </div>

        {/* Bottom 4 Feature Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {FEATURE_CARDS.map((card) => (
            <div
              key={card.id}
              className="flex items-start gap-3.5 rounded-[16px] border border-[#EDF1F7] bg-[#FFFFFF] px-5 py-4 shadow-[0_8px_24px_-10px_rgba(11,27,72,0.06)]"
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#EEF2FF]">
                {renderFeatureIcon(card.icon)}
              </div>

              <div>
                <h3 className="text-[13px] font-bold leading-[1.35] text-[#0B1B48]">
                  {card.title}
                </h3>
                <p className="mt-0.5 text-[11.5px] font-normal leading-[1.45] text-[#64748B]">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
