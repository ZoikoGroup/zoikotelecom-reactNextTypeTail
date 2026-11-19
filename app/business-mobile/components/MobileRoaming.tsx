import React from "react";
import Link from "next/link";
import { Send, FileText, Globe, ChevronRight } from "lucide-react";

const ROAMING_CARDS = [
  {
    id: "roaming-abroad",
    title: "Roaming abroad",
    description:
      "Using mobile data, calls and texts while outside the UK. Included countries and charges depend on the plan.",
    dependsOn: "the business tariff and destination.",
    ctaLabel: "Ask about roaming",
    href: "/business/mobile/roaming",
    icon: Send,
  },
  {
    id: "spending-caps",
    title: "Spending caps & alerts",
    description:
      "Caps and usage alerts can help avoid bill shock — where the provider and plan support them.",
    dependsOn: "provider capability and your plan.",
    ctaLabel: "Ask about controls",
    href: "/business/mobile/controls",
    icon: FileText,
  },
  {
    id: "calling-abroad",
    title: "Calling abroad from the UK",
    description:
      "Calling an international number while in the UK is a separate charge from roaming.",
    dependsOn: "your plan's international rates.",
    ctaLabel: "International calls",
    href: "/business/mobile/international",
    icon: Globe,
  },
] as const;

export default function MobileRoaming() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            TRAVEL
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Roaming for business trips
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Using a phone abroad is different from calling abroad from the
            UK.
          </p>
        </div>

        {/* Three-Column Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
          {ROAMING_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group flex flex-col justify-between rounded-3xl border border-[#ECEEF6] bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] transition-all hover:border-[#DCE1F0] hover:shadow-[0_12px_34px_rgba(17,24,60,0.07)] sm:p-8"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-white shadow-md">
                    <Icon className="h-6 w-6" strokeWidth={2.25} />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold tracking-tight text-[#11183C]">
                    {card.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#4B5563]">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8">
                  <div className="border-t border-dashed border-[#E6E9F2] pt-4 pb-4">
                    <p className="text-xs text-[#6B7280]">
                      <span className="font-bold text-[#11183C]">
                        Depends on:
                      </span>{" "}
                      {card.dependsOn}
                    </p>
                  </div>

                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#E11D74] transition-transform group-hover:translate-x-0.5"
                  >
                    <span>{card.ctaLabel}</span>
                    <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
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
