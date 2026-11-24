"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const firstChecks = [
  "Which billing period the charge covers",
  "Whether it's a one-off, usage or roaming charge",
  "Any service change or new start date (pro-rating)",
  "Any earlier credits or adjustments",
  "Whether device payments come from a different company",
] as const;

const whatToTellUs = [
  "The billing month",
  "The service it's for (mobile, broadband, landline)",
  "The charge and why it seems wrong",
  "What you expected to pay",
] as const;

const billingEnquiryPoints = [
  "Most billing questions start here",
  "We'll look into the charge with you",
  "Clicking a link doesn't open a case",
] as const;

const formalComplaintPoints = [
  "If it isn't resolved, ask for our complaints process",
  "Eligible customers can usually go to free ADR after six weeks",
  "Or sooner with a deadlock letter — see Ofcom",
] as const;

export default function UnrecognisedChargeChecklist() {
  const [checkedFirst, setCheckedFirst] = useState<Record<number, boolean>>({});
  const [checkedTellUs, setCheckedTellUs] = useState<Record<number, boolean>>(
    {},
  );

  const toggleFirst = (idx: number) => {
    setCheckedFirst((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleTellUs = (idx: number) => {
    setCheckedTellUs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const CheckboxSquare = ({ checked }: { checked: boolean }) => (
    <span
      className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border transition-colors ${
        checked
          ? "border-[#EC1C7A] bg-[#EC1C7A] text-white"
          : "border-[#C7C3D8] bg-white"
      }`}
    >
      {checked && (
        <svg
          viewBox="0 0 24 24"
          className="h-3 w-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12.5l4.5 4.5L19 7" />
        </svg>
      )}
    </span>
  );

  const Checkmark = () => (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#EC1C7A]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );

  return (
    <section
      id="dispute-a-charge"
      className="w-full bg-[#F5F6FB] px-4 py-14 text-[#18133E] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Header */}
        <div className="text-center">
          <p className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#5B5675]">
            A charge you don&apos;t recognise
          </p>
          <h2 className="mt-2.5 text-[32px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#110C3A] sm:text-[42px]">
            Check, prepare, then contact us
          </h2>
          <p className="mt-2.5 text-[13px] text-[#6E6A85]">
            Tick as you go — nothing is saved or sent.
          </p>
        </div>

        {/* Top Row: First checks + What to tell us */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left Card: First checks */}
          <div className="rounded-2xl border border-[#ECEAF2] bg-white p-6 shadow-[0_6px_22px_rgba(17,12,58,0.04)] sm:p-7">
            <div className="flex items-center gap-2.5">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 text-[#8B5CF6]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="6.5" />
                <path d="M16 16l4 4" />
              </svg>
              <h3 className="text-[15.5px] font-extrabold text-[#110C3A]">
                First checks
              </h3>
            </div>

            <div className="mt-4 divide-y divide-[#F2F0F7]">
              {firstChecks.map((item, idx) => {
                const isChecked = !!checkedFirst[idx];
                return (
                  <button
                    key={item}
                    type="button"
                    role="checkbox"
                    aria-checked={isChecked}
                    onClick={() => toggleFirst(idx)}
                    className="flex w-full items-start gap-3 py-3 text-left transition-colors hover:bg-[#FAF9FD]"
                  >
                    <CheckboxSquare checked={isChecked} />
                    <span
                      className={`text-[12.5px] leading-[1.5] ${
                        isChecked
                          ? "text-[#8A869E] line-through"
                          : "font-medium text-[#3D3857]"
                      }`}
                    >
                      {item}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Card: What to tell us */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#ECEAF2] bg-white p-6 shadow-[0_6px_22px_rgba(17,12,58,0.04)] sm:p-7">
            <div>
              <div className="flex items-center gap-2.5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 text-[#8B5CF6]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <path d="M8.5 9.5h7M8.5 13h4.5" />
                </svg>
                <h3 className="text-[15.5px] font-extrabold text-[#110C3A]">
                  What to tell us
                </h3>
              </div>

              <div className="mt-4 divide-y divide-[#F2F0F7]">
                {whatToTellUs.map((item, idx) => {
                  const isChecked = !!checkedTellUs[idx];
                  return (
                    <button
                      key={item}
                      type="button"
                      role="checkbox"
                      aria-checked={isChecked}
                      onClick={() => toggleTellUs(idx)}
                      className="flex w-full items-start gap-3 py-3 text-left transition-colors hover:bg-[#FAF9FD]"
                    >
                      <CheckboxSquare checked={isChecked} />
                      <span
                        className={`text-[12.5px] leading-[1.5] ${
                          isChecked
                            ? "text-[#8A869E] line-through"
                            : "font-medium text-[#3D3857]"
                        }`}
                      >
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 space-y-4">
              {/* Warning Notice Box */}
              <div className="rounded-lg border border-[#F8D3D3] bg-[#FFF5F5] px-4 py-3 text-[11px] leading-[1.5] text-[#9B2C2C]">
                <span className="font-extrabold">Please don&apos;t send:</span>{" "}
                card numbers, security codes, passwords, one-time codes or a
                full unredacted bill.
              </div>

              {/* Primary CTA Button */}
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#EC1C7A] px-5 py-3 text-[12.5px] font-bold text-white shadow-[0_8px_20px_rgba(236,28,122,0.3)] transition-colors hover:bg-[#d6166d]"
              >
                <span>Contact support</span>
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Row: Billing enquiry + Formal complaint */}
        <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Billing enquiry */}
          <div className="rounded-2xl border border-[#ECEAF2] bg-white p-6 shadow-[0_4px_16px_rgba(17,12,58,0.03)] sm:p-7">
            <div className="flex items-center gap-2.5">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 text-[#4F6EF7]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M8.5 9.5h7M8.5 13h4.5" />
              </svg>
              <h3 className="text-[15px] font-extrabold text-[#110C3A]">
                Billing enquiry
              </h3>
            </div>

            <ul className="mt-4 space-y-2.5">
              {billingEnquiryPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-[12px] leading-[1.5] text-[#6E6A85]"
                >
                  <Checkmark />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Formal complaint */}
          <div className="rounded-2xl border border-[#F1E8F7] bg-[#FAF4FC] p-6 shadow-[0_4px_16px_rgba(17,12,58,0.025)] sm:p-7">
            <div className="flex items-center gap-2.5">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 text-[#EC1C7A]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 4v16" />
                <path d="M5 5h12l-2.5 4L17 13H5" />
              </svg>
              <h3 className="text-[15px] font-extrabold text-[#110C3A]">
                Formal complaint
              </h3>
            </div>

            <ul className="mt-4 space-y-2.5">
              {formalComplaintPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-[12px] leading-[1.5] text-[#6E6A85]"
                >
                  <Checkmark />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
