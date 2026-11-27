"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Briefcase,
  Calendar,
  Clock,
  Eye,
  Home,
  Link2,
  Lock,
  Mic,
  Network,
  type LucideIcon,
} from "lucide-react";

const sectionContent = {
  id: "your-service",
  step: "01",
  eyebrow: "YOUR SERVICE",
  headingPrefix: "Choose your service ",
  headingAccent: "for guidance",
  description: "Features work differently depending on the service you have.",
} as const;

type ServiceKey = "homePhone" | "businessVoice" | "sipAndVoip";

interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  warning: string;
  appliesTo: readonly string[];
  icon: LucideIcon;
  iconBoxClass: string;
  cornerTintClass: string;
  warningIconClass: string;
  pillClass: string;
}

interface ServiceGuidanceConfig {
  key: ServiceKey;
  tabLabel: string;
  bannerTitle: string;
  bannerDescription: string;
  bannerIcon: LucideIcon;
  features: readonly FeatureCardItem[];
}

const serviceConfigs: readonly ServiceGuidanceConfig[] = [
  {
    key: "homePhone",
    tabLabel: "Home phone",
    bannerTitle: "Home phone",
    bannerDescription:
      "Features apply to your home line. Changes are made by the account holder or a verified representative.",
    bannerIcon: Home,
    features: [
      {
        id: "call-forwarding",
        title: "Call forwarding",
        description:
          "Send calls to another number when you’re busy, away or don’t answer.",
        warning:
          "Forwarded calls may be charged, depending on the destination.",
        appliesTo: ["Applies to: Line"],
        icon: Link2,
        iconBoxClass: "bg-[#2563eb] text-white",
        cornerTintClass: "bg-[#e8f0fe]",
        warningIconClass: "text-[#3b82f6]",
        pillClass: "bg-[#e8f0fe] text-[#1d4ed8]",
      },
      {
        id: "voicemail",
        title: "Voicemail",
        description: "Let callers leave a message when you can’t answer.",
        warning:
          "Before turning it off, check what happens to saved messages and shared mailboxes.",
        appliesTo: ["Applies to: Mailbox"],
        icon: Mic,
        iconBoxClass: "bg-[#7c3aed] text-white",
        cornerTintClass: "bg-[#f3e8ff]",
        warningIconClass: "text-[#8b5cf6]",
        pillClass: "bg-[#f3e8ff] text-[#6d28d9]",
      },
      {
        id: "caller-id-privacy",
        title: "Caller ID & privacy",
        description: "Choose how your number is shown, where supported.",
        warning:
          "Only identities authorised for your service can be used. Emergency services still see your details.",
        appliesTo: ["Applies to: Line", "Applies to: User"],
        icon: Eye,
        iconBoxClass: "bg-[#db2777] text-white",
        cornerTintClass: "bg-[#fce7f3]",
        warningIconClass: "text-[#ec4899]",
        pillClass: "bg-[#fce7f3] text-[#be185d]",
      },
      {
        id: "call-waiting",
        title: "Call waiting",
        description:
          "Hear when another call comes in while you’re on the phone.",
        warning: "Depends on your service supporting it.",
        appliesTo: ["Applies to: Line"],
        icon: Clock,
        iconBoxClass: "bg-[#15803d] text-white",
        cornerTintClass: "bg-[#dcfce7]",
        warningIconClass: "text-[#16a34a]",
        pillClass: "bg-[#dcfce7] text-[#166534]",
      },
      {
        id: "call-barring",
        title: "Call barring",
        description:
          "Block certain types of outgoing calls, such as international or premium numbers.",
        warning: "Emergency calls are always excluded from barring.",
        appliesTo: ["Applies to: Line", "Applies to: Account"],
        icon: Lock,
        iconBoxClass: "bg-[#b45309] text-white",
        cornerTintClass: "bg-[#fef3c7]",
        warningIconClass: "text-[#d97706]",
        pillClass: "bg-[#fef3c7] text-[#b45309]",
      },
      {
        id: "business-schedules",
        title: "Business schedules",
        description:
          "Opening hours, closed-hours routing and queue rules for business voice.",
        warning: "Edited only by people assigned to that site or queue.",
        appliesTo: ["Applies to: Site", "Applies to: Queue"],
        icon: Calendar,
        iconBoxClass: "bg-[#1e1b4b] text-white",
        cornerTintClass: "bg-[#e2e8f0]",
        warningIconClass: "text-[#475569]",
        pillClass: "bg-[#e2e8f0] text-[#334155]",
      },
    ],
  },
  {
    key: "businessVoice",
    tabLabel: "Business voice",
    bannerTitle: "Business voice",
    bannerDescription:
      "Features apply across business lines, users, sites and queues according to your assigned permissions and plan.",
    bannerIcon: Briefcase,
    features: [
      {
        id: "call-forwarding",
        title: "Call forwarding",
        description:
          "Route unanswered, busy or out-of-hours calls to colleagues, numbers or queues.",
        warning:
          "Forwarded calls may be charged, depending on the destination.",
        appliesTo: ["Applies to: Line", "Applies to: User"],
        icon: Link2,
        iconBoxClass: "bg-[#2563eb] text-white",
        cornerTintClass: "bg-[#e8f0fe]",
        warningIconClass: "text-[#3b82f6]",
        pillClass: "bg-[#e8f0fe] text-[#1d4ed8]",
      },
      {
        id: "voicemail",
        title: "Voicemail",
        description:
          "Capture messages for individual users or shared team mailboxes when lines aren’t answered.",
        warning:
          "Before turning it off, check what happens to saved messages and shared mailboxes.",
        appliesTo: ["Applies to: Mailbox", "Applies to: User"],
        icon: Mic,
        iconBoxClass: "bg-[#7c3aed] text-white",
        cornerTintClass: "bg-[#f3e8ff]",
        warningIconClass: "text-[#8b5cf6]",
        pillClass: "bg-[#f3e8ff] text-[#6d28d9]",
      },
      {
        id: "caller-id-privacy",
        title: "Caller ID & privacy",
        description:
          "Control outbound presentation and privacy rules across users and business numbers.",
        warning:
          "Only identities authorised for your service can be used. Emergency services still see your details.",
        appliesTo: ["Applies to: Line", "Applies to: User"],
        icon: Eye,
        iconBoxClass: "bg-[#db2777] text-white",
        cornerTintClass: "bg-[#fce7f3]",
        warningIconClass: "text-[#ec4899]",
        pillClass: "bg-[#fce7f3] text-[#be185d]",
      },
      {
        id: "call-waiting",
        title: "Call waiting",
        description:
          "Alert active users when a second call arrives while they are already on a call.",
        warning: "Depends on your service and plan supporting it.",
        appliesTo: ["Applies to: Line", "Applies to: User"],
        icon: Clock,
        iconBoxClass: "bg-[#15803d] text-white",
        cornerTintClass: "bg-[#dcfce7]",
        warningIconClass: "text-[#16a34a]",
        pillClass: "bg-[#dcfce7] text-[#166534]",
      },
      {
        id: "call-barring",
        title: "Call barring",
        description:
          "Restrict international, premium or high-cost outbound call types by line or account.",
        warning: "Emergency calls are always excluded from barring.",
        appliesTo: ["Applies to: Line", "Applies to: Account"],
        icon: Lock,
        iconBoxClass: "bg-[#b45309] text-white",
        cornerTintClass: "bg-[#fef3c7]",
        warningIconClass: "text-[#d97706]",
        pillClass: "bg-[#fef3c7] text-[#b45309]",
      },
      {
        id: "business-schedules",
        title: "Business schedules",
        description:
          "Configure opening hours, closed-hours routing and queue rules across sites.",
        warning: "Edited only by people assigned to that site or queue.",
        appliesTo: ["Applies to: Site", "Applies to: Queue"],
        icon: Calendar,
        iconBoxClass: "bg-[#1e1b4b] text-white",
        cornerTintClass: "bg-[#e2e8f0]",
        warningIconClass: "text-[#475569]",
        pillClass: "bg-[#e2e8f0] text-[#334155]",
      },
    ],
  },
  {
    key: "sipAndVoip",
    tabLabel: "SIP & VoIP",
    bannerTitle: "SIP & VoIP",
    bannerDescription:
      "Feature behaviour depends on your SIP trunking, PBX configuration and authorised account roles.",
    bannerIcon: Network,
    features: [
      {
        id: "call-forwarding",
        title: "Call forwarding",
        description:
          "Manage diversion and failover destinations according to your SIP routing rules.",
        warning:
          "Forwarded calls may be charged, depending on the destination.",
        appliesTo: ["Applies to: Line", "Applies to: Site"],
        icon: Link2,
        iconBoxClass: "bg-[#2563eb] text-white",
        cornerTintClass: "bg-[#e8f0fe]",
        warningIconClass: "text-[#3b82f6]",
        pillClass: "bg-[#e8f0fe] text-[#1d4ed8]",
      },
      {
        id: "voicemail",
        title: "Voicemail",
        description:
          "Check where messages and shared mailboxes are hosted when calls go unanswered.",
        warning:
          "Before turning it off, check what happens to saved messages and shared mailboxes.",
        appliesTo: ["Applies to: Mailbox"],
        icon: Mic,
        iconBoxClass: "bg-[#7c3aed] text-white",
        cornerTintClass: "bg-[#f3e8ff]",
        warningIconClass: "text-[#8b5cf6]",
        pillClass: "bg-[#f3e8ff] text-[#6d28d9]",
      },
      {
        id: "caller-id-privacy",
        title: "Caller ID & privacy",
        description:
          "Present approved numbers and privacy headers in line with carrier rules.",
        warning:
          "Only identities authorised for your service can be used. Emergency services still see your details.",
        appliesTo: ["Applies to: Line", "Applies to: Account"],
        icon: Eye,
        iconBoxClass: "bg-[#db2777] text-white",
        cornerTintClass: "bg-[#fce7f3]",
        warningIconClass: "text-[#ec4899]",
        pillClass: "bg-[#fce7f3] text-[#be185d]",
      },
      {
        id: "call-waiting",
        title: "Call waiting",
        description:
          "Concurrency and call-waiting handling depend on your trunk profile and endpoints.",
        warning: "Depends on your service and configuration supporting it.",
        appliesTo: ["Applies to: Line"],
        icon: Clock,
        iconBoxClass: "bg-[#15803d] text-white",
        cornerTintClass: "bg-[#dcfce7]",
        warningIconClass: "text-[#16a34a]",
        pillClass: "bg-[#dcfce7] text-[#166534]",
      },
      {
        id: "call-barring",
        title: "Call barring",
        description:
          "Apply destination restrictions to protect against unauthorised international or premium calls.",
        warning: "Emergency calls are always excluded from barring.",
        appliesTo: ["Applies to: Line", "Applies to: Account"],
        icon: Lock,
        iconBoxClass: "bg-[#b45309] text-white",
        cornerTintClass: "bg-[#fef3c7]",
        warningIconClass: "text-[#d97706]",
        pillClass: "bg-[#fef3c7] text-[#b45309]",
      },
      {
        id: "business-schedules",
        title: "Business schedules",
        description:
          "Time-of-day and holiday routing rules managed on your voice platform or queue.",
        warning: "Edited only by people assigned to that site or queue.",
        appliesTo: ["Applies to: Site", "Applies to: Queue"],
        icon: Calendar,
        iconBoxClass: "bg-[#1e1b4b] text-white",
        cornerTintClass: "bg-[#e2e8f0]",
        warningIconClass: "text-[#475569]",
        pillClass: "bg-[#e2e8f0] text-[#334155]",
      },
    ],
  },
] as const;

