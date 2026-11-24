"use client";

import React from "react";

const SCOPE_ROWS = [
  {
    id: "field-devices",
    layer: "Field devices",
    canDiscuss:
      "Meters, environmental sensors and gateways, as examples to scope",
    dontClaim:
      "Zoiko-made sensors, installed inventory or device certification",
  },
  {
    id: "gateway-modem",
    layer: "Gateway / modem",
    canDiscuss:
      "Cellular modems, eSIM-capable gateways, antennas and your supplier",
    dontClaim:
      "Universal compatibility or remote provisioning for any hardware",
  },
  {
    id: "connectivity",
    layer: "Connectivity",
    canDiscuss:
      "Cellular data and business connectivity, during technical discovery",
    dontClaim:
      "Guaranteed indoor signal, a specific private network or bandwidth service level",
  },
  {
    id: "building-platform",
    layer: "Building platform",
    canDiscuss: "Your existing third-party BMS, BACS or BEMS and its protocols",
    dontClaim: "A Zoiko BMS, dashboard, lighting or HVAC automation product",
  },
  {
    id: "operations-alarms",
    layer: "Operations & alarms",
    canDiscuss: "Who is responsible for safety and resilience",
    dontClaim:
      "Remote alarm silencing, fire or lift control, or access integration",
  },
  {
    id: "data-insight",
    layer: "Data & insight",
    canDiscuss: "Aggregated insight as a possible need",
    dontClaim: "Live energy savings, real-time occupancy or worker analytics",
  },
] as const;

export default function ScopeComparisonTable() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2B3766]">
            WHAT WE CAN AND CAN&apos;T SAY
          </p>

          <h2 className="mt-2.5 text-[30px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0B1B48] sm:text-[36px]">
            A clear line on what&apos;s included
          </h2>

          <p className="mt-2.5 text-[13.5px] font-normal leading-[1.6] text-[#4A5568] sm:text-[14.5px]">
            Some layers can be discussed. Others aren&apos;t Zoiko products and
            aren&apos;t claimed here.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-10 overflow-x-auto rounded-[18px] border border-[#E6EAF2] bg-[#FFFFFF] shadow-[0_12px_32px_-12px_rgba(11,27,72,0.06)]">
          <div className="min-w-[780px]">
            {/* Table Column Headers */}
            <div className="grid grid-cols-[200px_1.15fr_1.15fr]">
              <div className="bg-[#070E2B] px-6 py-3.5 text-[12.5px] font-bold leading-[1.35] text-[#FFFFFF]">
                Layer
              </div>
              <div className="bg-[#2563EB] px-6 py-3.5 text-[12.5px] font-bold leading-[1.35] text-[#FFFFFF]">
                We can discuss
              </div>
              <div className="bg-[#B91C1C] px-6 py-3.5 text-[12.5px] font-bold leading-[1.35] text-[#FFFFFF]">
                We don&apos;t claim
              </div>
            </div>

            {/* Table Rows */}
            {SCOPE_ROWS.map((row, rowIndex) => {
              const isLastRow = rowIndex === SCOPE_ROWS.length - 1;
              return (
                <div
                  key={row.id}
                  className={`grid grid-cols-[200px_1.15fr_1.15fr] items-stretch ${
                    !isLastRow ? "border-b border-[#EDF1F7]" : ""
                  }`}
                >
                  {/* Layer Cell */}
                  <div className="border-r border-[#EDF1F7] bg-[#F8FAFC] px-6 py-4 text-[12px] font-bold leading-[1.45] text-[#0B1B48]">
                    {row.layer}
                  </div>

                  {/* We can discuss Cell */}
                  <div className="border-r border-[#F1F5F9] px-6 py-4 text-[12px] font-semibold leading-[1.5] text-[#15803D]">
                    {row.canDiscuss}
                  </div>

                  {/* We don't claim Cell */}
                  <div className="px-6 py-4 text-[12px] font-normal leading-[1.5] text-[#334155]">
                    {row.dontClaim}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
