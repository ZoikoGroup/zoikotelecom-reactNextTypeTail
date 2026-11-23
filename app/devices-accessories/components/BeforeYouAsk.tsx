import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Lock, Smartphone, TabletSmartphone } from "lucide-react";
import SectionHeader from "./SectionHeader";

const IMG = "/Images/devices-accessories";

const TIPS = [
  { title: "Your device model", text: "Make, model and generation.", icon: Smartphone },
  { title: "The accessory type", text: "Case, charger, cable or audio.", icon: TabletSmartphone },
  { title: "Nothing sensitive", text: "No IMEI, serial numbers or passwords.", icon: Lock },
] as const;

const CARDS = [
  {
    tag: "Returns",
    tagClass: "bg-[#FFF1E6] text-[#9A5A00]",
    title: "Returns & cancellations",
    text: "Qualifying distance purchases can carry cancellation rights. Any hygiene-related exception for earbuds must legally apply — and faulty-goods rights remain.",
    dependsOn: "the item and circumstances.",
    cta: "Read our FAQs",
    href: "#faqs",
    image: "returns-cancellations.webp",
    alt: "Parcels, paperwork and a laptop on a desk",
  },
  {
    tag: "Warranty",
    tagClass: "bg-[#EEF0FF] text-[#4F46E5]",
    title: "Warranty vs your rights",
    text: "A manufacturer warranty is separate from your legal rights for faulty or misdescribed goods.",
    dependsOn: "the approved terms.",
    cta: "Contact us",
    href: "/contact",
    image: "warranty-rights.webp",
    alt: "Rubber stamp resting on an open legal book",
  },
] as const;

export default function BeforeYouAsk() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader eyebrow="Before you ask" title="What to include in your question" />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {TIPS.map(({ title, text, icon: Icon }) => (
            <div key={title} className="flex items-center gap-4 rounded-[20px] border border-[#E6E9F2] bg-white p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#FF7A59] text-white">
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-bold text-[#11183C]">{title}</h3>
                <p className="mt-0.5 text-sm text-[#2B3150]">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {CARDS.map(({ tag, tagClass, title, text, dependsOn, cta, href, image, alt }) => (
            <article
              key={title}
              className="flex flex-col overflow-hidden rounded-[22px] border border-[#E6E9F2] bg-white shadow-[0_14px_34px_rgba(17,24,60,0.08)]"
            >
              <div className="relative aspect-[587/190] w-full">
                <Image src={`${IMG}/${image}`} alt={alt} fill sizes="(min-width: 768px) 590px, 100vw" className="object-cover" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
