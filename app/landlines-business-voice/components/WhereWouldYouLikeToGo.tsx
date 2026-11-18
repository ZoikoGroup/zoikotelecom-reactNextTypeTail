import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const ROUTES = [
  {
    eyebrow: "New business enquiry",
    title: "Talk to our team",
    text: "Discuss requirements and get a quote.",
    link: { label: "Discuss business voice", href: "/contact" },
    bg: "bg-gradient-to-br from-[#E11D74] to-[#9B2FC9]",
  },
  {
    eyebrow: "Existing customer",
    title: "Change your service",
    text: "Add users, numbers or features.",
    link: { label: "Contact support", href: "/contact" },
    bg: "bg-gradient-to-br from-[#3D5AFE] to-[#7B3FE4]",
  },
  {
    eyebrow: "Fault or outage",
    title: "Report a problem",
    text: "Calls not working? Get help straight away.",
    link: { label: "Get support", href: "/contact" },
    bg: "bg-gradient-to-br from-[#0B1445] to-[#2A1A6E]",
  },
] as const;

export default function WhereWouldYouLikeToGo() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader eyebrow="Get the right help" title="Where would you like to go?" />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
          {ROUTES.map((route) => (
            <Link
              key={route.title}
              href={route.link.href}
              className={`group rounded-3xl p-7 text-white shadow-[0_12px_30px_rgba(17,24,60,0.12)] transition-transform hover:-translate-y-0.5 ${route.bg}`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-white/80">
                {route.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-extrabold">{route.title}</h3>
              <p className="mt-3 text-sm text-white/85 sm:text-base">{route.text}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold sm:text-base">
                {route.link.label}
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-5 flex max-w-6xl flex-col gap-4 rounded-3xl border border-dashed border-[#C9B8F0] bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <h3 className="text-lg font-extrabold text-[#11183C]">Digital landline or VoIP?</h3>
            <p className="mt-1 text-sm text-[#4B5375] sm:text-base">
              Not sure which you need? Our home phone guide explains digital
              landlines in plain English.
            </p>
          </div>
          <Link
            href="/landlines-home-phone"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-bold text-[#E11D74] hover:underline sm:text-base"
          >
            Compare the terms
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
