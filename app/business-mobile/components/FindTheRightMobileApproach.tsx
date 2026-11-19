import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Signal,
  Users,
  FileText,
  ShieldCheck,
  Smartphone,
  Briefcase,
  Network,
  ChevronRight,
} from "lucide-react";

const TOP_FEATURES = [
  {
    id: "ee-network",
    title: "EE network",
    description: "Through Zoiko Telecom's wholesale arrangements",
    icon: Signal,
  },
  {
    id: "built-for-teams",
    title: "Built for teams",
    description: "From a few SIMs to many lines",
    icon: Users,
  },
  {
    id: "sim-or-esim",
    title: "SIM or eSIM",
    description: "eSIM for eligible plans and devices",
    icon: FileText,
  },
  {
    id: "clear-terms-first",
    title: "Clear terms first",
    description: "Prices and terms confirmed in writing",
    icon: ShieldCheck,
  },
] as const;

const MOBILE_APPROACHES = [
  {
    id: "sim-only",
    tag: "SIM only",
    title: "SIMs for your people",
    description:
      "Bring your compatible device. Discuss business SIM allowances and contract terms.",
    ctaLabel: "Ask about SIMs",
    href: "/business/mobile/sims",
    image: "/Images/mbl/4.png",
  },
  {
    id: "device-plus-sim",
    tag: "Device + SIM",
    title: "Phones and SIMs together",
    description: "Ask about supported handsets, device costs and availability.",
    ctaLabel: "Ask about devices",
    href: "/business/mobile/devices",
    image: "/Images/mbl/5.png",
  },
  {
    id: "multi-line",
    tag: "Multi-line",
    title: "Lines for a whole team",
    description:
      "Plan the number of users, required SIMs, departmental billing and number transfers.",
    ctaLabel: "Plan your lines",
    href: "/business/mobile/lines",
    image: "/Images/mbl/6.png",
  },
] as const;

export default function FindTheRightMobileApproach() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Top Four-Column Feature Bar */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 rounded-3xl border border-[#ECEEF6] bg-white p-6 shadow-[0_8px_30px_rgba(17,24,60,0.03)]">
          {TOP_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className="flex items-start gap-3.5 p-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F4297B]/15 to-[#7C3AED]/15 text-[#E11D74]">
                  <Icon className="h-5 w-5" strokeWidth={2.25} />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[#11183C]">
                    {feature.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-[#4B5563] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Header */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            FIND THE RIGHT APPROACH
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Find the right mobile approach for your team
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            These are needs, not plans — our team will match them to current
            business offers.
          </p>
        </div>

        {/* Three-Column Approach Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
          {MOBILE_APPROACHES.map((approach) => (
            <div
              key={approach.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#ECEEF6] bg-white shadow-[0_8px_30px_rgba(17,24,60,0.04)] transition-all hover:border-[#DCE1F0] hover:shadow-[0_12px_34px_rgba(17,24,60,0.07)]"
            >
              {/* Card Header Image (/Images/mbl/4.png, 2.png, 3.png) */}
              <div className="relative h-[180px] w-full overflow-hidden bg-[#F3F4F6]">
                <Image
                  src={approach.image}
                  alt={approach.title}
                  fill
                  className="object-cover transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-col justify-between p-7 sm:p-8">
                <div>
                  <span className="inline-flex items-center rounded-full bg-[#FCE8F1] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#E11D74]">
                    {approach.tag}
                  </span>

                  <h3 className="mt-4 text-xl font-extrabold tracking-tight text-[#11183C]">
                    {approach.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#4B5563]">
                    {approach.description}
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href={approach.href}
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#E11D74] transition-transform group-hover:translate-x-0.5"
                  >
                    <span>{approach.ctaLabel}</span>
                    <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
