import {
  Calendar,
  Eye,
  FileText,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

const sectionContent = {
  step: "03",
  eyebrow: "READING FILINGS",
  headingPrefix: "Filing date ",
  headingSymbol: "≠",
  headingAccent: "period covered",
  description:
    "Three dates matter when you read a filed document. Don’t mix them up.",
} as const;

const timelineSteps = [
  {
    title: "Period end",
    description: "The date the accounts cover up to.",
    icon: Calendar,
    ringClass: "border-[#2563eb] text-[#2563eb]",
  },
  {
    title: "Filing date",
    description: "When the document was filed — often months later.",
    icon: FileText,
    ringClass: "border-[#7c3aed] text-[#7c3aed]",
  },
  {
    title: "On the register",
    description: "When it appears in the public filing history.",
    icon: Eye,
    ringClass: "border-[#db2777] text-[#db2777]",
  },
] as const;

const calloutCards = [
  {
    title: "Check the audit status",
    description:
      "Read each document’s stated accounting basis and audit status. Don’t assume filed accounts are audited.",
    icon: ShieldCheck,
    iconColor: "text-[#7c3aed]",
  },
  {
    title: "A broken link isn’t a missing filing",
    description:
      "If an external source is unavailable, try again later or check the register directly.",
    icon: AlertCircle,
    iconColor: "text-[#7c3aed]",
  },
] as const;

export default function ReadingFilingsSection() {
  return (
    <section
      id="reading-filings"
      className="w-full bg-white px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Centered section header */}
        <div className="mx-auto max-w-[600px] text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="italic text-[#e093b9]">{sectionContent.step}</span>
            <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold tracking-[-0.025em] text-[#0c1438] sm:text-[36px]">
            {sectionContent.headingPrefix}
            <span className="font-bold text-[#0c1438]">
              {sectionContent.headingSymbol}
            </span>{" "}
            <span className="text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>

          <p className="mt-2 text-[13.5px] leading-[1.6] text-[#4b5563] sm:text-sm">
            {sectionContent.description}
          </p>
        </div>

        {/* Three-step horizontal timeline */}
        <div className="relative mt-10">
          {/* Connecting gradient bar across desktop */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[26px] hidden h-[2px] bg-gradient-to-r from-[#2563eb] via-[#7c3aed] to-[#db2777] md:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            {timelineSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div
                    className={`flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 bg-white shadow-[0_4px_12px_rgba(15,23,42,0.04)] ${step.ringClass}`}
                  >
                    <Icon className="h-5 w-5 stroke-[1.9]" aria-hidden="true" />
                  </div>

                  <h3 className="mt-4 text-[15px] font-bold text-[#0c1438]">
                    {step.title}
                  </h3>

                  <p className="mt-1 max-w-[260px] text-[12px] leading-[1.5] text-[#4b5563]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Two bottom note cards */}
        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2">
          {calloutCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="flex items-start gap-3.5 rounded-2xl border border-[#eaecf4] bg-white px-6 py-5 shadow-[0_4px_16px_rgba(15,23,42,0.03)]"
              >
                <Icon
                  className={`mt-0.5 h-4 w-4 shrink-0 stroke-[2.2] ${card.iconColor}`}
                  aria-hidden="true"
                />

                <div>
                  <h3 className="text-[14px] font-bold leading-snug text-[#0c1438]">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-[1.55] text-[#4b5563]">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
