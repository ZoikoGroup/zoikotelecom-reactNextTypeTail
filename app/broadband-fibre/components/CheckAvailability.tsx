"use client";
import React, { useState } from "react";
import { Lock, ChevronRight } from "lucide-react";

export default function CheckAvailability() {
  const [postcode, setPostcode] = useState<string>("");

  return (
    <div className="w-full bg-[#F5F6FB] py-16 px-4 flex justify-center font-sans">
      <div className="w-full max-w-[1300px] flex flex-col items-center">
        {/* Header section */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.15em] text-[#1e2230] uppercase mb-3 block">
            YOUR PREMISES
          </span>
          <h2 className="text-[38px] leading-[48px] font-extrabold text-[#111827] max-w-[700px] tracking-tight">
            Check availability at your business address
          </h2>
        </div>

        {/* Main Banner Card */}
        <div className="w-full bg-gradient-to-r from-[#0A1446] to-[#1E2A86] rounded-[32px] p-8 md:p-12 shadow-2xl border border-[#1f2448] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          {/* Left Side: Info & CTA */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e2347] border border-[#2a305e] text-[#9ca3af] text-xs font-semibold mb-6">
              <Lock className="w-3.5 h-3.5 text-[#9ca3af]" />
              <span>Not live yet</span>
            </div>

            <h3 className="text-2xl md:text-[28px] font-bold text-white tracking-tight mb-4 leading-snug">
              Address checks aren&apos;t available online yet
            </h3>

            <p className="text-sm md:text-base text-[#9ca3af] font-normal leading-relaxed mb-8 max-w-[520px]">
              Availability differs at every business premises. When this check
              goes live it will show one of these results — never just a
              &ldquo;yes&rdquo; from a postcode. For now, our team will check
              each site for you.
            </p>

            <a
              href="#"
              className="bg-gradient-to-r from-[#db2777] to-[#e11d48] hover:from-[#be185d] hover:to-[#9f1239] text-white font-semibold py-4 px-7 rounded-2xl flex items-center gap-2 shadow-lg transition-all duration-200"
            >
              <span>Ask us to check your site</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right Side: Simulated Search Card */}
          <div className="lg:col-span-6 w-full bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 flex flex-col justify-between">
            <div className="w-full">
              <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-2">
                Business postcode
              </label>

              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  placeholder="e.g. EC2A 4NE"
                  className="flex-1 bg-[#f9fafb] border border-[#e5e7eb] rounded-2xl px-4 py-3.5 text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#db2777]/20 focus:border-[#db2777]"
                />
                <button
                  type="button"
                  className="bg-gradient-to-r from-[#db2777] to-[#e11d48] text-white font-semibold px-7 py-3.5 rounded-2xl shadow-md transition-all duration-200 hover:opacity-95 shrink-0"
                >
                  Check
                </button>
              </div>

              <p className="text-[11px] text-[#6b7280] mb-6">
                Address checking isn&apos;t connected on this page.
              </p>
            </div>

            {/* Status Pills Preview */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
              {[
                "Available",
                "Survey needed",
                "Unavailable",
                "Unknown",
                "Check later",
              ].map((pill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 rounded-full bg-[#f3f4f6] text-[#4b5563] text-xs font-medium border border-gray-200"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
