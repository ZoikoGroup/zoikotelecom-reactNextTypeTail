import React from "react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const COLUMNS = ["Digital business line", "Hosted team voice", "Numbering"] as const;

const ROWS = [
  {
    label: "Best for",
    values: ["A single site or a few lines", "Teams and multiple users", "Choosing or keeping a number"],
  },
  {
    label: "How you answer",
    values: ["A phone at your premises", "Desk phones, apps or softphones", "Depends on where calls are sent"],
  },
  {
    label: "Call features",
    values: ["Basic, depending on plan", "Wider range to ask about", "Routing options to ask about"],
  },
  {
    label: "Needs broadband",
    values: ["Yes", "Yes", "Depends on the service"],
  },
] as const;

const LEARN_MORE = [
  { label: "Digital lines", href: "/landlines" },
  { label: "Business solutions", href: "/business-solutions" },
  { label: "Virtual numbers", href: "/landlines-virtual-numbers" },
] as const;

export default function ServiceDifferences() {
  return (
    <section
      id="service-differences"
      className="w-full scroll-mt-24 bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader eyebrow="Side by side" title="Service differences at a glance" />

        <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-3xl border border-[#E6E9F2] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <caption className="sr-only">
                Digital business line, hosted team voice and numbering compared
              </caption>
              <thead className="bg-[#0B1445] text-white">
                <tr>
                  <td className="w-[19%] bg-[#060B33] px-5 py-5" />
                  {COLUMNS.map((col) => (
                    <th key={col} scope="col" className="px-5 py-5 font-bold">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EEF0F7]">
                {ROWS.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="px-5 py-5 font-bold text-[#11183C]">
                      {row.label}
                    </th>
                    {row.values.map((value, i) => (
                      <td key={i} className="px-5 py-5 text-[#4B5375]">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th scope="row" className="px-5 py-5 font-bold text-[#11183C]">
                    Learn more
                  </th>
                  {LEARN_MORE.map((link) => (
                    <td key={link.href} className="px-5 py-5">
                      <Link
                        href={link.href}
                        className="text-[#434A6E] underline underline-offset-4 hover:text-[#E11D74]"
                      >
                        {link.label}
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="px-5 pb-5 text-xs text-[#4B5375]">
            General guide only. Exact features, numbers and terms depend on the
            service you choose.
          </p>
        </div>
      </div>
    </section>
  );
}
