"use client";

import React from "react";
import { Check, ChevronRight } from "lucide-react";

const TRUST_POINTS = [
  "Only authorised contacts can request changes",
  "We share approved documents on request — no badges without proof",
  "Your data is used only to support your services",
  "Public forms never ask for passwords or network credentials",
] as const;

export default function TrustAccessSection() {
  return (
    <section
      aria-labelledby="trust-access-heading"
      className="w-full bg-gradient-to-b from-[#FFFFFF] py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Image Card */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-[22px] bg-[#E5E7EB] shadow-[0_18px_42px_rgba(15,23,66,0.09)] border border-[#ECEAF5]">
              <img
                src="/Images/mng/18.png"
                alt="Two business professionals shaking hands across a table"
                className="h-[310px] sm:h-[370px] w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Trust & Access Content */}
          <div className="lg:col-span-6 max-w-[540px]">
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#565B75] mb-2.5">
              TRUST &amp; ACCESS
            </p>

            <h2
              id="trust-access-heading"
              className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B] mb-5"
            >
              Your information, handled carefully
            </h2>

            <ul className="space-y-3.5 text-[13.5px] sm:text-[14px] leading-[1.5] text-[#4B5068] mb-7">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <Check
                    className="h-4 w-4 shrink-0 text-[#E61E88] mt-[2px]"
                    strokeWidth={2.5}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-1.5 rounded-[8px] bg-gradient-to-r from-[#DF1A86] to-[#EB2690] px-5 py-3 text-[13px] font-bold text-white shadow-[0_12px_26px_rgba(230,26,134,0.35)] hover:brightness-105 transition"
              >
                <span>Request documentation</span>
                <ChevronRight className="h-4 w-4 stroke-[2.5]" />
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-[8px] border border-[#1E2459] bg-white px-5 py-3 text-[13px] font-bold text-[#070B2B] hover:bg-[#F8F9FD] transition"
              >
                Privacy notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
