import React from "react";
import { Zap, Box, Wifi } from "lucide-react";

const COMPARE_CARDS = [
  {
    id: "full-fibre",
    eyebrow: "LINE TYPE",
    title: "Full fibre (FTTP)",
    subtitle: "Fibre into your home.",
    icon: Zap,
    isDark: true,
    points: [
      "Capable of very high speeds",
      "Faster uploads",
      "Needs FTTP at your property",
    ],
  },
  {
    id: "part-fibre",
    eyebrow: "LINE TYPE",
    title: "Part fibre (FTTC)",
    subtitle: "Fibre to the cabinet, copper to you.",
    icon: Box,
    isDark: false,
    points: [
      "Widely available",
      "Speed depends on distance",
      "Uses your phone socket",
    ],
  },
  {
    id: "wi-fi",
    eyebrow: "INSIDE YOUR HOME",
    title: "Wi-Fi",
    subtitle: "How devices connect to your router.",
    icon: Wifi,
    isDark: false,
    points: [
      "Not the same as line speed",
      "Affected by walls & distance",
      "Wired is usually faster",
    ],
  },
] as const;

export default function CategoryVsTechnology() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            COMPARE
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Full fibre, part fibre and Wi-Fi
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Three different things that are often mixed up.
          </p>
        </div>

        {/* Three-Column Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
          {COMPARE_CARDS.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className={`relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 ${
                  card.isDark
                    ? "bg-gradient-to-br from-[#131144] via-[#21196E] to-[#5629C6] text-white shadow-[0_12px_30px_rgba(17,24,60,0.14)]"
                    : "border border-[#ECEEF6] bg-white text-[#11183C] shadow-[0_6px_24px_rgba(17,24,60,0.04)]"
                }`}
              >
                <div>
                  {/* Icon Badge */}
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl shadow-sm ${
                      card.isDark
                        ? "bg-gradient-to-br from-[#F4297B] to-[#8A3FFC] text-white"
                        : "bg-gradient-to-br from-[#F4297B] to-[#8A3FFC] text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2.25} />
                  </div>

                  <p
                    className={`mt-6 text-xs font-bold uppercase tracking-[0.12em] ${
                      card.isDark ? "text-[#F46BA8]" : "text-[#E11D74]"
                    }`}
                  >
                    {card.eyebrow}
                  </p>

                  <h3 className="mt-1.5 text-2xl font-extrabold tracking-tight">
                    {card.title}
                  </h3>

                  <p
                    className={`mt-1.5 text-sm ${
                      card.isDark ? "text-[#E2E6F7]" : "text-[#4B5563]"
                    }`}
                  >
                    {card.subtitle}
                  </p>
                </div>

                {/* Bullet Points */}
                <ul className="mt-8 space-y-3">
                  {card.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      <span
                        aria-hidden="true"
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                          card.isDark ? "bg-[#F46BA8]" : "bg-[#E11D74]"
                        }`}
                      />
                      <span
                        className={
                          card.isDark ? "text-[#D1D5EB]" : "text-[#4B5563]"
                        }
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
