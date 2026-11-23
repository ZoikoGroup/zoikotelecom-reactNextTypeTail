"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const STEPS = [
  "Change the default admin password",
  "Install the latest firmware",
  "Use WPA2 or WPA3 encryption",
  "Set up a separate guest network",
  "Know how to reset to factory settings",
] as const;

export default function SecurityChecklist() {
  // Local state only — nothing is stored or sent.
  const [done, setDone] = useState<string[]>([]);

  const toggle = (step: string) =>
    setDone((prev) => (prev.includes(step) ? prev.filter((s) => s !== step) : [...prev, step]));

  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_420px] lg:gap-7">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Security"
            title="Secure your hotspot or router"
            subtitle="Tick each step once done — nothing is saved. We never ask for your Wi-Fi password."
            className="max-w-3xl"
          />

          <fieldset className="mt-8">
            <legend className="sr-only">Security steps</legend>
            <ul className="space-y-3">
              {STEPS.map((step) => {
                const checked = done.includes(step);
                return (
                  <li key={step}>
                    <label
                      className={`flex cursor-pointer items-center gap-3.5 rounded-2xl border bg-white px-5 py-4 text-sm font-bold transition-colors sm:text-base ${
                        checked ? "border-[#F3C3D8] text-[#6B7194] line-through" : "border-[#E6E9F2] text-[#11183C]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggle(step)}
                        className="h-[18px] w-[18px] shrink-0 accent-[#E11D74]"
                      />
                      {step}
                    </label>
                  </li>
                );
              })}
            </ul>
          </fieldset>

          <p aria-live="polite" className="mt-6 text-sm font-bold text-[#B0135F]">
            {done.length} of {STEPS.length} steps done
          </p>
        </div>

        <div className="relative aspect-[420/380] w-full overflow-hidden rounded-[28px]">
          <Image
            src="/Images/mobile-hotspots-routers/security-network-equipment.webp"
            alt="Network switch with Ethernet cables plugged into numbered ports"
            fill
            sizes="(min-width: 1024px) 420px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
