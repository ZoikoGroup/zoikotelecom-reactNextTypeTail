"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronDown, Lock, Check } from "lucide-react";

const ASSURANCE_CARDS = [
  {
    id: "building-data-privacy",
    badge: "Privacy",
    badgeStyle: "bg-[#FEF3C7] text-[#B45309]",
    title: "Building data & privacy",
    description:
      "Access, occupancy and CCTV data may identify people. Each needs a clear purpose, a lawful basis and usually a DPIA. We never collect CCTV footage or occupant details.",
    dependsLabel: "Depends on:",
    dependsText: "UK GDPR and ICO guidance.",
    ctaText: "Discuss privacy needs",
    href: "#",
    image: "/Images/sites/16.png",
    imageAlt: "Smart door lock controlled with a smartphone",
  },
  {
    id: "procurement-assurance",
    badge: "Procurement",
    badgeStyle: "bg-[#E0E7FF] text-[#4338CA]",
    title: "Procurement assurance",
    description:
      "Ask for the approved service scope and contract documents. No certifications or service levels are assumed on this page.",
    dependsLabel: "Depends on:",
    dependsText: "the approved service and contract.",
    ctaText: "Request scope details",
    href: "#",
    image: "/Images/sites/17.png",
    imageAlt: "Colleagues high-fiving over a laptop at a desk",
  },
  {
    id: "adding-sites-expanding",
    badge: "Existing customers",
    badgeStyle: "bg-[#DCFCE7] text-[#15803D]",
    title: "Adding sites or expanding?",
    description:
      "Existing business customers can discuss more sites. We'll verify who you are before talking about contract details.",
    dependsLabel: "Depends on:",
    dependsText: "verification of your account.",
    ctaText: "Contact our business team",
    href: "#",
    image: "/Images/sites/18.png",
    imageAlt: "Modern office meeting room with large windows",
  },
] as const;

const WHY_WE_ASK_STEPS = [
  "Your site type and project stage",
  "How many sites, and roughly where",
  "What needs connecting",
  "Whether anything is safety-related",
] as const;

const BUSINESS_TYPES = [
  "Limited company",
  "Sole trader",
  "Partnership",
  "Public sector / Non-profit",
  "Other",
] as const;

const PREFERRED_CONTACTS = ["Email", "Phone", "Either"] as const;

const SITE_TYPES = [
  "Office",
  "Warehouse",
  "Campus",
  "Retail & mixed-use",
  "Industrial site",
  "Public building",
  "Unsure",
] as const;

const PROJECT_STAGES = [
  "New-build / Planning",
  "Retrofit",
  "Expanding existing estate",
  "Relocating",
  "Unsure",
] as const;

