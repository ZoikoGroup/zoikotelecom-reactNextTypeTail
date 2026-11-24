import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const paymentMethods = [
  {
    label: "Debit card",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 text-[#3B82F6]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18" />
        <path d="M7 15h3" />
      </svg>
    ),
  },
  {
    label: "Credit card",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 text-[#2563EB]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18" />
        <path d="M15 15h3" />
      </svg>
    ),
  },
  {
    label: "Selected digital wallets",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 text-[#7C3AED]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="7" y="3" width="10" height="18" rx="2.5" />
        <path d="M11 7h2" />
      </svg>
    ),
  },
] as const;

export default function PaymentMethodsAndMissedPayments() {
  return (
    <section
      id="payment-guidance"
      className="w-full bg-white px-4 py-14 text-[#18133E] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Header */}
        <div className="max-w-[660px]">
          <p className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#5B5675]">
            Paying
          </p>
          <h2 className="mt-2.5 text-[32px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#110C3A] sm:text-[42px]">
            Payment methods and missed payments
          </h2>
          <p className="mt-3 text-[13px] leading-[1.6] text-[#6E6A85]">
            Our FAQs mention debit cards, credit cards and selected digital
            wallets. Confirm which methods apply to your service before paying —
            no payment can be made on this page.
          </p>

          {/* Payment Method Pills */}
          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            {paymentMethods.map((method) => (
              <span
                key={method.label}
                className="inline-flex items-center gap-2 rounded-full border border-[#ECEAF2] bg-white px-3.5 py-1.5 text-[11.5px] font-bold text-[#110C3A] shadow-[0_2px_8px_rgba(17,12,58,0.03)]"
              >
                {method.icon}
                <span>{method.label}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Two-Column Feature Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card 1: Missed a payment? */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-[#ECEAF2] bg-white shadow-[0_4px_18px_rgba(17,12,58,0.035)]">
            <div className="relative h-[220px] w-full shrink-0 sm:h-[320px]">
              <Image
                src="/Images/support/7.png"
                alt="Customer paying with a phone at a card reader in store"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <span className="inline-block rounded-md bg-[#E8ECFC] px-2.5 py-1 text-[9.5px] font-bold text-[#4B5EA8]">
                  Due dates
                </span>

                <h3 className="mt-3.5 text-[18px] font-extrabold tracking-[-0.015em] text-[#110C3A]">
                  Missed a payment?
                </h3>

                <p className="mt-2 text-[12.5px] leading-[1.6] text-[#6E6A85]">
                  Contact us as soon as you can. We won&apos;t guess fees or
                  what happens next here — your agreement sets that.
                </p>
              </div>

              <div className="mt-5 border-t border-[#F1EFF6] pt-4">
                <p className="text-[11px] text-[#7A7691]">
                  <span className="font-extrabold text-[#110C3A]">
                    Depends on:
                  </span>{" "}
                  your agreement.
                </p>

                <Link
                  href="/contact"
                  className="mt-2.5 inline-flex items-center gap-1 text-[12px] font-bold text-[#EC1C7A] transition-colors hover:text-[#c71465]"
                >
                  <span>Contact support</span>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Payment didn't go through? */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-[#ECEAF2] bg-white shadow-[0_4px_18px_rgba(17,12,58,0.035)]">
            <div className="relative h-[220px] w-full shrink-0 sm:h-[320px]">
              <Image
                src="/Images/support/2.png"
                alt="Laptop displaying financial charts and account billing analytics"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <span className="inline-block rounded-md bg-[#FBF0DC] px-2.5 py-1 text-[9.5px] font-bold text-[#9C6F24]">
                  Failed payment
                </span>

                <h3 className="mt-3.5 text-[18px] font-extrabold tracking-[-0.015em] text-[#110C3A]">
                  Payment didn&apos;t go through?
                </h3>

                <p className="mt-2 text-[12.5px] leading-[1.6] text-[#6E6A85]">
                  Ask us to confirm next steps. Never send card details,
                  passwords or one-time codes in a message.
                </p>
              </div>

              <div className="mt-5 border-t border-[#F1EFF6] pt-4">
                <p className="text-[11px] text-[#7A7691]">
                  <span className="font-extrabold text-[#110C3A]">
                    Depends on:
                  </span>{" "}
                  your payment method.
                </p>

                <Link
                  href="#payment-guidance"
                  className="mt-2.5 inline-flex items-center gap-1 text-[12px] font-bold text-[#EC1C7A] transition-colors hover:text-[#c71465]"
                >
                  <span>Get help</span>
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
