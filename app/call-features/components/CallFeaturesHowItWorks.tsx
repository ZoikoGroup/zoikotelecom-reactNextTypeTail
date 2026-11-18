import { MessageSquare, Users, Settings, Lock } from "lucide-react";

type StepCard = {
  stepNumber: string;
  title: string;
  description: string;
};

const STEP_CARDS: readonly StepCard[] = [
  {
    stepNumber: "1",
    title: "Tell us how you handle calls",
    description:
      "Your hours, teams, numbers and what should happen when nobody answers.",
  },
  {
    stepNumber: "2",
    title: "Review options with our voice team",
    description:
      "We'll confirm which features your service supports, what they cost and what they need.",
  },
  {
    stepNumber: "3",
    title: "Set up under your approved service",
    description:
      "Changes are made on the voice service you agree — we'll confirm when they're in place.",
  },
] as const;

const COMING_LATER_STEPS = [
  "Choose the service, site and number",
  "Draft and check the change — including loops and dead ends",
  "Confirm, with any recording or emergency warnings shown",
  "See whether it was applied, with a full change history",
] as const;

export default function CallFeaturesHowItWorks() {
  return (
    <section className="w-full bg-[#F5F6FB] py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
            How it works
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight text-[#131138] sm:text-4xl lg:text-[42px]">
            From your needs to a working setup
          </h2>
        </div>

        {/* 3 Steps Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEP_CARDS.map((card) => (
            <div
              key={card.title}
              className="relative flex flex-col rounded-[24px] border border-[#ecebf4] bg-white p-7 shadow-[0_12px_32px_rgba(19,17,56,0.04)] sm:p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e6007e] to-[#7b3fe4] text-white shadow-md shadow-[#e6007e]/20 text-sm font-black">
                {card.stepNumber}
              </span>

              <h3 className="mt-6 text-lg font-black tracking-tight text-[#131138]">
                {card.title}
              </h3>

              <p className="mt-2.5 text-sm leading-6 text-[#545275]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom "Coming Later" Banner with Preview Mockup */}
        <div className="mt-10 overflow-hidden rounded-[28px] border border-[#f0c2dc] bg-gradient-to-br from-[#F7F3FF] to-[#FFF0F7] p-8 shadow-[0_16px_40px_rgba(230,0,126,0.06)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f0c2dc] bg-white px-3.5 py-1 text-xs font-bold text-[#e6007e] shadow-xs">
                <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                Coming later
              </span>

              <h3 className="mt-4 text-2xl font-black tracking-tight text-[#131138] sm:text-3xl">
                Manage call settings online
              </h3>

              <p className="mt-2.5 text-sm leading-6 text-[#545275]">
                Changing forwarding, hours and menus yourself isn&rsquo;t
                available online yet. When it is, every change will follow these
                steps:
              </p>

              <ol className="mt-4 space-y-2 text-sm text-[#545275]">
                {COMING_LATER_STEPS.map((stepText, index) => (
                  <li key={stepText} className="flex items-start gap-2.5">
                    <span className="font-bold text-[#131138]">
                      {index + 1}.
                    </span>
                    <span>{stepText}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Right Mockup Card */}
            <div className="rounded-[24px] border border-[#ecebf4] bg-white p-6 shadow-[0_16px_40px_rgba(19,17,56,0.08)]">
              <div className="flex items-center justify-between border-b border-[#f0f1f6] pb-4">
                <div>
                  <h4 className="text-sm font-extrabold text-[#131138]">
                    Main number &middot; settings
                  </h4>
                </div>
                <span className="rounded-md bg-[#131138] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.08em] text-white">
                  Not live
                </span>
              </div>

              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between py-1.5 border-b border-[#f7f8fa]">
                  <span className="text-xs font-semibold text-[#545275]">
                    Forward when busy
                  </span>
                  <span className="h-5 w-9 rounded-full bg-[#e3e2ef] p-0.5 flex items-center">
                    <span className="h-4 w-4 rounded-full bg-white shadow-sm" />
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#f7f8fa]">
                  <span className="text-xs font-semibold text-[#545275]">
                    Opening hours rule
                  </span>
                  <span className="h-5 w-9 rounded-full bg-[#e3e2ef] p-0.5 flex items-center">
                    <span className="h-4 w-4 rounded-full bg-white shadow-sm" />
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-xs font-semibold text-[#545275]">
                    Voicemail
                  </span>
                  <span className="h-5 w-9 rounded-full bg-[#e3e2ef] p-0.5 flex items-center">
                    <span className="h-4 w-4 rounded-full bg-white shadow-sm" />
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  disabled
                  className="w-full rounded-xl border border-[#ecebf4] bg-[#f8f9fc] py-3 text-xs font-bold text-[#b0acc0] cursor-not-allowed"
                >
                  Save draft
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
