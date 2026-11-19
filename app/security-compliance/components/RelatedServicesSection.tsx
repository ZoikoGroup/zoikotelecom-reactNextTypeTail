"use client";

import React from "react";

interface RelatedServiceItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
}

const RELATED_SERVICES = [
  {
    id: "business-broadband-fibre",
    title: "Business Broadband & Fibre",
    description: "Connectivity for your sites",
    href: "#",
    imageSrc: "/Images/mng/23.png",
    imageAlt: "Modern office desk with laptop and indoor plant by window",
  },
  {
    id: "business-voice-ucaas",
    title: "Business Voice & UCaaS",
    description: "Calling and collaboration",
    href: "#",
    imageSrc: "/Images/mng/24.png",
    imageAlt:
      "Point-of-sale terminal and desk setup for voice and collaboration",
  },
  {
    id: "cloud-communication-tools",
    title: "Cloud & Communication Tools",
    description: "Hosting, data and teamwork",
    href: "#",
    imageSrc: "/Images/mng/25.png",
    imageAlt: "Server rack cabling and network hardware infrastructure",
  },
  {
    id: "managed-services",
    title: "Managed Services",
    description: "Service coordination",
    href: "#",
    imageSrc: "/Images/mng/19.png",
    imageAlt: "Team collaborating around laptops at a wooden office desk",
  },
] as const satisfies readonly RelatedServiceItem[];

export default function RelatedServicesSection() {
  return (
    <section
      aria-labelledby="related-services-heading"
      className="w-full bg-[#F5F6FB] py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Centered Header */}
        <div className="text-center max-w-[720px] mx-auto mb-11 sm:mb-12">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#565B75] mb-2.5">
            BUSINESS
          </p>
          <h2
            id="related-services-heading"
            className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B]"
          >
            Related services
          </h2>
        </div>

        {/* 4 Related Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {RELATED_SERVICES.map((service) => (
            <a
              key={service.id}
              href={service.href}
              className="group flex flex-col rounded-[16px] bg-white border border-[#ECEEF6] shadow-[0_10px_28px_rgba(15,23,66,0.05)] overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
            >
              {/* Top Image */}
              <div className="h-[116px] w-full bg-[#E5E7EB] overflow-hidden shrink-0">
                <img
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              {/* Card Body */}
              <div className="px-4 py-3.5 flex-1 flex flex-col justify-center text-left">
                <h3 className="text-[13px] font-bold leading-[1.3] tracking-[-0.01em] text-[#070B2B] group-hover:text-[#E61E88] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-0.5 text-[11px] leading-[1.4] text-[#6B7280] font-normal">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