export default function SiteAssuranceAndEnquirySection() {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Step 1 state
  const [businessName, setBusinessName] = useState("");
  const [contactName, setContactName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState<string>("Limited company");
  const [preferredContact, setPreferredContact] = useState<string>("Email");

  // Step 2 state
  const [siteType, setSiteType] = useState<string>("Office");
  const [projectStage, setProjectStage] = useState<string>(
    "New-build / Planning",
  );
  const [siteCount, setSiteCount] = useState("");
  const [siteLocations, setSiteLocations] = useState("");

  // Step 3 state
  const [whatNeedsConnecting, setWhatNeedsConnecting] = useState("");
  const [safetyRelated, setSafetyRelated] = useState<"no" | "yes" | "unsure">(
    "no",
  );
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
    <div className="w-full">
      {/* Top 3-Card Assurance Block */}
      <section className="w-full bg-[#F6F8FC] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7">
            {ASSURANCE_CARDS.map((card) => (
              <div
                key={card.id}
                className="flex flex-col overflow-hidden rounded-[20px] border border-[#EDF1F7] bg-[#FFFFFF] shadow-[0_14px_34px_-10px_rgba(11,27,72,0.08)]"
              >
                {/* Top Image */}
                <div className="h-[175px] w-full overflow-hidden bg-[#E2E8F0] sm:h-[185px]">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold leading-4 ${card.badgeStyle}`}
                    >
                      {card.badge}
                    </span>

                    <h3 className="mt-3 text-[17px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0B1B48]">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-[12.5px] font-normal leading-[1.55] text-[#4A5568]">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-dashed border-[#E2E8F0] pt-3.5">
                    <p className="text-[11.5px] leading-[1.45] text-[#64748B]">
                      <span className="font-bold text-[#1E293B]">
                        {card.dependsLabel}
                      </span>{" "}
                      <span>{card.dependsText}</span>
                    </p>

                    <a
                      href={card.href}
                      className="mt-3 inline-flex items-center gap-1 text-[12px] font-bold text-[#E11D48] transition-colors hover:text-[#BE123C]"
                    >
                      <span>{card.ctaText}</span>
                      <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Multi-Step Site Enquiry Section */}
      <section className="w-full bg-[#FFFFFF] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
          {/* Heading Block */}
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#DB2777]">
              REQUEST INFORMATION
            </p>

            <h2 className="mt-2 text-[30px] font-bold leading-[1.18] tracking-[-0.02em] text-[#0B1B48] sm:text-[36px]">
              Tell us about your site
            </h2>

            <p className="mt-2.5 text-[13.5px] font-normal leading-[1.6] text-[#4A5568] sm:text-[14px]">
              A short enquiry — &ldquo;unsure&rdquo; is a fine answer. Please
              don&apos;t send access codes, camera feeds,
              <br className="hidden sm:inline" /> occupant names or security
              plans.
            </p>
          </div>

          {/* 2-Column Layout */}
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
                <div className="rounded-[20px] border border-[#EDF1F7] bg-[#FFFFFF] p-6 shadow-[0_14px_34px_-12px_rgba(11,27,72,0.06)] sm:p-7">
                  {submitted ? (
                    <div className="py-6 text-left">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FCE7F3] text-[#DB2777]">
                        <Check className="h-5 w-5" strokeWidth={2.5} />
                      </div>
                      <h3 className="mt-4 text-[18px] font-bold text-[#0B1B48]">
                        Site enquiry details ready for review
                      </h3>
                      <p className="mt-2 text-[13.5px] leading-[1.6] text-[#4A5568]">
                        Thank you{contactName ? `, ${contactName}` : ""}. Your
                        site details for{" "}
                        <span className="font-semibold text-[#0B1B48]">
                          {businessName || "your organisation"}
                        </span>{" "}
                        have been recorded in this preview state.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setStep(1);
                        }}
                        className="mt-5 inline-flex items-center justify-center rounded-[10px] border border-[#E2E8F0] px-4 py-2 text-[12.5px] font-semibold text-[#0B1B48] transition-colors hover:bg-[#F8FAFC]"
                      >
                        Start another site enquiry
                      </button>
                    </div>
                  ) : step === 1 ? (
                    <div>
                      <p className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#DB2777]">
                        STEP 1 OF 3 &middot; YOUR CONTACT DETAILS
                      </p>

                      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="site-business-name"
                            className="block text-[12.5px] font-bold text-[#0B1B48]"
                          >
                            Business name{" "}
                            <span className="text-[#E11D48]">*</span>
                          </label>
                          <input
                            id="site-business-name"
                            type="text"
                            required
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                            className="mt-2 h-[42px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#FFFFFF] px-3.5 text-[13px] text-[#0B1B48] outline-none transition-colors focus:border-[#DB2777]"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="site-contact-name"
                            className="block text-[12.5px] font-bold text-[#0B1B48]"
                          >
                            Contact name{" "}
                            <span className="text-[#E11D48]">*</span>
                          </label>
                          <input
                            id="site-contact-name"
                            type="text"
                            required
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            className="mt-2 h-[42px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#FFFFFF] px-3.5 text-[13px] text-[#0B1B48] outline-none transition-colors focus:border-[#DB2777]"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="site-work-email"
                            className="block text-[12.5px] font-bold text-[#0B1B48]"
                          >
                            Work email <span className="text-[#E11D48]">*</span>
                          </label>
                          <input
                            id="site-work-email"
                            type="email"
                            required
                            value={workEmail}
                            onChange={(e) => setWorkEmail(e.target.value)}
                            className="mt-2 h-[42px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#FFFFFF] px-3.5 text-[13px] text-[#0B1B48] outline-none transition-colors focus:border-[#DB2777]"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="site-phone"
                            className="block text-[12.5px] font-bold text-[#0B1B48]"
                          >
                            Phone{" "}
                            <span className="text-[11px] font-normal text-[#64748B]">
                              (optional)
                            </span>
                          </label>
                          <input
                            id="site-phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="mt-2 h-[42px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#FFFFFF] px-3.5 text-[13px] text-[#0B1B48] outline-none transition-colors focus:border-[#DB2777]"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="site-business-type"
                            className="block text-[12.5px] font-bold text-[#0B1B48]"
                          >
                            Business type
                          </label>
                          <div className="relative mt-2">
                            <select
                              id="site-business-type"
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

                        <div>
                          <label
                            htmlFor="site-preferred-contact"
                            className="block text-[12.5px] font-bold text-[#0B1B48]"
                          >
                            Preferred contact
                          </label>
                          <div className="relative mt-2">
                            <select
                              id="site-preferred-contact"
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
                        STEP 2 OF 3 &middot; SITES &amp; LIFECYCLE STAGE
                      </p>

                      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="site-type"
                            className="block text-[12.5px] font-bold text-[#0B1B48]"
                          >
                            Site type
                          </label>
                          <div className="relative mt-2">
                            <select
                              id="site-type"
                              value={siteType}
                              onChange={(e) => setSiteType(e.target.value)}
                              className="h-[42px] w-full appearance-none rounded-[10px] border border-[#E2E8F0] bg-[#FFFFFF] pl-3.5 pr-9 text-[13px] text-[#334155] outline-none transition-colors focus:border-[#DB2777]"
                            >
                              {SITE_TYPES.map((type) => (
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

                        <div>
                          <label
                            htmlFor="site-project-stage"
                            className="block text-[12.5px] font-bold text-[#0B1B48]"
                          >
                            Site lifecycle stage
                          </label>
                          <div className="relative mt-2">
                            <select
                              id="site-project-stage"
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

                        <div>
                          <label
                            htmlFor="site-count"
                            className="block text-[12.5px] font-bold text-[#0B1B48]"
                          >
                            How many sites
                          </label>
                          <input
                            id="site-count"
                            type="text"
                            placeholder="e.g. 1 building, 12 sites or unsure"
                            value={siteCount}
                            onChange={(e) => setSiteCount(e.target.value)}
                            className="mt-2 h-[42px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#FFFFFF] px-3.5 text-[13px] text-[#0B1B48] placeholder:text-[#94A3B8] outline-none transition-colors focus:border-[#DB2777]"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="site-locations"
                            className="block text-[12.5px] font-bold text-[#0B1B48]"
                          >
                            Rough locations
                          </label>
                          <input
                            id="site-locations"
                            type="text"
                            placeholder="e.g. UK regions, specific cities or unsure"
                            value={siteLocations}
                            onChange={(e) => setSiteLocations(e.target.value)}
                            className="mt-2 h-[42px] w-full rounded-[10px] border border-[#E2E8F0] bg-[#FFFFFF] px-3.5 text-[13px] text-[#0B1B48] placeholder:text-[#94A3B8] outline-none transition-colors focus:border-[#DB2777]"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-5">
                      <p className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#DB2777]">
                        STEP 3 OF 3 &middot; CONNECTIVITY &amp; SAFETY SCOPE
                      </p>

                      <div>
                        <label
                          htmlFor="what-needs-connecting"
                          className="block text-[12.5px] font-bold text-[#0B1B48]"
                        >
                          What needs connecting?
                        </label>
                        <textarea
                          id="what-needs-connecting"
                          rows={3}
                          placeholder="e.g. Meters, environment sensors, gateways, indoor/plant room coverage or unsure..."
                          value={whatNeedsConnecting}
                          onChange={(e) =>
                            setWhatNeedsConnecting(e.target.value)
                          }
                          className="mt-2 w-full rounded-[10px] border border-[#E2E8F0] bg-[#FFFFFF] p-3.5 text-[13px] text-[#0B1B48] placeholder:text-[#94A3B8] outline-none transition-colors focus:border-[#DB2777]"
                        />
                      </div>

                      <div>
                        <span className="block text-[12.5px] font-bold text-[#0B1B48]">
                          Is anything safety-related?
                        </span>
                        <div className="mt-2.5 flex flex-wrap gap-3">
                          {(
                            [
                              { value: "no", label: "No" },
                              {
                                value: "yes",
                                label:
                                  "Yes (fire, lift, alarm or emergency access)",
                              },
                              { value: "unsure", label: "Unsure" },
                            ] as const
                          ).map((opt) => (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => setSafetyRelated(opt.value)}
                              className={`rounded-[9px] border px-3.5 py-2 text-[12px] font-semibold transition-colors ${
                                safetyRelated === opt.value
                                  ? "border-[#DB2777] bg-[#FDF2F8] text-[#DB2777]"
                                  : "border-[#E2E8F0] bg-[#FFFFFF] text-[#334155] hover:bg-[#F8FAFC]"
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
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
                <div
                  aria-hidden="true"
                  className="absolute bottom-3 left-[6px] top-3 w-[1.5px] bg-[#EC4899]/35"
                />

                <ul className="space-y-4">
                  {WHY_WE_ASK_STEPS.map((item) => (
                    <li
                      key={item}
                      className="relative flex items-start gap-3.5"
                    >
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
    </div>
  );
}