export default function ChooseYourServiceGuidanceSection() {
  const [selectedService, setSelectedService] =
    useState<ServiceKey>("homePhone");

  const activeConfig =
    serviceConfigs.find((item) => item.key === selectedService) ??
    serviceConfigs[0];

  const BannerIcon = activeConfig.bannerIcon;

  return (
    <section
      id={sectionContent.id}
      className="w-full bg-white px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Section header */}
        <div>
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="italic text-[#e093b9]">{sectionContent.step}</span>
            <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold tracking-[-0.025em] text-[#0c1438] sm:text-[36px]">
            {sectionContent.headingPrefix}
            <span className="text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>

          <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#4b5563]">
            {sectionContent.description}
          </p>
        </div>

        {/* Service selector pills */}
        <div
          role="tablist"
          aria-label="Choose your service for guidance"
          className="mt-5 flex flex-wrap items-center gap-2.5"
        >
          {serviceConfigs.map((service) => {
            const TabIcon = service.bannerIcon;
            const isSelected = service.key === selectedService;

            return (
              <button
                key={service.key}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedService(service.key)}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-[12px] font-bold transition ${
                  isSelected
                    ? "bg-[#1a0b36] text-white shadow-[0_6px_16px_rgba(26,11,54,0.2)]"
                    : "border border-[#e2e6f0] bg-white text-[#334155] hover:border-[#cbd5e1] hover:bg-[#f8fafc]"
                }`}
              >
                <TabIcon
                  className={`h-3.5 w-3.5 stroke-[2.2] ${
                    isSelected ? "text-[#f48cc0]" : "text-[#475569]"
                  }`}
                  aria-hidden="true"
                />
                <span>{service.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Selected service summary banner */}
        <div className="mt-4 flex items-start gap-3.5 rounded-2xl border border-[#f5d0fe]/70 bg-gradient-to-r from-[#fbf2fa] via-[#f9effa] to-[#f6effc] px-4 py-3.5 sm:items-center sm:px-5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#1a0b36] text-[#f48cc0]">
            <BannerIcon className="h-4 w-4 stroke-[2.2]" aria-hidden="true" />
          </div>

          <div>
            <h3 className="text-[13px] font-extrabold text-[#0c1438]">
              {activeConfig.bannerTitle}
            </h3>
            <p className="mt-0.5 text-[11.5px] leading-[1.45] text-[#4b5563]">
              {activeConfig.bannerDescription}
            </p>
          </div>
        </div>

        {/* 3x2 feature cards grid */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {activeConfig.features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.id}
                className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#eaecf4] bg-white p-5 shadow-[0_6px_20px_rgba(15,23,42,0.035)]"
              >
                {/* Decorative quarter-circle in top-right corner */}
                <span
                  className={`pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full ${feature.cornerTintClass}`}
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-xl ${feature.iconBoxClass}`}
                  >
                    <Icon className="h-4 w-4 stroke-[2.2]" aria-hidden="true" />
                  </div>

                  <h4 className="mt-4 text-[15px] font-extrabold leading-snug text-[#0c1438]">
                    {feature.title}
                  </h4>

                  <p className="mt-1 text-[11.5px] leading-[1.5] text-[#4b5563]">
                    {feature.description}
                  </p>

                  {/* Advisory callout box */}
                  <div className="mt-3.5 flex items-start gap-2 rounded-lg bg-[#f6f7fb] px-3 py-2 text-[10.5px] leading-[1.45] text-[#475569]">
                    <AlertTriangle
                      className={`mt-0.5 h-3.5 w-3.5 shrink-0 stroke-[2.2] ${feature.warningIconClass}`}
                      aria-hidden="true"
                    />
                    <span>{feature.warning}</span>
                  </div>
                </div>

                {/* Scope pills */}
                <div className="relative z-10 mt-3.5 flex flex-wrap items-center gap-1.5">
                  {feature.appliesTo.map((scopeLabel) => (
                    <span
                      key={scopeLabel}
                      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[9.5px] font-bold ${feature.pillClass}`}
                    >
                      {scopeLabel}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
