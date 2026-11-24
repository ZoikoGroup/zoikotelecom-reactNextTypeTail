import React from "react";
import { Lock, Search } from "lucide-react";
import SectionHeader from "./SectionHeader";

const QUESTIONS = [
  {
    title: "What does it cost?",
    text: "Premium, how often you pay, and the total over the term.",
  },
  {
    title: "What’s the excess?",
    text: "What you pay towards each claim, if anything.",
  },
  {
    title: "What’s excluded?",
    text: "Scratches, wear, unattended loss — read the definitions.",
  },
  {
    title: "Are there limits?",
    text: "How many claims, and up to what amount.",
  },
  {
    title: "New or refurbished?",
    text: "What kind of replacement you’d receive.",
  },
  {
    title: "Who is the provider?",
    text: "The insurer, the distributor and their authorisation.",
  },
  {
    title: "When does it start and end?",
    text: "Start date, renewal and how to cancel.",
  },
  {
    title: "How do complaints work?",
    text: "Who handles them and how to escalate.",
  },
] as const;

export default function EightQuestionsSection() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Before you buy any cover"
          title="Eight questions to ask"
          subtitle="Whoever offers it, these answers should be in the policy documents."
        />

        {/* 4x2 question cards */}
        <div className="mt-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {QUESTIONS.map(({ title, text }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-[20px] border border-[#E3E6F2] bg-white p-5"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1 select-none text-[64px] font-extrabold leading-none text-[#F1ECFB]"
              >
                ?
              </span>
              <h3 className="relative text-base font-bold text-[#0A1446]">{title}</h3>
              <p className="relative mt-1.5 text-[13.5px] leading-[1.6] text-[#1E1B2E]">{text}</p>
            </div>
          ))}
        </div>

        {/* Loss vs Theft comparison */}
        <div className="mt-6 grid grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex items-start gap-4 rounded-[24px] border border-[#E3E6F2] bg-white p-5 shadow-[0_8px_22px_rgba(10,20,70,0.04)]">
            <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-2xl bg-[#7B3FE4] text-white">
              <Search className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-[#0A1446]">Loss</h3>
              <p className="mt-1 text-[14.5px] leading-[1.6] text-[#1E1B2E]">
                You don’t know where the phone is. Many policies treat this differently from theft.
              </p>
            </div>
          </div>

          <span
            aria-hidden="true"
            className="text-center text-3xl font-bold leading-none text-[#A0A6C0]"
          >
            ≠
          </span>

          <div className="flex items-start gap-4 rounded-[24px] border border-[#E3E6F2] bg-white p-5 shadow-[0_8px_22px_rgba(10,20,70,0.04)]">
            <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-2xl bg-[#E0127C] text-white">
              <Lock className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-[#0A1446]">Theft</h3>
              <p className="mt-1 text-[14.5px] leading-[1.6] text-[#1E1B2E]">
                Someone took it. Policies may need a police report and quick notification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
