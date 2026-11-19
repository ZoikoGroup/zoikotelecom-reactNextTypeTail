"use client";

import React from "react";

interface ResponsibilityRow {
  readonly id: string;
  readonly area: string;
  readonly zoikoTelecom: string;
  readonly wholesaleProviders: string;
  readonly yourBusiness: string;
}

const RESPONSIBILITY_ROWS = [
  {
    id: "account-service-changes",
    area: "Account & service changes",
    zoikoTelecom: "Verifying requests before changes",
    wholesaleProviders: "Carrying out network changes",
    yourBusiness: "Naming who can authorise changes",
  },
  {
    id: "network-infrastructure",
    area: "Network infrastructure",
    zoikoTelecom: "Coordinating with suppliers",
    wholesaleProviders: "Core network and access lines",
    yourBusiness: "—",
  },
  {
    id: "premises-equipment",
    area: "Premises equipment",
    zoikoTelecom: "Supplied equipment, where agreed",
    wholesaleProviders: "Line to your premises",
    yourBusiness: "Wi-Fi settings, devices and passwords",
  },
  {
    id: "hosted-voice-999",
    area: "Hosted voice & 999",
    zoikoTelecom: "Service set-up and registered locations",
    wholesaleProviders: "Emergency call routing",
    yourBusiness: "Keeping locations up to date",
  },
  {
    id: "personal-data",
    area: "Personal data",
    zoikoTelecom: "Handling data you share with us",
    wholesaleProviders: "Their own processing, under contract",
    yourBusiness: "Your staff and customer data",
  },
  {
    id: "staff-devices",
    area: "Staff & devices",
    zoikoTelecom: "—",
    wholesaleProviders: "—",
    yourBusiness: "Training, phones, laptops and access",
  },
] as const satisfies readonly ResponsibilityRow[];

export default function SharedResponsibilityTable() {
  return (
    <section
      aria-labelledby="shared-responsibility-heading"
      className="w-full bg-[#F5F6FB] py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[740px] mx-auto mb-11 sm:mb-12">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#565B75] mb-2.5">
            SHARED RESPONSIBILITY
          </p>
          <h2
            id="shared-responsibility-heading"
            className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B] mb-3"
          >
            Know who is responsible for each part of your connection
          </h2>
          <p className="text-[14px] sm:text-[15px] leading-[1.58] text-[#5B6078] font-normal">
            An example allocation. The actual split must be confirmed in your
            contract — nothing here transfers liability.
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-[18px] bg-white border border-[#E7E9F2] shadow-[0_12px_32px_rgba(15,23,66,0.05)]">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="bg-[#06092A] text-white">
                <th
                  scope="col"
                  className="py-4 px-5 text-[12.5px] font-bold tracking-[-0.01em] w-[21%]"
                >
                  Area
                </th>
                <th scope="col" className="py-4 px-5 w-[26.33%]">
                  <div className="flex items-center gap-2 text-[12.5px] font-bold leading-[1.25] text-white">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 shrink-0 rounded-full bg-[#E61E88]"
                    />
                    <span>Zoiko Telecom</span>
                  </div>
                  <span className="mt-1 block pl-4 text-[11px] font-normal text-[#B8BFD9]">
                    Your service provider
                  </span>
                </th>
                <th scope="col" className="py-4 px-5 w-[26.33%]">
                  <div className="flex items-center gap-2 text-[12.5px] font-bold leading-[1.25] text-white">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 shrink-0 rounded-full bg-[#3B82F6]"
                    />
                    <span>Wholesale providers</span>
                  </div>
                  <span className="mt-1 block pl-4 text-[11px] font-normal text-[#B8BFD9]">
                    e.g. BT Wholesale, EE
                  </span>
                </th>
                <th scope="col" className="py-4 px-5 w-[26.33%]">
                  <div className="flex items-center gap-2 text-[12.5px] font-bold leading-[1.25] text-white">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 shrink-0 rounded-full bg-[#22C55E]"
                    />
                    <span>Your business</span>
                  </div>
                  <span className="mt-1 block pl-4 text-[11px] font-normal text-[#B8BFD9]">
                    Customer
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ECEEF5] text-[12.5px] sm:text-[13px] leading-[1.5]">
              {RESPONSIBILITY_ROWS.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-[#FAF9FE] transition-colors"
                >
                  <th
                    scope="row"
                    className="py-4 px-5 font-bold text-[#070B2B] align-top"
                  >
                    {row.area}
                  </th>
                  <td className="py-4 px-5 text-[#4B5068] align-top">
                    {row.zoikoTelecom}
                  </td>
                  <td className="py-4 px-5 text-[#4B5068] align-top">
                    {row.wholesaleProviders}
                  </td>
                  <td className="py-4 px-5 text-[#4B5068] align-top">
                    {row.yourBusiness}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
