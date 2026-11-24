"use client";

import React from "react";

const RELATED_SERVICES = [
  {
    id: "iot-connectivity",
    title: "IoT Connectivity (SIM, eSIM)",
    subtitle: "Connect business devices",
    href: "#",
    image: "/Images/sites/19.png",
    imageAlt: "Engineer configuring IoT hardware modules on a laptop",
  },
  {
    id: "remote-monitoring",
    title: "Remote Monitoring",
    subtitle: "Connectivity for remote equipment",
    href: "#",
    image: "/Images/sites/20.png",
    imageAlt: "Wind turbines silhouetted against a sunset horizon",
  },
  {
    id: "business-broadband-fibre",
    title: "Business Broadband & Fibre",
    subtitle: "Connectivity for your sites",
    href: "#",
    image: "/Images/sites/21.png",
    imageAlt: "Laptop on a bright office desk beside floor-to-ceiling windows",
  },
  {
    id: "business-faqs",
    title: "Business FAQs",
    subtitle: "Answers to common questions",
    href: "#",
    image: "/Images/sites/22.png",
    imageAlt: "Modern commercial office corridor and glass meeting rooms",
  },
] as const;

export default function RelatedConnectivityServicesSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-20">
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

        {/* 4-Card Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {RELATED_SERVICES.map((service) => (
            <a
              key={service.id}
              href={service.href}
              className="group flex flex-col overflow-hidden rounded-[18px] border border-[#E6EAF2] bg-[#FFFFFF] shadow-[0_10px_28px_-12px_rgba(11,27,72,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#CBD5E1] hover:shadow-[0_16px_34px_-12px_rgba(11,27,72,0.12)]"
            >
              {/* Top Image */}
              <div className="h-[135px] w-full overflow-hidden bg-[#E2E8F0]">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              {/* Card Text */}
              <div className="px-5 py-4">
                <h3 className="text-[13.5px] font-bold leading-[1.35] text-[#0B1B48] transition-colors group-hover:text-[#2563EB]">
                  {service.title}
                </h3>
                <p className="mt-1 text-[11.5px] font-normal leading-[1.45] text-[#64748B]">
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
