import React from "react";

const BUNDLE_STEPS = [
  {
    id: "assess",
    number: "01",
    title: "Assess",
    description: "Think about who uses what at home and on the go.",
  },
  {
    id: "compare",
    number: "02",
    title: "Compare",
    description: "Look at broadband and mobile terms separately.",
  },
  {
    id: "confirm",
    number: "03",
    title: "Confirm",
    description: "We check what can be offered for your address and lines.",
  },
  {
    id: "decide",
    number: "04",
    title: "Decide",
    description: "Read each contract summary before you agree.",
  },
] as const;

export default function ExploringABundleStepByStep() {
  return (
    <section className="w-full bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            HOW IT WORKS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Exploring a bundle, step by step
          </h2>
        </div>

        {/* Four-Column Steps Grid */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BUNDLE_STEPS.map((step) => (
            <div
              key={step.id}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#ECEEF6] bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-8"
            >
              {/* Left Accent Border Indicator */}
              <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#F4297B] to-[#7C3AED]" />

              <div>
                {/* Large Gradient Step Number */}
                <span className="bg-gradient-to-r from-[#F4297B] to-[#7C3AED] bg-clip-text text-4xl font-black tracking-tight text-transparent">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-extrabold tracking-tight text-[#11183C]">
                  {step.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-[#4B5563]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
