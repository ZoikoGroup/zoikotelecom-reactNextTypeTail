import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";
import SectionHeader from "./SectionHeader";

const IMG = "/Images/device-protection";

const CLAIM_STEPS = [
  { title: "Report", text: "Tell the provider promptly" },
  { title: "Evidence", text: "Through a secure route only" },
  { title: "Assessment", text: "Against the policy terms" },
  { title: "Outcome", text: "Repair, replacement or decline — with reasons" },
  { title: "Complaints", text: "If you disagree" },
] as const;

const FEATURE_CARDS = [
  {
    tag: "Repair",
    tagClass: "bg-[#EEF2FF] text-[#3D3FD0]",
    title: "Repair options",
    text: "Ad-hoc repairs and service agreements differ. No repair partner or turnaround is implied.",
    dependsOn: "the provider and your device.",
    cta: "Ask about repairs",
    href: "#protection-enquiry",
    image: "card-repair-options.png",
    alt: "Phone being repaired with small screws and hardware parts",
  },
  {
    tag: "Documents",
    tagClass: "bg-[#FFF4E5] text-[#9A5B00]",
    title: "Policy documents",
    text: "Real insurance comes with an IPID and full policy wording from the insurer — not written by us.",
    dependsOn: "the authorised insurer.",
    cta: "Ask about documents",
    href: "#protection-enquiry",
    image: "card-policy-documents.png",
    alt: "Reviewing and signing policy documents",
  },
  {
    tag: "Help",
    tagClass: "bg-[#E8F7EE] text-[#15803D]",
    title: "Already have cover?",
    text: "Contact your policy provider first. If you’re not sure who that is, ask us.",
    dependsOn: "your existing policy.",
    cta: "Contact support",
    href: "/contact",
    image: "card-support-adviser.png",
    alt: "Support adviser shaking hands with a customer",
  },
] as const;

export default function ClaimsAndOptionsSection() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px] space-y-6">
        {/* Claims box */}
        <div className="relative rounded-[28px] bg-[#F6F7FB] p-6 sm:p-7">
          <span className="mb-4 inline-block rounded-lg bg-[#EEF0F6] px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#4A5275] sm:absolute sm:right-6 sm:top-6 sm:mb-0">
            Future · not available
          </span>

          <SectionHeader
            align="left"
            eyebrow="Claims"
            title="How a claim usually works"
            subtitle="Shown to explain the steps. There’s no Zoiko claim service — if you hold a policy, use your provider’s instructions."
            className="max-w-[760px]"
          />

          <ol className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
            {CLAIM_STEPS.map(({ title, text }) => (
              <li
                key={title}
                className="rounded-2xl border border-dashed border-[#C9D2EA] bg-white px-3.5 pb-6 pt-8"
              >
                <p className="text-[15px] font-bold text-[#4A5275]">{title}</p>
                <p className="mt-1 text-[13.5px] leading-[1.6] text-[#6B7194]">{text}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Product availability notice */}
        <div className="flex flex-col items-start gap-4 rounded-[24px] border-2 border-dashed border-[#C8DAFF] bg-[#F7FAFF] px-6 py-5 lg:flex-row lg:items-center">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-white text-[#2457C5] shadow-[0_8px_18px_rgba(36,87,197,0.12)]">
            <ShieldCheck className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
          </span>

          <div className="min-w-0 flex-1">
            <p className="text-base font-bold text-[#0A1446] sm:text-lg">
              We cannot confirm an available device-protection product here.
            </p>
            <p className="mt-0.5 text-[14.5px] leading-relaxed text-[#1E1B2E]">
              Contact our team to discuss your options. Protection is always optional and separate from your device and
              airtime.
            </p>
          </div>

          <Link
            href="#protection-enquiry"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F0168A] via-[#E0127C] to-[#C8106E] px-5 py-3 text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(224,18,124,0.35)] transition-transform hover:scale-[1.01]"
          >
            Ask about device protection
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </div>

        {/* 3 photo cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {FEATURE_CARDS.map(({ tag, tagClass, title, text, dependsOn, cta, href, image, alt }) => (
            <article
              key={title}
              className="flex flex-col overflow-hidden rounded-[24px] border border-[#E3E6F2] bg-white shadow-[0_12px_30px_rgba(10,20,70,0.06)]"
            >
              <div className="relative h-[190px] w-full overflow-hidden">
                <Image
                  src={`${IMG}/${image}`}
                  alt={alt}
                  fill
                  sizes="(min-width: 768px) 384px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-[22px]">
                <span className={`w-fit rounded-full px-3 py-1 text-[12.5px] font-semibold ${tagClass}`}>{tag}</span>
                <h3 className="mt-2.5 text-xl font-bold tracking-tight text-[#0A1446]">{title}</h3>
                <p className="mt-2 flex-1 text-[14.5px] leading-[1.6] text-[#3A4268]">{text}</p>
                <p className="mt-3 border-t border-dashed border-[#E3E6F2] pt-2.5 text-[13px] text-[#6B7194]">
                  <strong className="font-bold text-[#0A1446]">Depends on:</strong> {dependsOn}
                </p>
                <Link
                  href={href}
                  className="mt-2.5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#E0127C] hover:underline"
                >
                  {cta}
                  <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
