import React from "react";
import { ChartNoAxesColumnIncreasing, Receipt, Smartphone } from "lucide-react";
import SectionHeader from "./SectionHeader";

const QUESTIONS = [
  { title: "Separate SIM plans", text: "Each line has its own plan. Can they be on one account?", icon: Smartphone },
  { title: "Shared allowances", text: "Is shared data available, and how would it work?", icon: ChartNoAxesColumnIncreasing },
  { title: "Billing", text: "One bill or several? Who pays for which line?", icon: Receipt },
] as const;

export default function QuestionsWorthAsking() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="Options to ask about"
          title="Questions worth asking"
          subtitle="Not every option is offered. Our team will tell you what’s available."
        />

        <ul className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
          {QUESTIONS.map(({ title, text, icon: Icon }) => (
            <li
              key={title}
              className="rounded-3xl border border-[#ECEDF3] bg-white p-7 shadow-[0_12px_30px_rgba(28,26,51,0.08)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#A3227F] to-[#7A2A93] text-white">
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-[#1C1A33]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5F6275]">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
