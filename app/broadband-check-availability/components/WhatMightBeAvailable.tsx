import React from "react";
import { Zap, Box, Disc, Radio } from "lucide-react";

const CONNECTION_TYPES = [
  {
    id: "fttp",
    tag: "FTTP",
    title: "Full fibre",
    description: "Fibre-optic cable all the way to your home.",
    icon: Zap,
    topBorder: "from-[#3B82F6] to-[#60A5FA]",
  },
  {
    id: "fttc",
    tag: "FTTC",
    title: "Part fibre",
    description: "Fibre to a street cabinet, then a copper line to your home.",
    icon: Box,
    topBorder: "from-[#8B5CF6] to-[#D97706]",
  },
  {
    id: "cable",
    tag: "CABLE",
    title: "Cable broadband",
    description: "Fibre plus coaxial cable, on cable networks where present.",
    icon: Disc,
    topBorder: "from-[#E11D74] to-[#F472B6]",
  },
  {
    id: "wireless",
    tag: "WIRELESS",
    title: "Fixed wireless",
    description: "A radio link to an antenna at your home, in some areas.",
    icon: Radio,
    topBorder: "from-[#11183C] to-[#7C3AED]",
  },
] as const;

export default function WhatMightBeAvailable() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            CONNECTION TYPES
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            What might be available
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            These are general descriptions — we&apos;ll only tell you
            what&apos;s available once it&apos;s confirmed for your address.
          </p>
        </div>

        {/* Four-Column Connection Types Grid */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONNECTION_TYPES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#ECEEF6] bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-8"
              >
                {/* Top Accent Gradient Bar */}
                <div
                  className={`absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r ${item.topBorder}`}
                />

                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-white shadow-md">
                    <Icon className="h-6 w-6" strokeWidth={2.25} />
                  </div>

                  <p className="mt-6 text-xs font-extrabold uppercase tracking-wider text-[#E11D74]">
                    {item.tag}
                  </p>

                  <h3 className="mt-1.5 text-xl font-extrabold tracking-tight text-[#11183C]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#4B5563]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
