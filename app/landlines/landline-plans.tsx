"use client";

import { useEffect, useState } from "react";

const features = [
  "No Long-Term Contracts",
  "Unlimited Data Plans Available",
  "Affordable & Competitive Pricing",
  "5G Ready SIMs",
  "Inclusive EU Roaming",
  "Exceptional Customer Support",
];

export default function BusinessLandlinePlans() {
  const [plans, setPlans] = useState<any[]>([]);
  const [selectedDuration, setSelectedDuration] = useState(36);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/plans/category/landline/`
        );

        if (!res.ok) {
  throw new Error(`API Error: ${res.status}`);
}

const data = await res.json();


setPlans(data.results || []);
      } catch (error) {
        console.error("Error fetching plans:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  if (loading) {
    return (
      <section className="py-10 text-center">
        <p>Loading plans...</p>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#FEF7FF] dark:bg-gray-900 py-[30px] md:py-[50px] px-4 sm:px-6 md:px-[40px]">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        
        {/* Heading */}
        <h2 className="text-[#2D3748] dark:text-white text-[28px] sm:text-[34px] md:text-[40px] font-bold leading-[40px] md:leading-[68px] text-center">
          Zoiko Telecom Business Landline Plans
        </h2>

        {/* Duration Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          {[36, 24, 12].map((duration) => (
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
                {duration} Months Plan
              </span>
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-[40px] flex flex-wrap justify-center gap-8 w-full">
          {plans.map((plan: any) => {
          const variation = plan.variations?.find(
  (v: any) => Number(v.duration_value) === selectedDuration
);

if (!variation) return null;

            return (
              <div
                key={plan.id}
                className={`relative w-full max-w-[284px] rounded-[20px] bg-white dark:bg-gray-800 px-[24px] md:px-[34px] pt-[34px] pb-[34px] flex flex-col items-center ${
                  plan.is_featured
                    ? "border-2 border-[#782984]"
                    : "border border-[#E2E8F0] dark:border-gray-700"
                }`}
              >
                {/* Most Popular */}
                {plan.is_featured && (
                  <div className="absolute -top-4 rounded-full bg-[#782984] px-5 py-2">
                    <p className="text-white text-[12px] font-semibold uppercase">
                      Most Popular
                    </p>
                  </div>
                )}

                {/* Top Text */}
                <p className="text-[#782984] text-[14px] font-semibold uppercase text-center leading-[18.7px]">
                  Powered by EE&apos;s Award-Winning Network
                </p>

                {/* Plan Name */}
                <h3 className="mt-6 text-[#C12172] text-[28px] md:text-[32px] font-bold leading-[40px] md:leading-[48px] text-center">
                  {plan.name}
                </h3>

                {/* Duration & Price */}
                <div className="mt-2 flex flex-col items-center">
                  <p className="text-[#718096] dark:text-gray-300 text-[16px] font-semibold uppercase tracking-[1px] leading-[20.4px]">
                    PLAN
                  </p>

                  <h4 className="text-[#C12172] text-[32px] md:text-[40px] font-extrabold text-center">
                    {variation.label}
                  </h4>

                  <p className="text-[#636567] dark:text-gray-300 text-[22px] md:text-[24px] font-normal leading-[34px] mt-1">
                    £{variation.sale_price || variation.price}/m
                  </p>

                  <p className="text-[#718096] dark:text-gray-300 text-sm mt-1">
                    {variation.duration_value} Months
                  </p>
                </div>

                {/* Features */}
                <div className="mt-6 w-full">
                  {features.map((item, index) => (
                    <div
                      key={index}
                      className="inline-flex h-[40.8px] w-full items-center border-b border-[#E2E8F0] dark:border-gray-700 px-0 py-[12px]"
                    >
                      <p className="text-[#2D3748] dark:text-gray-200 text-[12px] leading-[18px]">
                        ✓ {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-8 flex w-full justify-center">
                  <button className="flex h-[53.5px] w-full items-center justify-center rounded-[50px] bg-[#C12172] px-0 py-[17px]">
                    <span className="text-white text-[15px] font-semibold leading-[25.5px]">
                      Buy Now
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {!plans.length && (
          <div className="mt-10 text-center text-gray-500">
            No landline plans available.
          </div>
        )}
      </div>
    </section>
  );
}