import React from "react";
import Image from "next/image";
import { Home, ArrowLeftRight, Wrench } from "lucide-react";

const CARDS_DATA = [
  {
    id: "availability",
    imageSrc: "/Images/ultra/3.png",
    imageAlt: "Row of traditional UK houses along a street",
    icon: Home,
    title: "Availability is property-specific",
    description:
      "Neighbouring homes can have different options. Postcode-level checks don't prove what your property can get.",
  },
  {
    id: "switching",
    imageSrc: "/Images/ultra/4.png",
    imageAlt: "Person sitting on a grey sofa using a laptop from top-down view",
    icon: ArrowLeftRight,
    title: "Switching",
    description:
      "Under One Touch Switch, your new provider usually arranges the switch. Check exit fees first.",
  },
  {
    id: "installation",
    imageSrc: "/Images/ultra/5.png",
    imageAlt: "Network engineer working on server rack wiring and equipment",
    icon: Wrench,
    title: "Installation",
    description:
      "An engineer may need to visit. Renters may need landlord permission for new cables.",
  },
] as const;

export default function AvailabilitySwitchingInstallation() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            BEFORE YOU CHOOSE
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Availability, switching and
            <br className="hidden sm:inline" /> installation
          </h2>
        </div>

        {/* Three-Column Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-[1300px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARDS_DATA.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className="flex flex-col overflow-hidden rounded-3xl border border-[#ECEEF6] bg-white shadow-[0_4px_20px_rgba(17,24,60,0.04)]"
              >
                {/* Top Image */}
                <div className="relative h-48 w-full sm:h-52">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    {/* Icon Badge */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#F4297B] to-[#8A3FFC] text-white shadow-md">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>

                    <h3 className="mt-5 text-xl font-extrabold tracking-tight text-[#11183C]">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
