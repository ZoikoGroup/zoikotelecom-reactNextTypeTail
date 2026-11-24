"use client";

import React from "react";

const PREMISE_CARDS = [
  {
    id: "offices",
    title: "Offices",
    subtitle: "Single floors to multi-tenant towers.",
    href: "#",
    image: "/Images/sites/5.png",
    imageAlt: "Modern office meeting room with floor-to-ceiling windows",
  },
  {
    id: "warehouses",
    title: "Warehouses",
    subtitle: "Large spaces, racking and loading bays.",
    href: "#",
    image: "/Images/sites/6.png",
    imageAlt: "Warehouse shelving and logistics distribution floor",
  },
  {
    id: "campuses",
    title: "Campuses",
    subtitle: "Several buildings on one estate.",
    href: "#",
    image: "/Images/sites/7.png",
    imageAlt: "Campus building facade surrounded by green grounds",
  },
  {
    id: "retail-mixed-use",
    title: "Retail & mixed-use",
    subtitle: "Shared spaces and tenant separation.",
    href: "#",
    image: "/Images/sites/8.png",
    imageAlt: "Multi-level retail atrium with illuminated walkways",
  },
  {
    id: "industrial-sites",
    title: "Industrial sites",
    subtitle: "Harsh environments and remote plant.",
    href: "#",
    image: "/Images/sites/9.png",
    imageAlt:
      "Industrial site workers inspecting steel and plant infrastructure",
  },
  {
    id: "public-buildings",
    title: "Public buildings",
    subtitle: "Libraries, halls and civic spaces.",
    href: "#",
    image: "/Images/sites/10.png",
    imageAlt: "Book shelves inside a public library space",
  },
] as const;

export default function PremisesTypesSection() {
  const officesCard = PREMISE_CARDS[0];
  const gridFourCards = PREMISE_CARDS.slice(1, 5);
  const publicBuildingsCard = PREMISE_CARDS[5];

  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2B3766]">
            TYPES OF SITE
          </p>

          <h2 className="mt-2.5 text-[30px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0B1B48] sm:text-[36px]">
            Premises we can talk through
          </h2>

          <p className="mt-2.5 text-[13.5px] font-normal leading-[1.6] text-[#4A5568] sm:text-[14.5px]">
            Every site is different — these help you describe yours.
          </p>
        </div>

        {/* Asymmetric Mosaic Layout */}
        <div className="mt-10 space-y-4">
          {/* Top Row: Large Left Feature Card + 2x2 Right Cards */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.05fr_1fr]">
            {/* Offices (Tall Left Card) */}
            <a
              href={officesCard.href}
              className="group relative flex min-h-[290px] flex-col justify-end overflow-hidden rounded-[20px] bg-[#0B1B48] p-6 text-left shadow-[0_14px_32px_-12px_rgba(11,27,72,0.16)] sm:min-h-[340px] lg:h-[360px]"
            >
              <img
                src={officesCard.image}
                alt={officesCard.imageAlt}
                className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="relative z-10">
                <h3 className="text-[17px] font-bold leading-[1.3] tracking-[-0.01em] text-[#FFFFFF]">
                  {officesCard.title}
                </h3>
                <p className="mt-1 text-[12px] font-normal leading-[1.45] text-[#CBD5E1]">
                  {officesCard.subtitle}
                </p>
              </div>
            </a>

            {/* Right 2x2 Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {gridFourCards.map((card) => (
                <a
                  key={card.id}
                  href={card.href}
                  className="group relative flex min-h-[165px] flex-col justify-end overflow-hidden rounded-[18px] bg-[#0B1B48] p-5 text-left shadow-[0_12px_28px_-12px_rgba(11,27,72,0.14)] sm:h-[172px]"
                >
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050814]/95 via-[#070E26]/45 to-transparent"
                  />
                  <div className="relative z-10">
                    <h3 className="text-[15.5px] font-bold leading-[1.3] tracking-[-0.01em] text-[#FFFFFF]">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-[11.5px] font-normal leading-[1.4] text-[#CBD5E1]">
                      {card.subtitle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Full-Width Strip Card: Public buildings */}
          <a
            href={publicBuildingsCard.href}
            className="group relative flex h-[155px] w-full flex-col justify-end overflow-hidden rounded-[18px] bg-[#0B1B48] p-6 text-left shadow-[0_12px_28px_-12px_rgba(11,27,72,0.14)] sm:h-[168px]"
          >
            <img
              src={publicBuildingsCard.image}
              alt={publicBuildingsCard.imageAlt}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050814]/95 via-[#070E26]/55 to-[#070E26]/15"
            />
            <div className="relative z-10">
              <h3 className="text-[16.5px] font-bold leading-[1.3] tracking-[-0.01em] text-[#FFFFFF]">
                {publicBuildingsCard.title}
              </h3>
              <p className="mt-1 text-[12px] font-normal leading-[1.45] text-[#CBD5E1]">
                {publicBuildingsCard.subtitle}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
