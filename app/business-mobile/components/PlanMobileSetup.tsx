import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PlanMobileSetup() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#D91B7E] via-[#7B3FE4] to-[#3D7BFF] px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8">
      {/* Background Decorative Rings / Glows */}
      <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1000px] text-center">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
          Plan your team&apos;s next mobile setup.
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm leading-relaxed text-[#F3F4F6] sm:text-base">
          Speak to our business team for a proposal with every cost shown.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/business/mobile/proposal"
            className="inline-flex items-center justify-center gap-1.5 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-[#E11D74] shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-transform hover:scale-[1.02]"
          >
            <span>Get a business mobile proposal</span>
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>

          <Link
            href="/business/support"
            className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-transparent px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            <span>Contact support</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
