"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  Eye,
  Link2,
  Mic,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const heroContent = {
  id: "call-features-hero",
  eyebrow: "LANDLINES & VOICE",
  headingPrefix: "Call ",
  headingAccent: "Features",
  description:
    "Explore ways to manage incoming and outgoing calls. Availability depends on your service and plan.",
  primaryCta: {
    label: "Explore features",
    href: "#features",
  },
  secondaryCta: {
    label: "Get help",
    href: "/support",
  },
  backgroundImage: "/Images/feat/bg.png",
  backgroundAlt:
    "Dark violet abstract geometric network mesh background with subtle audio waveform bars",
  rightImage: "/Images/feat/1.png",
  rightImageAlt:
    "Person holding a smartphone above a laptop keyboard at a desk",
  cardTitle: "Call settings",
  cardBadge: "ILLUSTRATIVE",
  cardFooterNote: "Availability depends on your service and plan",
  safetyBadgeText: "Emergency calls are never barred",
} as const;

interface CallSettingItem {
  id: "callForwarding" | "voicemail" | "callerId" | "callWaiting";
  title: string;
  subtitle: string;
  defaultEnabled: boolean;
  icon: LucideIcon;
  iconBoxClass: string;
}

const callSettings: readonly CallSettingItem[] = [
  {
    id: "callForwarding",
    title: "Call forwarding",
    subtitle: "Charges may apply",
    defaultEnabled: false,
    icon: Link2,
    iconBoxClass: "bg-[#e8f0fe] text-[#3b82f6]",
  },
  {
    id: "voicemail",
    title: "Voicemail",
    subtitle: "If supported",
    defaultEnabled: true,
    icon: Mic,
    iconBoxClass: "bg-[#f3e8ff] text-[#9333ea]",
  },
  {
    id: "callerId",
    title: "Caller ID",
    subtitle: "Approved identities only",
    defaultEnabled: true,
    icon: Eye,
    iconBoxClass: "bg-[#fce7f3] text-[#db2777]",
  },
  {
    id: "callWaiting",
    title: "Call waiting",
    subtitle: "Depends on service",
    defaultEnabled: false,
    icon: Clock,
    iconBoxClass: "bg-[#dcfce7] text-[#22c55e]",
  },
] as const;

const waveformHeights = [
  12, 22, 16, 28, 12, 24, 18, 32, 14, 26, 20, 34, 14, 24, 30, 16, 26, 14, 30,
  18, 34, 15, 22, 28, 13, 20, 32, 16, 24, 12, 26, 19, 32, 15, 24, 17, 28, 14,
  26, 20, 30, 15, 22, 13, 26, 18, 24, 14, 20, 12, 24, 16, 28, 14, 20,
] as const;

