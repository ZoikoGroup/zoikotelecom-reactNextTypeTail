"use client";

import { useState } from "react";

// ─── Static Data ──────────────────────────────────────────────────────────────

const features = [
  "Unlimited UK minutes",
  "For Mobile and Landline (Includes Upto 100 Phone Lines)",
  "Extra 750 minutes (For Selected International destinations)",
  "Dedicated account manager",
  "24/7 premium support",
  "Custom integration",
];

type Duration = 36 | 24 | 12;

const plans = [
  {
    id: 1,
    name: "Zoiko MegaCall",
    is_featured: false,
    prices: {
      36: 45.99,
      24: 52.99,
      12: 59.99,
    },
  },
  // Add more plans here if needed, e.g.:
  // {
  //   id: 2,
  //   name: "Zoiko ProCall",
  //   is_featured: true,
  //   prices: { 36: 35.99, 24: 42.99, 12: 49.99 },
  // },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function BusinessLandlinePlans() {
  const [selectedDuration, setSelectedDuration] = useState<Duration>(36);

  return (
    <section className="w-full bg-[#FEF7FF] dark:bg-gray-900 py-[30px] md:py-[50px] px-4 sm:px-6 md:px-[40px]">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">

        {/* Heading */}
        <h2 className="text-[#2D3748] dark:text-white text-[28px] sm:text-[34px] md:text-[40px] font-bold leading-[40px] md:leading-[68px] text-center">
          Zoiko Telecom Business Landline Plans
        </h2>

        {/* Duration Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          {([36, 24, 12] as Duration[]).map((duration) => (
            <button
              key={duration}
              onClick={() => setSelectedDuration(duration)}
              className={`inline-flex items-center justify-center rounded-[50px] px-[24px] md:px-[33px] py-[12px] md:py-[14px] border-2 transition-all
                ${
                  selectedDuration === duration
                    ? "border-[#C12172] bg-[#C12172] text-white"
                    : "border-[rgba(0,0,0,0.1)] dark:border-gray-700 bg-[#F8F9FA] dark:bg-gray-800 text-[#2D3748] dark:text-white"
                }`}
            >
              <span className="text-[14px] md:text-[15px] font-semibold">
                {duration}-Month Plans
              </span>
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-[40px] flex flex-wrap justify-center gap-8 w-full">
          {plans.map((plan) => {
            const price = plan.prices[selectedDuration];

            return (
              <div
                key={plan.id}
                className={`relative w-full max-w-[340px] rounded-[20px] bg-white dark:bg-gray-800 px-[24px] md:px-[34px] pt-[34px] pb-[34px] flex flex-col items-center shadow-sm ${
                  plan.is_featured
                    ? "border-2 border-[#782984]"
                    : "border border-[#E2E8F0] dark:border-gray-700"
                }`}
              >
                {/* Most Popular badge */}
                {plan.is_featured && (
                  <div className="absolute -top-4 rounded-full bg-[#782984] px-5 py-2">
                    <p className="text-white text-[12px] font-semibold uppercase">
                      Most Popular
                    </p>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-[#C12172] text-[28px] md:text-[32px] font-bold leading-[40px] md:leading-[48px] text-center">
                  {plan.name}
                </h3>

                {/* Price */}
                <p className="text-[#636567] dark:text-gray-300 text-[22px] md:text-[24px] font-normal leading-[34px] mt-3">
                  £{price.toFixed(2)}/m
                </p>

                {/* Duration label */}
                <p className="text-[#718096] dark:text-gray-400 text-sm mt-1">
                  {selectedDuration} Months contract
                </p>

                {/* Divider */}
                <div className="w-full border-t border-[#E2E8F0] dark:border-gray-700 mt-5" />

                {/* Features */}
                <div className="mt-4 w-full">
                  {features.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 w-full border-b border-[#E2E8F0] dark:border-gray-700 py-[11px]"
                    >
                      {/* Checkmark */}
                      <svg
                        className="w-[16px] h-[16px] text-[#636567] dark:text-gray-300 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p className="text-[#2D3748] dark:text-gray-200 text-[13px] leading-[20px]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8 flex w-full justify-center">
                  <button
                    className="flex h-[53.5px] w-full items-center justify-center rounded-[50px] px-0 py-[17px]"
                    style={{
                      background:
                        "linear-gradient(90deg, #C12172 0%, #782984 100%)",
                    }}
                  >
                    <span className="text-white text-[15px] font-semibold leading-[25.5px]">
                      Buy Now
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {plans.length === 0 && (
          <div className="mt-10 text-center text-gray-500">
            No landline plans available.
          </div>
        )}
      </div>
    </section>
  );
}