"use client";

import { useState } from "react";
import { Check } from "lucide-react";

type ChecklistItem = {
  id: string;
  title: string;
  description: string;
};

const CHECKLIST_ITEMS: readonly ChecklistItem[] = [
  {
    id: "internet",
    title: "Suitable internet connection",
    description: "Digital voice usually needs reliable broadband at each site.",
  },
  {
    id: "power",
    title: "Mains power and backup plan",
    description: "Equipment stops in a power cut without backup.",
  },
  {
    id: "phones",
    title: "Supported phones or apps",
    description: "Check handsets, headsets and apps are compatible.",
  },
  {
    id: "address",
    title: "Your registered address for 999",
    description: "So emergency services can find you.",
  },
  {
    id: "numbers",
    title: "A list of your numbers",
    description: "Numbers you want to keep, and which sites they belong to.",
  },
  {
    id: "contract",
    title: "Your current contract dates",
    description: "So you don't pay twice or leave early by mistake.",
  },
] as const;

export default function SetupChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercentage = (completedCount / CHECKLIST_ITEMS.length) * 100;

  return (
    <section className="w-full bg-[#F5F6FB] py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
            Get ready
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight text-[#131138] sm:text-4xl lg:text-[42px]">
            Setup checklist
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] text-sm text-[#545275] sm:text-base">
            Tick off what you already have. It helps our team plan your setup.
          </p>
        </div>

        {/* Checklist Grid (3 columns x 2 rows) */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CHECKLIST_ITEMS.map((item) => {
            const isChecked = !!checkedItems[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`group flex cursor-pointer items-start gap-4 rounded-[22px] border bg-white p-6 shadow-[0_10px_28px_rgba(19,17,56,0.04)] transition hover:border-[#cfcce4] sm:p-7 ${
                  isChecked
                    ? "border-[#e6007e]/60 bg-[#fdf5fa]/40"
                    : "border-[#ecebf4]"
                }`}
              >
                {/* Custom Checkbox */}
                <div
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition ${
                    isChecked
                      ? "border-[#e6007e] bg-[#e6007e] text-white shadow-xs"
                      : "border-[#b8b4d8] bg-white group-hover:border-[#7b3fe4]"
                  }`}
                >
                  {isChecked && (
                    <Check
                      className="h-3.5 w-3.5"
                      strokeWidth={3}
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h3 className="text-sm font-extrabold tracking-tight text-[#131138]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#545275]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Bar & Status */}
        <div className="mx-auto mt-10 max-w-[1300px]">
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-[#e3e2ef]">
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#e6007e] to-[#7b3fe4] transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="mt-2.5 text-right text-xs font-bold tracking-wide text-[#545275]">
            {completedCount} of {CHECKLIST_ITEMS.length} ready
          </div>
        </div>
      </div>
    </section>
  );
}
