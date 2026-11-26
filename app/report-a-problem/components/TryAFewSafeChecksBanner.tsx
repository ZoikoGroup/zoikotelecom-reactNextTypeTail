import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const checkFeaturePills = [
  { label: "Optional", href: "#get-details-ready" },
  { label: "Safe steps", href: "#how-reporting-works" },
  { label: "Copyable summary", href: "#get-details-ready" },
] as const;

export default function TryAFewSafeChecksBanner() {
  return (
    <section
      id="try-safe-checks"
      className="w-full bg-gradient-to-r from-[#191252] via-[#3B167A] to-[#8C1D7D] px-4 py-12 text-white antialiased sm:px-6 lg:py-16"
    >
      <div className="mx-auto flex w-full max-w-[1300px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">
        {/* Left: Eyebrow, Heading, Copy, CTAs & Feature Pills */}
        <div className="max-w-[590px]">
          <p className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#FBBF77]">
            Prefer to check first?
          </p>

          <h2 className="mt-2.5 text-[32px] font-black leading-[1.12] tracking-[-0.02em] text-white sm:text-[40px]">
            Try a few safe checks
          </h2>

          <p className="mt-3 max-w-[520px] text-[13.5px] leading-[1.6] text-white/80">
            Our step-by-step guide covers mobile, broadband, landline and
            business services — and tells you when to contact us.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="#get-details-ready"
              className="inline-flex items-center gap-2 rounded-lg bg-[#EC1C7A] px-5 py-3 text-[12.5px] font-bold text-white shadow-[0_8px_22px_rgba(236,28,122,0.35)] transition-colors hover:bg-[#d6166d]"
            >
              <span>Troubleshoot a Service</span>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/5 px-6 py-3 text-[12.5px] font-bold text-white transition-colors hover:bg-white/15"
            >
              Contact support
            </Link>
          </div>

          {/* Bottom Pill Badges */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {checkFeaturePills.map((pill) => (
              <Link
                key={pill.label}
                href={pill.href}
                className="rounded-full bg-white/12 px-3.5 py-1.5 text-[11px] font-semibold text-white/90 transition-colors hover:bg-white/20"
              >
                {pill.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Rounded Overhead Technical Workspace Image */}
        <div className="relative h-[225px] w-full overflow-hidden rounded-2xl shadow-[0_14px_34px_rgba(12,6,36,0.35)] sm:h-[245px] lg:w-[420px] lg:shrink-0">
          <Image
            src="/Images/prob/7.png"
            alt="Overhead view of technical diagrams, tools, and diagnostic checks on a workbench"
            fill
            sizes="(min-width: 1024px) 420px, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
