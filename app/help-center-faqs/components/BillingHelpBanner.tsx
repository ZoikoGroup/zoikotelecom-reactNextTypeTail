import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const topicPills = [
  { label: "Bill anatomy", href: "#bill-anatomy" },
  { label: "Due dates", href: "#due-dates" },
  { label: "Disputes", href: "#disputes" },
  { label: "Payment difficulties", href: "#payment-difficulties" },
] as const;

export default function BillingHelpBanner() {
  return (
    <section
      id="billing-help"
      className="w-full bg-gradient-to-r from-[#1A1352] via-[#3A167A] to-[#8C1D7D] px-4 py-12 text-white antialiased sm:px-6 lg:py-16"
    >
      <div className="mx-auto flex w-full max-w-[1300px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">
        {/* Left: Copy, CTAs & Topic Pills */}
        <div className="max-w-[540px]">
          <p className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#FF8DC7]">
            Billing help
          </p>

          <h2 className="mt-2.5 text-[32px] font-black leading-[1.12] tracking-[-0.02em] text-white sm:text-[40px]">
            Questions about a bill?
          </h2>

          <p className="mt-3 max-w-[460px] text-[13.5px] leading-[1.6] text-white/80">
            See how to read a bill, what the dates mean and what to do about a
            charge you don&apos;t recognise.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/billing-payments"
              className="inline-flex items-center gap-2 rounded-lg bg-[#EC1C7A] px-5 py-3 text-[12.5px] font-bold text-white shadow-[0_8px_22px_rgba(236,28,122,0.35)] transition-colors hover:bg-[#d6166d]"
            >
              <span>Billing &amp; Payments</span>
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
            {topicPills.map((pill) => (
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

        {/* Right: Rounded Image Card */}
        <div className="relative h-[220px] w-full overflow-hidden rounded-2xl shadow-[0_14px_34px_rgba(12,6,36,0.35)] sm:h-[240px] lg:w-[410px] lg:shrink-0">
          <Image
            src="/Images/help/4.png"
            alt="Person reviewing paper bills and calculator on a floor"
            fill
            sizes="(min-width: 1024px) 410px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
