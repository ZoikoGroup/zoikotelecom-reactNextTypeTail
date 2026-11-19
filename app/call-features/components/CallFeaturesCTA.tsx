import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CallFeaturesCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#e6007e] via-[#b81d70] to-[#7b3fe4] py-20 text-white sm:py-24">
      {/* Decorative background ambient rings/circles */}
      <div
        className="absolute -left-20 -top-20 h-80 w-80 rounded-full border border-white/10 bg-white/5 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full border border-white/10 bg-white/5 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1000px] px-6 text-center sm:px-8">
        <h2 className="text-3xl font-black tracking-tight text-white sm:text-[36px] lg:text-[38px]">
          Tell us how your business handles calls today.
        </h2>

        <p className="mx-auto mt-4 max-w-[500px] text-sm font-medium text-white/90 sm:text-base">
          We can discuss suitable voice options &mdash; no obligation.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-extrabold text-[#e6007e] shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition hover:bg-white/95"
          >
            Discuss call features
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <Link
            href="/business-landlines"
            className="inline-flex items-center rounded-xl border border-white/40 bg-white/10 px-7 py-4 text-sm font-extrabold text-white shadow-xs backdrop-blur-xs transition hover:bg-white/20 hover:border-white"
          >
            View business landlines
          </Link>
        </div>
      </div>
    </section>
  );
}
