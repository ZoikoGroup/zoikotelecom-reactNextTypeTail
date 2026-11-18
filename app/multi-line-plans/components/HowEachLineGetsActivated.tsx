import React from "react";
import SectionHeader from "./SectionHeader";

const ACTIVATION_STEPS = [
  { title: "Configure", text: "Choose plans for each line" },
  { title: "Review", text: "Every charge and term" },
  { title: "Submit", text: "Order or quote request received" },
  { title: "BT submission", text: "Our team arranges activation with BT Wholesale" },
  { title: "Activation details", text: "Received and checked by our team" },
  { title: "Secure hand-off", text: "Sent to the right person for each line" },
  { title: "Active", text: "Only once genuinely confirmed" },
] as const;

export default function HowEachLineGetsActivated() {
  return (
    <section className="w-full bg-gradient-to-b from-[#F5F6FB] to-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1220px]">
        <SectionHeader
          tone="navy"
          align="left"
          eyebrow="After you order"
          title="How each line gets activated"
          subtitle="Activation is tracked line by line — it isn’t instant."
        />

        <ol className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {ACTIVATION_STEPS.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-[#E6E9F2] bg-white p-4">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF1FB] text-xs font-bold text-[#7B86B5]"
              >
                {i + 1}
              </span>
              <p className="mt-4 text-sm font-extrabold text-[#11183C] sm:text-base">{step.title}</p>
              <p className="mt-1 text-sm leading-snug text-[#4B5375]">{step.text}</p>
            </li>
          ))}
        </ol>

        <blockquote className="mt-4 rounded-xl border-l-4 border-[#8E37E8] bg-[#EEF1FB] px-5 py-4 text-sm leading-relaxed text-[#1E2A50]">
          “We’ve received your order. Zoiko Telecom will send your SIM details to BT
          Wholesale for activation. We’ll update you when we receive the information
          needed to activate each line. Your lines are not yet active.”
        </blockquote>
      </div>
    </section>
  );
}
