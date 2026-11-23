"use client";

import React from "react";

const RELATED_SERVICES = [
  {
    id: "connected-vehicles-fleets",
    title: "Connected Vehicles & Fleets",
    subtitle: "Connectivity for moving assets",
    href: "#",
    image: "/Images/sime/19.png",
    imageAlt: "Commercial freight truck on a highway under a clear blue sky",
  },
  {
    id: "business-mobile",
    title: "Business Mobile",
    subtitle: "SIMs for your team",
    href: "#",
    image: "/Images/sime/20.png",
    imageAlt: "Team hardware and device planning schematics on a desk",
  },
  {
    id: "business-broadband-fibre",
    title: "Business Broadband & Fibre",
    subtitle: "Connectivity for your sites",
    href: "#",
    image: "/Images/sime/21.png",
    imageAlt: "Modern office workspace with a laptop overlooking a city view",
  },
  {
    id: "security-compliance",
    title: "Security & Compliance",
    subtitle: "Safeguards and responsibilities",
    href: "#",
    image: "/Images/sime/22.png",
    imageAlt: "Security operations review across a laptop and smartphone",
  },
] as const;

export default function RelatedServicesSection() {
  return (
    <section className="w-full bg-[#F6F8FC] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2B3766]">
            MORE CONNECTIVITY
          </p>
          <h2 className="mt-2.5 text-[30px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0B1B48] sm:text-[36px]">
            Related services
          </h2>
        </div>

        {/* 4-Column Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {RELATED_SERVICES.map((service) => (
            <a
              key={service.id}
              href={service.href}
              className="group flex flex-col overflow-hidden rounded-[18px] border border-[#EDF1F7] bg-[#FFFFFF] shadow-[0_12px_28px_-10px_rgba(11,27,72,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-10px_rgba(11,27,72,0.12)]"
            >
              {/* Top Image */}
              <div className="h-[135px] w-full overflow-hidden bg-[#E2E8F0] sm:h-[145px]">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              {/* Card Body */}
              <div className="px-5 py-4">
                <h3 className="text-[14px] font-bold leading-[1.35] tracking-[-0.01em] text-[#0B1B48]">
                  {service.title}
                </h3>
                <p className="mt-1 text-[12px] font-normal leading-[1.45] text-[#64748B]">
                  {service.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
