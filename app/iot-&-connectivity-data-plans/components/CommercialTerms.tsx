import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight, PoundSterling } from "lucide-react";
import SectionHeader from "./SectionHeader";

const IMG = "/Images/iot-&-connectivity-data-plans";

const COST_PARTS = [
  { title: "One-time", text: "Setup, SIMs, activation" },
  { title: "Recurring", text: "Monthly commitment" },
  { title: "Variable", text: "Excess use, roaming" },
] as const;

const PROPOSAL_ITEMS = [
  "Monthly commitment",
  "Setup charges",
  "Activation charges",
  "Inclusive usage",
  "Excess usage",
  "Roaming charges",
  "Fair-use terms",
  "Term, renewal & exit",
] as const;

const CARDS = [
  {
    tag: "Overage",
    tagClass: "bg-[#FEF1E2] text-[#9A5B00]",
    title: "Going over an allowance",
    text: "What happens — extra charges, slower speeds or a block — depends on the plan evidence. Automatic blocking isn’t promised.",
    dependsOn: "the signed plan terms.",
    cta: "Ask about overage terms",
    image: "overage-finance.webp",
    alt: "Paperwork and a calculator on a desk",
  },
  {
    tag: "Contracts",
    tagClass: "bg-[#ECEFFE] text-[#3B4FD8]",
    title: "Contracts & cancellation",
    text: "Small businesses may be entitled to an Ofcom contract summary and protections on term, renewal and exit, where these rules apply.",
    dependsOn: "your business size and the contract type.",
    cta: "Ask about contract terms",
    image: "contracts-team.webp",
    alt: "Team working on laptops around a table",
  },
] as const;

export default function CommercialTerms() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Commercial terms"
          title="What a real proposal should show you"
          subtitle="Compare the whole cost over the agreed term — not just the monthly figure."
          className="max-w-3xl"
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {COST_PARTS.map(({ title, text }, i) => (
            <React.Fragment key={title}>
              {i > 0 && (
                <span aria-hidden="true" className="text-lg font-bold text-[#8A90A6]">
                  +
                </span>
              )}
              <div className="min-w-[160px] rounded-2xl border border-[#E6E9F2] bg-white px-5 py-4 text-center shadow-[0_6px_18px_rgba(17,24,60,0.05)]">
                <p className="text-base font-bold text-[#11183C]">{title}</p>
                <p className="mt-1 text-xs text-[#6B7194]">{text}</p>
              </div>
            </React.Fragment>
          ))}
          <span aria-hidden="true" className="text-lg font-bold text-[#8A90A6]">
            =
          </span>
          <div className="min-w-[180px] rounded-2xl bg-gradient-to-r from-[#E11D74] to-[#8E37E8] px-5 py-4 text-center text-white shadow-[0_10px_24px_rgba(142,55,232,0.3)]">
            <p className="text-base font-bold">Total over the term</p>
            <p className="mt-1 text-xs text-white/85">Shown ex- and inc-VAT</p>
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PROPOSAL_ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-xl border border-[#E6E9F2] bg-white px-4 py-3.5 text-sm font-semibold text-[#11183C] shadow-[0_4px_12px_rgba(17,24,60,0.04)]"
            >
              <Check className="h-4 w-4 shrink-0 text-[#B0177A]" strokeWidth={2.5} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-start gap-4 rounded-2xl border-2 border-dashed border-[#F2C4D8] bg-[#FFF8FB] px-6 py-5">
          <PoundSterling className="mt-1 h-6 w-6 shrink-0 text-[#B0177A]" strokeWidth={2} aria-hidden="true" />
          <div>
            <p className="text-base font-bold text-[#11183C] sm:text-lg">Plan pricing isn’t published here.</p>
            <p className="mt-1 text-sm text-[#2B3150]">
              You won’t see example prices, discounts or £0 placeholder plans on this page.
              Contact Zoiko Telecom for a reviewed proposal.
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {CARDS.map(({ tag, tagClass, title, text, dependsOn, cta, image, alt }) => (
            <article
              key={title}
              className="flex flex-col overflow-hidden rounded-[22px] border border-[#E6E9F2] bg-white shadow-[0_14px_36px_rgba(17,24,60,0.08)]"
            >
              <div className="relative aspect-[587/190] w-full">
                <Image src={`${IMG}/${image}`} alt={alt} fill sizes="(min-width: 768px) 590px, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${tagClass}`}>{tag}</span>
                <h3 className="mt-3 text-xl font-bold text-[#11183C]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5375] sm:text-base">{text}</p>
                <p className="mt-4 border-t border-dashed border-[#E2E5EF] pt-3 text-sm text-[#6B7194]">
                  <span className="font-bold text-[#11183C]">Depends on:</span> {dependsOn}
                </p>
                <Link
                  href="#iot-data-enquiry"
                  className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-[#E11D74] hover:underline sm:text-base"
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
