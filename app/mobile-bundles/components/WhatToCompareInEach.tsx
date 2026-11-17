import React from "react";
import Link from "next/link";
import {
  Home,
  Smartphone,
  Zap,
  Wrench,
  Calendar,
  BarChart3,
  Cpu,
  Globe,
} from "lucide-react";

const HOME_BROADBAND_ITEMS = [
  {
    id: "connection-speed",
    title: "Connection & speed",
    description:
      "Full fibre, part fibre or other, and the speeds offered at your address.",
    icon: Zap,
  },
  {
    id: "set-up",
    title: "Set-up",
    description: "Router, installation and any engineer visit.",
    icon: Wrench,
  },
  {
    id: "contract",
    title: "Contract",
    description: "Length, monthly price and any price changes.",
    icon: Calendar,
  },
] as const;

const MOBILE_ITEMS = [
  {
    id: "data-allowance",
    title: "Data allowance",
    description: "How much each person uses on the go.",
    icon: BarChart3,
  },
  {
    id: "sim-esim",
    title: "SIM or eSIM",
    description: "And whether you need a new phone.",
    icon: Cpu,
  },
  {
    id: "roaming-term",
    title: "Roaming & term",
    description: "Roaming terms and contract length per plan.",
    icon: Globe,
  },
] as const;

export default function WhatToCompareInEach() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            TWO SERVICES
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            What to compare in each
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Broadband and mobile are separate services with their own terms.
          </p>
        </div>

        {/* Main Comparison Split Card */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 overflow-hidden rounded-3xl border border-[#ECEEF6] bg-white shadow-[0_12px_35px_rgba(17,24,60,0.06)] lg:grid-cols-12">
          {/* Left Side: Home Broadband (White background) */}
          <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-6">
            <div>
              {/* Header Icon + Title */}
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-white shadow-md">
                  <Home className="h-6 w-6" strokeWidth={2.25} />
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight text-[#11183C]">
                  Home broadband
                </h3>
              </div>

              {/* Items List */}
              <div className="mt-8 space-y-6">
                {HOME_BROADBAND_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FCE8F1] text-[#E11D74]">
                        <Icon className="h-4 w-4" strokeWidth={2.25} />
                      </div>
                      <div>
                        <h4 className="text-base font-extrabold tracking-tight text-[#11183C]">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-[#4B5563]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-10">
              <Link
                href="/broadband/plans"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(225,29,116,0.32)] transition-transform hover:scale-[1.01]"
              >
                Explore broadband plans
              </Link>
            </div>
          </div>

          {/* Right Side: Mobile (Dark gradient background) */}
          <div className="flex flex-col justify-between bg-gradient-to-br from-[#060C36] via-[#081040] to-[#2A1A6E] p-8 text-white sm:p-10 lg:col-span-6">
            <div>
              {/* Header Icon + Title */}
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-white shadow-md">
                  <Smartphone className="h-6 w-6" strokeWidth={2.25} />
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight text-white">
                  Mobile
                </h3>
              </div>

              {/* Items List */}
              <div className="mt-8 space-y-6">
                {MOBILE_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#F4297B]">
                        <Icon className="h-4 w-4" strokeWidth={2.25} />
                      </div>
                      <div>
                        <h4 className="text-base font-extrabold tracking-tight text-white">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-[#D1D5EB]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-10">
              <Link
                href="/mobile/plans"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(225,29,116,0.32)] transition-transform hover:scale-[1.01]"
              >
                View mobile plans
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Two Explanatory Footnotes */}
        <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-2xl border border-[#ECEEF6] bg-white p-5 shadow-[0_4px_16px_rgba(17,24,60,0.03)]">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#F4F5F9] text-[#11183C]">
              <Home className="h-4 w-4" strokeWidth={2.25} />
            </span>
            <p className="text-xs leading-relaxed text-[#4B5563] sm:text-sm">
              <strong className="font-bold text-[#11183C]">
                Broadband is address-based.
              </strong>{" "}
              What&apos;s available depends on your property.
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-[#ECEEF6] bg-white p-5 shadow-[0_4px_16px_rgba(17,24,60,0.03)]">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#F4F5F9] text-[#11183C]">
              <Smartphone className="h-4 w-4" strokeWidth={2.25} />
            </span>
            <p className="text-xs leading-relaxed text-[#4B5563] sm:text-sm">
              <strong className="font-bold text-[#11183C]">
                Mobile is location and device-based.
              </strong>{" "}
              Coverage and features depend on where you are and your phone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
