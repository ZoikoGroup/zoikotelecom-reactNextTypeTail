import React from "react";
import { CircleDot, Lock, Shield, Users } from "lucide-react";
import SectionHeader from "./SectionHeader";

const SECURITY_ITEMS = [
  { title: "Role-based access", text: "Admin and user permissions kept separate.", icon: Users },
  { title: "Recording policy", text: "Only where approved, with consent and retention rules.", icon: CircleDot },
  { title: "Secure admin", text: "Account changes protected and confirmed.", icon: Lock },
  { title: "Your data", text: "We don’t put personal details into website analytics.", icon: Shield },
] as const;

export default function SecurityAndPrivacy() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="Security & privacy"
          title="Built with security and privacy in mind"
          className="max-w-2xl"
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SECURITY_ITEMS.map(({ title, text, icon: Icon }) => (
            <div
              key={title}
              className="rounded-3xl border border-[#E6E9F2] bg-white p-6 shadow-[0_10px_30px_rgba(17,24,60,0.06)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-white">
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-[#11183C]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5375]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
