"use client";

import React from "react";
import { Clock } from "lucide-react";

interface SecurityRequestStep {
  readonly id: string;
  readonly stepLabel: string;
  readonly title: string;
  readonly description: string;
}

const SECURITY_REQUEST_STEPS = [
  {
    id: "step-1",
    stepLabel: "STEP 1",
    title: "Tell us who you are",
    description:
      "Prospect or existing customer, your role and the services involved.",
  },
  {
    id: "step-2",
    stepLabel: "STEP 2",
    title: "Choose the subject",
    description:
      "Privacy, service safeguards, supplier responsibilities or contract terms.",
  },
  {
    id: "step-3",
    stepLabel: "STEP 3",
    title: "We review access",
    description:
      "Public information is shared openly; restricted documents may need verification.",
  },
  {
    id: "step-4",
    stepLabel: "STEP 4",
    title: "We reply",
    description:
      "A link, a secure response, or a clear explanation if we can't provide it.",
  },
] as const satisfies readonly SecurityRequestStep[];

export default function RequestingSecurityInfoSection() {
  return (
    <section
      aria-labelledby="requesting-security-info-heading"
      className="w-full bg-white py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Centered Header */}
        <div className="text-center max-w-[720px] mx-auto mb-11 sm:mb-12">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#565B75] mb-2.5">
            FOR BUYERS &amp; PROCUREMENT
          </p>
          <h2
            id="requesting-security-info-heading"
            className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B] mb-2.5"
          >
            Requesting security information
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] leading-[1.55] text-[#5B6078] font-normal">
            How a due-diligence or questionnaire request works.
          </p>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          {SECURITY_REQUEST_STEPS.map((step) => (
            <div
              key={step.id}
              className="rounded-[16px] bg-white border border-[#ECEEF6] p-5 shadow-[0_8px_24px_rgba(15,23,66,0.04)] flex flex-col"
            >
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#E61E88] mb-2">
                {step.stepLabel}
              </span>
              <h3 className="text-[14.5px] font-bold leading-[1.3] tracking-[-0.01em] text-[#070B2B] mb-1.5">
                {step.title}
              </h3>
              <p className="text-[12px] leading-[1.5] text-[#5B6078] font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Notice Banner */}
        <div className="rounded-[12px] bg-[#EEF1FB] border border-[#E1E6F7] px-4 sm:px-5 py-3.5 flex items-start sm:items-center gap-3">
          <Clock
            className="h-4 w-4 shrink-0 text-[#4F46E5] mt-0.5 sm:mt-0"
            strokeWidth={2.2}
          />
          <p className="text-[12px] leading-[1.5] text-[#4B5068]">
            Security questionnaires are reviewed by our team &mdash; they
            aren&rsquo;t returned automatically, and we don&rsquo;t promise a
            fixed turnaround.
          </p>
        </div>
      </div>
    </section>
  );
}
