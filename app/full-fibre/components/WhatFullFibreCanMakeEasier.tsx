import React from "react";
import Image from "next/image";

const BENEFITS_CARDS = [
  {
    id: "smoother-video-calls",
    imageSrc: "/Images/full/2.png",
    imageAlt: "Laptop displaying a group video call on screen",
    title: "Smoother video calls",
    description: "Faster uploads help when you share your screen or camera.",
    footerText: "Depends on plan & equipment",
  },
  {
    id: "many-users-at-once",
    imageSrc: "/Images/full/3.png",
    imageAlt:
      "Group of friends with arms around each other looking out over a view",
    title: "Many users at once",
    description: "More room for everyone to be online at the same time.",
    footerText: "Depends on plan & equipment",
  },
  {
    id: "streaming-downloads",
    imageSrc: "/Images/full/4.png",
    imageAlt:
      "Smart TV screen displaying user interface menus in a living room",
    title: "Streaming & downloads",
    description: "High speeds can help with 4K streams and big downloads.",
    footerText: "Depends on plan & equipment",
  },
  {
    id: "consistent-connection",
    imageSrc: "/Images/full/5.png",
    imageAlt: "Server rack with organized cabling illuminated in a data center",
    title: "Consistent connection",
    description: "Speed isn't limited by copper distance from a cabinet.",
    footerText: "Depends on plan & equipment",
  },
] as const;

export default function WhatFullFibreCanMakeEasier() {
  return (
    <section className="w-full bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            POTENTIAL BENEFITS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            What full fibre can make easier
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Benefits depend on the plan, the network and the equipment in your
            home.
          </p>
        </div>

        {/* Four-Column Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS_CARDS.map((card) => (
            <div
              key={card.id}
              className="flex flex-col overflow-hidden rounded-3xl border border-[#ECEEF6] bg-white shadow-[0_6px_24px_rgba(17,24,60,0.04)]"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  className="object-cover object-center"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight text-[#11183C]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#EEF0F7] pt-4">
                  <span className="text-xs font-semibold text-[#B45309]">
                    {card.footerText}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
