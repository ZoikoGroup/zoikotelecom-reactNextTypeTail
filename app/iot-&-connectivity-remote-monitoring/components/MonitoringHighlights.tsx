import React from "react";
import { BarChart3, BriefcaseBusiness, Map, Radio } from "lucide-react";

const HIGHLIGHTS = [
  { title: "Asset connectivity", text: "For connected sensors and equipment", icon: Radio },
  { title: "Distributed sites", text: "One location or many", icon: Map },
  { title: "Data transfer", text: "Cadence, buffering and volume", icon: BarChart3 },
  { title: "Expert enquiry", text: "A conversation with our team", icon: BriefcaseBusiness },
] as const;

export default function MonitoringHighlights() {
  return (
    <section className="w-full border-y border-[#DDF0EA] bg-white">
      <ul className="mx-auto grid max-w-[1440px] grid-cols-1 gap-px bg-[#DDF0EA] sm:grid-cols-2 lg:grid-cols-4">
        {HIGHLIGHTS.map(({ title, text, icon: Icon }) => (
          <li
            key={title}
            className="flex items-start justify-center gap-4 bg-white px-6 py-6"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E3F6EF] text-[#12936F]">
              <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
            </span>
            <span className="min-w-0 max-w-[200px]">
              <span className="block text-base font-bold text-[#11183C]">{title}</span>
              <span className="mt-0.5 block text-sm leading-relaxed text-[#4B5375]">{text}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
