import Image from "next/image";
import Link from "next/link";

interface BoardRelatedCard {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
}

const boardRelatedCards: BoardRelatedCard[] = [
  {
    eyebrow: "About Zoiko",
    title: "Our story",
    description: "Who we are and what we offer.",
    ctaLabel: "Read our story",
    href: "/about",
    image: "/Images/board/8.png",
    imageAlt: "City street with tall buildings and urban traffic",
  },
  {
    eyebrow: "About Zoiko",
    title: "Purpose & values",
    description: "The aims behind how we want to work.",
    ctaLabel: "Read more",
    href: "/purpose-and-values",
    image: "/Images/board/9.png",
    imageAlt:
      "Team members reviewing colourful sticky notes on a whiteboard labelled company values",
  },
  {
    eyebrow: "Support",
    title: "Help Centre",
    description: "For help with an existing service.",
    ctaLabel: "Get support",
    href: "/help",
    image: "/Images/board/10.png",
    imageAlt:
      "Colleagues collaborating over laptops in a monochrome meeting view",
    imageClassName: "grayscale contrast-105",
  },
];

export default function RelatedInformationBoardSection() {
  return (
    <section
      id="board-related-information"
      className="w-full bg-white px-4 py-14 text-[#110C3A] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Section Eyebrow & Heading */}
        <div>
          <p className="flex items-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.14em]">
            <span className="font-semibold italic text-[#E5A9C3]">05</span>
            <span className="text-[#A3367A]">Keep exploring</span>
          </p>

          <h2 className="mt-2.5 text-[34px] font-black leading-[1.12] tracking-[-0.025em] text-[#0B092E] sm:text-[42px]">
            Related{" "}
            <span className="font-extrabold text-[#9E2A76]">information</span>
          </h2>
        </div>

        {/* Three-Column Cards Grid */}
        <div className="mt-9 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {boardRelatedCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-[22px] border border-[#ECEAF2] bg-white shadow-[0_8px_24px_rgba(17,12,58,0.04)]"
            >
              {/* Top Image Banner */}
              <div className="relative h-[176px] w-full shrink-0 bg-[#18133E]">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className={`object-cover object-center ${card.imageClassName ?? ""}`}
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between px-6 py-6 sm:px-7">
                <div>
                  <p className="text-[9.5px] font-extrabold uppercase tracking-[0.13em] text-[#A3367A]">
                    {card.eyebrow}
                  </p>

                  <h3 className="mt-2 text-[20px] font-extrabold leading-snug tracking-[-0.015em] text-[#0B092E]">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-[12px] leading-[1.55] text-[#5B5675]">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1 text-[12px] font-bold text-[#D91B78] transition-colors hover:text-[#b31261]"
                  >
                    <span>{card.ctaLabel}</span>
                    <span aria-hidden="true">→</span>
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
