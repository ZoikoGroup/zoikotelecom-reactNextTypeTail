import Link from "next/link";
import { Gauge, Shield, Router, type LucideIcon } from "lucide-react";

type PerformanceCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  dependsOn: string;
  actionText: string;
  actionHref: string;
};

const PERFORMANCE_CARDS: readonly PerformanceCard[] = [
  {
    title: "Speeds",
    description:
      "We'll give an estimate for your specific site and service, including upload. Website examples aren't speed guarantees.",
    icon: Gauge,
    dependsOn: "your premises, technology and network conditions.",
    actionText: "Ask about speeds",
    actionHref: "/contact",
  },
  {
    title: "Service levels (SLA)",
    description:
      "A service level agreement may set fault response and fix targets, and what happens if they're missed — only its written terms apply.",
    icon: Shield,
    dependsOn: "the specific service you choose.",
    actionText: "Ask about support",
    actionHref: "/contact",
  },
  {
    title: "Static IP & equipment",
    description:
      "Static IP, firewalls and routers are options to discuss. Eligibility, charges and who manages them depend on the product.",
    icon: Router,
    dependsOn: "the confirmed product.",
    actionText: "Ask about IP options",
    actionHref: "/contact",
  },
] as const;

export default function BroadbandPerformanceAndSecurity() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
            Performance &amp; security
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight text-[#131138] sm:text-4xl lg:text-[42px]">
            Speeds, service levels and IP options
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PERFORMANCE_CARDS.map((card) => {
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
