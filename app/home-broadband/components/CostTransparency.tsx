import React from "react";
import {
  PoundSterling,
  Calendar,
  BarChart2,
  Wrench,
  Router,
  Zap,
  AlertTriangle,
  FileText,
} from "lucide-react";

const COST_ITEMS = [
  {
    id: "monthly-price",
    title: "Monthly price",
    description: "In £ and pence, including VAT",
    icon: PoundSterling,
  },
  {
    id: "contract-length",
    title: "Contract length",
    description: "And what happens after",
    icon: Calendar,
  },
  {
    id: "price-changes",
    title: "Price changes",
    description: "Any rises shown in £ and pence",
    icon: BarChart2,
  },
  {
    id: "setup-installation",
    title: "Set-up & installation",
    description: "Any one-off charges",
    icon: Wrench,
  },
  {
    id: "equipment",
    title: "Equipment",
    description: "Router and any postage",
    icon: Router,
  },
  {
    id: "activation",
    title: "Activation",
    description: "If a fee applies",
    icon: Zap,
  },
  {
    id: "leaving-early",
    title: "Leaving early",
    description: "Exit fees explained",
    icon: AlertTriangle,
  },
  {
    id: "contract-summary",
    title: "Contract summary",
    description: "Before you sign",
    icon: FileText,
  },
] as const;

export default function CostTransparency() {
  return (
    <section className="w-full bg-gradient-to-br from-[#0F0E3B] via-[#171454] to-[#241978] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#CBD0E8]">
            COST TRANSPARENCY
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Every cost, before you agree
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#D1D5EB] sm:text-base">
            We show these separately in your quote and contract summary.
          </p>
        </div>

        {/* 4x2 Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-[1300px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COST_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.09]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#F4297B] to-[#8A3FFC] text-white shadow-sm">
                  <Icon className="h-5 w-5" strokeWidth={2.25} />
                </div>

                <div className="mt-5">
                  <h3 className="text-base font-extrabold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#B8C0E0]">
                    {item.description}
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
