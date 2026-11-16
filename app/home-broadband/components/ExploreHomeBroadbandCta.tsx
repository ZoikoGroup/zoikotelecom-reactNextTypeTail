import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const CTA_CONTENT = {
  heading: "Ready to explore home broadband?",
  subtitle:
    "See current plans or ask our team what's available at your address.",
  primaryButton: {
    label: "View broadband plans",
    href: "/broadband/plans",
  },
  secondaryButton: {
    label: "Contact the team",
    href: "/contact",
  },
  footerLink: {
    label: "Read our FAQs",
    href: "#faqs",
  },
} as const;

export default function ExploreHomeBroadbandCta() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#EA1674] via-[#8E37E8] to-[#3B5BF6] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      {/* Decorative Background Rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 -top-36 h-[420px] w-[420px] rounded-full border-[36px] border-white/[0.08] sm:h-[480px] sm:w-[480px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-44 -right-24 h-[380px] w-[380px] rounded-full border-[36px] border-white/[0.08] sm:h-[440px] sm:w-[440px]"
      />

      <div className="relative z-10 mx-auto max-w-[1300px] text-center">
        <h2 className="mx-auto max-w-6xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
          {CTA_CONTENT.heading}
        </h2>

        <p className="mx-auto mt-3.5 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
          {CTA_CONTENT.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <Link
            href={CTA_CONTENT.primaryButton.href}
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#E11D74] shadow-[0_8px_22px_rgba(17,24,60,0.16)] transition-transform hover:scale-[1.01] hover:bg-[#FAFBFD] sm:w-auto"
          >
            <span>{CTA_CONTENT.primaryButton.label}</span>
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>

          <Link
            href={CTA_CONTENT.secondaryButton.href}
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/40 bg-white/[0.08] px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:border-white/70 hover:bg-white/[0.16] sm:w-auto"
          >
            {CTA_CONTENT.secondaryButton.label}
          </Link>
        </div>

        {/* Bottom Text Link */}
        <div className="mt-6">
          <Link
            href={CTA_CONTENT.footerLink.href}
            className="inline-block text-sm font-semibold text-white/95 underline decoration-white/60 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
          >
            {CTA_CONTENT.footerLink.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
