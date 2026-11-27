"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const sectionContent = {
  id: "safety-checkpoint",
  eyebrow: "SAFETY CHECKPOINT",
  heading: "Three questions before you switch",
  description:
    "Answer these with us before any change or order. “Not sure” is a perfectly good answer.",
  cta: {
    label: "Talk to us about your answers",
    href: "/contact",
  },
  footerNote:
    "Using a care alarm? Tell your alarm supplier too, before anything changes.",
  image: "/Images/home/2.png",
  imageAlt:
    "Bright living room with herringbone wood flooring, an accent chair with a throw, indoor plants and a patterned curtain",
} as const;

type AnswerOption = "Yes" | "No" | "Not sure";

const answerOptions: readonly AnswerOption[] = [
  "Yes",
  "No",
  "Not sure",
] as const;

interface CheckpointQuestion {
  id: "emergencyLine" | "connectedEquipment" | "backupEmergency";
  prompt: string;
}

const checkpointQuestions: readonly CheckpointQuestion[] = [
  {
    id: "emergencyLine",
    prompt: "Do you depend on this line to contact emergency services?",
  },
  {
    id: "connectedEquipment",
    prompt:
      "Is a care alarm, security alarm or other equipment connected to your line?",
  },
  {
    id: "backupEmergency",
    prompt:
      "Do you have another reliable way to call emergency services at home?",
  },
] as const;

export default function ThreeQuestionsBeforeYouSwitchSection() {
  const [answers, setAnswers] = useState<
    Partial<Record<CheckpointQuestion["id"], AnswerOption>>
  >({});

  const handleSelect = (
    questionId: CheckpointQuestion["id"],
    option: AnswerOption,
  ) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: prev[questionId] === option ? undefined : option,
    }));
  };

  return (
    <section
      id={sectionContent.id}
      className="w-full bg-[#F5F6FB] px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px] overflow-hidden rounded-3xl border border-[#eaecf4] bg-white shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left interactive checkpoint column */}
          <div className="flex flex-col justify-between p-6 sm:p-9 lg:col-span-6 lg:p-10">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#9d175d]">
                {sectionContent.eyebrow}
              </p>

              <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-[-0.025em] text-[#0c1438] sm:text-[28px]">
                {sectionContent.heading}
              </h2>

              <p className="mt-2 max-w-[440px] text-[12px] leading-[1.55] text-[#4b5563]">
                {sectionContent.description}
              </p>

              {/* Three safety question cards */}
              <div className="mt-5 space-y-3">
                {checkpointQuestions.map((question) => {
                  const selected = answers[question.id];

                  return (
                    <div
                      key={question.id}
                      className="rounded-xl border border-[#f5e7d6] bg-[#fdf7ef] px-4 py-3.5"
                    >
                      <p className="text-[12px] font-extrabold leading-snug text-[#0c1438]">
                        {question.prompt}
                      </p>

                      <div
                        role="group"
                        aria-label={question.prompt}
                        className="mt-2.5 flex flex-wrap items-center gap-2"
                      >
                        {answerOptions.map((option) => {
                          const isSelected = selected === option;

                          return (
                            <button
                              key={option}
                              type="button"
                              aria-pressed={isSelected}
                              onClick={() => handleSelect(question.id, option)}
                              className={`inline-flex h-7 items-center justify-center rounded-md border px-3 text-[10.5px] font-bold transition ${
                                isSelected
                                  ? "border-[#1a0b36] bg-[#1a0b36] text-white"
                                  : "border-[#e5e7eb] bg-white text-[#374151] hover:border-[#cbd5e1] hover:bg-[#f9fafb]"
                              }`}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Primary consultation CTA */}
              <div className="mt-5">
                <Link
                  href={sectionContent.cta.href}
                  className="inline-flex h-10 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-gradient-to-r from-[#e2187d] to-[#c91485] px-4 text-[12px] font-semibold text-white shadow-[0_8px_22px_rgba(226,24,125,0.38)] transition hover:brightness-110"
                >
                  <span>{sectionContent.cta.label}</span>
                  <ChevronRight
                    className="h-3.5 w-3.5 shrink-0 stroke-[2.5]"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            {/* Care alarm advisory footnote */}
            <p className="mt-4 text-[10px] leading-[1.45] text-[#64748b]">
              {sectionContent.footerNote}
            </p>
          </div>

          {/* Right full-height interior photograph */}
          <div className="relative min-h-[300px] w-full bg-[#e5e7eb] sm:min-h-[420px] lg:col-span-6 lg:min-h-full">
            <Image
              src={sectionContent.image}
              alt={sectionContent.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
