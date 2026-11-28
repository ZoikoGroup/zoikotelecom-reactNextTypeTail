import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sectionContent = {
  id: "getting-started",
  step: "02",
  eyebrow: "GETTING STARTED",
  headingPrefix: "Four ways ",
  headingAccent: "to start",
  description:
    "Choose what fits — every route begins with advice, not an order.",
  footnote:
    "Standalone home phone (without broadband) isn’t confirmed. Availability is checked for your exact address.",
} as const;

interface StartCardItem {
  stepNumber: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  image: string;
  alt: string;
}

const startCards: readonly StartCardItem[] = [
  {
    stepNumber: "1",
    title: "New home phone",
    description: "Starting fresh at your address.",
    ctaLabel: "Get advice",
    href: "/contact?topic=new-home-phone",
    image: "/Images/home/3.png",
    alt: "Modern kitchen with white cabinetry, island with stools, stainless steel appliances and pendant lights",
  },
  {
    stepNumber: "2",
    title: "Add to broadband",
    description: "Pair calling with a broadband service.",
    ctaLabel: "Check availability",
    href: "/broadband-availability",
    image: "/Images/home/4.png",
    alt: "Close-up of network patch panel ports with blue and grey ethernet cables connected",
  },
  {
    stepNumber: "3",
    title: "Switch your line",
    description: "Move an existing home phone service.",
    ctaLabel: "Get advice",
    href: "/contact?topic=switch-line",
    image: "/Images/home/5.png",
    alt: "Two people shaking hands across a desk in an office environment",
  },
  {
    stepNumber: "4",
    title: "Need advice?",
    description: "Not sure what you need? Talk to us first.",
    ctaLabel: "Get advice",
    href: "/contact?topic=home-phone-advice",
    image: "/Images/home/6.png",
    alt: "Smiling person wearing a striped blazer in an office setting",
  },
] as const;

export default function FourWaysToStartSection() {
  return (
    <section
      id={sectionContent.id}
      className="w-full bg-[#FFFFFF] px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Centered section header */}
        <div className="text-center">
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

          <p className="mt-1.5 text-[12px] leading-[1.55] text-[#4b5563]">
            {sectionContent.description}
          </p>
        </div>

        {/* Four-column cards row */}
        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {startCards.map((card) => (
            <article
              key={card.stepNumber}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#eaecf4] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.045)]"
            >
              {/* Top image with numbered circle badge */}
              <div className="relative h-[155px] w-full overflow-hidden bg-[#1e293b]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center"
                />

                <span className="absolute top-3 left-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-extrabold text-[#1a0b36] shadow-[0_4px_10px_rgba(15,23,42,0.18)]">
                  {card.stepNumber}
                </span>
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="text-[14px] font-extrabold leading-snug text-[#0c1438]">
                    {card.title}
                  </h3>

                  <p className="mt-1 text-[11px] leading-[1.5] text-[#4b5563]">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#c81878] transition hover:underline"
                  >
                    <span>{card.ctaLabel}</span>
                    <ArrowRight
                      className="h-3 w-3 stroke-[2.2]"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Centered availability disclaimer */}
        <p className="mt-6 text-center text-[10px] leading-[1.5] text-[#64748b]">
          {sectionContent.footnote}
        </p>
      </div>
    </section>
  );
}
