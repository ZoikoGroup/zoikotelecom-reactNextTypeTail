import React from "react";
import { Bell, Eye } from "lucide-react";
import SectionHeader from "./SectionHeader";

const STAGES = [
  { title: "Install", text: "Fitted on site" },
  { title: "Test", text: "Short bursts of data" },
  { title: "Deploy", text: "Rolled out in batches" },
  { title: "Active", text: "Normal reporting" },
  { title: "Paused", text: "Suspension terms apply" },
  { title: "Replace", text: "Swap SIM or device" },
  { title: "Retire", text: "End service cleanly" },
] as const;

const RISKS = [
  { title: "Signal & outages", text: "Devices may queue or lose data." },
  { title: "Usage drift", text: "Firmware or settings can change data use over time." },
  { title: "Duplicate messages", text: "Retries can send the same data twice." },
  { title: "Roaming changes", text: "Partner networks and rules can change." },
  { title: "Bill shock", text: "Unplanned bursts can exceed allowances." },
] as const;

export default function DeviceLifecycle() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Device lifecycle"
          title="Data needs change across a device’s life"
          subtitle="Each stage may carry different commercial status — confirmed in your contract."
          className="max-w-3xl"
        />

        <ol className="relative mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-7">
          <span
            aria-hidden="true"
            className="absolute left-[7%] right-[7%] top-[60px] hidden h-1 rounded-full bg-gradient-to-r from-[#3B6CF6] via-[#8E37E8] to-[#E11D74] lg:block"
          />
          {STAGES.map(({ title, text }, i) => (
            <li key={title} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 flex h-[60px] w-[60px] items-center justify-center rounded-full border-[3px] border-[#E4E1F5] bg-white text-base font-bold text-[#11183C]">
                {i + 1}
              </span>
              <span className="mt-5 block text-base font-bold text-[#11183C]">{title}</span>
              <span className="mt-0.5 block text-xs text-[#4B5375] sm:text-sm">{text}</span>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex items-start gap-4 rounded-[20px] border border-[#F6E3B4] bg-[#FFF8E8] p-6">
            <Eye className="mt-0.5 h-6 w-6 shrink-0 text-[#B7791F]" strokeWidth={2} aria-hidden="true" />
            <div>
              <h3 className="text-lg font-bold text-[#11183C]">No usage portal yet</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#2B3150] sm:text-base">
                There’s no Zoiko device-level or pooled usage view. This page shows no
                customer usage or billing information.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-[20px] border border-[#F7D1D1] bg-[#FFF3F3] p-6">
            <Bell className="mt-0.5 h-6 w-6 shrink-0 text-[#C0392B]" strokeWidth={2} aria-hidden="true" />
            <div>
              <h3 className="text-lg font-bold text-[#11183C]">Billing summaries aren’t alerts</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#2B3150] sm:text-base">
                Network usage records aren’t sensor telemetry, and they can arrive later than
                the traffic itself. No alert delivery is assured.
              </p>
            </div>
          </div>
        </div>

        <h3 className="mt-10 text-xl font-extrabold text-[#11183C] sm:text-2xl">Risks to plan for</h3>
        <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {RISKS.map(({ title, text }) => (
            <li key={title} className="rounded-[18px] border-2 border-t-4 border-[#E8A33D] bg-white p-5">
              <span className="block text-base font-bold text-[#11183C]">{title}</span>
              <span className="mt-1.5 block text-sm leading-relaxed text-[#4B5375]">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
