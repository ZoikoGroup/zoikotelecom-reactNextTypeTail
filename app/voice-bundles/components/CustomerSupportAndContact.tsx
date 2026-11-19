"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowLeftRight,
  Check,
  ChevronDown,
  ChevronRight,
  FileText,
  type LucideIcon,
} from "lucide-react";

type SupportCard = {
  title: string;
  icon: LucideIcon;
  points: readonly string[];
};

const SUPPORT_CARDS: readonly SupportCard[] = [
  {
    title: "Bills and allowances",
    icon: FileText,
    points: [
      "Ask what your allowance includes",
      "Query an unexpected charge",
      "Have your account or bill reference ready",
    ],
  },
  {
    title: "Changing your package",
    icon: ArrowLeftRight,
    points: [
      "Ask to add minutes, lines or features",
      "We'll show old and new terms side by side",
      "Nothing changes until you agree in writing",
    ],
  },
] as const;

const TALK_TO_US_POINTS = [
  "Number of sites and users",
  "The calls you make most",
  "Any numbers you want to keep",
] as const;

const INQUIRY_TOPICS = [
  "New voice bundle quote",
  "Inclusive UK call allowances",
  "Moving existing numbers (porting)",
  "Multi-site or broadband + voice package",
  "Help with my current plan",
] as const;

