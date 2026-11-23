import React from "react";
import Image from "next/image";

const IMG = "/Images/iot-&-connectivity-remote-monitoring";

const STEPS = [
  { title: "Define your assets", text: "What you want to monitor and why." },
  { title: "Sites & regions", text: "Where the equipment is, in broad terms." },
  { title: "Network options", text: "Cellular, fixed or both — and the coverage to check." },
  { title: "Reading cadence", text: "How often readings are needed, and battery impact." },
  { title: "Safety review", text: "Anything safety-related is flagged early." },
  { title: "Technical consultation", text: "A conversation with our team about the next steps." },
] as const;

export default function FeasibilitySteps() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-[440px_1fr] lg:gap-16">
        <div className="relative hidden aspect-[440/653] w-full overflow-hidden rounded-[24px] lg:block">
          <Image
            src={`${IMG}/feasibility-planning.webp`}
            alt="Hands sketching plans on paper at a desk"
            fill
            sizes="440px"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">Feasibility</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            From first idea to a technical conversation
          </h2>

          <ol className="relative mt-10 space-y-7">
            <span
              aria-hidden="true"
              className="absolute bottom-6 left-[21px] top-6 w-0.5 bg-gradient-to-b from-[#12936F] to-[#8E37E8]"
            />
            {STEPS.map(({ title, text }, i) => (
              <li key={title} className="relative flex items-start gap-5">
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#12936F] bg-white text-sm font-bold text-[#11183C]">
                  {i + 1}
                </span>
                <span className="pt-0.5">
                  <span className="block text-lg font-bold text-[#11183C]">{title}</span>
                  <span className="mt-0.5 block text-sm text-[#4B5375] sm:text-base">{text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
