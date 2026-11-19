"use client";

import React from "react";
import {
  Sparkles,
  MessageSquare,
  ArrowLeftRight,
  FileText,
} from "lucide-react";

interface ServiceHighlightItem {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly iconKey: "onboarding" | "issue" | "changes" | "terms";
  readonly href: "#";
}

const SERVICE_HIGHLIGHTS = [
  {
    id: "onboarding",
    title: "Onboarding",
    subtitle: "Requirements to handover",
    iconKey: "onboarding",
    href: "#",
  },
  {
    id: "issue-coordination",
    title: "Issue coordination",
    subtitle: "Reported, triaged, escalated",
    iconKey: "issue",
    href: "#",
  },
  {
    id: "service-changes",
    title: "Service changes",
    subtitle: "Moves, adds and changes",
    iconKey: "changes",
    href: "#",
  },
  {
    id: "clear-terms",
    title: "Clear terms",
    subtitle: "Commitments set out in writing",
    iconKey: "terms",
    href: "#",
  },
] as const satisfies readonly ServiceHighlightItem[];

export default function ServiceHighlightsBar() {
  const renderIcon = (iconKey: ServiceHighlightItem["iconKey"]) => {
    switch (iconKey) {
      case "onboarding":
        return (
          <Sparkles
            className="h-[18px] w-[18px] text-[#E61E88] shrink-0"
            strokeWidth={1.85}
          />
        );
      case "issue":
        return (
          <MessageSquare
            className="h-[18px] w-[18px] text-[#E61E88] shrink-0"
            strokeWidth={1.85}
          />
        );
      case "changes":
        return (
          <ArrowLeftRight
            className="h-[18px] w-[18px] text-[#E61E88] shrink-0"
            strokeWidth={1.85}
          />
        );
      case "terms":
        return (
          <FileText
            className="h-[18px] w-[18px] text-[#E61E88] shrink-0"
            strokeWidth={1.85}
          />
        );
    }
  };

  return (
    <section
      aria-label="Service highlights"
      className="w-full bg-white border-b border-[#E5E7EB]"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E7EB]">
        {SERVICE_HIGHLIGHTS.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="group flex items-center justify-center gap-3 px-6 py-[18px] bg-white hover:bg-[#FAFAFC] transition-colors"
          >
            <span className="flex h-6 w-6 items-center justify-center shrink-0">
              {renderIcon(item.iconKey)}
            </span>
            <span className="flex flex-col text-left leading-tight">
              <span className="text-[13.5px] font-bold tracking-[-0.01em] text-[#111827] group-hover:text-[#E61E88] transition-colors">
                {item.title}
              </span>
              <span className="mt-0.5 text-[12px] font-normal text-[#6B7280]">
                {item.subtitle}
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
