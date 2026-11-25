import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const IMG = "/Images/support-troubleshoot-a-service";

const HELP_CARDS = [
  {
    title: "Accessibility assistance",
    body: "Ask for an accessible way to communicate, or a support adjustment. Phone isn’t the only route.",
    cta: "Ask for assistance",
    href: "/contact",
    image: `${IMG}/help-accessibility-assistance.webp`,
    alt: "Support advisers wearing headsets working at laptops",
  },
  {
    title: "Phone & email",
    body: "Current phone numbers, email and opening hours are listed on our Contact page — we don’t promise 24/7 or response times here.",
    cta: "See contact options",
    href: "/contact",
    image: `${IMG}/help-phone-email.webp`,
    alt: "Two people shaking hands",
  },
];

export default function StillNotWorkingSection() {
  return (
    <section className="w-full bg-white px-4 pb-20 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr]">
        <div className="relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-[#3B1D8F] via-[#4A1E8C] to-[#7A1A78] p-6 text-white shadow-[0_24px_50px_rgba(59,29,143,0.3)] md:col-span-2 lg:col-span-1">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#E0127C]/30 blur-[50px]"
          />
          <span className="relative w-fit rounded-md bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em]">
            Need more help?
          </span>
          <h2 className="relative mt-3 text-2xl font-extrabold">Still not working?</h2>
          <p className="relative mt-3 text-sm leading-relaxed text-white/80">
            Contact our team and tell us the service, what’s happening and what you’ve tried. Never send passwords, PINs
            or SIM codes.
          </p>
          <Link
            href="/contact"
            className="relative mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F0168A] via-[#E0127C] to-[#C8106E] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(224,18,124,0.4)] transition-transform hover:scale-[1.01] lg:mt-auto"
          >
            Contact support
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </div>

        {HELP_CARDS.map(({ title, body, cta, href, image, alt }) => (
          <div key={title} className="flex flex-col overflow-hidden rounded-2xl border border-[#E3E6F2] bg-white">
            <div className="relative h-[170px] w-full">
              <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 340px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-extrabold text-[#0A1446]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3A4268]">{body}</p>
              <Link
                href={href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#E0127C] hover:underline"
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
