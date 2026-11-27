import Link from "next/link";
import {
  Check,
  ChevronRight,
  Layers,
  Phone,
  type LucideIcon,
} from "lucide-react";

const sectionContent = {
  id: "compare",
  step: "03",
  eyebrow: "COMPARE",
  headingPrefix: "Business voice or ",
  headingAccent: "unified communications?",
} as const;

interface CompareColumnItem {
  title: string;
  description: string;
  points: readonly string[];
  ctaLabel: string;
  href: string;
  icon: LucideIcon;
  iconBoxClass: string;
  panelClass: string;
}

const compareColumns: readonly CompareColumnItem[] = [
  {
    title: "Business voice",
    description: "Calling and numbers for your organisation.",
    points: [
      "Business calls and numbers",
      "Can be discussed with our team now",
      "Emergency calling reviewed for your sites",
    ],
    ctaLabel: "Explore business voice",
    href: "/business-voice",
    icon: Phone,
    iconBoxClass: "bg-[#2563eb] text-white",
    panelClass: "bg-white",
  },
  {
    title: "Unified communications",
    description: "Voice plus meetings, messaging and integrations.",
    points: [
      "Calling, meetings and messaging together",
      "Extra capabilities under assessment",
      "Scoped with you before anything is offered",
    ],
    ctaLabel: "Discuss UC requirements",
    href: "/contact",
    icon: Layers,
    iconBoxClass: "bg-[#7c3aed] text-white",
    panelClass: "bg-gradient-to-br from-[#f4effd] via-[#f7f1fc] to-[#fdf2f9]",
  },
] as const;

export default function BusinessVoiceOrUnifiedCommunicationsSection() {
  return (
    <section
      id={sectionContent.id}
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
            <span className="text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>
        </div>

        {/* Single unified split container */}
        <div className="mt-7 grid grid-cols-1 divide-y divide-[#eaecf4] overflow-hidden rounded-3xl border border-[#eaecf4] shadow-[0_8px_26px_rgba(15,23,42,0.04)] md:grid-cols-2 md:divide-x md:divide-y-0">
          {compareColumns.map((col) => {
            const Icon = col.icon;

            return (
              <div
                key={col.title}
                className={`flex flex-col justify-between p-7 sm:p-8 ${col.panelClass}`}
              >
                <div>
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-xs ${col.iconBoxClass}`}
                    >
                      <Icon className="h-4 w-4 stroke-[2]" aria-hidden="true" />
                    </span>

                    <h3 className="text-[17px] font-extrabold leading-snug text-[#0c1438]">
                      {col.title}
                    </h3>
                  </div>

                  <p className="mt-3.5 text-[12px] leading-[1.55] text-[#4b5563]">
                    {col.description}
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {col.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-[12px] leading-[1.5] text-[#334155]"
                      >
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 stroke-[2.3] text-[#d946ef]"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <Link
                    href={col.href}
                    className="inline-flex items-center gap-1 text-[12px] font-bold text-[#c81878] transition hover:underline"
                  >
                    <span>{col.ctaLabel}</span>
                    <ChevronRight
                      className="h-3.5 w-3.5 stroke-[2.5]"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
