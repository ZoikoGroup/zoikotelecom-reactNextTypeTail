"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const FIT_OPTIONS = [
  {
    label: "One line",
    advice: "A digital business line could work. Let’s talk through number options.",
  },
  {
    label: "A small team",
    advice: "Hosted team voice or a few digital lines could work. Let’s talk through features.",
  },
  {
    label: "Multiple sites",
    advice: "Hosted team voice could suit several sites. We’ll review each site’s address, numbers and emergency access with you.",
  },
  {
    label: "Support or sales operations",
    advice: "Hosted team voice with call handling features, such as queues and menus, is worth discussing.",
  },
] as const;

const SIZE_OPTIONS = ["1–10", "11–49", "50+", "Unsure"] as const;
const SETUP_OPTIONS = ["Traditional line", "SIP trunk", "Hosted system", "None", "Unsure"] as const;
const LOCATION_OPTIONS = ["One location", "A few locations", "Many locations", "Mostly remote"] as const;

const ESTIMATE_FIELDS = [
  { id: "users", label: "Users", placeholder: "e.g. 8" },
  { id: "deskPhones", label: "Desk phones", placeholder: "e.g. 4" },
  { id: "appUsers", label: "Softphone / app users", placeholder: "e.g. 6" },
] as const;

type EstimateId = (typeof ESTIMATE_FIELDS)[number]["id"];

function ChipGroup<T extends string>({
  legend,
  hint,
  options,
  value,
  onChange,
}: {
  legend: string;
  hint?: string;
  options: readonly T[];
  value: T;
  onChange: (next: T) => void;
}) {
  return (
    <fieldset className="mt-6 first:mt-0">
      <legend className="text-base font-extrabold text-[#11183C]">
        {legend}
        {hint && <span className="ml-2 text-xs font-normal text-[#4B5375]">{hint}</span>}
      </legend>
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

export default function WhatDoesYourTeamNeed() {
  const [fit, setFit] = useState<(typeof FIT_OPTIONS)[number]["label"]>("A small team");
  const [size, setSize] = useState<(typeof SIZE_OPTIONS)[number]>("1–10");
  const [setup, setSetup] = useState<(typeof SETUP_OPTIONS)[number]>("Traditional line");
  const [location, setLocation] = useState<(typeof LOCATION_OPTIONS)[number]>("One location");
  const [estimates, setEstimates] = useState<Record<EstimateId, string>>({
    users: "",
    deskPhones: "",
    appUsers: "",
  });

  const advice = FIT_OPTIONS.find((o) => o.label === fit)?.advice ?? "";
  const counts = ESTIMATE_FIELDS.map((f) => estimates[f.id] || "–").join(" / ");

  const summaryRows = [
    { label: "Size", value: size },
    { label: "Current set-up", value: setup },
    { label: "Locations", value: location },
    { label: "Users / phones / apps", value: counts },
  ];

  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="Tell us about your business"
          title="What does your team need?"
          subtitle="Optional. Your answers build a summary to share with our team — nothing is sent from this page."
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[1.05fr_1fr]">
          {/* Questions */}
          <div className="rounded-3xl border border-[#E6E9F2] bg-white p-6 sm:p-8">
            <ChipGroup
              legend="What fits best?"
              options={FIT_OPTIONS.map((o) => o.label)}
              value={fit}
              onChange={setFit}
            />
            <ChipGroup legend="Company size" hint="(optional)" options={SIZE_OPTIONS} value={size} onChange={setSize} />
            <ChipGroup legend="Current set-up" options={SETUP_OPTIONS} value={setup} onChange={setSetup} />
            <ChipGroup legend="Where is your team?" options={LOCATION_OPTIONS} value={location} onChange={setLocation} />

            <fieldset className="mt-6">
              <legend className="text-base font-extrabold text-[#11183C]">
                Rough numbers
                <span className="ml-2 text-xs font-normal text-[#4B5375]">(optional estimate)</span>
              </legend>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {ESTIMATE_FIELDS.map((field) => (
                  <div key={field.id}>
                    <label htmlFor={`team-${field.id}`} className="text-sm font-bold text-[#11183C]">
                      {field.label}
                    </label>
                    <input
                      id={`team-${field.id}`}
                      type="number"
                      inputMode="numeric"
                      min={0}
                      placeholder={field.placeholder}
                      value={estimates[field.id]}
                      onChange={(e) =>
                        setEstimates((prev) => ({ ...prev, [field.id]: e.target.value }))
                      }
                      className="mt-2 w-full rounded-xl border border-[#D3D8E8] bg-white px-4 py-3 text-sm text-[#11183C] outline-none placeholder:text-[#8A90A6] focus:border-[#E11D74] focus:ring-2 focus:ring-[#E11D74]/15"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-[#4B5375]">
                Estimates help the conversation — they aren’t a quote or approval.
              </p>
            </fieldset>
          </div>

          {/* Summary */}
          <div
            aria-live="polite"
            className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-[#14125A] via-[#1C1A6E] to-[#6A35D8] p-7 text-white sm:p-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#F472B6]">
              Your summary
            </p>
            <p className="mt-3 text-2xl font-extrabold sm:text-3xl">{fit}</p>

            <dl className="mt-6 space-y-3 border-y border-white/15 py-5 text-sm">
              {summaryRows.map((row) => (
                <div key={row.label} className="flex justify-between gap-4">
                  <dt className="text-white/70">{row.label}</dt>
                  <dd className="text-right font-bold">{row.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-5 text-sm leading-relaxed text-white/90 sm:text-base">{advice}</p>

            <Link
              href="/contact"
              className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(225,29,116,0.4)] transition-transform hover:scale-[1.01] sm:text-base"
            >
              Discuss business voice
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <p className="mt-5 text-xs text-white/60">
              No pricing is shown. Mention your summary when you contact us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
