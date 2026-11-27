import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sectionContent = {
  step: "01",
  eyebrow: "BROWSE",
  headingPrefix: "What you’ll ",
  headingAccent: "find here",
  description: "Topics we write about. Each opens our full article list.",
  footnote:
    "Article dates, authors and topics are shown on each article. We don’t list press releases or announcements here until they’re published.",
} as const;

const topics = [
  {
    tag: "GUIDES",
    title: "Practical guides",
    description: "Step-by-step help with everyday connectivity.",
    cta: "Read articles",
    href: "/news?topic=guides",
    image: "/Images/news/5.png",
    alt: "Person writing notes at a wooden desk",
  },
  {
    tag: "INSIGHTS",
    title: "Broadband & connectivity",
    description: "Explainers on how home and business connections work.",
    cta: "Read articles",
    href: "/news?topic=insights",
    image: "/Images/news/7.png",
    alt: "Close-up of Ethernet cables plugged into a network patch panel",
  },
  {
    tag: "BLOG",
    title: "Digital skills",
    description: "Helping people get more confident with technology.",
    cta: "Read articles",
    href: "/news?topic=blog",
    image: "/Images/news/6.png",
    alt: "Person reading a newspaper while sitting on a wooden bench",
  },
] as const;

export default function BrowseTopicsSection() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1120px]">
        {/* Section header */}
        <div className="mx-auto max-w-[540px] text-center">
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

        {/* Three topic cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {topics.map((topic) => (
            <Link
              key={topic.title}
              href={topic.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#eceaf2] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(15,23,42,0.09)]"
            >
              <div className="relative h-[185px] w-full overflow-hidden bg-[#eef0f6]">
                <Image
                  src={topic.image}
                  alt={topic.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col items-start px-6 pb-6 pt-5">
                <span className="inline-flex items-center rounded-md bg-[#fcebf4] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#a61b68]">
                  {topic.tag}
                </span>

                <h3 className="mt-3 text-[17px] font-bold leading-snug text-[#0c1438] group-hover:underline">
                  {topic.title}
                </h3>

                <p className="mt-1.5 text-[13px] leading-[1.55] text-[#4b5563]">
                  {topic.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#c81878]">
                  {topic.cta}
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-7 text-center text-[11px] italic text-[#64748b]">
          {sectionContent.footnote}
        </p>
      </div>
    </section>
  );
}
