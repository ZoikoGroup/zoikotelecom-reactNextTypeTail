"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight, Lock, CheckCircle2 } from "lucide-react";

type BusinessTypeOption =
  | "Limited company"
  | "LLP"
  | "Sole trader"
  | "Public sector / Charity"
  | "Other";

type PreferredContactOption = "Email" | "Phone";

interface ContactDetailsState {
  businessName: string;
  contactName: string;
  workEmail: string;
  phone: string;
  businessType: BusinessTypeOption;
  preferredContact: PreferredContactOption;
}

const BUSINESS_TYPE_OPTIONS: readonly BusinessTypeOption[] = [
  "Limited company",
  "LLP",
  "Sole trader",
  "Public sector / Charity",
  "Other",
];

const PREFERRED_CONTACT_OPTIONS: readonly PreferredContactOption[] = [
  "Email",
  "Phone",
];

const WHAT_WE_ASK_ITEMS: readonly string[] = [
  "Whether you're a prospect or existing customer",
  "Your role and the services involved",
  "What information you need",
  "How you'd like us to reply",
];

export default function DiscussSecurityRequirementsSection() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<ContactDetailsState>({
    businessName: "",
    contactName: "",
    workEmail: "",
    phone: "",
    businessType: "Limited company",
    preferredContact: "Email",
  });

  const [roleAndServices, setRoleAndServices] = useState<string>("");
  const [informationNeeded, setInformationNeeded] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (step === 1) {
      if (
        !formData.businessName.trim() ||
        !formData.contactName.trim() ||
        !formData.workEmail.trim()
      ) {
        setErrorMessage(
          "Please complete Business name, Contact name, and Work email to continue.",
        );
        return;
      }
      setStep(2);
      return;
    }

    if (step === 2) {
      if (!roleAndServices.trim() || !informationNeeded.trim()) {
        setErrorMessage(
          "Please share your role/services and what security information you need.",
        );
        return;
      }
      setStep(3);
      return;
    }

    setSubmitted(true);
  };

  const handleBack = () => {
    setErrorMessage(null);
    if (submitted) {
      setSubmitted(false);
      return;
    }
    if (step > 1) {
      setStep((prev) => (prev === 3 ? 2 : 1));
    }
  };

  const progressWidthClass =
    step === 1 ? "w-1/3" : step === 2 ? "w-2/3" : "w-full";

  const stepHeaderText =
    step === 1
      ? "STEP 1 OF 3 - YOUR CONTACT DETAILS"
      : step === 2
        ? "STEP 2 OF 3 - SCOPE & INFORMATION NEEDED"
        : "STEP 3 OF 3 - REVIEW & REPLY PREFERENCE";

  return (
    <section
      aria-labelledby="discuss-security-requirements-heading"
      className="w-full bg-white py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Header + Progress + Multi-Step Form */}
          <div className="lg:col-span-8">
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#E61E88] mb-2">
              REQUEST INFORMATION
            </p>

            <h2
              id="discuss-security-requirements-heading"
              className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B] mb-2.5"
            >
              Discuss your security requirements
            </h2>

            <p className="text-[13px] sm:text-[13.5px] leading-[1.55] text-[#5B6078] max-w-[680px] mb-5">
              Share high-level context only. Please don&rsquo;t include
              passwords, access tokens, network diagrams, subscriber IDs or
              incident files.
            </p>

            {/* Step Progress Bar */}
            <div
              aria-hidden="true"
              className="h-[3px] w-full rounded-full bg-[#E5E7F0] overflow-hidden mb-6"
            >
              <div
                className={`h-full rounded-full bg-[#DF1A86] transition-all duration-300 ${progressWidthClass}`}
              />
            </div>

            <form onSubmit={handleContinue} noValidate>
              {/* Form Card Container */}
              <div className="rounded-[18px] bg-white border border-[#ECEEF6] p-5 sm:p-7 shadow-[0_12px_32px_rgba(15,23,66,0.05)] mb-5">
                <p className="text-[10.5px] font-bold tracking-[0.09em] uppercase text-[#E61E88] mb-5">
                  {stepHeaderText}
                </p>

                {errorMessage && (
                  <div
                    role="alert"
                    className="mb-4 rounded-[10px] border border-[#FBCFE8] bg-[#FDF2F8] px-3.5 py-2.5 text-[12px] font-medium text-[#BE185D]"
                  >
                    {errorMessage}
                  </div>
                )}

                {submitted ? (
                  <div className="py-6 text-left">
                    <div className="flex items-center gap-2.5 text-[#15803D] font-bold text-[15px] mb-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0" />
                      <span>Security information request prepared</span>
                    </div>
                    <p className="text-[13px] text-[#4B5068] leading-[1.55] mb-4">
                      Thank you,{" "}
                      <span className="font-semibold text-[#070B2B]">
                        {formData.contactName || "there"}
                      </span>{" "}
                      ({formData.businessName || "your organisation"}). We will
                      follow up via{" "}
                      <span className="font-semibold text-[#070B2B]">
                        {formData.preferredContact.toLowerCase()}
                      </span>{" "}
                      ({formData.workEmail}) regarding your request.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setStep(1);
                      }}
                      className="inline-flex items-center justify-center rounded-[8px] border border-[#D8DCE8] px-4 py-2 text-[12px] font-bold text-[#070B2B] hover:bg-[#F8F9FD] transition cursor-pointer"
                    >
                      Start another request
                    </button>
                  </div>
                ) : step === 1 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    {/* Business name */}
                    <div>
                      <label
                        htmlFor="sec-business-name"
                        className="block text-[12px] font-bold text-[#070B2B] mb-1.5"
                      >
                        Business name <span className="text-[#E61E88]">*</span>
                      </label>
                      <input
                        id="sec-business-name"
                        type="text"
                        value={formData.businessName}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            businessName: e.target.value,
                          }))
                        }
                        className="w-full h-[40px] rounded-[8px] border border-[#D8DCE8] bg-white px-3.5 text-[12.5px] text-[#070B2B] placeholder:text-[#9CA3AF] focus:border-[#E61E88] focus:outline-none transition"
                      />
                    </div>

                    {/* Contact name */}
                    <div>
                      <label
                        htmlFor="sec-contact-name"
                        className="block text-[12px] font-bold text-[#070B2B] mb-1.5"
                      >
                        Contact name <span className="text-[#E61E88]">*</span>
                      </label>
                      <input
                        id="sec-contact-name"
                        type="text"
                        value={formData.contactName}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            contactName: e.target.value,
                          }))
                        }
                        className="w-full h-[40px] rounded-[8px] border border-[#D8DCE8] bg-white px-3.5 text-[12.5px] text-[#070B2B] placeholder:text-[#9CA3AF] focus:border-[#E61E88] focus:outline-none transition"
                      />
                    </div>

                    {/* Work email */}
                    <div>
                      <label
                        htmlFor="sec-work-email"
                        className="block text-[12px] font-bold text-[#070B2B] mb-1.5"
                      >
                        Work email <span className="text-[#E61E88]">*</span>
                      </label>
                      <input
                        id="sec-work-email"
                        type="email"
                        value={formData.workEmail}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            workEmail: e.target.value,
                          }))
                        }
                        className="w-full h-[40px] rounded-[8px] border border-[#D8DCE8] bg-white px-3.5 text-[12.5px] text-[#070B2B] placeholder:text-[#9CA3AF] focus:border-[#E61E88] focus:outline-none transition"
                      />
                    </div>

                    {/* Phone (optional) */}
                    <div>
                      <label
                        htmlFor="sec-phone"
                        className="block text-[12px] font-bold text-[#070B2B] mb-1.5"
                      >
                        Phone{" "}
                        <span className="text-[10.5px] font-normal text-[#6B7280]">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="sec-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        className="w-full h-[40px] rounded-[8px] border border-[#D8DCE8] bg-white px-3.5 text-[12.5px] text-[#070B2B] placeholder:text-[#9CA3AF] focus:border-[#E61E88] focus:outline-none transition"
                      />
                    </div>

                    {/* Business type */}
                    <div>
                      <label
                        htmlFor="sec-business-type"
                        className="block text-[12px] font-bold text-[#070B2B] mb-1.5"
                      >
                        Business type
                      </label>
                      <div className="relative">
                        <select
                          id="sec-business-type"
                          value={formData.businessType}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              businessType: e.target
                                .value as BusinessTypeOption,
                            }))
                          }
                          className="w-full h-[40px] appearance-none rounded-[8px] border border-[#D8DCE8] bg-white pl-3.5 pr-9 text-[12.5px] text-[#070B2B] focus:border-[#E61E88] focus:outline-none transition cursor-pointer"
                        >
                          {BUSINESS_TYPE_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          aria-hidden="true"
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280]"
                        />
                      </div>
                    </div>

                    {/* Preferred contact */}
                    <div>
                      <label
                        htmlFor="sec-preferred-contact"
                        className="block text-[12px] font-bold text-[#070B2B] mb-1.5"
                      >
                        Preferred contact
                      </label>
                      <div className="relative">
                        <select
                          id="sec-preferred-contact"
                          value={formData.preferredContact}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              preferredContact: e.target
                                .value as PreferredContactOption,
                            }))
                          }
                          className="w-full h-[40px] appearance-none rounded-[8px] border border-[#D8DCE8] bg-white pl-3.5 pr-9 text-[12.5px] text-[#070B2B] focus:border-[#E61E88] focus:outline-none transition cursor-pointer"
                        >
                          {PREFERRED_CONTACT_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          aria-hidden="true"
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280]"
                        />
                      </div>
                    </div>
                  </div>
                ) : step === 2 ? (
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="sec-role-services"
                        className="block text-[12px] font-bold text-[#070B2B] mb-1.5"
                      >
                        Your role and services involved{" "}
                        <span className="text-[#E61E88]">*</span>
                      </label>
                      <input
                        id="sec-role-services"
                        type="text"
                        value={roleAndServices}
                        onChange={(e) => setRoleAndServices(e.target.value)}
                        placeholder="e.g. Procurement lead reviewing business mobile and hosted voice"
                        className="w-full h-[40px] rounded-[8px] border border-[#D8DCE8] bg-white px-3.5 text-[12.5px] text-[#070B2B] placeholder:text-[#9CA3AF] focus:border-[#E61E88] focus:outline-none transition"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="sec-info-needed"
                        className="block text-[12px] font-bold text-[#070B2B] mb-1.5"
                      >
                        What security information you need{" "}
                        <span className="text-[#E61E88]">*</span>
                      </label>
                      <textarea
                        id="sec-info-needed"
                        rows={3}
                        value={informationNeeded}
                        onChange={(e) => setInformationNeeded(e.target.value)}
                        placeholder="Share high-level topics such as service safeguards, supplier roles, or data terms..."
                        className="w-full rounded-[8px] border border-[#D8DCE8] bg-white p-3.5 text-[12.5px] text-[#070B2B] placeholder:text-[#9CA3AF] focus:border-[#E61E88] focus:outline-none transition"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2.5 text-[12.5px] text-[#4B5068]">
                    <p>
                      <span className="font-bold text-[#070B2B]">
                        Organisation:
                      </span>{" "}
                      {formData.businessName} ({formData.businessType})
                    </p>
                    <p>
                      <span className="font-bold text-[#070B2B]">Contact:</span>{" "}
                      {formData.contactName} &mdash; {formData.workEmail}
                    </p>
                    <p>
                      <span className="font-bold text-[#070B2B]">
                        Role &amp; Services:
                      </span>{" "}
                      {roleAndServices}
                    </p>
                    <p>
                      <span className="font-bold text-[#070B2B]">
                        Information Needed:
                      </span>{" "}
                      {informationNeeded}
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Action Buttons */}
              {!submitted && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={step === 1}
                    className="h-[42px] w-full rounded-[8px] border border-[#D8DCE8] bg-white px-5 text-[12.5px] font-bold text-[#070B2B] hover:bg-[#F9FAFC] disabled:opacity-75 transition cursor-pointer"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    className="h-[42px] w-full inline-flex items-center justify-center gap-1 rounded-[8px] bg-gradient-to-r from-[#DF1A86] to-[#EB2690] px-5 text-[12.5px] font-bold text-white shadow-[0_10px_22px_rgba(230,26,134,0.3)] hover:brightness-105 transition cursor-pointer"
                  >
                    <span>{step === 3 ? "Submit request" : "Continue"}</span>
                    <ChevronRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: "WHY WE ASK" Dark Card */}
          <aside className="lg:col-span-4 rounded-[20px] bg-gradient-to-br from-[#070A32] via-[#130C52] to-[#290A6B] p-6 sm:p-7 text-white shadow-[0_18px_42px_rgba(12,10,54,0.2)]">
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#F472B6] mb-1.5">
              WHY WE ASK
            </p>

            <h3 className="text-[19px] font-extrabold leading-[1.25] tracking-[-0.015em] text-white mb-5">
              What we&rsquo;ll ask
            </h3>

            {/* Vertical Stepper List */}
            <ol className="relative space-y-4 mb-6">
              {WHAT_WE_ASK_ITEMS.map((item, idx) => {
                const isLast = idx === WHAT_WE_ASK_ITEMS.length - 1;
                return (
                  <li key={item} className="relative flex items-start gap-3">
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[5.5px] top-[15px] h-[calc(100%+4px)] w-[1.5px] bg-[#52388C]"
                      />
                    )}
                    <span
                      aria-hidden="true"
                      className="relative z-10 mt-[3px] h-[12px] w-[12px] shrink-0 rounded-full border-[2.5px] border-[#F472B6] bg-[#160E58]"
                    />
                    <span className="text-[12px] leading-[1.45] text-[#D8DDF2]">
                      {item}
                    </span>
                  </li>
                );
              })}
            </ol>

            {/* Security Notice Box */}
            <div className="rounded-[12px] bg-white/[0.09] border border-white/12 p-3.5 mb-4 flex items-start gap-2.5">
              <Lock
                aria-hidden="true"
                className="h-3.5 w-3.5 shrink-0 text-[#FBBF24] mt-[2px]"
                strokeWidth={2.2}
              />
              <p className="text-[11px] leading-[1.48] text-[#E2E6F7]">
                We never ask for staff phone numbers, passwords or payment
                details in this form.
              </p>
            </div>

            {/* Direct Contact Button */}
            <a
              href="#"
              className="w-full h-[40px] inline-flex items-center justify-center gap-1 rounded-[8px] bg-gradient-to-r from-[#DF1A86] to-[#EB2690] px-4 text-[12px] font-bold text-white shadow-[0_10px_24px_rgba(230,26,134,0.4)] hover:brightness-105 transition"
            >
              <span>Or contact us directly</span>
              <ChevronRight className="h-3.5 w-3.5 stroke-[2.5]" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
