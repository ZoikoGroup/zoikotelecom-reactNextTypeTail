import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function MoreThanMobile() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#060C36] via-[#081040] to-[#2A1A6E] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Main Grid Container */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Content & CTA */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#E11D74]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                MORE THAN MOBILE
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
              Need broadband for your office too?
            </h2>

            <p className="mt-3.5 text-sm leading-relaxed text-[#D1D5EB] sm:text-base">
              Business broadband is a separate service with its own terms. We
              can talk about both together, but we won&apos;t assume a combined
              price or single bill.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/business/broadband"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-7 py-4 text-sm font-bold text-white shadow-[0_8px_25px_rgba(225,29,116,0.35)] transition-transform hover:scale-[1.01]"
              >
                <span>Business Broadband & Fibre</span>
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* Right Column: Office Interior Image (/Images/mbl/13.png) */}
          <div className="relative h-[320px] w-full overflow-hidden rounded-3xl border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.3)] sm:h-[380px] lg:col-span-6">
            <Image
              src="/Images/mbl/13.png"
              alt="Modern office interior with desk and laptop overlooking city view"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
