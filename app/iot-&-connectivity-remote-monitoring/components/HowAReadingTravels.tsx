import React from "react";
import { Clock, Cloud, Radio, RadioTower, User } from "lucide-react";
import SectionHeader from "./SectionHeader";

type Step = {
  title: string;
  text: string;
  icon: typeof Radio;
  optional?: boolean;
};

const STEPS: Step[] = [
  { title: "Sampling", text: "The sensor takes a reading at a set interval or on an event.", icon: Radio },
  { title: "Timestamp", text: "The reading is labelled with when it was taken.", icon: Clock },
  { title: "Transport", text: "The network carries it — possibly after buffering.", icon: RadioTower },
  { title: "Your platform", text: "Your system receives, stores and checks it.", icon: Cloud },
  { title: "Review", text: "Only where a signed service covers it.", icon: User, optional: true },
];

export default function HowAReadingTravels() {
  return (
    <section className="w-full bg-gradient-to-br from-[#0B1446] via-[#1F2470] to-[#4E3F9A] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          dark
          eyebrow="Data flow"
          title="How a reading travels"
          subtitle="The final review step only exists if you have a signed service for it."
          className="max-w-2xl"
        />

        <ol className="relative mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          <span
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-9 hidden h-1 rounded-full bg-gradient-to-r from-[#12936F] via-[#3B6CF6] via-50% to-[#E11D74] lg:block"
          />
          {STEPS.map(({ title, text, icon: Icon, optional }) => {
            return (
              <li key={title} className="relative flex flex-col items-center text-center">
                <span
                  className={`flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white text-[#D0118C] ${
                    optional
                      ? "border-[3px] border-dashed border-[#C9CDE3]"
                      : "border-4 border-[#DCE0F5]"
                  }`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                <p className="mt-1.5 max-w-[220px] text-sm leading-relaxed text-[#C9CDE3]">{text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
