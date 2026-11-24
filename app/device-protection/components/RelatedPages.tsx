import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const IMG = "/Images/device-protection";

const PAGES = [
  {
    title: "Mobile Phones",
    text: "Choosing a handset",
    href: "/phone-equipment",
    image: "related-mobile-phones.png",
    alt: "Smartphone resting on a bright desk",
  },
  {
    title: "Hotspots & Routers",
    text: "Mobile internet explained",
    href: "/mobile-hotspots-routers",
    image: "related-hotspots-routers.png",
    alt: "Portable wireless devices and mobile router hardware",
  },
  {
    title: "Accessories",
    text: "Cases, chargers, audio",
    href: "/devices-accessories",
    image: "related-accessories.png",
    alt: "Over-ear headphones on a bright yellow background",
  },
  {
    title: "Trade In & Upgrade",
    text: "Prepare and choose",
    href: "/trade-in-upgrade",
    image: "related-trade-in-upgrade.png",
    alt: "Smartphone and earbuds ready for trade-in or upgrade",
  },
] as const;

export default function RelatedPages() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader eyebrow="Keep exploring" title="Related pages" className="max-w-2xl" />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PAGES.map(({ title, text, href, image, alt }) => (
            <Link
              key={title}
              href={href}
              className="group overflow-hidden rounded-[20px] border border-[#E3E6F2] bg-white transition-transform hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(10,20,70,0.08)]"
            >
              <div className="relative aspect-[286/120] w-full overflow-hidden">
                <Image
                  src={`${IMG}/${image}`}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 288px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="px-4 pb-4 pt-3.5">
                <h3 className="text-[15.5px] font-bold text-[#0A1446]">{title}</h3>
                <p className="mt-0.5 text-[13px] text-[#6B7194]">{text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
