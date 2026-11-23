import React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import SimPage from "./SimPage";

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
  title: "Phone & SIM Plans on EE | Zoiko Telecom",
  description:
    "Combine a new phone with an EE airtime plan in one transparent quote from Zoiko Telecom. Device cost, plan price, and fees shown separately.",
};

const phoneSimSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://zoikotelecom.com/phone-and-sim/#webpage",
  url: "https://zoikotelecom.com/phone-and-sim",
  name: "Phone & SIM Plans on EE",
  isPartOf: {
    "@id": "https://zoikotelecom.com/#website",
  },
};

export default function Page() {
  return (
    <div
      className={`${headingFont.variable} ${bodyFont.variable} [font-family:var(--font-ee-body)]`}
    >
      <SimPage />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(phoneSimSchema) }}
      />
    </div>
  );
}
