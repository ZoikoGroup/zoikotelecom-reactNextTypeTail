"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight, Lock } from "lucide-react";

type BusinessType = "Limited company" | "Sole trader" | "Partnership" | "LLP";

type PreferredContact = "Email" | "Phone";

const BUSINESS_TYPES = [
  "Limited company",
  "Sole trader",
  "Partnership",
  "LLP",
] as const satisfies readonly BusinessType[];

const PREFERRED_CONTACTS = [
  "Email",
  "Phone",
] as const satisfies readonly PreferredContact[];

const WHAT_WELL_ASK = [
  "Whether you're new or an existing customer",
  "Which services and how many sites",
  "Your main challenge today",
  "How you'd like us to contact you",
] as const;

export default function RequestInformationForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [businessName, setBusinessName] = useState<string>("");
  const [contactName, setContactName] = useState<string>("");
  const [workEmail, setWorkEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [businessType, setBusinessType] =
    useState<BusinessType>("Limited company");
  const [preferredContact, setPreferredContact] =
    useState<PreferredContact>("Email");

  const [customerStatus, setCustomerStatus] = useState<
    "New customer" | "Existing customer"
  >("New customer");
  const [servicesNeeded, setServicesNeeded] = useState<string>(
    "Business mobile, Broadband & fibre",
  );
  const [siteCount, setSiteCount] = useState<string>("1");
  const [mainChallenge, setMainChallenge] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleBack = () => {
    setSubmitted(false);
    if (step > 1) {
      setStep((prev) => (prev === 3 ? 2 : 1));
    }
  };

  const handleContinue = () => {
    if (step < 3) {
      setStep((prev) => (prev === 1 ? 2 : 3));
    } else {
      setSubmitted(true);
    }
  };

  const progressWidthClass =
    step === 1 ? "w-1/3" : step === 2 ? "w-2/3" : "w-full";

  return (
    <section
      aria-labelledby="request-info-heading"
      className="w-full bg-white py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-start">
          {/* Left Multi-Step Form Column */}
          <div className="lg:col-span-8">
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#E11D88] mb-2">
              REQUEST INFORMATION
            </p>

            <h2
              id="request-info-heading"
              className="text-[32px] sm:text-[38px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B] mb-3 max-w-[660px]"
            >
              Tell us which services and sites need coordinating
            </h2>

            <p className="text-[13.5px] sm:text-[14.5px] leading-[1.55] text-[#5B6078] max-w-[610px] mb-6">
              A short enquiry for new or existing business customers. Please
              don&rsquo;t include passwords, network credentials or confidential
              logs.
            </p>

            {/* Step Progress Bar */}
            <div className="w-full h-[3.5px] rounded-full bg-[#E5E7F0] overflow-hidden mb-5">
              <div
                className={`h-full rounded-full bg-gradient-to-r from-[#E61E88] to-[#9B27D6] transition-all duration-300 ${progressWidthClass}`}
              />
            </div>

            {/* Step Label */}
            <p className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-[#E11D88] mb-3">
              STEP {step} OF 3 &middot;{" "}
              {step === 1
                ? "YOUR CONTACT DETAILS"
                : step === 2
                  ? "SERVICES & SITES"
                  : "MAIN CHALLENGE & REVIEW"}
            </p>

            {/* Form Card */}
            <div className="rounded-[18px] bg-white border border-[#E7E9F2] p-5 sm:p-7 shadow-[0_12px_32px_rgba(15,23,66,0.04)] mb-4">
              {step === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {/* Business name */}
                  <div>
                    <label
                      htmlFor="mng-business-name"
                      className="block text-[12px] font-bold text-[#070B2B] mb-1.5"
                    >
                      Business name <span className="text-[#E11D88]">*</span>
                    </label>
                    <input
                      id="mng-business-name"
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full h-[40px] rounded-[7px] border border-[#D4D8E5] bg-white px-3.5 text-[13px] text-[#070B2B] placeholder-[#9CA3AF] focus:border-[#E11D88] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Contact name */}
                  <div>
                    <label
                      htmlFor="mng-contact-name"
                      className="block text-[12px] font-bold text-[#070B2B] mb-1.5"
                    >
                      Contact name <span className="text-[#E11D88]">*</span>
                    </label>
                    <input
                      id="mng-contact-name"
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full h-[40px] rounded-[7px] border border-[#D4D8E5] bg-white px-3.5 text-[13px] text-[#070B2B] placeholder-[#9CA3AF] focus:border-[#E11D88] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Work email */}
                  <div>
                    <label
                      htmlFor="mng-work-email"
                      className="block text-[12px] font-bold text-[#070B2B] mb-1.5"
                    >
                      Work email <span className="text-[#E11D88]">*</span>
                    </label>
                    <input
                      id="mng-work-email"
                      type="email"
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      className="w-full h-[40px] rounded-[7px] border border-[#D4D8E5] bg-white px-3.5 text-[13px] text-[#070B2B] placeholder-[#9CA3AF] focus:border-[#E11D88] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone (optional) */}
                  <div>
                    <label
                      htmlFor="mng-phone"
                      className="block text-[12px] font-bold text-[#070B2B] mb-1.5"
                    >
                      Phone{" "}
                      <span className="font-normal text-[#6B7280]">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="mng-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-[40px] rounded-[7px] border border-[#D4D8E5] bg-white px-3.5 text-[13px] text-[#070B2B] placeholder-[#9CA3AF] focus:border-[#E11D88] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Business type */}
                  <div>
                    <label
                      htmlFor="mng-business-type"
                      className="block text-[12px] font-bold text-[#070B2B] mb-1.5"
                    >
                      Business type
                    </label>
                    <div className="relative">
                      <select
                        id="mng-business-type"
                        value={businessType}
                        onChange={(e) =>
                          setBusinessType(e.target.value as BusinessType)
                        }
                        className="w-full h-[40px] appearance-none rounded-[7px] border border-[#D4D8E5] bg-white pl-3.5 pr-9 text-[13px] text-[#070B2B] focus:border-[#E11D88] focus:outline-none transition-colors"
                      >
                        {BUSINESS_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280]" />
                    </div>
                  </div>

                  {/* Preferred contact */}
                  <div>
                    <label
                      htmlFor="mng-preferred-contact"
                      className="block text-[12px] font-bold text-[#070B2B] mb-1.5"
                    >
                      Preferred contact
                    </label>
                    <div className="relative">
                      <select
                        id="mng-preferred-contact"
                        value={preferredContact}
                        onChange={(e) =>
                          setPreferredContact(
                            e.target.value as PreferredContact,
                          )
                        }
                        className="w-full h-[40px] appearance-none rounded-[7px] border border-[#D4D8E5] bg-white pl-3.5 pr-9 text-[13px] text-[#070B2B] focus:border-[#E11D88] focus:outline-none transition-colors"
                      >
                        {PREFERRED_CONTACTS.map((method) => (
                          <option key={method} value={method}>
                            {method}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280]" />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <label
                      htmlFor="mng-customer-status"
                      className="block text-[12px] font-bold text-[#070B2B] mb-1.5"
                    >
                      Customer status
                    </label>
                    <div className="relative">
                      <select
                        id="mng-customer-status"
                        value={customerStatus}
                        onChange={(e) =>
                          setCustomerStatus(
                            e.target.value as
                              | "New customer"
                              | "Existing customer",
                          )
                        }
                        className="w-full h-[40px] appearance-none rounded-[7px] border border-[#D4D8E5] bg-white pl-3.5 pr-9 text-[13px] text-[#070B2B] focus:border-[#E11D88] focus:outline-none transition-colors"
                      >
                        <option value="New customer">New customer</option>
                        <option value="Existing customer">
                          Existing customer
                        </option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280]" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="mng-site-count"
                      className="block text-[12px] font-bold text-[#070B2B] mb-1.5"
                    >
                      Number of sites
                    </label>
                    <input
                      id="mng-site-count"
                      type="text"
                      value={siteCount}
                      onChange={(e) => setSiteCount(e.target.value)}
                      className="w-full h-[40px] rounded-[7px] border border-[#D4D8E5] bg-white px-3.5 text-[13px] text-[#070B2B] focus:border-[#E11D88] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="mng-services-needed"
                      className="block text-[12px] font-bold text-[#070B2B] mb-1.5"
                    >
                      Which services need coordinating
                    </label>
                    <input
                      id="mng-services-needed"
                      type="text"
                      value={servicesNeeded}
                      onChange={(e) => setServicesNeeded(e.target.value)}
                      className="w-full h-[40px] rounded-[7px] border border-[#D4D8E5] bg-white px-3.5 text-[13px] text-[#070B2B] focus:border-[#E11D88] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="mng-main-challenge"
                      className="block text-[12px] font-bold text-[#070B2B] mb-1.5"
                    >
                      Your main challenge today
                    </label>
                    <textarea
                      id="mng-main-challenge"
                      rows={3}
                      value={mainChallenge}
                      onChange={(e) => setMainChallenge(e.target.value)}
                      className="w-full rounded-[7px] border border-[#D4D8E5] bg-white p-3.5 text-[13px] text-[#070B2B] focus:border-[#E11D88] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="rounded-[10px] bg-[#F8F9FD] border border-[#E7E9F2] px-4 py-3 text-[12px] text-[#4B5068]">
                    <span className="font-bold text-[#070B2B]">Summary:</span>{" "}
                    {businessName || "Your business"} &middot; {customerStatus}{" "}
                    &middot; {servicesNeeded} &middot; {siteCount} site(s)
                    &middot; Contact via {preferredContact}
                  </div>

                  {submitted && (
                    <div className="rounded-[10px] bg-[#F4FAF5] border border-[#BBF7D0] px-4 py-3 text-[12px] font-medium text-[#166534]">
                      Enquiry details prepared for {preferredContact} follow-up.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Navigation Row */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={handleBack}
                className="h-[44px] rounded-[9px] border border-[#D8DCE8] bg-white text-[13px] font-bold text-[#070B2B] hover:bg-[#F3F4F9] transition cursor-pointer"
              >
                Back
              </button>

              <button
                type="button"
                onClick={handleContinue}
                className="h-[44px] rounded-[9px] bg-gradient-to-r from-[#DF1A86] to-[#EB2690] text-[13px] font-bold text-white shadow-[0_10px_24px_rgba(230,26,134,0.35)] hover:brightness-105 transition inline-flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>{step === 3 ? "Submit enquiry" : "Continue"}</span>
                <ChevronRight className="h-4 w-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Sidebar Card */}
          <aside className="lg:col-span-4 rounded-[22px] bg-gradient-to-br from-[#070B34] via-[#130A4F] to-[#280869] p-6 sm:p-7 text-white shadow-[0_22px_48px_rgba(12,11,56,0.28)]">
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#E6499E] mb-2">
              WHY WE ASK
            </p>

            <h3 className="text-[22px] font-bold leading-[1.25] tracking-[-0.015em] text-white mb-6">
              What we&rsquo;ll ask
            </h3>

            <div className="relative space-y-4 mb-6">
              <div
                aria-hidden="true"
                className="absolute left-[6.5px] top-2 bottom-2 w-[1.5px] bg-white/15"
              />

              {WHAT_WELL_ASK.map((item) => (
                <div
                  key={item}
                  className="relative flex items-start gap-3.5 text-[12px] leading-[1.45]"
                >
                  <span className="relative z-10 mt-1 h-3.5 w-3.5 shrink-0 rounded-full bg-[#E6288E]/30 flex items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-[#F43F9E]" />
                  </span>
                  <p className="text-[#D5D8EE]">{item}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[12px] bg-white/[0.08] border border-white/10 px-4 py-3 mb-5 flex items-start gap-3">
              <Lock
                className="h-4 w-4 shrink-0 text-[#FBBF24] mt-0.5"
                strokeWidth={2}
              />
              <p className="text-[11px] leading-[1.45] text-[#D7DAF0]">
                We never ask for staff phone numbers, passwords or payment
                details in this form.
              </p>
            </div>

            <a
              href="#"
              className="w-full inline-flex items-center justify-center gap-1 rounded-[10px] bg-gradient-to-r from-[#DF1A86] to-[#EB2690] px-5 py-3.5 text-[13px] font-bold text-white shadow-[0_10px_24px_rgba(230,26,134,0.45)] hover:brightness-105 transition"
            >
              <span>Or contact us directly</span>
              <ChevronRight className="h-4 w-4 stroke-[2.5]" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
