"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

type HelpBadgeVariant = "urgent" | "account" | "updates";

interface HelpOptionCard {
  readonly id: string;
  readonly badge: string;
  readonly badgeVariant: HelpBadgeVariant;
  readonly title: string;
  readonly description: string;
  readonly ctaLabel: string;
  readonly href: "#";
  readonly imageSrc: string;
  readonly imageAlt: string;
}

const HELP_BADGE_STYLES = {
  urgent: "bg-[#FCE7F3] text-[#E11D88]",
  account: "bg-[#E0E7FF] text-[#2563EB]",
  updates: "bg-[#DCFCE7] text-[#15803D]",
} as const satisfies Record<HelpBadgeVariant, string>;

const HELP_OPTION_CARDS = [
  {
    id: "report-service-problem",
    badge: "Urgent",
    badgeVariant: "urgent",
    title: "Report a service problem",
    description:
      "Use our contact page and tell us which service and site is affected.",
    ctaLabel: "Contact support",
    href: "#",
    imageSrc: "/Images/mng/19.png",
    imageAlt: "Support team reviewing service issue at desk",
  },
  {
    id: "account-billing-questions",
    badge: "Account",
    badgeVariant: "account",
    title: "Account & billing questions",
    description: "Ask about your agreement, invoices or contacts.",
    ctaLabel: "Ask a question",
    href: "#",
    imageSrc: "/Images/mng/20.png",
    imageAlt: "Reviewing agreement and account documentation",
  },
  {
    id: "check-on-a-request",
    badge: "Case updates",
    badgeVariant: "updates",
    title: "Check on a request",
    description: "Ask about an existing case using our contact page.",
    ctaLabel: "Ask about a case",
    href: "#",
    imageSrc: "/Images/mng/21.png",
    imageAlt: "Team planning session tracking requests and updates",
  },
] as const satisfies readonly HelpOptionCard[];

export default function ExistingCustomerHelp() {
  return (
    <section
      aria-labelledby="existing-customer-heading"
      className="w-full bg-[#F5F6FB] py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[750px] mx-auto mb-11 sm:mb-12">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#565B75] mb-2.5">
            ALREADY A CUSTOMER?
          </p>
          <h2
            id="existing-customer-heading"
            className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B]"
          >
            Get help with an existing Zoiko service
          </h2>
        </div>

        {/* 3 Option Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {HELP_OPTION_CARDS.map((card) => (
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

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold leading-4 mb-3.5 ${
                      HELP_BADGE_STYLES[card.badgeVariant]
                    }`}
                  >
                    {card.badge}
                  </span>

                  <h3 className="text-[18px] font-bold leading-[1.3] tracking-[-0.015em] text-[#070B2B] mb-2">
                    {card.title}
                  </h3>

                  <p className="text-[13px] leading-[1.52] text-[#4B5068] mb-5">
                    {card.description}
                  </p>
                </div>

                <div>
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

        {/* Bottom Case Portal Banner */}
        <div className="rounded-[16px] bg-white border border-dashed border-[#D8DCE8] px-6 py-4 shadow-[0_6px_20px_rgba(15,23,66,0.03)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-[13.5px] font-bold leading-[1.35] text-[#070B2B]">
              Track your cases online
            </h3>
            <p className="text-[12px] leading-[1.45] text-[#686E86] mt-0.5">
              A self-service case portal isn&rsquo;t available yet. Contact our
              team for updates.
            </p>
          </div>

          <button
            type="button"
            disabled
            aria-disabled="true"
            className="shrink-0 inline-flex items-center justify-center rounded-[8px] bg-[#E2E6F0] px-4 py-2.5 text-[12px] font-bold text-[#8A92A8] cursor-not-allowed"
          >
            Sign in — coming soon
          </button>
        </div>
      </div>
    </section>
  );
}
