import React from "react";
import { Map, Home, MapPin, ChevronRight } from "lucide-react";

const STEPS_DATA = [
  {
    id: "your-postcode",
    tag: "STEP BACK",
    title: "Your postcode",
    description:
      "Covers a group of properties. Useful for a rough idea, but it can't confirm what your home can get.",
    icon: Map,
    bg: "bg-white",
    textColor: "text-[#11183C]",
    subTextColor: "text-[#4B5563]",
    tagColor: "text-[#E11D74]",
    iconBg: "bg-[#F4F5F9] text-[#11183C]",
    hasArrow: true,
  },
  {
    id: "your-address",
    tag: "CLOSER",
    title: "Your address",
    description:
      "Your exact house or flat. Flats sharing a postcode can have different connections.",
    icon: Home,
    bg: "bg-[#F9F8FE]",
    textColor: "text-[#11183C]",
    subTextColor: "text-[#4B5563]",
    tagColor: "text-[#E11D74]",
    iconBg: "bg-[#EDE9FE] text-[#7C3AED]",
    hasArrow: true,
  },
  {
    id: "network-serviceability",
    tag: "THE ANSWER",
    title: "Network serviceability",
    description:
      "Whether a network can actually connect your property — and if any survey or permission is needed.",
    icon: MapPin,
    bg: "bg-gradient-to-br from-[#060C36] via-[#081040] to-[#2A1A6E]",
    textColor: "text-white",
    subTextColor: "text-[#D1D5EB]",
    tagColor: "text-[#F4297B]",
    iconBg: "bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-white",
    hasArrow: false,
  },
] as const;

export default function PostcodeAddressAndNetwork() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            WHY YOUR EXACT ADDRESS MATTERS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Postcode, address and network
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Homes on the same street — even in the same building — can have
            different options.
          </p>
        </div>

        {/* Three-Column Connected Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 overflow-hidden rounded-3xl border border-[#ECEEF6] bg-white shadow-[0_12px_35px_rgba(17,24,60,0.06)] lg:grid-cols-3">
          {STEPS_DATA.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className={`relative flex flex-col justify-between p-8 sm:p-10 ${step.bg} ${
                  index !== 2
                    ? "border-b border-[#ECEEF6] lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-black uppercase tracking-wider ${step.tagColor}`}
                    >
                      {step.tag}
                    </span>
                    {step.hasArrow && (
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E11D74] text-white shadow-md">
                        <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                      </div>
                    )}
                  </div>

                  <div
                    className={`mt-6 flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm ${step.iconBg}`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2.25} />
                  </div>

                  <h3
                    className={`mt-6 text-2xl font-extrabold tracking-tight ${step.textColor}`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-relaxed ${step.subTextColor}`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
