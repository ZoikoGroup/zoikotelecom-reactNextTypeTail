import React from "react";
import Link from "next/link";
import { FileText, Smartphone, Check, ChevronRight } from "lucide-react";

const SETUP_CARDS = [
  {
    id: "esim-business",
    title: "eSIM for business",
    description:
      "eSIM is available on eligible mobile plans. For a team rollout we check each device, how eSIM details are delivered securely, and who in your business can request them.",
    features: [
      "Check devices support eSIM",
      "Activation details are sent securely, not in a public email",
      "Lost devices need a reissue process",
    ],
    ctaLabel: "Ask about eSIM",
    href: "/business/mobile/esim",
    icon: FileText,
    borderColor: "border-t-[#E0127C]",
  },
  {
    id: "devices-accessories",
    title: "Devices & accessories",
    description:
      "We can talk about phones and accessories for your team. Live stock, device prices and finance aren't shown online — our team will confirm them in your proposal.",
    features: [
      "Supported handsets and tablets",
      "Device cost shown separately from the plan",
      "Warranty and returns explained",
    ],
    ctaLabel: "Ask about devices",
    href: "/business/mobile/devices",
    icon: Smartphone,
    borderColor: "border-t-[#7B3FE4]",
  },
] as const;

export default function TeamSetup() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            ESIM & DEVICES
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Getting your team set up
          </h2>
        </div>

        {/* Two Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-[1300px] grid-cols-1 gap-6 lg:grid-cols-2">
          {SETUP_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`flex flex-col justify-between rounded-3xl border border-[#ECEEF6] border-t-[4px] ${card.borderColor} bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-8`}
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

                  <div className="mt-6 space-y-3">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FCE8F1] text-[#E11D74]">
                          <Check className="h-2.5 w-2.5" strokeWidth={3} />
                        </div>
                        <p className="text-xs leading-relaxed text-[#4B5563]">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
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
      </div>
    </section>
  );
}
