"use client";

import React, { useState } from "react";
import {
  BarChart3,
  CardSim,
  CircleAlert,
  Minus,
  Plug,
  Plus,
  RadioTower,
  Settings,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const STEPS: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Plug, title: "Power it on", text: "Charge the hotspot or plug in the router." },
  {
    icon: CardSim,
    title: "Insert an active SIM",
    text: "Use a SIM with a compatible, active plan — or set up eSIM if the model supports it.",
  },
  {
    icon: Wifi,
    title: "Connect your devices",
    text: "Use the Wi-Fi name and password from the device or its guide, then change them.",
  },
];

const ISSUES: { id: string; icon: LucideIcon; title: string; text: string }[] = [
  {
    id: "no-signal",
    icon: RadioTower,
    title: "No mobile signal",
    text: "Move the device nearer a window or higher up, away from thick walls and metal. Check the network’s coverage for your area and that the model supports the right radio bands.",
  },
  {
    id: "wifi-no-internet",
    icon: Wifi,
    title: "Wi-Fi works, but no internet",
    text: "Your devices are connected to the hotspot or router, but it isn’t getting data. Check the mobile signal, the plan’s data allowance and the APN settings, then restart the device.",
  },
  {
    id: "sim-not-active",
    icon: CardSim,
    title: "SIM not active",
    text: "Make sure the SIM is activated, inserted the right way and not PIN-locked. New SIMs can take a little while to activate. Contact your provider if it still isn’t recognised.",
  },
  {
    id: "data-limit",
    icon: BarChart3,
    title: "Data limit reached",
    text: "Check your usage against the plan’s allowance and any hotspot or tethering limits. Speeds may be reduced or data paused until the next billing period or a top-up.",
  },
  {
    id: "setup-error",
    icon: Settings,
    title: "Set-up error",
    text: "Restart the device and check the manufacturer’s guide. If settings were changed, a factory reset may help — note that it removes your custom Wi-Fi name and password.",
  },
  {
    id: "emergencies",
    icon: CircleAlert,
    title: "Not for emergencies",
    text: "Don’t rely on a hotspot or router for emergency calls. Power cuts, low battery or lost signal can stop it working — keep another way to call for help.",
  },
];

export default function GettingStarted() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) =>
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));

  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Getting started"
          title="Setting up — and what to check if it won’t connect"
          subtitle="General guidance — always follow the maker’s instructions."
        />

        <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="rounded-[20px] border border-[#E6E9F2] bg-white p-6 shadow-[0_12px_30px_rgba(17,24,60,0.08)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#7C3AED] text-white">
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-[#11183C]">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#374063]">{text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 grid grid-cols-1 items-start gap-4 md:grid-cols-2">
          {ISSUES.map(({ id, icon: Icon, title, text }) => {
            const isOpen = openIds.includes(id);
            const panelId = `issue-${id}`;
            return (
              <div key={id} className="overflow-hidden rounded-2xl border border-[#E6E9F2] bg-white">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(id)}
                  className="flex w-full items-center gap-3 px-6 py-5 text-left"
                >
                  <Icon className="h-4 w-4 shrink-0 text-[#E11D74]" strokeWidth={2} aria-hidden="true" />
                  <span className="flex-1 text-sm font-bold text-[#11183C] sm:text-base">{title}</span>
                  {isOpen ? (
                    <Minus className="h-4 w-4 shrink-0 text-[#E11D74]" strokeWidth={2.5} aria-hidden="true" />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0 text-[#E11D74]" strokeWidth={2.5} aria-hidden="true" />
                  )}
                </button>
                {isOpen && (
                  <div id={panelId} className="border-t border-[#EEF0F7] px-6 py-4 text-sm leading-relaxed text-[#4B5563]">
                    {text}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
