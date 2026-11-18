import React from "react";
import {
  ChartColumnIncreasing,
  FileText,
  Globe,
  Phone,
  PoundSterling,
  Router,
  TriangleAlert,
  Wrench,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const QUESTIONS = [
  { title: "Monthly charge", text: "Including VAT?", icon: PoundSterling },
  { title: "Line rental", text: "Is it included?", icon: FileText },
  { title: "Calls outside your bundle", text: "Per-minute rates", icon: Phone },
  { title: "Premium & international", text: "Rates for these numbers", icon: Globe },
  { title: "Equipment", text: "Router, adapter or handset", icon: Router },
  { title: "Set-up", text: "Any installation fee", icon: Wrench },
  { title: "Price rises", text: "In £ and pence, with dates", icon: ChartColumnIncreasing },
  { title: "Leaving early", text: "Termination charges", icon: TriangleAlert },
] as const;

export default function QuestionsToAsk() {
  return (
    <section className="w-full bg-gradient-to-br from-[#060C36] via-[#0B1450] to-[#2A1A6E] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader dark eyebrow="Before you choose" title="Questions to ask about any home phone plan" />

        <ul className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUESTIONS.map(({ title, text, icon: Icon }) => (
            <li key={title} className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-5">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#F472B6]" strokeWidth={2} aria-hidden="true" />
              <div>
                <p className="text-base font-bold text-white/90">{title}</p>
                <p className="mt-0.5 text-sm text-[#C7CCE6]">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
