import React from "react";
import Link from "next/link";
import {
  PoundSterling,
  Box,
  Calendar,
  TrendingUp,
  BarChart3,
  Globe,
  Clock,
  XCircle,
  Scale,
  ChevronRight,
} from "lucide-react";

const COST_BREAKDOWN_CARDS = [
  {
    id: "price-per-sim",
    title: "Price per SIM",
    description: "Ex-VAT or inc-VAT, clearly labelled.",
    icon: PoundSterling,
  },
  {
    id: "upfront-costs",
    title: "Upfront costs",
    description: "Set-up, delivery and any devices.",
    icon: Box,
  },
  {
    id: "minimum-term",
    title: "Minimum term",
    description: "How long each line is committed.",
    icon: Calendar,
  },
  {
    id: "price-changes",
    title: "Price changes",
    description: "Any rises in pounds and pence, with dates.",
    icon: TrendingUp,
  },
  {
    id: "allowances",
    title: "Allowances",
    description: "Data, minutes, texts and fair-use limits.",
    icon: BarChart3,
  },
  {
    id: "roaming",
    title: "Roaming",
    description: "Which countries, and what it costs.",
    icon: Globe,
  },
  {
    id: "extra-usage",
    title: "Extra usage",
    description: "Charges outside your allowance.",
    icon: Clock,
  },
  {
    id: "leaving-early",
    title: "Leaving early",
    description: "Any early termination charges.",
    icon: XCircle,
  },
] as const;

export default function UnderstandTheFullCostPerLine() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            COSTS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Understand the full cost per line
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Business mobile plans aren&apos;t listed online yet. When we quote,
            every part of the cost is shown.
          </p>
        </div>

        {/* Formula Equation Bar */}
        <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-[#ECEEF6] bg-white p-5 shadow-[0_8px_30px_rgba(17,24,60,0.03)] sm:p-6">
          <div className="flex flex-wrap items-center justify-center gap-3 text-center text-xs font-bold text-[#11183C] sm:text-sm">
            <div className="rounded-2xl bg-[#F4ECFC] px-4 py-3 text-[#7C3AED]">
              Plan per SIM &times; number of lines
            </div>
            <span className="text-base font-extrabold text-[#E11D74]">+</span>
            <div className="rounded-2xl bg-[#F4ECFC] px-4 py-3 text-[#7C3AED]">
              Account charges
            </div>
            <span className="text-base font-extrabold text-[#E11D74]">+</span>
            <div className="rounded-2xl bg-[#F4ECFC] px-4 py-3 text-[#7C3AED]">
              Add-ons
            </div>
            <span className="text-base font-extrabold text-[#E11D74]">+</span>
            <div className="rounded-2xl bg-[#F4ECFC] px-4 py-3 text-[#7C3AED]">
              Devices, if any
            </div>
            <span className="text-base font-extrabold text-[#E11D74]">=</span>
            <div className="rounded-2xl bg-gradient-to-r from-[#E11D74] to-[#7C3AED] px-4 py-3 text-white shadow-md">
              Monthly total (VAT shown)
            </div>
          </div>
        </div>

        {/* 4x2 Grid of Cost Breakdown Cards */}
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COST_BREAKDOWN_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="flex flex-col justify-between rounded-3xl border border-[#ECEEF6] bg-white p-6 shadow-[0_8px_30px_rgba(17,24,60,0.03)] transition-all hover:border-[#DCE1F0] hover:shadow-[0_12px_34px_rgba(17,24,60,0.06)]"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FCE8F1] text-[#E11D74]">
                    <Icon className="h-5 w-5" strokeWidth={2.25} />
                  </div>
                  <h3 className="mt-5 text-base font-extrabold tracking-tight text-[#11183C]">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#4B5563] sm:text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-dashed border-[#DCE1F0] bg-white p-6 shadow-[0_8px_30px_rgba(17,24,60,0.02)] sm:p-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E11D74] to-[#7C3AED] text-white shadow-md">
                <Scale className="h-6 w-6" strokeWidth={2.25} />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#11183C] sm:text-lg">
                  Business plans and the team cost calculator aren&apos;t
                  available online yet
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#4B5563] sm:text-sm">
                  We&apos;ll only show prices once they&apos;re confirmed and
                  current. Until then, our team will give you an itemised
                  proposal.
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <Link
                href="/business/contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(225,29,116,0.3)] transition-transform hover:scale-[1.01]"
              >
                <span>Get a business mobile proposal</span>
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
