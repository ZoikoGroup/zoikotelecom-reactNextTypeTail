import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const IMG = "/Images/mobile-hotspots-routers";

const COSTS = [
  { title: "Hardware", text: "The hotspot or router itself.", badge: "Upfront", bar: "bg-[#E11D74]" },
  { title: "Mobile data plan", text: "A separate, recurring airtime agreement.", badge: "Monthly", bar: "bg-[#7C3AED]" },
  { title: "Fees & delivery", text: "Any set-up or delivery charges.", badge: "Varies", bar: "bg-[#3B82F6]" },
  { title: "VAT", text: "Shown as included where applicable.", badge: "Included", bar: "bg-[#11183C]" },
] as const;

const CARDS = [
  {
    tag: "Roaming",
    tagClass: "bg-[#EEF0FF] text-[#4338CA]",
    title: "Using it abroad",
    text: "Countries and data rates depend on the plan. We never say “works worldwide”.",
    dependsOn: "your plan and destination.",
    link: { label: "Ask about roaming", href: "/roaming-international" },
    image: "cost-using-abroad.webp",
    alt: "Map, camera and travel bag laid out on a table",
  },
  {
    tag: "Business",
    tagClass: "bg-[#E8F7EE] text-[#15803D]",
    title: "Several sites or backup",
    text: "Tell us about multi-site or backup connectivity needs. No service level is implied.",
    dependsOn: "a conversation with our business team.",
    link: { label: "Contact our business team", href: "/business-solutions" },
    image: "cost-several-sites.webp",
    alt: "Construction workers in hi-vis on a building site",
  },
  {
    tag: "Rights",
    tagClass: "bg-[#FFF4E0] text-[#8A5A00]",
    title: "Returns & warranty",
    text: "Cancellation, faults and manufacturer warranties are different protections — check the approved terms.",
    dependsOn: "the transaction and approved terms.",
    link: { label: "Read our FAQs", href: "#faqs" },
    image: "cost-returns-warranty.webp",
    alt: "Two people shaking hands",
  },
] as const;

export default function CostsBreakdown() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Costs"
          title="What you might pay — and what’s separate"
          subtitle="Figures are only known from a confirmed offer."
        />

        <div className="mt-10 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_400px] lg:gap-8">
          <ul className="space-y-3">
            {COSTS.map(({ title, text, badge, bar }) => (
              <li
                key={title}
                className="flex items-center gap-4 rounded-2xl border border-[#E6E9F2] bg-white px-5 py-4 shadow-[0_8px_22px_rgba(17,24,60,0.05)]"
              >
                <span aria-hidden="true" className={`h-10 w-1.5 shrink-0 rounded-full ${bar}`} />
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-bold text-[#11183C]">{title}</span>
                  <span className="block text-sm text-[#4B5375]">{text}</span>
                </span>
                <span className="shrink-0 rounded-lg bg-[#F1F3F9] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#434A6E]">
                  {badge}
                </span>
              </li>
            ))}
          </ul>

          <aside className="rounded-[24px] bg-gradient-to-br from-[#2A1A8C] via-[#3B1E86] to-[#8A1F6E] p-7 text-white shadow-[0_20px_50px_rgba(42,26,140,0.3)]">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#F9A8D4]">Data isn’t free</p>
            <h3 className="mt-3 text-2xl font-extrabold leading-snug">Watch for “free router” offers</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/85">
              A device deal and a data plan can have different terms. Check the full term and total of both — the cost
              of airtime shouldn’t be hidden inside a “free” device.
            </p>
          </aside>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {CARDS.map(({ tag, tagClass, title, text, dependsOn, link, image, alt }) => (
            <article
              key={title}
              className="flex flex-col overflow-hidden rounded-[24px] border border-[#E6E9F2] bg-white shadow-[0_12px_30px_rgba(17,24,60,0.08)]"
            >
              <div className="relative aspect-[384/190] w-full">
                <Image src={`${IMG}/${image}`} alt={alt} fill sizes="(min-width: 768px) 384px, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                <span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${tagClass}`}>{tag}</span>
                <h3 className="mt-3 text-xl font-extrabold text-[#11183C]">{title}</h3>
                <p className="mb-5 mt-2 flex-1 text-sm leading-relaxed text-[#4B5375] sm:text-base">{text}</p>
                <p className="border-t border-dashed border-[#E2E5EF] pt-4 text-xs text-[#6B7194] sm:text-sm">
                  <strong className="text-[#11183C]">Depends on:</strong> {dependsOn}
                </p>
                <Link
                  href={link.href}
                  className="mt-3 inline-flex w-fit items-center gap-1 text-sm font-bold text-[#E11D74] hover:underline sm:text-base"
                >
                  {link.label}
                  <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
