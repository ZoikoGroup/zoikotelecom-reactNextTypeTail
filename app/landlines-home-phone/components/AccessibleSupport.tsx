import React from "react";
import Link from "next/link";
import { ChevronRight, Ear, Eye, FileText, Users } from "lucide-react";
import SectionHeader from "./SectionHeader";

const SUPPORT = [
  { title: "Easy-read information", text: "Ask us for plain, easy-to-read versions of key information.", icon: FileText },
  { title: "Hearing or speech needs", text: "Tell us how you’d like to be contacted.", icon: Ear },
  { title: "Sight loss", text: "Ask for information in a format that suits you.", icon: Eye },
  { title: "Someone to help", text: "A family member or carer can contact us with you.", icon: Users },
] as const;

export default function AccessibleSupport() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="Accessible support"
          title="Help in a way that works for you"
          subtitle="Safety information should never be hidden in small print."
        />

        <ul className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SUPPORT.map(({ title, text, icon: Icon }) => (
            <li key={title} className="rounded-3xl border border-[#E6E9F2] bg-white p-6 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-white">
                <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-[#11183C]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5375]">{text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-8 py-3.5 text-base font-bold text-white shadow-[0_8px_22px_rgba(225,29,116,0.35)] transition-transform hover:scale-[1.01]"
          >
            Contact Zoiko
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
