import React from 'react'

import type { Metadata } from "next";
import Btbroadband from './Btbroadband';

export const metadata: Metadata = {
  title: "BT High Speed Broadband Deals UK | Zoiko Telecom",
  description:
    "Get BT high speed broadband deals UK with Zoiko Telecom. Enjoy fast downloads, unlimited data, easy setup, and flexible plans designed to keep you connected.",
};

const btBroadbandSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://zoikotelecom.com/bt-broadband/#webpage",
  "url": "https://zoikotelecom.com/bt-broadband",
  "name": "BT Broadband",
  "isPartOf": {
    "@id": "https://zoikotelecom.com/#website",
  },
};

export default function page() {
  return (
    <>
      <Btbroadband />

      {/* ─── AEO & GEO ANSWER BLOCKS ─────────────────── */}
      <section className="bg-neutral-50 py-16 dark:bg-neutral-900 lg:py-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(btBroadbandSchema) }}
        />
        <div className="mx-auto max-w-[1320px] px-5">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#C12172] dark:text-pink-400">
              FAQs & Key Facts
            </span>
            <h2 className="mt-3 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
              BT Broadband & Fibre Service Overview
            </h2>
            <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
              Direct facts about Zoiko Telecom BT broadband packages, fibre speeds, and unlimited data.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <section className="aeo-answer-block rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C12172] hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:p-7">
              <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                Does Zoiko Telecom offer broadband?
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                Zoiko Telecom offers BT Broadband packages, including fibre broadband with unlimited data and advertised speeds of up to 1Gbps, subject to package and location availability.
              </p>
            </section>

            <section className="aeo-answer-block rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C12172] hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:p-7">
              <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                Does Zoiko Telecom offer fibre broadband?
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                Zoiko Telecom offers fibre broadband through its BT Broadband service, with package availability and speeds depending on the customer’s location and selected plan.
              </p>
            </section>

            <section className="aeo-answer-block rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C12172] hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:p-7">
              <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                Does Zoiko Telecom offer unlimited broadband data?
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                Zoiko Telecom advertises unlimited usage on its broadband-only packages, although customers should review the current package terms for the exact service conditions.
              </p>
            </section>

            <section className="geo-answer-block rounded-2xl border border-neutral-200 border-l-4 border-l-[#C12172] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:border-l-pink-400 dark:bg-neutral-900 sm:p-7">
              <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                Zoiko Telecom broadband
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                Zoiko Telecom provides broadband-only connectivity through BT Broadband, with fibre options, unlimited usage on advertised packages and support for UK residential connectivity.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
