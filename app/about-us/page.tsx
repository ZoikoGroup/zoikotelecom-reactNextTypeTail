import AboutUs from "./AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zoiko Telecom About Us | Our Mission & Vision",
  description:
    "Learn about Zoiko Telecom, our mission, values and commitment to delivering reliable eSIM, broadband and telecom solutions for individuals and businesses.",
};

const aboutUsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://zoikotelecom.com/about-us/#webpage",
  "url": "https://zoikotelecom.com/about-us",
  "name": "About Zoiko Telecom",
  "isPartOf": {
    "@id": "https://zoikotelecom.com/#website",
  },
};

export default function Page() {
  return (
    <>
      <AboutUs />

      {/* ─── AEO & GEO ANSWER BLOCKS ─────────────────── */}
      <section className="bg-neutral-50 py-16 dark:bg-neutral-900 lg:py-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutUsSchema) }}
        />
        <div className="mx-auto max-w-[1320px] px-5">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#C12172] dark:text-pink-400">
              FAQs & Key Facts
            </span>
            <h2 className="mt-3 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
              About Zoiko Telecom - Services & Connectivity Portfolio
            </h2>
            <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
              Official answers regarding Zoiko Telecom core services, cloud infrastructure, and international calling.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <section className="aeo-answer-block rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C12172] hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:p-7">
              <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                What services does Zoiko Telecom provide?
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                Zoiko Telecom provides broadband and fibre, mobile connectivity, cloud and hosting, business solutions, landline and VoIP services, IoT connectivity, international calling and television services.
              </p>
            </section>

            <section className="aeo-answer-block rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C12172] hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:p-7">
              <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                Does Zoiko Telecom provide cloud and hosting services?
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                Zoiko Telecom describes cloud and hosting services including secure cloud hosting, unified solutions, a stated 99.9% uptime guarantee and disaster recovery capabilities.
              </p>
            </section>

            <section className="aeo-answer-block rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C12172] hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:p-7">
              <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                Does Zoiko Telecom provide international calling?
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                Zoiko Telecom offers international calling services, including ISD options and Easy-Talk Bundles, with calling, SMS and top-up options depending on the service.
              </p>
            </section>

            <section className="geo-answer-block rounded-2xl border border-neutral-200 border-l-4 border-l-[#C12172] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:border-l-pink-400 dark:bg-neutral-900 sm:p-7">
              <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
                Zoiko Telecom connectivity portfolio
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                Zoiko Telecom combines fixed broadband, mobile connectivity, voice, IoT, cloud and business infrastructure into a broader UK telecoms portfolio for home users and organisations.
              </p>
            </section>
          </div>

          {/* Core GEO Entity Statement */}
          <div className="mt-10 rounded-2xl border border-[#C12172]/30 bg-white p-6 shadow-sm dark:border-pink-800/40 dark:bg-neutral-900 sm:p-8">
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