import React from "react";
import { ArrowLeftRight, FileText, Phone, Plug, Router, Wifi } from "lucide-react";
import SectionHeader from "./SectionHeader";

const BEFORE = [
  { text: "Phone plugged into a wall socket", icon: Phone },
  { text: "Often worked in a power cut", icon: Plug },
  { text: "Separate from broadband", icon: FileText },
] as const;

const NOW = [
  { text: "Phone connects via your router", icon: Router },
  { text: "Needs mains power to work", icon: Plug },
  { text: "Relies on your internet connection", icon: Wifi },
] as const;

export default function WhatsChanging() {
  return (
    <section id="whats-changing" className="w-full scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="What’s changing"
          title="From traditional lines to digital landlines"
          subtitle="UK phone lines are moving from the old copper network to digital services that carry calls over the internet (sometimes called Digital Voice or VoIP)."
        />

        <div className="relative mx-auto mt-12 grid max-w-6xl grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-10">
          <div className="rounded-3xl bg-[#EFF0F7] p-8">
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#8A90A6]">Before</p>
            <h3 className="mt-2 text-2xl font-extrabold text-[#11183C]">Traditional landline</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4B5375] sm:text-base">
              Calls travelled over the copper telephone network, which carried its own
              small power supply.
            </p>
            <ul className="mt-4 space-y-2.5">
              {BEFORE.map(({ text, icon: Icon }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-[#4B5375] sm:text-base">
                  <Icon className="h-4 w-4 shrink-0 text-[#8A90A6]" strokeWidth={2} aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <span
            aria-hidden="true"
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E11D74] text-white shadow-[0_10px_30px_rgba(225,29,116,0.35)]"
          >
            <ArrowLeftRight className="h-6 w-6 rotate-90 md:rotate-0" strokeWidth={2} />
          </span>

          <div className="rounded-3xl bg-gradient-to-br from-[#14125A] via-[#1C1A6E] to-[#7B3FE4] p-8 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#F472B6]">Now</p>
            <h3 className="mt-2 text-2xl font-extrabold">Digital landline</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
              Calls are carried as data through your broadband connection and router.
            </p>
            <ul className="mt-4 space-y-2.5">
              {NOW.map(({ text, icon: Icon }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-white/85 sm:text-base">
                  <Icon className="h-4 w-4 shrink-0 text-[#F472B6]" strokeWidth={2} aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
