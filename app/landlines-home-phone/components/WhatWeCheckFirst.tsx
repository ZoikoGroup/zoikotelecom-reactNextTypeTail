import React from "react";
import { FileText, Heart, House, PoundSterling } from "lucide-react";
import SectionHeader from "./SectionHeader";

const CHECKS = [
  { title: "Service at your address", text: "Whether service is available, and your current phone service.", icon: House },
  { title: "Safety & access needs", text: "Landline dependence, telecare and accessibility — handled in confidence.", icon: Heart },
  { title: "Number transfer", text: "Confirming the number is yours and can be moved, without cutting off your old line.", icon: FileText },
  { title: "Call rates", text: "The full call rates and what’s included, before you commit.", icon: PoundSterling },
] as const;

export default function WhatWeCheckFirst() {
  return (
    <section className="w-full bg-gradient-to-br from-[#060C36] via-[#0B1450] to-[#2A1A6E] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          dark
          eyebrow="When you’re ready to go ahead"
          title="What we’ll check with you first"
          subtitle="These checks happen with our team — not on this page."
        />

        <ul className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CHECKS.map(({ title, text, icon: Icon }) => (
            <li key={title} className="flex flex-col rounded-3xl border border-white/15 bg-white/[0.06] p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8]">
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#C7CCE6]">{text}</p>
              <p className="mt-5 text-xs font-bold text-[#FBBF24]">Done with our team</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
