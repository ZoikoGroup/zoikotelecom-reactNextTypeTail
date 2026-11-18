import React from "react";
import { FileText, TriangleAlert } from "lucide-react";
import SectionHeader from "./SectionHeader";

const DOCUMENTS = [
  { title: "Contract summary", text: "A short summary of the key terms, including price and length.", icon: FileText },
  { title: "Full terms", text: "The detailed terms and conditions for your service.", icon: FileText },
  { title: "Cancellation rights", text: "How to cancel, and any charges for leaving early.", icon: TriangleAlert },
] as const;

export default function ContractInformation() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="Before you agree"
          title="Your contract information"
          subtitle="You’ll always see these before you commit to anything."
        />

        <ol className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
          {DOCUMENTS.map(({ title, text, icon: Icon }, i) => (
            <li key={title} className="relative rounded-3xl border border-[#E6E9F2] bg-white p-7">
              <span aria-hidden="true" className="absolute right-7 top-6 text-4xl font-extrabold text-[#EEEBFB]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-white">
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-[#11183C]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5375]">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
