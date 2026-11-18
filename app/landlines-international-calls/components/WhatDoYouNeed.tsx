"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Globe, Phone, Send } from "lucide-react";
import SectionHeader from "./SectionHeader";

const TABS = [
  {
    id: "calling-from-uk",
    label: "Calling from the UK",
    icon: Phone,
    title: "Calling another country from the UK",
    text: "Making a call from a UK landline, business line or mobile to a number abroad. Charges depend on your plan and the country you call.",
    points: [
      "Check your plan for international rates",
      "Different countries can cost different amounts",
      "Calls to mobiles abroad may cost more",
    ],
    image: "/Images/landlines-international-calls/tab-calling-from-uk.webp",
    alt: "Person typing on a laptop",
  },
  {
    id: "mobile-abroad",
    label: "Using a mobile abroad",
    icon: Send,
    title: "Using your mobile while abroad",
    text: "Making or receiving calls on your UK mobile while you’re outside the UK. This is roaming, and it’s charged under your mobile plan’s roaming terms.",
    points: [
      "Roaming terms come from your mobile plan",
      "Charges can differ by country or region",
      "See our roaming guide before you travel",
    ],
    image: "/Images/landlines-international-calls/business-caller.webp",
    alt: "Man taking a call on his mobile by a window",
  },
  {
    id: "international-number",
    label: "An international number",
    icon: Globe,
    title: "A number in another country",
    text: "A phone number in another country that callers there can dial, with calls routed to you. It’s a separate service with its own charges.",
    points: [
      "Useful if your callers are abroad",
      "Charges are set by the number service",
      "Ask our team about available countries",
    ],
    image: "/Images/landlines-international-calls/hero-reaching-hands.webp",
    alt: "Two hands reaching towards each other",
  },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function WhatDoYouNeed() {
  const [activeId, setActiveId] = useState<TabId>("calling-from-uk");
  const active = TABS.find((t) => t.id === activeId) ?? TABS[0];

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="What do you need?"
          title="International calls, roaming or an overseas number?"
          subtitle="These are three different things — choose the one you mean."
        />

        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Type of international service"
            className="inline-flex max-w-full flex-wrap justify-center gap-1 rounded-2xl bg-white p-1.5 shadow-[0_10px_30px_rgba(17,24,60,0.08)]"
          >
            {TABS.map((tab) => {
              const selected = tab.id === activeId;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveId(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                    selected
                      ? "bg-gradient-to-r from-[#E11D74] to-[#8E37E8] text-white"
                      : "text-[#434A6E] hover:bg-[#F5F6FB]"
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="mx-auto mt-6 grid max-w-6xl grid-cols-1 items-center gap-8 rounded-3xl border border-[#E6E9F2] bg-white p-6 shadow-[0_12px_36px_rgba(17,24,60,0.06)] sm:p-9 lg:grid-cols-2"
        >
          <div>
            <h3 className="text-2xl font-extrabold text-[#11183C]">{active.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4B5375] sm:text-base">{active.text}</p>
            <ul className="mt-5 space-y-3">
              {active.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-[#4B5375] sm:text-base">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#E11D74]" strokeWidth={2.5} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[501/240] w-full overflow-hidden rounded-2xl">
            <Image
              src={active.image}
              alt={active.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
