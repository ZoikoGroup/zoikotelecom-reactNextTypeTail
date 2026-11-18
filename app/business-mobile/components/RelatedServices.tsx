import React from "react";
import Link from "next/link";
import { Wifi, Briefcase, Hash, Network, ChevronRight } from "lucide-react";

const SERVICES = [
  {
    id: "broadband",
    title: "Business Broadband & Fibre",
    description: "Connectivity for your sites",
    href: "/business/broadband",
    icon: Wifi,
  },
  {
    id: "voice",
    title: "Business Voice",
    description: "Calling for teams",
    href: "/business/voice",
    icon: Briefcase,
  },
  {
    id: "virtual-numbers",
    title: "Virtual Numbers",
    description: "Numbers that route to you",
    href: "/business/virtual-numbers",
    icon: Hash,
  },
  {
    id: "call-features",
    title: "Call Features",
    description: "How your calls are handled",
    href: "/business/call-features",
    icon: Network,
  },
] as const;

export default function RelatedServices() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            BUSINESS
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Related business services
          </h2>
        </div>

        {/* Four Cards Grid with shadow-sm and no borders */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={service.href}
                className="group flex items-center gap-4 rounded-3xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-white shadow-md">
                  <Icon className="h-6 w-6" strokeWidth={2.25} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-extrabold tracking-tight text-[#11183C] group-hover:text-[#E11D74]">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#4B5563]">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
