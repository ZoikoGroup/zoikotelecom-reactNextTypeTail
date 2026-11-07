import Link from "next/link";
import {
  Box,
  Briefcase,
  Phone,
  Sparkle,
  Tag,
  Wifi,
  type LucideIcon,
} from "lucide-react";

type Deal = {
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: LucideIcon;
  hero: boolean;
};

const DEALS: readonly Deal[] = [
  {
    title: "Digital Phone Lines",
    description: "20% off the monthly charge for 6 months",
    cta: "Get digital lines",
    href: "/business/digital-phone-lines",
    icon: Phone,
    hero: true,
  },
  {
    title: "BT Broadband",
    description: "FTTP, SoGEA & ADSL from £22/month",
    cta: "View broadband deals",
    href: "/bt-broadband",
    icon: Wifi,
    hero: false,
  },
  {
    title: "EE eSIM Plans",
    description: "From £9.50/month · instant QR activation",
    cta: "View eSIM plans",
    href: "/ee-mobile-plans",
    icon: Tag,
    hero: false,
  },
  {
    title: "Business Solutions",
    description: "Connectivity for offices and growing teams",
    cta: "Request a quote",
    href: "/business-solutions",
    icon: Briefcase,
    hero: false,
  },
  {
    title: "SIM & Broadband Bundles",
    description: "One provider for your calls, data and mobiles",
    cta: "Ask about bundles",
    href: "/broadband",
    icon: Box,
    hero: false,
  },
] as const;

export default function BlackFridaySale() {
  return (
    <section id="deals" className="relative w-full overflow-hidden bg-[#fdf3ea] px-6 pb-12 pt-10 text-[#120b16] sm:px-8 lg:px-10">
      {/* Hanging tags */}
      <div
        aria-hidden="true"
        className="absolute left-6 top-0 hidden flex-col items-center md:flex lg:left-[6%]"
      >
        <span className="h-12 w-px bg-[#d4145a]/60" />
        <div className="rounded-lg bg-[#120b16] px-4 py-2 text-center text-white shadow-lg">
          <span className="mx-auto mb-1 block h-1.5 w-1.5 rounded-full bg-[#f0459f]" />
          <p className="text-sm font-bold uppercase leading-4 text-[#f0459f]">
            Black
          </p>
          <p className="text-sm font-extrabold uppercase leading-4">Friday</p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute right-6 top-0 hidden flex-col items-center md:flex lg:right-[6%]"
      >
        <span className="h-10 w-px bg-[#d4145a]/60" />
        <div className="rounded-lg bg-[#120b16] px-4 py-2 text-center text-white shadow-lg">
          <p className="text-sm font-bold uppercase leading-4 text-[#f0459f]">
            Sale
          </p>
          <p className="text-sm font-extrabold uppercase leading-4">
            27–30 Nov
          </p>
        </div>
      </div>

      {/* Sparkles */}
      <Sparkle
        aria-hidden="true"
        className="absolute left-[3%] top-[50%] hidden h-6 w-6 fill-[#c9a2e8] text-[#c9a2e8] lg:block"
      />
      <Sparkle
        aria-hidden="true"
        className="absolute right-[3%] top-[40%] hidden h-6 w-6 fill-[#c9a2e8] text-[#c9a2e8] lg:block"
      />

      <div className="relative mx-auto max-w-[1300px]">
        {/* Heading */}
        <div className="pt-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c4237f]">
            Black Friday 2026
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Black Friday Sale 2026
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-4 block h-1 w-20 rounded-full bg-gradient-to-r from-[#c4237f] to-[#8a2fb3]"
          />
        </div>

        {/* Cards */}
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {DEALS.map((deal) => {
            const Icon = deal.icon;
            return (
              <li
                key={deal.title}
                className={
                  deal.hero
                    ? "relative flex flex-col items-center overflow-hidden rounded-2xl border-2 border-[#d4145a] bg-[#120b16] px-5 pb-6 pt-8 text-center text-white shadow-xl"
                    : "relative flex flex-col items-center overflow-hidden rounded-2xl bg-white px-5 pb-6 pt-8 text-center shadow-md"
                }
              >
                {deal.hero && (
                  <span className="absolute right-[-34px] top-4 w-[130px] rotate-45 bg-gradient-to-r from-[#c4237f] to-[#8a2fb3] py-1 text-center text-sm font-bold uppercase tracking-[0.08em] text-white">
                    Hero deal
                  </span>
                )}

                <span
                  className={
                    deal.hero
                      ? "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#c4237f] to-[#8a2fb3] text-white"
                      : "flex h-12 w-12 items-center justify-center rounded-xl bg-[#fde4f1] text-[#c4237f]"
                  }
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>

                <h3 className="mt-4 text-lg font-bold leading-6">
                  {deal.title}
                </h3>
                <p
                  className={
                    deal.hero
                      ? "mt-2 text-sm font-semibold leading-5 text-[#f7a3d0]"
                      : "mt-2 text-sm leading-5 text-[#3c3544]"
                  }
                >
                  {deal.description}
                </p>

                <Link
                  href={deal.href}
                  className={
                    deal.hero
                      ? "mt-auto pt-6 text-sm font-bold text-[#f0459f]"
                      : "mt-auto pt-6 text-sm font-bold text-[#c4237f]"
                  }
                >
                  {deal.cta} →
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="mt-6 text-center text-sm text-[#5d5566]">
          The Black Friday discount applies to selected digital phone line
          packages only. Broadband and eSIM plans are shown at their standard
          prices.
        </p>
      </div>
    </section>
  );
}
