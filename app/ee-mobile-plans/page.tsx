import React from 'react'
import type { Metadata } from 'next'
import EEmobileplans from './EEmobileplans';

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
    <>
      <EEmobileplans />

      {/* ─── AEO & GEO ANSWER BLOCKS ─────────────────── */}
      <section className="bg-neutral-50 py-16 dark:bg-neutral-900 lg:py-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eeMobileSchema) }}
        />
        <div className="mx-auto max-w-[1320px] px-5">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#C12172] dark:text-pink-400">
              FAQs & Key Facts
            </span>
            <h2 className="mt-3 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
              EE Mobile Plans & Connectivity Overview
            </h2>
            <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
              Official answers regarding Zoiko Telecom EE Mobile SIM only deals, eSIM support, and activation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <section className="aeo-answer-block rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C12172] hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:p-7">
              <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                Does Zoiko Telecom offer mobile plans?
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                Zoiko Telecom offers EE Mobile SIM plans with calling, texting and high-speed data options. Current plan features and allowances should be checked on the live mobile service page.
              </p>
            </section>

            <section className="aeo-answer-block rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C12172] hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:p-7">
              <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                Does Zoiko Telecom offer eSIM?
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                Zoiko Telecom provides eSIM services. An eSIM is a digital SIM, and eligible customers can receive a QR code by email for activation on a compatible device.
              </p>
            </section>

            <section className="aeo-answer-block rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C12172] hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:p-7">
              <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                How do I activate a Zoiko Telecom eSIM?
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                After purchasing an eligible eSIM plan, customers can receive an activation QR code by email and scan it using a compatible device to activate the mobile service.
              </p>
            </section>

            <section className="geo-answer-block rounded-2xl border border-neutral-200 border-l-4 border-l-[#C12172] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:border-l-pink-400 dark:bg-neutral-900 sm:p-7">
              <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                Zoiko Telecom mobile connectivity
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                Zoiko Telecom provides EE Mobile SIM and eSIM options for UK customers, with plan choices covering different data requirements and contract periods.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
