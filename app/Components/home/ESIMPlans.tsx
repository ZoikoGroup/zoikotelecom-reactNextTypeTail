import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const TABS = [
  { label: "24 Month Plan", href: "/ee-mobile-plans", active: true },
  { label: "12 Month Plan", href: "/ee-mobile-plans", active: false },
  { label: "30 Day Plan", href: "/ee-mobile-plans", active: false },
] as const;

const PLANS = [
  {
    name: "Z-Essentials",
    data: "10GB",
    price: "£9.50",
    viewHref: "/esim/z-essentials",
    buyHref: "/esim/z-essentials/buy",
  },
  {
    name: "Z-Comfort",
    data: "20GB",
    price: "£11",
    viewHref: "/esim/z-comfort",
    buyHref: "/esim/z-comfort/buy",
  },
  {
    name: "Z-Royal",
    data: "50GB",
    price: "£15",
    viewHref: "/esim/z-royal",
    buyHref: "/esim/z-royal/buy",
  },
] as const;

const FEATURES = [
  "No long-term contracts",
  "5G-ready SIMs",
  "Inclusive EU roaming",
  "Instant QR activation",
  "UK customer support",
] as const;

export default function ESIMPlans() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFFFFF] px-4 py-8 text-[#120b16] sm:px-8 sm:py-12 lg:px-12 lg:py-16">
      {/* Watermark in top right */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-6 hidden select-none whitespace-nowrap text-[150px] font-extrabold uppercase leading-none text-transparent lg:block"
        style={{ WebkitTextStroke: "1px rgba(18,11,22,0.05)" }}
      >
        BLACK FRIDAY
      </p>

      <div className="relative mx-auto max-w-[1300px]">
        {/* Header Content & Right Image */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between lg:items-start">
          <div className="max-w-[560px]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c4237f] sm:text-sm">
              EE eSIM Plans
            </p>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight sm:mt-3 sm:text-3xl lg:text-4xl">
              eSIM Plans for your team
            </h2>
            <p className="mt-2 text-sm text-[#3c3544] sm:mt-3 sm:text-base">
              All eSIMs activate instantly via QR code and need no physical SIM.
            </p>
          </div>

          {/* Header Image */}
          <div className="relative h-40 w-full max-w-[320px] shrink-0 overflow-hidden rounded-2xl shadow-sm sm:h-48 sm:w-80 lg:-mt-4">
            <Image
              src="/images/sale/show.png"
              alt="Team member outdoors using mobile device"
              fill
              sizes="(min-width: 640px) 320px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Navigation Tabs & Disclaimer */}
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 md:flex-row md:items-center md:justify-between">
          <nav
            aria-label="Plan duration"
            className="inline-flex w-full overflow-x-auto rounded-full bg-[#f3e6f2] p-1.5 sm:w-auto"
          >
            <div className="flex w-full justify-between sm:w-auto sm:justify-start">
              {TABS.map((tab) => (
                <Link
                  key={tab.label}
                  href={tab.href}
                  className={
                    tab.active
                      ? "flex-1 whitespace-nowrap rounded-full bg-gradient-to-r from-[#c4237f] to-[#8a2fb3] px-4 py-2 text-center text-xs font-bold text-white shadow-sm transition sm:flex-none sm:px-6 sm:py-2.5 sm:text-sm"
                      : "flex-1 whitespace-nowrap rounded-full px-4 py-2 text-center text-xs font-semibold text-[#3c3544] transition-colors hover:text-[#120b16] sm:flex-none sm:px-6 sm:py-2.5 sm:text-sm"
                  }
                >
                  {tab.label}
                </Link>
              ))}
            </div>
          </nav>
          <p className="text-xs text-[#5d5566] sm:text-sm">
            Standard prices. Not part of the Black Friday digital-line offer.
          </p>
        </div>

        {/* Plan Cards */}
        <ul className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <li
              key={plan.name}
              className="flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-md border border-gray-100"
            >
              <div>
                {/* Header Banner */}
                <p className="bg-gradient-to-r from-[#c4237f] to-[#8a2fb3] py-2 text-center text-xs font-semibold text-white">
                  Powered by EE&apos;s network
                </p>

                <div className="p-5 sm:p-6">
                  <h3 className="border-b border-[#ece8ee] pb-3 text-lg font-bold text-[#c4237f] sm:pb-4 sm:text-xl">
                    {plan.name}
                  </h3>

                  <div className="mt-4 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-xs text-[#5d5566]">Data</p>
                      <p className="text-2xl font-extrabold text-[#120b16] sm:text-3xl">
                        {plan.data}
                      </p>
                    </div>
                    <p className="flex items-baseline gap-0.5">
                      <span className="text-2xl font-extrabold text-[#120b16] sm:text-3xl">
                        {plan.price}
                      </span>
                      <span className="text-xs text-[#5d5566]">/month</span>
                    </p>
                  </div>

                  {/* Feature List */}
                  <ul className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
                    {FEATURES.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-xs text-[#3c3544] sm:text-sm"
                      >
                        <Check
                          className="h-4 w-4 shrink-0 text-[#c4237f]"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 sm:p-6 sm:pt-0">
                <div className="flex flex-col gap-2.5 sm:grid sm:grid-cols-2 sm:gap-3">
                  <Link
                    href="/ee-mobile-plans"
                    className="inline-flex w-full items-center justify-center rounded-full border border-[#c4237f] bg-white px-3 py-2.5 text-center text-xs font-bold text-[#c4237f] transition-colors hover:bg-[#fcf5f9] sm:px-4 sm:py-3"
                  >
                    View Plan
                  </Link>
                  <Link
                    href="/ee-mobile-plans"
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#c4237f] to-[#8a2fb3] px-3 py-2.5 text-center text-xs font-bold text-white transition-opacity hover:opacity-95 sm:px-4 sm:py-3"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
