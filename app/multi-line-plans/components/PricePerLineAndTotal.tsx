import React from "react";
import SectionHeader from "./SectionHeader";

// Placeholder rows: real figures appear only from a confirmed offer.
const ROWS = [
  { line: "Line 1", plan: "[plan]", monthly: "£[x.xx]", term: "[term]" },
  { line: "Line 2", plan: "[plan]", monthly: "£[x.xx]", term: "[term]" },
] as const;

export default function PricePerLineAndTotal() {
  return (
    <section className="w-full bg-[#F7F7FA] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="Cost transparency"
          title="Price per line, and in total"
          subtitle="Numbers appear only from confirmed offers."
        />

        <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-2xl border border-[#ECEDF3] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left text-sm">
              <caption className="sr-only">Example of how your confirmed offer will show each line and the monthly total</caption>
              <thead className="bg-[#F8EEF6] text-xs font-semibold text-[#A3227F]">
                <tr>
                  {["Line", "Plan", "Monthly", "Term"].map((h) => (
                    <th key={h} scope="col" className="px-5 py-4">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ECEDF3] text-[#5F6275]">
                {ROWS.map((row) => (
                  <tr key={row.line}>
                    <th scope="row" className="px-5 py-5 font-normal">{row.line}</th>
                    <td className="px-5 py-5">{row.plan}</td>
                    <td className="px-5 py-5">{row.monthly}</td>
                    <td className="px-5 py-5">{row.term}</td>
                  </tr>
                ))}
                <tr>
                  <th scope="row" className="px-5 py-5 font-bold text-[#1C1A33]">Total each month</th>
                  <td className="px-5 py-5" />
                  <td className="px-5 py-5 font-bold text-[#A3227F]">£[x.xx]</td>
                  <td className="px-5 py-5">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
