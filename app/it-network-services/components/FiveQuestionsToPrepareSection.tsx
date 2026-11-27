import Image from "next/image";
import { Lock } from "lucide-react";

const sectionContent = {
  step: "02",
  eyebrow: "PLAN YOUR NEEDS",
  headingPrefix: "Five questions ",
  headingAccent: "to prepare",
  description:
    "A needs assessment is coming soon. These are the questions it will ask — “not sure” is always an option.",
} as const;

const assessmentCard = {
  title: "Needs assessment",
  badge: "COMING SOON",
  rows: [
    {
      label: "Organisation type",
      options: ["Sole trader", "SME", "Enterprise", "Not sure"],
    },
    {
      label: "Number of sites",
      options: ["1", "2–10", "11+", "Not sure"],
    },
    {
      label: "Priority",
      options: ["Connectivity", "Support", "Security", "Other"],
    },
    {
      label: "Current environment",
      options: ["Existing", "New", "Unknown"],
    },
    {
      label: "Timeframe",
      options: ["Exploring", "Planned", "Urgent"],
    },
  ],
  warningText: "Do not enter passwords, IP addresses or network diagrams.",
} as const;

const multiSiteCard = {
  image: "/Images/it/6.png",
  imageAlt:
    "Macro close-up of a dark circuit board with microchips and electronic components",
  eyebrow: "MULTI-SITE",
  title: "Each site is assessed on its own",
  sites: [
    { name: "Site A", status: "ASSESSMENT REQUIRED" },
    { name: "Site B", status: "ASSESSMENT REQUIRED" },
  ],
  footnote:
    "Network availability at an address isn’t the same as eligibility for a managed service.",
} as const;

export default function FiveQuestionsToPrepareSection() {
  return (
    <section
      id="five-questions-to-prepare"
      className="w-full bg-[#f5f6fb] px-4 py-14 sm:px-8 lg:px-12"
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

          <p className="mt-2 text-[13.5px] leading-[1.6] text-[#4b5563] sm:text-sm">
            {sectionContent.description}
          </p>
        </div>

        {/* Two-column layout: Left Needs assessment preview + Right Multi-site card */}
        <div className="mt-7 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {/* Left column: Needs assessment card */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#eaecf4] bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.045)] sm:p-7 lg:col-span-6">
            <div>
              {/* Card top bar */}
              <div className="flex items-center justify-between gap-3 border-b border-[#f1f3f9] pb-4">
                <h3 className="text-[15.5px] font-extrabold text-[#0c1438]">
                  {assessmentCard.title}
                </h3>
                <span className="inline-flex items-center rounded-md bg-[#fff3d6] px-2.5 py-1 text-[9.5px] font-extrabold uppercase tracking-[0.12em] text-[#92400e]">
                  {assessmentCard.badge}
                </span>
              </div>

              {/* Five question rows */}
              <div className="divide-y divide-[#f1f3f9]">
                {assessmentCard.rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col gap-2 py-3.5 sm:flex-row sm:items-center sm:gap-4"
                  >
                    <span className="w-full shrink-0 text-[12px] font-bold text-[#0c1438] sm:w-[140px]">
                      {row.label}
                    </span>

                    <div className="flex flex-wrap items-center gap-1.5">
                      {row.options.map((option) => (
                        <span
                          key={option}
                          className="inline-flex items-center rounded-full border border-[#e7eaf3] bg-[#f8f9fd] px-3 py-1 text-[11px] font-medium text-[#475569]"
                        >
                          {option}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom pink security notice */}
            <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-[#fecdd3] bg-[#fff1f5] px-4 py-3 text-[#be123c]">
              <Lock
                className="h-3.5 w-3.5 shrink-0 stroke-[2.2]"
                aria-hidden="true"
              />
              <p className="text-[11px] font-medium leading-snug">
                {assessmentCard.warningText}
              </p>
            </div>
          </div>

          {/* Right column: Circuit board image + Multi-site dark panel */}
          <article className="flex flex-col overflow-hidden rounded-3xl bg-[#071526] text-white shadow-[0_14px_34px_rgba(7,21,38,0.16)] lg:col-span-6">
            {/* Top hardware image */}
            <div className="relative h-[200px] w-full overflow-hidden bg-[#0c1d33] sm:h-[225px]">
              <Image
                src={multiSiteCard.image}
                alt={multiSiteCard.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Bottom dark slate/navy body */}
            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#2dd4bf]">
                  {multiSiteCard.eyebrow}
                </p>

                <h3 className="mt-2 text-[19px] font-extrabold leading-snug tracking-[-0.015em] text-white">
                  {multiSiteCard.title}
                </h3>

                <div className="mt-4 space-y-2.5">
                  {multiSiteCard.sites.map((site) => (
                    <div
                      key={site.name}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5"
                    >
                      <span className="text-[12px] font-bold text-white/90">
                        {site.name}
                      </span>
                      <span className="inline-flex items-center rounded-md bg-[#fef3c7] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#92400e]">
                        {site.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-[11.5px] leading-[1.55] text-white/60">
                {multiSiteCard.footnote}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
