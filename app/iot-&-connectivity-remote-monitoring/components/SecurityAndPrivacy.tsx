import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const IMG = "/Images/iot-&-connectivity-remote-monitoring";

const CARDS = [
  {
    tag: "Security",
    tagClass: "bg-[#FEF1E2] text-[#9A5B00]",
    title: "Security & OT boundaries",
    text: "We never ask for OT credentials. No inbound remote access to your equipment and no remote control of machines is part of this service.",
    dependsOn: "your architecture and integrator.",
    cta: "Discuss security",
    image: "security.webp",
    alt: "Person using a laptop and phone at a café table",
  },
  {
    tag: "Privacy",
    tagClass: "bg-[#ECEFFE] text-[#3B4FD8]",
    title: "Data & privacy",
    text: "Data linked to people, precise site locations or individual monitoring needs legal review, a clear purpose and a lawful basis.",
    dependsOn: "UK GDPR and ICO guidance.",
    cta: "Discuss privacy needs",
    image: "privacy.webp",
    alt: "Team working on laptops around a shared table",
  },
] as const;

export default function SecurityAndPrivacy() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="sr-only">Security and privacy</h2>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2">
        {CARDS.map(({ tag, tagClass, title, text, dependsOn, cta, image, alt }) => (
          <article
            key={title}
            className="flex flex-col overflow-hidden rounded-[22px] border border-[#E6E9F2] bg-white shadow-[0_14px_36px_rgba(17,24,60,0.07)]"
          >
            <div className="relative aspect-[587/190] w-full">
              <Image src={`${IMG}/${image}`} alt={alt} fill sizes="(min-width: 768px) 590px, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${tagClass}`}>{tag}</span>
              <h3 className="mt-3 text-xl font-bold text-[#11183C]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5375] sm:text-base">{text}</p>
              <p className="mt-4 border-t border-dashed border-[#E2E5EF] pt-3 text-sm text-[#6B7194]">
                <span className="font-bold text-[#11183C]">Depends on:</span> {dependsOn}
              </p>
              <Link
                href="#monitoring-enquiry"
                className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-[#E11D74] hover:underline sm:text-base"
              >
                {cta}
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
