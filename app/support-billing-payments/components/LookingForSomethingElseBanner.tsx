import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const moreHelpPills = [
  { label: "eSIM & mobile", href: "#esim-mobile" },
  { label: "Broadband", href: "#broadband-fibre" },
  { label: "Account", href: "#account-management" },
  { label: "Complaints", href: "#complaints" },
] as const;

export default function LookingForSomethingElseBanner() {
  return (
    <section
      id="looking-for-something-else"
      className="w-full bg-gradient-to-r from-[#1A1352] via-[#3A167A] to-[#8C1D7D] px-4 py-12 text-white antialiased sm:px-6 lg:py-16"
    >
      <div className="mx-auto flex w-full max-w-[1300px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">
        {/* Left: Copy, CTAs & Topic Pills */}
        <div className="max-w-[700px]">
          <p className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#FF8DC7]">
            More help
          </p>

          <h2 className="mt-2.5 text-[32px] font-black leading-[1.12] tracking-[-0.02em] text-white sm:text-[40px]">
            Looking for something else?
          </h2>

          <p className="mt-3 max-w-[490px] text-[13.5px] leading-[1.6] text-white/80">
            Browse every topic in our Help Centre — mobile, broadband, account
            and more.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="#help-hero"
              className="inline-flex items-center gap-2 rounded-lg bg-[#EC1C7A] px-5 py-3 text-[12.5px] font-bold text-white shadow-[0_8px_22px_rgba(236,28,122,0.35)] transition-colors hover:bg-[#d6166d]"
            >
              <span>Help Centre &amp; FAQs</span>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/5 px-6 py-3 text-[12.5px] font-bold text-white transition-colors hover:bg-white/15"
            >
              Contact us
            </Link>
          </div>

          {/* Bottom Pill Links */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {moreHelpPills.map((pill) => (
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

        {/* Right: Rounded Monochrome Image Card */}
        <div className="relative h-[220px] w-full overflow-hidden rounded-2xl shadow-[0_14px_34px_rgba(12,6,36,0.35)] sm:h-[240px] lg:w-[410px] lg:shrink-0">
          <Image
            src="/Images/support/6.png"
            alt="People collaborating at laptops in a meeting room"
            fill
            sizes="(min-width: 1024px) 410px, 100vw"
            className="object-cover grayscale contrast-105"
          />
        </div>
      </div>
    </section>
  );
}
