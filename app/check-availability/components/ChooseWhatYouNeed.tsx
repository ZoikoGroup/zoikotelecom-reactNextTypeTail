import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const HELP_OPTIONS = [
  {
    id: "ask-about-availability",
    tag: "TALK TO US",
    title: "Ask about availability",
    description: "Our team checks your exact address.",
    ctaLabel: "Contact Zoiko",
    href: "/contact",
  },
  {
    id: "read-broadband-faqs",
    tag: "SELF-HELP",
    title: "Read broadband FAQs",
    description: "Answers to common questions.",
    ctaLabel: "Visit FAQs",
    href: "#faqs",
  },
  {
    id: "explore-broadband-options",
    tag: "BROWSE",
    title: "Explore broadband options",
    description: "General information about our broadband.",
    ctaLabel: "View options",
    href: "/broadband/plans",
  },
] as const;

export default function ChooseWhatYouNeed() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            HOW CAN WE HELP?
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Choose what you need
          </h2>
        </div>

        {/* Three-Column Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {HELP_OPTIONS.map((option) => (
            <Link
              key={option.id}
              href={option.href}
              className="group flex flex-col justify-between rounded-3xl border border-[#ECEEF6] bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] transition-all hover:border-[#DCE1F0] hover:shadow-[0_12px_34px_rgba(17,24,60,0.07)] sm:p-8"
            >
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#E11D74]">
                  {option.tag}
                </p>

                <h3 className="mt-3 text-xl font-extrabold tracking-tight text-[#11183C]">
                  {option.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                  {option.description}
                </p>
              </div>

              <div className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-[#E11D74] transition-transform group-hover:translate-x-0.5">
                <span>{option.ctaLabel}</span>
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
