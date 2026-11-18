import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import SectionHeader from "./SectionHeader";

const SWITCH_POINTS = [
  { title: "One code per number", text: "Text “PAC” to 65075 from each phone (UK rules)." },
  { title: "Share the codes with our team", text: "We’ll explain the timing for each line." },
  { title: "Adding lines later", text: "Existing customers can ask our team. Online line management isn’t available yet." },
] as const;

export default function MovingSeveralNumbers() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-r from-[#C1328F] via-[#A3227F] to-[#7A2A93] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1220px]">
        <SectionHeader tone="light" eyebrow="Switching" title="Moving several numbers" />

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-base text-white/90 sm:text-lg">
              Each number needs its own code from your current provider.
            </p>
            <ul className="mt-6 space-y-6">
              {SWITCH_POINTS.map((point) => (
                <li key={point.title} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#A3227F]">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-base font-semibold">{point.title}</p>
                    <p className="mt-1 text-sm text-white/85">{point.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto aspect-[526/336] w-full max-w-[526px]">
            <Image
              src="/Images/multi-line-plans/switching-numbers-illustration.webp"
              alt="Illustration: three phones each sending a PAC code to the Zoiko team"
              fill
              sizes="(min-width: 1024px) 526px, 90vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
