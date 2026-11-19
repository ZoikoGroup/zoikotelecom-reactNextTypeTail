"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

type HelpBadgeVariant = "support" | "documents" | "consultation";

interface HelpSupportCard {
  readonly id: string;
  readonly badge: string;
  readonly badgeVariant: HelpBadgeVariant;
  readonly title: string;
  readonly description: string;
  readonly ctaLabel: string;
  readonly href: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
}

const HELP_BADGE_STYLES = {
  support: "bg-[#FCE7F3] text-[#E11D88]",
  documents: "bg-[#E0E7FF] text-[#2563EB]",
  consultation: "bg-[#DCFCE7] text-[#15803D]",
} as const satisfies Record<HelpBadgeVariant, string>;

const HELP_SUPPORT_CARDS = [
  {
    id: "service-or-account-concern",
    badge: "Support",
    badgeVariant: "support",
    title: "Service or account concern",
    description:
      "Contact support about suspicious changes, lost devices or access problems.",
    ctaLabel: "Contact support",
    href: "#",
    imageSrc: "/Images/mng/19.png",
    imageAlt:
      "Team collaborating around monitors and desks for customer support",
  },
  {
    id: "security-information-for-your-service",
    badge: "Documents",
    badgeVariant: "documents",
    title: "Security information for your service",
    description: "Ask what evidence is available for the services you have.",
    ctaLabel: "Request information",
    href: "#",
    imageSrc: "/Images/mng/20.png",
    imageAlt: "Hands reviewing and signing service documentation at a table",
  },
  {
    id: "plan-a-new-service-securely",
    badge: "Consultation",
    badgeVariant: "consultation",
    title: "Plan a new service securely",
    description: "Talk to our business team before adding services or sites.",
    ctaLabel: "Talk to us",
    href: "#",
    imageSrc: "/Images/comp/22.png",
    imageAlt: "Colleagues with laptops planning new services together",
  },
] as const satisfies readonly HelpSupportCard[];

export default function HelpAndSupportSection() {
  return (
    <section
      aria-labelledby="help-and-support-heading"
      className="w-full bg-[#F5F6FB] py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Centered Header */}
        <div className="text-center max-w-[720px] mx-auto mb-11 sm:mb-12">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#565B75] mb-2.5">
            ALREADY A CUSTOMER?
          </p>
          <h2
            id="help-and-support-heading"
            className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B]"
          >
            Help and support
          </h2>
        </div>

        {/* 3 Support Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
          {HELP_SUPPORT_CARDS.map((card) => (
            <article
              key={card.id}
              className="group flex flex-col rounded-[20px] bg-white border border-[#ECEAF4] shadow-[0_12px_32px_rgba(15,23,66,0.06)] overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
            >
              {/* Top Image */}
              <div className="h-[178px] w-full bg-[#E5E7EB] overflow-hidden shrink-0">
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
                      HELP_BADGE_STYLES[card.badgeVariant]
                    }`}
                  >
                    {card.badge}
                  </span>

                  <h3 className="text-[17px] font-bold leading-[1.3] tracking-[-0.015em] text-[#070B2B] mb-2">
                    {card.title}
                  </h3>

                  <p className="text-[12.5px] leading-[1.52] text-[#4B5068] mb-5">
                    {card.description}
                  </p>
                </div>

                <div>
                  <a
                    href={card.href}
                    className="inline-flex items-center gap-1 text-[12px] font-bold text-[#E61E88] hover:text-[#C81474] transition-colors"
                  >
                    <span>{card.ctaLabel}</span>
                    <ChevronRight className="h-3.5 w-3.5 stroke-[2.5] transition-transform duration-150 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Portal Notice Bar */}
        <div className="rounded-[14px] bg-[#FAF9FE] border border-[#E5E7F2] px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-[13px] font-bold text-[#070B2B] mb-0.5">
              Access security reports online
            </h3>
            <p className="text-[11.5px] leading-[1.45] text-[#5B6078]">
              A secure evidence portal isn&rsquo;t available yet. Contact our
              team instead.
            </p>
          </div>

          <button
            type="button"
            disabled
            aria-disabled="true"
            className="inline-flex items-center justify-center rounded-[8px] bg-[#E8EAF3] px-4 py-2.5 text-[11.5px] font-semibold text-[#9CA3AF] cursor-not-allowed shrink-0"
          >
            Sign in &mdash; coming soon
          </button>
        </div>
      </div>
    </section>
  );
}
