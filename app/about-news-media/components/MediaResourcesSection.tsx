import Link from "next/link";
import {
  ArrowRight,
  Camera,
  FileText,
  Mail,
  MessageSquareText,
  Mic,
} from "lucide-react";

const sectionContent = {
  step: "02",
  eyebrow: "FOR JOURNALISTS",
  headingPrefix: "Media ",
  headingAccent: "resources",
} as const;

const resourceCards = [
  {
    title: "Official announcements",
    description:
      "Company announcements will appear here once published, with a clear date.",
    status: "COMING SOON",
    icon: FileText,
  },
  {
    title: "Media kit",
    description:
      "Logos and images will be offered with usage terms, format and file size.",
    status: "COMING SOON",
    icon: Camera,
  },
  {
    title: "Media enquiries",
    description: "Use our Contact page for general and media enquiries.",
    status: "AVAILABLE",
    icon: Mic,
  },
] as const;

const contactCards = [
  {
    title: "General & media enquiries",
    description:
      "Contact Zoiko Telecom through our Contact page. No response time is promised here.",
    cta: "Contact us",
    href: "/contact",
    icon: Mail,
    accent: "pink" as const,
  },
  {
    title: "Service support",
    description:
      "Faults, billing or account help? That’s handled by Support, not the newsroom.",
    cta: "Get support",
    href: "/support",
    icon: MessageSquareText,
    accent: "blue" as const,
  },
] as const;

export default function MediaResourcesSection() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-8 lg:px-12">
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

        {/* Top 3 resource cards */}
        <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
          {resourceCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="flex flex-col justify-between rounded-2xl border border-[#e7e9f2] bg-white p-6 shadow-[0_4px_16px_rgba(15,23,42,0.03)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f3eefe] text-[#8b5cf6]">
                    <Icon className="h-5 w-5 stroke-[1.9]" aria-hidden="true" />
                  </span>

                  <span className="inline-flex items-center rounded-md bg-[#eef0f6] px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-[0.12em] text-[#475569]">
                    {card.status}
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="text-[16px] font-bold leading-snug text-[#0c1438]">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#4b5563]">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom 2 split contact cards */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {contactCards.map((card) => {
            const Icon = card.icon;
            const isPink = card.accent === "pink";

            return (
              <Link
                key={card.title}
                href={card.href}
                className="group flex min-h-[132px] items-stretch overflow-hidden rounded-2xl border border-[#e7e9f2] bg-white shadow-[0_4px_16px_rgba(15,23,42,0.03)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(15,23,42,0.07)]"
              >
                <div
                  className={`flex w-[92px] shrink-0 items-center justify-center sm:w-[104px] ${
                    isPink
                      ? "bg-[#fdf0f6] text-[#a61b68]"
                      : "bg-[#edf1fe] text-[#2563eb]"
                  }`}
                >
                  <Icon className="h-7 w-7 stroke-[1.85]" aria-hidden="true" />
                </div>

                <div className="flex flex-1 flex-col justify-center px-6 py-5">
                  <h3 className="text-[16px] font-bold leading-snug text-[#0c1438] group-hover:underline">
                    {card.title}
                  </h3>

                  <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#4b5563]">
                    {card.description}
                  </p>

                  <span className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#c81878]">
                    {card.cta}
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
