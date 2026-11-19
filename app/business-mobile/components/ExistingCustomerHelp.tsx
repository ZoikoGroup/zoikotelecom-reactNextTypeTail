import React from "react";
import Link from "next/link";
import {
  FileText,
  BarChart3,
  Smartphone,
  RefreshCw,
  Clock,
  ChevronRight,
} from "lucide-react";

const HELP_CARDS = [
  {
    id: "billing",
    title: "Billing",
    description: "Questions about invoices or charges.",
    ctaLabel: "Get help",
    href: "/support/billing",
    icon: FileText,
    borderColor: "border-t-[#E0127C]",
  },
  {
    id: "coverage-problems",
    title: "Coverage problems",
    description: "Signal issues at a site — tell us where and when.",
    ctaLabel: "Get help",
    href: "/support/coverage",
    icon: BarChart3,
    borderColor: "border-t-[#7B3FE4]",
  },
  {
    id: "lost-new-sims",
    title: "Lost or new SIMs",
    description: "Replacements and new lines.",
    ctaLabel: "Get help",
    href: "/support/sims",
    icon: Smartphone,
    borderColor: "border-t-[#3D7BFF]",
  },
  {
    id: "contract-changes",
    title: "Contract changes",
    description: "Upgrades, renewals and adding users.",
    ctaLabel: "Get help",
    href: "/support/contracts",
    icon: RefreshCw,
    borderColor: "border-t-[#10B981]",
  },
] as const;

export default function ExistingCustomerHelp() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            ALREADY A CUSTOMER?
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Help for existing business mobile services
          </h2>
        </div>

        {/* Four Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HELP_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`flex flex-col justify-between rounded-3xl shadow-xs bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-8`}
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#7C3AED] text-white shadow-md">
                    <Icon className="h-6 w-6" strokeWidth={2.25} />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold tracking-tight text-[#11183C]">
                    {card.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#4B5563]">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#E11D74] transition-transform hover:translate-x-0.5"
                  >
                    <span>{card.ctaLabel}</span>
                    <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Portal Coming Soon Banner */}
        <div className="mx-auto mt-6 max-w-7xl rounded-3xl border border-[#ECEEF6] bg-white p-6 shadow-[0_8px_30px_rgba(17,24,60,0.03)] sm:p-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h3 className="text-base font-extrabold text-[#11183C] sm:text-lg">
                Manage your team&apos;s lines online
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[#4B5563] sm:text-sm">
                A business account portal isn&apos;t available yet. Our team
                handles changes for you.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center rounded-xl bg-[#E5E7EB] px-5 py-3 text-xs font-bold text-[#4B5563] cursor-not-allowed">
                Sign in — coming soon
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Response Time Banner */}
        <div className="mx-auto mt-6 max-w-7xl rounded-2xl border border-[#ECEEF6] bg-gradient-to-r from-[#F0F4FF] via-[#F5F3FF] to-[#FDF2F8] p-5 shadow-[0_4px_20px_rgba(17,24,60,0.02)] sm:p-6">
          <div className="flex items-center gap-3.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-[#7C3AED] shadow-sm">
              <Clock className="h-4 w-4" strokeWidth={2.25} />
            </div>
            <p className="text-xs leading-relaxed text-[#4B5563] sm:text-sm">
              We&apos; ll reply as soon as we can during business hours. We
              don&apos;t promise a fixed response time on this page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
