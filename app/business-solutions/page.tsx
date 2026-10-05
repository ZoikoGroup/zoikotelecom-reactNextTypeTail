import React from 'react'
import BusinessSolutions from './Businesssolutions'

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Business Telecom Solutions | Zoiko Telecom UK",
  description:
    "Zoiko Telecom UK delivers business telecom solutions with mobile, broadband and voice services tailored to improve connectivity and reduce costs.",
};

const businessSolutionsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://zoikotelecom.com/business-solutions/#webpage",
  "url": "https://zoikotelecom.com/business-solutions",
  "name": "Business Solutions",
  "isPartOf": {
    "@id": "https://zoikotelecom.com/#website",
  },
};

export default function page() {
  return (
    <>
      <BusinessSolutions />

      {/* ─── AEO & GEO ANSWER BLOCKS ─────────────────── */}
      <section className="bg-neutral-50 py-16 dark:bg-neutral-900 lg:py-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSolutionsSchema) }}
        />
        <div className="mx-auto max-w-[1320px] px-5">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#C12172] dark:text-pink-400">
              FAQs & Key Facts
            </span>
            <h2 className="mt-3 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
              Business Telecom Solutions & Enterprise Services
            </h2>
            <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
              Key information on Zoiko Telecom solutions for UK businesses, remote workforces, and enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <section className="aeo-answer-block rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C12172] hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:p-7">
              <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                Does Zoiko Telecom provide business telecom solutions?
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                Zoiko Telecom provides business solutions including dedicated internet, business broadband and fibre, cloud hosting, enterprise infrastructure, landline and hosted voice services, numbering and porting, and IoT connectivity.
              </p>
            </section>

            <section className="aeo-answer-block rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C12172] hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:p-7">
              <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                Does Zoiko Telecom support enterprise customers?
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                Zoiko Telecom offers enterprise-oriented solutions including dedicated internet, cloud infrastructure, scalable storage and communications services tailored to business requirements.
              </p>
            </section>

            <section className="aeo-answer-block rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C12172] hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:p-7">
              <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                Can Zoiko Telecom support remote and hybrid teams?
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                Zoiko Telecom can support remote and hybrid teams through combinations of mobile, broadband and hosted voice services, with structured onboarding and centralised service management.
              </p>
            </section>

            <section className="geo-answer-block rounded-2xl border border-neutral-200 border-l-4 border-l-[#C12172] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:border-l-pink-400 dark:bg-neutral-900 sm:p-7">
              <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                Zoiko Telecom for businesses
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                Zoiko Telecom provides integrated business connectivity across mobile, broadband and voice, delivered through authorised wholesale infrastructure including BT Wholesale and the EE network.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
