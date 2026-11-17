"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Home, Smartphone, Wifi, HelpCircle } from "lucide-react";

const STARTING_OPTIONS = [
  {
    id: "need-both",
    title: "I need both",
    subtitle: "Broadband and mobile",
    description:
      "We can help you look at both services side by side and ask about combinations.",
    icon: Wifi,
  },
  {
    id: "have-broadband",
    title: "I have broadband",
    subtitle: "Looking for mobile",
    description:
      "Explore add-on mobile plans to pair with your existing broadband package.",
    icon: Smartphone,
  },
  {
    id: "have-mobile",
    title: "I have mobile",
    subtitle: "Looking for broadband",
    description:
      "Find the ideal home broadband speed and plan to match your household needs.",
    icon: Home,
  },
  {
    id: "not-sure-yet",
    title: "Not sure yet",
    subtitle: "Just exploring",
    description:
      "Browse our complete library of guides, plans, and FAQs to find what works best.",
    icon: HelpCircle,
  },
] as const;

export default function YourStartingPoint() {
  const [selectedId, setSelectedId] = useState<string>("need-both");

  const activeOption =
    STARTING_OPTIONS.find((opt) => opt.id === selectedId) ||
    STARTING_OPTIONS[0];

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            YOUR STARTING POINT
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            What do you need?
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Choose one to see where to start.
          </p>
        </div>

        {/* Four-Column Selection Cards */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STARTING_OPTIONS.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedId === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelectedId(option.id)}
                className={`flex flex-col justify-between rounded-3xl border p-6 text-left transition-all sm:p-7 ${
                  isSelected
                    ? "border-[#E11D74] bg-white ring-2 ring-[#E11D74]/20 shadow-[0_12px_30px_rgba(225,29,116,0.08)]"
                    : "border-[#ECEEF6] bg-white shadow-[0_6px_24px_rgba(17,24,60,0.04)] hover:border-[#DCE1F0]"
                }`}
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-white shadow-md">
                    <Icon className="h-5 w-5" strokeWidth={2.25} />
                  </div>

                  <h3 className="mt-6 text-lg font-extrabold tracking-tight text-[#11183C]">
                    {option.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-[#4B5563]">
                    {option.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Dark Dynamic Card Banner */}
        <div className="mx-auto mt-10 max-w-7xl rounded-3xl bg-gradient-to-r from-[#060C36] via-[#081040] to-[#2A1A6E] p-6 text-white shadow-[0_12px_30px_rgba(17,24,60,0.15)] sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                {activeOption.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#D1D5EB] sm:text-base">
                {activeOption.description}
              </p>
            </div>

            <div className="flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(225,29,116,0.32)] transition-transform hover:scale-[1.01]"
              >
                Ask about a bundle
              </Link>

              <Link
                href="/broadband/options"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/[0.12]"
              >
                Explore broadband
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
