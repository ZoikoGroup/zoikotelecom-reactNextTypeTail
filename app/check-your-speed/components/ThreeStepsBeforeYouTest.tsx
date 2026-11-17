import React from "react";
import Image from "next/image";

const TEST_STEPS = [
  {
    id: "pause-big-downloads",
    stepNumber: "01",
    imageSrc: "/Images/speed/2.png",
    imageAlt:
      "Smart TV screen displaying user interface menus in a living room",
    title: "Pause big downloads",
    description:
      "Where possible, pause streaming and large downloads — and avoid disrupting others. Note which device you’re using.",
  },
  {
    id: "use-a-cable",
    stepNumber: "02",
    imageSrc: "/Images/speed/3.png",
    imageAlt: "Server rack with organized cabling illuminated in a data center",
    title: "Use a cable if you can",
    description:
      "Ethernet gives the clearest picture of your line. Testing Wi-Fi? Sit near the router and note the room.",
  },
  {
    id: "check-vpns-proxies",
    stepNumber: "03",
    imageSrc: "/Images/speed/4.png",
    imageAlt: "Laptop glowing in a dark room",
    title: "Check VPNs and proxies",
    description:
      "A personal VPN can affect results. Don’t turn off security tools your work or school requires.",
  },
] as const;

export default function ThreeStepsBeforeYouTest() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            GET READY
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Three steps before you test
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            A fair test gives you numbers you can trust.
          </p>
        </div>

        {/* Three-Column Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {TEST_STEPS.map((step) => (
            <div
              key={step.id}
              className="relative flex flex-col overflow-hidden rounded-3xl border border-[#ECEEF6] bg-white shadow-[0_8px_30px_rgba(17,24,60,0.04)]"
            >
              {/* Card Image */}
              <div className="relative aspect-[22/10] w-full">
                <Image
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover object-center"
                />

                {/* Floating Step Number Badge */}
                <div className="absolute -bottom-4 right-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-base font-extrabold text-white shadow-lg">
                  {step.stepNumber}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-6 pt-7 sm:p-7 sm:pt-8">
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight text-[#11183C]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
