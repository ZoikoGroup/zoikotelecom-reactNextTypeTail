import Link from "next/link";
import { AlertTriangle, ChevronRight } from "lucide-react";

const sectionContent = {
  step: "01",
  eyebrow: "AVAILABILITY",
  headingPrefix: "Current ",
  headingAccent: "vacancy status",
  description:
    "An honest status comes first — we won’t show empty slots or invented roles.",
} as const;

const statusCardContent = {
  badgeLabel: "STATUS · NOT CONFIRMED",
  title: "We cannot confirm current vacancies on this page.",
  description:
    "For general company enquiries, contact Zoiko Telecom. You can also read more about the company while approved career listings are prepared.",
  primaryCta: { label: "General enquiries", href: "/contact" },
  secondaryCta: { label: "Company information", href: "/about/register" },
  warningNote:
    "Please do not send your CV or identity documents through the general contact form.",
} as const;

const statusStates = [
  {
    title: "Not confirmed (current)",
    description: "No verified listing source is connected yet.",
    dotClass: "bg-[#f59e0b]",
    cardClass:
      "border-[#f5c26b] bg-[#fffaf0] shadow-[0_6px_18px_rgba(245,158,11,0.08)]",
  },
  {
    title: "No open roles",
    description: "Shown only when a verified listing is empty.",
    dotClass: "bg-[#94a3b8]",
    cardClass: "border-transparent bg-[#f6f7fb]",
  },
  {
    title: "Roles open",
    description: "Only signed, open roles from an approved source.",
    dotClass: "bg-[#10b981]",
    cardClass: "border-transparent bg-[#f6f7fb]",
  },
  {
    title: "Listing unavailable",
    description:
      "If the listing can’t load, we’ll say so and offer a way back.",
    dotClass: "bg-[#e11d74]",
    cardClass: "border-transparent bg-[#f6f7fb]",
  },
] as const;

export default function CurrentVacancyStatusSection() {
  return (
    <section
      id="availability"
      className="w-full bg-white px-4 py-14 sm:px-8 lg:px-12"
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
            <span className="font-semibold italic text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>

          <p className="mt-2 text-[13.5px] leading-[1.6] text-[#4b5563] sm:text-sm">
            {sectionContent.description}
          </p>
        </div>

        {/* Two-column layout: Dark status card + What the status can show */}
        <div className="mt-8 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {/* Left card: Current unconfirmed vacancy status */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#050d33] bg-[radial-gradient(circle_at_92%_10%,rgba(168,24,108,0.55)_0%,rgba(88,16,86,0.22)_42%,transparent_72%)] p-7 text-white shadow-[0_14px_34px_rgba(5,13,51,0.18)] sm:p-9 lg:col-span-6">
            <div>
              <div className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#fbbf24]">
                <span
                  className="h-2 w-2 rounded-full bg-[#f59e0b]"
                  aria-hidden="true"
                />
                <span>{statusCardContent.badgeLabel}</span>
              </div>

              <h3 className="mt-4 max-w-[430px] text-2xl font-extrabold leading-[1.16] tracking-[-0.02em] text-white sm:text-[30px]">
                {statusCardContent.title}
              </h3>

              <p className="mt-4 max-w-[450px] text-[13px] leading-[1.65] text-white/75 sm:text-[13.5px]">
                {statusCardContent.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href={statusCardContent.primaryCta.href}
                  className="inline-flex h-11 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#ea157d] to-[#cf1286] px-5 text-[13px] font-semibold text-white shadow-[0_10px_26px_rgba(234,21,125,0.45)] transition hover:brightness-110"
                >
                  {statusCardContent.primaryCta.label}
                  <ChevronRight
                    className="h-3.5 w-3.5 stroke-[2.5]"
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href={statusCardContent.secondaryCta.href}
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-white/25 bg-white/[0.03] px-5 text-[13px] font-semibold text-white/95 transition hover:border-white/45 hover:bg-white/[0.08]"
                >
                  {statusCardContent.secondaryCta.label}
                </Link>
              </div>
            </div>

            <div className="mt-7 flex items-start gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3.5 text-[12px] leading-[1.5] text-white/80">
              <AlertTriangle
                className="mt-0.5 h-4 w-4 shrink-0 stroke-[2] text-[#fbbf24]"
                aria-hidden="true"
              />
              <span>{statusCardContent.warningNote}</span>
            </div>
          </div>

          {/* Right card: What the status can show */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#eaecf4] bg-white p-6 shadow-[0_4px_18px_rgba(15,23,42,0.03)] sm:p-8 lg:col-span-6">
            <div>
              <h3 className="text-[19px] font-extrabold tracking-[-0.015em] text-[#0c1438]">
                What the status can show
              </h3>

              <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#4b5563]">
                Each state means something different — “not confirmed” isn’t the
                same as “no jobs”.
              </p>
            </div>

            <div className="mt-5 space-y-3">
              {statusStates.map((state) => (
                <div
                  key={state.title}
                  className={`rounded-xl border px-4 py-3.5 transition ${state.cardClass}`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${state.dotClass}`}
                      aria-hidden="true"
                    />
                    <h4 className="text-[13.5px] font-bold leading-snug text-[#0c1438]">
                      {state.title}
                    </h4>
                  </div>

                  <p className="mt-1 pl-[18px] text-[12px] leading-[1.45] text-[#4b5563]">
                    {state.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
