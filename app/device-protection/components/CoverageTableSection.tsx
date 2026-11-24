import React from "react";
import { Info } from "lucide-react";
import SectionHeader from "./SectionHeader";

const ROWS = [
  {
    event: "Mechanical breakdown",
    description: "Whether faults after the warranty are included",
    status: "Check the policy",
  },
  {
    event: "Accidental damage",
    description: "Cracked screens, drops and spills — and the excess",
    status: "Check the policy",
  },
  {
    event: "Liquid damage",
    description: "Whether it’s separate from accidental damage",
    status: "Check the policy",
  },
  {
    event: "Theft",
    description: "Conditions such as police reports and time limits",
    status: "Check the policy",
  },
  {
    event: "Loss",
    description: "Often excluded or limited — read carefully",
    status: "Check the policy",
  },
  {
    event: "Cosmetic damage",
    description: "Scratches and dents are often excluded",
    status: "Check the policy",
  },
] as const;

export default function CoverageTableSection() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader eyebrow="Reading a policy" title="How to read a coverage table" />

        <div className="mt-8 overflow-hidden rounded-[22px] border border-[#E3E6F2] bg-white pt-6">
          <div className="mx-4 mb-3 rounded-xl border border-[#F3DDB0] bg-[#FFF8E8] px-4 py-2.5 text-xs font-semibold text-[#8A5A00] sm:text-[13.5px]">
            Example layout only — this is not a Zoiko product and shows no real cover.
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <caption className="sr-only">
                Example coverage table showing what a real device insurance policy should explain
              </caption>
              <thead>
                <tr className="bg-[#0A1446] text-white">
                  <th scope="col" className="w-[240px] px-[18px] py-3.5 text-[14.5px] font-bold">
                    Event
                  </th>
                  <th scope="col" className="px-[18px] py-3.5 text-[14.5px] font-bold">
                    What a real policy would show
                  </th>
                  <th scope="col" className="w-[240px] px-[18px] py-3.5 text-[14.5px] font-bold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map(({ event, description, status }, idx) => (
                  <tr key={event} className={idx < ROWS.length - 1 ? "border-b border-[#E3E6F2]" : ""}>
                    <th scope="row" className="bg-[#F5F8FF] px-[18px] py-[18px] text-[14.5px] font-bold text-[#0A1446]">
                      {event}
                    </th>
                    <td className="px-[18px] py-4 text-[14.5px] text-[#1E1B2E]">{description}</td>
                    <td className="px-[18px] py-3.5">
                      <span className="inline-flex items-center rounded-full border border-dashed border-[#B9C0D6] bg-[#F3F5FB] px-3 py-1 text-[12.5px] font-bold text-[#4A5275]">
                        {status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 flex items-start gap-3.5 rounded-[18px] bg-[#EEF2FF] px-6 py-5 text-sm leading-relaxed text-[#23307A] sm:text-[15px]">
          <Info className="mt-0.5 h-[22px] w-[22px] shrink-0 text-[#23307A]" strokeWidth={2} aria-hidden="true" />
          <p>
            In a real policy every row would say Covered, Not covered or Subject to conditions — always in words, never
            by colour or a tick alone.
          </p>
        </div>
      </div>
    </section>
  );
}
