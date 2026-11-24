"use client";

import React from "react";
import { Cloud, Wifi, Radio, Activity, Check } from "lucide-react";

const STACK_LAYERS = [
  {
    id: "layer-4",
    layerLabel: "LAYER 4",
    title: "Backend & integrator systems",
    description: "Where your data is used — owned by you or your supplier.",
    icon: "cloud",
    iconBoxClass: "bg-[#BE185D] text-[#FFFFFF]",
  },
  {
    id: "layer-3",
    layerLabel: "LAYER 3",
    title: "Wireless or wired network",
    description: "Cellular backhaul, fixed lines or both.",
    icon: "wifi",
    iconBoxClass: "bg-[#7C3AED] text-[#FFFFFF]",
  },
  {
    id: "layer-2",
    layerLabel: "LAYER 2",
    title: "Gateway or modem",
    description: "Collects device data and connects it outward.",
    icon: "gateway",
    iconBoxClass: "bg-[#2563EB] text-[#FFFFFF]",
  },
  {
    id: "layer-1",
    layerLabel: "LAYER 1",
    title: "Devices & sensors",
    description: "Meters, environmental sensors and equipment.",
    icon: "sensors",
    iconBoxClass: "bg-[#0891B2] text-[#FFFFFF]",
    isBottomLayer: true,
  },
] as const;

const STACK_BULLETS = [
  "Gateways often sit between many devices and one network connection",
  "Indoor reach varies — basements and plant rooms need assessing",
  "Local operation should continue safely if the network drops",
  "Cellular can act as main or backup connection, depending on design",
] as const;

function renderLayerIcon(iconName: (typeof STACK_LAYERS)[number]["icon"]) {
  switch (iconName) {
    case "cloud":
      return <Cloud className="h-4 w-4" strokeWidth={2.2} />;
    case "wifi":
      return <Wifi className="h-4 w-4" strokeWidth={2.2} />;
    case "gateway":
      return <Radio className="h-4 w-4" strokeWidth={2.2} />;
    case "sensors":
      return <Activity className="h-4 w-4" strokeWidth={2.2} />;
    default:
      return null;
  }
}

export default function ConnectivityStackSection() {
  return (
    <section className="w-full bg-[#F6F8FC] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[445px_1fr] lg:gap-14">
          {/* Left Stacked Architecture Diagram */}
          <div className="relative mx-auto w-full max-w-[445px] pt-10">
            {/* Roof Triangle Crown */}
            <div
              aria-hidden="true"
              className="mx-auto h-0 w-0 border-b-[42px] border-l-[135px] border-r-[135px] border-b-[#4F46E5] border-l-transparent border-r-transparent"
              style={{
                borderBottomColor: "#5B5CE6",
              }}
            />
            <div
              aria-hidden="true"
              className="mx-auto -mt-[42px] h-[42px] w-[270px] bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6]"
              style={{
                clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
              }}
            />

            {/* Stacked Layer Cards */}
            <div className="relative z-10 flex flex-col gap-3.5">
              {STACK_LAYERS.map((layer) => (
                <div
                  key={layer.id}
                  className={`flex items-center gap-4 rounded-[14px] border border-[#E8ECF4] bg-[#FFFFFF] px-5 py-4 shadow-[0_8px_22px_-10px_rgba(11,27,72,0.07)] ${
                    "isBottomLayer" in layer && layer.isBottomLayer
                      ? "border-b-[4px] border-b-[#070E2B]"
                      : ""
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] shadow-[0_4px_12px_rgba(11,27,72,0.12)] ${layer.iconBoxClass}`}
                  >
                    {renderLayerIcon(layer.icon)}
                  </div>

                  <div>
                    <p className="text-[9.5px] font-bold uppercase tracking-[0.11em] text-[#64748B]">
                      {layer.layerLabel}
                    </p>
                    <h3 className="mt-0.5 text-[14px] font-bold leading-[1.3] text-[#0B1B48]">
                      {layer.title}
                    </h3>
                    <p className="mt-0.5 text-[11.5px] font-normal leading-[1.45] text-[#4A5568]">
                      {layer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Explanatory Copy & Checklist */}
          <div className="max-w-[560px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2B3766]">
              THE CONNECTIVITY STACK
            </p>

            <h2 className="mt-2.5 text-[30px] font-bold leading-[1.16] tracking-[-0.02em] text-[#0B1B48] sm:text-[36px]">
              How a connected building fits
              <br />
              together
            </h2>

            <p className="mt-3.5 text-[13.5px] font-normal leading-[1.6] text-[#4A5568] sm:text-[14.5px]">
              Read it from the ground up. Indoor signal, local operation and
              resilience may all
              <br className="hidden sm:inline" /> depend on the deployment.
            </p>

            <ul className="mt-6 space-y-3">
              {STACK_BULLETS.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2.5 text-[12.5px] font-normal leading-[1.5] text-[#4A5568] sm:text-[13px]"
                >
                  <Check
                    className="mt-[2px] h-4 w-4 shrink-0 text-[#E11D48]"
                    strokeWidth={2.4}
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
