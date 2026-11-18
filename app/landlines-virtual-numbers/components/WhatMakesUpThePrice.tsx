import React from "react";
import Link from "next/link";
import {
  Calendar,
  Check,
  CornerUpRight,
  FileText,
  Phone,
  PoundSterling,
  TriangleAlert,
  Wrench,
} from "lucide-react";

const PRICE_PARTS = [
  { id: "rental", title: "Rental", text: "A regular charge for the number", icon: Calendar },
  { id: "setup", title: "Set-up", text: "Any one-off fee", icon: Wrench },
  { id: "usage", title: "Usage", text: "Charges for calls received", icon: Phone },
  { id: "forwarding", title: "Forwarding", text: "Sending calls to phones or mobiles", icon: CornerUpRight },
  { id: "vat", title: "VAT", text: "Shown clearly in your quote", icon: PoundSterling },
] as const;

const CALLER_COSTS = [
  { number: "03", cost: "The same as calling an 01 or 02 number" },
  { number: "080", cost: "Free from UK landlines and mobiles" },
  { number: "084 / 087", cost: "Their provider’s access charge plus your service charge" },
] as const;

const QUOTE_FACTORS = [
  "Contract length",
  "How many numbers you need",
  "Where calls are sent",
  "Any add-ons",
] as const;

export default function WhatMakesUpThePrice() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#060C36] via-[#0B1450] to-[#2A1A6E] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#D1D5EB]">
            Costs
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            What makes up the price
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#D1D5EB] sm:text-base">
            A virtual number can&apos;t be summed up as one headline price.
            Here&apos;s what to check.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl">
          {/* Price parts */}
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {PRICE_PARTS.map((part) => {
              const Icon = part.icon;
              return (
                <div key={part.id} className="bg-[#141B55] p-6 sm:last:col-span-2 lg:last:col-span-1">
                  <Icon
                    className="h-6 w-6 text-[#F472B6]"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-base font-extrabold">{part.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#C7CCE6]">
                    {part.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* What callers pay */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05]">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">What callers pay by number type</caption>
              <thead>
                <tr className="text-[#F472B6]">
                  <th scope="col" className="w-[30%] px-5 py-4 font-bold sm:w-[22%]">
                    Number
                  </th>
                  <th scope="col" className="px-5 py-4 font-bold">
                    What your callers pay
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {CALLER_COSTS.map((row) => (
                  <tr key={row.number}>
                    <th scope="row" className="px-5 py-4 text-base font-extrabold">
                      {row.number}
                    </th>
                    <td className="px-5 py-4 text-[#D1D5EB]">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quote + contract */}
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/[0.05] p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8]">
                <FileText className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-extrabold">Your quote depends on</h3>
              <ul className="mt-4 space-y-2.5">
                {QUOTE_FACTORS.map((factor) => (
                  <li
                    key={factor}
                    className="flex items-center gap-3 text-sm text-[#D1D5EB] sm:text-base"
                  >
                    <Check
                      className="h-4 w-4 shrink-0 text-[#F472B6]"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    {factor}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.06] to-[#8E37E8]/20 p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8]">
                <TriangleAlert className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-extrabold">Contract &amp; cancellation</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#D1D5EB] sm:text-base">
                Renewal, cancellation and exit terms come from your written
                contract. We&apos;ll share them before you agree.
              </p>
              <Link
                href="#discuss-number-options"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#E11D74] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_22px_rgba(225,29,116,0.4)] transition-transform hover:scale-[1.01]"
              >
                See prices
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
