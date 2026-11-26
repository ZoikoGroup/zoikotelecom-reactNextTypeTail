"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { HEADING, SectionHeader } from "./shared";

const FAQ_ITEMS = [
  {
    id: "find-account-help",
    question: "Where do I find account help?",
    answer:
      "On this page. For anything that needs a change to your account, contact our team through the published Contact page.",
  },
  {
    id: "login-page",
    question: "Does Zoiko have an account login page?",
    answer:
      "A sign-in page appears on our site, but it isn’t confirmed to work yet, so we don’t promote it here. Contact us for account help.",
  },
  {
    id: "every-service",
    question: "Can I manage every service in one account?",
    answer:
      "Your services aren’t shown online yet. Our team can tell you which mobile, broadband and landline services are on your account.",
  },
  {
    id: "change-contact-details",
    question: "Can I change my contact details myself?",
    answer: "Not online yet. Contact us and we’ll verify it’s you before making any change.",
  },
  {
    id: "forgot-password",
    question: "What if I can’t remember my password?",
    answer:
      "Type the official site address yourself and use the reset option if it’s shown. If that doesn’t work, contact our team.",
  },
  {
    id: "share-otp",
    question: "Should I share my one-time passcode with support?",
    answer: "No. We will never ask you to send a one-time code, password, recovery link, full card number or security PIN.",
  },
  {
    id: "google-facebook",
    question: "Can I sign in with Google or Facebook?",
    answer: "Those buttons appear on our sign-in page but aren’t confirmed to work yet, so we don’t recommend relying on them.",
  },
  {
    id: "remember-device",
    question: "What does “Remember this device” mean?",
    answer:
      "It keeps you signed in on that device. Only use it on personal devices — never on a shared or public computer.",
  },
  {
    id: "family-changes",
    question: "Can a family member make changes for me?",
    answer: "Only once their authority to act for you has been verified. Sharing your address or phone number doesn’t give access.",
  },
  {
    id: "add-admin",
    question: "Can my business add another administrator?",
    answer:
      "No self-service invitations are confirmed yet. Contact us and we’ll verify the request with an authorised person at your organisation.",
  },
  {
    id: "invoices",
    question: "Where are my invoices?",
    answer: "Invoices aren’t shown online yet. See our Billing & Payments help or contact our team.",
  },
  {
    id: "transfer-number",
    question: "Can I transfer a mobile number from the account page?",
    answer: "No. Number transfers are handled by our team — contact us to start one.",
  },
  {
    id: "account-takeover",
    question: "How can I report account takeover?",
    answer:
      "Contact us urgently through the published Contact page. Change your password and your email password if you still can.",
  },
  {
    id: "dashboard-loading",
    question: "Why does the dashboard stay on “Loading”?",
    answer:
      "A loading screen doesn’t mean a working dashboard or an outage on your account. Contact us if you need account help.",
  },
  {
    id: "suspicious-link",
    question: "What if I receive a suspicious Zoiko login link?",
    answer: "Don’t click it or enter any details. Type the official site address yourself and report the message to us.",
  },
  {
    id: "id-documents",
    question: "Do I have to send a passport or ID document?",
    answer:
      "Only when necessary, and only through an approved secure process. Never send ID documents by ordinary email or message.",
  },
  {
    id: "support-without-signin",
    question: "Can I contact support without signing in?",
    answer: "Yes. You can reach our team through the published Contact page without signing in.",
  },
  {
    id: "support-24-7",
    question: "Is support available 24/7?",
    answer: "We don’t promise 24/7 support here. Current opening hours are listed on our Contact page.",
  },
  {
    id: "analytics-consent",
    question: "Can I withdraw consent to analytics?",
    answer: "Yes. You can change your cookie choices at any time — see our cookies policy for details.",
  },
  {
    id: "screen-reader",
    question: "What if I need help using a screen reader?",
    answer: "Ask us for an accessible way to communicate or a support adjustment. Phone isn’t the only route.",
  },
] as const;

export default function AccountFaqs() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFaq = (id: string) =>
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));

  return (
    <section id="faqs" className="w-full scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader eyebrow="FAQs" title="Account questions" />

        <div className="mt-12 grid grid-cols-1 items-start gap-x-6 gap-y-4 md:grid-cols-2">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            const panelId = `${faq.id}-answer`;
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-2xl border border-[#E3E6F2] bg-white transition-colors hover:border-[#D4D9EC]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between px-[22px] py-5 text-left"
                >
                  <span className={`${HEADING} text-[15px] font-medium text-[#0F1452]`}>{faq.question}</span>
                  {isOpen ? (
                    <Minus className="ml-4 h-4 w-4 shrink-0 text-[#E0127C]" strokeWidth={2.5} aria-hidden="true" />
                  ) : (
                    <Plus className="ml-4 h-4 w-4 shrink-0 text-[#E0127C]" strokeWidth={2.5} aria-hidden="true" />
                  )}
                </button>
                {isOpen && (
                  <div id={panelId} className="border-t border-[#EEF0F7] px-[22px] py-4 text-sm leading-relaxed text-[#3A4268]">
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
