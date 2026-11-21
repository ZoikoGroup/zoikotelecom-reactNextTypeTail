"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Headphones, Smartphone, Zap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const IMG = "/Images/devices-accessories";

type Option = { title: string; good: string; tradeOff: string };
type Detail = {
  tag: string;
  tagClass: string;
  title: string;
  text: string;
  dependsOn: string;
  cta: string;
  href: string;
  image: string;
  alt: string;
};
type Category = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  options: Option[];
  details: Detail[];
};

const TAG = {
  blue: "bg-[#EEF0FF] text-[#4F46E5]",
  pink: "bg-[#FDEFF6] text-[#C2185B]",
  green: "bg-[#E3F6EF] text-[#0F7B5F]",
  orange: "bg-[#FFF1E6] text-[#B45309]",
} as const;

const CATEGORIES: Category[] = [
  {
    id: "cases",
    title: "Cases",
    subtitle: "Protection and fit for your exact model",
    image: "category-cases.webp",
    alt: "Hand holding a phone in a textured case",
    icon: Smartphone,
    options: [
      { title: "Soft (e.g. TPU, silicone)", good: "Grip and flexibility", tradeOff: "Can show wear; protection varies" },
      { title: "Rigid (e.g. polycarbonate)", good: "Slim, firm shell", tradeOff: "Less flexible; protection varies" },
      { title: "Folio", good: "Covers the screen; may stand", tradeOff: "Bulkier; magnets and fit vary" },
    ],
    details: [
      {
        tag: "Fit",
        tagClass: TAG.blue,
        title: "Camera & buttons",
        text: "Check the exact camera island, buttons and ports. A brand name alone isn’t enough.",
        dependsOn: "the exact model and generation.",
        cta: "Find your model",
        href: "#find-your-model",
        image: "camera-buttons.webp",
        alt: "Smartphone lying on a desk beside a laptop",
      },
      {
        tag: "Screen",
        tagClass: TAG.pink,
        title: "Screen protectors",
        text: "A raised lip and glass may or may not fit together, especially on curved screens.",
        dependsOn: "testing the exact pair.",
        cta: "Ask about fit",
        href: "#accessory-enquiry",
        image: "screen-protectors.webp",
        alt: "Hand holding a phone in a protective case",
      },
      {
        tag: "Tablets",
        tagClass: TAG.green,
        title: "Tablet folios",
        text: "Keyboards, stands, magnets and stylus areas change between generations.",
        dependsOn: "the tablet generation.",
        cta: "Ask about folios",
        href: "#accessory-enquiry",
        image: "tablet-folios.webp",
        alt: "Two tablets on a desk, one with a keyboard case",
      },
    ],
  },
  {
    id: "chargers",
    title: "Chargers & cables",
    subtitle: "Safe, compatible power",
    image: "category-chargers-cables.webp",
    alt: "White laptop charger and cables on a table",
    icon: Zap,
    options: [
      { title: "Wall chargers", good: "Fast, steady power at home", tradeOff: "Output and protocol must match" },
      { title: "Cables", good: "Cheap to replace or extend", tradeOff: "Power and data ratings differ" },
      { title: "Wireless pads", good: "No plugging in", tradeOff: "Slower; case and alignment matter" },
    ],
    details: [
      {
        tag: "Output",
        tagClass: TAG.orange,
        title: "Output & protocol",
        text: "Fast charging needs the charger, cable and device to support the same standard.",
        dependsOn: "your device’s supported protocol.",
        cta: "Ask about chargers",
        href: "#accessory-enquiry",
        image: "hero-charger.webp",
        alt: "Wall charger plug on a dark surface",
      },
      {
        tag: "Cables",
        tagClass: TAG.blue,
        title: "Cable ratings",
        text: "USB-C cables look alike but can carry very different power and data speeds.",
        dependsOn: "the cable’s rating and markings.",
        cta: "Ask about cables",
        href: "#accessory-enquiry",
        image: "category-chargers-cables.webp",
        alt: "Charger with coiled cables",
      },
      {
        tag: "Safety",
        tagClass: TAG.pink,
        title: "Safety markings",
        text: "Look for proper safety markings and stop using any charger that gets unusually hot.",
        dependsOn: "the supplier’s safety file.",
        cta: "Read our FAQs",
        href: "#faqs",
        image: "camera-buttons.webp",
        alt: "Smartphone lying on a desk beside a laptop",
      },
    ],
  },
  {
    id: "audio",
    title: "Audio",
    subtitle: "Earbuds, headphones and headsets",
    image: "category-audio.webp",
    alt: "Black over-ear headphones on a yellow background",
    icon: Headphones,
    options: [
      { title: "Bluetooth", good: "No cable; works across devices", tradeOff: "Battery; codecs and features vary" },
      { title: "USB-C", good: "Digital audio, no charging", tradeOff: "Needs a USB-C audio port" },
      { title: "3.5 mm", good: "Simple and widely supported", tradeOff: "Many phones have no jack" },
    ],
    details: [
      {
        tag: "Connect",
        tagClass: TAG.blue,
        title: "Connection type",
        text: "Check whether your device supports Bluetooth, USB-C audio or a 3.5 mm jack.",
        dependsOn: "the ports on your device.",
        cta: "Find your model",
        href: "#find-your-model",
        image: "hero-headphones.webp",
        alt: "Over-ear headphones on a bright yellow background",
      },
      {
        tag: "Mic",
        tagClass: TAG.pink,
        title: "Microphones",
        text: "A wired headset mic needs the right plug wiring or adapter to work with your device.",
        dependsOn: "the plug type and device.",
        cta: "Ask about audio",
        href: "#accessory-enquiry",
        image: "category-audio.webp",
        alt: "Headphones on a yellow background",
      },
      {
        tag: "Business",
        tagClass: TAG.green,
        title: "Business headsets",
        text: "Meeting software support and call controls depend on the platform you use.",
        dependsOn: "tested features and platform data.",
        cta: "Ask about headsets",
        href: "#accessory-enquiry",
        image: "related-mobile-plans.webp",
        alt: "Colleagues talking at a table with a laptop",
      },
    ],
  },
];

