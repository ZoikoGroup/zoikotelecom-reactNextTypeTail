import React from "react";
import Image from "next/image";
import { Check, Info } from "lucide-react";

const COVERAGE_POINTS = [
  "List the sites, depots and routes your team uses",
  "Check indoor signal where people work most",
  "5G needs a 5G plan, a compatible device and local signal",
  "Report signal problems to us with the location and time",
] as const;

export default function MobileCoverage() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Main Grid Container */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Image with Rounded Corners */}
          <div className="relative h-[380px] w-full overflow-hidden rounded-3xl shadow-[0_12px_40px_rgba(6,12,54,0.1)] sm:h-[440px] lg:col-span-6">
            <Image
              src="/Images/mbl/8.png"
              alt="Person reviewing technical drawings and plans"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Column: Content & Coverage Checklists */}
          <div className="lg:col-span-6">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
              COVERAGE
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
              Check the places your team works
            </h2>
            <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
              4G and 5G signal differs outdoors, indoors, inside buildings and
              while travelling. Coverage maps give predictions, not guarantees.
            </p>

            {/* Checklist items */}
            <div className="mt-6 space-y-3.5">
              {COVERAGE_POINTS.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FCE8F1] text-[#E11D74]">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </div>
                  <p className="text-xs leading-relaxed text-[#4B5563] sm:text-sm">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Notice Callout Box */}
            <div className="mt-8 rounded-2xl border border-[#ECEEF6] bg-gradient-to-br from-[#F5F7FF] to-[#ECEEF8] p-5 shadow-[0_4px_20px_rgba(17,24,60,0.02)]">
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-[#7C3AED]">
                  <Info className="h-5 w-5" strokeWidth={2.25} />
                </div>
                <p className="text-xs leading-relaxed text-[#4B5563] sm:text-sm">
                  Our online coverage checker isn&apos;t on this page yet. Our
                  team can talk through your locations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
