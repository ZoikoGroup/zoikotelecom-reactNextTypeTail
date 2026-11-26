import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sectionContent = {
  step: "05",
  eyebrow: "KEEP EXPLORING",
  headingPrefix: "More for ",
  headingAccent: "business",
} as const;

const businessCards = [
  {
    eyebrow: "BUSINESS",
    title: "Business Solutions",
    description: "The business hub — mobile, broadband and voice.",
    ctaLabel: "Explore",
    href: "/business-solutions",
    image: "/Images/cloud/9.png",
    alt: "Bright modern business workspace with a laptop overlooking tall windows",
  },
  {
    eyebrow: "BUSINESS",
    title: "Mobile for Business",
    description: "Business SIMs, devices and team lines.",
    ctaLabel: "Explore",
    href: "/ee-mobile-plans",
    image: "/Images/cloud/10.png",
    alt: "Smartphone screen showing business and productivity applications",
  },
  {
    eyebrow: "BUSINESS",
    title: "Business broadband & fibre",
    description: "Connectivity for each of your sites.",
    ctaLabel: "Explore",
    href: "/bt-broadband",
    image: "/Images/cloud/11.png",
    alt: "Server rack infrastructure with structured network cabling",
  },
] as const;

export default function MoreForBusinessSection() {
  return (
    <section
      id="more-for-business"
      className="w-full bg-[#f5f6fb] px-4 py-14 sm:px-8 lg:px-12"
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
        </div>

        {/* Three-column business cards grid */}
        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
          {businessCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#eaecf4] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.045)]"
            >
              {/* Top image banner */}
              <div className="relative h-[180px] w-full overflow-hidden bg-[#1e293b]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="text-[9.5px] font-extrabold uppercase tracking-[0.16em] text-[#9d175d]">
                    {card.eyebrow}
                  </p>

                  <h3 className="mt-1.5 text-[18px] font-bold leading-snug text-[#0c1438]">
                    {card.title}
                  </h3>

                  <p className="mt-1.5 text-[12px] leading-[1.52] text-[#4b5563]">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#c81878] transition hover:underline"
                  >
                    <span>{card.ctaLabel}</span>
                    <ArrowRight
                      className="h-3.5 w-3.5 stroke-[2.2]"
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
