import React from "react";
import Link from "next/link";
import { Check, ChevronRight, Receipt, Shield } from "lucide-react";
import SectionHeader from "./SectionHeader";

const UNEXPECTED_CHARGES = [
  "Check which numbers were called and when",
  "Check whether your plan includes those destinations",
  "Contact us and we’ll explain the charges",
] as const;

const BILLING_QUERY = [
  "Have your account or bill reference ready",
  "Share only the details we ask for",
  "Don’t paste full call records into a message — we’ll ask securely",
] as const;

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-[#4B5375] sm:text-base">
          <Check className="mt-1 h-4 w-4 shrink-0 text-[#E11D74]" strokeWidth={2.5} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function GradientIcon({ icon: Icon }: { icon: typeof Receipt }) {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-white">
      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
    </span>
  );
}

export default function HelpWithCallCharges() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader eyebrow="Already a customer?" title="Help with international call charges" />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-[#E6E9F2] bg-white p-7 sm:p-8">
            <GradientIcon icon={Receipt} />
            <h3 className="mt-5 text-xl font-extrabold text-[#11183C]">Unexpected charges on your bill?</h3>
            <CheckList items={UNEXPECTED_CHARGES} />
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(225,29,116,0.35)] transition-transform hover:scale-[1.01] sm:text-base"
            >
              Contact billing support
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </div>

          <div className="rounded-3xl border border-[#E6E9F2] bg-white p-7 sm:p-8">
            <GradientIcon icon={Shield} />
            <h3 className="mt-5 text-xl font-extrabold text-[#11183C]">Raising a billing query</h3>
            <CheckList items={BILLING_QUERY} />
            <p className="mt-5 rounded-xl bg-[#FFF4E5] px-5 py-4 text-sm text-[#92400E]">
              We’ll give you a reference so you can follow up.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-5 flex max-w-6xl flex-col gap-4 rounded-3xl border border-dashed border-[#C9CEE0] bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-extrabold text-[#11183C]">View your call usage online</h3>
            <p className="mt-1 text-sm text-[#4B5375]">
              Signing in to see international usage, and business controls such as
              destination restrictions or spending limits, aren’t available yet.
            </p>
          </div>
          <button
            type="button"
            disabled
            className="shrink-0 cursor-not-allowed rounded-xl bg-[#E3E6F2] px-5 py-3 text-sm font-bold text-[#8A90A6]"
          >
            Sign in — coming soon
          </button>
        </div>
      </div>
    </section>
  );
}
