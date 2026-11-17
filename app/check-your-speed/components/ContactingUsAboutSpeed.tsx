import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, X, ChevronRight } from "lucide-react";

const CONTACT_ITEMS = [
  {
    id: "readings",
    title: "Your readings, with dates and times",
    description: "Note cable or Wi-Fi for each",
    type: "check",
  },
  {
    id: "plan",
    title: "Your plan, if you know it",
    description: "From your contract or bill",
    type: "check",
  },
  {
    id: "tried",
    title: "What you've already tried",
    description: "Restarting, cable test, different rooms",
    type: "check",
  },
  {
    id: "warning",
    title: "Never share passwords, full IP addresses or card details",
    description: "We won't ask for them",
    type: "warning",
  },
] as const;

export default function ContactingUsAboutSpeed() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Content Column */}
          <div className="lg:col-span-6">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
              GETTING HELP
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
              Contacting us about speed
            </h2>

            {/* Checklist Cards */}
            <div className="mt-8 space-y-3.5">
              {CONTACT_ITEMS.map((item) => {
                const isWarning = item.type === "warning";

                return (
                  <div
                    key={item.id}
                    className={`flex items-start gap-3.5 rounded-2xl border p-4.5 sm:p-5 ${
                      isWarning
                        ? "border-[#F8D7DA] bg-[#FFF5F5]"
                        : "border-[#E6E9F2] bg-white shadow-[0_2px_8px_rgba(17,24,60,0.02)]"
                    }`}
                  >
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                        isWarning
                          ? "bg-[#F5C6CB] text-[#721C24]"
                          : "bg-[#D1E7DD] text-[#0F5132]"
                      }`}
                    >
                      {isWarning ? (
                        <X className="h-4 w-4" strokeWidth={3} />
                      ) : (
                        <Check className="h-4 w-4" strokeWidth={3} />
                      )}
                    </div>
                    <div>
                      <h3
                        className={`text-sm font-extrabold sm:text-base ${
                          isWarning ? "text-[#721C24]" : "text-[#11183C]"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`mt-0.5 text-xs sm:text-sm ${
                          isWarning ? "text-[#842029]" : "text-[#4B5563]"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(225,29,116,0.32)] transition-transform hover:scale-[1.01]"
              >
                <span>Contact Zoiko</span>
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>

              <Link
                href="/help/faqs"
                className="inline-flex items-center justify-center rounded-xl border border-[#D1D5DB] bg-white px-6 py-3.5 text-sm font-bold text-[#11183C] transition-colors hover:bg-[#F9FAFB]"
              >
                Read broadband FAQs
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-[0_18px_40px_rgba(17,24,60,0.12)] sm:aspect-[16/13]">
              <Image
                src="/Images/speed/5.png"
                alt="Customer support representatives wearing headsets working at a desk"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
