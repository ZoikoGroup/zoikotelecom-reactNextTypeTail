import React from "react";
import { Shield } from "lucide-react";

const AVAILABILITY_STATUSES = [
  {
    id: "available",
    badge: "Available",
    description:
      "Services can be offered at your property, with the products listed.",
    badgeBg: "bg-[#10B981]/20",
    badgeText: "text-[#6EE7B7]",
    dotColor: "bg-[#34D399]",
  },
  {
    id: "survey-needed",
    badge: "Survey needed",
    description:
      "The network may reach you, but site work or access needs checking.",
    badgeBg: "bg-[#F59E0B]/20",
    badgeText: "text-[#FCD34D]",
    dotColor: "bg-[#FBBF24]",
  },
  {
    id: "not-confirmed",
    badge: "Not confirmed",
    description:
      "We couldn't confirm your property yet. It doesn't mean there's no service.",
    badgeBg: "bg-[#3B82F6]/20",
    badgeText: "text-[#93C5FD]",
    dotColor: "bg-[#60A5FA]",
  },
  {
    id: "address-not-listed",
    badge: "Address not listed",
    description: "New builds or unusual addresses can be checked by our team.",
    badgeBg: "bg-[#EC4899]/20",
    badgeText: "text-[#F9A8D4]",
    dotColor: "bg-[#F472B6]",
  },
  {
    id: "not-available",
    badge: "Not available",
    description:
      "Shown only when there's clear, dated evidence for your property.",
    badgeBg: "bg-white/15",
    badgeText: "text-white",
    dotColor: "bg-white",
  },
] as const;

export default function WhatAnAvailabilityAnswerCanLookLike() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#060C36] via-[#081040] to-[#2A1A6E] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#D1D5EB]">
            WHEN ONLINE CHECKS LAUNCH
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            What an availability answer can look like
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#D1D5EB] sm:text-base">
            Our online checker isn&apos;t live yet. When it is, every result
            will show its source and when it was checked.
          </p>
        </div>

        {/* Five-Column Status Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {AVAILABILITY_STATUSES.map((status) => (
            <div
              key={status.id}
              className="flex flex-col justify-between rounded-2xl border border-white/15 bg-white/[0.05] p-6 backdrop-blur-sm"
            >
              <div>
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold ${status.badgeBg} ${status.badgeText}`}
                >
                  <span className={`h-2 w-2 rounded-full ${status.dotColor}`} />
                  {status.badge}
                </span>

                <p className="mt-4 text-sm leading-relaxed text-[#E2E8F0]">
                  {status.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mx-auto mt-10 max-w-7xl rounded-2xl bg-[#F5F6FB] p-5 text-[#11183C] shadow-lg sm:p-6">
          <div className="flex items-start gap-3.5 sm:items-center">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E6E9F2] text-[#11183C]">
              <Shield className="h-4 w-4" strokeWidth={2.25} />
            </div>
            <p className="text-sm font-medium leading-relaxed text-[#1E293B]">
              We&apos;ll never show a green tick we can&apos;t back up. Until
              the checker launches, our team gives you a verified answer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
