"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

export default function GetClearAnswersBanner() {
  return (
    <section
      aria-labelledby="get-clear-answers-heading"
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#DF0E7E] via-[#8E28C8] to-[#364CF5] py-14 sm:py-16 px-4 sm:px-8 text-white font-sans"
    >
      {/* Subtle Decorative Ring Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 h-[290px] w-[290px] rounded-full border-[30px] border-white/[0.11]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 h-[290px] w-[290px] rounded-full border-[30px] border-white/[0.12]"
      />

      <div className="relative z-10 max-w-[1300px] mx-auto text-center">
        <h2
          id="get-clear-answers-heading"
          className="text-[28px] sm:text-[38px] font-extrabold leading-[1.18] tracking-[-0.025em] text-white mb-2.5"
        >
          Get clear answers before you connect.
        </h2>

        <p className="text-[12.5px] sm:text-[13.5px] leading-[1.55] text-white/90 font-normal max-w-[640px] mx-auto mb-7">
          Talk to our team about the safeguards and information your
          organisation needs.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-1 rounded-[8px] bg-white px-5 py-2.5 text-[12px] font-bold text-[#DF0E7E] shadow-[0_10px_24px_rgba(15,10,48,0.18)] hover:bg-[#FFF8FC] transition"
          >
            <span>Discuss security requirements</span>
            <ChevronRight className="h-3.5 w-3.5 stroke-[2.5]" />
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center rounded-[8px] border border-white/45 bg-white/[0.08] px-5 py-2.5 text-[12px] font-semibold text-white hover:bg-white/[0.16] transition"
          >
            Explore business solutions
          </a>
        </div>
      </div>
    </section>
  );
}
