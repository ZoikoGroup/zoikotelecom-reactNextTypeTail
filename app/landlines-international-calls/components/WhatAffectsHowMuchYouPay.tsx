import React from "react";
import { FileText, PoundSterling, Timer, TriangleAlert } from "lucide-react";
import SectionHeader from "./SectionHeader";

const FACTORS = [
  { title: "Call length", text: "Longer calls cost more on per-minute rates.", icon: Timer },
  { title: "Taxes & connection fees", text: "VAT and any set-up charge per call.", icon: PoundSterling },
  { title: "Premium & special numbers", text: "Can cost much more than standard numbers.", icon: TriangleAlert },
  { title: "Plan changes", text: "Rates can change — check your plan’s terms.", icon: FileText },
] as const;

const PLAN_TYPES = [
  {
    title: "Plan allowance",
    text: "Some plans include international minutes to certain destinations. Read which countries and number types are included and what happens when minutes run out.",
    icon: FileText,
  },
  {
    title: "Pay as you go",
    text: "Without an allowance, each call is charged at the rate for that destination. We’ll only compare the two when both are confirmed for the same type of call.",
    icon: PoundSterling,
  },
] as const;

const CARD = "rounded-3xl border border-[#E6E9F2] bg-white p-6 shadow-[0_10px_30px_rgba(17,24,60,0.06)]";

function GradientIcon({ icon: Icon }: { icon: typeof Timer }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-white">
      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
    </span>
  );
}

export default function WhatAffectsHowMuchYouPay() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader eyebrow="Your bill" title="What affects how much you pay" />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FACTORS.map((f) => (
            <div key={f.title} className={CARD}>
              <GradientIcon icon={f.icon} />
              <h3 className="mt-5 text-lg font-extrabold text-[#11183C]">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5375]">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-5 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
          {PLAN_TYPES.map((p) => (
            <div key={p.title} className={CARD}>
              <div className="flex items-center gap-4">
                <GradientIcon icon={p.icon} />
                <h3 className="text-lg font-extrabold text-[#11183C]">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#4B5375]">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
