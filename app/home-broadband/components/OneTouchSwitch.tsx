import React from "react";

const SWITCHING_STEPS = [
  {
    id: "choose-your-plan",
    title: "Choose your plan",
    description: "Check costs, speed and contract length.",
  },
  {
    id: "tell-your-new-provider",
    title: "Tell your new provider",
    description: "They contact your old provider for you.",
  },
  {
    id: "check-what-changes",
    title: "Check what changes",
    description:
      "Your old provider tells you about any exit fees and services affected.",
  },
  {
    id: "switch-over",
    title: "Switch over",
    description: "Your new service starts on the agreed date.",
  },
] as const;

export default function OneTouchSwitch() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            SWITCHING
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Switching is simpler with One Touch Switch
          </h2>
          <p className="mx-auto mt-3.5 max-w-xl text-sm leading-relaxed text-[#4B5563] sm:text-base">
            For most home broadband switches between providers on different
            networks, you only need to contact your new provider.
          </p>
        </div>

        {/* 4-Step Timeline */}
        <div className="relative mx-auto mt-14 max-w-[1300px]">
          {/* Connecting Gradient Line (Desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-[2px] bg-gradient-to-r from-[#E11D74] via-[#8A3FFC] to-[#3B82F6] md:block"
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            {SWITCHING_STEPS.map((step) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center"
              >
                {/* Circle Node */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#E11D74] bg-white shadow-[0_4px_16px_rgba(225,29,116,0.22)]" />

                {/* Text Content */}
                <h3 className="mt-6 text-base font-extrabold tracking-tight text-[#11183C]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[230px] text-sm leading-relaxed text-[#4B5563]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
