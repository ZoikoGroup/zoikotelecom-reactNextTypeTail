import React from "react";
import { FileText, Shield, CheckCircle2 } from "lucide-react";

const CONTRACT_CARDS = [
  {
    id: "written-proposal",
    title: "Written proposal",
    description:
      "Plans, allowances and costs for each line, before you decide.",
    icon: FileText,
    borderColor: "border-t-[#E0127C]",
  },
  {
    id: "no-pressure",
    title: "No pressure",
    description: 'No countdown timers or "today only" offers.',
    icon: Shield,
    borderColor: "border-t-[#7B3FE4]",
  },
  {
    id: "your-consent",
    title: "Your consent",
    description: "Nothing changes until an authorised person agrees.",
    icon: CheckCircle2,
    borderColor: "border-t-[#3D7BFF]",
  },
] as const;

export default function ContractTerms() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            CONTRACTS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Know your contract before you sign
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            You&apos;ll get pre-contract information and a contract summary
            before anything is binding.
          </p>
        </div>

        {/* Top Featured Banner */}
        <div className="mx-auto mt-10 max-w-[1300px] rounded-3xl bg-gradient-to-r from-[#0A1147] via-[#111A5C] to-[#2A1A6E] p-6 text-white shadow-[0_12px_40px_rgba(6,12,54,0.25)] sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex shrink-0 items-baseline gap-1 text-[#F472B6]">
              <span className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                24
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D1D5EB]">
                months max
              </span>
            </div>
            <div className="border-t border-white/15 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <h3 className="text-base font-extrabold text-white sm:text-lg">
                Small business with 10 or fewer employees?
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#D1D5EB] sm:text-sm">
                You can&apos;t be tied into a minimum term longer than 24
                months, and you should receive a short contract summary first.
                Any in-contract price rises must be shown in pounds and pence
                with dates.
              </p>
            </div>
          </div>
        </div>

        {/* Three Cards Grid */}
        <div className="mx-auto mt-8 grid max-w-[1300px] grid-cols-1 gap-6 md:grid-cols-3">
          {CONTRACT_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`flex flex-col justify-between rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-8`}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
