"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const BUSINESS_FAQ_ITEMS = [
  {
    id: "what-is-business-broadband",
    question: "What is business broadband?",
    answer:
      "Business broadband is designed specifically for commercial needs, offering reliable connectivity, business-grade support, and SLAs tailored to keep businesses online.",
  },
  {
    id: "does-zoiko-telecom-offer-business-broadband",
    question: "Does Zoiko Telecom offer business broadband?",
    answer:
      "Yes, we provide scalable business broadband solutions tailored to companies of various sizes, with dedicated proposals built around your exact site requirements.",
  },
  {
    id: "can-my-company-get-a-static-ip-address",
    question: "Can my company get a static IP address?",
    answer:
      "Static IP options are available for businesses requiring remote access, hosting services, or specific network configurations.",
  },
  {
    id: "are-speeds-guaranteed",
    question: "Are speeds guaranteed?",
    answer:
      "Speed guarantees depend on the specific business package chosen, such as dedicated leased lines versus standard business fibre connections.",
  },
  {
    id: "can-i-order-online",
    question: "Can I order online?",
    answer:
      "Business broadband orders and availability checks are currently handled through tailored written proposals by our team rather than instant online checkout.",
  },
  {
    id: "how-long-does-installation-take",
    question: "How long does installation take?",
    answer:
      "Installation timeframes vary based on your connection type, site access, and whether any engineering surveys or wayleaves are required.",
  },
  {
    id: "is-equipment-included",
    question: "Is equipment included?",
    answer:
      "Compatible routers and business-grade hardware options are outlined as part of your custom proposal before you commit.",
  },
  {
    id: "do-prices-increase-during-the-term",
    question: "Do prices increase during the term?",
    answer:
      "Contract terms and pricing structures are clearly detailed in your written proposal with full transparency before agreement.",
  },
  {
    id: "can-we-keep-our-business-phone-service",
    question: "Can we keep our business phone service?",
    answer:
      "Depending on your current setup and migration path, our team can advise on retaining or transitioning your business voice services.",
  },
  {
    id: "what-if-our-office-connection-fails",
    question: "What if our office connection fails?",
    answer:
      "Business packages include dedicated support channels and SLA options designed to prioritize fault resolution and keep your business running.",
  },
  {
    id: "is-full-fibre-different-from-regular-fibre",
    question: "Is full fibre different from regular fibre?",
    answer:
      "Yes, full fibre (FTTP) delivers fibre-optic cables directly to your premises, offering faster speeds and greater reliability than part-fibre copper connections.",
  },
  {
    id: "does-it-use-bt-wholesale-infrastructure",
    question: "Does it use BT Wholesale infrastructure?",
    answer:
      "We utilize robust nationwide carrier infrastructure to ensure wide availability and high-quality connectivity for your business sites.",
  },
  {
    id: "do-you-offer-dedicated-leased-lines",
    question: "Do you offer dedicated leased lines?",
    answer:
      "Yes, dedicated leased lines provide uncontended, symmetric upload and download speeds exclusively for your business.",
  },
  {
    id: "what-download-and-upload-speeds-will-i-get",
    question: "What download and upload speeds will I get?",
    answer:
      "Speeds depend on the specific package and connection type available at your exact business address, detailed in your proposal.",
  },
  {
    id: "can-you-check-several-office-sites",
    question: "Can you check several office sites?",
    answer:
      "Yes, our team can process multi-site availability checks and compile a comprehensive proposal covering all your business locations.",
  },
  {
    id: "what-if-a-survey-is-needed",
    question: "What if a survey is needed?",
    answer:
      "If your premises require engineering work or site access checks, our team will coordinate the survey process with you.",
  },
  {
    id: "whats-the-minimum-contract-length",
    question: "What’s the minimum contract length?",
    answer:
      "Minimum contract lengths vary depending on the business broadband tier and infrastructure required for your sites.",
  },
  {
    id: "what-does-an-sla-cover",
    question: "What does an SLA cover?",
    answer:
      "Service Level Agreements (SLAs) cover guaranteed response times, fault repair targets, and network availability commitments.",
  },
  {
    id: "does-one-touch-switch-work-for-businesses",
    question: "Does One Touch Switch work for businesses?",
    answer:
      "Switching processes for businesses depend on current provider terms and network compatibility, which our team will verify during your enquiry.",
  },
  {
    id: "how-do-we-request-a-proposal",
    question: "How do we request a proposal?",
    answer:
      "You can request a tailored business broadband proposal by submitting your site details through our online form or contacting our team directly.",
  },
] as const;

export default function BusinessBroadbandFaqs() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section
      id="faqs"
      className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            FAQS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Business broadband questions
          </h2>
        </div>

        {/* Two-Column FAQ Grid */}
        <div className="mx-auto mt-12 grid max-w-[1300px] grid-cols-1 gap-4 md:grid-cols-2">
          {BUSINESS_FAQ_ITEMS.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-2xl border border-[#E6E9F2] bg-white shadow-[0_2px_10px_rgba(17,24,60,0.02)] transition-colors hover:border-[#DCE1F0]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors"
                >
                  <span className="text-sm font-bold text-[#11183C] sm:text-base">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FCE8F1] text-[#E11D74] transition-transform">
                    {isOpen ? (
                      <Minus className="h-4 w-4" strokeWidth={2.5} />
                    ) : (
                      <Plus className="h-4 w-4" strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[#EEF0F7] px-6 py-4 text-sm leading-relaxed text-[#4B5563]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
