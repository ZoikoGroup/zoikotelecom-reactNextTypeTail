"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

export default function BuildingConnectivityCtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#E11D84] via-[#7E22CE] to-[#2563EB] py-16 md:py-20">
      {/* Subtle Decorative Ring Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-[340px] w-[340px] rounded-full border-[26px] border-white/[0.08]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-20 h-[360px] w-[360px] rounded-full border-[26px] border-white/[0.08]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-5xl text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-[#FFFFFF] sm:text-[36px]">
          Discuss your building connectivity requirements.
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-[13.5px] font-normal leading-[1.6] text-white/90 sm:text-[14.5px]">
          We use your details only to respond to your enquiry. See our{" "}
          <a
            href="#"
            className="underline decoration-white/60 underline-offset-2 transition-colors hover:text-[#FFFFFF] hover:decoration-white"
          >
            Privacy Notice
          </a>
          .
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#"
            className="inline-flex h-[42px] items-center justify-center gap-1 rounded-[7px] bg-[#FFFFFF] px-5 text-[12.5px] font-bold text-[#DB2777] shadow-[0_10px_24px_-6px_rgba(11,27,72,0.25)] transition-transform duration-150 hover:-translate-y-0.5"
          >
            <span>Discuss site requirements</span>
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </a>

          <a
            href="#"
            className="inline-flex h-[42px] items-center justify-center rounded-[7px] border border-white/55 bg-white/[0.08] px-5 text-[12.5px] font-semibold text-[#FFFFFF] transition-colors hover:border-white/80 hover:bg-white/[0.14]"
          >
            Business solutions
          </a>
        </div>
      </div>
    </section>
  );
}
