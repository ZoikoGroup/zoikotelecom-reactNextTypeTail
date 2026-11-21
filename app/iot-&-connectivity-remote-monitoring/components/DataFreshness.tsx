"use client";

import React, { useState } from "react";
import { AlertTriangle, Check, Clock, Wifi } from "lucide-react";

type StateKey = "current" | "stale" | "none" | "abnormal";

const STATES: {
  key: StateKey;
  title: string;
  text: string;
  icon: typeof Check;
  iconClass: string;
  value: string;
  valueClass: string;
  badgeClass: string;
  dotClass: string;
  taken: string;
  received: string;
  quality: string;
  note: string;
}[] = [
  {
    key: "current",
    title: "Current reading",
    text: "Arrived within the expected interval",
    icon: Check,
    iconClass: "bg-[#E3F6EF] text-[#12936F]",
    value: "3.8",
    valueClass: "text-[#11183C]",
    badgeClass: "bg-[#E3F6EF] text-[#0F7B5F]",
    dotClass: "bg-[#12936F]",
    taken: "2 minutes ago",
    received: "2 minutes ago",
    quality: "Valid",
    note: "The reading arrived on time, so it can be shown as the current value.",
  },
  {
    key: "stale",
    title: "Stale reading",
    text: "Older than the agreed freshness rule",
    icon: Clock,
    iconClass: "bg-[#FEF3D7] text-[#9A6A00]",
    value: "3.8",
    valueClass: "text-[#A0A6BE]",
    badgeClass: "bg-[#FEF3D7] text-[#9A6A00]",
    dotClass: "bg-[#D99A00]",
    taken: "48 minutes ago",
    received: "47 minutes ago",
    quality: "Valid · out of date",
    note: "This value is older than the freshness rule allows. Show its age clearly — don’t present it as the current temperature.",
  },
  {
    key: "none",
    title: "No current reading",
    text: "Nothing has arrived recently",
    icon: Wifi,
    iconClass: "bg-[#EEF0F6] text-[#4B5375]",
    value: "—",
    valueClass: "text-[#A0A6BE]",
    badgeClass: "bg-[#EEF0F6] text-[#4B5375]",
    dotClass: "bg-[#8A90A6]",
    taken: "Last reading 3 hours ago",
    received: "Nothing since",
    quality: "Unknown",
    note: "No reading has arrived recently. Say so plainly rather than repeating the last value.",
  },
  {
    key: "abnormal",
    title: "Abnormal reading",
    text: "A confirmed sensor value outside its range",
    icon: AlertTriangle,
    iconClass: "bg-[#FDE4E2] text-[#B42318]",
    value: "9.6",
    valueClass: "text-[#B42318]",
    badgeClass: "bg-[#FDE4E2] text-[#B42318]",
    dotClass: "bg-[#B42318]",
    taken: "1 minute ago",
    received: "1 minute ago",
    quality: "Valid · outside range",
    note: "A confirmed value outside its agreed range. What happens next depends on your own response plan.",
  },
];

export default function DataFreshness() {
  const [active, setActive] = useState<StateKey>("current");
  const state = STATES.find((s) => s.key === active) ?? STATES[0];

  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            Data freshness
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            An old reading is not a current reading
          </h2>
          <p className="mt-3.5 max-w-[640px] text-sm leading-relaxed text-[#4B5375] sm:text-base">
            Good monitoring shows the difference between current, stale and
            missing data. Choose a state to see how an honest display should
            handle it.
          </p>

          <div role="group" aria-label="Reading states" className="mt-8 space-y-3">
            {STATES.map(({ key, title, text, icon: Icon, iconClass }) => {
              const isActive = key === active;
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(key)}
                  className={`flex w-full items-center gap-4 rounded-2xl border bg-white px-5 py-3.5 text-left transition-all ${
                    isActive
                      ? "border-2 border-[#11183C] shadow-[0_10px_26px_rgba(17,24,60,0.08)]"
                      : "border-[#DCE0EC] hover:border-[#B8BED4]"
                  }`}
                >
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconClass}`}>
                    <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-base font-bold text-[#11183C]">{title}</span>
                    <span className="block text-sm text-[#4B5375]">{text}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          aria-live="polite"
          className="mx-auto w-full max-w-[440px] rounded-[26px] border border-[#E6E9F2] bg-white p-6 shadow-[0_20px_50px_rgba(17,24,60,0.08)]"
        >
          <div className="flex items-center justify-between gap-3 border-b border-[#E6E9F2] pb-3">
            <p className="text-base font-bold text-[#11183C]">Cold store 2 · Temperature</p>
            <span className="rounded-md bg-[#EEF0F6] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#6B7194]">
              Illustrative
            </span>
          </div>

          <p className="mt-5 flex items-start gap-1.5">
            <span className={`text-6xl font-extrabold tracking-tight ${state.valueClass}`}>
              {state.value}
            </span>
            {state.value !== "—" && (
              <span className="mt-6 text-xl font-bold text-[#6B7194]">°C</span>
            )}
          </p>

          <span className={`mt-3 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-bold ${state.badgeClass}`}>
            <span aria-hidden="true" className={`h-2 w-2 rounded-full ${state.dotClass}`} />
            {state.title}
          </span>

          <dl className="mt-5 grid grid-cols-[110px_1fr] gap-y-2.5 border-t border-dashed border-[#E2E5EF] pt-4 text-sm">
            <dt className="text-[#6B7194]">Taken</dt>
            <dd className="font-bold text-[#11183C]">{state.taken}</dd>
            <dt className="text-[#6B7194]">Received</dt>
            <dd className="font-bold text-[#11183C]">{state.received}</dd>
            <dt className="text-[#6B7194]">Quality</dt>
            <dd className="font-bold text-[#11183C]">{state.quality}</dd>
          </dl>

          <p className="mt-4 rounded-xl bg-[#F5F6FB] px-4 py-3 text-sm leading-relaxed text-[#2B3150]">
            {state.note}
          </p>
        </div>
      </div>
    </section>
  );
}
