import {
  FileText,
  MessageSquare,
  Pencil,
  Search,
  type LucideIcon,
} from "lucide-react";

const sectionContent = {
  id: "how-it-works",
  step: "05",
  eyebrow: "HOW IT WORKS",
  headingPrefix: "From conversation to ",
  headingAccent: "agreement",
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
    title: "Discuss",
    description: "Share your team size, sites and current setup.",
    icon: MessageSquare,
    iconClass: "text-[#3b82f6]",
    dotClass: "bg-[#3b82f6]",
  },
  {
    title: "Assess",
    description:
      "We review numbers, devices, emergency calling and resilience.",
    icon: Search,
    iconClass: "text-[#7c3aed]",
    dotClass: "bg-[#7c3aed]",
  },
  {
    title: "Written offer",
    description:
      "Users, seats, VAT, minimum term and exclusions in writing — no prices until then.",
    icon: FileText,
    iconClass: "text-[#9d176c]",
    dotClass: "bg-[#9d176c]",
  },
  {
    title: "Agree",
    description: "Someone authorised for your business accepts separately.",
    icon: Pencil,
    iconClass: "text-[#e11d74]",
    dotClass: "bg-[#e11d74]",
  },
] as const;

export default function FromConversationToAgreementSection() {
  return (
    <section
      id={sectionContent.id}
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
            <span className="text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>
        </div>

        {/* Four horizontal process steps with dashed connector */}
        <div className="relative mt-10">
          <div
            className="pointer-events-none absolute top-[32px] right-[12.5%] left-[12.5%] hidden border-t-[1.5px] border-dashed border-[#c4b5fd] md:block"
            aria-hidden="true"
          />

          <ol className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <li
                  key={step.title}
                  className="flex flex-col items-center text-center"
                >
                  {/* White rounded tile with top-right colored dot */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#eaecf4] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
                    <Icon
                      className={`h-5 w-5 stroke-[2] ${step.iconClass}`}
                      aria-hidden="true"
                    />
                    <span
                      className={`absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full ${step.dotClass}`}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-4 text-[14px] font-extrabold leading-snug text-[#0c1438]">
                    {step.title}
                  </h3>

                  <p className="mt-1.5 max-w-[225px] text-[11.5px] leading-[1.55] text-[#4b5563]">
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
