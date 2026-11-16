import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const GUIDES_DATA = [
  {
    id: "home-broadband",
    imageSrc: "/Images/ultra/6.png",
    imageAlt: "Family silhouetted against a sunset sky by the sea",
    title: "Home Broadband",
    description: "Plans for your household",
    ctaText: "Explore",
    href: "/broadband/home",
  },
  {
    id: "full-fibre",
    imageSrc: "/Images/ultra/7.png",
    imageAlt: "Network patch panel with connected ethernet cables",
    title: "Full Fibre",
    description: "Fibre to the home explained",
    ctaText: "Learn more",
    href: "/broadband/full-fibre",
  },
  {
    id: "help-faqs",
    imageSrc: "/Images/ultra/8.png",
    imageAlt: "Smiling support representative standing in an office",
    title: "Help & FAQs",
    description: "Common questions",
    ctaText: "Visit help",
    href: "/help",
  },
] as const;

export default function MoreBroadbandGuides() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            RELATED
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            More broadband guides
          </h2>
        </div>

        {/* Three-Column Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-[1300px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GUIDES_DATA.map((guide) => (
            <div
              key={guide.id}
              className="flex items-stretch overflow-hidden rounded-3xl border border-[#ECEEF6] bg-white shadow-[0_4px_20px_rgba(17,24,60,0.04)]"
            >
              {/* Left Flush Image (No Padding) */}
              <div className="relative min-h-[144px] w-28 shrink-0 sm:w-32">
                <Image
                  src={guide.imageSrc}
                  alt={guide.imageAlt}
                  fill
                  sizes="128px"
                  className="object-cover object-center"
                />
              </div>

              {/* Right Content */}
              <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                <h3 className="text-base font-extrabold tracking-tight text-[#11183C] sm:text-lg">
                  {guide.title}
                </h3>
                <p className="mt-1 text-sm text-[#4B5563]">
                  {guide.description}
                </p>
                <div className="mt-3">
                  <Link
                    href={guide.href}
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#E11D74] transition-colors hover:text-[#C11260]"
                  >
                    <span>{guide.ctaText}</span>
                    <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
