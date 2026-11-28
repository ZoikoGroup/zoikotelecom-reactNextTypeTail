import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const sectionContent = {
  step: "01",
  eyebrow: "WHAT WE CAN DISCUSS",
  headingPrefix: "Four areas of ",
  headingAccent: "need",
  description:
    "These describe needs to assess — not a catalogue of ready-made products.",
} as const;

interface NeedAreaCard {
  number: string;
  title: string;
  description: string;
  tags: readonly string[];
  ctaLabel: string;
  href: string;
  image: string;
  alt: string;
}

const needAreas: readonly NeedAreaCard[] = [
  {
    number: "01",
    title: "Network design & connectivity",
    description:
      "How your sites connect — WAN, LAN and Internet access — designed around how you work.",
    tags: ["WAN / LAN", "Access", "Multi-site"],
    ctaLabel: "Discuss this",
    href: "/contact",
    image: "/Images/it/2.png",
    alt: "Close-up of structured network patch panel ports with blue and white Ethernet cables",
  },
  {
    number: "02",
    title: "Managed network operations",
    description:
      "Who monitors, changes and looks after your network day to day.",
    tags: ["Monitoring", "Change control", "Support window"],
    ctaLabel: "Discuss this",
    href: "/contact",
    image: "/Images/it/3.png",
    alt: "Dark monitoring dashboard displaying real-time network traffic graphs and metrics",
  },
  {
    number: "03",
    title: "IT service requirements",
    description:
      "Support for your people, devices and everyday IT — scoped to your needs.",
    tags: ["User support", "Devices", "Onboarding"],
    ctaLabel: "Discuss this",
    href: "/contact",
    image: "/Images/it/4.png",
    alt: "Colleagues working together at laptops in an office environment",
  },
  {
    number: "04",
    title: "Security & resilience requirements",
    description:
      "Segmentation, backup paths and resilience — as your requirements, not certifications.",
    tags: ["Segmentation", "Resilience", "Continuity"],
    ctaLabel: "Discuss this",
    href: "/contact",
    image: "/Images/it/5.png",
    alt: "Hands using a laptop and smartphone side by side to manage communications",
  },
] as const;

export default function FourAreasOfNeedSection() {
  return (
    <section
      id="four-areas-of-need"
      className="w-full bg-white px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Left-aligned section header */}
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

          <p className="mt-2 text-[13.5px] leading-[1.6] text-[#4b5563] sm:text-sm">
            {sectionContent.description}
          </p>
        </div>

        {/* 2x2 grid of horizontal split cards */}
        <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {needAreas.map((card) => (
            <article
              key={card.number}
              className="grid grid-cols-1 overflow-hidden rounded-3xl border border-[#eaecf4] bg-white shadow-[0_8px_26px_rgba(15,23,42,0.045)] sm:grid-cols-12"
            >
              {/* Left content column */}
              <div className="flex flex-col justify-between p-6 sm:col-span-7 sm:p-7">
                <div>
                  <span
                    className="inline-block select-none text-[28px] font-black leading-none tracking-[-0.03em] text-transparent [-webkit-text-stroke:1.4px_#2dd4bf]"
                    aria-hidden="true"
                  >
                    {card.number}
                  </span>

                  <h3 className="mt-3 text-[17px] font-extrabold leading-snug tracking-[-0.015em] text-[#0c1438]">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-[12px] leading-[1.55] text-[#4b5563]">
                    {card.description}
                  </p>

                  <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-[#e6faf5] px-2.5 py-0.5 text-[10px] font-semibold text-[#0d9488]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1 text-[12px] font-bold text-[#e11d74] transition hover:underline"
                  >
                    <span>{card.ctaLabel}</span>
                    <ChevronRight
                      className="h-3.5 w-3.5 stroke-[2.5]"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>

              {/* Right image column */}
              <div className="relative min-h-[190px] w-full overflow-hidden bg-[#0f172a] sm:col-span-5 sm:min-h-full">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 42vw, 22vw"
                  className="object-cover object-center"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