export default function ChooseCategory() {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);
  const active = CATEGORIES.find((c) => c.id === activeId) ?? CATEGORIES[0];

  return (
    <section id="categories" className="w-full scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Choose a category"
          title="What are you looking for?"
          subtitle="Pick one to see what to check. Nothing is recorded."
          className="max-w-2xl"
        />

        <div role="radiogroup" aria-label="Accessory category" className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {CATEGORIES.map(({ id, title, subtitle, image, alt, icon: Icon }) => {
            const selected = id === activeId;
            return (
              <button
                key={id}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setActiveId(id)}
                className={`group relative aspect-[388/250] w-full overflow-hidden rounded-[22px] text-left outline-none ring-offset-2 transition-shadow focus-visible:ring-2 focus-visible:ring-[#E11D74] ${
                  selected ? "border-[3px] border-[#E11D74] shadow-[0_14px_30px_rgba(225,29,116,0.22)]" : "border-[3px] border-transparent"
                }`}
              >
                <Image
                  src={`${IMG}/${image}`}
                  alt={alt}
                  fill
                  sizes="(min-width: 640px) 390px, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#11183C]/70 via-[#11183C]/10 to-transparent" />
                <span className="absolute bottom-5 left-5 right-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/25 text-white backdrop-blur-sm">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="mt-3 block text-xl font-extrabold text-white sm:text-2xl">{title}</span>
                  <span className="mt-1 block text-xs text-white/85 sm:text-sm">{subtitle}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div aria-live="polite">
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {active.options.map(({ title, good, tradeOff }) => (
              <div key={title} className="rounded-[20px] border border-[#E6E9F2] bg-white p-6 shadow-[0_8px_24px_rgba(17,24,60,0.05)]">
                <h3 className="text-lg font-bold text-[#11183C]">{title}</h3>
                <dl className="mt-3 grid grid-cols-[80px_1fr] gap-x-3 gap-y-2 text-sm">
                  <dt className="font-bold text-[#15803D]">Good</dt>
                  <dd className="text-[#2B3150]">{good}</dd>
                  <dt className="font-bold text-[#C0392B]">Trade-off</dt>
                  <dd className="text-[#2B3150]">{tradeOff}</dd>
                </dl>
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {active.details.map((detail) => (
              <DetailCard key={detail.title} {...detail} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailCard({ tag, tagClass, title, text, dependsOn, cta, href, image, alt }: Detail) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[22px] border border-[#E6E9F2] bg-white shadow-[0_14px_34px_rgba(17,24,60,0.08)]">
      <div className="relative aspect-[384/190] w-full">
        <Image src={`${IMG}/${image}`} alt={alt} fill sizes="(min-width: 768px) 390px, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${tagClass}`}>{tag}</span>
        <h3 className="mt-3 text-xl font-extrabold text-[#11183C]">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[#4B5375] sm:text-[15px]">{text}</p>
        <p className="mt-4 border-t border-dashed border-[#E2E5EF] pt-3 text-sm text-[#6B7194]">
          <span className="font-bold text-[#11183C]">Depends on:</span> {dependsOn}
        </p>
        <Link
          href={href}
          className="mt-3 inline-flex w-fit items-center gap-1 text-sm font-bold text-[#E11D74] hover:underline sm:text-base"
        >
          {cta}
          <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
