import React from "react";
import { Check, RadioTower, User } from "lucide-react";
import SectionHeader from "./SectionHeader";

const SCOPES = [
  {
    title: "What we can discuss",
    icon: RadioTower,
    iconClass: "text-[#12936F]",
    border: "border-[#12936F]",
    items: [
      "Connectivity support for your devices",
      "Coverage, data and roaming requirements",
      "Resilience options for the connection",
    ],
  },
  {
    title: "Your team or integrator",
    icon: User,
    iconClass: "text-[#8E37E8]",
    border: "border-[#8E37E8]",
    items: [
      "Incident response and escalation",
      "Deciding what a reading means",
      "Physical site visits and repairs",
    ],
  },
] as const;

const ALERT_STEPS = [
  { title: "Threshold", text: "An approved rule on calibrated units" },
  { title: "Evaluate", text: "Is the reading fresh and valid?" },
  { title: "Deduplicate", text: "No repeat alerts on retries" },
  { title: "Deliver", text: "To a verified, opted-in contact" },
  { title: "Acknowledge", text: "By an authorised person" },
  { title: "Resolve", text: "Only when the asset is really back to normal" },
] as const;

export default function ResponseScope() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Response scope"
          title="Who responds when something happens?"
          className="max-w-3xl"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {SCOPES.map(({ title, icon: Icon, iconClass, border, items }) => (
            <div
              key={title}
              className={`rounded-[22px] border border-t-4 ${border} bg-white p-6 sm:p-7`}
            >
              <h3 className="flex items-center gap-2.5 text-xl font-bold text-[#11183C]">
                <Icon className={`h-5 w-5 ${iconClass}`} strokeWidth={2} aria-hidden="true" />
                {title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-lg bg-[#F7F8FC] px-4 py-2.5 text-sm text-[#2B3150]"
                  >
                    <Check className="h-4 w-4 shrink-0 text-[#E11D74]" strokeWidth={2.5} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[22px] bg-[#F0F2F8] p-6 sm:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#11183C]">
                How alerts could work in a future service
              </h3>
              <p className="mt-1 text-sm text-[#2B3150]">
                Shown to explain the steps involved. There’s no Zoiko alerting
                service today.
              </p>
            </div>
            <span className="w-fit shrink-0 rounded-full border-2 border-dashed border-[#B8BED4] bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#4B5375]">
              Future · Not available
            </span>
          </div>

          <ol className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {ALERT_STEPS.map(({ title, text }) => (
              <li
                key={title}
                className="rounded-xl border-2 border-dashed border-[#DCE0EC] bg-white px-4 py-5"
              >
                <span className="block text-sm font-bold text-[#11183C] sm:text-base">{title}</span>
                <span className="mt-1 block text-xs leading-relaxed text-[#6B7194] sm:text-sm">{text}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
