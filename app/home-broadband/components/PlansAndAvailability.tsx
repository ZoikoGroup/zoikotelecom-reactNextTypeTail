"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";

const PLACEHOLDER_ROWS = [
  {
    id: "plan-details",
    pricePlaceholder: "£—",
    title: "Plan details coming here",
    subtitle: "Speed · Contract · Monthly price",
  },
  {
    id: "confirmed-offers",
    pricePlaceholder: "£—",
    title: "Only confirmed offers are shown",
    subtitle: "With full costs and terms",
  },
] as const;

const PLANS_AVAILABILITY_CONTENT = {
  eyebrow: "PLANS & AVAILABILITY",
  title: "Find a plan for your address",
  subtitle: "Broadband plans and prices depend on where you live.",
  leftCard: {
    helperText:
      "Online plan listings aren't live on this page yet. See our current broadband information or ask our team.",
    cta: {
      label: "View broadband plans",
      href: "/broadband/plans",
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

export default function PlansAndAvailability() {
  const [postcode, setPostcode] = useState("");

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            {PLANS_AVAILABILITY_CONTENT.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            {PLANS_AVAILABILITY_CONTENT.title}
          </h2>
          <p className="mt-3.5 text-sm text-[#4B5563] sm:text-base">
            {PLANS_AVAILABILITY_CONTENT.subtitle}
          </p>
        </div>

        {/* Two-Column Cards */}
        <div className="mx-auto mt-12 grid max-w-[1300px] grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left Dashed Placeholder Card */}
          <div className="flex flex-col justify-between rounded-3xl border-2 border-dashed border-[#D8CEEE] bg-[#FCFBFF] p-6 sm:p-8">
            <div className="space-y-4">
              {PLACEHOLDER_ROWS.map((row) => (
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

            <div className="mt-6 text-center">
              <p className="mx-auto max-w-md text-sm leading-relaxed text-[#4B5563]">
                {PLANS_AVAILABILITY_CONTENT.leftCard.helperText}
              </p>

              <div className="mt-5">
                <Link
                  href={PLANS_AVAILABILITY_CONTENT.leftCard.cta.href}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(225,29,116,0.32)] transition-transform hover:scale-[1.01] hover:from-[#D01769] hover:to-[#C11260]"
                >
                  <span>{PLANS_AVAILABILITY_CONTENT.leftCard.cta.label}</span>
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
                    {PLANS_AVAILABILITY_CONTENT.rightCard.heading}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-[#B45309]">
                    {PLANS_AVAILABILITY_CONTENT.rightCard.statusNote}
                  </p>
                </div>
              </div>

              {/* Postcode Field */}
              <div className="mt-6">
                <label
                  htmlFor="address-postcode-input"
                  className="block text-sm font-bold text-[#11183C]"
                >
                  {PLANS_AVAILABILITY_CONTENT.rightCard.inputLabel}
                </label>
                <div className="mt-2 flex items-center gap-2.5">
                  <input
                    id="address-postcode-input"
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    placeholder={
                      PLANS_AVAILABILITY_CONTENT.rightCard.inputPlaceholder
                    }
                    className="w-full min-w-0 flex-1 rounded-xl border border-[#E6E9F2] bg-[#F4F5F9] px-4 py-3 text-sm text-[#11183C] placeholder-[#94A3B8] focus:border-[#8A3FFC] focus:bg-white focus:outline-none"
                  />
                  <button
                    type="button"
                    disabled
                    className="shrink-0 cursor-not-allowed rounded-xl bg-[#E4E7F1] px-5 py-3 text-sm font-bold text-[#94A3B8]"
                  >
                    {PLANS_AVAILABILITY_CONTENT.rightCard.checkButtonLabel}
                  </button>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#4B5563]">
                {PLANS_AVAILABILITY_CONTENT.rightCard.helperText}
              </p>
            </div>

            <div className="mt-6">
              <Link
                href={PLANS_AVAILABILITY_CONTENT.rightCard.cta.href}
                className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(225,29,116,0.32)] transition-transform hover:scale-[1.01] hover:from-[#D01769] hover:to-[#C11260]"
              >
                <span>{PLANS_AVAILABILITY_CONTENT.rightCard.cta.label}</span>
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
