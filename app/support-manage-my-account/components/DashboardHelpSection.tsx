import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, User } from "lucide-react";
import { HEADING, IMG, PRIMARY_BTN } from "./shared";

const CARDS = [
  {
    tag: "Safety",
    tagClass: "bg-[#FEF1DF] text-[#B45309]",
    title: "Report impersonation",
    body: "Had a message pretending to be us? Don’t click — report it through our Contact page.",
    dependsOn: "a published, first-party route.",
    cta: "Report it",
    image: `${IMG}/card-report-impersonation.webp`,
    alt: "Padlock resting on a laptop keyboard lit in red and green",
  },
  {
    tag: "Access",
    tagClass: "bg-[#E2F5EB] text-[#0E7F55]",
    title: "Accessible alternatives",
    body: "Recovery shouldn’t rely only on visual or single-device methods. Ask us for another way.",
    dependsOn: "your needs — we never ask for evidence of disability.",
    cta: "Ask for help",
    image: `${IMG}/card-accessible-alternatives.webp`,
    alt: "Support advisers wearing headsets working at laptops",
  },
  {
    tag: "Identity",
    tagClass: "bg-[#E8EBFD] text-[#4F46E5]",
    title: "ID documents",
    body: "Only provide identity evidence when necessary, and only through an approved secure process.",
    dependsOn: "a proportionate request.",
    cta: "Ask about this",
    image: `${IMG}/card-id-documents.webp`,
    alt: "Laptop showing code next to a plant and a yellow mug",
  },
];

export default function DashboardHelpSection() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8 lg:py-[50px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-4 rounded-[22px] border-2 border-dashed border-[#D4D9EC] bg-[#FAFBFE] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-start gap-4 sm:items-center">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ECEEF6] text-[#3A4268]">
              <User className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <div>
              <p className={`${HEADING} text-lg font-semibold text-[#0F1452]`}>Seeing “Loading…” on the account dashboard?</p>
              <p className="mt-0.5 text-sm text-[#3A4268] sm:text-[15px]">
                A loading screen doesn’t mean a working dashboard or an outage on your account. Contact us if you need account
                help.
              </p>
            </div>
          </div>
          <Link href="/contact" className={`${PRIMARY_BTN} ${HEADING} shrink-0 px-5`}>
            Contact support
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map(({ tag, tagClass, title, body, dependsOn, cta, image, alt }) => (
            <li
              key={title}
              className="flex flex-col overflow-hidden rounded-[22px] border border-[#E3E6F2] bg-white shadow-[0_18px_40px_rgba(30,30,90,0.08)]"
            >
              <div className="relative h-[190px] w-full">
                <Image src={image} alt={alt} fill sizes="(min-width: 768px) 384px, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col px-[22px] pb-6 pt-5">
                <span className={`${HEADING} w-fit rounded-full px-3 py-1 text-xs font-semibold ${tagClass}`}>{tag}</span>
                <h3 className={`${HEADING} mt-3 text-xl font-semibold text-[#0F1452]`}>{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#3A4268]">{body}</p>
                <p className="mt-auto border-t border-dashed border-[#E3E6F2] pt-3 text-[13px] text-[#6B7194]">
                  <span className="font-semibold text-[#0F1452]">Depends on:</span> {dependsOn}
                </p>
                <Link
                  href="/contact"
                  className={`${HEADING} mt-3 inline-flex w-fit items-center gap-1.5 text-[15px] font-semibold text-[#E0127C] hover:underline`}
                >
                  {cta}
                  <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
