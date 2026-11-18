import React from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const STEPS = [
  {
    title: "Talk to our team",
    text: "Share your summary and questions.",
    image: "/Images/multi-line-plans/step-talk-to-team.webp",
    alt: "Two colleagues chatting in an office",
  },
  {
    title: "Confirm the offer",
    text: "We explain what’s available for your lines.",
    image: "/Images/multi-line-plans/step-confirm-offer.webp",
    alt: "Customer being handed a phone at a counter",
  },
  {
    title: "Read the written terms",
    text: "Per-line prices, terms and any price changes.",
    image: "/Images/multi-line-plans/step-written-terms.webp",
    alt: "Magnifying glass over a terms and conditions document",
  },
  {
    title: "Choose and activate",
    text: "Set up each SIM or eSIM.",
    image: "/Images/multi-line-plans/step-activate.webp",
    alt: "Hand holding a phone showing a plan activation screen",
  },
] as const;

export default function ConversationToConnected() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="How it works"
          title="From conversation to connected"
          subtitle="No instant activation promises."
        />

        <ol className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li
              key={step.title}
              className="rounded-2xl border border-[#ECEDF3] bg-white p-6 shadow-[0_12px_30px_rgba(28,26,51,0.08)]"
            >
              <div className="relative aspect-[231/133] w-full overflow-hidden">
                <Image src={step.image} alt={step.alt} fill sizes="(min-width: 1024px) 240px, 50vw" className="object-cover" />
              </div>
              <h3 className="mt-8 text-sm font-semibold text-[#5F6275]">{step.title}</h3>
              <p className="mt-1 text-sm text-[#5F6275]">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
