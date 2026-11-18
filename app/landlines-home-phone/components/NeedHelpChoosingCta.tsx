import React from "react";
import Link from "next/link";
import { Briefcase, ChevronRight } from "lucide-react";

export default function NeedHelpChoosingCta() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 rounded-3xl bg-gradient-to-r from-[#14125A] via-[#231C70] to-[#7B3FE4] p-8 text-white md:flex-row md:items-center md:justify-between md:p-11">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Need help choosing a home phone?</h2>
            <p className="mt-2 text-sm text-white/85 sm:text-base">
              Contact Zoiko and our team will talk you through your options.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-7 py-3.5 text-base font-bold text-white shadow-[0_8px_22px_rgba(225,29,116,0.4)]"
            >
              Contact Zoiko
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <Link
              href="#faqs"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/80 px-7 py-3.5 text-base font-bold text-white hover:bg-white/10"
            >
              Read FAQs
            </Link>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-5 rounded-3xl border border-[#E6E9F2] bg-white p-7 sm:flex-row sm:items-center">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-white">
            <Briefcase className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </span>
          <div className="flex-1">
            <h2 className="text-xl font-extrabold text-[#11183C]">Looking for business phone services?</h2>
            <p className="mt-1 text-sm text-[#4B5375] sm:text-base">
              Office and business VoIP is a separate service for organisations.
            </p>
          </div>
          <Link
            href="/landlines-business-voice"
            className="inline-flex shrink-0 items-center justify-center gap-1.5 self-start rounded-xl border-2 border-[#11183C] px-6 py-3 text-sm font-bold text-[#11183C] hover:bg-[#F5F6FB] sm:self-center sm:text-base"
          >
            Business solutions
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
