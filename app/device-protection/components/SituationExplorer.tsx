"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  Briefcase,
  Check,
  ChevronRight,
  FileText,
  Info,
  MapPin,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const IMG = "/Images/device-protection";

type SituationId = "fault" | "damage" | "lost" | "existing" | "business";

const SITUATIONS: {
  id: SituationId;
  title: string;
  image: string;
  alt: string;
  icon: LucideIcon;
  summary: string;
  steps: string[];
}[] = [
  {
    id: "fault",
    title: "Fault or defect",
    image: "situation-fault-or-defect.png",
    alt: "Fault or defect on a smartphone screen",
    icon: AlertTriangle,
    summary:
      "If the device has stopped working properly through no fault of your own, check your legal rights and any manufacturer warranty first.",
    steps: [
      "Under the Consumer Rights Act 2015, faulty goods carry statutory remedies against the seller.",
      "You never need paid insurance to rely on your consumer rights for a manufacturing fault.",
      "Check the manufacturer’s warranty terms too — some makers offer direct repair or replacement.",
    ],
  },
  {
    id: "damage",
    title: "Accidental damage",
    image: "situation-accidental-damage.png",
    alt: "Device with accidental damage risks",
    icon: Smartphone,
    summary:
      "Cracked screens, drops and spills aren’t usually covered by statutory fault rights or a standard maker’s warranty.",
    steps: [
      "Check whether you already hold phone insurance (standalone, packaged bank account or home contents).",
      "Compare any policy excess and claim limits against the price of a one-off repair.",
      "If the device won’t power on or is beyond economical repair, check trade-in or WEEE recycling options.",
    ],
  },
  {
    id: "lost",
    title: "Lost or stolen",
    image: "situation-lost-or-stolen.png",
    alt: "Handing over or reporting a lost or stolen item",
    icon: MapPin,
    summary:
      "Act quickly to protect your number and data — and note that insurers often treat loss and theft differently.",
    steps: [
      "Contact your mobile network immediately to suspend your SIM and block the handset’s IMEI.",
      "If stolen, report it to the police and keep the crime reference number — policies often require this.",
      "Review any insurance policy wording carefully, as accidental loss may be excluded or carry stricter conditions.",
    ],
  },
  {
    id: "existing",
    title: "Existing cover",
    image: "situation-existing-cover.png",
    alt: "Reading existing cover policy documents",
    icon: FileText,
    summary:
      "If you already pay for device insurance or a repair plan, use the contact route shown in your policy documents.",
    steps: [
      "Check your policy schedule and IPID for the authorised insurer or claims administrator’s details.",
      "Zoiko Telecom does not administer third-party insurance claims on this page.",
      "If you’re unsure whether your cover came with a bank account, card or network bundle, ask our team.",
    ],
  },
  {
    id: "business",
    title: "Business devices",
    image: "situation-business-devices.png",
    alt: "Business team working with company devices",
    icon: Briefcase,
    summary:
      "Consumer statutory rights apply to individuals — business handsets follow your commercial agreement and cover terms.",
    steps: [
      "Check your business contract, supplier warranty and any fleet or commercial equipment insurance.",
      "Verify whether replacements are like-for-like, refurbished or subject to an excess.",
      "Contact our team if you’re reviewing options across multiple business handsets.",
    ],
  },
];

export default function SituationExplorer() {
  const [selected, setSelected] = useState<SituationId | null>(null);
  const active = SITUATIONS.find((item) => item.id === selected);

  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="What happened?"
          title="Choose the situation closest to yours"
          subtitle="This changes the guidance only — it doesn’t mean you’re entitled to any cover."
        />

        {/* 5 interactive photo cards */}
        <div className="mt-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {SITUATIONS.map(({ id, title, image, alt, icon: Icon }) => {
            const isActive = selected === id;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={isActive}
                aria-controls="situation-guidance"
                onClick={() => setSelected((prev) => (prev === id ? null : id))}
                className={`group relative h-[210px] overflow-hidden rounded-[24px] text-left transition-all hover:-translate-y-0.5 ${
                  isActive ? "ring-4 ring-[#7B3FE4]/35" : "ring-1 ring-[#E3E6F2]"
                }`}
              >
                <Image
                  src={`${IMG}/${image}`}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 228px, (min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0A1446]/85 via-[#0A1446]/25 to-transparent"
                />
                <div className="absolute inset-x-4 bottom-3 z-10">
                  <span className="flex h-[38px] w-[38px] items-center justify-center rounded-xl bg-white/25 text-white backdrop-blur-sm">
                    <Icon className="h-[19px] w-[19px]" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="mt-1.5 block text-[16.5px] font-bold text-white">{title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic guidance box */}
        <div
          id="situation-guidance"
          aria-live="polite"
          className="mt-5 rounded-[26px] border border-[#E3E6F2] bg-white p-6"
        >
          {active ? (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#7B3FE4]">Guidance for your situation</p>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="text-xs font-semibold text-[#6B7194] underline underline-offset-2 hover:text-[#0A1446]"
                >
                  Clear selection
                </button>
              </div>
              <h3 className="mt-1 text-xl font-extrabold text-[#0A1446]">{active.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3A4268] sm:text-base">{active.summary}</p>
              <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
                {active.steps.map((step) => (
                  <li
                    key={step}
                    className="flex items-start gap-2.5 rounded-2xl border border-[#EEF0F6] bg-[#F8F9FD] p-3.5 text-sm leading-relaxed text-[#1E1B2E]"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0E9E7B]" strokeWidth={2.5} aria-hidden="true" />
                    {step}
                  </li>
                ))}
              </ul>
              <Link
                href="#protection-enquiry"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#E0127C] hover:underline"
              >
                Ask our team about this situation
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              </Link>
            </div>
          ) : (
            <p className="flex items-center gap-3 rounded-[20px] border-2 border-dashed border-[#D9C8F3] bg-[#FBF8FF] px-6 py-5 text-sm font-semibold text-[#6B7194] sm:text-base">
              <Info className="h-6 w-6 shrink-0 text-[#3D7BFF]" strokeWidth={2} aria-hidden="true" />
              Choose a situation above to see what to do.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
