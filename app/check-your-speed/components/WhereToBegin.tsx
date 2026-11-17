"use client";

import React, { useState } from "react";
import { Gauge, AlertTriangle, Home, Laptop } from "lucide-react";

const SPEED_OPTIONS = [
  {
    id: "speed-to-home",
    title: "Speed to your home",
    description:
      "How fast data reaches your router from the network. Best checked with a device plugged in by cable.",
    icon: Home,
  },
  {
    id: "speed-on-device",
    title: "Speed on this device",
    description:
      "What one device gets — affected by Wi-Fi, the device itself and what else is running. It isn’t your contract speed.",
    icon: Laptop,
  },
] as const;

export default function WhereToBegin() {
  const [activeTab, setActiveTab] = useState<
    "test-connection" | "internet-slow"
  >("test-connection");

  return (
    <section className="w-full bg-white py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            WHERE TO BEGIN
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            What brings you here?
          </h2>
        </div>

        {/* Toggle Pills Navigation */}
        <div className="mx-auto mt-8 flex max-w-xl justify-center">
          <div className="inline-flex rounded-full bg-[#FFFFFF] shadow-xl p-1.5">
            <button
              type="button"
              onClick={() => setActiveTab("test-connection")}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                activeTab === "test-connection"
                  ? "bg-gradient-to-r from-[#E11D74] to-[#7C3AED] text-white shadow-md"
                  : "text-[#4B5563] hover:text-[#11183C]"
              }`}
            >
              <Gauge className="h-4 w-4" strokeWidth={2.5} />
              <span>I want to test my connection</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("internet-slow")}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                activeTab === "internet-slow"
                  ? "bg-gradient-to-r from-[#E11D74] to-[#7C3AED] text-white shadow-md"
                  : "text-[#4B5563] hover:text-[#11183C]"
              }`}
            >
              <AlertTriangle className="h-4 w-4" strokeWidth={2.5} />
              <span>My internet feels slow</span>
            </button>
          </div>
        </div>

        {/* Two-Column Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {SPEED_OPTIONS.map((option) => {
            const Icon = option.icon;

            return (
              <div
                key={option.id}
                className="flex flex-col justify-between rounded-3xl border border-[#ECEEF6] bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-8"
              >
                <div>
                  {/* Icon Badge */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-white shadow-md">
                    <Icon className="h-6 w-6" strokeWidth={2.25} />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold tracking-tight text-[#11183C]">
                    {option.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                    {option.description}
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
