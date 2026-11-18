"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Info } from "lucide-react";

type Question = {
  id: number;
  question: string;
  subtitle: string;
  options: readonly string[];
  summaryKey: string;
};

const QUESTIONS: readonly Question[] = [
  {
    id: 1,
    question: "How many sites or locations?",
    subtitle: "Include offices, shops and branches.",
    options: ["One", "2–5", "6 or more"],
    summaryKey: "Sites",
  },
  {
    id: 2,
    question: "How many people are on calls?",
    subtitle: "Estimate total staff using business phones or user seats.",
    options: ["1–5", "6–20", "21 or more"],
    summaryKey: "People on calls",
  },
  {
    id: 3,
    question: "Where are your main calls directed?",
    subtitle: "Choose the most common destination for your outbound calls.",
    options: [
      "Mostly UK landlines and mobiles",
      "Frequent international calls",
      "Mixed or other",
    ],
    summaryKey: "Main calls",
  },
  {
    id: 4,
    question: "What about your phone numbers?",
    subtitle:
      "Let us know if you need new numbers or are keeping existing ones.",
    options: ["New numbers", "Keep existing numbers", "Mix of both"],
    summaryKey: "Numbers",
  },
  {
    id: 5,
    question: "What is your preferred contract term?",
    subtitle: "Choose a commitment length that suits your business.",
    options: ["Up to 12 months", "Up to 24 months", "Flexible / Rolling"],
    summaryKey: "Term",
  },
] as const;

export default function BusinessQuizSection() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<Record<number, string>>({
    1: "One",
    2: "1–5",
    3: "Mostly UK landlines and mobiles",
    4: "New numbers",
    5: "Up to 24 months",
  });

  const activeQuestion =
    QUESTIONS.find((q) => q.id === currentStep) ?? QUESTIONS[0];

  const handleSelectOption = (option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentStep]: option,
    }));
  };

  const handleNext = () => {
    if (currentStep < QUESTIONS.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <section className="w-full bg-[#F5F6FB] py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
            Find your starting point
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight text-[#131138] sm:text-4xl lg:text-[42px]">
            Tell us about your business
          </h2>
          <p className="mx-auto mt-3 max-w-[560px] text-sm text-[#545275] sm:text-base">
            Five quick questions. We&rsquo;ll suggest the right conversation
            &mdash; not a plan or price.
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="mx-auto mt-10 max-w-[1300px]">
          <div className="grid grid-cols-5 gap-2">
            {QUESTIONS.map((q) => {
              const isPassed = q.id <= currentStep;
              return (
                <div
                  key={q.id}
                  className={`h-1.5 rounded-full transition-all ${
                    isPassed
                      ? "bg-gradient-to-r from-[#e6007e] to-[#7b3fe4]"
                      : "bg-[#e3e2ef]"
                  }`}
                />
              );
            })}
          </div>

          {/* Main Grid Layout */}
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            {/* Left: Question Card */}
            <div className="rounded-[28px] border border-[#ecebf4] bg-white p-8 shadow-[0_16px_40px_rgba(19,17,56,0.04)] sm:p-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.1em] text-[#e6007e]">
                Question {currentStep} of {QUESTIONS.length}
              </p>

              <h3 className="mt-3 text-2xl font-black tracking-tight text-[#131138] sm:text-3xl">
                {activeQuestion.question}
              </h3>

              <p className="mt-2 text-sm text-[#545275] sm:text-base">
                {activeQuestion.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {activeQuestion.options.map((option) => {
                  const isSelected = answers[currentStep] === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelectOption(option)}
                      className={
                        isSelected
                          ? "inline-flex items-center gap-2.5 rounded-xl border-2 border-[#e6007e] bg-white px-5 py-3 text-sm font-bold text-[#131138] shadow-[0_4px_14px_rgba(230,0,126,0.15)] transition"
                          : "inline-flex items-center gap-2.5 rounded-xl border border-[#e3e2ef] bg-white px-5 py-3 text-sm font-semibold text-[#131138] transition hover:border-[#cfcce4]"
                      }
                    >
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                          isSelected ? "border-[#e6007e]" : "border-[#b0acc0]"
                        }`}
                      >
                        {isSelected && (
                          <span className="h-2 w-2 rounded-full bg-[#e6007e]" />
                        )}
                      </span>
                      {option}
                    </button>
                  );
                })}
              </div>

              {/* Navigation Buttons */}
              <div className="mt-12 flex items-center gap-4 border-t border-[#f0f1f6] pt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="rounded-xl border border-[#131138]/20 bg-white px-6 py-3 text-sm font-semibold text-[#131138] transition hover:border-[#131138] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentStep === QUESTIONS.length}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#e6007e] to-[#c41478] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-4px_rgba(230,0,126,0.4)] transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Right: Summary Card */}
            <div className="rounded-[28px] bg-gradient-to-b from-[#1b1740] to-[#120f2e] p-8 text-white shadow-[0_20px_50px_rgba(27,23,64,0.25)] sm:p-9">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#a4a0c8]">
                Suggested next step
              </p>

              <h3 className="mt-2 text-xl font-black tracking-tight text-white">
                Your answers so far
              </h3>

              <ul className="mt-6 space-y-4">
                {QUESTIONS.map((q) => (
                  <li key={q.id} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#e6007e] shadow-[0_0_8px_#e6007e]" />
                    <span className="text-[#a4a0c8]">
                      {q.summaryKey}:{" "}
                      <strong className="font-bold text-white">
                        {answers[q.id] || "Not answered"}
                      </strong>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs leading-5 text-[#b8b4d8]">
                <div className="flex items-start gap-2.5">
                  <Info
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#e6007e]"
                    aria-hidden="true"
                  />
                  <p>
                    Small-business protections apply: a minimum term of no more
                    than 24 months and a contract summary before you agree.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#e6007e] to-[#c41478] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_-4px_rgba(230,0,126,0.5)] transition hover:opacity-95"
                >
                  Discuss your voice needs
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <p className="mt-4 text-center text-xs text-[#8c88b4]">
                Your answers stay on this page &mdash; nothing is sent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
