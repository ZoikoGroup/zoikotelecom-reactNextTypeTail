import React from "react";
import { BarChart2, Home, Shield, Wifi } from "lucide-react";

const SPEED_FIGURES = [
  {
    id: "advertised-average",
    title: "Advertised average",
    description:
      "The speed at least half of customers get at peak time. Your speed may be higher or lower.",
    icon: BarChart2,
    topBorderClass: "border-t-4 border-t-[#E11D74]",
  },
  {
    id: "estimate-for-address",
    title: "Estimate for your address",
    description:
      "The speed range expected at your property, given before you sign up.",
    icon: Home,
    topBorderClass: "border-t-4 border-t-[#8A3FFC]",
  },
  {
    id: "minimum-guaranteed",
    title: "Minimum guaranteed",
    description:
      "Where a provider offers one, the lowest speed before you can raise a problem.",
    icon: Shield,
    topBorderClass: "border-t-4 border-t-[#3B82F6]",
  },
] as const;

export default function SpeedsExplained() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            SPEEDS EXPLAINED
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Three speed figures — and Wi-Fi
          </h2>
          <p className="mx-auto mt-3.5 max-w-xl text-sm leading-relaxed text-[#4B5563] sm:text-base">
            When you compare plans, you&apos;ll see different speed numbers.
            Here&apos;s what each one means.
          </p>
        </div>

        {/* Three Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-[1300px] grid-cols-1 gap-6 md:grid-cols-3">
          {SPEED_FIGURES.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`rounded-3xl bg-white p-7 shadow-[0_6px_24px_rgba(17,24,60,0.04)] sm:p-8 ${item.topBorderClass}`}
              >
                {/* Gradient Icon Badge */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#F4297B] to-[#8A3FFC] text-white shadow-sm">
                  <Icon className="h-5 w-5" strokeWidth={2.25} />
                </div>

                <h3 className="mt-6 text-xl font-extrabold tracking-tight text-[#11183C]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Info Callout Banner */}
        <div className="mx-auto mt-6 max-w-[1300px] rounded-2xl bg-[#EAEFF9] px-5 py-4 sm:px-6 sm:py-5">
          <div className="flex items-start gap-4 sm:items-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FCE8F1] text-[#E11D74]">
              <Wifi className="h-5 w-5" strokeWidth={2.25} />
            </div>
            <p className="text-sm leading-relaxed text-[#2D365C]">
              <strong className="font-bold text-[#11183C]">
                Wi-Fi isn&apos;t the same as your line speed.
              </strong>{" "}
              Walls, distance and older devices can slow Wi-Fi. A wired
              connection usually gets closest to your line speed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
