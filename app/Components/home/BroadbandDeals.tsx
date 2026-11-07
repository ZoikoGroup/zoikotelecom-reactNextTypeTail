import Link from "next/link";
import { Check } from "lucide-react";

const TABS = [
  { label: "24 Month Plan", href: "/ee-mobile-plans", active: true },
  { label: "18 Month Plan", href: "/ee-mobile-plans", active: false },
  { label: "12 Month Plan", href: "/ee-mobile-plans", active: false },
] as const;

const PLANS = [
  {
    name: "Sonic Fibre",
    speed: "0.5 Mbps",
    price: "£22",
    viewHref: "/broadband/sonic-fibre",
    buyHref: "/broadband/sonic-fibre/buy",
  },
  {
    name: "Blitz Fibre",
    speed: "40 Mbps",
    price: "£35",
    viewHref: "/broadband/blitz-fibre",
    buyHref: "/broadband/blitz-fibre/buy",
  },
  {
    name: "Fibre Streamer",
    speed: "80 Mbps",
    price: "£39.99",
    viewHref: "/broadband/fibre-streamer",
    buyHref: "/broadband/fibre-streamer/buy",
  },
] as const;

const FEATURES = [
  "Unlimited usage",
  "Superfast fibre speeds",
  "No hidden fees",
  "UK-based customer support",
  "Flexible contract options",
] as const;

export default function BroadbandDeals() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] px-4 py-8 text-[#120b16] sm:px-8 sm:py-12 lg:px-10">
      {/* Watermark */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute left-[30%] top-0 hidden select-none whitespace-nowrap text-[140px] font-extrabold uppercase leading-none text-transparent lg:block"
        style={{ WebkitTextStroke: "1px rgba(18,11,22,0.08)" }}
      >
        Black Friday
      </p>

      <div className="relative mx-auto max-w-[1300px]">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c4237f] sm:text-sm">
          BT Broadband
        </p>
        <h2 className="mt-2 max-w-[520px] text-2xl font-extrabold leading-tight tracking-tight sm:mt-4 sm:text-3xl lg:text-4xl">
          Broadband Deals (FTTP / SoGEA / ADSL)
        </h2>
        <p className="mt-2 text-sm text-[#3c3544] sm:mt-3 sm:text-base">
          Business-ready broadband over BT&apos;s network, sold separately from
          your phone line.
        </p>

        {/* Tabs & Note */}
        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <nav
            aria-label="Plan length"
            className="inline-flex w-full overflow-x-auto rounded-full bg-[#f3e6f2] p-1 sm:w-auto"
          >
            <div className="flex w-full justify-between sm:w-auto sm:justify-start">
              {TABS.map((tab) => (
                <Link
                  key={tab.label}
                  href={tab.href}
                  className={
                    tab.active
                      ? "flex-1 whitespace-nowrap rounded-full bg-gradient-to-r from-[#c4237f] to-[#8a2fb3] px-3 py-2 text-center text-xs font-bold text-white transition sm:flex-none sm:px-5 sm:py-2.5 sm:text-sm"
                      : "flex-1 whitespace-nowrap rounded-full px-3 py-2 text-center text-xs font-semibold text-[#3c3544] transition hover:text-[#c4237f] sm:flex-none sm:px-5 sm:py-2.5 sm:text-sm"
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

        {/* Plans */}
        <ul className="mt-6 grid gap-6 sm:mt-8 md:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <li
              key={plan.name}
              className="flex flex-col justify-between overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div>
                <p className="bg-gradient-to-r from-[#c4237f] to-[#8a2fb3] py-2 text-center text-xs font-semibold text-white sm:text-sm">
                  Powered by BT&apos;s network
                </p>

                <div className="p-4 sm:p-5">
                  <h3 className="border-b border-[#ece8ee] pb-3 text-lg font-bold text-[#c4237f] sm:text-xl">
                    {plan.name}
                  </h3>

                  <div className="mt-4 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-xs text-[#5d5566] sm:text-sm">
                        Download speed
                      </p>
                      <p className="text-xl font-extrabold sm:text-2xl">
                        {plan.speed}
                      </p>
                    </div>
                    <p className="flex items-baseline gap-1">
                      <span className="text-xl font-extrabold text-[#c4237f] sm:text-2xl">
                        {plan.price}
                      </span>
                      <span className="text-xs text-[#5d5566] sm:text-sm">
                        /month
                      </span>
                    </p>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {FEATURES.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs text-[#3c3544] sm:text-sm"
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

              <div className="p-4 pt-0 sm:p-5 sm:pt-0">
                <div className="flex flex-col gap-2.5 sm:grid sm:grid-cols-2 sm:gap-3">
                  <Link
                    href="/ee-mobile-plans"
                    className="inline-flex w-full items-center justify-center rounded-full border border-[#c4237f] bg-white px-3 py-2.5 text-center text-xs font-bold text-[#c4237f] transition hover:bg-[#c4237f]/5 sm:px-4 sm:py-3 sm:text-sm"
                  >
                    View Plan
                  </Link>
                  <Link
                    href="/ee-mobile-plans"
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#c4237f] to-[#8a2fb3] px-3 py-2.5 text-center text-xs font-bold text-white transition hover:opacity-95 sm:px-4 sm:py-3 sm:text-sm"
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
