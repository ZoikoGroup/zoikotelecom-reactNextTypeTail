import React from "react";
import { BarChart3, Clock, Layers, Sun } from "lucide-react";
import SectionHeader from "./SectionHeader";

const FACTORS = [
  {
    title: "Device count",
    text: "Plan by phase: pilot, staged rollout, full estate. Count the devices that are actually active.",
    icon: Layers,
  },
  {
    title: "Reporting cadence",
    text: "How often each device sends — plus keepalives, reconnects and retries.",
    icon: Clock,
  },
  {
    title: "Payload size",
    text: "Bytes actually sent per message, including protocol overhead — not just the sensor value.",
    icon: BarChart3,
  },
  {
    title: "Firmware updates",
    text: "Over-the-air updates can outweigh months of normal readings.",
    icon: Sun,
  },
] as const;

const UNITS = [
  { label: "KB", className: "bg-[#3B6CF6]" },
  { label: "MB", className: "bg-[#8E37E8]" },
  { label: "GB", className: "bg-[#E11D74]" },
] as const;

export default function FourDataFactors() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="How IoT data planning works"
          title="Four things decide how much data you’ll need"
          subtitle="Used by sensors, tracking messages, gateways and telemetry bursts — each in a very different way."
          className="max-w-4xl"
        />

        <ol className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FACTORS.map(({ title, text, icon: Icon }, i) => (
            <li
              key={title}
              className="relative overflow-hidden rounded-[22px] border border-[#E6E9F2] bg-white p-6"
            >
              <span
                aria-hidden="true"
                className="absolute right-4 top-2 text-[72px] font-extrabold leading-none text-[#F1EEF8]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-white">
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="relative mt-6 text-lg font-bold text-[#11183C]">{title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-[#4B5375]">{text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex flex-col gap-5 rounded-[22px] bg-gradient-to-r from-[#FBF4FA] to-[#F3F0FD] p-6 md:flex-row md:items-center">
          <div aria-hidden="true" className="flex shrink-0 items-center gap-2">
            {UNITS.map(({ label, className }, i) => (
              <React.Fragment key={label}>
                {i > 0 && <span className="text-xs font-semibold text-[#6B7194]">×1,000</span>}
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold text-white ${className}`}>
                  {label}
                </span>
              </React.Fragment>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-[#2B3150]">
            <span className="font-bold text-[#11183C]">A note on units:</span> we use decimal
            units here for planning (1 MB = 1,000 KB). Some suppliers bill in binary units
            (1 MB = 1,024 KB) — the signed tariff decides which applies and how usage is rounded.
          </p>
        </div>
      </div>
    </section>
  );
}
