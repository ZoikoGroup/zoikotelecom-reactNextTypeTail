import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const IMG = "/Images/iot-&-connectivity-remote-monitoring";

// "#" links are placeholders until those IoT pages exist (matches the navbar IoT menu).
const SERVICES = [
  {
    title: "IoT Connectivity (SIM, eSIM)",
    text: "Connect business devices",
    href: "#",
    image: "iot-connectivity.webp",
    alt: "Engineer working on a laptop in a workshop",
  },
  {
    title: "Smart Buildings & Sites",
    text: "Connectivity for premises",
    href: "#",
    image: "smart-buildings.webp",
    alt: "Looking up at tall office buildings",
  },
  {
    title: "Business Solutions",
    text: "All business services",
    href: "/business-solutions",
    image: "business-solutions.webp",
    alt: "Modern office corridor",
  },
  {
    title: "Business FAQs",
    text: "Answers to common questions",
    href: "/faqs",
    image: "business-faqs.webp",
    alt: "Two colleagues high-fiving at a desk",
  },
] as const;

export default function RelatedServices() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader eyebrow="More connectivity" title="Related services" className="max-w-2xl" />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ title, text, href, image, alt }) => (
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
