import React from "react";
import Link from "next/link";
import { ChevronRight, Heart } from "lucide-react";

const STEPS = [
  "Contact your device supplier or care provider.",
  "Tell your landline provider that you use the device.",
  "Don’t switch until you know the device will keep working.",
] as const;

export default function TelecareBanner() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl border border-[#F5D9A8] bg-gradient-to-r from-[#FFF6E6] to-[#FDECF1] p-7 md:flex-row md:items-center md:gap-8 md:p-10">
        <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#E11D74] text-white">
          <Heart className="h-9 w-9" strokeWidth={2} aria-hidden="true" />
        </span>
        <div className="flex-1">
          <h2 className="text-2xl font-extrabold text-[#5B1A3A]">Telecare, pendants and care alarms</h2>
          <p className="mt-2 text-sm text-[#5C3300] sm:text-base">
            Some alarms and medical devices use the phone line. Before any change to your landline:
          </p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm font-bold text-[#5C3300] sm:text-base">
            {STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center justify-center gap-1.5 self-start rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(225,29,116,0.35)] md:self-center"
        >
          Talk to us first
          <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
