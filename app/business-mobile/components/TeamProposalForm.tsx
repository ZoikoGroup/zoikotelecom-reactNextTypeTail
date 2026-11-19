"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Lock, ChevronRight } from "lucide-react";

const QUESTIONS_LIST = [
  "How many SIMs you need — numbers only",
  "Whether you want devices",
  "Numbers you want to keep",
  "Where your team works",
] as const;

export default function TeamProposalForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    workEmail: "",
    phone: "",
    businessType: "Limited company",
    preferredContact: "Email",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="w-full bg-[#FFFFFF] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Main Grid Layout: Form Container on Left, Sidebar on Right */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: Multi-step Request Form */}
          <div className="rounded-3xl border border-[#ECEEF6] bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-10 lg:col-span-8">
            {/* Form Header */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#E11D74]">
                REQUEST INFORMATION
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#11183C] sm:text-3xl">
                Tell us about your team
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                A few questions so our business team can prepare a proposal. It
                takes about two minutes.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
                <div className="h-full w-1/3 bg-gradient-to-r from-[#E11D74] to-[#7C3AED]" />
              </div>
            </div>

            {/* Step Indicator */}
            <div className="mt-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#E11D74]">
                STEP 1 OF 3 · YOUR CONTACT DETAILS
              </span>
            </div>

            {/* Form Fields Card / Container */}
            <div className="mt-4 rounded-2xl border border-[#ECEEF6] bg-[#FAFAFD] p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Business name */}
                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-xs font-extrabold text-[#11183C]"
                  >
                    Business name <span className="text-[#E11D74]">*</span>
                    
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-[#DCE1F0] bg-white px-4 py-3 text-sm text-[#11183C] outline-none transition-all focus:border-[#E11D74] focus:ring-2 focus:ring-[#E11D74]/20"
                  />
                </div>

                {/* Contact name */}
                <div>
                  <label
                    htmlFor="contactName"
                    className="block text-xs font-extrabold text-[#11183C]"
                  >
                    Contact name <span className="text-[#E11D74]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-[#DCE1F0] bg-white px-4 py-3 text-sm text-[#11183C] outline-none transition-all focus:border-[#E11D74] focus:ring-2 focus:ring-[#E11D74]/20"
                  />
                </div>

                {/* Work email */}
                <div>
                  <label
                    htmlFor="workEmail"
                    className="block text-xs font-extrabold text-[#11183C]"
                  >
                    Work email <span className="text-[#E11D74]">*</span>
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-[#DCE1F0] bg-white px-4 py-3 text-sm text-[#11183C] outline-none transition-all focus:border-[#E11D74] focus:ring-2 focus:ring-[#E11D74]/20"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-extrabold text-[#11183C]"
                  >
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-[#DCE1F0] bg-white px-4 py-3 text-sm text-[#11183C] outline-none transition-all focus:border-[#E11D74] focus:ring-2 focus:ring-[#E11D74]/20"
                  />
                </div>

                {/* Business type */}
                <div>
                  <label
                    htmlFor="businessType"
                    className="block text-xs font-extrabold text-[#11183C]"
                  >
                    Business type
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-[#DCE1F0] bg-white px-4 py-3 text-sm text-[#11183C] outline-none transition-all focus:border-[#E11D74] focus:ring-2 focus:ring-[#E11D74]/20"
                  >
                    <option value="Limited company">
                      Limited company
                    </option>
                    <option value="Partnership">Partnership</option>
                    <option value="Sole trader">Sole trader</option>
                    <option value="LLP">LLP</option>
                  </select>
                </div>

                {/* Preferred contact */}
                <div>
                  <label
                    htmlFor="preferredContact"
                    className="block text-xs font-extrabold text-[#11183C]"
                  >
                    Preferred contact
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-[#DCE1F0] bg-white px-4 py-3 text-sm text-[#11183C] outline-none transition-all focus:border-[#E11D74] focus:ring-2 focus:ring-[#E11D74]/20"
                  >
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Form Navigation Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-8 py-4 text-sm font-bold text-white shadow-[0_8px_25px_rgba(225,29,116,0.35)] transition-transform hover:scale-[1.01]"
              >
                <span>Continue</span>
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-[#DCE1F0] bg-white px-8 py-4 text-sm font-bold text-[#11183C] transition-colors hover:border-[#BCC5E0] hover:bg-[#F9FAFC]"
              >
                Back
              </button>
            </div>
          </div>

          {/* Right Column: Information Sidebar */}
          <div className="rounded-3xl bg-gradient-to-br from-[#060C36] via-[#081040] to-[#2A1A6E] p-7 text-white shadow-[0_12px_40px_rgba(6,12,54,0.25)] sm:p-8 lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#F472B6]">
              WHY WE ASK
            </p>
            <h3 className="mt-2 text-xl font-extrabold tracking-tight text-white">
              What we&apos;ll ask
            </h3>

            {/* Step Bullets / Timeline */}
            <div className="mt-6 space-y-4">
              {QUESTIONS_LIST.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E11D74]">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                  <p className="text-xs leading-relaxed text-[#D1D5EB]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Security Notice Box */}
            <div className="mt-8 rounded-2xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-[#F472B6]">
                  <Lock className="h-4 w-4" strokeWidth={2.25} />
                </div>
                <p className="text-[11px] leading-relaxed text-[#D1D5EB]">
                  We never ask for staff phone numbers, passwords or payment
                  details in this form.
                </p>
              </div>
            </div>

            {/* Direct Contact Button */}
            <div className="mt-6">
              <Link
                href="/business/contact"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-6 py-3.5 text-xs font-bold text-white shadow-[0_8px_20px_rgba(225,29,116,0.3)] transition-transform hover:scale-[1.01]"
              >
                <span>Or contact us directly</span>
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
