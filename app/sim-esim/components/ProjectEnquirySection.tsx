"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight, Lock, Check } from "lucide-react";

const WHY_WE_ASK_STEPS = [
  "Your device type and rough number of units",
  "Where the devices will operate",
  "Your project stage",
  "What you need the connectivity to do",
] as const;

const BUSINESS_TYPES = [
  "Limited company",
  "Sole trader",
  "Partnership",
  "Public sector / Non-profit",
  "Other",
] as const;

const PREFERRED_CONTACTS = ["Email", "Phone", "Either"] as const;

const PROJECT_STAGES = [
  "Exploring / Early idea",
  "Prototype / Proof of concept",
  "Pilot deployment",
  "Scaling / Commercial rollout",
] as const;

export default function ProjectEnquirySection() {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Step 1 state
  const [businessName, setBusinessName] = useState("");
  const [contactName, setContactName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState<string>("Limited company");
  const [preferredContact, setPreferredContact] = useState<string>("Email");

  // Step 2 state
  const [deviceType, setDeviceType] = useState("");
  const [unitCount, setUnitCount] = useState("");
  const [operatingRegions, setOperatingRegions] = useState("");
  const [projectStage, setProjectStage] = useState<string>(
    "Exploring / Early idea",
  );

  // Step 3 state
  const [connectivityNeeds, setConnectivityNeeds] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const progressPercent = step === 1 ? 33.33 : step === 2 ? 66.66 : 100;

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep((prev) => (prev + 1) as 1 | 2 | 3);
    } else {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (submitted) {
      setSubmitted(false);
      return;
    }
    if (step > 1) {
      setStep((prev) => (prev - 1) as 1 | 2 | 3);
    }
  };

  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Top Heading Block */}
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#DB2777]">
            REQUEST INFORMATION
          </p>
          <h2 className="mt-2 text-[30px] font-bold leading-[1.18] tracking-[-0.02em] text-[#0B1B48] sm:text-[36px]">
            Tell us about your IoT project
          </h2>
          <p className="mt-2.5 text-[13.5px] font-normal leading-[1.6] text-[#4A5568] sm:text-[14px]">
            A short enquiry — &ldquo;not sure yet&rdquo; is fine. Please
            don&apos;t include device identifiers (EID, IMEI,
            <br className="hidden sm:inline" /> ICCID), credentials or personal
            data.
          </p>
        </div>

        {/* Main 2-Column Layout */}
        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_365px] lg:gap-10">
          {/* Left Form Column */}
          <div>
            {/* Progress Bar */}
            <div className="h-[3.5px] w-full overflow-hidden rounded-full bg-[#EDE9FE]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#DB2777] via-[#A21CAF] to-[#7C3AED] transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <form onSubmit={handleContinue} className="mt-6">
              {/* Form Card Container */}
              <div className="rounded-[20px] border border-[#EDF1F7] bg-[#FFFFFF] p-6 shadow-[0_14px_34px_-12px_rgba(11,27,72,0.06)] sm:p-7">
                {submitted ? (
                  <div className="py-6 text-left">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FCE7F3] text-[#DB2777]">
                      <Check className="h-5 w-5" strokeWidth={2.5} />
                    </div>
                    <h3 className="mt-4 text-[18px] font-bold text-[#0B1B48]">
                      Enquiry details ready for review
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.6] text-[#4A5568]">
                      Thank you{contactName ? `, ${contactName}` : ""}. Your
                      project summary for{" "}
                      <span className="font-semibold text-[#0B1B48]">
                        {businessName || "your organisation"}
                      </span>{" "}
                      has been recorded in this preview state.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setStep(1);
                      }}
                      className="mt-5 inline-flex items-center justify-center rounded-[10px] border border-[#E2E8F0] px-4 py-2 text-[12.5px] font-semibold text-[#0B1B48] transition-colors hover:bg-[#F8FAFC]"
                    >
                      Start another enquiry
                    </button>
                  </div>
                ) : step === 1 ? (
                  <div>
                    <p className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#DB2777]">
                      STEP 1 OF 3 &middot; YOUR CONTACT DETAILS
                    </p>

                    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                      {/* Business name */}
                      <div>
                        <label
                          htmlFor="business-name"
                          className="block text-[12.5px] font-bold text-[#0B1B48]"
                        >
                          Business name{" "}
                          <span className="text-[#E11D48]">*</span>
                        </label>
                        <input
                          id="business-name"
                          type="text"
                          required
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          className="mt-2 h-[42px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#FFFFFF] px-3.5 text-[13px] text-[#0B1B48] outline-none transition-colors focus:border-[#DB2777]"
                        />
                      </div>

                      {/* Contact name */}
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-[12.5px] font-bold text-[#0B1B48]"
                        >
                          Contact name <span className="text-[#E11D48]">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          className="mt-2 h-[42px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#FFFFFF] px-3.5 text-[13px] text-[#0B1B48] outline-none transition-colors focus:border-[#DB2777]"
                        />
                      </div>

                      {/* Work email */}
                      <div>
                        <label
                          htmlFor="work-email"
                          className="block text-[12.5px] font-bold text-[#0B1B48]"
                        >
                          Work email <span className="text-[#E11D48]">*</span>
                        </label>
                        <input
                          id="work-email"
                          type="email"
                          required
                          value={workEmail}
                          onChange={(e) => setWorkEmail(e.target.value)}
                          className="mt-2 h-[42px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#FFFFFF] px-3.5 text-[13px] text-[#0B1B48] outline-none transition-colors focus:border-[#DB2777]"
                        />
                      </div>

                      {/* Phone (optional) */}
                      <div>
                        <label
                          htmlFor="phone-number"
                          className="block text-[12.5px] font-bold text-[#0B1B48]"
                        >
                          Phone{" "}
                          <span className="text-[11px] font-normal text-[#64748B]">
                            (optional)
                          </span>
                        </label>
                        <input
                          id="phone-number"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="mt-2 h-[42px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#FFFFFF] px-3.5 text-[13px] text-[#0B1B48] outline-none transition-colors focus:border-[#DB2777]"
                        />
                      </div>

                      {/* Business type */}
                      <div>
                        <label
                          htmlFor="business-type"
                          className="block text-[12.5px] font-bold text-[#0B1B48]"
                        >
                          Business type
                        </label>
                        <div className="relative mt-2">
                          <select
                            id="business-type"
                            value={businessType}
                            onChange={(e) => setBusinessType(e.target.value)}
                            className="h-[42px] w-full appearance-none rounded-[10px] border border-[#E2E8F0] bg-[#FFFFFF] pl-3.5 pr-9 text-[13px] text-[#334155] outline-none transition-colors focus:border-[#DB2777]"
                          >
                            {BUSINESS_TYPES.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748B]"
                            strokeWidth={2}
                          />
                        </div>
                      </div>

                      {/* Preferred contact */}
                      <div>
                        <label
                          htmlFor="preferred-contact"
                          className="block text-[12.5px] font-bold text-[#0B1B48]"
                        >
                          Preferred contact
                        </label>
                        <div className="relative mt-2">
                          <select
                            id="preferred-contact"
                            value={preferredContact}
                            onChange={(e) =>
                              setPreferredContact(e.target.value)
                            }
                            className="h-[42px] w-full appearance-none rounded-[10px] border border-[#E2E8F0] bg-[#FFFFFF] pl-3.5 pr-9 text-[13px] text-[#334155] outline-none transition-colors focus:border-[#DB2777]"
                          >
                            {PREFERRED_CONTACTS.map((method) => (
                              <option key={method} value={method}>
                                {method}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748B]"
                            strokeWidth={2}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : step === 2 ? (
                  <div>
                    <p className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#DB2777]">
                      STEP 2 OF 3 &middot; DEVICES &amp; DEPLOYMENT
                    </p>

                    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="device-type"
                          className="block text-[12.5px] font-bold text-[#0B1B48]"
                        >
                          Device type
                        </label>
                        <input
                          id="device-type"
                          type="text"
                          placeholder="e.g. Sensor, meter, tracker or not sure yet"
                          value={deviceType}
                          onChange={(e) => setDeviceType(e.target.value)}
                          className="mt-2 h-[42px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#FFFFFF] px-3.5 text-[13px] text-[#0B1B48] placeholder:text-[#94A3B8] outline-none transition-colors focus:border-[#DB2777]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="unit-count"
                          className="block text-[12.5px] font-bold text-[#0B1B48]"
                        >
                          Rough number of units
                        </label>
                        <input
                          id="unit-count"
                          type="text"
                          placeholder="e.g. 50, 500 or not sure yet"
                          value={unitCount}
                          onChange={(e) => setUnitCount(e.target.value)}
                          className="mt-2 h-[42px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#FFFFFF] px-3.5 text-[13px] text-[#0B1B48] placeholder:text-[#94A3B8] outline-none transition-colors focus:border-[#DB2777]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="operating-regions"
                          className="block text-[12.5px] font-bold text-[#0B1B48]"
                        >
                          Where devices will operate
                        </label>
                        <input
                          id="operating-regions"
                          type="text"
                          placeholder="e.g. UK, Europe or not sure yet"
                          value={operatingRegions}
                          onChange={(e) => setOperatingRegions(e.target.value)}
                          className="mt-2 h-[42px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#FFFFFF] px-3.5 text-[13px] text-[#0B1B48] placeholder:text-[#94A3B8] outline-none transition-colors focus:border-[#DB2777]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="project-stage"
                          className="block text-[12.5px] font-bold text-[#0B1B48]"
                        >
                          Project stage
                        </label>
                        <div className="relative mt-2">
                          <select
                            id="project-stage"
                            value={projectStage}
                            onChange={(e) => setProjectStage(e.target.value)}
                            className="h-[42px] w-full appearance-none rounded-[10px] border border-[#E2E8F0] bg-[#FFFFFF] pl-3.5 pr-9 text-[13px] text-[#334155] outline-none transition-colors focus:border-[#DB2777]"
                          >
                            {PROJECT_STAGES.map((stage) => (
                              <option key={stage} value={stage}>
                                {stage}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748B]"
                            strokeWidth={2}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#DB2777]">
                      STEP 3 OF 3 &middot; CONNECTIVITY GOALS
                    </p>

                    <div className="mt-5">
                      <label
                        htmlFor="connectivity-needs"
                        className="block text-[12.5px] font-bold text-[#0B1B48]"
                      >
                        What do you need the connectivity to do?
                      </label>
                      <textarea
                        id="connectivity-needs"
                        rows={4}
                        placeholder="Share any notes on data frequency, SIM/eSIM preferences, coverage or timelines (optional)..."
                        value={connectivityNeeds}
                        onChange={(e) => setConnectivityNeeds(e.target.value)}
                        className="mt-2 w-full rounded-[10px] border border-[#E2E8F0] bg-[#FFFFFF] p-3.5 text-[13px] text-[#0B1B48] placeholder:text-[#94A3B8] outline-none transition-colors focus:border-[#DB2777]"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons Row */}
              {!submitted && (
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={step === 1}
                    className="flex h-[46px] w-full items-center justify-center rounded-[10px] border border-[#E2E8F0] bg-[#FFFFFF] text-[13px] font-bold text-[#0B1B48] transition-colors hover:bg-[#F8FAFC] disabled:cursor-not-allowed disabled:opacity-65"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    className="flex h-[46px] w-full items-center justify-center gap-1 rounded-[10px] bg-gradient-to-r from-[#E11D48] via-[#DB2777] to-[#C026D3] text-[13px] font-bold text-[#FFFFFF] shadow-[0_8px_20px_-6px_rgba(219,39,119,0.5)] transition-opacity hover:opacity-95"
                  >
                    <span>{step < 3 ? "Continue" : "Submit enquiry"}</span>
                    <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Right Dark Navy Info Panel */}
          <aside className="rounded-[22px] bg-gradient-to-b from-[#0E0938] via-[#170E52] to-[#120A3E] p-6 text-[#FFFFFF] shadow-[0_20px_40px_-14px_rgba(14,9,56,0.35)] sm:p-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#F472B6]">
              WHY WE ASK
            </p>
            <h3 className="mt-1.5 text-[18px] font-bold leading-[1.3] text-[#FFFFFF]">
              What we&apos;ll ask
            </h3>

            {/* Vertical Timeline Checklist */}
            <div className="relative mt-5">
              {/* Vertical Connector Line */}
              <div
                aria-hidden="true"
                className="absolute bottom-3 left-[6px] top-3 w-[1.5px] bg-[#EC4899]/35"
              />

              <ul className="space-y-4">
                {WHY_WE_ASK_STEPS.map((item) => (
                  <li key={item} className="relative flex items-start gap-3.5">
                    <span className="relative z-10 mt-[3px] flex h-[13px] w-[13px] shrink-0 items-center justify-center rounded-full bg-[#F472B6]/25">
                      <span className="h-[7px] w-[7px] rounded-full bg-[#F472B6]" />
                    </span>
                    <span className="text-[12.5px] font-normal leading-[1.45] text-[#E2E8F0]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Privacy Notice Box */}
            <div className="mt-6 flex items-start gap-2.5 rounded-[12px] bg-white/[0.08] px-3.5 py-3 ring-1 ring-white/10">
              <Lock
                className="mt-[2px] h-3.5 w-3.5 shrink-0 text-[#F472B6]"
                strokeWidth={2.2}
              />
              <p className="text-[11px] font-normal leading-[1.5] text-[#CBD5E1]">
                We never ask for staff phone numbers, passwords or payment
                details in this form.
              </p>
            </div>

            {/* Direct Contact CTA */}
            <a
              href="#"
              className="mt-5 flex h-[44px] w-full items-center justify-center gap-1 rounded-[10px] bg-gradient-to-r from-[#E11D48] via-[#DB2777] to-[#C026D3] px-4 text-[12.5px] font-bold text-[#FFFFFF] shadow-[0_8px_20px_-6px_rgba(219,39,119,0.55)] transition-opacity hover:opacity-95"
            >
              <span>Or contact us directly</span>
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
