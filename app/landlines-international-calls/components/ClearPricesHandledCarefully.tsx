import React from "react";
import { FileText, Lock, Scale, Users } from "lucide-react";
import SectionHeader from "./SectionHeader";

const TRUST_ITEMS = [
  { title: "Current rates only", text: "Every rate will show when it applies from, VAT and any exclusions.", icon: FileText },
  { title: "No “cheapest” claims", text: "We don’t claim to be cheapest without evidence.", icon: Scale },
  { title: "Your privacy", text: "We don’t record which numbers you look up or store dialled numbers from this page.", icon: Lock },
  { title: "Accessible help", text: "Can’t use this page easily? Ask us for a list of rates in another format.", icon: Users },
] as const;

export default function ClearPricesHandledCarefully() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#060C36] via-[#0B1450] to-[#2A1A6E] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader dark eyebrow="Trust & privacy" title="Clear prices, handled carefully" />

        <ul className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map(({ title, text, icon: Icon }) => (
            <li key={title} className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm">
              <Icon className="h-6 w-6 text-[#F472B6]" strokeWidth={2} aria-hidden="true" />
              <p className="mt-5 text-base font-extrabold">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#C7CCE6]">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
