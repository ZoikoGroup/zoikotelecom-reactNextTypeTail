import React from "react";
import Image from "next/image";
import { ArrowLeftRight, AlertTriangle, Calendar } from "lucide-react";

const SWITCHING_STEPS = [
  {
    id: "one-touch-switch",
    title: "One Touch Switch",
    description:
      "For most switches, your new provider arranges it with your old one.",
    icon: ArrowLeftRight,
  },
  {
    id: "check-exit-fees",
    title: "Check exit fees",
    description:
      "Your old provider tells you about any charges for leaving early.",
    icon: AlertTriangle,
  },
  {
    id: "some-moves-take-longer",
    title: "Some moves take longer",
    description: "Unusual set-ups may need extra steps. We’ll explain.",
    icon: Calendar,
  },
] as const;

export default function SwitchingToFullFibre() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Content Column */}
          <div className="lg:col-span-6">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
              SWITCHING
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
              Switching to full fibre
            </h2>

            <div className="mt-9 space-y-6">
              {SWITCHING_STEPS.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F4297B] to-[#8A3FFC] text-white shadow-sm">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold tracking-tight text-[#11183C]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#4B5563]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-[0_18px_40px_rgba(17,24,60,0.12)] sm:aspect-[16/13]">
              <Image
                src="/Images/full/10.png"
                alt="Overhead view of a person reviewing architectural drawings and technical blueprints at a desk"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
