"use client";

import React from "react";

interface ExpectationCard {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

const EXPECTATION_CARDS = [
  {
    id: "support-hours",
    title: "Support hours",
    description:
      "Days, times, time zone and holidays covered — we don't assume 24/7.",
  },
  {
    id: "service-levels",
    title: "Service levels",
    description: "A contractual commitment, with measurement and exclusions.",
  },
  {
    id: "remedies",
    title: "Remedies",
    description: "Only the credits or remedies in your contract.",
  },
  {
    id: "escalation",
    title: "Escalation",
    description: "Named stages and who to contact if things stall.",
  },
] as const satisfies readonly ExpectationCard[];

export default function ServiceExpectations() {
  return (
    <section
      aria-labelledby="service-expectations-heading"
      className="relative w-full bg-gradient-to-br from-[#06092A] via-[#0F0C46] to-[#29095C] py-16 sm:py-20 px-4 sm:px-8 text-white font-sans overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[720px] mx-auto mb-11 sm:mb-12">
          <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#F04DA2] mb-2.5">
            SERVICE EXPECTATIONS
          </p>
          <h2
            id="service-expectations-heading"
            className="text-[32px] sm:text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-white mb-3"
          >
            Response isn&rsquo;t the same as repair
          </h2>
          <p className="text-[14px] sm:text-[15px] leading-[1.58] text-[#C7CCE6] font-normal">
            Response targets, support hours, service levels and repair timelines
            are contract-specific — confirm them before you commit.
          </p>
        </div>

        {/* Top 2 Wide Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          {/* First Response Card */}
          <article className="rounded-[16px] bg-gradient-to-r from-[#0B1248] via-[#1B228C] to-[#2C37C9] p-6 sm:p-7 shadow-[0_14px_34px_rgba(4,7,28,0.35)] flex flex-col justify-between">
            <div>
              <p className="text-[10.5px] font-bold tracking-[0.13em] uppercase text-[#9AA6FF] mb-2">
                FIRST RESPONSE
              </p>
              <h3 className="text-[20px] sm:text-[22px] font-bold leading-[1.28] tracking-[-0.015em] text-white mb-2.5">
                When we start handling your request
              </h3>
              <p className="text-[13px] leading-[1.55] text-[#DCE1FF] max-w-[490px] mb-6">
                The point your request is first picked up and looked at — under
                the support hours in your agreement.
              </p>
            </div>

            <div>
              {/* Progress Bar */}
              <div className="w-full h-[5px] rounded-full bg-white/20 overflow-hidden mb-2.5">
                <div className="h-full w-[78%] rounded-full bg-[#38BDF8]" />
              </div>
              <p className="text-[11px] font-medium text-[#C5CCFF]">
                Reported &rarr; acknowledged
              </p>
            </div>
          </article>

          {/* Restoration Card */}
          <article className="rounded-[16px] bg-gradient-to-r from-[#5C1258] via-[#A91878] to-[#DB1B86] p-6 sm:p-7 shadow-[0_14px_34px_rgba(4,7,28,0.35)] flex flex-col justify-between">
            <div>
              <p className="text-[10.5px] font-bold tracking-[0.13em] uppercase text-[#FFC2E2] mb-2">
                RESTORATION
              </p>
              <h3 className="text-[20px] sm:text-[22px] font-bold leading-[1.28] tracking-[-0.015em] text-white mb-2.5">
                When the service is working again
              </h3>
              <p className="text-[13px] leading-[1.55] text-[#FFE8F4] max-w-[500px] mb-6">
                Often depends on the wholesale provider. We only state repair
                commitments where they&rsquo;re signed.
              </p>
            </div>

            <div>
              {/* Progress Bar */}
              <div className="w-full h-[5px] rounded-full bg-white/25 overflow-hidden mb-2.5">
                <div className="h-full w-[78%] rounded-full bg-white" />
              </div>
              <p className="text-[11px] font-medium text-[#FFD4EB]">
                Reported &rarr; restored
              </p>
            </div>
          </article>
        </div>

        {/* Bottom 4 Detail Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EXPECTATION_CARDS.map((card) => (
            <article
              key={card.id}
              className="rounded-[14px] bg-[#16154B]/75 p-5 shadow-[0_10px_24px_rgba(5,7,30,0.25)] backdrop-blur-xs flex flex-col"
            >
              <span
                aria-hidden="true"
                className="mb-4 h-7 w-7 rounded-[7px] bg-gradient-to-br from-[#6EE7B7] via-[#38BDF8] to-[#818CF8] shadow-xs"
              />
              <h3 className="text-[15.5px] font-bold leading-[1.3] tracking-[-0.01em] text-white mb-2">
                {card.title}
              </h3>
              <p className="text-[12px] leading-[1.52] text-[#C4C9E4]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
