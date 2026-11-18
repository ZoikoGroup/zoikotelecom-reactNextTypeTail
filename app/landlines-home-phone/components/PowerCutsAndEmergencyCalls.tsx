import React from "react";
import { CircleAlert, Plug } from "lucide-react";
import SectionHeader from "./SectionHeader";

const POWER_CUT_TIPS = [
  "A charged mobile phone can be a useful backup, where you have signal.",
  "Some cordless phones need power even on traditional lines.",
  "If you rely on your landline, ask about a backup solution.",
] as const;

export default function PowerCutsAndEmergencyCalls() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader eyebrow="Staying safe" title="Power cuts and emergency calls" />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2A1033] via-[#4A1A44] to-[#8A1E5A] p-8 text-white sm:p-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(224,138,0,0.5),transparent_65%)]"
            />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#E08A00]">
              <Plug className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
            </span>
            <h3 className="relative mt-6 text-2xl font-extrabold">During a power cut</h3>
            <p className="relative mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
              Digital phone equipment usually needs mains power. When the power goes
              off, your router and home phone may stop working.
            </p>
            <ul className="relative mt-4 list-disc space-y-2 pl-5 text-sm text-white/85 sm:text-base">
              {POWER_CUT_TIPS.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border-2 border-[#F8C9CC] bg-white p-8 sm:p-9">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#DC2626] text-white">
              <CircleAlert className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-2xl font-extrabold text-[#8B1D1D]">Calling 999 or 112</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4B5375] sm:text-base">
              If you depend on your landline — for example, you have no mobile phone or
              no mobile signal at home, or use a telecare device — tell your provider.
            </p>
            <div className="mt-5 flex items-center gap-6 rounded-2xl bg-[#FDF2F2] p-5">
              <p className="shrink-0 text-4xl font-extrabold text-[#DC2626]">1 hr+</p>
              <p className="text-sm leading-relaxed text-[#8B1D1D]">
                Providers must offer eligible landline-dependent customers a free
                solution giving at least one hour of access to emergency services in a
                power cut.
              </p>
            </div>
            <p className="mt-5 text-sm text-[#4B5375]">
              Eligibility is assessed by your provider. Ask us about your circumstances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
