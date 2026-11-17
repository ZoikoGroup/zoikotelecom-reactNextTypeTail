import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, X, ChevronRight } from "lucide-react";

const READY_CHECKLIST = [
  {
    id: "rooms-devices",
    title: "Which rooms or devices are affected",
    subtitle: "And when it happens",
    type: "check",
  },
  {
    id: "type-of-device",
    title: "The type of device",
    subtitle: 'For example, "laptop" or "smart TV"',
    type: "check",
  },
  {
    id: "already-tried",
    title: "What you've already tried",
    subtitle: "Restarting, moving the router, cable test",
    type: "check",
  },
  {
    id: "never-share-password",
    title: "Never share your Wi-Fi or account password",
    subtitle: "We won't ask for it",
    type: "warning",
  },
] as const;

export default function WhatToHaveReadyWhenYouContactUs() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Main Grid Container */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Image with Rounded Corners */}
          <div className="relative h-[420px] w-full overflow-hidden rounded-3xl shadow-[0_12px_40px_rgba(17,24,60,0.08)] sm:h-[480px] lg:col-span-6">
            <Image
              src="/Images/whole/2.png"
              alt="Zoiko customer support consultation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Column: Content & Checklist */}
          <div className="lg:col-span-6">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
              GETTING HELP
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
              What to have ready when you contact us
            </h2>

            {/* Checklist Items */}
            <div className="mt-8 space-y-4">
              {READY_CHECKLIST.map((item) => {
                const isWarning = item.type === "warning";

                return (
                  <div
                    key={item.id}
                    className={`flex items-start gap-4 rounded-2xl border p-5 shadow-[0_2px_12px_rgba(17,24,60,0.02)] transition-colors ${
                      isWarning
                        ? "border-[#F8D7DA] bg-[#FFF8F8]"
                        : "border-[#ECEEF6] bg-white"
                    }`}
                  >
                    <div
                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white ${
                        isWarning ? "bg-[#C53030]" : "bg-[#0F5132]"
                      }`}
                    >
                      {isWarning ? (
                        <X className="h-4 w-4" strokeWidth={3} />
                      ) : (
                        <Check className="h-4 w-4" strokeWidth={3} />
                      )}
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-[#11183C] sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-[#4B5563] sm:text-sm">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(225,29,116,0.32)] transition-transform hover:scale-[1.01]"
              >
                <span>Contact Zoiko</span>
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>

              <Link
                href="#faqs"
                className="inline-flex items-center justify-center rounded-xl border border-[#D1D5DB] bg-white px-6 py-3.5 text-sm font-bold text-[#11183C] transition-colors hover:bg-[#F9FAFB]"
              >
                Read FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
