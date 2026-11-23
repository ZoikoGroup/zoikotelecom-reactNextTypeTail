"use client";

import React from "react";
import {
  Radio,
  BarChart3,
  Truck,
  Building2,
  Smartphone,
  Cpu,
} from "lucide-react";

const USE_CASE_CARDS = [
  {
    id: "sensors-remote-readings",
    icon: "radio",
    title: "Sensors & remote readings",
    description: "Environmental, industrial and non-personal asset signals.",
    weWillAsk: "We'll ask: site conditions, message rate, battery life.",
    image: "/Images/sime/9.png",
    imageAlt: "Industrial sensors and tools for remote readings",
  },
  {
    id: "connected-equipment",
    icon: "chart",
    title: "Connected equipment",
    description: "Factories, vending and field terminals.",
    weWillAsk: "We'll ask: electrical environment, gateways, uptime needs.",
    image: "/Images/sime/10.png",
    imageAlt: "Engineers inspecting connected equipment with a laptop",
  },
  {
    id: "connected-vehicles-fleets",
    icon: "truck",
    title: "Connected vehicles & fleets",
    description: "Vehicle modules for maintenance and operations.",
    weWillAsk: "We'll ask: regions, modem power, roaming restrictions.",
    image: "/Images/sime/11.png",
    imageAlt: "Logistics worker handling a parcel for fleet operations",
  },
  {
    id: "smart-buildings",
    icon: "building",
    title: "Smart buildings",
    description: "Meters, alarms, gateways and building systems.",
    weWillAsk: "We'll ask: indoor signal, downtime behaviour, vendors.",
    image: "/Images/sime/12.png",
    imageAlt: "Modern high-rise smart buildings viewed from below",
  },
  {
    id: "retail-endpoints",
    icon: "smartphone",
    title: "Retail endpoints",
    description: "Mobile card terminals, kiosks and smart lockers.",
    weWillAsk: "We'll ask: payment dependencies and data separation.",
    image: "/Images/sime/13.png",
    imageAlt: "Retail staff assisting customers at a store counter",
  },
  {
    id: "oem-embedded-devices",
    icon: "cpu",
    title: "OEM embedded devices",
    description: "Factory-fitted modules for large rollouts.",
    weWillAsk: "We'll ask: eUICC design, manufacturing partner, updates.",
    image: "/Images/sime/14.png",
    imageAlt: "Technician working on an embedded circuit board",
  },
] as const;

function renderUseCaseIcon(iconName: (typeof USE_CASE_CARDS)[number]["icon"]) {
  const iconClass = "h-3.5 w-3.5 text-[#FFFFFF]";

  switch (iconName) {
    case "radio":
      return <Radio className={iconClass} strokeWidth={2.2} />;
    case "chart":
      return <BarChart3 className={iconClass} strokeWidth={2.2} />;
    case "truck":
      return <Truck className={iconClass} strokeWidth={2.2} />;
    case "building":
      return <Building2 className={iconClass} strokeWidth={2.2} />;
    case "smartphone":
      return <Smartphone className={iconClass} strokeWidth={2.2} />;
    case "cpu":
      return <Cpu className={iconClass} strokeWidth={2.2} />;
    default:
      return null;
  }
}

export default function UseCasesSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2B3766]">
            USE CASES
          </p>
          <h2 className="mt-2.5 text-[30px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0B1B48] sm:text-[36px]">
            Where IoT connectivity is used
          </h2>
          <p className="mt-3 text-[14px] font-normal leading-[1.6] text-[#4A5568] sm:text-[14.5px]">
            Examples to help you describe your project — not product listings.
          </p>
        </div>

        {/* 3x2 Cards Grid */}
        <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {USE_CASE_CARDS.map((card) => (
            <a
              key={card.id}
              href="#"
              className="group relative flex min-h-[225px] flex-col justify-end overflow-hidden rounded-[18px] bg-[#0B1B48] p-6 text-left shadow-[0_12px_28px_-10px_rgba(11,27,72,0.16)] transition-transform duration-200 hover:-translate-y-0.5 sm:min-h-[240px]"
            >
              {/* Background Image */}
              <img
                src={card.image}
                alt={card.imageAlt}
                className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />

              {/* Card Content */}
              <div className="relative z-10">
                <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-[7px] bg-[#0B132B]/80 ring-1 ring-white/15">
                  {renderUseCaseIcon(card.icon)}
                </div>

                <h3 className="text-[16px] font-bold leading-[1.3] tracking-[-0.01em] text-[#FFFFFF]">
                  {card.title}
                </h3>

                <p className="mt-1.5 text-[12px] font-normal leading-[1.45] text-[#E2E8F0]">
                  {card.description}
                </p>

                <p className="mt-2.5 text-[11px] font-normal leading-[1.4] text-[#94A3B8]">
                  {card.weWillAsk}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
