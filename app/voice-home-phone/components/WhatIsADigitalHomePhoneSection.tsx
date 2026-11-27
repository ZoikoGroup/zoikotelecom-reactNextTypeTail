import {
  ChevronRight,
  Globe,
  Phone,
  Power,
  Server,
  Wifi,
  type LucideIcon,
} from "lucide-react";

const sectionContent = {
  id: "how-it-works",
  step: "01",
  eyebrow: "HOW IT WORKS",
  headingPrefix: "What is a ",
  headingAccent: "digital home phone?",
  description:
    "A home phone service delivered over a digital connection. The exact equipment and connection needed depend on the service.",
} as const;

interface RequirementCardItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const requirementCards: readonly RequirementCardItem[] = [
  {
    id: "needs-power",
    title: "Needs power",
    description: "Equipment must be switched on",
    icon: Power,
  },
  {
    id: "needs-a-connection",
    title: "Needs a connection",
    description: "Calls travel over the internet",
    icon: Wifi,
  },
] as const;

interface FlowStageItem {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  iconBoxClass: string;
}

const flowStages: readonly FlowStageItem[] = [
  {
    id: "your-handset",
    title: "Your handset",
    subtitle: "If compatible",
    icon: Phone,
    iconBoxClass: "bg-[#fce7f3] text-[#db2777]",
  },
  {
    id: "router-or-adapter",
    title: "Router or adapter",
    subtitle: "Needs power",
    icon: Server,
    iconBoxClass: "bg-[#f3e8ff] text-[#7c3aed]",
  },
  {
    id: "digital-network",
    title: "Digital network",
    subtitle: "Needs a connection",
    icon: Globe,
    iconBoxClass: "bg-[#e8f0fe] text-[#2563eb]",
  },
] as const;

export default function WhatIsADigitalHomePhoneSection() {
  return (
    <section
      id={sectionContent.id}
      className="w-full bg-[#FFFFFF] px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Left column: Eyebrow, heading, description & amber requirement cards */}
        <div className="lg:col-span-6">
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="italic text-[#e093b9]">{sectionContent.step}</span>
            <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold leading-[1.1] tracking-[-0.025em] text-[#0c1438] sm:text-[38px]">
            {sectionContent.headingPrefix}
            <span className="text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>

          <p className="mt-3 max-w-[490px] text-[12.5px] leading-[1.58] text-[#4b5563] sm:text-[13px]">
            {sectionContent.description}
          </p>

          {/* Bottom two soft amber callout cards */}
          <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {requirementCards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="flex items-center gap-3 rounded-2xl bg-[#fbf1df] px-4 py-3.5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ffc25c] text-[#1e0836] shadow-[0_4px_12px_rgba(255,194,92,0.28)]">
                    <Icon className="h-4 w-4 stroke-[2.2]" aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="text-[12.5px] font-extrabold leading-snug text-[#0c1438]">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[10.5px] leading-[1.4] text-[#4b5563]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right column: Three-stage signal flow diagram */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl border border-[#eaecf4] bg-white px-6 py-9 shadow-[0_10px_28px_rgba(15,23,42,0.03)] sm:px-8 sm:py-10">
            <div className="flex flex-col items-center justify-between gap-5 sm:flex-row sm:items-start sm:gap-2">
              {flowStages.map((stage, index) => {
                const Icon = stage.icon;
                const hasNext = index < flowStages.length - 1;

                return (
                  <div
                    key={stage.id}
                    className="flex flex-1 flex-col items-center sm:flex-row sm:items-start"
                  >
                    <div className="flex flex-1 flex-col items-center text-center">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stage.iconBoxClass}`}
                      >
                        <Icon
                          className="h-5 w-5 stroke-[2]"
                          aria-hidden="true"
                        />
                      </div>

                      <h3 className="mt-3 text-[12px] font-extrabold leading-snug text-[#0c1438]">
                        {stage.title}
                      </h3>

                      <p className="mt-0.5 text-[10.5px] leading-[1.4] text-[#64748b]">
                        {stage.subtitle}
                      </p>
                    </div>

                    {hasNext && (
                      <ChevronRight
                        className="mt-2 h-4 w-4 shrink-0 rotate-90 stroke-[2.2] text-[#e11d74] sm:mt-4 sm:rotate-0"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
