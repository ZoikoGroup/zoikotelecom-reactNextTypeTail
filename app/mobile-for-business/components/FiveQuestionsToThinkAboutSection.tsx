"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const sectionContent = {
  step: "02",
  eyebrow: "PLAN YOUR NEEDS",
  headingPrefix: "Five questions to ",
  headingAccent: "think about",
  lineOne: "Have rough answers ready and your conversation will be quicker.",
  lineTwo: "Nothing here is binding.",
} as const;

interface QuestionItem {
  number: string;
  title: string;
  subtitle: string;
  options: readonly string[];
}

const questionsList: readonly QuestionItem[] = [
  {
    number: "1",
    title: "Who needs service?",
    subtitle: "New business, existing customer or employee",
    options: ["New business", "Existing customer", "Employee"],
  },
  {
    number: "2",
    title: "How many lines?",
    subtitle: "A rough count is fine — unusual sizes are welcome",
    options: ["1", "2–10", "11–50", "50+"],
  },
  {
    number: "3",
    title: "SIM choice",
    subtitle: "Physical, eSIM or not sure yet",
    options: ["Physical SIM", "eSIM", "Unsure"],
  },
  {
    number: "4",
    title: "What will they use it for?",
    subtitle: "Calls, data, devices, travel",
    options: ["Voice", "Data", "Devices", "Travel"],
  },
  {
    number: "5",
    title: "When?",
    subtitle: "Non-binding — just helps us plan",
    options: ["Soon", "Planning", "Flexible"],
  },
] as const;

const plannerSidePanel = {
  badge: "ONLINE PLANNER · COMING SOON",
  image: "/Images/mob/6.png",
  imageAlt:
    "Team members collaborating around sticky notes and laptops in a bright workspace",
  title: "Prefer to just talk?",
  description: "Skip the questions and contact the business team directly.",
  ctaLabel: "Discuss business mobile",
  href: "/contact",
} as const;

export default function FiveQuestionsToThinkAboutSection() {
  const [selectedByQuestion, setSelectedByQuestion] = useState<
    Record<string, string>
  >({});

  const handleSelectOption = (questionNumber: string, option: string) => {
    setSelectedByQuestion((prev) => ({
      ...prev,
      [questionNumber]: prev[questionNumber] === option ? "" : option,
    }));
  };

  return (
    <section
      id="plan-your-needs"
      className="w-full bg-[#f5f6fb] px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Left-aligned section header */}
        <div>
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="italic text-[#e093b9]">{sectionContent.step}</span>
            <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold tracking-[-0.025em] text-[#0c1438] sm:text-[36px]">
            {sectionContent.headingPrefix}
            <span className="text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>

          <p className="mt-2 text-[13.5px] leading-[1.55] text-[#4b5563] sm:text-sm">
            {sectionContent.lineOne}
            <br />
            {sectionContent.lineTwo}
          </p>
        </div>

        {/* Two-column layout: Left 5 question cards + Right photo & direct talk card */}
        <div className="mt-7 grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          {/* Left 7 columns: 5 numbered question cards */}
          <div className="space-y-3.5 lg:col-span-7">
            {questionsList.map((q) => {
              const activeOption = selectedByQuestion[q.number] ?? "";

              return (
                <article
                  key={q.number}
                  className="flex items-start gap-4 rounded-2xl border border-[#eaecf4] bg-white px-4 py-4 shadow-[0_4px_16px_rgba(15,23,42,0.03)] sm:px-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#d91c81] text-[13px] font-extrabold text-white shadow-xs">
                    {q.number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[14px] font-bold leading-snug text-[#0c1438]">
                      {q.title}
                    </h3>

                    <p className="mt-0.5 text-[11.5px] leading-[1.45] text-[#64748b]">
                      {q.subtitle}
                    </p>

                    <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                      {q.options.map((option) => {
                        const isSelected = activeOption === option;

                        return (
                          <button
                            key={option}
                            type="button"
                            aria-pressed={isSelected}
                            onClick={() => handleSelectOption(q.number, option)}
                            className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-[10.5px] font-semibold transition ${
                              isSelected
                                ? "bg-[#0c1438] text-white shadow-xs"
                                : "bg-[#f1f3f9] text-[#475569] hover:bg-[#e5e9f5] hover:text-[#0c1438]"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Right 5 columns: Top badge + photo + bottom "Prefer to just talk?" card */}
          <div className="space-y-4 lg:col-span-5">
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center rounded-md bg-[#fff3d6] px-3 py-1 text-[9.5px] font-extrabold uppercase tracking-[0.14em] text-[#92400e]">
                {plannerSidePanel.badge}
              </span>
            </div>

            <div className="relative h-[220px] w-full overflow-hidden rounded-3xl border border-[#eaecf4] bg-[#eef0f6] shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:h-[245px]">
              <Image
                src={plannerSidePanel.image}
                alt={plannerSidePanel.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top"
              />
            </div>

            <div className="rounded-2xl border border-[#eaecf4] bg-white p-5 shadow-[0_6px_20px_rgba(15,23,42,0.035)] sm:p-6">
              <h3 className="text-[15.5px] font-bold leading-snug text-[#0c1438]">
                {plannerSidePanel.title}
              </h3>

              <p className="mt-1.5 text-[12px] leading-[1.52] text-[#4b5563]">
                {plannerSidePanel.description}
              </p>

              <div className="mt-3.5">
                <Link
                  href={plannerSidePanel.href}
                  className="inline-flex items-center gap-1 text-[12px] font-bold text-[#c81878] transition hover:underline"
                >
                  <span>{plannerSidePanel.ctaLabel}</span>
                  <ChevronRight
                    className="h-3.5 w-3.5 stroke-[2.5]"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
