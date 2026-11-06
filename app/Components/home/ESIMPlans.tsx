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
    <section className="relative w-full overflow-hidden bg-[#FFFFFF] px-6 py-12 text-[#120b16] sm:px-8 lg:px-12 lg:py-16">
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
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[560px]">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c4237f]">
              EE eSIM Plans
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              eSIM Plans for your team
            </h2>
            <p className="mt-3 text-base text-[#3c3544]">
              All eSIMs activate instantly via QR code and need no physical SIM.
            </p>
          </div>

          {/* Rounded Corner Image Header */}
          <div className="relative h-44 w-72 shrink-0 overflow-hidden sm:h-48 sm:w-80 lg:-mt-4">
            <Image
              src="/images/home/4.png"
              alt="Team member outdoors using mobile device"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Navigation Tabs & Disclaimer */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <nav
            aria-label="Plan duration"
            className="inline-flex flex-wrap items-center gap-1 self-start rounded-full bg-[#f3e6f2] p-1.5"
          >
            {TABS.map((tab) => (
              <Link
                key={tab.label}
                href={tab.href}
                className={
                  tab.active
                    ? "rounded-full bg-gradient-to-r from-[#c4237f] to-[#8a2fb3] px-6 py-2.5 text-sm font-bold text-white shadow-sm"
                    : "rounded-full px-6 py-2.5 text-sm font-semibold text-[#3c3544] transition-colors hover:text-[#120b16]"
                }
              >
                {tab.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-[#5d5566] sm:text-sm">
            Standard prices. Not part of the Black Friday digital-line offer.
          </p>
        </div>

        {/* Plan Cards */}
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <li
              key={plan.name}
              className="overflow-hidden rounded-3xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              {/* Header Banner */}
              <p className="bg-gradient-to-r from-[#c4237f] to-[#8a2fb3] py-2 text-center text-xs font-semibold text-white">
                Powered by EE&apos;s network
              </p>

              <div className="p-6">
                <h3 className="border-b border-[#ece8ee] pb-4 text-xl font-bold text-[#c4237f]">
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs text-[#5d5566]">Data</p>
                    <p className="text-3xl font-extrabold text-[#120b16]">
                      {plan.data}
                    </p>
                  </div>
                  <p className="flex items-baseline gap-0.5">
                    <span className="text-3xl font-extrabold text-[#120b16]">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#5d5566]">/month</span>
                  </p>
                </div>

                {/* Feature List */}
                <ul className="mt-6 space-y-3">
                  {FEATURES.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-[#3c3544]"
                    >
                      <Check
                        className="h-4 w-4 shrink-0 text-[#c4237f]"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <Link
                    href="/ee-mobile-plans"
                    className="inline-flex items-center justify-center rounded-full border border-[#c4237f] bg-white px-4 py-3 text-xs font-bold text-[#c4237f] transition-colors hover:bg-[#fcf5f9]"
                  >
                    View Plan
                  </Link>
                  <Link
                    href="/ee-mobile-plans"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#c4237f] to-[#8a2fb3] px-4 py-3 text-xs font-bold text-white transition-opacity hover:opacity-95"
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
