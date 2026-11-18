import React from "react";
import { FileText, Flag, PoundSterling, Smartphone, Timer } from "lucide-react";
import SectionHeader from "./SectionHeader";

const COST_FACTORS = [
  { title: "Destination", text: "The country or territory you call.", icon: Flag },
  { title: "Number type", text: "Landline, mobile, special or satellite numbers can differ.", icon: Smartphone },
  { title: "Your plan", text: "Whether it includes any international minutes.", icon: FileText },
  { title: "Per-minute & connection", text: "A rate per minute, and sometimes a connection fee.", icon: PoundSterling },
  { title: "Billing increments", text: "How call time is rounded and any minimum charge.", icon: Timer },
] as const;

export default function FiveThingsThatSetTheCost() {
  return (
    <section
      id="how-charges-work"
      className="w-full scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader eyebrow="How charges work" title="Five things that set the cost of a call" />

        <ol className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {COST_FACTORS.map(({ title, text, icon: Icon }, i) => (
            <li
              key={title}
              className="relative rounded-3xl border border-[#E6E9F2] bg-white p-6 shadow-[0_10px_30px_rgba(17,24,60,0.06)]"
            >
              <span aria-hidden="true" className="absolute right-6 top-5 text-3xl font-extrabold text-[#EEEBFB]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-white">
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-[#11183C]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5375]">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
