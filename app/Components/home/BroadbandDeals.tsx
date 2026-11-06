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
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] px-6 py-12 text-[#120b16] sm:px-8 lg:px-10">
      {/* Watermark */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute left-[30%] top-0 hidden select-none whitespace-nowrap text-[140px] font-extrabold uppercase leading-none text-transparent lg:block"
        style={{ WebkitTextStroke: "1px rgba(18,11,22,0.08)" }}
      >
        Black Friday
      </p>

      <div className="relative mx-auto max-w-[1300px]">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c4237f]">
          BT Broadband
        </p>
        <h2 className="mt-4 max-w-[520px] text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          Broadband Deals (FTTP / SoGEA / ADSL)
        </h2>
        <p className="mt-3 text-base text-[#3c3544]">
          Business-ready broadband over BT&apos;s network, sold separately from
          your phone line.
        </p>

        {/* Tabs */}
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <nav
            aria-label="Plan length"
            className="inline-flex flex-wrap items-center gap-1 self-start rounded-full bg-[#f3e6f2] p-1"
          >
            {TABS.map((tab) => (
              <Link
                key={tab.label}
                href={tab.href}
                className={
                  tab.active
                    ? "rounded-full bg-gradient-to-r from-[#c4237f] to-[#8a2fb3] px-5 py-2.5 text-sm font-bold text-white"
                    : "rounded-full px-5 py-2.5 text-sm font-semibold text-[#3c3544]"
                }
              >
                {tab.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-[#5d5566]">
            Standard prices. Not part of the Black Friday digital-line offer.
          </p>
        </div>

        {/* Plans */}
        <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <li
              key={plan.name}
              className="overflow-hidden rounded-2xl bg-white shadow-md"
            >
              <p className="bg-gradient-to-r from-[#c4237f] to-[#8a2fb3] py-2 text-center text-sm font-semibold text-white">
                Powered by BT&apos;s network
              </p>

              <div className="p-5">
                <h3 className="border-b border-[#ece8ee] pb-3 text-xl font-bold text-[#c4237f]">
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-sm text-[#5d5566]">Download speed</p>
                    <p className="text-2xl font-extrabold">{plan.speed}</p>
                  </div>
                  <p className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-[#c4237f]">
                      {plan.price}
                    </span>
                    <span className="text-sm text-[#5d5566]">/month</span>
                  </p>
                </div>

                <ul className="mt-4 space-y-2">
                  {FEATURES.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-[#3c3544]"
                    >
                      <Check
                        className="h-4 w-4 shrink-0 text-[#c4237f]"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Link
                    href="/ee-mobile-plans"
                    className="inline-flex items-center justify-center rounded-full border border-[#c4237f] bg-white px-4 py-3 text-sm font-bold text-[#c4237f]"
                  >
                    View Plan
                  </Link>
                  <Link
                    href="/ee-mobile-plans"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#c4237f] to-[#8a2fb3] px-4 py-3 text-sm font-bold text-white"
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
