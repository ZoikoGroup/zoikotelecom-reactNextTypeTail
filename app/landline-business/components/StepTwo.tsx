"use client";

import { Check } from "lucide-react";

interface Props {
  selectedAllowance: number;
  setSelectedAllowance: (id: number) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const allowances = [
  {
    id: 1,
    title: "Pay As You Go",
    subtitle: "Calls billed per minute",
    price: "£0.00",
  },
  {
    id: 2,
    title: "250 Minutes",
    subtitle: "UK landline & mobile",
    price: "+£5.99",
  },
  {
    id: 3,
    title: "500 Minutes",
    subtitle: "UK landline & mobile",
    price: "+£9.99",
    badge: "POPULAR",
  },
  {
    id: 4,
    title: "Unlimited Minutes",
    subtitle: "All UK destinations",
    price: "+£14.99",
  },
];

export default function StepTwo({
  selectedAllowance,
  setSelectedAllowance,
  nextStep,
  prevStep,
}: Props) {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-900 rounded-[24px] p-4 sm:p-6 md:p-8">
        <div className="inline-flex border border-[#F91E8C] rounded-full px-4 py-1 text-[#F91E8C] text-xs font-bold mb-2">
          STEP 2 OF 6
        </div>

        <h2 className="text-[22px] sm:text-[28px] md:text-[32px] font-extrabold text-[#1A1A2E] dark:text-white mb-1 leading-tight">
          Inclusive Call Allowance
        </h2>

        <p className="text-[#8D8DAA] text-sm md:text-base">
          Choose your included minutes package for UK landline and mobile calls.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-[24px] overflow-hidden">
        <div className="grid grid-cols-3 bg-gradient-to-r from-[#7B1FA2] to-[#F91E8C] px-3 sm:px-4 md:px-6 py-4 text-white text-[10px] sm:text-xs md:text-sm font-semibold">
          <p>INCLUSIVE MINUTES</p>
          <p>PRICE</p>
          <p className="text-center">SELECT</p>
        </div>

        {allowances.map((item) => {
          const active = selectedAllowance === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setSelectedAllowance(item.id)}
              className={`grid grid-cols-3 items-center w-full px-3 sm:px-4 md:px-6 py-4 border-b border-[#EFEFEF] text-left transition-all duration-300 ${
                active
                  ? "bg-gray-800 dark:bg-gray-800"
                  : "bg-white dark:bg-gray-900"
              }`}
            >
              <div className="pr-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-[#1A1A2E] dark:text-white text-xs sm:text-sm md:text-base">
                    {item.title}
                  </h3>

                  {item.badge && (
                    <span className="bg-linear-76 from-[#7B1FA2] via-[#C2185B] via-60% to-[#E91E8C] text-white text-[9px] sm:text-[10px] px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>

                <p className="text-[10px] sm:text-xs md:text-sm text-[#8D8DAA] mt-1">
                  {item.subtitle}
                </p>
              </div>

              <p className="font-bold text-[#F91E8C] text-xs sm:text-sm md:text-base">
                {item.price}
              </p>

              <div className="flex justify-center">
                <div
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    active
                      ? "rounded-xl border-2 border-transparent bg-gradient-to-br from-[#7B1FA2] via-[#C2185B] to-[#E91E8C]"
                      : "border-[#D4D4D8]"
                  }`}
                >
                  {active && (
                    <Check size={14} className="text-white" />
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-4">
        <button
          onClick={prevStep}
          className="w-full sm:w-auto border border-[#F91E8C] text-[#F91E8C] px-6 py-3 rounded-full font-semibold before:content-['<'] before:mr-2"
        >
          Back
        </button>

        <button
          onClick={nextStep}
          className="w-full sm:w-auto bg-[#E91E8C] text-white px-7 py-3 rounded-full text-sm font-semibold after:content-['>'] after:ml-2"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}