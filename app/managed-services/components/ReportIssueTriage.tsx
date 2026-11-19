"use client";

import React, { useState } from "react";
import { ChevronRight, Lock } from "lucide-react";

type AffectedService = "Mobile" | "Broadband" | "Voice" | "Several services";

type BusinessImpact =
  | "Minor — a workaround exists"
  | "Some users or one site affected"
  | "Business stopped";

type ContactPreference = "Email" | "Phone" | "Either";

const SERVICE_OPTIONS = [
  "Mobile",
  "Broadband",
  "Voice",
  "Several services",
] as const satisfies readonly AffectedService[];

const IMPACT_OPTIONS = [
  "Minor — a workaround exists",
  "Some users or one site affected",
  "Business stopped",
] as const satisfies readonly BusinessImpact[];

const CONTACT_OPTIONS = [
  "Email",
  "Phone",
  "Either",
] as const satisfies readonly ContactPreference[];

const SERVICE_DETAIL_MAP: Record<AffectedService, string> = {
  Mobile: "Mobile — and the site or number involved",
  Broadband: "Broadband — and the site or circuit involved",
  Voice: "Voice — and the number or line involved",
  "Several services": "Several services — and the sites or lines involved",
} as const;

export default function ReportIssueTriage() {
  const [selectedService, setSelectedService] =
    useState<AffectedService>("Mobile");
  const [selectedImpact, setSelectedImpact] = useState<BusinessImpact>(
    "Minor — a workaround exists",
  );
  const [selectedContact, setSelectedContact] =
    useState<ContactPreference>("Email");

  return (
    <section
      aria-labelledby="report-issue-heading"
      className="w-full bg-[#FFFFFF] py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[660px] mx-auto mb-11 sm:mb-12">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#565B75] mb-2.5">
            REPORT AN ISSUE
          </p>
          <h2
            id="report-issue-heading"
            className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B] mb-3"
          >
            Something not working? Here&rsquo;s what to tell us
          </h2>
          <p className="text-[14px] sm:text-[15px] leading-[1.58] text-[#5B6078] font-normal">
            Choose the affected service and impact. We&rsquo;ll show what helps
            us triage — nothing is sent from this tool.
          </p>
        </div>

        {/* Main Triage Container */}
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Selector Card */}
          <div className="lg:col-span-7 rounded-[18px] bg-[#EFEFF2] p-6 sm:p-8 flex flex-col justify-center">
            {/* Question 1 */}
            <fieldset className="mb-7">
              <legend className="text-[14px] font-bold text-[#0B0F30] mb-3.5">
                Which service is affected?
              </legend>
              <div className="flex flex-wrap gap-2.5">
                {SERVICE_OPTIONS.map((option) => {
                  const isSelected = selectedService === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedService(option)}
                      aria-pressed={isSelected}
                      className={`inline-flex items-center gap-2 rounded-[9px] bg-white px-4 py-2.5 text-[12.5px] font-semibold transition cursor-pointer ${
                        isSelected
                          ? "text-[#D91B85] border-[1.5px] border-[#E61E88] shadow-[0_2px_8px_rgba(230,30,136,0.12)]"
                          : "text-[#1F2937] border border-[#E2E4EC] hover:border-[#C8CDD9]"
                      }`}
                    >
                      <span
                        className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border ${
                          isSelected ? "border-[#E61E88]" : "border-[#9CA3AF]"
                        }`}
                      >
                        {isSelected && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#E61E88]" />
                        )}
                      </span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Question 2 */}
            <fieldset className="mb-7">
              <legend className="text-[14px] font-bold text-[#0B0F30] mb-3.5">
                What&rsquo;s the business impact?
              </legend>
              <div className="flex flex-wrap gap-2.5">
                {IMPACT_OPTIONS.map((option) => {
                  const isSelected = selectedImpact === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedImpact(option)}
                      aria-pressed={isSelected}
                      className={`inline-flex items-center gap-2 rounded-[9px] bg-white px-4 py-2.5 text-[12.5px] font-semibold transition cursor-pointer ${
                        isSelected
                          ? "text-[#D91B85] border-[1.5px] border-[#E61E88] shadow-[0_2px_8px_rgba(230,30,136,0.12)]"
                          : "text-[#1F2937] border border-[#E2E4EC] hover:border-[#C8CDD9]"
                      }`}
                    >
                      <span
                        className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border ${
                          isSelected ? "border-[#E61E88]" : "border-[#9CA3AF]"
                        }`}
                      >
                        {isSelected && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#E61E88]" />
                        )}
                      </span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Question 3 */}
            <fieldset>
              <legend className="text-[14px] font-bold text-[#0B0F30] mb-3.5">
                How should we contact you?
              </legend>
              <div className="flex flex-wrap gap-2.5">
                {CONTACT_OPTIONS.map((option) => {
                  const isSelected = selectedContact === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedContact(option)}
                      aria-pressed={isSelected}
                      className={`inline-flex items-center gap-2 rounded-[9px] bg-white px-4 py-2.5 text-[12.5px] font-semibold transition cursor-pointer ${
                        isSelected
                          ? "text-[#D91B85] border-[1.5px] border-[#E61E88] shadow-[0_2px_8px_rgba(230,30,136,0.12)]"
                          : "text-[#1F2937] border border-[#E2E4EC] hover:border-[#C8CDD9]"
                      }`}
                    >
                      <span
                        className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border ${
                          isSelected ? "border-[#E61E88]" : "border-[#9CA3AF]"
                        }`}
                      >
                        {isSelected && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#E61E88]" />
                        )}
                      </span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>
          </div>

          {/* Right Dark Checklist Card */}
          <div className="lg:col-span-5 rounded-[20px] bg-gradient-to-br from-[#070B34] via-[#120A4D] to-[#260966] p-6 sm:p-8 text-white shadow-[0_20px_45px_rgba(12,11,56,0.25)] flex flex-col justify-between">
            <div>
              <p className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#E6499E] mb-2">
                BEFORE YOU CONTACT US
              </p>
              <h3 className="text-[22px] font-bold leading-[1.25] tracking-[-0.015em] text-white mb-6">
                Have this ready
              </h3>

              {/* Vertical Timeline Checklist */}
              <div className="relative space-y-4 mb-6">
                <div
                  aria-hidden="true"
                  className="absolute left-[6.5px] top-2 bottom-2 w-[1.5px] bg-white/15"
                />

                {/* Step 1 */}
                <div className="relative flex items-start gap-3.5 text-[12px] leading-[1.45]">
                  <span className="relative z-10 mt-1 h-3.5 w-3.5 shrink-0 rounded-full bg-[#E6288E]/30 flex items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-[#F43F9E]" />
                  </span>
                  <p className="text-[#D4D7EC]">
                    <strong className="font-bold text-white">
                      Affected service:
                    </strong>{" "}
                    {SERVICE_DETAIL_MAP[selectedService]}
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-start gap-3.5 text-[12px] leading-[1.45]">
                  <span className="relative z-10 mt-1 h-3.5 w-3.5 shrink-0 rounded-full bg-[#E6288E]/30 flex items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-[#F43F9E]" />
                  </span>
                  <p className="text-[#D4D7EC]">
                    <strong className="font-bold text-white">
                      When it started
                    </strong>{" "}
                    and whether it&rsquo;s constant or on and off
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-start gap-3.5 text-[12px] leading-[1.45]">
                  <span className="relative z-10 mt-1 h-3.5 w-3.5 shrink-0 rounded-full bg-[#E6288E]/30 flex items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-[#F43F9E]" />
                  </span>
                  <p className="text-[#D4D7EC]">
                    <strong className="font-bold text-white">
                      Which lines
                    </strong>{" "}
                    are affected (not staff personal details)
                  </p>
                </div>

                {/* Step 4 */}
                <div className="relative flex items-start gap-3.5 text-[12px] leading-[1.45]">
                  <span className="relative z-10 mt-1 h-3.5 w-3.5 shrink-0 rounded-full bg-[#E6288E]/30 flex items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-[#F43F9E]" />
                  </span>
                  <p className="text-[#D4D7EC]">
                    <strong className="font-bold text-white">
                      Any workaround
                    </strong>{" "}
                    you&rsquo;re using for now
                  </p>
                </div>

                {/* Step 5 */}
                <div className="relative flex items-start gap-3.5 text-[12px] leading-[1.45]">
                  <span className="relative z-10 mt-1 h-3.5 w-3.5 shrink-0 rounded-full bg-[#E6288E]/30 flex items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-[#F43F9E]" />
                  </span>
                  <p className="text-[#D4D7EC]">
                    <strong className="font-bold text-white">
                      Contact preference:
                    </strong>{" "}
                    {selectedContact}
                  </p>
                </div>
              </div>

              {/* Security Warning Box */}
              <div className="rounded-[12px] bg-white/[0.08] border border-white/10 px-4 py-3 mb-5 flex items-start gap-3">
                <Lock
                  className="h-4 w-4 shrink-0 text-[#FBBF24] mt-0.5"
                  strokeWidth={2}
                />
                <p className="text-[11.5px] leading-[1.45] text-[#D7DAF0]">
                  Don&rsquo;t share passwords, network credentials, employee
                  records or confidential logs.
                </p>
              </div>
            </div>

            {/* Primary CTA */}
            <a
              href="#"
              className="w-full inline-flex items-center justify-center gap-1.5 rounded-[10px] bg-gradient-to-r from-[#DF1A86] to-[#EB2690] px-5 py-3.5 text-[13.5px] font-bold text-white shadow-[0_10px_24px_rgba(230,26,134,0.45)] hover:brightness-105 transition"
            >
              <span>Contact support</span>
              <ChevronRight className="h-4 w-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
