"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Check,
  ChevronRight,
  Layers,
  PhoneCall,
  Wifi,
  type LucideIcon,
} from "lucide-react";

type BundleTab = {
  id: string;
  label: string;
  icon: LucideIcon;
  title: string;
  description: string;
  points: readonly string[];
  disclaimer: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
};

const BUNDLE_TABS: readonly BundleTab[] = [
  {
    id: "inclusive-calls",
    label: "Inclusive calls",
    icon: PhoneCall,
    title: "A calling allowance on your line or service",
    description:
      "An inclusive calling bundle is an allowance attached to a specific line, seat or account — for example a number of minutes, or calls to certain types of number.",
    points: [
      "Usually about calls to UK landlines and mobiles",
      "Can be per line, or shared across lines where proven",
      "Has limits, exclusions and charges outside the allowance",
    ],
    disclaimer:
      "Not automatically unlimited, not every UK number, and not international unless the plan says so.",
    ctaLabel: "Talk to us about this",
    ctaHref: "/contact",
    imageSrc: "/Images/voice/3.png",
    imageAlt: "Colleagues brainstorming around a whiteboard in an office",
  },
  {
    id: "voice-features",
    label: "Voice + features",
    icon: Layers,
    title: "Calling combined with business call handling",
    description:
      "A voice and features bundle pairs your line or user seat with everyday call management tools so your team can route, answer and manage incoming calls smoothly.",
    points: [
      "Includes features such as voicemail, call forwarding and hunt groups",
      "Can add auto-attendant menus, call queues or call recording",
      "Tailored per user seat or across your main business numbers",
    ],
    disclaimer:
      "Advanced contact-centre tools or third-party integrations may sit on higher tiers or separate add-ons.",
    ctaLabel: "Talk to us about this",
    ctaHref: "/contact",
    imageSrc: "/Images/voice/3.png",
    imageAlt: "Colleagues brainstorming around a whiteboard in an office",
  },
  {
    id: "multiple-sites",
    label: "Multiple sites",
    icon: Building2,
    title: "Connected voice across branches or hybrid teams",
    description:
      "A multi-site voice bundle brings offices, shops or remote staff onto one coordinated setup with shared numbering and consistent call routing.",
    points: [
      "Links multiple premises or remote workers under one account",
      "Supports local geographic numbers alongside central numbers",
      "Allows internal extension dialling and cross-site call transfers",
    ],
    disclaimer:
      "Hardware, on-site installation and local connectivity depend on each site's existing infrastructure.",
    ctaLabel: "Talk to us about this",
    ctaHref: "/contact",
    imageSrc: "/Images/voice/3.png",
    imageAlt: "Colleagues brainstorming around a whiteboard in an office",
  },
  {
    id: "voice-broadband-mobile",
    label: "Voice + broadband/mobile",
    icon: Wifi,
    title: "Business voice alongside connectivity or mobile",
    description:
      "A combined telecoms package brings your voice service together with business broadband or mobile plans under a single supplier relationship.",
    points: [
      "Aligns your phone system with the broadband connection it runs over",
      "Can group landline, VoIP, broadband and business mobiles together",
      "Simplifies account management and support across services",
    ],
    disclaimer:
      "Separate contract terms, speeds and mobile data allowances still apply to each individual service.",
    ctaLabel: "Talk to us about this",
    ctaHref: "/contact",
    imageSrc: "/Images/voice/3.png",
    imageAlt: "Colleagues brainstorming around a whiteboard in an office",
  },
] as const;

export default function VoiceBundleMeanings() {
  const [activeId, setActiveId] = useState<string>(BUNDLE_TABS[0].id);

  const activeTab =
    BUNDLE_TABS.find((tab) => tab.id === activeId) ?? BUNDLE_TABS[0];

  return (
    <section className="w-full bg-white py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#221f4d]">
            What do you mean by a voice bundle?
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight text-[#131138] sm:text-4xl lg:text-[42px]">
            Four things people usually mean
          </h2>
          <p className="mx-auto mt-3 max-w-[600px] text-sm text-[#545275] sm:text-base">
            &ldquo;Voice bundle&rdquo; can mean different things. Choose the one
            closest to what you need.
          </p>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Voice bundle meanings"
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          {BUNDLE_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab.id;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(tab.id)}
                className={
                  isActive
                    ? "inline-flex items-center gap-2.5 rounded-xl border-2 border-[#e6007e] bg-[#fdf5fa] px-5 py-2.5 text-sm font-bold text-[#d81b7a] shadow-[0_6px_18px_rgba(230,0,126,0.12)] transition"
                    : "inline-flex items-center gap-2.5 rounded-xl border border-[#e3e2ef] bg-white px-5 py-2.5 text-sm font-semibold text-[#131138] transition hover:border-[#cfcce4] hover:bg-[#faf9fd]"
                }
              >
                <Icon
                  className="h-4 w-4 shrink-0 text-[#e6007e]"
                  aria-hidden="true"
                />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <div
          role="tabpanel"
          className="mt-6 rounded-[26px] border border-[#ecebf4] bg-white p-6 shadow-[0_18px_50px_rgba(19,17,56,0.06)] sm:p-9 lg:p-10"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            {/* Left Content */}
            <div>
              <h3 className="text-xl font-extrabold tracking-tight text-[#131138] sm:text-2xl">
                {activeTab.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#545275] sm:text-[15px]">
                {activeTab.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {activeTab.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-[#2c2a4a]"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#e6007e]"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl bg-[#fbf2e3] px-4 py-3.5 text-xs leading-5 text-[#6b4d1e] sm:text-[13px]">
                <span className="font-bold text-[#5a3e14]">
                  What it doesn&apos;t mean:{" "}
                </span>
                {activeTab.disclaimer}
              </div>

              <div className="mt-6">
                <Link
                  href={activeTab.ctaHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#e6007e] to-[#c41478] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_-6px_rgba(230,0,126,0.45)] transition hover:opacity-95"
                >
                  {activeTab.ctaLabel}
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
              <Image
                src={activeTab.imageSrc}
                alt={activeTab.imageAlt}
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
