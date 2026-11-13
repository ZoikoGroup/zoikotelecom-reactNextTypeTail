import React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import RoamingPage from "./RoamingPage";

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
  title: "Roaming & International Calls | Zoiko Telecom",
  description:
    "Stay informed before you travel or call abroad. Check roaming terms, EU allowances, international call rates, and spend limits on Zoiko Telecom.",
};

const roamingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://zoikotelecom.com/roaming/#webpage",
  url: "https://zoikotelecom.com/roaming",
  name: "Roaming & International Calls",
  isPartOf: {
    "@id": "https://zoikotelecom.com/#website",
  },
};

export default function Page() {
  return (
    <div
      className={`${headingFont.variable} ${bodyFont.variable} [font-family:var(--font-ee-body)]`}
    >
      <RoamingPage />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roamingSchema) }}
      />
    </div>
  );
}
