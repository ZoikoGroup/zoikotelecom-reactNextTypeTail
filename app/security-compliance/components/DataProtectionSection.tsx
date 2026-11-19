"use client";

import React from "react";
import { Check, ChevronRight } from "lucide-react";

const DATA_PROTECTION_POINTS = [
  "UK-based support doesn't by itself mean all data stays in the UK — ask for data-flow details",
  "A data processing agreement may apply, depending on the roles involved",
  "Public forms collect only contact and business context",
  "ICO registration isn't certification of full compliance",
] as const;

export default function DataProtectionSection() {
  return (
    <section
      aria-labelledby="data-protection-heading"
      className="w-full bg-white py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Image Card */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-[22px] bg-[#E5E7EB] shadow-[0_18px_42px_rgba(15,23,66,0.09)] border border-[#ECEAF5]">
              <img
                src="/Images/comp/9.png"
                alt="Person reviewing business documents at a desk with a mug and notebooks"
                className="h-[310px] sm:h-[370px] w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Data Protection Content */}
          <div className="lg:col-span-6 max-w-[540px]">
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#565B75] mb-2.5">
              DATA PROTECTION
            </p>

            <h2
              id="data-protection-heading"
              className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B] mb-3.5"
            >
              Handle business information carefully
            </h2>

            <p className="text-[13px] sm:text-[13.5px] leading-[1.55] text-[#5B6078] mb-5">
              Telecom services involve contact details, account information and
              service data. Who acts as controller or processor depends on the
              service and purpose.
            </p>

            <ul className="space-y-3 text-[12.5px] sm:text-[13px] leading-[1.5] text-[#4B5068] mb-7">
              {DATA_PROTECTION_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <Check
                    className="h-4 w-4 shrink-0 text-[#E61E88] mt-[2px]"
                    strokeWidth={2.5}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-1.5 rounded-[8px] bg-gradient-to-r from-[#DF1A86] to-[#EB2690] px-5 py-3 text-[13px] font-bold text-white shadow-[0_12px_26px_rgba(230,26,134,0.35)] hover:brightness-105 transition"
              >
                <span>Read our privacy notice</span>
                <ChevronRight className="h-4 w-4 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
