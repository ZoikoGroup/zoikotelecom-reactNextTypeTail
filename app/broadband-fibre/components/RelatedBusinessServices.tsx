import React from "react";
import { Smartphone, Briefcase, Hash, Network } from "lucide-react";

const BUSINESS_SERVICES = [
  {
    id: "business-mobile",
    title: "Business Mobile",
    description: "SIMs and mobile for your team.",
    icon: Smartphone,
  },
  {
    id: "business-voice",
    title: "Business Voice",
    description: "Calling for teams.",
    icon: Briefcase,
  },
  {
    id: "virtual-numbers",
    title: "Virtual Numbers",
    description: "Numbers that route to you.",
    icon: Hash,
  },
  {
    id: "call-features",
    title: "Call Features",
    description: "How your calls are handled.",
    icon: Network,
  },
] as const;

export default function RelatedBusinessServices() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            BUSINESS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Related business services
          </h2>
        </div>

        {/* Four-Column Services Grid */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BUSINESS_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between rounded-3xl border border-[#ECEEF6] bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-8"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-white shadow-md">
                    <Icon className="h-6 w-6" strokeWidth={2.25} />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold tracking-tight text-[#11183C]">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#4B5563]">
                    {service.description}
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
