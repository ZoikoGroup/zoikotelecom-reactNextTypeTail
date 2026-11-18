"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Lock, ChevronRight } from "lucide-react";

const WHY_WE_ASK_ITEMS = [
  "What you need — new, switch, upgrade or more sites",
  "How many sites, and roughly where",
  "What the connection is used for",
  "When your current contract ends",
] as const;

export default function TalkThroughBusinessBroadbandProposal() {
  const [businessName, setBusinessName] = useState("");
  const [contactName, setContactName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("Limited company");
  const [preferredContact, setPreferredContact] = useState("Email");

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#E11D74]">
            REQUEST INFORMATION
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Talk through a business broadband proposal
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Tell us about your sites and needs. Our team will check availability
            and send a written proposal.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 max-w-4xl">
          <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-[#E11D74]">
            <span>Step 1 of 3 · Your contact details</span>
          </div>
          <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-[#E6E9F2]">
            <div className="h-full w-1/3 bg-gradient-to-r from-[#E11D74] to-[#7C3AED]" />
          </div>
        </div>

        {/* Main Grid Container */}
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: Form Card */}
          <div className="rounded-3xl border border-[#ECEEF6] bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-10 lg:col-span-7">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-[#11183C]">
                    Business name <span className="text-[#E11D74]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-[#E6E9F2] bg-[#FAFAFD] px-4 py-3 text-sm font-medium text-[#11183C] focus:border-[#7C3AED] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-[#11183C]">
                    Contact name <span className="text-[#E11D74]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-[#E6E9F2] bg-[#FAFAFD] px-4 py-3 text-sm font-medium text-[#11183C] focus:border-[#7C3AED] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-[#11183C]">
                    Work email <span className="text-[#E11D74]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-[#E6E9F2] bg-[#FAFAFD] px-4 py-3 text-sm font-medium text-[#11183C] focus:border-[#7C3AED] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-[#11183C]">
                    Phone{" "}
                    <span className="font-normal text-[#6B7280]">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-[#E6E9F2] bg-[#FAFAFD] px-4 py-3 text-sm font-medium text-[#11183C] focus:border-[#7C3AED] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-[#11183C]">
                    Business type
                  </label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-[#E6E9F2] bg-[#FAFAFD] px-4 py-3 text-sm font-medium text-[#11183C] focus:border-[#7C3AED] focus:bg-white focus:outline-none"
                  >
                    <option value="Limited company">Limited company</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Sole trader">Sole trader</option>
                    <option value="Charity / Non-profit">
                      Charity / Non-profit
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-[#11183C]">
                    Preferred contact
                  </label>
                  <select
                    value={preferredContact}
                    onChange={(e) => setPreferredContact(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-[#E6E9F2] bg-[#FAFAFD] px-4 py-3 text-sm font-medium text-[#11183C] focus:border-[#7C3AED] focus:bg-white focus:outline-none"
                  >
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                  </select>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between gap-4 pt-4">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl border border-[#D1D5DB] bg-white px-7 py-3.5 text-sm font-bold text-[#11183C] transition-colors hover:bg-[#F9FAFB]"
                >
                  Back
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-8 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(225,29,116,0.32)] transition-transform hover:scale-[1.01]"
                >
                  <span>Continue</span>
                  <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Why We Ask Dark Card */}
          <div className="rounded-3xl bg-gradient-to-br from-[#060C36] via-[#081040] to-[#2A1A6E] p-7 text-white shadow-[0_12px_35px_rgba(17,24,60,0.2)] sm:p-8 lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#D1D5EB]">
              WHY WE ASK
            </p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              What we&apos;ll ask
            </h3>

            {/* Timeline Checklist */}
            <div className="relative mt-8 space-y-6 pl-2">
              {/* Vertical connecting line */}
              <div className="absolute bottom-3 left-[15px] top-3 w-0.5 bg-[#E11D74]/40" />

              {WHY_WE_ASK_ITEMS.map((item, index) => (
                <div key={index} className="relative flex items-start gap-4">
                  <div className="relative z-10 mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E11D74] ring-4 ring-[#081040]">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                  <p className="text-sm leading-snug text-[#E2E8F0]">{item}</p>
                </div>
              ))}
            </div>

            {/* Bottom Security / Direct Contact Banner */}
            <div className="mt-8 rounded-2xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-[#F472B6]">
                  <Lock className="h-4 w-4" strokeWidth={2.25} />
                </div>
                <p className="text-xs leading-relaxed text-[#D1D5EB]">
                  We never ask for staff phone numbers, passwords or payment
                  details in this form.
                </p>
              </div>

              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-5 py-3 text-xs font-bold text-white shadow-md transition-transform hover:scale-[1.01]"
                >
                  <span>Or contact us directly</span>
                  <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
