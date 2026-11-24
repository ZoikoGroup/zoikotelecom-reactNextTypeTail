import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function BillingMoreHelpCta() {
  return (
    <section
      id="billing-more-help"
      className="w-full bg-[#F5F6FB] px-4 py-14 text-[#18133E] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Card 1: Deep Indigo-Purple-to-Magenta Featured Card */}
          <div className="flex min-h-[340px] flex-col justify-between rounded-2xl bg-gradient-to-br from-[#2B0A6D] via-[#4C1188] to-[#8C1D6B] p-7 text-white shadow-[0_14px_34px_rgba(43,10,109,0.22)] sm:p-8">
            <div>
              <span className="inline-block rounded-md bg-white/12 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-white/85">
                Need more help?
              </span>
              <h2 className="mt-5 text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-white sm:text-[32px]">
                Questions about your bill?
              </h2>
              <p className="mt-3.5 max-w-[340px] text-[12.5px] leading-[1.6] text-white/80">
                Contact our team about any charge. Tell us the billing month and
                service — never card numbers, codes or passwords.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#EC1C7A] px-5 py-3.5 text-[12.5px] font-bold text-white shadow-[0_8px_20px_rgba(236,28,122,0.35)] transition-colors hover:bg-[#d6166d]"
              >
                <span>Contact support</span>
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Card 2: Accessibility assistance */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-[#ECEAF2] bg-white shadow-[0_8px_24px_rgba(24,19,62,0.04)]">
            <div className="relative h-[195px] w-full shrink-0 bg-[#E6E5EA]">
              <Image
                src="/Images/support/4.png"
                alt="Support team members with headsets working at laptops"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover object-top"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <h3 className="text-[17px] font-extrabold tracking-[-0.015em] text-[#18133E]">
                  Accessibility assistance
                </h3>
                <p className="mt-2.5 text-[12.5px] leading-[1.6] text-[#6E6A85]">
                  Ask for an accessible way to communicate, or a support
                  adjustment. Phone isn&apos;t the only route.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact#accessibility"
                  className="inline-flex items-center gap-1 text-[12px] font-bold text-[#EC1C7A] transition-colors hover:text-[#c71465]"
                >
                  <span>Ask for assistance</span>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Phone & email */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-[#ECEAF2] bg-white shadow-[0_8px_24px_rgba(24,19,62,0.04)]">
            <div className="relative h-[195px] w-full shrink-0 bg-[#E6E5EA]">
              <Image
                src="/Images/support/5.png"
                alt="Two people shaking hands across a table"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover object-center"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <h3 className="text-[17px] font-extrabold tracking-[-0.015em] text-[#18133E]">
                  Phone &amp; email
                </h3>
                <p className="mt-2.5 text-[12.5px] leading-[1.6] text-[#6E6A85]">
                  Current phone numbers, email and opening hours are listed on
                  our Contact page — we don&apos;t promise 24/7 or response
                  times here.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-[12px] font-bold text-[#EC1C7A] transition-colors hover:text-[#c71465]"
                >
                  <span>See contact options</span>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
