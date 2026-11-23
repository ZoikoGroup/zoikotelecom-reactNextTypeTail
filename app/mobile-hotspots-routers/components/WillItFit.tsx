import React from "react";
import { BarChart3, Layers, MapPin, Plug, RadioTower, Router, type LucideIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";

const CHECKS: { icon: LucideIcon; title: string; text: string; note: string }[] = [
  {
    icon: MapPin,
    title: "Location",
    text: "Home, travel, work site or vehicle — each behaves differently.",
    note: "We don’t collect your exact location.",
  },
  {
    icon: RadioTower,
    title: "Coverage",
    text: "Predictions differ from indoor performance, device bands and busy times.",
    note: "No serviceability or speed result is given.",
  },
  {
    icon: Router,
    title: "Device compatibility",
    text: "Router model, radio bands, network lock, SIM size, eSIM and APN.",
    note: "Ask us to confirm for the exact model.",
  },
  {
    icon: BarChart3,
    title: "Mobile data terms",
    text: "Allowance, fair use, hotspot or tethering rules, overage and roaming.",
    note: "No blanket “unlimited” claim.",
  },
  {
    icon: Layers,
    title: "Network set-up",
    text: "Shared public IP (CGNAT), static IP, IPv6 and port access.",
    note: "Only as the provider contract confirms.",
  },
  {
    icon: Plug,
    title: "Placement & power",
    text: "Indoor position, ventilation, power and battery heat.",
    note: "No location is safe for every device.",
  },
];

export default function WillItFit() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader eyebrow="Will it fit?" title="Check the details that decide whether it works" />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CHECKS.map(({ icon: Icon, title, text, note }) => (
            <article
              key={title}
              className="relative overflow-hidden rounded-[20px] border border-[#E6E9F2] bg-white py-6 pl-7 pr-6 shadow-[0_12px_30px_rgba(17,24,60,0.08)]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#E11D74] to-[#7C3AED]"
              />
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FCE7F3]">
                <Icon className="h-5 w-5 text-[#B0135F]" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-[#11183C]">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#374063]">{text}</p>
              <p className="mt-3 text-xs font-medium text-[#8A5A00] sm:text-sm">{note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
