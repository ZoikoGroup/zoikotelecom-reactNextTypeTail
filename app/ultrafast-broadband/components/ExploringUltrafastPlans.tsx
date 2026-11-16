"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Server, Search, ChevronRight } from "lucide-react";

const PLANS_CONTENT = {
  eyebrow: "PLANS",
  title: "Exploring ultrafast plans",
  subtitle: "We only show ultrafast plans and prices once they're confirmed.",
  leftCard: {
    heading: "See our current broadband options",
    description:
      "Ultrafast plan listings aren't live on this page yet. Our broadband page has current information, or our team can talk you through options.",
    primaryCta: {
      label: "View broadband plans",
      href: "/broadband/plans",
    },
    secondaryCta: {
      label: "Ask our team",
      href: "/contact",
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

export default function ExploringUltrafastPlans() {
  const [postcode, setPostcode] = useState("");

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            {PLANS_CONTENT.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            {PLANS_CONTENT.title}
          </h2>
          <p className="mt-3.5 text-sm text-[#4B5563] sm:text-base">
            {PLANS_CONTENT.subtitle}
          </p>
        </div>

        {/* Two-Column Cards */}
        <div className="mx-auto mt-12 grid max-w-[1300px] grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left Dark Card */}
          <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#0F0E3B] via-[#18135A] to-[#27187E] p-7 text-white shadow-[0_12px_30px_rgba(17,24,60,0.08)] sm:p-9">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#F4297B] to-[#8A3FFC] text-white shadow-md">
                <Server className="h-5 w-5" strokeWidth={2} />
              </div>

              <h3 className="mt-6 text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                {PLANS_CONTENT.leftCard.heading}
              </h3>

              <p className="mt-3.5 text-sm leading-relaxed text-[#D1D5EB] sm:text-[15px]">
                {PLANS_CONTENT.leftCard.description}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href={PLANS_CONTENT.leftCard.primaryCta.href}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(225,29,116,0.4)] transition-transform hover:scale-[1.01] hover:from-[#D01769] hover:to-[#C11260]"
              >
                <span>{PLANS_CONTENT.leftCard.primaryCta.label}</span>
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>

              <Link
                href={PLANS_CONTENT.leftCard.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-white/40 hover:bg-white/10"
              >
                {PLANS_CONTENT.leftCard.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Right Light Availability Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#ECEEF6] bg-white p-7 shadow-[0_12px_30px_rgba(17,24,60,0.06)] sm:p-9">
            <div>
              {/* Card Header with Icon */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F4297B] to-[#8A3FFC] text-white shadow-md">
                  <Search className="h-5 w-5" strokeWidth={2.25} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight text-[#11183C] sm:text-xl">
                    {PLANS_CONTENT.rightCard.heading}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-[#B45309]">
                    {PLANS_CONTENT.rightCard.statusNote}
                  </p>
                </div>
              </div>

              {/* Postcode Field */}
              <div className="mt-6">
                <label
                  htmlFor="postcode-input"
                  className="block text-sm font-bold text-[#11183C]"
                >
                  {PLANS_CONTENT.rightCard.inputLabel}
                </label>
                <div className="mt-2 flex items-center gap-2.5">
                  <input
                    id="postcode-input"
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    placeholder={PLANS_CONTENT.rightCard.inputPlaceholder}
                    className="w-full min-w-0 flex-1 rounded-xl border border-[#E6E9F2] bg-[#F4F5F9] px-4 py-3 text-sm text-[#11183C] placeholder-[#94A3B8] focus:border-[#8A3FFC] focus:bg-white focus:outline-none"
                  />
                  <button
                    type="button"
                    disabled
                    className="shrink-0 cursor-not-allowed rounded-xl bg-[#E4E7F1] px-5 py-3 text-sm font-bold text-[#94A3B8]"
                  >
                    {PLANS_CONTENT.rightCard.checkButtonLabel}
                  </button>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#4B5563]">
                {PLANS_CONTENT.rightCard.helperText}
              </p>
            </div>

            <div className="mt-6">
              <Link
                href={PLANS_CONTENT.rightCard.cta.href}
                className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(225,29,116,0.32)] transition-transform hover:scale-[1.01] hover:from-[#D01769] hover:to-[#C11260]"
              >
                <span>{PLANS_CONTENT.rightCard.cta.label}</span>
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
