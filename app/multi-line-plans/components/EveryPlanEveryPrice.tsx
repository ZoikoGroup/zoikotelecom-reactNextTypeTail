import React from "react";
import { Info } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { PLANS, formatPrice, type PriceType } from "./plans";

const PRICE_ROWS: { type: PriceType; label: string }[] = [
  { type: "standard", label: "Standard price" },
  { type: "thirtyDay", label: "30-day price" },
  { type: "esim", label: "eSIM price" },
];

export default function EveryPlanEveryPrice() {
  return (
    <section id="all-plans" className="w-full scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1220px]">
        <SectionHeader
          tone="navy"
          align="left"
          eyebrow="All plans & prices"
          title="Every Zoiko plan, every published price"
          subtitle="Prices currently shown on Zoiko Telecom pages, per line, per month."
        />

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PLANS.map((plan) => (
            <li key={plan.id} className="rounded-2xl border border-[#E6E9F2] bg-white p-5">
              <p className="px-1 text-lg font-extrabold text-[#11183C]">{plan.name}</p>
              <p className="px-1 text-lg font-extrabold text-[#E11D74]">{plan.data}</p>
              <dl className="mt-3 space-y-1.5 border-t border-[#EEF0F7] pt-3 text-sm">
                {PRICE_ROWS.map(({ type, label }) => {
                  const price = plan.prices[type];
                  return (
                    <div key={type} className="flex items-baseline justify-between gap-2">
                      <dt className="text-[#4B5375]">{label}</dt>
                      <dd className={price === null ? "text-[#A0A5BA]" : "font-extrabold text-[#11183C]"}>
                        {price === null ? (
                          "Not shown"
                        ) : (
                          <>
                            {formatPrice(price)}
                            <span className="ml-0.5 text-xs font-semibold text-[#4B5375]">/mo</span>
                          </>
                        )}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </li>
          ))}
        </ul>

        <p className="mt-4 flex items-start gap-3 rounded-2xl bg-[#FFF4E5] px-5 py-4 text-sm text-[#7A4A00]">
          <Info className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />
          These amounts appear on different Zoiko Telecom pages (the EE Mobile Plans
          page, its 30-day view and the eSIM page) and may reflect different terms,
          channels or SIM types. Super-Z isn’t shown on the eSIM page. Your
          confirmed quote will state the exact price, term and VAT basis for each line.
        </p>
      </div>
    </section>
  );
}
