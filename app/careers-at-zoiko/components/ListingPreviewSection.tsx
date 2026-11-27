import {
  Check,
  Clock,
  FileText,
  Laptop,
  MapPin,
  Search,
  User,
} from "lucide-react";

const sectionContent = {
  step: "03",
  eyebrow: "WHEN ROLES ARE PUBLISHED",
  headingPrefix: "What every listing ",
  headingAccent: "will show",
  description:
    "When verified roles go live, each one will set out the facts you need before applying — and nothing we can’t stand behind.",
} as const;

const checklistItems = [
  "Job title and the employing legal entity",
  "Location and work arrangement — on-site, hybrid or remote",
  "Contract type and hours, where approved",
  "Pay range only when approved — never a made-up figure",
  "A clear closing date in UK time",
  "Essential and desirable criteria related to the role",
] as const;

const previewFields = [
  { label: "Location", icon: MapPin },
  { label: "Work pattern", icon: Laptop },
  { label: "Contract type", icon: FileText },
  { label: "Closing date", icon: Clock },
] as const;

const roadmapCards = [
  {
    title: "Job search & filters",
    description: "Search by team, location and work pattern.",
    status: "COMING SOON",
    icon: Search,
  },
  {
    title: "Online applications",
    description: "A secure application with a confirmed receipt.",
    status: "COMING SOON",
    icon: FileText,
  },
  {
    title: "Candidate account",
    description: "Check or withdraw an application.",
    status: "NOT LIVE",
    icon: User,
  },
] as const;

export default function ListingPreviewSection() {
  return (
    <section
      id="when-roles-are-published"
      className="w-full bg-white px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Top split: Left checklist + Right non-interactive layout preview */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left column */}
          <div className="lg:col-span-6">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
              <span className="italic text-[#e093b9]">
                {sectionContent.step}
              </span>
              <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
            </p>

            <h2 className="mt-2.5 text-3xl font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1438] sm:text-[36px]">
              {sectionContent.headingPrefix}
              <span className="font-semibold italic text-[#b81d78]">
                {sectionContent.headingAccent}
              </span>
            </h2>

            <p className="mt-3 max-w-[490px] text-[13.5px] leading-[1.6] text-[#4b5563] sm:text-sm">
              {sectionContent.description}
            </p>

            <ul className="mt-6 space-y-3">
              {checklistItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[13px] leading-[1.5] text-[#1e293b] sm:text-[13.5px]"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 stroke-[2.5] text-[#e11d74]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column: Static layout preview wire card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-[#eaecf4] bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.04)] sm:p-7">
              <div className="flex justify-end">
                <span className="inline-flex items-center rounded-md bg-[#fef2d6] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#92400e]">
                  LAYOUT PREVIEW · NOT A REAL ROLE
                </span>
              </div>

              {/* Placeholder title bars */}
              <div className="mt-3 space-y-2.5">
                <div className="h-3.5 w-[74%] rounded-full bg-[#eef0f7]" />
                <div className="h-2.5 w-[44%] rounded-full bg-[#f4f5fa]" />
              </div>

              {/* 2x2 metadata pills */}
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {previewFields.map((field) => {
                  const Icon = field.icon;

                  return (
                    <div
                      key={field.label}
                      className="flex items-center gap-2.5 rounded-xl bg-[#f5f6fb] px-4 py-3 text-[12px] font-bold text-[#3b337a]"
                    >
                      <Icon
                        className="h-3.5 w-3.5 shrink-0 stroke-[2.2] text-[#7c3aed]"
                        aria-hidden="true"
                      />
                      <span>{field.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Placeholder body lines */}
              <div className="mt-5 space-y-2.5">
                <div className="h-2 w-full rounded-full bg-[#f2f3f9]" />
                <div className="h-2 w-[72%] rounded-full bg-[#f2f3f9]" />
                <div className="h-2 w-[90%] rounded-full bg-[#f2f3f9]" />
                <div className="h-2 w-[54%] rounded-full bg-[#f2f3f9]" />
              </div>

              {/* Disabled static preview button */}
              <div className="mt-5 flex h-11 w-full items-center justify-center rounded-xl bg-[#f1f2f8] text-[12.5px] font-semibold text-[#94a3b8]">
                View role
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3 feature status cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {roadmapCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="flex flex-col items-start justify-between rounded-2xl border border-dashed border-[#cfd5e6] bg-[#fafbff] p-6"
              >
                <div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#e6e9f2] bg-white text-[#7c3aed]">
                    <Icon className="h-4 w-4 stroke-[2]" aria-hidden="true" />
                  </span>

                  <h3 className="mt-4 text-[14.5px] font-bold leading-snug text-[#0c1438]">
                    {card.title}
                  </h3>

                  <p className="mt-1 text-[12px] leading-[1.5] text-[#4b5563]">
                    {card.description}
                  </p>
                </div>

                <span className="mt-4 inline-flex items-center rounded-md bg-[#fef2d6] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#92400e]">
                  {card.status}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
