"use client";

import { useState } from "react";

interface BillLineItem {
  number: number;
  label: string;
  value: string;
  explanation: string;
}

const billLines: BillLineItem[] = [
  {
    number: 1,
    label: "Account & service",
    value: "Acct ref ••••",
    explanation:
      "Identifies the account and service — never share it in public messages.",
  },
  {
    number: 2,
    label: "Billing period",
    value: "1 – 30 (example)",
    explanation:
      "Shows the calendar or statement dates covered by this bill cycle.",
  },
  {
    number: 3,
    label: "Monthly plan charge",
    value: "£ xx.xx",
    explanation:
      "The recurring base price for your chosen mobile, broadband, or business plan.",
  },
  {
    number: 4,
    label: "One-off charges",
    value: "£ xx.xx",
    explanation:
      "Single non-recurring items such as setup fees, delivery, or specific add-ons.",
  },
  {
    number: 5,
    label: "Extra usage & roaming",
    value: "£ xx.xx",
    explanation:
      "Charges outside your standard allowance, such as out-of-bundle calls or roaming.",
  },
  {
    number: 6,
    label: "Credits & adjustments",
    value: "– £ xx.xx",
    explanation:
      "Deductions applied to your bill, such as promotional credits or billing adjustments.",
  },
  {
    number: 7,
    label: "VAT",
    value: "£ xx.xx",
    explanation:
      "Value Added Tax calculated on eligible charges according to current rules.",
  },
  {
    number: 8,
    label: "Total & due date",
    value: "£ xx.xx",
    explanation:
      "The total balance payable and the date payment is due to be collected or received.",
  },
];

export default function BillAnatomySection() {
  const [selectedNumber, setSelectedNumber] = useState<number>(1);

  const activeLine =
    billLines.find((item) => item.number === selectedNumber) ?? billLines[0];

  return (
    <section
      id="bill-anatomy"
      className="w-full bg-[#F5F6FB] px-4 py-14 text-[#18133E] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#5B5675]">
            Bill anatomy
          </p>
          <h2 className="mt-2.5 text-[32px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#110C3A] sm:text-[42px]">
            Read a bill, line by line
          </h2>
          <p className="mx-auto mt-2.5 max-w-[540px] text-[13px] leading-[1.55] text-[#6E6A85]">
            Tap a line on the sample bill to see what it means. Amounts are
            placeholders — this is not your bill.
          </p>
        </div>

        {/* Two-Column Interactive Bill + Detail Panel */}
        <div className="mt-10 grid grid-cols-1 items-center gap-7 lg:grid-cols-[440px_1fr] lg:gap-9">
          {/* Left: Sample Bill Card */}
          <div className="rounded-2xl border border-[#ECEAF2] bg-white p-6 shadow-[0_14px_36px_rgba(17,12,58,0.06)] sm:p-7">
            <div className="flex items-center justify-between gap-3 border-b border-[#F1EFF6] pb-4">
              <h3 className="text-[16px] font-extrabold text-[#110C3A]">
                Sample bill
              </h3>
              <span className="rounded border border-[#E6A4A4] bg-[#FFF8F8] px-2.5 py-1 text-[8.5px] font-extrabold uppercase tracking-[0.08em] text-[#B42318]">
                Sample · Not your bill
              </span>
            </div>

            <div className="mt-3 divide-y divide-[#F4F2F8]">
              {billLines.map((line) => {
                const isSelected = line.number === selectedNumber;
                return (
                  <button
                    key={line.number}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedNumber(line.number)}
                    className={`flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      isSelected
                        ? "rounded-lg bg-[#FCECF4]"
                        : "hover:bg-[#FAF9FD]"
                    }`}
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold transition-colors ${
                          isSelected
                            ? "bg-[#EC1C7A] text-white"
                            : "bg-[#EAE8F2] text-[#5B5675]"
                        }`}
                      >
                        {line.number}
                      </span>
                      <span
                        className={`truncate text-[12.5px] ${
                          isSelected
                            ? "font-bold text-[#110C3A]"
                            : "font-medium text-[#3D3857]"
                        }`}
                      >
                        {line.label}
                      </span>
                    </div>

                    <span className="shrink-0 text-[12px] font-extrabold text-[#110C3A]">
                      {line.value}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="mt-4 text-[10.5px] leading-[1.5] text-[#8A869E]">
              &ldquo;£ xx.xx&rdquo; marks an example amount. Real amounts come
              only from your issued bill.
            </p>
          </div>

          {/* Right: Deep Indigo/Purple Inspector Card */}
          <div className="flex min-h-[340px] flex-col justify-between rounded-2xl bg-gradient-to-br from-[#0B082A] via-[#1B0D52] to-[#3B137A] p-7 text-white shadow-[0_16px_40px_rgba(17,12,58,0.16)] sm:min-h-[390px] sm:p-9">
            {/* Top Centered Bill + £ Badge Illustration */}
            <div className="flex flex-1 items-center justify-center py-4">
              <svg
                viewBox="0 0 130 105"
                className="h-24 w-32"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="sampleBillLineGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#FF7A59" />
                    <stop offset="100%" stopColor="#EC1C7A" />
                  </linearGradient>
                  <linearGradient
                    id="samplePoundGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#FF9A76" />
                    <stop offset="100%" stopColor="#F43F8E" />
                  </linearGradient>
                </defs>
                {/* Ground shadow */}
                <ellipse
                  cx="58"
                  cy="94"
                  rx="36"
                  ry="4.5"
                  fill="#07051C"
                  opacity="0.65"
                />
                {/* Receipt sheet */}
                <path
                  d="M32 14h52v72l-6.5-4.5-6.5 4.5-6.5-4.5-6.5 4.5-6.5-4.5-6.5 4.5-6.5-4.5-6.5 4.5V14z"
                  fill="#FFFFFF"
                />
                {/* Coral-pink bar */}
                <rect
                  x="41"
                  y="24"
                  width="26"
                  height="5"
                  rx="2.5"
                  fill="url(#sampleBillLineGrad)"
                />
                {/* Muted lines */}
                <rect
                  x="41"
                  y="36"
                  width="34"
                  height="4"
                  rx="2"
                  fill="#D6D3E5"
                />
                <rect
                  x="41"
                  y="45"
                  width="28"
                  height="4"
                  rx="2"
                  fill="#E4E2F0"
                />
                {/* Mint bottom bar */}
                <rect
                  x="41"
                  y="60"
                  width="34"
                  height="7"
                  rx="3.5"
                  fill="#99F6D4"
                />
                {/* Floating £ circle */}
                <circle cx="88" cy="35" r="13.5" fill="url(#samplePoundGrad)" />
                <text
                  x="88"
                  y="39.5"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="14.5"
                  fontWeight="800"
                  fontFamily="sans-serif"
                >
                  £
                </text>
              </svg>
            </div>

            {/* Bottom Active Line Details */}
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#FF8DC7]">
                Line {activeLine.number}
              </p>
              <h3 className="mt-2 text-[22px] font-extrabold tracking-[-0.015em] text-white sm:text-[24px]">
                {activeLine.label}
              </h3>
              <p className="mt-2 max-w-[540px] text-[13px] leading-[1.6] text-white/80">
                {activeLine.explanation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
