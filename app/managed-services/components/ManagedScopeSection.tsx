"use client";

import React from "react";

type ScopeRow = {
  readonly id: string;
  readonly area: string;
  readonly discussText: string;
  readonly discussLinkLabel?: string;
  readonly signedTermsText: string;
  readonly notIncludedText: string;
};

const SCOPE_ROWS: readonly ScopeRow[] = [
  {
    id: "business-mobile",
    area: "Business mobile",
    discussText: "Activation coordination and a support contact",
    signedTermsText: "SIM lifecycle, billing and fault desk",
    notIncludedText: "Device management, remote wipe, 24/7 cover",
  },
  {
    id: "broadband-fibre",
    area: "Broadband & fibre",
    discussText: "Installation and fault coordination",
    signedTermsText: "Case numbers, engineer booking, repair terms",
    notIncludedText: "Guaranteed repair times or speeds",
  },
  {
    id: "voice-numbers",
    area: "Voice & numbers",
    discussText: "Onboarding and porting coordination",
    signedTermsText: "Number inventory, port scheduling, routing changes",
    notIncludedText: "Instant porting or automatic backup",
  },
  {
    id: "multi-site",
    area: "Multi-site",
    discussText: "One contact for several sites",
    signedTermsText: "Delegated access to site and case information",
    notIncludedText: "Live monitoring or a single group bill",
  },
  {
    id: "it-devices",
    area: "IT & devices",
    discussText: "We can note your interest",
    signedTermsText: "Only with a separately agreed service",
    notIncludedText: "Remote desktop, patching, endpoint backup",
  },
  {
    id: "security-operations",
    area: "Security operations",
    discussText: "See ",
    discussLinkLabel: "Security & Compliance",
    signedTermsText: "Only with signed, separate services",
    notIncludedText: "Threat monitoring or a security operations centre",
  },
  {
    id: "cloud-recovery",
    area: "Cloud & recovery",
    discussText: "See ",
    discussLinkLabel: "Cloud & Communication Tools",
    signedTermsText: "Only with an approved cloud service",
    notIncludedText: "Backups, failover or replication",
  },
];

export default function ManagedScopeSection() {
  return (
    <section
      aria-labelledby="scope-heading"
      className="w-full bg-[#F7F8FC] py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-11 sm:mb-12">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#565B75] mb-2.5">
            SCOPE
          </p>
          <h2
            id="scope-heading"
            className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B] mb-3"
          >
            What &ldquo;managed&rdquo; may and may not mean
          </h2>
          <p className="text-[14px] sm:text-[15px] leading-[1.58] text-[#5B6078] font-normal">
            We&rsquo;re clear about what&rsquo;s included — and what
            isn&rsquo;t, unless separately agreed.
          </p>
        </div>

        <div className="overflow-x-auto rounded-[16px] bg-white border border-[#E5E8F2] shadow-[0_12px_32px_rgba(15,23,66,0.05)]">
          <table className="w-full min-w-[780px] border-collapse text-left">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="w-[18%] bg-[#080C32] px-5 py-3.5 text-[12px] font-bold tracking-[0.01em] text-white"
                >
                  Area
                </th>
                <th
                  scope="col"
                  className="w-[27%] bg-[#137A2A] px-5 py-3.5 text-[12px] font-bold tracking-[0.01em] text-white"
                >
                  What we can discuss
                </th>
                <th
                  scope="col"
                  className="w-[27%] bg-[#2B37C9] px-5 py-3.5 text-[12px] font-bold tracking-[0.01em] text-white"
                >
                  Only with signed terms
                </th>
                <th
                  scope="col"
                  className="w-[28%] bg-[#AA1E14] px-5 py-3.5 text-[12px] font-bold tracking-[0.01em] text-white"
                >
                  Not included by default
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ECEEF6] text-[12.5px] leading-[1.48]">
              {SCOPE_ROWS.map((row) => (
                <tr key={row.id} className="align-top">
                  <td className="bg-white px-5 py-4 font-bold text-[#090E34] whitespace-nowrap">
                    {row.area}
                  </td>
                  <td className="bg-[#F4FAF5] px-5 py-4 text-[#2A332D]">
                    {row.id === "security-operations" && (
                      <span>
                        See{" "}
                        <a
                          href="#"
                          className="font-semibold text-[#E61E88] underline decoration-[#E61E88] underline-offset-2 hover:text-[#C41472] transition-colors"
                        >
                          Security &amp; Compliance
                        </a>
                      </span>
                    )}
                    {row.id === "cloud-recovery" && (
                      <span>
                        See{" "}
                        <a
                          href="#"
                          className="font-semibold text-[#E61E88] underline decoration-[#E61E88] underline-offset-2 hover:text-[#C41472] transition-colors"
                        >
                          Cloud &amp; Communication Tools
                        </a>
                      </span>
                    )}
                    {row.id !== "security-operations" &&
                      row.id !== "cloud-recovery" &&
                      row.discussText}
                  </td>
                  <td className="bg-[#F4F6FF] px-5 py-4 text-[#2B324A]">
                    {row.signedTermsText}
                  </td>
                  <td className="bg-[#FDF5F4] px-5 py-4 text-[#3B3334]">
                    {row.notIncludedText}
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
