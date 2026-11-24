import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ProtectionCta() {
  return (
    <section
      className="relative w-full overflow-hidden px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-8"
      style={{
        backgroundImage: "linear-gradient(126deg, #E0127C 0%, #9B2DC8 50%, #3D5AFE 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 -top-36 h-[420px] w-[420px] rounded-full border-[50px] border-white/[0.08] sm:h-[460px] sm:w-[460px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -right-24 h-[380px] w-[380px] rounded-full border-[50px] border-white/[0.08] sm:h-[400px] sm:w-[400px]"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.2]">
          Ask about device protection.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-lg">
          Protection is optional, and it’s always separate from your device and airtime.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#protection-enquiry"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#E0127C] shadow-[0_8px_22px_rgba(10,20,70,0.18)] transition-transform hover:scale-[1.01] sm:w-auto sm:text-base"
          >
            Ask about device protection
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          </Link>
          <Link
            href="#faqs"
            className="inline-flex w-full items-center justify-center rounded-xl border-2 border-white/85 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.14] sm:w-auto sm:text-base"
          >
            Read device help
          </Link>
        </div>
      </div>
    </section>
  );
}
