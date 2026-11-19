"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

type ChangeBadgeType = "changes" | "multisite" | "reviews";

interface ChangeGrowthCard {
  readonly id: string;
  readonly badge: string;
  readonly badgeType: ChangeBadgeType;
  readonly title: string;
  readonly description: string;
  readonly dependsOn: string;
  readonly ctaLabel: string;
  readonly href: "#";
  readonly imageSrc: string;
  readonly imageAlt: string;
}

const CHANGE_BADGE_STYLES = {
  changes: "bg-[#FCE7F3] text-[#E11D88]",
  multisite: "bg-[#E0E7FF] text-[#2563EB]",
  reviews: "bg-[#DCFCE7] text-[#15803D]",
} as const satisfies Record<ChangeBadgeType, string>;

const CHANGE_GROWTH_CARDS = [
  {
    id: "moves-adds-changes",
    badge: "Changes",
    badgeType: "changes",
    title: "Moves, adds & changes",
    description:
      "New lines, site moves and service changes, with approvals, impact review and a rollback plan.",
    dependsOn: "availability checks, provider scheduling and contract review.",
    ctaLabel: "Discuss a change",
    href: "#",
    imageSrc: "/Images/mng/15.png",
    imageAlt: "Modern office interior corridor for moves, adds and changes",
  },
  {
    id: "multi-site-coordination",
    badge: "Multi-site",
    badgeType: "multisite",
    title: "Multi-site coordination",
    description:
      "Group contacts, site details and who's responsible across providers.",
    dependsOn: "the sites and services you include.",
    ctaLabel: "Discuss multi-site needs",
    href: "#",
    imageSrc: "/Images/mng/16.png",
    imageAlt: "Commercial high-rise buildings for multi-site coordination",
  },
  {
    id: "service-reviews",
    badge: "Reviews",
    badgeType: "reviews",
    title: "Service reviews",
    description:
      "Operational reviews, recurring issues and renewal planning — no staff monitoring or scoring.",
    dependsOn: "whether reviews are in your agreement.",
    ctaLabel: "Request a review",
    href: "#",
    imageSrc: "/Images/mng/17.png",
    imageAlt: "Team planning session with sticky notes for service reviews",
  },
] as const satisfies readonly ChangeGrowthCard[];

export default function ChangesGrowthSection() {
  return (
    <section
      aria-labelledby="changes-growth-heading"
      className="w-full bg-[#FFFFFF] py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-11 sm:mb-12">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#565B75] mb-2.5">
            CHANGES &amp; GROWTH
          </p>
          <h2
            id="changes-growth-heading"
            className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B]"
          >
            Moves, adds, changes and reviews
          </h2>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CHANGE_GROWTH_CARDS.map((card) => (
            <article
              key={card.id}
              className="group flex flex-col rounded-[20px] bg-white border border-[#ECEAF4] shadow-[0_12px_32px_rgba(15,23,66,0.06)] overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
            >
              {/* Top Image */}
              <div className="h-[186px] w-full bg-[#E5E7EB] overflow-hidden shrink-0">
                <img
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold leading-4 mb-3.5 ${
                      CHANGE_BADGE_STYLES[card.badgeType]
                    }`}
                  >
                    {card.badge}
                  </span>

                  <h3 className="text-[18px] font-bold leading-[1.3] tracking-[-0.015em] text-[#070B2B] mb-2.5">
                    {card.title}
                  </h3>

                  <p className="text-[13px] leading-[1.52] text-[#4B5068] mb-5">
                    {card.description}
                  </p>
                </div>

                <div>
                  <div className="pt-3.5 pb-4 border-t border-dashed border-[#E4E7F1] text-[11.5px] leading-[1.45] text-[#6B7280]">
                    <span className="font-bold text-[#111827]">
                      Depends on:
                    </span>{" "}
                    <span>{card.dependsOn}</span>
                  </div>

                  <a
                    href={card.href}
                    className="inline-flex items-center gap-1 text-[12.5px] font-bold text-[#E61E88] hover:text-[#C81474] transition-colors"
                  >
                    <span>{card.ctaLabel}</span>
                    <ChevronRight className="h-3.5 w-3.5 stroke-[2.5] transition-transform duration-150 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
