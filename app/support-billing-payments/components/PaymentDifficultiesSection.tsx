import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PaymentDifficultiesSection() {
  return (
    <section
      id="payment-difficulties"
      className="w-full bg-[#FFFFFF] px-4 py-14 text-[#18133E] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        <div className="overflow-hidden rounded-2xl border border-[#ECEAF2] bg-white shadow-[0_6px_24px_rgba(17,12,58,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-[440px_1fr]">
            {/* Left Image Panel */}
            <div className="relative min-h-[300px] w-full bg-[#E6E5EA] sm:min-h-[360px] lg:min-h-[420px]">
              <Image
                src="/Images/support/3.png"
                alt="Person sitting on a sofa with a laptop and bills while holding a phone"
                fill
                sizes="(min-width: 1024px) 440px, 100vw"
                className="object-cover object-top"
              />
            </div>

            {/* Right Copy & Action Panel */}
            <div className="flex flex-col justify-center px-6 py-8 sm:px-10 lg:px-12 lg:py-10">
              <p className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#EC1C7A]">
                Payment difficulties
              </p>

              <h2 className="mt-2.5 text-[30px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#110C3A] sm:text-[38px]">
                Worried about paying your bill?
              </h2>

              <p className="mt-3.5 max-w-[560px] text-[13px] leading-[1.6] text-[#4A4563]">
                Contact us as soon as you can and ask what help may be
                available. You won&apos;t be judged — and the sooner we talk,
                the more options there may be.
              </p>

              <p className="mt-2.5 max-w-[560px] text-[12px] leading-[1.6] text-[#7A7691]">
                We can&apos;t promise payment plans or write-offs here — every
                situation is looked at individually.
              </p>

              {/* Primary CTA Button */}
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#EC1C7A] px-5 py-3 text-[12.5px] font-bold text-white shadow-[0_8px_22px_rgba(236,28,122,0.32)] transition-colors hover:bg-[#d6166d]"
                >
                  <span>Talk to us</span>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>

              {/* External Guidance Pill Links */}
              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <a
                  href="https://www.ofcom.org.uk/phones-telecoms-and-internet/advice-for-consumers/problems/struggling-to-pay-your-bills"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#E5E8F5] bg-[#F4F6FD] px-3.5 py-2 text-[11px] font-bold text-[#3D466E] transition-colors hover:bg-[#EAEFF9]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 shrink-0 text-[#4B5EA8]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <ellipse cx="12" cy="12" rx="3.8" ry="9" />
                    <path d="M3.5 12h17" />
                  </svg>
                  <span>Ofcom: help with bills</span>
                </a>

                <a
                  href="https://www.moneyhelper.org.uk/en/money-troubles/depts-and-how-we-can-help"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#E5E8F5] bg-[#F4F6FD] px-3.5 py-2 text-[11px] font-bold text-[#3D466E] transition-colors hover:bg-[#EAEFF9]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 shrink-0 text-[#4B5EA8]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 3l7 3v5.5c0 4.6-2.9 8.7-7 10.5-4.1-1.8-7-5.9-7-10.5V6l7-3z" />
                    <path d="M9.5 12h5M12 9.5v5" />
                  </svg>
                  <span>MoneyHelper: free debt advice</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
