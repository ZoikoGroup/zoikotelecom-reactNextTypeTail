import React from "react";
import { Check, X } from "lucide-react";

const TRY_ITEMS = [
  "Place it in an open, central spot",
  "Raise it off the floor — a shelf works well",
  "Keep it upright with nothing on top",
  "Use a cable for TVs, consoles or desktops near the router",
] as const;

const AVOID_ITEMS = [
  "Inside cupboards or behind the TV",
  "Next to microwaves, baby monitors or cordless phones",
  "Near mirrors, fish tanks or metal",
  "In a far corner of the house",
] as const;

export default function WhereYouPutYourRouterMatters() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            QUICK ADVICE
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Where you put your router matters
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Small changes can make a difference. Only move equipment where
            it&apos;s safe to do so.
          </p>
        </div>

        {/* Two-Column Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left Card: Try This */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#ECEEF6] bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D1E7DD] text-[#0F5132]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </div>
                <h3 className="text-xl font-extrabold tracking-tight text-[#11183C]">
                  Try this
                </h3>
              </div>

              <ul className="mt-6 space-y-3.5">
                {TRY_ITEMS.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[#4B5563]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F5132]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Card: Avoid This */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#ECEEF6] bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F8D7DA] text-[#721C24]">
                  <X className="h-4 w-4" strokeWidth={3} />
                </div>
                <h3 className="text-xl font-extrabold tracking-tight text-[#11183C]">
                  Avoid this
                </h3>
              </div>

              <ul className="mt-6 space-y-3.5">
                {AVOID_ITEMS.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[#4B5563]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#721C24]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
