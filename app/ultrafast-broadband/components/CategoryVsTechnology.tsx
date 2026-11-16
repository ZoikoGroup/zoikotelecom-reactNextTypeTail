import React from "react";

const COMPARISON_DATA = [
  {
    technology: "Full fibre (FTTP)",
    howItWorks: "Fibre all the way to your home",
    ultrafastCapable: "Yes, on suitable plans",
    status: "positive",
  },
  {
    technology: "Cable (HFC)",
    howItWorks: "Fibre plus coaxial cable",
    ultrafastCapable: "Yes, on suitable plans",
    status: "positive",
  },
  {
    technology: "G.fast",
    howItWorks: "Faster copper from a nearby cabinet",
    ultrafastCapable: "Sometimes, close to the cabinet",
    status: "warning",
  },
  {
    technology: "Part fibre (FTTC)",
    howItWorks: "Fibre to cabinet, copper to home",
    ultrafastCapable: "Usually not",
    status: "neutral",
  },
] as const;

const STATUS_STYLES = {
  positive: "font-semibold text-[#16A34A]",
  warning: "font-semibold text-[#B45309]",
  neutral: "font-normal text-[#94A3B8]",
} as const;

export default function CategoryVsTechnology() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            CATEGORY VS TECHNOLOGY
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Ultrafast is a speed — not a type of Cable
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Several technologies can deliver ultrafast speeds, depending on the
            network and the plan.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#E6E9F2] bg-white shadow-[0_2px_10px_rgba(17,24,60,0.03)]">
          {/* Desktop Table View (No horizontal scroll) */}
          <div className="hidden md:block">
            <table className="w-full table-fixed border-collapse text-left">
              <thead>
                <tr className="border-b border-[#EEF0F7] bg-[#F1F3F9]">
                  <th
                    scope="col"
                    className="w-1/3 px-8 py-4 text-center text-sm font-bold text-[#11183C]"
                  >
                    Technology
                  </th>
                  <th
                    scope="col"
                    className="w-1/3 px-6 py-4 text-center text-sm font-bold text-[#11183C]"
                  >
                    How it works
                  </th>
                  <th
                    scope="col"
                    className="w-1/3 px-8 py-4 text-center text-sm font-bold text-[#11183C]"
                  >
                    Ultrafast capable?
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F3F9]">
                {COMPARISON_DATA.map((row) => (
                  <tr
                    key={row.technology}
                    className="transition-colors hover:bg-[#FAFBFD]"
                  >
                    <td className="px-8 py-5 text-left text-sm font-bold text-[#11183C]">
                      {row.technology}
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-[#4B5563]">
                      {row.howItWorks}
                    </td>
                    <td
                      className={`px-8 py-5 text-center text-sm ${
                        STATUS_STYLES[row.status]
                      }`}
                    >
                      {row.ultrafastCapable}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked View (Prevents horizontal scroll on narrow screens) */}
          <div className="divide-y divide-[#EEF0F7] md:hidden">
            {COMPARISON_DATA.map((row) => (
              <div key={row.technology} className="space-y-2.5 p-5">
                <div className="text-base font-bold text-[#11183C]">
                  {row.technology}
                </div>
                <div className="flex flex-col gap-1 text-sm">
                  <span className="font-semibold text-[#11183C]">
                    How it works:
                  </span>
                  <span className="text-[#4B5563]">{row.howItWorks}</span>
                </div>
                <div className="flex flex-col gap-1 text-sm">
                  <span className="font-semibold text-[#11183C]">
                    Ultrafast capable?:
                  </span>
                  <span className={STATUS_STYLES[row.status]}>
                    {row.ultrafastCapable}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
