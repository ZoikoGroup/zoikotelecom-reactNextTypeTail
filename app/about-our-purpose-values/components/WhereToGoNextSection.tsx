import Image from "next/image";
import Link from "next/link";

interface NextDestinationCard {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
}

const nextDestinations: NextDestinationCard[] = [
  {
    eyebrow: "About Zoiko",
    title: "Our story",
    description: "Who we are, what we offer and where to verify the company.",
    ctaLabel: "Read our story",
    href: "/about",
    image: "/Images/vals/8.png",
    imageAlt: "City street lined with tall office buildings and traffic",
  },
  {
    eyebrow: "Business",
    title: "Business Solutions",
    description:
      "Explore connectivity for organisations and discuss your needs.",
    ctaLabel: "Explore business",
    href: "/business",
    image: "/Images/vals/6.png",
    imageAlt:
      "Modern office corridor with glass partitions and workspace furnishings",
  },
  {
    eyebrow: "Support",
    title: "Help Centre",
    description: "Answers, safe checks and ways to contact us.",
    ctaLabel: "Get help",
    href: "/help",
    image: "/Images/vals/7.png",
    imageAlt: "Colleagues discussing work at laptops in a meeting room",
    imageClassName: "grayscale contrast-105",
  },
];

export default function WhereToGoNextSection() {
  return (
    <section
      id="where-to-go-next"
      className="w-full bg-[#F5F6FB] px-4 py-14 text-[#110C3A] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Section Header */}
        <div>
          <p className="flex items-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.14em]">
            <span className="font-semibold italic text-[#E5A9C3]">04</span>
            <span className="text-[#A3367A]">Keep exploring</span>
          </p>

          <h2 className="mt-2.5 text-[34px] font-black leading-[1.12] tracking-[-0.025em] text-[#0B092E] sm:text-[42px]">
            Where to{" "}
            <span className="font-extrabold italic text-[#9E2A76]">
              go next
            </span>
          </h2>
        </div>

        {/* Three-Column Destination Cards */}
        <div className="mt-9 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {nextDestinations.map((card) => (
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
