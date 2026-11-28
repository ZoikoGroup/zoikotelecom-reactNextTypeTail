import { Eye, Phone, Shield, type LucideIcon } from "lucide-react";

const sectionContent = {
  id: "safety",
  step: "03",
  eyebrow: "SAFETY",
  headingPrefix: "What features ",
  headingAccent: "never change",
} as const;

interface SafetyFeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const safetyFeatures: readonly SafetyFeatureItem[] = [
  {
    title: "Emergency calls aren’t barred",
    description: "Call barring always excludes emergency numbers.",
    icon: Phone,
  },
  {
    title: "Emergency identity stays",
    description:
      "Changing caller ID doesn’t affect what emergency services receive.",
    icon: Eye,
  },
  {
    title: "Emergency rules come first",
    description: "Business routing rules can’t override the emergency policy.",
    icon: Shield,
  },
] as const;

export default function WhatFeaturesNeverChangeSection() {
  return (
    <section
      id={sectionContent.id}
      className="w-full bg-[#FFFFFF] px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Centered section header */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="italic text-[#e093b9]">{sectionContent.step}</span>
            <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold tracking-[-0.025em] text-[#0c1438] sm:text-[36px]">
            {sectionContent.headingPrefix}
            <span className="text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>
        </div>

        {/* Outer dark rounded container */}
        <div className="mt-7 rounded-3xl bg-[#120428] p-5 shadow-[0_18px_42px_rgba(18,4,40,0.22)] sm:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {safetyFeatures.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#1e0d3d] p-5 text-left"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#23d38b] text-[#0b2e1e]">
                    <Icon className="h-4 w-4 stroke-[2.2]" aria-hidden="true" />
                  </div>

                  <h3 className="mt-3.5 text-[13.5px] font-extrabold leading-snug text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[11px] leading-[1.52] text-white/70">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
