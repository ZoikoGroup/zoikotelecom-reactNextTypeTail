import React from "react";

const CONNECTION_TYPES_DATA = [
  {
    type: "Full fibre",
    tag: "FTTP",
    howItReachesYou: "Fibre-optic cable all the way to your home.",
    whatToExpect: "Capable of the highest speeds, with faster uploads.",
    goodToKnow: "May need an engineer visit and a new socket.",
  },
  {
    type: "Part fibre",
    tag: "FTTC",
    howItReachesYou:
      "Fibre to the street cabinet, then copper phone line to your home.",
    whatToExpect: "Speeds drop the further you are from the cabinet.",
    goodToKnow: "Often uses your existing phone socket.",
  },
  {
    type: "Copper",
    tag: "ADSL",
    howItReachesYou: "Copper phone line all the way.",
    whatToExpect: "Slower speeds, suited to light use.",
    goodToKnow: "Being phased out in many areas.",
  },
] as const;

export default function ConnectionTypes() {
  return (
    <section className="w-full bg-[#FFFFFF] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            CONNECTION TYPES
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Full fibre, part fibre and copper
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#4B5563] sm:text-base">
            The label tells you how the connection reaches your home. We&apos;ll
            only label a plan once it&apos;s confirmed for your property.
          </p>
        </div>

        {/* Table Card Container */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#E6E9F2] bg-white shadow-[0_2px_10px_rgba(17,24,60,0.03)]">
          {/* Desktop Table View */}
          <div className="hidden md:block">
            <table className="w-full table-fixed border-collapse text-left">
              <thead>
                <tr className="border-b border-[#11183C] bg-[#0F0E3B] text-white">
                  <th
                    scope="col"
                    className="w-[22%] px-6 py-4 text-sm font-bold"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="w-[28%] px-6 py-4 text-sm font-bold"
                  >
                    How it reaches you
                  </th>
                  <th
                    scope="col"
                    className="w-[25%] px-6 py-4 text-sm font-bold"
                  >
                    What to expect
                  </th>
                  <th
                    scope="col"
                    className="w-[25%] px-6 py-4 text-sm font-bold"
                  >
                    Good to know
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F3F9]">
                {CONNECTION_TYPES_DATA.map((row) => (
                  <tr
                    key={row.type}
                    className="transition-colors hover:bg-[#FAFBFD]"
                  >
                    <td className="px-6 py-6 align-top">
                      <span className="inline-block rounded-md bg-[#FCE8F1] px-2 py-0.5 text-xs font-bold text-[#E11D74]">
                        {row.tag}
                      </span>
                      <div className="mt-1.5 text-sm font-bold text-[#11183C]">
                        {row.type}
                      </div>
                    </td>
                    <td className="px-6 py-6 align-top text-sm text-[#4B5563]">
                      {row.howItReachesYou}
                    </td>
                    <td className="px-6 py-6 align-top text-sm text-[#4B5563]">
                      {row.whatToExpect}
                    </td>
                    <td className="px-6 py-6 align-top text-sm text-[#4B5563]">
                      {row.goodToKnow}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked View */}
          <div className="divide-y divide-[#EEF0F7] md:hidden">
            {CONNECTION_TYPES_DATA.map((row) => (
              <div key={row.type} className="space-y-4 p-5">
                <div>
                  <span className="inline-block rounded-md bg-[#FCE8F1] px-2 py-0.5 text-xs font-bold text-[#E11D74]">
                    {row.tag}
                  </span>
                  <div className="mt-1 text-base font-bold text-[#11183C]">
                    {row.type}
                  </div>
                </div>

                <div className="flex flex-col gap-1 text-sm">
                  <span className="font-semibold text-[#11183C]">
                    How it reaches you:
                  </span>
                  <span className="text-[#4B5563]">{row.howItReachesYou}</span>
                </div>

                <div className="flex flex-col gap-1 text-sm">
                  <span className="font-semibold text-[#11183C]">
                    What to expect:
                  </span>
                  <span className="text-[#4B5563]">{row.whatToExpect}</span>
                </div>

                <div className="flex flex-col gap-1 text-sm">
                  <span className="font-semibold text-[#11183C]">
                    Good to know:
                  </span>
                  <span className="text-[#4B5563]">{row.goodToKnow}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
