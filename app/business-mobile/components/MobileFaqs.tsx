"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: "what-is-business-mobile",
    question: "What is Business Mobile from Zoiko Telecom?",
    answer:
      "Business mobile from Zoiko Telecom provides dedicated mobile plans, multi-SIM management, secure device provisioning, and team verification support tailored for UK businesses.",
  },
  {
    id: "multiple-sims",
    question: "Can my business order multiple SIMs?",
    answer:
      "Yes. You can order multiple SIMs for your team. Our business advisors will review your requirements and prepare an itemised proposal.",
  },
  {
    id: "keep-numbers",
    question: "Can we keep our existing business numbers?",
    answer:
      "Yes. You can keep your existing business numbers using a PAC for single numbers or a coordinated migration plan for batches and larger team numbers.",
  },
  {
    id: "company-phones",
    question: "Can we get company phones with our plans?",
    answer:
      "Yes. We discuss handsets and accessories alongside your mobile plan. Device prices and finance are confirmed directly in your custom proposal.",
  },
  {
    id: "data-allowance",
    question: "How much data does each SIM include?",
    answer:
      "Data allowances depend on the specific business tariff selected for each line, ranging from standard business bundles to unlimited data options.",
  },
  {
    id: "vat",
    question: "Do we pay VAT?",
    answer:
      "VAT applies to business mobile plans where applicable and is clearly labelled and itemised in your quote and billing breakdown.",
  },
  {
    id: "contract-length",
    question: "Can a small business sign a 36-month contract?",
    answer:
      "For small businesses with 10 or fewer employees, minimum terms are capped at a maximum of 24 months to ensure compliance and cost transparency.",
  },
] as const;

export default function MobileFaqs() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            FAQS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Business mobile questions
          </h2>
        </div>

        {/* Main Grid: Accordion Left, Image Right */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-12">
          {/* Left Column: Accordion Items */}
          <div className="space-y-4 lg:col-span-7">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-[#ECEEF6] bg-white shadow-[0_4px_20px_rgba(17,24,60,0.02)] transition-all"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-[#FAFAFD]"
                  >
                    <span className="text-base font-extrabold text-[#11183C] sm:text-lg">
                      {item.question}
                    </span>
                    <div className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#FCE8F1] text-[#E11D74]">
                      {isOpen ? (
                        <Minus className="h-4 w-4" strokeWidth={2.5} />
                      ) : (
                        <Plus className="h-4 w-4" strokeWidth={2.5} />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#ECEEF6] px-6 py-4 text-sm leading-relaxed text-[#4B5563]">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Image (/Images/mbl/14.png) */}
          <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-[#ECEEF6] shadow-[0_12px_40px_rgba(17,24,60,0.08)] sm:h-[500px] lg:col-span-5 lg:sticky lg:top-8">
            <Image
              src="/Images/mbl/14.png"
              alt="Team members participating in a business meeting"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
