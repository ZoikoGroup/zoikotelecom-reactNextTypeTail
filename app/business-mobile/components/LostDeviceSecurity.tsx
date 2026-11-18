import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const SECURITY_STEPS = [
  {
    id: "contact-support",
    title: "Contact support",
    description: "Use our contact page as soon as you notice.",
    image: "/Images/mbl/9.png",
  },
  {
    id: "we-verify-you",
    title: "We verify you",
    description: "We check you're authorised on the account.",
    image: "/Images/mbl/10.png",
  },
  {
    id: "line-restricted",
    title: "Line restricted",
    description: "We restrict or suspend the SIM.",
    image: "/Images/mbl/15.png",
  },
  {
    id: "new-sim",
    title: "New SIM or eSIM",
    description: "A replacement is issued securely.",
    image: "/Images/mbl/11.png",
  },
  {
    id: "reassigned-logged",
    title: "Reassigned & logged",
    description: "The line is reassigned and the change recorded.",
    image: "/Images/mbl/12.png",
  },
] as const;

export default function LostDeviceSecurity() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#060C36] via-[#081040] to-[#2A1A6E] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#E11D74]" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              SECURITY
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            If a company phone or SIM is lost
          </h2>

          <p className="mt-3.5 text-sm leading-relaxed text-[#D1D5EB] sm:text-base">
            Contact us straight away. There&apos;s no public button to suspend a
            line — we verify who you are first.
          </p>
        </div>

        {/* 5-Column Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {SECURITY_STEPS.map((step) => (
            <div
              key={step.id}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-[#0A1147]/80 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all hover:border-white/30"
            >
              {/* Content on Top */}
              <div>
                <h3 className="text-base font-extrabold text-white">
                  {step.title}
                </h3>

                <p className="mt-1.5 text-xs leading-relaxed text-[#D1D5EB]">
                  {step.description}
                </p>
              </div>

              {/* Image below content using /Images/mbl/9.png and so on */}
              <div className="relative mt-5 h-[140px] w-full overflow-hidden rounded-2xl bg-[#11183C]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 20vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/business/contact"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-8 py-4 text-sm font-bold text-white shadow-[0_8px_25px_rgba(225,29,116,0.35)] transition-transform hover:scale-[1.01]"
          >
            <span>Report a lost SIM</span>
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
