import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const sectionContent = {
  step: "01",
  eyebrow: "THREE PILLARS",
  headingPrefix: "Our stated ",
  headingAccent: "objectives",
  description:
    "What our published ESG policy says — these are aims, not measured results.",
} as const;

const pillars = [
  {
    letter: "E",
    eyebrow: "PILLAR 1",
    title: "Environment",
    description:
      "Our policy identifies energy use, waste reduction and recycling as objectives.",
    cta: "Read the policy",
    href: "/about/esg-policy#environment",
    image: "/Images/esg/4.png",
    alt: "Wind turbines silhouetted against an orange sunrise over a field",
    imagePosition: "left" as const,
    badgeBg: "bg-[#86198f]",
    eyebrowColor: "text-[#86198f]",
    subcardBg: "bg-[#eaf7f0]",
    subcards: [
      {
        title: "Energy & carbon",
        description: "Efficiency and renewable energy are stated objectives.",
      },
      {
        title: "Network & suppliers",
        description: "Partner operations are distinct from our own.",
      },
      {
        title: "Waste & recycling",
        description: "Reducing waste and recycling are stated aims.",
      },
    ],
  },
  {
    letter: "S",
    eyebrow: "PILLAR 2",
    title: "Social",
    description:
      "The policy sets out inclusion, ethical business and community objectives.",
    cta: "Read the policy",
    href: "/about/esg-policy#social",
    image: "/Images/esg/5.png",
    alt: "Group of people sitting side-by-side with arms around each other looking out at cable cars",
    imagePosition: "right" as const,
    badgeBg: "bg-[#2563eb]",
    eyebrowColor: "text-[#2563eb]",
    subcardBg: "bg-[#eef4ff]",
    subcards: [
      {
        title: "Inclusion",
        description: "Diversity and inclusion are policy objectives.",
      },
      {
        title: "Community",
        description: "Supporting communities is a stated aim.",
      },
      {
        title: "Ethical supply chain",
        description: "Ethical business practice is an objective.",
      },
    ],
  },
  {
    letter: "G",
    eyebrow: "PILLAR 3",
    title: "Governance",
    description:
      "The policy describes transparency, risk management and responsible decision-making as priorities.",
    cta: "Read the policy",
    href: "/about/esg-policy#governance",
    image: "/Images/esg/1.png",
    alt: "Close-up of hands signing a document with a pen on a desk",
    imagePosition: "left" as const,
    badgeBg: "bg-[#7c3aed]",
    eyebrowColor: "text-[#7c3aed]",
    subcardBg: "bg-[#f3eefe]",
    subcards: [
      {
        title: "Transparency",
        description: "Being open about how we work.",
      },
      {
        title: "Risk management",
        description: "Identifying and managing risks.",
      },
      {
        title: "Responsible decisions",
        description: "Legal compliance and accountability.",
      },
    ],
  },
] as const;

export default function EsgPillarsSection() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1120px]">
        {/* Section header */}
        <div className="mx-auto max-w-[580px] text-center">
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

          <p className="mt-2.5 text-[13.5px] leading-[1.6] text-[#4b5563] sm:text-sm">
            {sectionContent.description}
          </p>
        </div>

        {/* Alternating pillar cards */}
        <div className="mt-9 space-y-6">
          {pillars.map((pillar) => {
            const isImageRight = pillar.imagePosition === "right";

            return (
              <article
                key={pillar.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#eceaf2] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)] lg:min-h-[300px] lg:flex-row"
              >
                {/* Image column */}
                <div
                  className={`relative min-h-[220px] w-full bg-[#eef0f6] lg:min-h-full lg:w-[36%] ${
                    isImageRight ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 36vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Content column */}
                <div
                  className={`flex flex-1 flex-col justify-center p-6 sm:p-8 lg:w-[64%] lg:px-9 lg:py-8 ${
                    isImageRight ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-md text-xs font-extrabold text-white ${pillar.badgeBg}`}
                    >
                      {pillar.letter}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.16em] ${pillar.eyebrowColor}`}
                    >
                      {pillar.eyebrow}
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.02em] text-[#0c1438]">
                    {pillar.title}
                  </h3>

                  <p className="mt-1.5 text-[13px] leading-[1.55] text-[#4b5563]">
                    {pillar.description}
                  </p>

                  {/* Three tinted subcards */}
                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {pillar.subcards.map((sub) => (
                      <div
                        key={sub.title}
                        className={`rounded-xl px-4 py-3.5 ${pillar.subcardBg}`}
                      >
                        <h4 className="text-[12.5px] font-bold leading-snug text-[#0c1438]">
                          {sub.title}
                        </h4>
                        <p className="mt-1 text-[11.5px] leading-[1.45] text-[#4b5563]">
                          {sub.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5">
                    <Link
                      href={pillar.href}
                      className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#c81878] transition hover:underline"
                    >
                      {pillar.cta}
                      <ChevronRight
                        className="h-3.5 w-3.5 stroke-[2.5]"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
