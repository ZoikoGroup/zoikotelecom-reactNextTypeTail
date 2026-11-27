import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const sectionContent = {
  step: "02",
  eyebrow: "WORK CONTEXT",
  headingPrefix: "What Zoiko Telecom ",
  headingAccent: "does",
  description:
    "A factual view of our services — this isn’t a list of hiring teams.",
  footerLink: {
    label: "Read our purpose & values",
    href: "/about/purpose-values",
  },
} as const;

const serviceCards = [
  {
    eyebrow: "CONSUMER",
    title: "Mobile & connectivity",
    description:
      "SIM-only and phone plans, eSIM and roaming for people across the UK.",
    image: "/Images/careers/2.png",
    alt: "Smartphone screen showing mobile apps on a light surface",
  },
  {
    eyebrow: "HOME",
    title: "Broadband & landlines",
    description: "Broadband, full fibre, home phone and voice services.",
    image: "/Images/careers/3.png",
    alt: "Network server rack cables and blinking lights in a dark data centre",
  },
  {
    eyebrow: "BUSINESS",
    title: "Business & IoT",
    description:
      "Business mobile, voice, cloud communications and IoT connectivity.",
    image: "/Images/careers/4.png",
    alt: "Modern office meeting table with chairs near large industrial windows",
  },
] as const;

export default function WorkContextSection() {
  return (
    <section
      id="work-context"
      className="w-full bg-[#F5F6FB] px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Centered section header */}
        <div className="mx-auto max-w-[600px] text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
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

        {/* Three service cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {serviceCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#eceaf2] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
            >
              <div className="relative h-[185px] w-full overflow-hidden bg-[#eef0f6]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="flex flex-1 flex-col items-start px-6 pb-6 pt-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9d175d]">
                  {card.eyebrow}
                </p>

                <h3 className="mt-1.5 text-[17px] font-bold leading-snug text-[#0c1438]">
                  {card.title}
                </h3>

                <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#4b5563]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Centered bottom link */}
        <div className="mt-8 text-center">
          <Link
            href={sectionContent.footerLink.href}
            className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#c81878] transition hover:underline"
          >
            <span>{sectionContent.footerLink.label}</span>
            <ChevronRight
              className="h-3.5 w-3.5 stroke-[2.5]"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
