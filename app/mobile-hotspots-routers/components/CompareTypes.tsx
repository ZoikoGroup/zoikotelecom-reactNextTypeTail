import React from "react";
import SectionHeader from "./SectionHeader";

const COLUMNS = [
  { label: "Portable hotspot", bg: "bg-[#7C3AED]" },
  { label: "4G / 5G router", bg: "bg-[#E11D74]" },
  { label: "Wi-Fi router", bg: "bg-[#FF7A59]" },
] as const;

const ROWS: { label: string; values: [string, string, string] }[] = [
  { label: "Internet source", values: ["Mobile data", "Mobile data", "Existing broadband"] },
  { label: "Portability", values: ["High", "Usually stays put", "Stays put"] },
  { label: "Power", values: ["Battery (model-dependent)", "Usually mains", "Mains"] },
  {
    label: "SIM type",
    values: ["Nano SIM or eSIM — check the model", "Nano SIM or eSIM — check the model", "Often none"],
  },
  { label: "Ethernet", values: ["Often none", "Some models", "Usually"] },
  {
    label: "Connected devices",
    values: [
      "Model limit — not a performance promise",
      "Model limit — not a performance promise",
      "Model limit — not a performance promise",
    ],
  },
  {
    label: "Advanced options",
    values: [
      "VPN, APN, bridge mode — only if the model’s specification confirms it",
      "VPN, dual WAN, external antenna — only if confirmed",
      "Mesh or guest networks — only if confirmed",
    ],
  },
];

export default function CompareTypes() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Compare"
          title="How the three types usually differ"
          subtitle="Typical differences only — exact features depend on the model."
        />

        <div className="mt-10 overflow-x-auto rounded-[24px] border border-[#E6E9F2] bg-white">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <caption className="sr-only">Comparison of portable hotspots, 4G / 5G routers and Wi-Fi routers</caption>
            <thead>
              <tr>
                <td className="w-[17%] bg-[#11183C]" />
                {COLUMNS.map(({ label, bg }) => (
                  <th key={label} scope="col" className={`px-5 py-4 text-sm font-bold text-white sm:text-base ${bg}`}>
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map(({ label, values }) => (
                <tr key={label} className="border-t border-[#EEF0F7]">
                  <th scope="row" className="bg-[#FFF6F3] px-5 py-4 text-sm font-bold text-[#11183C]">
                    {label}
                  </th>
                  {values.map((value, i) => (
                    <td key={i} className="px-5 py-4 leading-relaxed text-[#374063]">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
