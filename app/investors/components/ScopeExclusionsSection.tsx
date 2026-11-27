import { Ban, BookOpen, Lock, MessageSquare } from "lucide-react";

const sectionContent = {
  step: "04",
  eyebrow: "SCOPE",
  headingPrefix: "What this page ",
  headingAccent: "doesn’t include",
} as const;

const notIncludedItems = [
  "Share price or ticker",
  "Dividends",
  "Forecasts or projections",
  "Investment offers",
  "Performance figures",
  "Payment or sign-up",
] as const;

const plannedItems = [
  {
    title: "Disclosure library",
    description: "Approved public documents with clear dates and status.",
    status: "COMING SOON",
    icon: BookOpen,
  },
  {
    title: "Information request",
    description: "A factual company-information enquiry form.",
    status: "COMING SOON",
    icon: MessageSquare,
  },
  {
    title: "Stakeholder resources",
    description: "Restricted to authorised existing stakeholders only.",
    status: "NOT LIVE",
    icon: Lock,
  },
] as const;

export default function ScopeExclusionsSection() {
  return (
    <section
      id="whats-not-here"
      className="w-full bg-[#F5F6FB] px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Left-aligned section header */}
        <div>
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
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

        {/* Two-column cards */}
        <div className="mt-7 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          {/* Left card: Not included */}
          <div className="rounded-2xl border border-[#eaecf4] bg-white p-6 shadow-[0_4px_16px_rgba(15,23,42,0.03)] sm:p-7">
            <h3 className="text-[17px] font-extrabold tracking-[-0.015em] text-[#0c1438]">
              Not included
            </h3>

            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {notIncludedItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl bg-[#fdf2f7] px-4 py-3 text-[12.5px] font-semibold text-[#9d175d]"
                >
                  <Ban
                    className="h-3.5 w-3.5 shrink-0 stroke-[2.2]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right card: Planned, subject to approval */}
          <div className="rounded-2xl border border-dashed border-[#cfd5e6] bg-[#fafbff] p-6 sm:p-7">
            <h3 className="text-[17px] font-extrabold tracking-[-0.015em] text-[#0c1438]">
              Planned, subject to approval
            </h3>

            <div className="mt-3 divide-y divide-[#eef0f6]">
              {plannedItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center justify-between gap-4 py-3.5 first:pt-2 last:pb-1"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#e6e9f2] bg-white text-[#2563eb]">
                        <Icon
                          className="h-4 w-4 stroke-[1.9]"
                          aria-hidden="true"
                        />
                      </span>

                      <div>
                        <h4 className="text-[13.5px] font-bold leading-snug text-[#0c1438]">
                          {item.title}
                        </h4>
                        <p className="mt-0.5 text-[12px] leading-[1.45] text-[#4b5563]">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex shrink-0 items-center rounded-md bg-[#fef2d6] px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-[0.12em] text-[#92400e]">
                      {item.status}
                    </span>
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
