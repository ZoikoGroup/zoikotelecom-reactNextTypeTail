import Image from "next/image";
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
  id: "capabilities",
  step: "02",
  eyebrow: "CAPABILITIES",
  headingPrefix: "Four families, ",
  headingAccent: "clearly labelled",
  description:
    "Each card shows its status in words — not just colour — and what it depends on.",
} as const;

interface CapabilityCardItem {
  title: string;
  description: string;
  statusText: string;
  statusClass: string;
  dependsOn: string;
  ctaLabel: string;
  href: string;
  image: string;
  imageClass: string;
  alt: string;
  icon: LucideIcon;
  iconBoxClass: string;
}

const capabilityCards: readonly CapabilityCardItem[] = [
  {
    title: "Calling",
    description: "Business calling and numbers for your team.",
    statusText: "BUSINESS VOICE — DISCUSS WITH OUR TEAM",
    statusClass: "bg-[#e7f8ef] text-[#15803d]",
    dependsOn: "Numbers, users and current phone system",
    ctaLabel: "Explore business voice",
    href: "/business-voice",
    image: "/Images/uni/4.png",
    imageClass: "object-cover object-center grayscale contrast-105",
    alt: "Colleagues reviewing laptops together in a monochrome office scene",
    icon: Phone,
    iconBoxClass: "bg-[#2563eb] text-white",
  },
  {
    title: "Meetings",
    description: "Video and audio meetings for internal and external calls.",
    statusText: "UNDER ASSESSMENT — NOT CONFIRMED",
    statusClass: "bg-[#fff3d6] text-[#92400e]",
    dependsOn: "Meeting seats, devices and integrations",
    ctaLabel: "Ask about meetings",
    href: "/contact",
    image: "/Images/uni/5.png",
    imageClass: "object-cover object-center",
    alt: "Colleagues high-fiving across a desk with a laptop during a meeting",
    icon: Video,
    iconBoxClass: "bg-[#7c3aed] text-white",
  },
  {
    title: "Messaging",
    description: "Team chat and presence alongside calls.",
    statusText: "UNDER ASSESSMENT — NOT CONFIRMED",
    statusClass: "bg-[#fff3d6] text-[#92400e]",
    dependsOn: "Users and how teams work today",
    ctaLabel: "Ask about messaging",
    href: "/contact",
    image: "/Images/uni/6.png",
    imageClass: "object-cover object-center",
    alt: "Team members collaborating with laptops around a wooden table",
    icon: MessageSquareText,
    iconBoxClass: "bg-[#db2777] text-white",
  },
  {
    title: "Integrations",
    description: "Links to tools such as CRM, sign-in or contact centre.",
    statusText: "UNDER ASSESSMENT — NOT CONFIRMED",
    statusClass: "bg-[#fff3d6] text-[#92400e]",
    dependsOn: "Approved vendor and version evidence",
    ctaLabel: "Ask about integrations",
    href: "/contact",
    image: "/Images/uni/7.png",
    imageClass: "object-cover object-center",
    alt: "Modern glass-walled meeting room and workspace interior",
    icon: Plug,
    iconBoxClass: "bg-[#15803d] text-white",
  },
] as const;

export default function FourFamiliesClearlyLabelledSection() {
  return (
    <section
      id={sectionContent.id}
      className="w-full bg-[#f5f6fb] px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Centered section header */}
        <div className="mx-auto max-w-[680px] text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="italic text-[#e093b9]">{sectionContent.step}</span>
            <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold tracking-[-0.025em] text-[#0c1438] sm:text-[36px]">
            {sectionContent.headingPrefix}
            <span className="text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>

          <p className="mt-2 text-[13.5px] leading-[1.6] text-[#4b5563] sm:text-sm">
            {sectionContent.description}
          </p>
        </div>

        {/* Four-column capability cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilityCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="flex flex-col overflow-hidden rounded-3xl border border-[#eaecf4] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.045)]"
              >
                {/* Top banner image with overlapping square icon badge */}
                <div className="relative h-[156px] w-full">
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className={card.imageClass}
                    />
                  </div>

                  <span
                    className={`absolute right-4 -bottom-4 z-10 flex h-9 w-9 items-center justify-center rounded-xl shadow-md ring-2 ring-white ${card.iconBoxClass}`}
                    aria-hidden="true"
                  >
                    <Icon className="h-4 w-4 stroke-[2.2]" />
                  </span>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col justify-between px-5 pt-6 pb-5">
                  <div>
                    <span
                      className={`inline-flex items-center rounded-md px-2.5 py-1 text-[8.5px] font-extrabold leading-snug uppercase tracking-[0.1em] ${card.statusClass}`}
                    >
                      {card.statusText}
                    </span>

                    <h3 className="mt-3 text-[16.5px] font-extrabold leading-snug text-[#0c1438]">
                      {card.title}
                    </h3>

                    <p className="mt-1.5 text-[11.5px] leading-[1.52] text-[#4b5563]">
                      {card.description}
                    </p>

                    <div className="mt-3.5 border-t border-dotted border-[#e2e8f0] pt-3 text-[10.5px] leading-[1.48] text-[#64748b]">
                      <strong className="font-bold text-[#334155]">
                        Depends on:
                      </strong>{" "}
                      <span>{card.dependsOn}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-1 text-[11.5px] font-bold text-[#c81878] transition hover:underline"
                    >
                      <span>{card.ctaLabel}</span>
                      <ChevronRight
                        className="h-3.5 w-3.5 stroke-[2.5]"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