export default function CallFeaturesHeroSection() {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    callForwarding: false,
    voicemail: true,
    callerId: true,
    callWaiting: false,
  });

  const handleToggle = (id: string) => {
    setToggles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id={heroContent.id}
      className="relative w-full overflow-hidden bg-[#0b061a] px-4 pt-12 pb-16 text-white sm:px-8 lg:px-12 lg:pt-14 lg:pb-20"
    >
      {/* Background image + dark violet/magenta scrim */}
      <Image
        src={heroContent.backgroundImage}
        alt={heroContent.backgroundAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-80"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_80%_at_92%_6%,rgba(168,24,108,0.45)_0%,rgba(52,10,58,0.2)_52%,transparent_82%),linear-gradient(105deg,rgba(12,6,28,0.82)_0%,rgba(20,8,42,0.58)_52%,rgba(28,8,44,0.62)_100%)]"
        aria-hidden="true"
      />

      {/* Decorative bottom audio waveform */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-3 z-10 mx-auto flex max-w-[1160px] items-end justify-start gap-[5px] px-4 opacity-50 sm:px-8 lg:px-12"
        aria-hidden="true"
      >
        {waveformHeights.map((heightPx, index) => (
          <span
            key={index}
            style={{ height: `${heightPx}px` }}
            className="w-[3px] shrink-0 rounded-full bg-[#b469f2]/55"
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-6">
        {/* Left column: Eyebrow, display heading, copy & CTAs */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2.5">
            <span className="h-[1.5px] w-5 bg-[#ec4899]" aria-hidden="true" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#e879b0]">
              {heroContent.eyebrow}
            </span>
          </div>

          <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-[54px]">
            {heroContent.headingPrefix}
            <span className="font-extrabold italic text-[#f48cc0]">
              {heroContent.headingAccent}
            </span>
          </h1>

          <p className="mt-4 max-w-[390px] text-[13.5px] leading-[1.58] text-white/75 sm:text-[14px]">
            {heroContent.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={heroContent.primaryCta.href}
              className="inline-flex h-[38px] items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-gradient-to-r from-[#e5177e] to-[#c81384] px-4 text-[12px] font-semibold text-white shadow-[0_8px_24px_rgba(229,23,126,0.45)] transition hover:brightness-110"
            >
              <span>{heroContent.primaryCta.label}</span>
              <ChevronRight
                className="h-3.5 w-3.5 shrink-0 stroke-[2.5]"
                aria-hidden="true"
              />
            </Link>

            <Link
              href={heroContent.secondaryCta.href}
              className="inline-flex h-[38px] items-center justify-center whitespace-nowrap rounded-md border border-white/25 bg-[#190c33]/70 px-4 text-[12px] font-semibold text-white/90 backdrop-blur-xs transition hover:border-white/45 hover:bg-white/[0.1]"
            >
              {heroContent.secondaryCta.label}
            </Link>
          </div>
        </div>

        {/* Right column: Overlapping Call settings card + arched photo + emergency badge */}
        <div className="relative flex items-center justify-center lg:col-span-7 lg:justify-end">
          <div className="relative flex w-full max-w-[565px] items-center justify-end">
            {/* Floating Call settings card */}
            <div className="relative z-20 -mr-12 w-[268px] shrink-0 rounded-2xl border border-[#e7eaf3] bg-white px-4 py-3.5 text-[#0c1438] shadow-[0_22px_50px_rgba(7,3,22,0.52)] sm:-mr-16 sm:w-[306px] sm:px-5 sm:py-4">
              <div className="flex items-center justify-between gap-2 pb-2.5">
                <h2 className="text-[12.5px] font-extrabold tracking-[-0.01em] text-[#0c1438]">
                  {heroContent.cardTitle}
                </h2>
                <span className="text-[8.5px] font-extrabold uppercase tracking-[0.14em] text-[#c81878]">
                  {heroContent.cardBadge}
                </span>
              </div>

              <div className="divide-y divide-[#f1f3f9]">
                {callSettings.map((setting) => {
                  const Icon = setting.icon;
                  const enabled = Boolean(toggles[setting.id]);

                  return (
                    <div
                      key={setting.id}
                      className="flex items-center justify-between gap-2.5 py-2.5 first:pt-1.5 last:pb-2"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${setting.iconBoxClass}`}
                        >
                          <Icon
                            className="h-3.5 w-3.5 stroke-[2.2]"
                            aria-hidden="true"
                          />
                        </span>
                        <div>
                          <p className="text-[11px] font-bold leading-tight text-[#0c1438]">
                            {setting.title}
                          </p>
                          <p className="mt-0.5 text-[9px] leading-tight text-[#64748b]">
                            {setting.subtitle}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        role="switch"
                        aria-checked={enabled}
                        aria-label={`Toggle ${setting.title}`}
                        onClick={() => handleToggle(setting.id)}
                        className={`relative inline-flex h-[18px] w-[32px] shrink-0 cursor-pointer items-center rounded-full p-[2px] transition-colors ${
                          enabled ? "bg-[#0e9f6e]" : "bg-[#cbd5e1]"
                        }`}
                      >
                        <span
                          className={`h-[14px] w-[14px] rounded-full bg-white shadow-2xs transition-transform ${
                            enabled ? "translate-x-[14px]" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>

              <p className="mt-1.5 border-t border-[#f1f3f9] pt-2 text-center text-[8.5px] text-[#94a3b8]">
                {heroContent.cardFooterNote}
              </p>
            </div>

            {/* Right arched photograph + bottom-right safety pill */}
            <div className="relative z-10 h-[335px] w-[250px] shrink-0 sm:h-[390px] sm:w-[320px]">
              <div className="relative h-full w-full overflow-hidden rounded-t-[155px] rounded-b-[18px] bg-[#1e1238] shadow-[0_18px_42px_rgba(6,3,18,0.5)]">
                <Image
                  src={heroContent.rightImage}
                  alt={heroContent.rightImageAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 250px, 320px"
                  className="object-cover object-center"
                />
              </div>

              <div className="absolute -bottom-3.5 right-3 z-30 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#0fa968] px-3.5 py-1.5 text-[10px] font-semibold text-white shadow-[0_8px_20px_rgba(15,169,104,0.42)]">
                <ShieldCheck
                  className="h-3.5 w-3.5 shrink-0 stroke-[2.2]"
                  aria-hidden="true"
                />
                <span>{heroContent.safetyBadgeText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
