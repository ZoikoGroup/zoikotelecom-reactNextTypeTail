import React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import EsimPage from "./EsimPage";

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
  title: "eSIM: A Digital Way to Connect | Zoiko Telecom",
  description:
    "Discover how to set up, activate, and manage your eSIM with Zoiko Telecom. Check device compatibility, explore plans, and protect your QR code.",
};

const esimSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://zoikotelecom.com/esim/#webpage",
  url: "https://zoikotelecom.com/esim",
  name: "eSIM: A Digital Way to Connect",
  isPartOf: {
    "@id": "https://zoikotelecom.com/#website",
  },
};

export default function Page() {
  return (
    <div
      className={`${headingFont.variable} ${bodyFont.variable} [font-family:var(--font-ee-body)]`}
    >
      <EsimPage />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(esimSchema) }}
      />
    </div>
  );
}
