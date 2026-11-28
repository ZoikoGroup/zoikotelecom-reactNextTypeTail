import {
  FileText,
  Headphones,
  MessageSquare,
  Search,
  Settings,
  type LucideIcon,
} from "lucide-react";

const sectionContent = {
  step: "03",
  eyebrow: "THE JOURNEY",
  headingPrefix: "How an engagement ",
  headingAccent: "runs",
  description:
    "Each stage is separate. A response target is different from a restoration target.",
} as const;

interface JourneyStageItem {
  title: string;
  description: string;
  badge: string;
  badgeClass: string;
  icon: LucideIcon;
  iconBgClass: string;
}

const journeyStages: readonly JourneyStageItem[] = [
  {
    title: "Enquire",
    description: "Tell us what you need — no order is created.",
    badge: "OPEN NOW",
    badgeClass: "bg-[#e7f8ef] text-[#15803d]",
    icon: MessageSquare,
    iconBgClass: "bg-[#14b8a6]",
  },
  {
    title: "Assess",
    description: "Site-by-site review with an engineer.",
    badge: "ASSISTED",
    badgeClass: "bg-[#eef0f7] text-[#475569]",
    icon: Search,
    iconBgClass: "bg-[#3b82f6]",
  },
  {
    title: "Reviewed quote",
    description:
      "Charges, scope, exclusions, and response vs restoration targets.",
    badge: "IN WRITING",
    badgeClass: "bg-[#eef0f7] text-[#475569]",
    icon: FileText,
    iconBgClass: "bg-[#7c3aed]",
  },
  {
    title: "Implement",
    description: "Survey, install and test with approved change control.",
    badge: "PLANNED WITH YOU",
    badgeClass: "bg-[#eef0f7] text-[#475569]",
    icon: Settings,
    iconBgClass: "bg-[#a21caf]",
  },
  {
    title: "Support",
    description: "Scoped support for accepted services.",
    badge: "PER AGREEMENT",
    badgeClass: "bg-[#eef0f7] text-[#475569]",
    icon: Headphones,
    iconBgClass: "bg-[#e11d74]",
  },
] as const;

export default function HowAnEngagementRunsSection() {
  return (
    <section
      id="the-journey"
      className="w-full bg-white px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Centered section header */}
        <div className="mx-auto max-w-[680px] text-center">
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

          <p className="mt-2 text-[13.5px] leading-[1.6] text-[#4b5563] sm:text-sm">
            {sectionContent.description}
          </p>
        </div>

        {/* Five horizontal journey cards with subtle connecting line */}
        <div className="relative mt-9">
          <div
            className="pointer-events-none absolute top-[54px] right-[10%] left-[10%] hidden h-[2px] bg-gradient-to-r from-[#14b8a6]/50 via-[#7c3aed]/50 to-[#e11d74]/50 lg:block"
            aria-hidden="true"
          />

          <ol className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {journeyStages.map((stage) => {
              const Icon = stage.icon;

              return (
                <li
                  key={stage.title}
                  className="flex flex-col items-center justify-between rounded-2xl border border-[#eaecf4] bg-white px-4 py-6 text-center shadow-[0_8px_24px_rgba(15,23,42,0.045)]"
                >
                  <div className="flex flex-col items-center">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-xs ${stage.iconBgClass}`}
                    >
                      <Icon className="h-5 w-5 stroke-[2]" aria-hidden="true" />
                    </span>

                    <h3 className="mt-4 text-[14.5px] font-bold leading-snug text-[#0c1438]">
                      {stage.title}
                    </h3>

                    <p className="mt-1.5 text-[11.5px] leading-[1.52] text-[#4b5563]">
                      {stage.description}
                    </p>
                  </div>

                  <div className="mt-4">
                    <span
                      className={`inline-flex items-center rounded-md px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] ${stage.badgeClass}`}
                    >
                      {stage.badge}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
