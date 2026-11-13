import React from 'react'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import EEmobileplans from './EEmobileplans';

const headingFont = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-ee-heading',
});

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-ee-body',
});

export const metadata: Metadata = {
  title: "Best EE SIM Only Deals UK | Zoiko Telecom",
  description:
    "Discover the best EE SIM only deals at Zoiko Telecom. Flexible plans with unlimited calls, texts, and data to keep you connected at great prices online today.",
};

const eeMobileSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://zoikotelecom.com/ee-mobile-plans/#webpage",
  "url": "https://zoikotelecom.com/ee-mobile-plans",
  "name": "EE Mobile Plans",
  "isPartOf": {
    "@id": "https://zoikotelecom.com/#website",
  },
};

export default function page() {
  return (
    <div className={`${headingFont.variable} ${bodyFont.variable} [font-family:var(--font-ee-body)]`}>
      <EEmobileplans />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eeMobileSchema) }}
      />

      {/* ─── CTA ─────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#c4318f] via-[#a3227f] to-[#7a2a8f] px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold tracking-[-0.01em] [font-family:var(--font-ee-heading)] sm:text-4xl">
          Ready to choose your SIM-only plan?
        </h2>
        <p className="mt-3 text-base text-white/90">
          Compare plans or speak to our team for advice.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#plans"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#a3227f] [font-family:var(--font-ee-heading)]"
          >
            View available plans
          </a>
          <a
            href="/contact"
            className="rounded-full border-2 border-white/70 bg-white/10 px-8 py-3.5 text-sm font-semibold [font-family:var(--font-ee-heading)] hover:bg-white/20"
          >
            Speak to our team
          </a>
        </div>
      </section>
    </div>
  );
}
