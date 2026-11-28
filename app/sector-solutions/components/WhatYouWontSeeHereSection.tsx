import {
  Building,
  Clock,
  FileText,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const sectionContent = {
  id: "straight-talking",
  step: "03",
  eyebrow: "STRAIGHT TALKING",
  headingPrefix: "What you ",
  headingAccent: "won’t see",
  headingSuffix: " here",
} as const;

interface ExcludedItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const excludedItems: readonly ExcludedItem[] = [
  {
    title: "Client logos",
    description: "No logos or named clients without permission and evidence.",
    icon: Building,
  },
  {
    title: "Case studies",
    description: "No invented stories or testimonials.",
    icon: FileText,
  },
  {
    title: "Certifications",
    description: "No compliance badges without reviewed evidence.",
    icon: ShieldCheck,
  },
  {
    title: "Uptime figures",
    description: "No guarantees outside a signed agreement.",
    icon: Clock,
  },
] as const;

export default function WhatYouWontSeeHereSection() {
  return (
    <section
      id={sectionContent.id}
      className="w-full bg-[#f5f6fb] px-4 py-14 sm:px-8 lg:px-12"
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
            {sectionContent.headingSuffix}
          </h2>
        </div>

        {/* Four-column cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {excludedItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="flex flex-col items-center rounded-3xl border border-[#eaecf4] bg-white px-5 py-7 text-center shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
              >
                {/* Soft rose circular badge with icon + diagonal slash */}
                <div
                  className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#fde8ef] text-[#e11d74]"
                  aria-hidden="true"
                >
                  <Icon className="h-[18px] w-[18px] stroke-[2]" />
                  <span className="h-6 w-[1.75px] rotate-30 rounded-full bg-[#e11d74]" />
                </div>

                <h3 className="mt-4 text-[13.5px] font-extrabold leading-snug text-[#0c1438]">
                  {item.title}
                </h3>

                <p className="mt-1.5 max-w-[190px] text-[11px] leading-[1.52] text-[#4b5563]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
