import React from "react";
import { Home, Smartphone } from "lucide-react";

export default function ContractDates() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            CONTRACT DATES
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Your contracts may not line up
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Broadband and mobile can start and end at different times. This
            example shows why it matters.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-[#ECEEF6] bg-white p-6 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-8 lg:p-10">
          {/* Timeline Rows */}
          <div className="space-y-6">
            {/* Broadband Row */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex w-36 shrink-0 items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#FCE8F1] text-[#E11D74]">
                  <Home className="h-4 w-4" strokeWidth={2.25} />
                </span>
                <span className="text-sm font-extrabold text-[#11183C]">
                  Broadband
                </span>
              </div>

              <div className="relative flex-1 rounded-2xl bg-[#F4F5F9] p-2.5">
                {/* Visual Bar representing contract duration */}
                <div className="relative h-9 w-[70%] rounded-xl bg-gradient-to-r from-[#5B3EE4] to-[#7C3AED] px-4 py-2 text-xs font-bold text-white shadow-sm flex items-center">
                  Broadband contract
                </div>
              </div>
            </div>

            {/* Mobile Row */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex w-36 shrink-0 items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#FCE8F1] text-[#E11D74]">
                  <Smartphone className="h-4 w-4" strokeWidth={2.25} />
                </span>
                <span className="text-sm font-extrabold text-[#11183C]">
                  Mobile
                </span>
              </div>

              <div className="relative flex-1 rounded-2xl bg-[#F4F5F9] p-2.5">
                {/* Visual Bar shifted right representing later end date */}
                <div className="relative ml-[25%] h-9 w-[70%] rounded-xl bg-gradient-to-r from-[#E11D74] to-[#9333EA] px-4 py-2 text-xs font-bold text-white shadow-sm flex items-center">
                  Mobile contract
                </div>
              </div>
            </div>

            {/* Timeline Axis Labels */}
            <div className="flex justify-between pl-36 pr-4 text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
              <span>Start</span>
              <span>Later</span>
              <span>End dates differ</span>
            </div>
          </div>

          {/* Bottom Explanatory Footer Note */}
          <div className="mt-8 border-t border-[#EEF0F7] pt-6">
            <p className="text-xs leading-relaxed text-[#4B5563] sm:text-sm">
              Example only. Changing or ending one service could affect any
              combined discount. We&apos;ll explain this for your contracts
              before you agree.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
