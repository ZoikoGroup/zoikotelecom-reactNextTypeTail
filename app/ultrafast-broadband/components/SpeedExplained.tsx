"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CircleArrowDown, CircleArrowUp, Gauge, Wifi } from "lucide-react";

const SPEED_TERMS = [
  {
    id: "download",
    label: "Download",
    title: "Download",
    description: "How fast data reaches you — streaming, downloads, web pages.",
    metric: "Mbit/s",
    metricNote: "megabits per second. 1 Gbit/s = 1,000 Mbit/s",
    icon: CircleArrowDown,
  },
  {
    id: "upload",
    label: "Upload",
    title: "Upload",
    description:
      "How fast you send data out — video calls, cloud backups, sending large files.",
    metric: "Mbit/s",
    metricNote:
      "megabits per second. Often lower than download on non-full-fibre lines",
    icon: CircleArrowUp,
  },
  {
    id: "latency",
    label: "Latency",
    title: "Latency",
    description:
      "The delay before data starts moving — lower numbers mean snappier calls and gaming.",
    metric: "ms",
    metricNote: "milliseconds. Lower latency means faster response times",
    icon: Gauge,
  },
  {
    id: "wired-vs-wifi",
    label: "Wired vs Wi-Fi",
    title: "Wired vs Wi-Fi",
    description:
      "Ethernet cables deliver full, steady speeds, while Wi-Fi can drop through walls or distance.",
    metric: "Gbit/s",
    metricNote:
      "gigabits per second. Wired connections preserve maximum line speed",
    icon: Wifi,
  },
] as const;

export default function SpeedExplained() {
  const [activeId, setActiveId] =
    useState<(typeof SPEED_TERMS)[number]["id"]>("download");

  const activeTerm =
    SPEED_TERMS.find((item) => item.id === activeId) ?? SPEED_TERMS[0];

  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            SPEED EXPLAINED
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            The four terms that matter
          </h2>
          <p className="mt-3 text-sm text-[#4B5563] sm:text-base">
            Click a term to see what it means.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
          {/* Left Navigation Tabs */}
          <div
            role="tablist"
            aria-label="Speed terms"
            className="flex flex-col gap-3.5 lg:col-span-3"
          >
            {SPEED_TERMS.map((term) => {
              const Icon = term.icon;
              const isActive = term.id === activeId;

              return (
                <button
                  key={term.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(term.id)}
                  className={`flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#170F49] via-[#1C145C] to-[#261A7A] text-white shadow-[0_8px_20px_rgba(23,15,73,0.18)]"
                      : "border border-[#EEF0F7] bg-white text-[#11183C] hover:border-[#DCE1F0] hover:bg-[#FAFBFD]"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isActive
                        ? "bg-gradient-to-br from-[#F4297B] to-[#8A3FFC] text-white"
                        : "bg-[#FCE8F1] text-[#E11D74]"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="text-sm font-bold sm:text-[15px]">
                    {term.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Detail Panel + Banner Image */}
          <div className="flex flex-col lg:col-span-9">
            {/* Active Term Card */}
            <div
              role="tabpanel"
              className="flex flex-col justify-between gap-6 rounded-2xl border border-[#ECEEF6] bg-white p-6 shadow-[0_2px_12px_rgba(17,24,60,0.03)] sm:p-8 md:flex-row md:items-center"
            >
              <div className="max-w-lg">
                <h3 className="text-xl font-extrabold text-[#11183C] sm:text-2xl">
                  {activeTerm.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4B5563] sm:text-[15px]">
                  {activeTerm.description}
                </p>
              </div>

              {/* Metric Highlight Box */}
              <div className="w-full shrink-0 rounded-2xl bg-gradient-to-br from-[#FDF2F8] via-[#F9EFFB] to-[#EFEBFB] px-6 py-6 text-center md:w-[300px]">
                <div className="text-3xl font-extrabold tracking-tight text-[#E11D74] sm:text-4xl">
                  {activeTerm.metric}
                </div>
                <p className="mx-auto mt-2 max-w-[220px] text-sm leading-snug text-[#4B5563]">
                  {activeTerm.metricNote}
                </p>
              </div>
            </div>

            {/* Bottom Image */}
            <div className="relative mt-1 h-[170px] w-full overflow-hidden rounded-b-lg">
              <Image
                src="/Images/ultra/2.png"
                alt="Telecom utility pole and overhead cables against a cloudy sky"
                fill
                sizes="(max-width: 1024px) 100vw, 960px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
