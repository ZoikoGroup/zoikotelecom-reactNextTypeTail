"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Globe, TriangleAlert } from "lucide-react";
import SectionHeader from "./SectionHeader";

// Country dialling codes only — no rates are shown until they can be confirmed.
const COUNTRIES = [
  { name: "Australia", code: "61" },
  { name: "Bangladesh", code: "880" },
  { name: "Brazil", code: "55" },
  { name: "China", code: "86" },
  { name: "France", code: "33" },
  { name: "Germany", code: "49" },
  { name: "Ghana", code: "233" },
  { name: "India", code: "91" },
  { name: "Ireland", code: "353" },
  { name: "Italy", code: "39" },
  { name: "Kenya", code: "254" },
  { name: "Netherlands", code: "31" },
  { name: "Nigeria", code: "234" },
  { name: "Pakistan", code: "92" },
  { name: "Philippines", code: "63" },
  { name: "Poland", code: "48" },
  { name: "Portugal", code: "351" },
  { name: "Romania", code: "40" },
  { name: "South Africa", code: "27" },
  { name: "Spain", code: "34" },
  { name: "Sri Lanka", code: "94" },
  { name: "Turkey", code: "90" },
  { name: "United Arab Emirates", code: "971" },
  { name: "USA & Canada", code: "1" },
] as const;

const NUMBER_TYPES = ["Landline", "Mobile", "Special or premium", "Satellite"] as const;
const CALLING_FROM = ["Home landline", "Business line", "Mobile"] as const;

const SELECT_CLASS =
  "mt-2 w-full rounded-xl border border-[#D3D8E8] bg-white px-4 py-3 text-sm text-[#11183C] outline-none focus:border-[#E11D74] focus:ring-2 focus:ring-[#E11D74]/15";

export default function CheckACountry() {
  const [country, setCountry] = useState<string>("France");
  const [numberType, setNumberType] = useState<string>(NUMBER_TYPES[0]);
  const [callingFrom, setCallingFrom] = useState<string>(CALLING_FROM[0]);

  const selected = COUNTRIES.find((c) => c.name === country) ?? COUNTRIES[4];

  const rows = [
    { label: "Number type", value: numberType, pending: false },
    { label: "Calling from", value: callingFrom, pending: false },
    { label: "Connection charge", value: "Ask for current rate", pending: true },
    { label: "Per-minute rate", value: "Ask for current rate", pending: true },
    { label: "VAT & billing increment", value: "In your rate details", pending: true },
    { label: "Included minutes", value: "Depends on your plan", pending: true },
  ];

  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="Country rates"
          title="Check a country"
          subtitle="Choose a country to see its dialling code. Online rate checks aren’t available yet, so we won’t show a price we can’t confirm."
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Selectors */}
          <div className="rounded-3xl border border-[#E6E9F2] bg-white p-6 sm:p-8">
            <label htmlFor="ic-country" className="text-sm font-bold text-[#11183C]">
              Country you want to call
            </label>
            <select id="ic-country" value={country} onChange={(e) => setCountry(e.target.value)} className={SELECT_CLASS}>
              {COUNTRIES.map((c) => (
                <option key={c.name} value={c.name}>{c.name}</option>
              ))}
            </select>

            <label htmlFor="ic-number-type" className="mt-5 block text-sm font-bold text-[#11183C]">
              Type of number
            </label>
            <select id="ic-number-type" value={numberType} onChange={(e) => setNumberType(e.target.value)} className={SELECT_CLASS}>
              {NUMBER_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            <label htmlFor="ic-calling-from" className="mt-5 block text-sm font-bold text-[#11183C]">
              Calling from
            </label>
            <select id="ic-calling-from" value={callingFrom} onChange={(e) => setCallingFrom(e.target.value)} className={SELECT_CLASS}>
              {CALLING_FROM.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            <p className="mt-5 text-xs text-[#4B5375]">We don’t ask for the number you want to call.</p>
          </div>

          {/* Result */}
          <div
            aria-live="polite"
            className="rounded-3xl bg-gradient-to-br from-[#14125A] via-[#1C1A6E] to-[#6A35D8] p-6 text-white sm:p-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#F472B6]">Your selection</p>
            <p className="mt-3 text-2xl font-extrabold">{selected.name}</p>

            <div className="mt-5 flex items-center gap-4 rounded-2xl bg-white/[0.08] px-5 py-4">
              <span className="bg-gradient-to-r from-[#E11D74] to-[#C026D3] bg-clip-text text-3xl font-extrabold text-transparent">
                +{selected.code}
              </span>
              <span className="text-sm text-white/80">
                Country dialling code
                <br />
                (dial 00 or + first)
              </span>
            </div>

            <dl className="mt-5 space-y-2.5 border-t border-white/15 pt-5 text-sm">
              {rows.map((row) => (
                <div key={row.label} className="flex justify-between gap-4">
                  <dt className="text-white/70">{row.label}</dt>
                  <dd className={`text-right font-bold ${row.pending ? "text-[#FBBF24]" : ""}`}>{row.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 rounded-2xl bg-white/[0.08] p-4">
              <p className="text-sm leading-relaxed text-white/85">
                <TriangleAlert className="mr-1.5 inline h-4 w-4 -translate-y-px text-[#FBBF24]" strokeWidth={2} aria-hidden="true" />
                <strong className="font-bold text-white">Rate not shown online yet.</strong> Rates depend on
                the service, number type and plan. Our team will give you current, confirmed rates.
              </p>
              <Link
                href="#ask-about-international-calling"
                className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#C2185B] px-6 py-3.5 text-sm font-bold text-white"
              >
                Ask for current rate
                <ChevronRight className="h-4 w-4 text-[#FBBF24]" strokeWidth={2.5} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 flex max-w-6xl items-start gap-3 rounded-2xl bg-[#EEF1FB] p-5">
          <Globe className="mt-0.5 h-5 w-5 shrink-0 text-[#1E2A78]" strokeWidth={2} aria-hidden="true" />
          <p className="text-sm text-[#1E2A78]">
            <strong className="font-bold">Territories and special prefixes:</strong> some territories and
            number ranges are charged differently from their country. Ask us about any destination.
          </p>
        </div>
      </div>
    </section>
  );
}
