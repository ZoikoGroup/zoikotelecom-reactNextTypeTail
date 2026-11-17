"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";

const FULL_FIBRE_PLACEHOLDERS = [
  {
    id: "plans-appear",
    pricePlaceholder: "£—",
    title: "Full-fibre plans appear here",
    subtitle: "Download · Upload · Contract · Price",
  },
  {
    id: "every-cost-shown",
    pricePlaceholder: "£—",
    title: "With every cost shown",
    subtitle: "VAT · Set-up · Router · Price changes",
  },
] as const;

const FULL_FIBRE_PLANS_CONTENT = {
  eyebrow: "FULL-FIBRE PLANS",
  title: "Is full fibre available where you live?",
  subtitle:
    "Full fibre is still being built across the UK, so it depends on your exact property.",
  leftCard: {
    helperText: "Full-fibre plan listings aren't live on this page yet.",
    cta: {
      label: "Explore broadband options",
      href: "/broadband/options",
    },
  },
  rightCard: {
    heading: "Check availability at your address",
    statusNote: "Address checking isn't live on this page yet.",
    inputLabel: "Postcode",
    inputPlaceholder: "e.g. W1W 5PF",
    checkButtonLabel: "Check",
    helperText:
      "Until it's ready, our team can tell you what's available. We never show a result we can't confirm.",
    cta: {
      label: "Ask about availability",
      href: "/contact",
    },
  },
} as const;

export default function FullFibrePlans() {
  const [postcode, setPostcode] = useState("");

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            {FULL_FIBRE_PLANS_CONTENT.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[38px] lg:leading-[1.15]">
            {FULL_FIBRE_PLANS_CONTENT.title}
          </h2>
          <p className="mt-3.5 text-sm text-[#4B5563] sm:text-base">
            {FULL_FIBRE_PLANS_CONTENT.subtitle}
          </p>
        </div>

        {/* Two-Column Cards */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left Dashed Placeholder Card with Diagonal Striping Effect */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-dashed border-[#D8CEEE] bg-[linear-gradient(135deg,#FCFBFF_0%,#F4EEFA_100%)] p-6 sm:p-8">
            <div className="relative z-10 space-y-4">
              {FULL_FIBRE_PLACEHOLDERS.map((row) => (
                <div
                  key={row.id}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-[#F0F1F8] bg-white px-5 py-4 shadow-[0_2px_10px_rgba(17,24,60,0.02)]"
                >
                  <span className="text-xl font-bold text-[#94A3B8] sm:text-2xl">
                    {row.pricePlaceholder}
                  </span>
                  <div className="text-right">
                    <p className="text-sm font-extrabold text-[#11183C] sm:text-base">
                      {row.title}
                    </p>
                    <p className="mt-0.5 text-sm text-[#94A3B8]">
                      {row.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-6 text-center">
              <p className="mx-auto max-w-md text-sm leading-relaxed text-[#4B5563]">
                {FULL_FIBRE_PLANS_CONTENT.leftCard.helperText}
              </p>

              <div className="mt-5">
                <Link
                  href={FULL_FIBRE_PLANS_CONTENT.leftCard.cta.href}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(225,29,116,0.32)] transition-transform hover:scale-[1.01] hover:from-[#D01769] hover:to-[#C11260]"
                >
                  <span>{FULL_FIBRE_PLANS_CONTENT.leftCard.cta.label}</span>
                  <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Availability Checker Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#ECEEF6] bg-white p-7 shadow-[0_12px_30px_rgba(17,24,60,0.06)] sm:p-9">
            <div>
              {/* Card Header with Icon */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F4297B] to-[#8A3FFC] text-white shadow-md">
                  <Search className="h-5 w-5" strokeWidth={2.25} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight text-[#11183C] sm:text-xl">
                    {FULL_FIBRE_PLANS_CONTENT.rightCard.heading}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-[#B45309]">
                    {FULL_FIBRE_PLANS_CONTENT.rightCard.statusNote}
                  </p>
                </div>
              </div>

              {/* Postcode Field */}
              <div className="mt-6">
                <label
                  htmlFor="full-fibre-postcode-input"
                  className="block text-sm font-bold text-[#11183C]"
                >
                  {FULL_FIBRE_PLANS_CONTENT.rightCard.inputLabel}
                </label>
                <div className="mt-2 flex items-center gap-2.5">
                  <input
                    id="full-fibre-postcode-input"
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    placeholder={
                      FULL_FIBRE_PLANS_CONTENT.rightCard.inputPlaceholder
                    }
                    className="w-full min-w-0 flex-1 rounded-xl border border-[#E6E9F2] bg-[#F4F5F9] px-4 py-3 text-sm text-[#11183C] placeholder-[#94A3B8] focus:border-[#8A3FFC] focus:bg-white focus:outline-none"
                  />
                  <button
                    type="button"
                    disabled
                    className="shrink-0 cursor-not-allowed rounded-xl bg-[#E4E7F1] px-5 py-3 text-sm font-bold text-[#94A3B8]"
                  >
                    {FULL_FIBRE_PLANS_CONTENT.rightCard.checkButtonLabel}
                  </button>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#4B5563]">
                {FULL_FIBRE_PLANS_CONTENT.rightCard.helperText}
              </p>
            </div>

            <div className="mt-6">
              <Link
                href={FULL_FIBRE_PLANS_CONTENT.rightCard.cta.href}
                className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(225,29,116,0.32)] transition-transform hover:scale-[1.01] hover:from-[#D01769] hover:to-[#C11260]"
              >
                <span>{FULL_FIBRE_PLANS_CONTENT.rightCard.cta.label}</span>
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
