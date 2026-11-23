"use client";

import React from "react";

const ARCHITECTURE_STEPS = [
  {
    step: "01",
    title: "Your device",
    description: "Sensors, meters, terminals or vehicle modules.",
    image: "/Images/sime/4.png",
    imageAlt: "Industrial sensors and tools for IoT devices",
  },
  {
    step: "02",
    title: "Modem & SIM / eUICC",
    description: "The secure identity that lets the device connect.",
    image: "/Images/sime/5.png",
    imageAlt: "Close-up of a modem and SIM circuit board",
  },
  {
    step: "03",
    title: "Mobile network",
    description: "Coverage and technologies confirmed per deployment.",
    image: "/Images/sime/6.png",
    imageAlt: "Wireless cellular router with active indicator lights",
  },
  {
    step: "04",
    title: "Your platform",
    description: "Where your data goes — your application or service.",
    image: "/Images/sime/7.png",
    imageAlt: "Industrial offshore facility illuminated at night",
  },
] as const;

export default function ArchitectureSection() {
  return (
    <section className="w-full bg-[#F6F8FC] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2B3766]">
            ARCHITECTURE
          </p>
          <h2 className="mt-2.5 text-[30px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0B1B48] sm:text-[36px]">
            How IoT connectivity works
          </h2>
          <p className="mt-3 text-[14.5px] font-normal leading-[1.6] text-[#4A5568] sm:text-[15px]">
            A conceptual view — integrations are agreed for each project.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {ARCHITECTURE_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="relative flex flex-col items-center text-center"
            >
              {/* Connecting Gradient Line (Desktop) */}
              {index < ARCHITECTURE_STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[calc(50%+82px)] top-[72px] hidden h-[2px] w-[calc(100%-140px)] bg-gradient-to-r from-[#0EA5E9] to-[#7C3AED] lg:block"
                />
              )}

              {/* Circular Image with Crescent Gradient Ring */}
              <div className="relative h-[144px] w-[144px] rounded-full bg-gradient-to-b from-[#06B6D4] via-[#6366F1] to-[#DB2777] p-[3.5px] shadow-[0_10px_25px_-6px_rgba(11,27,72,0.12)]">
                {/* Bottom Crescent Accent */}
                <div className="relative h-full w-full overflow-hidden rounded-full bg-[#0B1B48]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-[92%] w-full rounded-full object-cover"
                  />
                  {/* Bottom Gradient Crescent Fill */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[28px] bg-gradient-to-r from-[#E11D84] via-[#9333EA] to-[#6366F1] opacity-95"
                    style={{
                      clipPath: "ellipse(54% 48% at 50% 92%)",
                    }}
                  />
                </div>
              </div>

              {/* Step Number */}
              <span className="mt-4 text-[11px] font-bold tracking-[0.06em] text-[#0891B2]">
                {item.step}
              </span>

              {/* Step Title */}
              <h3 className="mt-1.5 text-[15.5px] font-bold leading-[1.35] text-[#0B1B48]">
                {item.title}
              </h3>

              {/* Step Description */}
              <p className="mt-2 max-w-[225px] text-[12.5px] font-normal leading-[1.55] text-[#4A5568]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
