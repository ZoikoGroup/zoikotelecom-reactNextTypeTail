"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface TopicCategory {
  id: string;
  title: string;
  bg: string;
  icon: React.ReactNode;
  faqs: FaqItem[];
}

const categories: TopicCategory[] = [
  {
    id: "esim-mobile",
    title: "eSIM & Mobile Plans",
    bg: "bg-[#7C3AED]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
        <rect x="9.5" y="12" width="5" height="5" rx="0.8" />
        <path d="M12 12v5M9.5 14.5h5" />
      </svg>
    ),
    faqs: [
      {
        question: "What is an eSIM?",
        answer:
          "An eSIM is a digital SIM built into compatible devices that lets you activate a mobile plan without inserting a physical plastic SIM card.",
      },
      {
        question: "How can I activate an eSIM?",
        answer:
          "Follow the activation instructions and QR code supplied with your plan in your device's mobile data settings.",
      },
      {
        question: "Can I keep my mobile number when switching?",
        answer:
          "Yes—request a PAC code from your current provider and enter it during order or account setup to transfer your existing number.",
      },
      {
        question: "Is mobile roaming included?",
        answer:
          "Roaming allowances vary by plan and destination. Check your specific tariff summary before travelling to confirm included regions.",
      },
    ],
  },
  {
    id: "broadband-fibre",
    title: "Broadband & Fibre",
    bg: "bg-[#10B981]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4.5 11.5a11 11 0 0 1 15 0" />
        <path d="M8 15a6 6 0 0 1 8 0" />
        <circle cx="12" cy="18.5" r="1.2" fill="white" stroke="none" />
      </svg>
    ),
    faqs: [
      {
        question: "Do all broadband plans have unlimited data?",
        answer:
          "Yes, all standard residential and business broadband plans come with truly unlimited data and no usage caps.",
      },
      {
        question: "How can I check broadband availability?",
        answer:
          "Enter your postcode in our availability checker to view full-fibre and broadband speeds available at your address.",
      },
      {
        question: "Why is my Wi-Fi slower than my broadband line?",
        answer:
          "Wi-Fi speeds can be reduced by distance from the router, thick walls, channel interference, or older device wireless adapters.",
      },
      {
        question: "How do I report a broadband fault?",
        answer:
          "Run a quick line check in your online account or contact our technical support team with your router status light details.",
      },
    ],
  },
  {
    id: "business-solutions",
    title: "Business Solutions",
    bg: "bg-[#2563EB]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="4" y="7" width="16" height="13" rx="2" />
        <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
        <path d="M4 12h16" />
      </svg>
    ),
    faqs: [
      {
        question: "Do business services have guaranteed uptime?",
        answer:
          "Selected business broadband and leased-line packages include formal Service Level Agreements (SLAs) with target fix times.",
      },
    ],
  },
  {
    id: "billing-payments",
    title: "Billing & Payments",
    bg: "bg-[#EC1C7A]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <path d="M8.5 9h7M8.5 13h7M8.5 17h4" />
      </svg>
    ),
    faqs: [
      {
        question: "What payment methods can I use?",
        answer:
          "We accept Direct Debit, major UK debit and credit cards, and BACS transfers for eligible business accounts.",
      },
      {
        question: "Can I update my payment method from this page?",
        answer:
          "For security, payment details are updated inside your signed-in account area under Billing & Payments.",
      },
      {
        question: "When is my bill due?",
        answer:
          "Your due date is shown at the top of each monthly statement and matches your chosen billing cycle.",
      },
      {
        question: "What if I disagree with a charge?",
        answer:
          "Reach out to our billing team with your invoice reference—we will review the item and pause collection on disputed amounts while investigating.",
      },
    ],
  },
  {
    id: "account-management",
    title: "Account Management",
    bg: "bg-[#FF7A59]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="8.5" r="3.5" />
        <path d="M5.5 19.5c1.2-3.5 3.8-5.5 6.5-5.5s5.3 2 6.5 5.5" />
      </svg>
    ),
    faqs: [
      {
        question: "Can I manage my services online?",
        answer:
          "Yes, you can view bills, monitor usage, manage add-ons, and update account preferences anytime in your online portal.",
      },
    ],
  },
  {
    id: "general-questions",
    title: "General Questions",
    bg: "bg-[#7C3AED]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="4" y="5" width="16" height="12" rx="2.5" />
        <path d="M9 19l3-2h4" />
        <path d="M8.5 10h7M8.5 13h4.5" />
      </svg>
    ),
    faqs: [
      {
        question: "Can I cancel at any time?",
        answer:
          "Rolling monthly plans can be cancelled before your next billing date; fixed-term contracts may incur early exit fees.",
      },
      {
        question: "Does Zoiko offer support 24 hours a day?",
        answer:
          "Critical network fault reporting is monitored 24/7, while general customer and billing support operates during extended daily hours.",
      },
      {
        question: "How can I contact Zoiko?",
        answer:
          "You can reach our team via the Contact page by live chat, phone, or email support.",
      },
      {
        question: "Can I submit a complaint?",
        answer:
          "Yes, you can raise a formal complaint through our Contact page or Complaints Code of Practice, and a specialist will review it promptly.",
      },
      {
        question: "When can I use an independent dispute resolution scheme?",
        answer:
          "If a complaint remains unresolved after 8 weeks—or if we issue a deadlock letter earlier—you can refer the matter free of charge to our approved ADR scheme.",
      },
      {
        question: "What if I need accessibility assistance?",
        answer:
          "We offer alternative bill formats, relay services, and priority support registration—let our team know what adjustments help you best.",
      },
    ],
  },
];

