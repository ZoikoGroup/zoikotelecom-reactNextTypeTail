"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const MINUTES = ["Under 100", "100–1,000", "1,000+", "Not sure"] as const;
const COUNTRY_COUNTS = ["1–2", "3–10", "More than 10"] as const;

type Minutes = (typeof MINUTES)[number];
type CountryCount = (typeof COUNTRY_COUNTS)[number];

const SUGGESTIONS = {
  low: {
    title: "Explore business landlines",
    text: "Business landlines may cover occasional international calls — check the plan details.",
    secondary: { label: "Business landlines", href: "/landline-business" },
  },
  regular: {
    title: "Talk to our business team",
    text: "Regular international calling is worth discussing — we’ll look at which destinations and plans could fit.",
    secondary: { label: "Business voice", href: "/landlines-business-voice" },
  },
  high: {
    title: "Discuss business voice",
    text: "Calling many countries or at high volume is best discussed with our team, alongside business voice options.",
    secondary: { label: "Business voice", href: "/landlines-business-voice" },
  },
  unsure: {
    title: "Get business advice",
    text: "Not sure how much you call abroad? Our team can help you work out your usage first.",
    secondary: { label: "Business landlines", href: "/landline-business" },
  },
} as const;

function suggestionFor(minutes: Minutes, countries: CountryCount) {
  if (minutes === "Not sure") return SUGGESTIONS.unsure;
  if (minutes === "1,000+" || countries === "More than 10") return SUGGESTIONS.high;
  if (minutes === "100–1,000" || countries === "3–10") return SUGGESTIONS.regular;
  return SUGGESTIONS.low;
}

function ChipRow<T extends string>({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: readonly T[];
  value: T;
  onChange: (next: T) => void;
}) {
  return (
    <fieldset className="mt-5 first:mt-0">
      <legend className="text-sm font-bold text-[#11183C]">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2.5">
        {options.map((option) => {
          const selected = option === value;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option)}
              className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
                selected
                  ? "border-[#0B1445] bg-[#0B1445] text-white"
                  : "border-[#E0E3EE] bg-white text-[#11183C] hover:border-[#C9CEE0]"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function CallingAbroadRegularly() {
  const [minutes, setMinutes] = useState<Minutes>("Under 100");
  const [countries, setCountries] = useState<CountryCount>("1–2");
  const suggestion = suggestionFor(minutes, countries);

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-[572/636] w-full overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(27,22,96,0.25)]">
          <Image
            src="/Images/landlines-international-calls/business-caller.webp"
            alt="Businessman on a mobile call by an office window"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">For businesses</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Calling abroad regularly?
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5375] sm:text-base">
            Tell us roughly how your organisation calls abroad — we’ll suggest a
            next step. No prices are calculated.
          </p>

          <div className="mt-6 rounded-3xl border border-[#E6E9F2] bg-white p-6">
            <ChipRow legend="International minutes per month" options={MINUTES} value={minutes} onChange={setMinutes} />
            <ChipRow legend="How many countries?" options={COUNTRY_COUNTS} value={countries} onChange={setCountries} />
          </div>

          <div aria-live="polite" className="mt-4 rounded-3xl bg-gradient-to-br from-[#FDEFF6] to-[#F1ECFE] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#E11D74]">Suggested next step</p>
            <h3 className="mt-2 text-xl font-extrabold text-[#11183C]">{suggestion.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#4B5375]">{suggestion.text}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#ask-about-international-calling"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(225,29,116,0.35)]"
              >
                Get business advice
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              </Link>
              <Link
                href={suggestion.secondary.href}
                className="inline-flex items-center justify-center rounded-xl border border-[#11183C] bg-white px-6 py-3.5 text-sm font-bold text-[#11183C] hover:bg-[#F5F6FB]"
              >
                {suggestion.secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
