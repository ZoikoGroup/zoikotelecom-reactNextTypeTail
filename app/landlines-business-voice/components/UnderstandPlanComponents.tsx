import React from "react";
import Link from "next/link";
import { Check, ChevronRight, FileText, PoundSterling, TriangleAlert } from "lucide-react";
import SectionHeader from "./SectionHeader";

const PLAN_PLACEHOLDERS = [
  { title: "Business voice plans appear here", meta: "Users · Number type · Calls · Term" },
  { title: "Every cost, VAT shown clearly", meta: "Monthly · One-off · Hardware · Price rises" },
] as const;

const QUOTE_ITEMS = [
  "Monthly charges per user or line",
  "One-off set-up and hardware costs",
  "Number transfer charges, if any",
  "Call charges outside any bundle",
  "VAT and any price rises, in £ and pence",
  "Contract length and total cost",
] as const;

const CARD = "rounded-3xl border border-[#E6E9F2] bg-white p-6 shadow-[0_12px_36px_rgba(17,24,60,0.08)] sm:p-8";

function GradientIcon({ icon: Icon }: { icon: typeof FileText }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-white">
      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
    </span>
  );
}

export default function UnderstandPlanComponents() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="Plans & costs"
          title="Understand plan components"
          subtitle="Live plans are only shown once verified. Here’s what every quote should make clear."
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Plan placeholder */}
          <div className="rounded-3xl bg-[#FBF5FB] p-6 shadow-[0_12px_36px_rgba(17,24,60,0.08)] sm:p-8">
            <div className="space-y-4">
              {PLAN_PLACEHOLDERS.map((plan) => (
                <div
                  key={plan.title}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-white/80 px-6 py-5"
                >
                  <span aria-hidden="true" className="text-xl font-extrabold text-[#D3D8E8]">
                    £—
                  </span>
                  <span className="text-right">
                    <span className="block text-sm font-extrabold text-[#434A6E] sm:text-base">
                      {plan.title}
                    </span>
                    <span className="mt-1 block text-xs text-[#8A90A6]">{plan.meta}</span>
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-sm text-[#4B5375]">
              Plans aren’t listed online yet. Our team will prepare a quote with full costs.
            </p>
            <div className="mt-5 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(225,29,116,0.35)] transition-transform hover:scale-[1.01]"
              >
                Request a quote
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* What a quote should include */}
          <div className={CARD}>
            <div className="flex items-center gap-4">
              <GradientIcon icon={PoundSterling} />
              <div>
                <h3 className="text-lg font-extrabold text-[#11183C]">What a quote should include</h3>
                <p className="text-sm text-[#B45309]">Before you sign anything</p>
              </div>
            </div>
            <ul className="mt-5 space-y-3">
              {QUOTE_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#4B5375]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#E11D74]" strokeWidth={2.5} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={CARD}>
            <GradientIcon icon={TriangleAlert} />
            <h3 className="mt-5 text-xl font-extrabold text-[#11183C]">Leaving your current provider</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4B5375]">
              Check your current contract for notice periods and early-termination
              charges before you move. Don’t cancel anything until your new
              service and any number transfer are confirmed.
            </p>
          </div>

          <div className={CARD}>
            <GradientIcon icon={FileText} />
            <h3 className="mt-5 text-xl font-extrabold text-[#11183C]">Your new agreement</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4B5375]">
              You’ll see the contract length, renewal terms and cancellation
              terms in writing before you agree.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
