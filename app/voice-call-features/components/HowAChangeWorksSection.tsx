import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const sectionContent = {
  id: "making-changes",
  step: "02",
  eyebrow: "MAKING CHANGES",
  headingPrefix: "How a change ",
  headingAccent: "works",
  description:
    "Online management of call settings isn’t available yet. When it is, every change will follow these steps.",
  badge: "NOT LIVE YET",
  image: "/Images/feat/2.png",
  imageAlt:
    "Bright modern office meeting space with a wooden table, pink chairs and industrial pendant lights",
  ctaLabel: "Need a change now? Contact support",
  href: "/support",
} as const;

interface ChangeStepItem {
  number: string;
  title: string;
  description: string;
  badgeClass: string;
}

const changeSteps: readonly ChangeStepItem[] = [
  {
    number: "1",
    title: "Review",
    description:
      "See your current setting next to the proposed one, with any charges.",
    badgeClass: "bg-[#2563eb] text-white",
  },
  {
    number: "2",
    title: "Confirm",
    description: "Only someone authorised for the service can confirm.",
    badgeClass: "bg-[#7c3aed] text-white",
  },
  {
    number: "3",
    title: "Pending",
    description:
      "A request accepted isn’t the same as applied — you’ll get a reference.",
    badgeClass: "bg-[#a21caf] text-white",
  },
  {
    number: "4",
    title: "Confirmed",
    description: "Shown as applied only once the network confirms it.",
    badgeClass: "bg-[#0d9468] text-white",
  },
] as const;

export default function HowAChangeWorksSection() {
  return (
    <section
      id={sectionContent.id}
      className="w-full overflow-hidden bg-[#F4F4F4]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left full-bleed photograph */}
        <div className="relative min-h-[280px] w-full bg-[#1e293b] sm:min-h-[380px] lg:col-span-6 lg:min-h-[520px]">
          <Image
            src={sectionContent.image}
            alt={sectionContent.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        {/* Right content column */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:col-span-6 lg:px-14 lg:py-14">
          <div className="max-w-[460px]">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
              <span className="italic text-[#e093b9]">
                {sectionContent.step}
              </span>
              <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
            </p>

            <h2 className="mt-2.5 text-3xl font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1438] sm:text-[36px]">
              {sectionContent.headingPrefix}
              <span className="text-[#b81d78]">
                {sectionContent.headingAccent}
              </span>
            </h2>

            <p className="mt-3 text-[12.5px] leading-[1.58] text-[#4b5563]">
              {sectionContent.description}
            </p>

            {/* Status badge */}
            <div className="mt-4">
              <span className="inline-flex items-center rounded-md bg-[#eef0f6] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#475569]">
                {sectionContent.badge}
              </span>
            </div>

            {/* Numbered process list */}
            <ol className="mt-5 space-y-3.5">
              {changeSteps.map((step) => (
                <li key={step.number} className="flex items-start gap-3.5">
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[11px] font-extrabold shadow-2xs ${step.badgeClass}`}
                  >
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-[13px] font-extrabold leading-snug text-[#0c1438]">
                      {step.title}
                    </h3>
                    <p className="mt-0.5 text-[11.5px] leading-[1.5] text-[#4b5563]">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Footer support link */}
            <div className="mt-6">
              <Link
                href={sectionContent.href}
                className="inline-flex items-center gap-1 text-[11.5px] font-bold text-[#c81878] transition hover:underline"
              >
                <span>{sectionContent.ctaLabel}</span>
                <ChevronRight
                  className="h-3.5 w-3.5 stroke-[2.5]"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
