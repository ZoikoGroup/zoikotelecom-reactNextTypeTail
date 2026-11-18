import React from "react";
import SectionHeader from "./SectionHeader";

const ONBOARDING_STEPS = [
  { title: "Requirements", text: "Users, sites, numbers and features" },
  { title: "Proposal", text: "Service, full costs and terms" },
  { title: "Readiness", text: "Network, devices and safety checks" },
  { title: "Transfer & install", text: "Numbers moved, equipment set up" },
  { title: "Testing", text: "Calls, routing and emergency details" },
  { title: "Handover", text: "Training and support contacts" },
] as const;

export default function HowMovingWorks() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="Onboarding"
          title="How moving to business voice works"
          subtitle="Timings depend on your business — we’ll agree them with you."
        />

        <ol className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {ONBOARDING_STEPS.map((step, i) => (
            <li
              key={step.title}
              className="relative overflow-hidden rounded-2xl border border-[#E6E9F2] bg-white py-6 pl-6 pr-4"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#E11D74] to-[#8E37E8]"
              />
              <p className="text-xs font-bold text-[#E11D74]">Step {i + 1}</p>
              <p className="mt-2 text-base font-extrabold text-[#11183C]">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5375]">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
