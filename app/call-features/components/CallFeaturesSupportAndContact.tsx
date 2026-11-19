"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Wrench, ChevronRight, Check } from "lucide-react";

export default function CallFeaturesSupportAndContact() {
  const [formData, setFormData] = useState({
    enquiringAbout: "",
    businessName: "",
    email: "",
    callHandling: "",
    marketingOptIn: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <section className="w-full bg-[#FFFFFF] py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* PART 1: ALREADY A CUSTOMER SECTION */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
            Already a customer?
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight text-[#131138] sm:text-4xl lg:text-[42px]">
            Get help with your call features
          </h2>
        </div>

        {/* 2 Support Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Card 1: What does my plan include? */}
          <div className="flex flex-col justify-between rounded-[26px] border border-[#ecebf4] bg-white p-8 shadow-[0_14px_36px_rgba(19,17,56,0.04)] sm:p-9">
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e6007e] to-[#7b3fe4] text-white shadow-md shadow-[#e6007e]/20">
                <FileText className="h-5 w-5" aria-hidden="true" />
              </span>

              <h3 className="mt-6 text-xl font-black tracking-tight text-[#131138]">
                What does my plan include?
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-[#545275]">
                <li className="flex items-start gap-2.5">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#e6007e]"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span>
                    Ask us for a confirmed feature review for your service
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#e6007e]"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span>Have your account or bill reference ready</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#e6007e]"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span>
                    We&rsquo;ll tell you what&rsquo;s included and what&rsquo;s
                    optional
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Something isn't working? */}
          <div className="flex flex-col justify-between rounded-[26px] border border-[#ecebf4] bg-white p-8 shadow-[0_14px_36px_rgba(19,17,56,0.04)] sm:p-9">
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e6007e] to-[#7b3fe4] text-white shadow-md shadow-[#e6007e]/20">
                <Wrench className="h-5 w-5" aria-hidden="true" />
              </span>

              <h3 className="mt-6 text-xl font-black tracking-tight text-[#131138]">
                Something isn&rsquo;t working?
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-[#545275]">
                <li className="flex items-start gap-2.5">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#e6007e]"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span>Calls going to the wrong place or voicemail</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#e6007e]"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span>Menu options not behaving as expected</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#e6007e]"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span>Tell us the number affected and when it started</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Change settings yourself banner */}
        <div className="mt-6 flex flex-col gap-4 rounded-[22px] border border-[#ecebf4] bg-white p-6 shadow-xs sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <h4 className="text-sm font-extrabold text-[#131138]">
              Change settings yourself
            </h4>
            <p className="mt-1 text-xs text-[#545275] sm:text-sm">
              Signing in to manage forwarding, voicemail or menus isn&rsquo;t
              available yet. Contact our team and we&rsquo;ll help.
            </p>
          </div>
          <button
            type="button"
            disabled
            className="inline-flex shrink-0 items-center justify-center rounded-xl border border-[#ecebf4] bg-[#f8f9fc] px-5 py-3 text-xs font-bold text-[#b0acc0] cursor-not-allowed"
          >
            Sign in &mdash; coming soon
          </button>
        </div>

        {/* Support CTA buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3.5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#e6007e] to-[#c41478] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_-6px_rgba(230,0,126,0.45)] transition hover:opacity-95"
          >
            Contact support
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/faqs"
            className="inline-flex items-center rounded-xl border border-[#3d3a68]/30 bg-white px-6 py-3.5 text-sm font-semibold text-[#131138] shadow-xs transition hover:border-[#131138]"
          >
            Read our FAQs
          </Link>
        </div>

        {/* PART 2: TALK TO US / CONTACT FORM SECTION */}
        <div className="mt-24 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Left Column: Info & Checklist */}
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
              Talk to us
            </p>
            <h2 className="mt-2.5 text-3xl font-black tracking-tight text-[#131138] sm:text-4xl">
              Tell us how your business handles calls today
            </h2>
            <p className="mt-3.5 text-sm leading-6 text-[#545275] sm:text-base">
              We can discuss suitable voice options. We can&rsquo;t promise a
              reply by a set time.
            </p>

            <ul className="mt-8 space-y-3.5 text-sm font-medium text-[#2c2a4a]">
              <li className="flex items-start gap-3">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#e6007e]"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <span>Your opening hours and teams</span>
              </li>
              <li className="flex items-start gap-3">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#e6007e]"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <span>Roughly how many calls you get</span>
              </li>
              <li className="flex items-start gap-3">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#e6007e]"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <span>What should happen when nobody answers</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div className="rounded-[28px] border border-[#ecebf4] bg-white p-8 shadow-[0_16px_40px_rgba(19,17,56,0.06)] sm:p-9">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Field 1: I'm asking about * */}
              <div>
                <label className="block text-xs font-extrabold text-[#131138]">
                  I&rsquo;m asking about{" "}
                  <span className="text-[#e6007e]">*</span>
                </label>
                <select
                  value={formData.enquiringAbout}
                  onChange={(e) =>
                    setFormData({ ...formData, enquiringAbout: e.target.value })
                  }
                  required
                  className="mt-2 w-full rounded-xl border border-[#ecebf4] bg-[#fcfcff] px-4 py-3 text-sm text-[#131138] shadow-2xs focus:border-[#e6007e] focus:outline-hidden"
                >
                  <option value="" disabled>
                    Choose one
                  </option>
                  <option value="new-service">
                    New voice service &amp; features
                  </option>
                  <option value="current-plan">
                    Existing plan &amp; inclusions
                  </option>
                  <option value="support-issue">
                    Technical support or fault
                  </option>
                  <option value="pricing-costs">
                    Pricing &amp; itemised quotes
                  </option>
                </select>
              </div>

              {/* Field 2: Business name (optional) */}
              <div>
                <label className="block text-xs font-extrabold text-[#131138]">
                  Business name{" "}
                  <span className="font-normal text-[#545275]">(optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) =>
                    setFormData({ ...formData, businessName: e.target.value })
                  }
                  className="mt-2 w-full rounded-xl border border-[#ecebf4] bg-[#fcfcff] px-4 py-3 text-sm text-[#131138] shadow-2xs focus:border-[#e6007e] focus:outline-hidden"
                />
              </div>

              {/* Field 3: Email * */}
              <div>
                <label className="block text-xs font-extrabold text-[#131138]">
                  Email <span className="text-[#e6007e]">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="mt-2 w-full rounded-xl border border-[#ecebf4] bg-[#fcfcff] px-4 py-3 text-sm text-[#131138] shadow-2xs focus:border-[#e6007e] focus:outline-hidden"
                />
              </div>

              {/* Field 4: How do you handle calls today? */}
              <div>
                <label className="block text-xs font-extrabold text-[#131138]">
                  How do you handle calls today?{" "}
                  <span className="font-normal text-[#545275]">
                    (optional &mdash; please don&rsquo;t include passwords or
                    account PINs)
                  </span>
                </label>
                <textarea
                  rows={4}
                  value={formData.callHandling}
                  onChange={(e) =>
                    setFormData({ ...formData, callHandling: e.target.value })
                  }
                  className="mt-2 w-full rounded-xl border border-[#ecebf4] bg-[#fcfcff] px-4 py-3 text-sm text-[#131138] shadow-2xs focus:border-[#e6007e] focus:outline-hidden"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="marketing"
                  checked={formData.marketingOptIn}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      marketingOptIn: e.target.checked,
                    })
                  }
                  className="mt-1 h-4 w-4 rounded border-[#ecebf4] text-[#e6007e] focus:ring-[#e6007e]"
                />
                <label htmlFor="marketing" className="text-xs text-[#545275]">
                  I&rsquo;d like to hear about Zoiko Telecom products and offers
                  (optional).
                </label>
              </div>

              <p className="text-[11px] text-[#8c88b4]">
                We use your details only to answer your enquiry. See our{" "}
                <Link
                  href="/privacy"
                  className="underline hover:text-[#131138]"
                >
                  Privacy Notice
                </Link>
                .
              </p>

              <div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#e6007e] to-[#c41478] px-6 py-4 text-sm font-bold text-white shadow-[0_12px_28px_-6px_rgba(230,0,126,0.45)] transition hover:opacity-95"
                >
                  Send enquiry
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
