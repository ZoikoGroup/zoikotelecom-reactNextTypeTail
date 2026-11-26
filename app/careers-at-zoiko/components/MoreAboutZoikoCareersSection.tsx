import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sectionContent = {
  step: "05",
  eyebrow: "KEEP EXPLORING",
  headingPrefix: "More ",
  headingAccent: "about Zoiko",
} as const;

const exploreCards = [
  {
    eyebrow: "ABOUT ZOIKO",
    title: "Our story",
    description: "Who we are and what we offer.",
    cta: "Read our story",
    href: "/about/our-story",
    image: "/Images/careers/5.png",
    alt: "City street lined with tall buildings and traffic",
  },
  {
    eyebrow: "ABOUT ZOIKO",
    title: "Purpose & values",
    description: "The aims behind how we want to work.",
    cta: "Read more",
    href: "/about/purpose-values",
    image: "/Images/careers/6.png",
    alt: "Overhead view of laptops, notebooks, and workspace items on a wooden desk",
  },
  {
    eyebrow: "ABOUT ZOIKO",
    title: "News & media",
    description: "Company updates and insights.",
    cta: "Read the news",
    href: "/about/news-media",
    image: "/Images/careers/7.png",
    alt: "Hands typing on a laptop keyboard in front of a monitor",
  },
] as const;

export default function MoreAboutZoikoCareersSection() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-8 lg:px-12">
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

        {/* Three cards */}
        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
          {exploreCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#eceaf2] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(15,23,42,0.09)]"
            >
              <div className="relative h-[185px] w-full overflow-hidden bg-[#eef0f6]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col items-start px-6 pb-6 pt-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#3b5bdb]">
                  {card.eyebrow}
                </p>

                <h3 className="mt-1.5 text-[17px] font-bold leading-snug text-[#0c1438] group-hover:underline">
                  {card.title}
                </h3>

                <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#4b5563]">
                  {card.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#c81878]">
                  {card.cta}
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
