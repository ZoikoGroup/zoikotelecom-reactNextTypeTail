import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";

const sectionContent = {
  step: "01",
  eyebrow: "FOUR NEEDS",
  headingPrefix: "What are you ",
  headingAccent: "looking for?",
  description:
    "Four different conversations — none of these is a product you can order online.",
} as const;

const needCards = [
  {
    eyebrow: "ACCESS",
    title: "Internet access",
    summary:
      "Getting your sites online — from business broadband to dedicated connections.",
    points: [
      "Shared vs dedicated access explained",
      "Checked for each premises",
      "Speeds only in a signed proposal",
    ],
    ctaLabel: "Ask about internet access",
    href: "/contact",
    image: "/Images/cloud/4.png",
    alt: "Earth horizon and illuminated city lights viewed from orbit",
  },
  {
    eyebrow: "HOSTING",
    title: "Hosting requirements",
    summary:
      "Where your applications and data could run — and who looks after them.",
    points: [
      "Your preferred region, not a promise",
      "Backup and recovery needs",
      "Supplier roles made clear",
    ],
    ctaLabel: "Ask about hosting requirements",
    href: "/contact",
    image: "/Images/cloud/3.png",
    alt: "Server rack cabling and network switches inside a data centre",
  },
  {
    eyebrow: "INTERCONNECT",
    title: "Cloud interconnect",
    summary:
      "Private connectivity between your sites and the cloud services you use.",
    points: [
      "Different from internet access",
      "Depends on your providers",
      "Assessed by a specialist",
    ],
    ctaLabel: "Ask about cloud interconnect",
    href: "/contact",
    image: "/Images/cloud/5.png",
    alt: "Close-up of circuit board components and microchips",
  },
  {
    eyebrow: "OPERATIONS",
    title: "Managed network needs",
    summary: "Who monitors, changes and supports your network day to day.",
    points: [
      "Shared responsibility defined",
      "Support scope in writing",
      "No “fully managed” assumptions",
    ],
    ctaLabel: "Ask about managed network needs",
    href: "/contact",
    image: "/Images/cloud/6.png",
    alt: "Network analytics dashboard displaying bar charts and latency metrics",
  },
] as const;

export default function FourNeedsSection() {
  return (
    <section
      id="four-needs"
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
            <span className="font-semibold italic text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>

          <p className="mt-2 text-[13.5px] leading-[1.6] text-[#4b5563] sm:text-sm">
            {sectionContent.description}
          </p>
        </div>

        {/* 2x2 grid of horizontal split cards */}
        <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {needCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#eaecf4] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.045)] sm:flex-row"
            >
              {/* Left flush image panel */}
              <div className="relative h-48 w-full shrink-0 overflow-hidden bg-[#0c1438] sm:h-auto sm:w-[196px]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 200px"
                  className="object-cover object-center"
                />
              </div>

              {/* Right content panel */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <p className="text-[9.5px] font-extrabold uppercase tracking-[0.16em] text-[#9d175d]">
                    {card.eyebrow}
                  </p>

                  <h3 className="mt-1 text-[17px] font-bold leading-snug text-[#0c1438]">
                    {card.title}
                  </h3>

                  <p className="mt-1.5 text-[12px] leading-[1.52] text-[#4b5563]">
                    {card.summary}
                  </p>

                  <ul className="mt-3.5 space-y-1.5">
                    {card.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-[11.5px] leading-[1.45] text-[#475569]"
                      >
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 stroke-[2.2] text-[#94a3b8]"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#c81878] transition hover:underline"
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
          ))}
        </div>
      </div>
    </section>
  );
}
