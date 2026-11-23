import React from "react";
import SectionHeader from "./SectionHeader";

const COLUMNS = [
  { title: "Cases", className: "bg-[#7C3AED]" },
  { title: "Chargers & cables", className: "bg-[#E0157F]" },
  { title: "Audio", className: "bg-[#FF7A59]" },
] as const;

const ROWS = [
  { label: "Key question", values: ["Does it fit my exact model?", "Is it safe and compatible?", "How does it connect?"] },
  { label: "Check", values: ["Generation, camera, buttons", "Output, protocol, cable rating, plug", "Bluetooth, USB-C or 3.5 mm"] },
  { label: "Common myth", values: ["One case fits a whole range", "USB-C means fast charging", "Noise cancelling protects hearing"] },
  { label: "Evidence we’d need", values: ["Maker dimensions, tested fit", "Safety file, markings, tests", "Tested features and platform data"] },
] as const;

export default function CategoryComparison() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="At a glance"
          title="How the three categories compare"
          subtitle="Decisions to make — not products."
        />

        <div className="mt-10 overflow-x-auto rounded-[20px] border border-[#E6E9F2] shadow-[0_14px_34px_rgba(17,24,60,0.06)]">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm sm:text-[15px]">
            <caption className="sr-only">Comparison of cases, chargers and cables, and audio accessories</caption>
            <thead>
              <tr>
                <td className="w-[200px] bg-[#11183C]" />
                {COLUMNS.map(({ title, className }) => (
                  <th key={title} scope="col" className={`px-5 py-5 text-base font-bold text-white ${className}`}>
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map(({ label, values }) => (
                <tr key={label} className="border-t border-[#EEF0F7]">
                  <th scope="row" className="bg-[#FFF6F3] px-5 py-4 font-bold text-[#11183C]">
                    {label}
                  </th>
                  {values.map((value, i) => (
                    <td key={COLUMNS[i].title} className="bg-white px-5 py-4 text-[#2B3150]">
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
