import Link from "next/link";
import { Users, Video, Database, Router, type LucideIcon } from "lucide-react";

type TeamToolCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  dependsOn: string;
  actionText: string;
  actionHref: string;
};

const TEAM_TOOL_CARDS: readonly TeamToolCard[] = [
  {
    title: "Video meetings & team messaging",
    description:
      "Our business landline FAQ mentions video conferencing and team messaging as examples of what some plans can include.",
    icon: Video,
    dependsOn: "your selected plan; these may be separate services.",
    actionText: "Explore business solutions",
    actionHref: "/contact",
  },
  {
    title: "CRM integration",
    description:
      "Linking calls to your customer system can show who's calling and log calls. Each integration needs checking, and a review of how customer data is shared.",
    icon: Database,
    dependsOn: "the specific system, your plan and a data-processing review.",
    actionText: "Discuss integrations",
    actionHref: "/contact",
  },
  {
    title: "Phones & connectivity",
    description:
      "Digital voice needs a suitable internet connection and supported handsets or apps. Equipment usually needs mains power.",
    icon: Router,
    dependsOn: "your broadband, devices and site set-up.",
    actionText: "Ask our device team",
    actionHref: "/contact",
  },
] as const;

export default function TeamsAndToolsSection() {
  return (
    <section className="w-full bg-[#f8f9fc] py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#e6007e] to-[#7b3fe4] text-white shadow-md shadow-[#e6007e]/20">
            <Users className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
              Teams &amp; tools
            </p>
            <h2 className="text-2xl font-black tracking-tight text-[#131138] sm:text-3xl lg:text-4xl">
              Work the way your team works
            </h2>
          </div>
        </div>
        <p className="mt-2.5 max-w-[600px] text-sm text-[#545275] sm:text-base">
          Video, messaging and integrations are described as possible features
          &mdash; check your plan.
        </p>

        {/* 3-Column Grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {TEAM_TOOL_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="flex flex-col justify-between rounded-[26px] border border-[#ecebf4] bg-white p-7 shadow-[0_14px_36px_rgba(19,17,56,0.04)] sm:p-9"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e6007e] to-[#7b3fe4] text-white shadow-md shadow-[#e6007e]/20">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <h3 className="mt-6 text-xl font-black tracking-tight text-[#131138]">
                    {card.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-6 text-[#545275]">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-[#f0f1f6] pt-5">
                  <p className="text-xs text-[#545275]">
                    <strong className="font-bold text-[#131138]">
                      Depends on:
                    </strong>{" "}
                    {card.dependsOn}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={card.actionHref}
                      className="inline-flex items-center gap-1 text-sm font-extrabold text-[#e6007e] transition hover:text-[#c41478]"
                    >
                      {card.actionText}
                      <span aria-hidden="true">&rsaquo;</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
