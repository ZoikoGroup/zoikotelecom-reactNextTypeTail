"use client";

import React from "react";

type RelatedServiceItem = {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly href: "#";
};

const RELATED_SERVICES: readonly RelatedServiceItem[] = [
  {
    id: "business-broadband-fibre",
    title: "Business Broadband & Fibre",
    subtitle: "Connectivity for your sites",
    imageSrc: "/Images/mng/23.png",
    imageAlt: "Modern office desk with laptop and indoor plant by window",
    href: "#",
  },
  {
    id: "business-voice-ucaas",
    title: "Business Voice & UCaaS",
    subtitle: "Calling and collaboration",
    imageSrc: "/Images/mng/24.png",
    imageAlt: "Business voice and point-of-sale counter terminal",
    href: "#",
  },
  {
    id: "cloud-communication-tools",
    title: "Cloud & Communication Tools",
    subtitle: "Hosting, data and teamwork",
    imageSrc: "/Images/mng/25.png",
    imageAlt: "Structured network cables inside server rack cabinet",
    href: "#",
  },
  {
    id: "security-compliance",
    title: "Security & Compliance",
    subtitle: "Safeguards and responsibilities",
    imageSrc: "/Images/mng/26.png",
    imageAlt: "Hands using laptop and smartphone at workspace desk",
    href: "#",
  },
];

export default function RelatedServicesSection() {
  return (
    <section
      aria-labelledby="related-services-heading"
      className="w-full bg-[#F5F6FB] py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Centered Header */}
        <div className="text-center max-w-[700px] mx-auto mb-11 sm:mb-12">
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

        {/* 4 Related Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {RELATED_SERVICES.map((service) => (
            <a
              key={service.id}
              href={service.href}
              className="group flex flex-col rounded-[16px] bg-white border border-[#ECEEF6] shadow-[0_8px_24px_rgba(15,23,66,0.04)] overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#DCDFE9]"
            >
              {/* Top Image */}
              <div className="h-[118px] w-full bg-[#E5E7EB] overflow-hidden shrink-0">
                <img
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              {/* Bottom Text Block */}
              <div className="px-4 py-3.5 text-left">
                <h3 className="text-[13.5px] font-bold leading-[1.3] tracking-[-0.01em] text-[#070B2B] group-hover:text-[#E61E88] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-0.5 text-[11.5px] leading-[1.4] text-[#6B7280] font-normal">
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
