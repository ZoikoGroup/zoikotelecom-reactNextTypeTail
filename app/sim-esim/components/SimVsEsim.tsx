"use client";

import React from "react";
import { Check } from "lucide-react";

const COMPARISON_CARDS = [
  {
    id: "iot-sim",
    badge: "IOT SIM",
    title: "What is an IoT SIM?",
    description:
      "A removable subscriber identity module used by compatible cellular devices to connect. It sits in a slot in your device, in an approved size.",
    image: "/Images/sime/2.png",
    imageAlt: "Close-up of a dark electronic circuit board",
    points: [
      "Familiar and widely supported",
      "Swapping may need a site visit",
      "Suitability depends on your device",
    ],
  },
  {
    id: "iot-esim",
    badge: "IOT ESIM",
    title: "What is an IoT eSIM?",
    description:
      "An eUICC chip that can host connectivity profiles managed remotely — where the device and service platform support it.",
    image: "/Images/sime/3.png",
    imageAlt: "Technician working on electronic hardware components",
    points: [
      "May reduce some field visits",
      "Relies on compatible devices and platforms",
      "Remote switching isn't automatic",
    ],
  },
] as const;

const COMPARISON_ROWS = [
  {
    label: "Component",
    simValue: "A SIM card in a device slot",
    esimValue: "An eUICC chip, built in or removable",
    isPill: false,
  },
  {
    label: "Profile",
    simValue: "Subscription held on the SIM",
    esimValue:
      "May hold several profiles, managed remotely if the architecture supports it",
    isPill: false,
  },
  {
    label: "Field work",
    simValue: "Physical access may be needed to swap",
    esimValue: "Remote changes may reduce visits — not guaranteed zero",
    isPill: false,
  },
  {
    label: "Compatibility",
    simValue: "Slot, voltage, modem and bands",
    esimValue: "eUICC support, firmware and profile-management support",
    isPill: false,
  },
  {
    label: "Availability",
    simValue: "Confirm with our team",
    esimValue: "Confirm with our team",
    isPill: true,
  },
] as const;

export default function SimVsEsim() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2B3766]">
            SIM AND ESIM
          </p>
          <h2 className="mt-2.5 text-[30px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0B1B48] sm:text-[36px]">
            Two ways to connect a device
          </h2>
          <p className="mt-3 text-[14.5px] font-normal leading-[1.6] text-[#4A5568] sm:text-[15px]">
            Both can work well — the right choice depends on your devices and
            deployment.
          </p>
        </div>

        {/* Two Cards Grid */}
        <div className="mt-11 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
          {COMPARISON_CARDS.map((card) => (
            <div
              key={card.id}
              className="flex flex-col overflow-hidden rounded-[20px] border border-[#EDF1F7] bg-[#FFFFFF] shadow-[0_14px_34px_-10px_rgba(11,27,72,0.08)] sm:flex-row"
            >
              {/* Left Image */}
              <div className="relative h-[220px] w-full shrink-0 sm:h-auto sm:w-[41%]">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Right Content */}
              <div className="flex flex-1 flex-col justify-center px-6 py-7 sm:px-7 sm:py-8">
                <div>
                  <span className="inline-flex items-center rounded-[5px] bg-[#E3F5FA] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.06em] text-[#0E7490]">
                    {card.badge}
                  </span>
                </div>

                <h3 className="mt-3.5 text-[19px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0B1B48] sm:text-[20px]">
                  {card.title}
                </h3>

                <p className="mt-2.5 text-[13.5px] font-normal leading-[1.6] text-[#4A5568]">
                  {card.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {card.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[13.5px] font-medium leading-[1.45] text-[#2D3748]"
                    >
                      <Check
                        className="mt-[2px] h-4 w-4 shrink-0 text-[#E11D48]"
                        strokeWidth={2.5}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Side by Side Comparison Table */}
        <div className="mt-14">
          <h3 className="text-[19px] font-bold tracking-[-0.01em] text-[#0B1B48] sm:text-[20px]">
            Side by side
          </h3>

          <div className="mt-4 overflow-x-auto rounded-[16px] border border-[#E6EAF2] bg-[#FFFFFF] shadow-[0_6px_24px_-8px_rgba(11,27,72,0.04)]">
            <div className="min-w-[780px]">
              {/* Header Row */}
              <div className="grid grid-cols-[190px_1fr_1.45fr] border-b border-[#E6EAF2]">
                <div className="bg-[#FAFBFD] px-6 py-4" />

                <div className="bg-gradient-to-r from-[#FDF1F5] via-[#FAF0F7] to-[#F6EFFA] px-6 py-4">
                  <div className="text-[13px] font-bold leading-[1.35] text-[#0B1B48]">
                    Removable IoT SIM
                  </div>
                  <div className="mt-0.5 text-[12px] font-normal text-[#64748B]">
                    Physical card
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#F6EFFA] via-[#F2EEFA] to-[#EFEBFB] px-6 py-4">
                  <div className="text-[13px] font-bold leading-[1.35] text-[#0B1B48]">
                    IoT eSIM / eUICC
                  </div>
                  <div className="mt-0.5 text-[12px] font-normal text-[#64748B]">
                    Embedded or removable eUICC
                  </div>
                </div>
              </div>

              {/* Data Rows */}
              {COMPARISON_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[190px_1fr_1.45fr] items-center border-b border-[#EDF1F7]"
                >
                  <div className="flex h-full items-center border-r border-[#EDF1F7] bg-[#FAFBFD] px-6 py-4 text-[13px] font-bold text-[#0B1B48]">
                    {row.label}
                  </div>

                  <div className="px-6 py-4 text-[13px] font-normal leading-[1.5] text-[#4A5568]">
                    {row.isPill ? (
                      <span className="inline-flex items-center rounded-full bg-[#FEF3C7]/80 px-3.5 py-1 text-[12px] font-semibold text-[#B45309]">
                        {row.simValue}
                      </span>
                    ) : (
                      row.simValue
                    )}
                  </div>

                  <div className="px-6 py-4 text-[13px] font-normal leading-[1.5] text-[#4A5568]">
                    {row.isPill ? (
                      <span className="inline-flex items-center rounded-full bg-[#FEF3C7]/80 px-3.5 py-1 text-[12px] font-semibold text-[#B45309]">
                        {row.esimValue}
                      </span>
                    ) : (
                      row.esimValue
                    )}
                  </div>
                </div>
              ))}

              {/* Bottom Full-Span Row using CSS Grid */}
              <div className="grid grid-cols-[190px_1fr] items-center">
                <div className="flex h-full items-center border-r border-[#EDF1F7] bg-[#FAFBFD] px-6 py-4 text-[13px] font-bold text-[#0B1B48]">
                  Best option
                </div>
                <div className="px-6 py-4 text-[13px] font-normal leading-[1.5] text-[#4A5568]">
                  Decided for each use case after technical and commercial
                  review — neither is &ldquo;always better&rdquo;.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
