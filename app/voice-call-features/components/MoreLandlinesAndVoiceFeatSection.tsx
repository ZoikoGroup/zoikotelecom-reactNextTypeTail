import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sectionContent = {
  id: "keep-exploring",
  step: "04",
  eyebrow: "KEEP EXPLORING",
  headingPrefix: "More ",
  headingAccent: "landlines & voice",
} as const;

interface ExploreFeatCardItem {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  image: string;
  alt: string;
}

const exploreCards: readonly ExploreFeatCardItem[] = [
  {
    eyebrow: "LANDLINES & VOICE",
    title: "Home Phone",
    description: "Digital home calling and advice before you switch.",
    ctaLabel: "Explore",
    href: "/home-phone",
    image: "/Images/feat/3.png",
    alt: "Warm living room with a leather sofa, accent armchairs, plants and woven wall decor",
  },
  {
    eyebrow: "LANDLINES & VOICE",
    title: "International Calling",
    description: "Charges for calls abroad from your UK line.",
    ctaLabel: "Explore",
    href: "/international-calling",
    image: "/Images/feat/4.png",
    alt: "Earth curvature from orbit at night showing illuminated city lights and horizon",
  },
  {
    eyebrow: "SUPPORT",
    title: "Help Centre",
    description: "Troubleshooting and support routes.",
    ctaLabel: "Get help",
    href: "/support",
    image: "/Images/feat/5.png",
    alt: "Smiling person wearing a striped blazer in a modern office setting",
  },
] as const;

export default function MoreLandlinesAndVoiceFeatSection() {
  return (
    <section
      id={sectionContent.id}
      className="w-full bg-[#F5F6FB] px-4 py-14 sm:px-8 lg:px-12"
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

        {/* Three-column cards grid */}
        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
          {exploreCards.map((card) => (
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
