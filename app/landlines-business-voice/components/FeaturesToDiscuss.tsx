import React from "react";
import { CircleDot, ListFilter, Plug, Smartphone, Users } from "lucide-react";
import SectionHeader from "./SectionHeader";

const FEATURES = [
  {
    id: "call-handling",
    title: "Call handling",
    text: "Call queues, welcome menus, ring groups and call forwarding.",
    icon: ListFilter,
  },
  {
    id: "team-collaboration",
    title: "Team collaboration",
    text: "Desk phones, apps and softphones, and shared numbers, where supported.",
    icon: Users,
  },
  {
    id: "integrations",
    title: "Integrations",
    text: "Connections to tools like your CRM, only where supported for your plan.",
    icon: Plug,
  },
] as const;

const RECORDING_CONTROLS = [
  "Telling callers they may be recorded",
  "How long recordings are kept",
  "Who can access them",
] as const;

function FeatureIcon({ icon: Icon }: { icon: typeof Users }) {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-white">
      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
    </span>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute right-5 top-5 rounded-full bg-[#FFF1DC] px-3 py-1 text-xs font-bold text-[#9A5B00]">
      {children}
    </span>
  );
}

const CARD = "relative rounded-3xl border border-[#E6E9F2] bg-white p-6 shadow-[0_10px_30px_rgba(17,24,60,0.06)] sm:p-7";

export default function FeaturesToDiscuss() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="Features"
          title="Features to discuss with our team"
          subtitle="Availability depends on the service and plan. Each one is confirmed before you agree."
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.id} className={CARD}>
              <Badge>Ask about</Badge>
              <FeatureIcon icon={feature.icon} />
              <h3 className="mt-5 text-lg font-extrabold text-[#11183C]">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5375]">{feature.text}</p>
            </div>
          ))}

          <div className="relative rounded-3xl border border-[#E4D3F5] bg-gradient-to-br from-[#FDEFF6] to-[#F1ECFE] p-6 sm:p-7 md:col-span-2">
            <Badge>Only if approved</Badge>
            <FeatureIcon icon={CircleDot} />
            <h3 className="mt-5 text-lg font-extrabold text-[#11183C]">
              Call recording — privacy first
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#4B5375]">
              Call recording is only offered where it’s been approved for a
              service, with clear controls for:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-[#4B5375]">
              {RECORDING_CONTROLS.map((control) => (
                <li key={control}>{control}</li>
              ))}
            </ul>
          </div>

          <div className={CARD}>
            <Badge>Ask about</Badge>
            <FeatureIcon icon={Smartphone} />
            <h3 className="mt-5 text-lg font-extrabold text-[#11183C]">Work from anywhere</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#4B5375]">
              Taking business calls on a mobile or laptop, depending on the service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
