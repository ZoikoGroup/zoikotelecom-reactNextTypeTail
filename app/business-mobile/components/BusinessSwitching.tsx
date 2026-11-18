import React from "react";
import { Lock } from "lucide-react";

const SWITCHING_CARDS = [
  {
    id: "single-number",
    numberBadge: "1 number",
    title: "Single number",
    description:
      "Get a PAC from your current provider to keep your number, or a STAC to leave without it. Keep your current SIM working until the move is confirmed.",
    borderColor: "border-t-[#E0127C] border-[#E0127C]",
  },
  {
    id: "batch-numbers",
    numberBadge: "2–24 numbers",
    title: "A batch of numbers",
    description:
      "The account owner plans the move with our business team — we’ll confirm who signs, the schedule and what happens if something goes wrong.",
    borderColor: "border-t-[#7B3FE4] border-[#7B3FE4]",
  },
  {
    id: "larger-migrations",
    numberBadge: "25+ numbers",
    title: "Larger migrations",
    description:
      "A specialist plans the move in stages with your current provider, so the whole team isn’t switched at once.",
    borderColor: "border-t-[#3D7BFF] border-[#3D7BFF]",
  },
] as const;

export default function BusinessSwitching() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            SWITCHING
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Keep your business numbers where eligible
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            How moving numbers works depends on how many you have.
          </p>
        </div>

        {/* Three Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
          {SWITCHING_CARDS.map((card) => (
            <div
              key={card.id}
              className={`flex flex-col justify-between rounded-3xl border border-t-[4px] ${card.borderColor} bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-8`}
            >
              <div>
                <div className="text-sm font-extrabold text-[#4B5563]">
                  {card.numberBadge}
                </div>

                <h3 className="mt-2 text-xl font-extrabold tracking-tight text-[#11183C]">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Notice Banner */}
        <div className="mx-auto mt-6 max-w-7xl rounded-2xl border border-[#ECEEF6] bg-gradient-to-r from-[#F0F4FF] via-[#F5F3FF] to-[#FDF2F8] p-5 shadow-[0_4px_20px_rgba(17,24,60,0.02)] sm:p-6">
          <div className="flex items-center gap-3.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-[#7C3AED] shadow-sm">
              <Lock className="h-4 w-4" strokeWidth={2.25} />
            </div>
            <p className="text-xs leading-relaxed text-[#4B5563] sm:text-sm">
              Please don&apos;t send us staff phone numbers or PACs through the
              website — we&apos;ll collect what&apos;s needed securely when we
              plan your move.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
