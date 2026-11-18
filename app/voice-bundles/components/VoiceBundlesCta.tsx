import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function VoiceBundlesCta() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#e6007e] via-[#8a2fd6] to-[#4654e8] py-16 text-white sm:py-20">
      {/* Decorative left ring */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-28 h-[420px] w-[420px] rounded-full border-[44px] border-white/[0.08]"
      />

      {/* Decorative right ring */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -right-24 h-[400px] w-[400px] rounded-full border-[40px] border-white/[0.08]"
      />

      <div className="relative z-10 mx-auto max-w-[1300px] px-6 text-center sm:px-8 lg:px-10">
        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[42px]">
          Find the right calling package for your business.[cite: 15]
        </h2>

        <p className="mx-auto mt-3.5 max-w-[560px] text-sm text-white/90 sm:text-base">
          Speak to our business team. Current customers can contact
          support.[cite: 15]
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#e6007e] shadow-[0_12px_28px_-6px_rgba(19,17,56,0.25)] transition hover:bg-white/95"
          >
            Discuss your voice needs[cite: 15]
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <Link
            href="/support"
            className="inline-flex items-center rounded-xl border border-white/70 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xs transition hover:border-white hover:bg-white/20"
          >
            Contact support[cite: 15]
          </Link>
        </div>
      </div>
    </section>
  );
}
