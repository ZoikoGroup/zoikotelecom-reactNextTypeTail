import React from "react";
import { Gauge, Lock, Phone, Plug, Router, Shield } from "lucide-react";
import SectionHeader from "./SectionHeader";

const CHECKLIST = [
  { title: "Bandwidth", text: "Enough for calls at busy times", icon: Gauge },
  { title: "Call quality", text: "Router settings that prioritise voice", icon: Shield },
  { title: "Firewall", text: "Allows the service through", icon: Lock },
  { title: "Router", text: "Suitable for business voice", icon: Router },
  { title: "Power", text: "And a plan for power cuts", icon: Plug },
  { title: "Handsets", text: "Compatibility confirmed with you", icon: Phone },
] as const;

export default function DevicesChecklist() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#060C36] via-[#0B1450] to-[#2A1A6E] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          dark
          eyebrow="Getting ready"
          title="Devices and connectivity checklist"
          subtitle="Our team confirms the exact requirements for your service."
        />

        <ul className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {CHECKLIST.map(({ title, text, icon: Icon }) => (
            <li
              key={title}
              className="flex flex-col items-center rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-7 text-center backdrop-blur-sm"
            >
              <Icon className="h-6 w-6 text-[#F472B6]" strokeWidth={2} aria-hidden="true" />
              <p className="mt-4 text-base font-extrabold">{title}</p>
              <p className="mt-1 text-sm leading-relaxed text-[#C7CCE6]">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
