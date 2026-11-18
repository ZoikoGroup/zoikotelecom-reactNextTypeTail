import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const SERVICE_TYPES = [
  {
    id: "digital-business-line",
    eyebrow: "Digital business line",
    title: "A fixed business line",
    text: "A digital landline for your business premises, with eligible number options.",
    points: [
      "One or a few lines",
      "Geographic or non-geographic numbers",
      "Uses your broadband",
    ],
    link: { label: "See digital line options", href: "/landlines" },
    image: "/Images/landlines-business-voice/service-digital-line.webp",
    alt: "Bright office desk with a laptop by the window",
  },
  {
    id: "hosted-team-voice",
    eyebrow: "Hosted team voice",
    title: "Calling for your whole team",
    text: "A cloud phone system for teams, with features confirmed for your plan.",
    points: [
      "Users on desk phones or apps",
      "Call handling features to ask about",
      "Suits growing or remote teams",
    ],
    link: { label: "Business voice overview", href: "#service-differences" },
    image: "/Images/landlines-business-voice/service-hosted-voice.webp",
    alt: "Team working on laptops around a shared table",
  },
  {
    id: "numbering",
    eyebrow: "Numbering",
    title: "Numbers & number transfer",
    text: "Choose a number type, or ask to keep the number you already have.",
    points: [
      "Keep your number — subject to checks",
      "Local or non-geographic numbers",
      "Virtual numbers guide available",
    ],
    link: { label: "About keeping your number", href: "#keep-your-number" },
    image: "/Images/landlines-business-voice/service-numbering.webp",
    alt: "Smiling receptionist",
  },
] as const;

export default function ThreeWaysToHandleCalls() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="Choose a service type"
          title="Three different ways to handle business calls"
          subtitle="They’re easy to confuse — here’s how they differ."
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICE_TYPES.map((service) => (
            <article
              key={service.id}
              className="flex flex-col overflow-hidden rounded-3xl border border-[#E6E9F2] bg-white shadow-[0_12px_36px_rgba(17,24,60,0.08)]"
            >
              <div className="relative aspect-[382/180] w-full">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#E11D74]">
                  {service.eyebrow}
                </p>
                <h3 className="mt-2 text-xl font-extrabold text-[#11183C] sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4B5375]">
                  {service.text}
                </p>
                <ul className="mt-4 flex-1 space-y-2.5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-[#4B5375]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#E11D74]" strokeWidth={2.5} aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.link.href}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-[#E11D74] hover:underline"
                >
                  {service.link.label}
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