export default function AllFaqsByTopic() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string>(categories[0].id);

  const toggleFaq = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
    <section
      id="all-faqs"
      className="w-full bg-[#FFFFFF] px-4 py-14 text-[#18133E] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6E6A85]">
            All FAQs
          </p>
          <h2 className="mt-2 text-[32px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#18133E] sm:text-[42px]">
            Answers, organised by topic
          </h2>
          <p className="mt-2 text-[13.5px] text-[#7A7691]">
            Answer first, then the details that depend on your plan or
            agreement.
          </p>
        </div>

        {/* Two-Column Layout: Sticky Topic Sidebar + Grouped FAQ Lists */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] lg:gap-12">
          {/* Left Sticky Navigation */}
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <nav aria-label="FAQ topics">
              <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1.5">
                {categories.map((cat) => {
                  const isActive = activeId === cat.id;
                  return (
                    <li key={cat.id}>
                      <a
                        href={`#${cat.id}`}
                        onClick={() => setActiveId(cat.id)}
                        className={`flex items-center gap-3 rounded-xl px-3 py-2 text-[12.5px] font-bold transition-colors ${
                          isActive
                            ? "bg-white text-[#18133E] shadow-[0_2px_10px_rgba(24,19,62,0.05)]"
                            : "text-[#3D3857] hover:bg-white/70 hover:text-[#18133E]"
                        }`}
                      >
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${cat.bg}`}
                        >
                          {cat.icon}
                        </span>
                        <span>{cat.title}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* Right Grouped Topic Sections */}
          <div className="space-y-10">
            {categories.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-8">
                {/* Topic Group Heading */}
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${cat.bg}`}
                  >
                    {cat.icon}
                  </span>
                  <h3 className="text-[16px] font-extrabold text-[#18133E]">
                    {cat.title}
                  </h3>
                </div>

                {/* FAQ Rows */}
                <div className="mt-4 space-y-2.5">
                  {cat.faqs.map((item, idx) => {
                    const key = `${cat.id}-${idx}`;
                    const isOpen = openKey === key;

                    return (
                      <div
                        key={key}
                        className="rounded-xl border border-[#ECEAF2] bg-white shadow-[0_2px_10px_rgba(24,19,62,0.025)] transition-shadow hover:shadow-[0_4px_16px_rgba(24,19,62,0.05)]"
                      >
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() => toggleFaq(key)}
                          className="flex w-full items-center justify-between gap-4 px-5 py-3.5 text-left"
                        >
                          <span className="text-[13.5px] font-bold text-[#18133E]">
                            {item.question}
                          </span>
                          <span
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EFEAFE] text-[#7C3AED] transition-transform duration-200 ${
                              isOpen ? "rotate-45" : ""
                            }`}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              className="h-3.5 w-3.5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              aria-hidden="true"
                            >
                              <path d="M12 6v12M6 12h12" />
                            </svg>
                          </span>
                        </button>

                        {isOpen && (
                          <div className="border-t border-[#F1EFF6] px-5 pb-4 pt-3 text-[13px] leading-[1.6] text-[#55506E]">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Bottom "Can't find your answer?" Callout Box */}
            <div className="rounded-2xl border border-dashed border-[#D8D4E8] bg-[#F4F3F9]/70 px-6 py-5">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                {/* Dual SVG Icon Tiles */}
                <div className="flex shrink-0 items-center gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EAE8F3] text-[#7A7691]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="11" cy="11" r="6.5" />
                      <path d="M16 16l4 4" />
                    </svg>
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EAE8F3] text-[#7A7691]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      <path d="M8 9h8M8 13h5" />
                    </svg>
                  </span>
                </div>

                {/* Callout Copy */}
                <div>
                  <h4 className="text-[13.5px] font-extrabold text-[#18133E]">
                    Can&apos;t find your answer?
                  </h4>
                  <p className="mt-1 text-[12px] leading-[1.55] text-[#6E6A85]">
                    Search and live chat aren&apos;t available yet. Browse
                    another topic above, or{" "}
                    <a
                      href="/contact"
                      className="font-bold text-[#EC1C7A] underline decoration-[#EC1C7A]/40 underline-offset-2 hover:text-[#c81566]"
                    >
                      contact our team
                    </a>{" "}
                    and we&apos;ll help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
