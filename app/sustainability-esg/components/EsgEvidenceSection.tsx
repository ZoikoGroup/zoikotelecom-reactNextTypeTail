import Image from "next/image";
import Link from "next/link";
import { BarChart3, ChevronRight } from "lucide-react";

const sectionContent = {
  step: "02",
  eyebrow: "EVIDENCE",
  headingPrefix: "What this page ",
  headingAccent: "does and doesn’t",
  headingSuffix: " show",
} as const;

const callout = {
  title: "Performance information is not included in this policy overview.",
  description:
    "You won’t find carbon figures, targets or certification badges here. Measured results will only be published with a clear method, scope and reporting period.",
  cta: { label: "Ask about ESG", href: "/contact" },
} as const;

const cards = [
  {
    tag: "Recycling",
    tagBg: "bg-[#e3f5ec]",
    tagText: "text-[#15803d]",
    title: "Recycling a device",
    description:
      "Contact us for confirmed disposal or take-back instructions — don’t assume a collection point.",
    dependsOn: "the equipment and current arrangements.",
    cta: { label: "Ask about recycling", href: "/contact" },
    image: "/Images/esg/2.png",
    alt: "Overhead view of headphones, a wireless keyboard, and a mouse on a desk",
  },
  {
    tag: "Claims",
    tagBg: "bg-[#e8effd]",
    tagText: "text-[#2563eb]",
    title: "No carbon-neutral claims",
    description: "A policy objective doesn’t make any service carbon neutral.",
    dependsOn: "measured, verified evidence.",
    cta: { label: "Read the policy", href: "/about/esg-policy" },
    image: "/Images/esg/3.png",
    alt: "Sunlight filtering through tall green forest trees",
  },
] as const;

export default function EsgEvidenceSection() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-14 sm:px-8 lg:px-12">
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
            {sectionContent.headingSuffix}
          </h2>
        </div>

        {/* Dashed green callout banner */}
        <div className="mt-7 flex flex-col items-start justify-between gap-5 rounded-2xl border border-dashed border-[#b6dec8] bg-[#f4fbf7] px-6 py-5 sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e3f4eb] text-[#7c3aed]">
              <BarChart3 className="h-5 w-5 stroke-[2.2]" aria-hidden="true" />
            </span>

            <div>
              <h3 className="text-[14.5px] font-bold leading-snug text-[#0c1438]">
                {callout.title}
              </h3>
              <p className="mt-1 max-w-[660px] text-[12.5px] leading-[1.55] text-[#4b5563]">
                {callout.description}
              </p>
            </div>
          </div>

          <Link
            href={callout.cta.href}
            className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#e2187d] to-[#c91485] px-4 text-[12.5px] font-semibold text-white shadow-[0_8px_20px_rgba(226,24,125,0.35)] transition hover:brightness-110"
          >
            {callout.cta.label}
            <ChevronRight
              className="h-3.5 w-3.5 stroke-[2.5]"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Two evidence cards */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#eceaf2] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
            >
              <div className="relative h-[210px] w-full overflow-hidden bg-[#eef0f6]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="flex flex-1 flex-col items-start px-6 pb-6 pt-5">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold ${card.tagBg} ${card.tagText}`}
                >
                  {card.tag}
                </span>

                <h3 className="mt-3 text-[18px] font-bold leading-snug text-[#0c1438]">
                  {card.title}
                </h3>

                <p className="mt-1.5 text-[13px] leading-[1.55] text-[#4b5563]">
                  {card.description}
                </p>

                <div className="mt-5 w-full border-t border-dashed border-[#e2e5ef] pt-3.5">
                  <p className="text-[11.5px] text-[#64748b]">
                    <span className="font-bold text-[#0c1438]">
                      Depends on:
                    </span>{" "}
                    {card.dependsOn}
                  </p>

                  <Link
                    href={card.cta.href}
                    className="mt-3 inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#c81878] transition hover:underline"
                  >
                    {card.cta.label}
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
