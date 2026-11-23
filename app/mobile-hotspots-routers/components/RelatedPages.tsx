import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const IMG = "/Images/mobile-hotspots-routers";

// "#" links are placeholders until those Devices pages exist (matches the navbar Devices menu).
const PAGES = [
  {
    title: "Mobile Phones",
    text: "Choosing a handset",
    href: "#",
    image: "related-mobile-phones.webp",
    alt: "Smartphone on a white desk",
  },
  {
    title: "Tablets",
    text: "Choosing a tablet",
    href: "#",
    image: "related-tablets.webp",
    alt: "Tablet with a colourful screen",
  },
  {
    title: "Accessories",
    text: "Cases, chargers, audio",
    href: "/devices-accessories",
    image: "related-accessories.webp",
    alt: "Over-ear headphones on a yellow background",
  },
  {
    title: "Mobile plans",
    text: "Separate airtime plans",
    href: "/ee-mobile-plans",
    image: "related-mobile-plans.webp",
    alt: "Colleagues talking at a table with a laptop",
  },
] as const;

export default function RelatedPages() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader eyebrow="Keep exploring" title="Related pages" className="max-w-2xl" />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PAGES.map(({ title, text, href, image, alt }) => (
            <Link
              key={title}
              href={href}
              className="group overflow-hidden rounded-[20px] border border-[#E6E9F2] bg-white shadow-[0_12px_30px_rgba(17,24,60,0.08)] transition-transform hover:-translate-y-0.5"
            >
              <div className="relative aspect-[286/120] w-full overflow-hidden">
                <Image
                  src={`${IMG}/${image}`}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 290px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="px-5 py-4">
                <h3 className="text-base font-bold text-[#11183C]">{title}</h3>
                <p className="mt-1 text-sm text-[#6B7194]">{text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
