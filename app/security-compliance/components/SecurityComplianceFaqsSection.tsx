"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

const FAQ_ITEMS = [
  {
    id: "what-is-security-compliance-business-telecoms",
    question: "What is security and compliance for business telecoms?",
    answer:
      "It covers how account changes are authorised, how network and voice services are configured and supported, how personal data is handled, and how supplier responsibilities are split across your business, Zoiko Telecom, and wholesale network providers.",
  },
  {
    id: "is-zoiko-telecom-iso-27001-certified",
    question: "Is Zoiko Telecom ISO 27001 certified?",
    answer:
      "No current scoped ISO 27001 certificate is published here. We don't display certification badges on this page, and you can contact our team to ask what assurance information is appropriate for your service and purpose.",
  },
  {
    id: "can-i-request-security-documents",
    question: "Can I request security documents?",
    answer:
      "Yes. You can ask about published information such as our privacy notice, or request details on service safeguards, contract and data terms, and supplier responsibilities. Restricted documents may require verification first.",
  },
  {
    id: "does-uk-based-support-mean-all-data-stays-in-uk",
    question: "Does UK-based support mean all data stays in the UK?",
    answer:
      "No. Having UK-based support does not by itself mean all data stays within the UK — you should ask for data-flow details for your specific service and contract.",
  },
  {
    id: "is-vulnerability-policy-security-disclosure-policy",
    question: "Is the Vulnerability Policy a security disclosure policy?",
    answer:
      "Specific policy scope and reporting routes depend on the published terms and how you contact us. For urgent account or service concerns, use our verified support channels rather than submitting sensitive credentials via web forms.",
  },
  {
    id: "what-if-my-business-suspects-data-breach",
    question: "What if my business suspects a data breach?",
    answer:
      "Contain and assess the incident with your own privacy team, and contact our support team promptly for anything involving your Zoiko services. ICO reporting obligations may apply — usually within 72 hours.",
  },
  {
    id: "does-zoiko-operate-security-operations-centre",
    question: "Does Zoiko operate a security operations centre?",
    answer:
      "24/7 security monitoring is not offered on this page. Specific operational controls and escalation paths depend on the service and supplier involved.",
  },
  {
    id: "what-about-routers-and-wi-fi-security",
    question: "What about routers and Wi-Fi security?",
    answer:
      "Responsibilities typically split across supplied equipment (where agreed), wholesale lines, and your own Wi-Fi settings, devices, and passwords. Endpoint protection is not automatically included.",
  },
  {
    id: "which-telecom-security-laws-apply",
    question: "Which telecom security laws apply?",
    answer:
      "UK telecom-specific security duties can include the Telecommunications Security Act 2021 and relevant codes of practice for certain providers, alongside data protection laws such as UK GDPR depending on the role and service.",
  },
  {
    id: "is-ico-registration-evidence-of-full-gdpr-compliance",
    question: "Is ICO registration evidence of full GDPR compliance?",
    answer:
      "No. ICO registration is a statutory data protection registration requirement and is not certification of full compliance with UK GDPR or data protection obligations.",
  },
] as const satisfies readonly FaqItem[];

export default function SecurityComplianceFaqsSection() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      aria-labelledby="security-compliance-faqs-heading"
      className="w-full bg-white py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Centered Header */}
        <div className="text-center max-w-[760px] mx-auto mb-11 sm:mb-12">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#565B75] mb-2.5">
            FAQS
          </p>
          <h2
            id="security-compliance-faqs-heading"
            className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B]"
          >
            Security &amp; compliance questions
          </h2>
        </div>

        {/* Left Accordion List + Right Tall Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-stretch">
          {/* Accordion Column */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-2.5">
            {FAQ_ITEMS.map((item) => {
              const isOpen = Boolean(openIds[item.id]);
              return (
                <div
                  key={item.id}
                  className="rounded-[12px] bg-white border border-[#ECEEF6] shadow-[0_4px_14px_rgba(15,23,66,0.03)] overflow-hidden"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-4 py-3.5 flex items-center justify-between gap-4 text-left hover:bg-[#FAF9FE] transition-colors cursor-pointer"
                  >
                    <span className="text-[12.5px] sm:text-[13px] font-bold leading-[1.4] text-[#070B2B]">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-[#E61E88] flex items-center justify-center"
                    >
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5 stroke-[2.6]" />
                      ) : (
                        <Plus className="h-3.5 w-3.5 stroke-[2.6]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-3.5 pt-1 text-[12px] leading-[1.55] text-[#5B6078] border-t border-[#F3F4F9]">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Tall Image */}
          <div className="lg:col-span-5">
            <div className="h-full min-h-[420px] sm:min-h-[540px] w-full rounded-[16px] overflow-hidden bg-[#E5E7EB] shadow-[0_14px_34px_rgba(15,23,66,0.08)] border border-[#ECEAF4]">
              <img
                src="/Images/comp/23.png"
                alt="Audience member raising hand to ask a question during a presentation"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
