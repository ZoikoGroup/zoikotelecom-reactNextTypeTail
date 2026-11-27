import Link from "next/link";
import {
  ChevronRight,
  MessageSquareText,
  Phone,
  Plug,
  Video,
  type LucideIcon,
} from "lucide-react";

const sectionContent = {
  id: "what-is-uc",
  step: "01",
  eyebrow: "ANSWER FIRST",
  headingPrefix: "What is ",
  headingAccent: "unified communications?",
  centerBadge: "One way to work",
  ctaLabel: "Discuss your requirements",
  href: "/contact",
  blocks: [
    {
      title: "What is it?",
      body: "Unified communications (UC) brings calling, meetings and messaging together so your team can work from one place.",
    },
    {
      title: "Is it available?",
      body: "Business voice can be discussed now. Meetings, messaging and integrations are under assessment and not confirmed.",
    },
    {
      title: "What should businesses assess?",
      body: "Users, numbers, devices, emergency calling, your current setup and what happens if power or internet fails.",
    },
  ],
} as const;

type OrbitPosition = "top" | "right" | "bottom" | "left";

interface OrbitNodeItem {
  position: OrbitPosition;
  label: string;
  icon: LucideIcon;
  iconClass: string;
}

const orbitNodes: readonly OrbitNodeItem[] = [
  {
    position: "top",
    label: "Calling",
    icon: Phone,
    iconClass: "text-[#3b82f6]",
  },
  {
    position: "right",
    label: "Meetings",
    icon: Video,
    iconClass: "text-[#8b5cf6]",
  },
  {
    position: "bottom",
    label: "Messaging",
    icon: MessageSquareText,
    iconClass: "text-[#e11d74]",
  },
  {
    position: "left",
    label: "Integrations",
    icon: Plug,
    iconClass: "text-[#10b981]",
  },
] as const;

function getNodePositionClasses(position: OrbitPosition): string {
  switch (position) {
    case "top":
      return "top-0 left-1/2 -translate-x-1/2";
    case "right":
      return "top-1/2 right-0 -translate-y-1/2";
    case "bottom":
      return "bottom-0 left-1/2 -translate-x-1/2";
    case "left":
      return "top-1/2 left-0 -translate-y-1/2";
  }
}

export default function WhatIsUnifiedCommunicationsSection() {
  return (
    <section
      id={sectionContent.id}
      className="w-full bg-white px-4 py-14 sm:px-8 lg:px-12 lg:py-16"
    >
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Left column: Radial diagram ("One way to work" + 4 orbiting nodes) */}
        <div className="flex items-center justify-center lg:col-span-6">
          <div className="relative flex h-[320px] w-[320px] items-center justify-center sm:h-[360px] sm:w-[360px]">
            {/* Outer dashed ring */}
            <div
              className="pointer-events-none absolute inset-[34px] rounded-full border border-dashed border-[#dfd9f5] sm:inset-[38px]"
              aria-hidden="true"
            />

            {/* Soft outer halo ring */}
            <div
              className="pointer-events-none relative flex h-[176px] w-[176px] items-center justify-center rounded-full bg-[#f5f2fc] sm:h-[196px] sm:w-[196px]"
              aria-hidden="true"
            >
              {/* Inner glowing purple-magenta core */}
              <div className="flex h-[136px] w-[136px] items-center justify-center rounded-full bg-gradient-to-br from-[#8b5cf6] via-[#a21caf] to-[#d91c81] p-4 text-center shadow-[0_14px_34px_rgba(162,28,175,0.28)] sm:h-[152px] sm:w-[152px]">
                <span className="max-w-[92px] text-[15.5px] font-extrabold leading-[1.2] text-white sm:text-[17px]">
                  {sectionContent.centerBadge}
                </span>
              </div>
            </div>

            {/* Four cardinal node tiles */}
            {orbitNodes.map((node) => {
              const Icon = node.icon;

              return (
                <div
                  key={node.label}
                  className={`absolute flex flex-col items-center gap-1.5 ${getNodePositionClasses(
                    node.position,
                  )}`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#eaecf4] bg-white shadow-[0_6px_18px_rgba(15,23,42,0.06)]">
                    <Icon
                      className={`h-5 w-5 stroke-[2] ${node.iconClass}`}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-[11px] font-bold text-[#0c1438]">
                    {node.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right column: Eyebrow, heading, 3 Q&A blocks, CTA */}
        <div className="lg:col-span-6">
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="italic text-[#e093b9]">{sectionContent.step}</span>
            <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1438] sm:text-[38px]">
            {sectionContent.headingPrefix}
            <span className="block text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>

          <div className="mt-6 space-y-5">
            {sectionContent.blocks.map((block) => (
              <div key={block.title}>
                <h3 className="text-[13.5px] font-extrabold text-[#0c1438]">
                  {block.title}
                </h3>
                <p className="mt-1 max-w-[520px] text-[12.5px] leading-[1.6] text-[#4b5563]">
                  {block.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href={sectionContent.href}
              className="inline-flex items-center gap-1 text-[12.5px] font-bold text-[#c81878] transition hover:underline"
            >
              <span>{sectionContent.ctaLabel}</span>
              <ChevronRight
                className="h-3.5 w-3.5 stroke-[2.5]"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
