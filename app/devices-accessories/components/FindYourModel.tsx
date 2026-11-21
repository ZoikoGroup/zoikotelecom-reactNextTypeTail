"use client";

import React, { useState } from "react";
import SectionHeader from "./SectionHeader";

const DEVICE_TYPES = [
  {
    id: "phone",
    label: "Phone",
    title: "Finding a phone model",
    text: "Look in your phone’s settings, often under “About”. The exact path depends on the device. Note the model name and generation.",
  },
  {
    id: "tablet",
    label: "Tablet",
    title: "Finding a tablet model",
    text: "Check the settings, often under “About” or “General”. Note the model name, screen size and generation — folios and keyboards change between them.",
  },
  {
    id: "other",
    label: "Other",
    title: "Finding another device’s model",
    text: "Look for a label on the device, its box or its settings menu. Note the make, model and any year or version shown.",
  },
  {
    id: "not-sure",
    label: "Not sure",
    title: "Not sure what you have?",
    text: "That’s fine. Tell us what you can — the make, roughly when you got it, and a description — and our team will help work it out.",
  },
] as const;

const STATUSES = [
  { label: "Needs confirmation — shown on this page", className: "border-[#E0A100] bg-[#FEF3D7] text-[#7A5200]", dot: "bg-[#7A5200]", active: true },
  { label: "Confirmed — only with signed data", className: "border-transparent bg-[#EAF6F0] text-[#0F7B5F]", dot: "bg-[#0F7B5F]", active: false },
  { label: "Not compatible", className: "border-transparent bg-[#FBECEC] text-[#9F2E2E]", dot: "bg-[#9F2E2E]", active: false },
  { label: "More info needed", className: "border-transparent bg-[#EEF0F6] text-[#4B5375]", dot: "bg-[#4B5375]", active: false },
] as const;

export default function FindYourModel() {
  const [activeId, setActiveId] = useState<string>(DEVICE_TYPES[0].id);
  const active = DEVICE_TYPES.find((d) => d.id === activeId) ?? DEVICE_TYPES[0];

  return (
    <section id="find-your-model" className="w-full scroll-mt-24 bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_420px] lg:gap-14">
        <div>
          <SectionHeader
            eyebrow="Find your model"
            title="Fit starts with your exact device"
            subtitle="Brand alone isn’t enough — the generation and variant matter."
            align="left"
            className="max-w-2xl"
          />

          <fieldset className="mt-8">
            <legend className="text-base font-bold text-[#11183C]">What’s it for?</legend>
            <div className="mt-3 flex flex-wrap gap-3">
              {DEVICE_TYPES.map(({ id, label }) => {
                const checked = id === activeId;
                return (
                  <label
                    key={id}
                    className={`inline-flex cursor-pointer items-center gap-2.5 rounded-full border-2 bg-white px-5 py-3 text-sm font-semibold text-[#11183C] transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#E11D74]/30 sm:text-base ${
                      checked ? "border-[#E11D74]" : "border-[#E2E5EF] hover:border-[#C9CEE0]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="device-type"
                      value={id}
                      checked={checked}
                      onChange={() => setActiveId(id)}
                      className="h-4 w-4 accent-[#E11D74]"
                    />
                    {label}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div aria-live="polite" className="mt-8 rounded-[20px] border border-[#E2E5EF] bg-white p-6">
            <h3 className="text-lg font-bold text-[#11183C]">{active.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[#2B3150] sm:text-base">{active.text}</p>
          </div>
        </div>

        <aside className="rounded-[24px] border border-[#E6E9F2] bg-white p-6 shadow-[0_20px_50px_rgba(17,24,60,0.1)] sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#B0135F]">Compatibility status</p>
          <h3 className="mt-2 text-xl font-extrabold text-[#11183C] sm:text-2xl">Compatibility needs confirmation</h3>
          <ul className="mt-5 space-y-2.5">
            {STATUSES.map(({ label, className, dot, active: isActive }) => (
              <li
                key={label}
                aria-current={isActive ? "true" : undefined}
                className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold ${className} ${
                  isActive ? "" : "opacity-55"
                }`}
              >
                <span aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-full ${dot}`} />
                {label}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-[#2B3150]">
            We don’t run a device lookup on this page, so nothing shows as “Confirmed”. Ask our team to check.
          </p>
        </aside>
      </div>
    </section>
  );
}
