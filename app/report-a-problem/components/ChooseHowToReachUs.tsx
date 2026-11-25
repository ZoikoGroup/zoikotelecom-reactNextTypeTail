import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ChooseHowToReachUs() {
  return (
    <section
      id="contact-options"
      className="w-full bg-[#F5F6FB] px-4 py-14 text-[#18133E] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Header */}
        <div className="text-center">
          <p className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#5B5675]">
            Contact options
          </p>
          <h2 className="mt-2.5 text-[32px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#110C3A] sm:text-[42px]">
            Choose how to reach us
          </h2>
          <p className="mt-2.5 text-[13px] leading-[1.6] text-[#6E6A85]">
            Current phone numbers and opening hours are on our Contact page — we
            don&apos;t list them here so they&apos;re never out of date.
          </p>
        </div>

        {/* Three-Column Contact Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Card 1: Recommended Coral-to-Crimson Featured Card */}
          <div className="flex min-h-[340px] flex-col justify-between rounded-2xl bg-gradient-to-br from-[#F4462A] via-[#D92B19] to-[#B51D0E] p-7 text-white shadow-[0_14px_32px_rgba(217,43,25,0.22)] sm:p-8">
            <div>
              <span className="inline-block rounded-md bg-black/20 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-white/90">
                Recommended
              </span>

              <h3 className="mt-5 text-[24px] font-extrabold leading-[1.18] tracking-[-0.02em] text-white sm:text-[26px]">
                Contact support
              </h3>

              <p className="mt-3 max-w-[320px] text-[12.5px] leading-[1.6] text-white/85">
                Use the enquiry form or call us. Tell us the service,
                what&apos;s wrong and what you&apos;ve tried.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-white px-5 py-3.5 text-[12.5px] font-bold text-[#B91C1C] shadow-[0_6px_18px_rgba(17,12,58,0.14)] transition-colors hover:bg-[#FFF7F6]"
              >
                <span>Go to Contact page</span>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-[#ECEAF2] bg-white shadow-[0_6px_22px_rgba(17,12,58,0.035)]">
            <div className="relative h-[168px] w-full shrink-0 bg-[#E6E5EA]">
              <Image
                src="/Images/prob/6.png"
                alt="Two people shaking hands across a table"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover object-center"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <h3 className="text-[17px] font-extrabold tracking-[-0.015em] text-[#110C3A]">
                  Phone
                </h3>
                <p className="mt-2.5 text-[12.5px] leading-[1.6] text-[#6E6A85]">
                  Numbers and hours are on our Contact page. We don&apos;t
                  promise 24/7 support or response times.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-[12px] font-bold text-[#EC1C7A] transition-colors hover:text-[#c71465]"
                >
                  <span>See phone details</span>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Accessible help */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-[#ECEAF2] bg-white shadow-[0_6px_22px_rgba(17,12,58,0.035)]">
            <div className="relative h-[168px] w-full shrink-0 bg-[#E6E5EA]">
              <Image
                src="/Images/prob/5.png"
                alt="Friendly support specialist smiling in a bright office"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover object-top"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <h3 className="text-[17px] font-extrabold tracking-[-0.015em] text-[#110C3A]">
                  Accessible help
                </h3>
                <p className="mt-2.5 text-[12.5px] leading-[1.6] text-[#6E6A85]">
                  Ask for another way to communicate. You don&apos;t have to
                  tell us about your health.
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
        </div>
      </div>
    </section>
  );
}
