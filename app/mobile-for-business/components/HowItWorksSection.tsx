import {
  MessageSquareText,
  Pencil,
  Receipt,
  Search,
  type LucideIcon,
} from "lucide-react";

const sectionContent = {
  step: "04",
  eyebrow: "GETTING A QUOTE",
  headingPrefix: "How it ",
  headingAccent: "works",
  description:
    "From first conversation to an authorised agreement — nothing is activated from an enquiry.",
} as const;

interface ProcessStepItem {
  title: string;
  description: string;
  icon: LucideIcon;
  iconClass: string;
  dotClass: string;
}

const processSteps: readonly ProcessStepItem[] = [
  {
    title: "Enquire",
    description: "Share your needs through the business contact route.",
    icon: MessageSquareText,
    iconClass: "text-[#3b82f6]",
    dotClass: "bg-[#3b82f6]",
  },
  {
    title: "Review",
    description: "We check lines, devices, coverage and any number transfers.",
    icon: Search,
    iconClass: "text-[#7c3aed]",
    dotClass: "bg-[#7c3aed]",
  },
  {
    title: "Itemised quote",
    description:
      "Per line, plan, device, VAT, upfront and recurring costs, with an expiry date.",
    icon: Receipt,
    iconClass: "text-[#a21caf]",
    dotClass: "bg-[#a21caf]",
  },
  {
    title: "Authorised sign-off",
    description: "Someone with authority for your business accepts separately.",
    icon: Pencil,
    iconClass: "text-[#e11d74]",
    dotClass: "bg-[#e11d74]",
  },
] as const;

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="w-full bg-[#f5f6fb] px-4 py-14 sm:px-8 lg:px-12"
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
            <span className="font-semibold italic text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>

          <p className="mt-2 text-[13.5px] leading-[1.6] text-[#4b5563] sm:text-sm">
            {sectionContent.description}
          </p>
        </div>

        {/* Four horizontal process steps with connecting dashed line */}
        <div className="relative mt-10">
          {/* Desktop dashed connector behind icon tiles */}
          <div
            className="pointer-events-none absolute top-[34px] right-[12.5%] left-[12.5%] hidden border-t border-dashed border-[#c7cde8] lg:block"
            aria-hidden="true"
          />

          <ol className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <li
                  key={step.title}
                  className="flex flex-col items-center text-center"
                >
                  {/* Square rounded tile with top-right colored accent dot */}
                  <div className="relative flex h-[68px] w-[68px] items-center justify-center rounded-2xl border border-[#eaecf4] bg-white shadow-[0_8px_22px_rgba(15,23,42,0.06)]">
                    <span
                      className={`absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full ring-2 ring-[#f5f6fb] ${step.dotClass}`}
                      aria-hidden="true"
                    />
                    <Icon
                      className={`h-6 w-6 stroke-[2] ${step.iconClass}`}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-4 text-[14px] font-bold leading-snug text-[#0c1438]">
                    {step.title}
                  </h3>

                  <p className="mt-1.5 max-w-[235px] text-[11.5px] leading-[1.52] text-[#4b5563]">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
