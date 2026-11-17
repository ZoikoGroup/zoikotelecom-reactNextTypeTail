import React from "react";

const COMPARISON_ROWS = [
  {
    id: "closest-to-line-speed",
    label: "Closest to line speed",
    cable: "Usually yes",
    wifi: "Often lower",
  },
  {
    id: "affected-by-walls-distance",
    label: "Affected by walls & distance",
    cable: "No",
    wifi: "Yes",
  },
  {
    id: "affected-by-other-devices",
    label: "Affected by other devices",
    cable: "Less",
    wifi: "More",
  },
  {
    id: "best-for-testing-line",
    label: "Best for testing your line",
    cable: "Yes",
    wifi: "Note your room and distance",
  },
] as const;

export default function WiredVsWifi() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            WIRED VS WI-FI
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Why results differ
          </h2>
        </div>

        {/* Comparison Table Container */}
        <div className="mx-auto mt-12 max-w-[1300px] overflow-hidden rounded-3xl border border-[#ECEEF6] bg-white shadow-[0_8px_30px_rgba(17,24,60,0.04)]">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#11183C] text-white">
                  <th className="py-5 pl-8 pr-4 text-sm font-extrabold sm:pl-10">
                    {/* Empty Corner Header */}
                  </th>
                  <th className="py-5 px-4 text-sm font-extrabold">
                    Cable (Ethernet)
                  </th>
                  <th className="py-5 pl-4 pr-8 text-sm font-extrabold sm:pr-10">
                    Wi-Fi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EEF0F7]">
                {COMPARISON_ROWS.map((row) => (
                  <tr
                    key={row.id}
                    className="transition-colors hover:bg-[#FAFBFD]"
                  >
                    <td className="py-5 pl-8 pr-4 text-sm font-bold text-[#11183C] sm:pl-10">
                      {row.label}
                    </td>
                    <td className="py-5 px-4 text-sm text-[#4B5563]">
                      {row.cable}
                    </td>
                    <td className="py-5 pl-4 pr-8 text-sm text-[#4B5563] sm:pr-10">
                      {row.wifi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
