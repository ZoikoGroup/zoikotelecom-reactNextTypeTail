import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const AUDIENCES = [
  {
    title: "Household & personal",
    text: "Lines for you, family or friends.",
    link: { label: "Start here", href: "#build-your-lines" },
    image: "/Images/multi-line-plans/household-personal.webp",
    alt: "Smiling woman working at a desk at home",
  },
  {
    title: "Business",
    text: "Lines for your team or company.",
    link: { label: "Business mobile", href: "/business-solutions" },
    image: "/Images/multi-line-plans/business-office.webp",
    alt: "Modern office corridor",
  },
] as const;

export default function PersonalOrBusiness() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="Who is this for"
          title="Personal or business?"
          subtitle="Choose the one that fits. Business lines have their own route."
        />

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {AUDIENCES.map((a) => (
            <Link
              key={a.title}
              href={a.link.href}
              className="group flex overflow-hidden rounded-3xl border border-[#ECEDF3] bg-white shadow-[0_12px_30px_rgba(28,26,51,0.08)] transition-shadow hover:shadow-[0_16px_40px_rgba(28,26,51,0.12)]"
            >
              <div className="relative min-h-[180px] w-[42%] shrink-0 sm:min-h-[205px]">
                <Image src={a.image} alt={a.alt} fill sizes="240px" className="object-cover" />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-semibold text-[#1C1A33]">{a.title}</h3>
                <p className="mt-2 text-sm text-[#5F6275]">{a.text}</p>
                <span className="mt-3 inline-flex items-center gap-6 text-sm font-semibold text-[#A3227F]">
                  {a.link.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
