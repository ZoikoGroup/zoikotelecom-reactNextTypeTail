"use client";

import React, { useState } from "react";
import { Building2, Box, Home as HomeIcon } from "lucide-react";

export default function WhatFullFibreMeans() {
  const [activeTab, setActiveTab] = useState<"fttp" | "fttc">("fttp");

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            WHAT FULL FIBRE MEANS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Fibre all the way — or just part of the way?
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Full fibre (FTTP, fibre to the premises) runs fibre-optic cable all
            the way into your home.
            <br className="hidden sm:inline" /> Part fibre uses fibre to a
            street cabinet, then a copper phone line for the last stretch.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-[#ECEEF6] bg-white p-6 shadow-[0_12px_32px_rgba(17,24,60,0.05)] sm:p-10">
          {/* Toggle Tabs */}
          <div className="inline-flex rounded-full bg-[#F4F5F9] p-1.5">
            <button
              type="button"
              onClick={() => setActiveTab("fttp")}
              className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                activeTab === "fttp"
                  ? "bg-gradient-to-r from-[#E11D74] to-[#8A3FFC] text-white shadow-md"
                  : "text-[#4B5563] hover:text-[#11183C]"
              }`}
            >
              Full fibre (FTTP)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("fttc")}
              className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                activeTab === "fttc"
                  ? "bg-gradient-to-r from-[#E11D74] to-[#8A3FFC] text-white shadow-md"
                  : "text-[#4B5563] hover:text-[#11183C]"
              }`}
            >
              Part fibre (FTTC)
            </button>
          </div>

          {/* Flow Diagram Section */}
          <div className="mt-12 grid grid-cols-1 items-center gap-6 md:grid-cols-5">
            {/* Exchange Node */}
            <div className="flex flex-col items-center text-center md:col-span-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#8A3FFC] text-white shadow-md">
                <Building2 className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="mt-3.5 text-sm font-extrabold text-[#11183C]">
                Exchange
              </h3>
              <p className="mt-0.5 text-xs text-[#6B7280]">Network hub</p>
            </div>

            {/* First Connector */}
            <div className="hidden flex-col items-center md:col-span-1 md:flex">
              <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-[#E11D74] to-[#508BFF]" />
              <span className="mt-2 text-xs font-semibold text-[#3B82F6]">
                Fibre-optic cable
              </span>
            </div>

            {/* Street Node */}
            <div className="flex flex-col items-center text-center md:col-span-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#8A3FFC] text-white shadow-md">
                <Box className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="mt-3.5 text-sm font-extrabold text-[#11183C]">
                Street
              </h3>
              <p className="mt-0.5 text-xs text-[#6B7280]">
                {activeTab === "fttp" ? "Fibre continues" : "Street cabinet"}
              </p>
            </div>

            {/* Second Connector */}
            <div className="hidden flex-col items-center md:col-span-1 md:flex">
              <div
                className={`h-1.5 w-full rounded-full ${
                  activeTab === "fttp"
                    ? "bg-gradient-to-r from-[#508BFF] to-[#E11D74]"
                    : "bg-[#CBD5E1]"
                }`}
              />
              <span
                className={`mt-2 text-xs font-semibold ${
                  activeTab === "fttp" ? "text-[#3B82F6]" : "text-[#6B7280]"
                }`}
              >
                {activeTab === "fttp"
                  ? "Fibre-optic cable"
                  : "Copper phone line"}
              </span>
            </div>

            {/* Home Node */}
            <div className="flex flex-col items-center text-center md:col-span-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#8A3FFC] text-white shadow-md">
                <HomeIcon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="mt-3.5 text-sm font-extrabold text-[#11183C]">
                Your home
              </h3>
              <p className="mt-0.5 text-xs text-[#6B7280]">
                {activeTab === "fttp"
                  ? "Fibre to a box on your wall"
                  : "Socket in your hallway"}
              </p>
            </div>
          </div>

          {/* Description Footer */}
          <div className="mt-12 border-t border-[#EEF0F7] pt-6">
            <p className="text-sm leading-relaxed text-[#4B5563]">
              {activeTab === "fttp" ? (
                <>
                  With full fibre, light carries your data the whole way. Speed
                  doesn&apos;t fall away with distance from a cabinet, and
                  uploads are usually much faster.
                </>
              ) : (
                <>
                  Part fibre uses fast fibre cables to your local street
                  cabinet, but the final connection into your home relies on
                  traditional copper telephone wires, which can limit maximum
                  speeds.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
