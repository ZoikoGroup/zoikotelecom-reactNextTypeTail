import Link from "next/link";
import { ChevronRight } from "lucide-react";

type PortingStep = {
  title: string;
  description: string;
};

const PORTING_STEPS: readonly PortingStep[] = [
  {
    title: "Check eligibility",
    description:
      "We confirm the numbers can move and that you're authorised to move them.",
  },
  {
    title: "Agree a date",
    description: "We coordinate with your current provider.",
  },
  {
    title: "Keep your old service live",
    description:
      "Don't cancel your existing service until the move is confirmed.",
  },
  {
    title: "Number moves",
    description:
      "We'll confirm when it's complete. We can't guarantee there'll be no interruption.",
  },
] as const;

export default function NumberPortingSteps() {
  return (
    <section className="w-full bg-white py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
            Keep your number
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight text-[#131138] sm:text-4xl lg:text-[42px]">
            How moving your number works
          </h2>
          <p className="mx-auto mt-3 max-w-[580px] text-sm text-[#545275] sm:text-base">
            Porting may be possible, subject to eligibility and coordination
            with your current provider.
          </p>
        </div>

        {/* 4-Step Timeline */}
        <div className="relative mt-14">
          {/* Connecting Gradient Line (Desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-[22px] hidden h-[2px] bg-gradient-to-r from-[#e6007e] via-[#7b3fe4] to-[#e6007e] lg:block"
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {PORTING_STEPS.map((step) => (
              <div
                key={step.title}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Step Circle */}
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#e6007e] bg-white shadow-[0_6px_18px_rgba(230,0,126,0.12)]"
                />

                <h3 className="mt-5 text-base font-extrabold tracking-tight text-[#131138] sm:text-lg">
                  {step.title}
                </h3>

                <p className="mt-2 max-w-[250px] text-xs leading-5 text-[#545275] sm:text-[13px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-14 flex flex-wrap items-center gap-3.5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#e6007e] to-[#c41478] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_-6px_rgba(230,0,126,0.45)] transition hover:opacity-95"
          >
            Request porting advice
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <Link
            href="/business-numbers"
            className="inline-flex items-center rounded-xl border border-[#3d3a68]/30 bg-white px-6 py-3.5 text-sm font-semibold text-[#131138] shadow-xs transition hover:border-[#131138]"
          >
            About business numbers
          </Link>
        </div>
      </div>
    </section>
  );
}
