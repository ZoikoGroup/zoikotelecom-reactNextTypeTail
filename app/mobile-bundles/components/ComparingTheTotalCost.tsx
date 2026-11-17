"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";

export default function ComparingTheTotalCost() {
  const [postcode, setPostcode] = useState("");

  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            BUNDLE PRICES
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Comparing the total cost
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            When combined offers are available, you&apos;ll see standalone and
            bundled costs over the same period.
          </p>
        </div>

        {/* Two-Column Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Card: Bundle Pricing Details */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#E4D7F5] bg-[#FBF7FD] p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-8 lg:col-span-6">
            <div>
              {/* Cost Rows */}
              <div className="space-y-4">
                <div className="rounded-2xl border border-[#ECEEF6] bg-[#FAFAFD] p-4.5">
                  <span className="text-2xl font-black text-[#94A3B8]">£—</span>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-extrabold text-[#11183C]">
                      Broadband + mobile, like for like
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-[#6B7280]">
                    Separate vs combined · Same period
                  </p>
                </div>

                <div className="rounded-2xl border border-[#ECEEF6] bg-[#FAFAFD] p-4.5">
                  <span className="text-2xl font-black text-[#94A3B8]">£—</span>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-extrabold text-[#11183C]">
                      Any discount explained
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-[#6B7280]">
                    Type · How long · What ends it
                  </p>
                </div>
              </div>

              <p className="mt-6 text-xs leading-relaxed text-[#4B5563]">
                Bundle pricing isn&apos;t shown online yet. We&apos;ll never
                show a saving we can&apos;t back up.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(225,29,116,0.32)] transition-transform hover:scale-[1.01]"
              >
                <span>Ask about a bundle</span>
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* Right Card: Check Availability at Your Address */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#ECEEF6] bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-8 lg:col-span-6">
            <div>
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-white shadow-md">
                  <Search className="h-5 w-5" strokeWidth={2.25} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight text-[#11183C]">
                    Check availability at your address
                  </h3>
                  <p className="text-xs text-[#B45309]">
                    Address checking isn&apos;t live on this page yet.
                  </p>
                </div>
              </div>

              {/* Postcode Input Form */}
              <div className="mt-6">
                <label className="block text-xs font-bold uppercase tracking-wide text-[#434A6E]">
                  Postcode
                </label>
                <div className="mt-1.5 flex gap-2">
                  <input
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    placeholder="e.g. W1W 5PF"
                    className="w-full rounded-xl border border-[#E6E9F2] bg-[#F4F5F9] px-4 py-3 text-sm text-[#11183C] placeholder-[#94A3B8] focus:border-[#7C3AED] focus:bg-white focus:outline-none"
                  />
                  <button
                    type="button"
                    className="inline-flex shrink-0 items-center justify-center rounded-xl border border-[#D1D5DB] bg-[#EAECEF] px-5 text-sm font-bold text-[#4B5563] transition-colors hover:bg-[#DEE2E6]"
                  >
                    Check
                  </button>
                </div>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-[#4B5563]">
                Until it&apos;s ready, our team can tell you what&apos;s
                available. We never show a result we can&apos;t confirm.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(225,29,116,0.32)] transition-transform hover:scale-[1.01]"
              >
                <span>Ask about availability</span>
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
