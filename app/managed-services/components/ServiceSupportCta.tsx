"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

export default function ServiceSupportCta() {
  return (
    <section
      aria-labelledby="service-support-cta-heading"
      className="relative w-full bg-gradient-to-r from-[#E21784] via-[#9C23C9] to-[#4A32F2] py-16 sm:py-20 px-4 sm:px-8 text-white font-sans overflow-hidden"
    >
      {/* Subtle Decorative Ring Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-[330px] w-[330px] rounded-full border-[38px] border-white/[0.11]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -bottom-28 h-[310px] w-[310px] rounded-full border-[36px] border-white/[0.11]"
      />

      <div className="relative z-10 max-w-[1300px] mx-auto text-center">
        <div className="max-w-[1100px] mx-auto">
          <h2
            id="service-support-cta-heading"
            className="text-[32px] sm:text-[42px] font-extrabold leading-[1.15] tracking-[-0.025em] text-white mb-4"
          >
            Ready to discuss ongoing service support for your business?
          </h2>

          <p className="text-[14px] sm:text-[15.5px] leading-[1.55] text-white/90 font-normal mb-7">
            One point of coordination, with commitments set out in writing.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-1.5 rounded-[8px] bg-white px-5 py-3 text-[13px] font-bold text-[#E11D88] shadow-[0_12px_28px_rgba(35,8,85,0.22)] hover:bg-[#FFF8FC] transition"
            >
              <span>Speak to the business team</span>
              <ChevronRight className="h-4 w-4 stroke-[2.5]" />
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-[8px] border border-white/55 bg-white/[0.08] px-5 py-3 text-[13px] font-bold text-white hover:bg-white/[0.16] transition"
            >
              Contact support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
