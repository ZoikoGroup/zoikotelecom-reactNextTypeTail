import React from "react";
import SectionHeader from "./SectionHeader";

const DIAL_STEPS = [
  {
    title: "Start with 00 or +",
    text: "This tells the network you’re calling abroad.",
    example: "00 … or + …",
    panel: "bg-white",
    heading: "text-[#11183C]",
    body: "text-[#4B5375]",
    chip: "bg-[#F1ECFE] text-[#7B3FE4]",
  },
  {
    title: "Add the country code",
    text: "For example, 33 for France or 91 for India.",
    example: "+33",
    panel: "bg-[#F4F0FE]",
    heading: "text-[#11183C]",
    body: "text-[#4B5375]",
    chip: "bg-[#E6DCFD] text-[#7B3FE4]",
  },
  {
    title: "Add the number",
    text: "Usually without its first 0 (the trunk prefix). Check the format for each country.",
    example: "+33 then the number without its first 0",
    panel: "bg-gradient-to-br from-[#14125A] to-[#2A1A6E]",
    heading: "text-white",
    body: "text-white/80",
    chip: "bg-white/10 text-[#F472B6]",
  },
] as const;

export default function HowToDialAbroad() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="Dialling guide"
          title="How to dial a number abroad"
          subtitle="Three simple steps from a UK phone."
        />

        <ol className="mx-auto mt-12 grid max-w-6xl grid-cols-1 overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(17,24,60,0.1)] md:grid-cols-3">
          {DIAL_STEPS.map((step, i) => (
            <li key={step.title} className={`p-8 ${step.panel}`}>
              <span
                aria-hidden="true"
                className="bg-gradient-to-r from-[#E11D74] to-[#8E37E8] bg-clip-text text-5xl font-extrabold text-transparent"
              >
                {i + 1}
              </span>
              <h3 className={`mt-4 text-lg font-extrabold ${step.heading}`}>{step.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${step.body}`}>{step.text}</p>
              <p className={`mt-4 inline-block rounded-lg px-3 py-2 text-sm font-bold ${step.chip}`}>
                {step.example}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
