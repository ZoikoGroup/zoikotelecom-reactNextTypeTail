import React from "react";
import { BatteryMedium, Globe, Plug, Router, Smartphone } from "lucide-react";
import SectionHeader from "./SectionHeader";

const CHAIN = [
  { title: "Mains power", text: "For router & phone", icon: Plug },
  { title: "Internet", text: "Broadband service", icon: Globe },
  { title: "Router", text: "Connects your phone", icon: Router },
  { title: "Your phone", text: "Calls in & out", icon: Smartphone },
] as const;

export default function WhatItReliesOn() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="What it depends on"
          title="What your digital phone relies on"
          subtitle="If any link in this chain stops, calls can stop too."
        />

        <figure className="mx-auto mt-10 max-w-6xl rounded-3xl border border-[#E6E9F2] bg-white px-6 py-10 shadow-[0_20px_50px_rgba(17,24,60,0.06)] sm:px-12">
          <ol className="flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-0">
            {CHAIN.map(({ title, text, icon: Icon }, i) => (
              <React.Fragment key={title}>
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="h-8 w-1.5 rounded-full bg-gradient-to-b from-[#E11D74] to-[#8E37E8] md:mt-8 md:h-1.5 md:w-auto md:flex-1 md:bg-gradient-to-r"
                  />
                )}
                <li className="flex w-40 shrink-0 flex-col items-center text-center">
                  <span className="flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-white">
                    <Icon className="h-8 w-8" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <p className="mt-3 text-base font-extrabold text-[#11183C]">{title}</p>
                  <p className="mt-1 text-sm text-[#4B5375]">{text}</p>
                </li>
              </React.Fragment>
            ))}
          </ol>

          <p className="mx-auto mt-8 flex max-w-[640px] items-start gap-3 rounded-2xl border-2 border-dashed border-[#D3D8E8] px-5 py-4 text-sm text-[#4B5375] sm:text-base">
            <BatteryMedium className="mt-0.5 h-5 w-5 shrink-0 text-[#16A34A]" strokeWidth={2} aria-hidden="true" />
            <span>
              <strong className="font-bold text-[#11183C]">Backup is separate.</strong> A battery
              backup or alternative way to call is a separate, conditional solution — it isn’t
              part of every service.
            </span>
          </p>
          <figcaption className="mt-4 text-center text-xs text-[#8A90A6]">
            Illustration of typical dependencies. Your set-up may differ.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
