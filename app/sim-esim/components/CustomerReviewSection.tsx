"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

export default function CustomerReviewSection() {
  return (
    <section className="w-full bg-[#F6F8FC] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[440px_1fr] lg:gap-12">
          {/* Left Image */}
          <div className="overflow-hidden rounded-[22px] bg-[#E2E8F0] shadow-[0_16px_36px_-12px_rgba(11,27,72,0.12)]">
            <img
              src="/Images/sime/18.png"
              alt="Connected devices including smartwatch, phone, tablet, laptop, and earbuds on a wooden desk"
              className="h-[270px] w-full object-cover sm:h-[310px] lg:h-[325px]"
            />
          </div>

          {/* Right Content */}
          <div className="max-w-[540px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2B3766]">
              ALREADY A CUSTOMER?
            </p>

            <h2 className="mt-2.5 text-[30px] font-bold leading-[1.16] tracking-[-0.02em] text-[#0B1B48] sm:text-[36px]">
              Review your connected
              <br />
              devices with us
            </h2>

            <p className="mt-3.5 text-[14px] font-normal leading-[1.6] text-[#4A5568] sm:text-[14.5px]">
              Existing business customers can ask for an assisted review of
              their
              <br className="hidden sm:inline" /> IoT connectivity — no account
              access needed and no assumed
              <br className="hidden sm:inline" /> savings.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <a
                href="#"
                className="inline-flex h-[42px] items-center justify-center gap-1 rounded-[8px] bg-gradient-to-r from-[#E11D48] via-[#DB2777] to-[#C026D3] px-5 text-[12.5px] font-bold text-[#FFFFFF] shadow-[0_10px_24px_-4px_rgba(219,39,119,0.55)] transition-opacity hover:opacity-95"
              >
                <span>Contact our business team</span>
                <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </a>

              <a
                href="#"
                className="inline-flex h-[42px] items-center justify-center rounded-[8px] border border-[#0B1B48]/25 bg-[#FFFFFF] px-5 text-[12.5px] font-bold text-[#0B1B48] transition-colors hover:border-[#0B1B48]/45 hover:bg-[#F8FAFC]"
              >
                Read our FAQs
              </a>
            </div>

            {/* Manage SIMs Notice Card */}
            <div className="mt-5 flex flex-col justify-between gap-4 rounded-[14px] border border-dashed border-[#CBD5E1] bg-[#FFFFFF]/80 px-5 py-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-[12.5px] font-bold leading-[1.35] text-[#0B1B48]">
                  Manage your IoT SIMs online
                </h3>
                <p className="mt-1 text-[11.5px] font-normal leading-[1.45] text-[#64748B]">
                  An IoT account portal isn&apos;t available yet.
                </p>
              </div>

              <button
                type="button"
                disabled
                className="inline-flex h-[34px] shrink-0 cursor-not-allowed items-center justify-center rounded-[7px] bg-[#E2E8F0] px-3.5 text-[11px] font-semibold text-[#94A3B8]"
              >
                Sign in &mdash; coming soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
