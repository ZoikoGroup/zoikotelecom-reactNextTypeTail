import React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import SwitchPage from "./SwitchPage";

const headingFont = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-ee-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-ee-body",
});

export const metadata: Metadata = {
  title: "Switch Your Mobile Service With Confidence | Zoiko Telecom",
  description:
    "Compare plans and switch smoothly to Zoiko Telecom. Keep your number with a PAC code, switch without keeping it using a STAC, or start fresh.",
};

const switchSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://zoikotelecom.com/switch/#webpage",
  url: "https://zoikotelecom.com/switch",
  name: "Switch Your Mobile Service With Confidence",
  isPartOf: {
    "@id": "https://zoikotelecom.com/#website",
  },
};

export default function Page() {
  return (
    <div
      className={`${headingFont.variable} ${bodyFont.variable} [font-family:var(--font-ee-body)]`}
    >
      <SwitchPage />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(switchSchema) }}
      />

      {/* ─── CTA ─────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#c4318f] via-[#a3227f] to-[#7a2a8f] px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold tracking-[-0.01em] [font-family:var(--font-ee-heading)] sm:text-4xl">
          Ready to compare?
        </h2>
        <p className="mt-3 text-base text-white/90">
          See SIM-only plans or speak to our team.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/ee-mobile-plans"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#a3227f] [font-family:var(--font-ee-heading)] transition-transform hover:-translate-y-0.5"
          >
            Compare SIM-only plans
          </a>
          <a
            href="/contact"
            className="rounded-full border-2 border-white/70 bg-white/10 px-8 py-3.5 text-sm font-semibold [font-family:var(--font-ee-heading)] hover:bg-white/20"
          >
            Get advice
          </a>
        </div>
      </section>
    </div>
  );
}
