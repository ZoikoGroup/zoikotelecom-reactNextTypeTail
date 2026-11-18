import React from "react";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import SectionHeader from "./SectionHeader";

const PLACEHOLDERS = [
  { title: "No home phone plans listed yet", meta: "Only verified household offers will appear" },
  { title: "Every cost shown", meta: "Monthly · Calls · Equipment · Price rises" },
] as const;

const COMPARE_ROWS = [
  "Inclusive calls",
  "Per-minute charges",
  "Router / equipment",
  "Broadband needed?",
  "Monthly bill & term",
  "Price-rise dates",
] as const;

const PLAN_COLUMNS = ["Plan A", "Plan B", "Plan C"] as const;

export default function PlansAndPrices() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="Home phone plans"
          title="Plans and prices"
          subtitle="Home phone plans will appear here once they’re confirmed, with full prices and terms."
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Placeholder plans */}
          <div className="rounded-3xl border-2 border-dashed border-[#E2C8EE] bg-[repeating-linear-gradient(135deg,#FDF6FC_0_12px,#FFFFFF_12px_24px)] p-6 sm:p-8">
            <div className="space-y-4">
              {PLACEHOLDERS.map((p) => (
                <div key={p.title} className="flex items-center justify-between gap-4 rounded-2xl bg-white/85 px-6 py-5">
                  <span aria-hidden="true" className="text-lg font-extrabold text-[#D3D8E8]">£—</span>
                  <span className="text-right">
                    <span className="block text-sm font-extrabold text-[#434A6E] sm:text-base">{p.title}</span>
                    <span className="mt-1 block text-xs text-[#8A90A6] sm:text-sm">{p.meta}</span>
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-sm text-[#11183C]">
              Want to know what’s available? Our team can talk you through it.
            </p>
            <div className="mt-4 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(225,29,116,0.35)] sm:text-base"
              >
                Ask about home phone
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Address check (not live) */}
          <div className="rounded-3xl border border-[#E6E9F2] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-white">
                <Search className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-extrabold text-[#11183C]">Check service at your address</h3>
                <p id="address-check-status" className="text-sm text-[#B45309]">
                  Address checks aren’t live on this page yet.
                </p>
              </div>
            </div>

            <label htmlFor="home-phone-postcode" className="mt-6 block text-sm font-bold text-[#11183C]">
              Postcode
            </label>
            <div className="mt-2 flex gap-3">
              <input
                id="home-phone-postcode"
                placeholder="e.g. W1W 5PF"
                disabled
                aria-describedby="address-check-status"
                className="min-w-0 flex-1 cursor-not-allowed rounded-xl border border-[#E6E9F2] bg-[#F5F6FB] px-4 py-3 text-sm text-[#11183C] placeholder:text-[#8A90A6]"
              />
              <button
                type="button"
                disabled
                className="cursor-not-allowed rounded-xl bg-[#E3E6F2] px-5 text-sm font-bold text-[#8A90A6]"
              >
                Check
              </button>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#4B5375]">
              We’ll confirm service, your existing number and any safety needs with you directly.
            </p>
            <Link
              href="/contact"
              className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#C2185B] py-3.5 text-base font-bold text-white shadow-[0_10px_24px_rgba(225,29,116,0.3)]"
            >
              Ask our team
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Comparison placeholder */}
        <div className="mx-auto mt-6 max-w-6xl overflow-hidden rounded-3xl border border-[#E6E9F2] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">Home phone plan comparison — no plans listed yet</caption>
              <thead className="bg-[#F5F6FB] text-[#11183C]">
                <tr>
                  <th scope="col" className="w-[40%] px-5 py-4 font-bold">Compare</th>
                  {PLAN_COLUMNS.map((p) => (
                    <th key={p} scope="col" className="px-5 py-4 font-bold">{p}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EEF0F7]">
                {COMPARE_ROWS.map((row) => (
                  <tr key={row}>
                    <th scope="row" className="px-5 py-4 font-bold text-[#11183C]">{row}</th>
                    {PLAN_COLUMNS.map((p) => (
                      <td key={p} className="px-5 py-4 text-[#A0A5BA]">
                        <span aria-hidden="true">—</span>
                        <span className="sr-only">Not listed yet</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="px-5 pb-5 text-xs text-[#4B5375] sm:text-sm">
            When plans are available, you’ll be able to compare them like this. No plan
            details are shown until verified.
          </p>
        </div>
      </div>
    </section>
  );
}
