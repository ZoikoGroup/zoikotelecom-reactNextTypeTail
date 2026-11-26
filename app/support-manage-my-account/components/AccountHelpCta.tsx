import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { HEADING, IMG, PRIMARY_BTN } from "./shared";

const HELP_CARDS = [
  {
    title: "Accessibility assistance",
    body: "Ask for an accessible way to communicate, or a support adjustment. Phone isn’t the only route.",
    cta: "Ask for assistance",
    image: `${IMG}/help-accessibility-assistance.webp`,
    alt: "Support advisers wearing headsets working at laptops",
  },
  {
    title: "Phone & email",
    body: "Current phone numbers, email and opening hours are listed on our Contact page — we don’t promise 24/7 or response times here.",
    cta: "See contact options",
    image: `${IMG}/help-phone-email.webp`,
    alt: "Two people shaking hands",
  },
];

export default function AccountHelpCta() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-[50px] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-[459px_1fr_1fr]">
        <div className="relative flex flex-col overflow-hidden rounded-[24px] bg-gradient-to-br from-[#2A1A78] via-[#3A1A8C] to-[#6B1E7E] p-[22px] text-white md:col-span-2 lg:col-span-1">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-[#E0127C]/35 blur-[60px]"
          />
          <span
            className={`${HEADING} relative w-fit rounded-md bg-white/15 px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em]`}
          >
            Need more help?
          </span>
          <h2 className={`${HEADING} relative mt-3 text-2xl font-semibold`}>Need help with your account?</h2>
          <p className="relative mt-3 text-[15px] leading-relaxed text-white/80">
            Contact our team through the published Contact page. Tell us what you need — never your password, codes or card
            numbers.
          </p>
          <Link href="/contact" className={`${PRIMARY_BTN} ${HEADING} relative mt-10 py-4 lg:mt-auto`}>
            Contact support
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </div>

        {HELP_CARDS.map(({ title, body, cta, image, alt }) => (
          <div
            key={title}
            className="flex flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_16px_36px_rgba(30,30,90,0.1)]"
          >
            <div className="relative h-[170px] w-full">
              <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 351px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col px-[22px] pb-6 pt-6">
              <h3 className={`${HEADING} text-xl font-semibold text-[#0F1452]`}>{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#3A4268]">{body}</p>
              <Link
                href="/contact"
                className={`${HEADING} mt-3 inline-flex w-fit items-center gap-1.5 text-[15px] font-semibold text-[#E0127C] hover:underline`}
              >
                {cta}
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
