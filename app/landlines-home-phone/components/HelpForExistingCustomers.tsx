import React from "react";
import Link from "next/link";
import { Check, ChevronRight, MessageSquare, Wrench } from "lucide-react";
import SectionHeader from "./SectionHeader";

const SERVICE_HELP = [
  "Questions about your current landline",
  "Changing your service",
  "Billing and account help",
] as const;

const NOT_WORKING = [
  "Check your router has power and its lights are on",
  "Check the phone is plugged into the right port",
  "If it’s safe, restart the router once",
  "Still not working? Contact us",
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

function GradientIcon({ icon: Icon }: { icon: typeof Wrench }) {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-white">
      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
    </span>
  );
}

export default function HelpForExistingCustomers() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader eyebrow="Already have a landline?" title="Help for existing customers" />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#E6E9F2] bg-white p-8">
            <GradientIcon icon={MessageSquare} />
            <h3 className="mt-5 text-2xl font-extrabold text-[#11183C]">Get help with your service</h3>
            <CheckList items={SERVICE_HELP} />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-7 py-3.5 text-base font-bold text-white shadow-[0_8px_22px_rgba(225,29,116,0.35)]"
              >
                Contact Zoiko
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              </Link>
              <Link
                href="#faqs"
                className="inline-flex items-center justify-center rounded-xl border-2 border-[#11183C] px-7 py-3.5 text-base font-bold text-[#11183C] hover:bg-[#F5F6FB]"
              >
                Read FAQs
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-[#E6E9F2] bg-white p-8">
            <GradientIcon icon={Wrench} />
            <h3 className="mt-5 text-2xl font-extrabold text-[#11183C]">If your landline stops working</h3>
            <CheckList items={NOT_WORKING} />
            <p className="mt-5 rounded-xl bg-[#FFF4E5] px-4 py-4 text-sm text-[#92400E]">
              If you use a telecare or alarm device, don’t reset or unplug equipment it
              relies on — contact your device supplier and us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
