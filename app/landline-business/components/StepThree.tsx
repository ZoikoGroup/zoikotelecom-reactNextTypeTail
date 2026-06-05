"use client";

import { Menu, Plus } from "lucide-react";

interface Props {
  selectedPorting: number;
  setSelectedPorting: (id: number) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const options = [
  {
    id: 1,
    title: "Keep Existing Number",
    description:
      "Port your current landline number to Zoiko — no disruption to your contacts.",
    price: "Free porting",
    icon: Menu,
  },
  {
    id: 2,
    title: "Get a New Number",
    description:
      "Choose a brand-new geographic or non-geographic number for your business.",
    price: "Included",
    icon: Plus,
  },
];

export default function StepThree({
  selectedPorting,
  setSelectedPorting,
  nextStep,
  prevStep,
}: Props) {
  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="bg-white dark:bg-gray-900 rounded-[24px] p-4 sm:p-6 md:p-8">
        <div className="inline-flex border border-[#F91E8C] rounded-full px-4 py-1 text-[#F91E8C] text-xs font-bold mb-2">
          STEP 3 OF 6
        </div>

        <h2 className="text-[22px] sm:text-[28px] md:text-[32px] font-extrabold leading-tight text-[#1A1A2E] dark:text-white mb-1">
          Porting Options
        </h2>

        <p className="text-[#8D8DAA] text-sm md:text-base">
          Choose your included minutes package for UK landline and mobile calls.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {options.map((item) => {
          const Icon = item.icon;
          const active = selectedPorting === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setSelectedPorting(item.id)}
              className={`border rounded-[24px] p-4 sm:p-6 text-left transition-all duration-300 ${
                active
                  ? "bg-gradient-to-br from-[#7B1FA2]/5 to-[#FF1493]/5 border-2 border-[#FF1493] shadow-[0px_2px_20px_0px_rgba(123,31,162,0.09)]"
                  : "bg-white dark:bg-gray-900 border-2 border-[#ECEAF3]"
              }`}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#7B1FA2] via-[#C2185B] to-[#FF1493] text-white mb-4">
                <Icon size={18} />
              </div>

              <h3 className="font-semibold text-[#1A1A2E] dark:text-white text-base sm:text-lg mb-1">
                {item.title}
              </h3>

              <p className="text-sm text-[#8D8DAA] leading-relaxed mb-3">
                {item.description}
              </p>

              <p className="font-bold text-[#F91E8C]">
                {item.price}
              </p>
            </button>
          );
        })}
      </div>

      {/* BUTTONS */}
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