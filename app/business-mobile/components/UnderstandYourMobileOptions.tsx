import React from "react";
import { User, Users } from "lucide-react";

const MOBILE_OPTIONS_COLUMNS = [
  {
    id: "sim-only",
    title: "SIM only",
    subtitle: "Use your own phones",
    goodFor: "Teams with compatible phones",
    whatYouPayFor: "Monthly plan per SIM",
    thingsToCheck: "Allowances, term, VAT",
    availability: "Confirm with team",
    availabilityType: "badge",
  },
  {
    id: "device-sim",
    title: "Device + SIM",
    subtitle: "Phones supplied with plans",
    goodFor: "Teams needing new handsets",
    whatYouPayFor: "Plan plus device cost",
    thingsToCheck: "Device price, stock, warranty",
    availability: "Confirm with team",
    availabilityType: "badge",
  },
  {
    id: "esim",
    title: "eSIM",
    subtitle: "A digital SIM",
    goodFor: "Supported phones, quick setup",
    whatYouPayFor: "Monthly plan per eSIM",
    thingsToCheck: "Device compatibility, secure delivery",
    availability: "Eligible plans only",
    availabilityType: "badge-muted",
  },
  {
    id: "data-sim",
    title: "Data-only SIM",
    subtitle: "Tablets and routers",
    goodFor: "Tablets, laptops or routers",
    whatYouPayFor: "Data plan per SIM",
    thingsToCheck: "Usage limits and tethering",
    availability: "Confirm with team",
    availabilityType: "badge",
  },
] as const;

export default function UnderstandYourMobileOptions() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            WAYS TO BUY
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Understand your mobile options
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            What each option means. We&apos;ll confirm which are available for
            your business.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="mx-auto mt-12 overflow-hidden rounded-3xl border border-[#ECEEF6] bg-white shadow-[0_8px_30px_rgba(17,24,60,0.04)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F2EDFB]/60 border-b border-[#ECEEF6]">
                  <th className="p-5 sm:p-6 w-1/5"></th>
                  {MOBILE_OPTIONS_COLUMNS.map((col) => (
                    <th key={col.id} className="p-5 sm:p-6 w-1/5 align-top">
                      <h3 className="text-base font-extrabold text-[#11183C]">
                        {col.title}
                      </h3>
                      <p className="mt-0.5 text-xs font-normal text-[#4B5563]">
                        {col.subtitle}
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ECEEF6] text-sm">
                <tr>
                  <td className="p-5 sm:p-6 font-extrabold text-[#11183C]">
                    Good for
                  </td>
                  {MOBILE_OPTIONS_COLUMNS.map((col) => (
                    <td key={col.id} className="p-5 sm:p-6 text-[#4B5563]">
                      {col.goodFor}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-5 sm:p-6 font-extrabold text-[#11183C]">
                    What you pay for
                  </td>
                  {MOBILE_OPTIONS_COLUMNS.map((col) => (
                    <td key={col.id} className="p-5 sm:p-6 text-[#4B5563]">
                      {col.whatYouPayFor}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-5 sm:p-6 font-extrabold text-[#11183C]">
                    Things to check
                  </td>
                  {MOBILE_OPTIONS_COLUMNS.map((col) => (
                    <td key={col.id} className="p-5 sm:p-6 text-[#4B5563]">
                      {col.thingsToCheck}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-5 sm:p-6 font-extrabold text-[#11183C]">
                    Availability
                  </td>
                  {MOBILE_OPTIONS_COLUMNS.map((col) => (
                    <td key={col.id} className="p-5 sm:p-6">
                      <span className="inline-flex rounded-full bg-[#FEF3C7] px-3 py-1 text-xs font-bold text-[#D97706]">
                        {col.availability}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Two Cards Grid (Individual & Shared Allowances) */}
        <div className="mx-auto mt-6 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
          {/* Individual Allowances Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#ECEEF6] bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-8">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-white shadow-md">
                <User className="h-6 w-6" strokeWidth={2.25} />
              </div>
              <h3 className="mt-6 text-xl font-extrabold tracking-tight text-[#11183C]">
                Individual allowances
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#4B5563]">
                Each SIM has its own data, minutes and texts. Easy to understand
                per person.
              </p>
            </div>
          </div>

          {/* Shared Allowances Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#ECEEF6] bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-8">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-white shadow-md">
                <Users className="h-6 w-6" strokeWidth={2.25} />
              </div>
              <h3 className="mt-6 text-xl font-extrabold tracking-tight text-[#11183C]">
                Shared allowances
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#4B5563]">
                One pool shared across the team — only where a plan genuinely
                offers it. We won&apos;t assume shared data or volume discounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
