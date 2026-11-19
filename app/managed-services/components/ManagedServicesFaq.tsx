"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "what-are-managed-telecom-services",
    question: "What are managed telecom services?",
    answer:
      "They cover coordination across business mobile, broadband and voice services — from onboarding and service changes to issue triage and escalation — according to your agreed terms.",
  },
  {
    id: "is-managed-telecom-same-as-managed-it",
    question: "Is managed telecom the same as managed IT?",
    answer:
      "No. Managed telecom focuses on connectivity, lines and service coordination, whereas IT and device support such as endpoint patching or remote desktop are separate unless agreed in writing.",
  },
  {
    id: "who-fixes-broadband-problem",
    question: "Who fixes a broadband problem?",
    answer:
      "Wholesale network providers handle underlying line and infrastructure faults, while Zoiko Telecom coordinates triage, supplier escalation and status updates in line with your agreement.",
  },
  {
    id: "is-support-available-around-the-clock",
    question: "Is support available around the clock?",
    answer:
      "Support availability depends on your agreed terms. We do not assume 24/7 coverage unless explicitly set out in your contract.",
  },
  {
    id: "can-i-track-support-case-online",
    question: "Can I track a support case online?",
    answer:
      "A self-service case portal is not available yet. Authorised contacts can check case updates directly with our support team.",
  },
  {
    id: "do-all-services-include-sla",
    question: "Do all services include an SLA?",
    answer:
      "Service levels, response targets and repair commitments depend on the specific service and signed contract terms.",
  },
  {
    id: "who-is-responsible-for-customer-data",
    question: "Who is responsible for customer data?",
    answer:
      "Data handling responsibilities are governed by your agreement and applicable data protection terms, and public forms never ask for passwords or network credentials.",
  },
  {
    id: "what-happens-when-we-move-or-add-site",
    question: "What happens when we move or add a site?",
    answer:
      "We coordinate site details, availability checks, approvals and scheduling with your named contacts and relevant providers.",
  },
  {
    id: "what-should-i-check-before-choosing",
    question:
      "What should I check before choosing a managed services provider?",
    answer:
      "Confirm scope, responsibility splits between your business, Zoiko and suppliers, support hours, response vs. repair targets, escalation routes, fees, contract length, remedies and exit terms in writing.",
  },
];

export default function ManagedServicesFaq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      aria-labelledby="managed-faq-heading"
      className="w-full bg-white py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Centered Header */}
        <div className="text-center max-w-[700px] mx-auto mb-11 sm:mb-12">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#565B75] mb-2.5">
            FAQS
          </p>
          <h2
            id="managed-faq-heading"
            className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B]"
          >
            Managed services questions
          </h2>
        </div>

        {/* Left Accordion + Right Portrait Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-start">
          {/* Accordion Column */}
          <div className="lg:col-span-7 space-y-3">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-[12px] bg-white border border-[#E7E9F2] shadow-[0_6px_18px_rgba(15,23,66,0.03)] overflow-hidden"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => handleToggle(item.id)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-[13.5px] sm:text-[14px] font-bold leading-[1.38] text-[#070B2B] hover:bg-[#FCFBFD] transition-colors cursor-pointer"
                  >
                    <span>{item.question}</span>
                    {isOpen ? (
                      <Minus
                        className="h-4 w-4 shrink-0 text-[#E61E88]"
                        strokeWidth={2.4}
                      />
                    ) : (
                      <Plus
                        className="h-4 w-4 shrink-0 text-[#E61E88]"
                        strokeWidth={2.4}
                      />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-[12.5px] sm:text-[13px] leading-[1.58] text-[#4B5068] border-t border-[#F1F3F9]">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side Image */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[22px] bg-[#E5E7EB] shadow-[0_18px_42px_rgba(15,23,66,0.08)] border border-[#ECEAF5]">
              <img
                src="/Images/mng/22.png"
                alt="Two colleagues discussing planning and strategy at a desk"
                className="h-[460px] sm:h-[545px] w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
