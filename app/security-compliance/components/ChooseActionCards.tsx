"use client";

import React from "react";
import { BarChart3, KeyRound, Database, FileText } from "lucide-react";

type ActionCardKey = "connectivity" | "accounts" | "data" | "evidence";

interface ActionCardItem {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly iconKey: ActionCardKey;
  readonly href: string;
}

const ACTION_CARDS = [
  {
    id: "protect-connectivity",
    title: "Protect connectivity",
    subtitle: "Mobile, broadband and voice safeguards.",
    imageSrc: "/Images/comp/2.png",
    imageAlt: "Network patch panel and cables for protecting connectivity",
    iconKey: "connectivity",
    href: "#",
  },
  {
    id: "manage-accounts",
    title: "Manage accounts",
    subtitle: "Who can change services and how.",
    imageSrc: "/Images/comp/3.png",
    imageAlt: "Smartphone screen showing applications for managing accounts",
    iconKey: "accounts",
    href: "#",
  },
  {
    id: "handle-data",
    title: "Handle data",
    subtitle: "Personal data, roles and privacy.",
    imageSrc: "/Images/comp/4.png",
    imageAlt: "Code on screen representing handling data and privacy",
    iconKey: "data",
    href: "#",
  },
  {
    id: "get-evidence",
    title: "Get evidence",
    subtitle: "Request documents for due diligence.",
    imageSrc: "/Images/comp/5.png",
    imageAlt: "Hand signing document on desk for getting evidence",
    iconKey: "evidence",
    href: "#",
  },
] as const satisfies readonly ActionCardItem[];

function ActionCardIcon({ iconKey }: { readonly iconKey: ActionCardKey }) {
  switch (iconKey) {
    case "connectivity":
      return <BarChart3 className="h-4 w-4 text-white" strokeWidth={2.1} />;
    case "accounts":
      return <KeyRound className="h-4 w-4 text-white" strokeWidth={2.1} />;
    case "data":
      return <Database className="h-4 w-4 text-white" strokeWidth={2.1} />;
    case "evidence":
      return <FileText className="h-4 w-4 text-white" strokeWidth={2.1} />;
  }
}

export default function ChooseActionCards() {
  return (
    <section
      aria-labelledby="choose-action-heading"
      className="w-full bg-[#F8F9FD] py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-11 sm:mb-12">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#565B75] mb-2.5">
            WHAT DO YOU NEED?
          </p>
          <h2
            id="choose-action-heading"
            className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B]"
          >
            Choose what you&rsquo;re trying to do
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ACTION_CARDS.map((card) => (
            <a
              key={card.id}
              href={card.href}
              className="group relative block h-[192px] w-full rounded-[16px] overflow-hidden shadow-[0_12px_28px_rgba(15,23,66,0.12)] border border-[#2A2F4A]/20 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <img
                src={card.imageSrc}
                alt={card.imageAlt}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#090D24]/90 via-[#101633]/50 to-[#101633]/20"
              />

              <div className="relative z-10 flex h-full w-full flex-col justify-between p-4 sm:p-5 text-left">
                <span
                  aria-hidden="true"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-[8px] bg-white/20 border border-white/25"
                >
                  <ActionCardIcon iconKey={card.iconKey} />
                </span>

                <div className="w-full">
                  <h3 className="text-[16px] sm:text-[17px] font-bold leading-[1.25] tracking-[-0.01em] text-white group-hover:text-[#FF85C6] transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-[11.5px] leading-[1.4] text-white/90 font-normal">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
