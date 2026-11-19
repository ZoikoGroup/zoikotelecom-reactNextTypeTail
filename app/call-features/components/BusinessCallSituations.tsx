"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Building2,
  Check,
  PhoneCall,
  Shield,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type SituationCard = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

type FilterTag = {
  label: string;
  icon: LucideIcon;
};

const SITUATIONS: readonly SituationCard[] = [
  {
    id: "reception",
    title: "Reception desk",
    description:
      "One number, many enquiries — greet callers and send them to the right person.",
    imageSrc: "/Images/call/2.png",
    imageAlt: "Friendly professional representing a reception desk",
  },
  {
    id: "hybrid",
    title: "Hybrid team",
    description: "Staff in the office, at home and on the move.",
    imageSrc: "/Images/call/3.png",
    imageAlt: "Hybrid team working in an office setup",
  },
  {
    id: "multiple-sites",
    title: "Multiple sites",
    description: "Callers need the right branch or team across locations.",
    imageSrc: "/Images/call/4.png",
    imageAlt: "Modern office corridor representing multiple sites",
  },
  {
    id: "busy-lines",
    title: "Busy phone lines",
    description:
      "Lots of calls at once — keep callers informed while they wait.",
    imageSrc: "/Images/call/5.png",
    imageAlt: "Business professionals on laptops handling busy lines",
  },
] as const;

const FILTER_TAGS: readonly FilterTag[] = [
  { label: "Route calls", icon: Workflow },
  { label: "Welcome callers", icon: PhoneCall },
  { label: "Manage busy periods", icon: Building2 },
  { label: "Messages", icon: Users },
  { label: "Teams & tools", icon: Users },
  { label: "Trust & safety", icon: Shield },
] as const;

export default function BusinessCallSituations() {
  const [selectedSituations, setSelectedSituations] = useState<
    Record<string, boolean>
  >({});

  const toggleSituation = (id: string) => {
    setSelectedSituations((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const selectedCount =
    Object.values(selectedSituations).filter(Boolean).length;

  return (
    <section className="w-full bg-white py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
            Your business
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight text-[#131138] sm:text-4xl lg:text-[42px]">
            What kind of calls does your business handle?
          </h2>
          <p className="mx-auto mt-3 max-w-[580px] text-sm text-[#545275] sm:text-base">
            Choose the situations that sound like you. We&rsquo;ll highlight the
            features worth reading about &mdash; this doesn&rsquo;t check your
            plan.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SITUATIONS.map((item) => {
            const isSelected = !!selectedSituations[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleSituation(item.id)}
                className={`group flex cursor-pointer flex-col overflow-hidden rounded-[24px] border bg-white shadow-[0_12px_32px_rgba(19,17,56,0.04)] transition hover:border-[#cfcce4] ${
                  isSelected
                    ? "border-[#e6007e] ring-2 ring-[#e6007e]/20"
                    : "border-[#ecebf4]"
                }`}
              >
                {/* Top Image Container */}
                <div className="relative h-[150px] w-full bg-[#f0f1f6]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 280px, 50vw"
                    className="object-cover"
                  />
                  {/* Selection Check Indicator */}
                  <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full border border-white/80 bg-black/40 text-white backdrop-blur-xs transition">
                    {isSelected && (
                      <Check
                        className="h-3.5 w-3.5"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </div>

                {/* Bottom Content Container */}
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <h3 className="text-base font-extrabold tracking-tight text-[#131138]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-5 text-[#545275]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Worth Exploring Banner */}
        <div className="mt-8 rounded-[22px] border border-dashed border-[#d4d1e8] bg-[#faf9fd] px-6 py-4.5 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <span className="font-extrabold text-[#131138]">
              Worth exploring:
            </span>
            <span className="text-[#545275]">
              {selectedCount === 0
                ? "Choose one or more situations above."
                : `${selectedCount} situation${selectedCount > 1 ? "s" : ""} selected. Relevant features are highlighted below.`}
            </span>
          </div>
        </div>

        {/* Filter Badges / Tags */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {FILTER_TAGS.map((tag) => {
            const Icon = tag.icon;
            return (
              <button
                key={tag.label}
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-[#ecebf4] bg-white px-5 py-2.5 text-xs font-bold text-[#131138] shadow-[0_4px_14px_rgba(19,17,56,0.03)] transition hover:border-[#e6007e] hover:text-[#e6007e]"
              >
                <Icon
                  className="h-3.5 w-3.5 text-[#e6007e]"
                  aria-hidden="true"
                />
                {tag.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