export default function CustomerSupportAndContact() {
  const [topic, setTopic] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [callSetup, setCallSetup] = useState<string>("");
  const [marketingOptIn, setMarketingOptIn] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-white py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Part 1: Already a customer */}
        <div>
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
              Already a customer?
            </p>
            <h2 className="mt-2.5 text-3xl font-black tracking-tight text-[#131138] sm:text-4xl lg:text-[42px]">
              Help with your current voice plan
            </h2>
          </div>

          {/* Two Support Cards */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {SUPPORT_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-[24px] border border-[#ecebf4] bg-white p-7 shadow-[0_14px_36px_rgba(19,17,56,0.05)] sm:p-8"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e6007e] to-[#7b3fe4] text-white shadow-md shadow-[#e6007e]/20">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 text-lg font-extrabold tracking-tight text-[#131138] sm:text-xl">
                    {card.title}
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {card.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-[#545275]"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#e6007e]"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Dashed Notice Strip */}
          <div className="mt-6 rounded-[20px] border border-dashed border-[#d4d1e8] bg-[#faf9fd] px-6 py-5 sm:px-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-sm font-extrabold text-[#131138] sm:text-base">
                  Check your allowance or change your package online
                </h3>
                <p className="mt-1 text-xs text-[#545275] sm:text-[13px]">
                  Signing in to view usage or change your bundle isn&rsquo;t
                  available yet. Contact our team and we&rsquo;ll help.
                </p>
              </div>

              <span className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#e7e9f2] px-4 py-2.5 text-xs font-bold text-[#7b849b]">
                Sign in &mdash; coming soon
              </span>
            </div>
          </div>

          {/* Customer Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3.5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#e6007e] to-[#c41478] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_-6px_rgba(230,0,126,0.45)] transition hover:opacity-95"
            >
              Contact our team
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              href="/faqs"
              className="inline-flex items-center rounded-xl border border-[#3d3a68]/30 bg-white px-6 py-3.5 text-sm font-semibold text-[#131138] shadow-xs transition hover:border-[#131138]"
            >
              Read our FAQs
            </Link>
          </div>
        </div>

        {/* Part 2: Talk to us & Enquiry Form */}
        <div className="mt-20 grid items-start gap-12 lg:mt-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left Column */}
          <div className="lg:pt-4">
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
              Talk to us
            </p>

            <h2 className="mt-2.5 text-3xl font-black leading-[1.12] tracking-tight text-[#131138] sm:text-4xl lg:text-[42px]">
              Speak to our business team
            </h2>

            <p className="mt-4 max-w-[440px] text-sm leading-6 text-[#545275] sm:text-base">
              Tell us about your sites, users and calls. We&rsquo;ll reply with
              suitable options and an itemised quote &mdash; we can&rsquo;t
              promise a reply by a set time.
            </p>

            <ul className="mt-7 space-y-3.5">
              {TALK_TO_US_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm font-medium text-[#2c2a4a]"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#e6007e]"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Enquiry Form Card */}
          <div className="rounded-[28px] border border-[#ecebf4] bg-white p-7 shadow-[0_24px_60px_rgba(19,17,56,0.08)] sm:p-9">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Select: I'm asking about */}
              <div>
                <label
                  htmlFor="inquiry-topic"
                  className="block text-xs font-bold text-[#131138]"
                >
                  I&rsquo;m asking about{" "}
                  <span className="text-[#e6007e]">*</span>
                </label>
                <div className="relative mt-2">
                  <select
                    id="inquiry-topic"
                    required
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-[#dfe1ec] bg-white px-4 py-3 pr-10 text-sm text-[#131138] outline-none transition focus:border-[#7b3fe4] focus:ring-2 focus:ring-[#7b3fe4]/15"
                  >
                    <option value="" disabled>
                      Choose one
                    </option>
                    {INQUIRY_TOPICS.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7b849b]"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Input: Business name */}
              <div>
                <label
                  htmlFor="business-name"
                  className="block text-xs font-bold text-[#131138]"
                >
                  Business name{" "}
                  <span className="font-normal text-[#7b849b]">(optional)</span>
                </label>
                <input
                  id="business-name"
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#dfe1ec] bg-white px-4 py-3 text-sm text-[#131138] outline-none transition focus:border-[#7b3fe4] focus:ring-2 focus:ring-[#7b3fe4]/15"
                />
              </div>

              {/* Input: Email */}
              <div>
                <label
                  htmlFor="business-email"
                  className="block text-xs font-bold text-[#131138]"
                >
                  Email <span className="text-[#e6007e]">*</span>
                </label>
                <input
                  id="business-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#dfe1ec] bg-white px-4 py-3 text-sm text-[#131138] outline-none transition focus:border-[#7b3fe4] focus:ring-2 focus:ring-[#7b3fe4]/15"
                />
              </div>

              {/* Textarea: How do you handle calls today? */}
              <div>
                <label
                  htmlFor="call-setup"
                  className="block text-xs font-bold leading-5 text-[#131138]"
                >
                  How do you handle calls today?{" "}
                  <span className="font-normal text-[#7b849b]">
                    (optional &mdash; please don&rsquo;t include passwords or
                    account PINs)
                  </span>
                </label>
                <textarea
                  id="call-setup"
                  rows={4}
                  value={callSetup}
                  onChange={(e) => setCallSetup(e.target.value)}
                  className="mt-2 w-full resize-y rounded-xl border border-[#dfe1ec] bg-white px-4 py-3 text-sm text-[#131138] outline-none transition focus:border-[#7b3fe4] focus:ring-2 focus:ring-[#7b3fe4]/15"
                />
              </div>

              {/* Marketing Opt-in Checkbox */}
              <label className="flex cursor-pointer items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  checked={marketingOptIn}
                  onChange={(e) => setMarketingOptIn(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-[#cfd2e3] text-[#e6007e] focus:ring-[#e6007e]"
                />
                <span className="text-xs leading-5 text-[#545275]">
                  I&rsquo;d like to hear about Zoiko Telecom products and offers
                  (optional).
                </span>
              </label>

              {/* Privacy Note */}
              <p className="text-xs leading-5 text-[#7b849b]">
                We use your details only to answer your enquiry. See our{" "}
                <Link
                  href="/privacy-policy"
                  className="font-bold text-[#e6007e] underline decoration-[#e6007e]/40 underline-offset-2 hover:decoration-[#e6007e]"
                >
                  Privacy Notice
                </Link>
                .
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#e6007e] to-[#c41478] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_-6px_rgba(230,0,126,0.45)] transition hover:opacity-95"
              >
                Send enquiry
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>

              {submitted && (
                <p
                  role="status"
                  className="rounded-xl bg-[#eaf7ef] px-4 py-3 text-center text-xs font-semibold text-[#1f9d55]"
                >
                  Thank you &mdash; your enquiry details have been recorded.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
