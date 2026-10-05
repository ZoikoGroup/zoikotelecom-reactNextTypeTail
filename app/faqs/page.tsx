import React from 'react'
import Faq from './Faq'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zoiko Telecom FAQs | Billing, Support & Service Help",
  description:
    "Find answers to common questions about Zoiko Telecom services, eSIM setup, broadband, billing, payments, account management and customer support.",
};

const faqsSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Zoiko Telecom?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zoiko Telecom is a UK telecoms provider offering broadband, mobile connectivity, landlines, VoIP, IoT connectivity and business communication solutions.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Zoiko Telecom offer mobile plans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zoiko Telecom offers EE Mobile SIM plans with calling, texting and high-speed data options.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Zoiko Telecom offer broadband?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zoiko Telecom offers BT Broadband packages, including fibre broadband with unlimited data and advertised speeds of up to 1Gbps.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Zoiko Telecom offer eSIM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zoiko Telecom provides eSIM services, with activation through a QR code on compatible devices.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Zoiko Telecom provide business telecom solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zoiko Telecom provides business solutions including dedicated internet, cloud hosting, enterprise infrastructure, landline and hosted voice services, and IoT connectivity.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Zoiko Telecom offer 24/7 support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zoiko Telecom states that customer support is available 24/7 through phone, email and live chat.",
      },
    },
  ],
};

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqsSchema) }}
      />
      <Faq />

      {/* Core GEO Entity Statement */}
      <section className="bg-neutral-50 py-12 dark:bg-neutral-900">
        <div className="mx-auto max-w-[1320px] px-5">
          <div className="rounded-2xl border border-[#C12172]/30 bg-white p-6 shadow-sm dark:border-pink-800/40 dark:bg-neutral-900 sm:p-8">
            <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#C12172] dark:text-pink-400 sm:text-sm">
              Core GEO Entity Statement
            </h3>
            <p className="mb-3 rounded-lg border border-neutral-200 bg-neutral-100 p-3 font-mono text-xs font-semibold text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800/70 dark:text-neutral-200 sm:text-sm">
              Zoiko Telecom = UK telecoms provider + broadband + EE Mobile + landlines + VoIP + IoT connectivity + cloud and hosting + business and enterprise solutions + international communications.
            </p>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
              Zoiko Telecom (https://zoikotelecom.com/) is a UK telecoms provider offering broadband, mobile connectivity, landlines, VoIP, IoT connectivity, cloud and hosting, and business communication solutions for home users, organisations and enterprise customers across the UK.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
