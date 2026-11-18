import React from "react";
import { ArrowLeftRight, FileText, TriangleAlert } from "lucide-react";
import SectionHeader from "./SectionHeader";

const CARDS = [
  {
    title: "Keep your number",
    text: "You may be able to keep your home phone number. It’s a request that your current and new providers must confirm.",
    icon: FileText,
    steps: [
      "Ask us to request a number transfer",
      "Providers check the number and your details",
      "Keep your old service until it’s confirmed",
    ],
    warning: "Don’t cancel your current line yourself — you could lose your number.",
  },
  {
    title: "Switching provider",
    text: "For most home landline switches, One Touch Switch means you only contact your new provider, who arranges it with your old one.",
    icon: ArrowLeftRight,
    steps: [
      "Choose your new service",
      "Your new provider arranges the switch",
      "Your old provider tells you about any early-termination charges",
    ],
    warning: null,
  },
] as const;

export default function KeepingYourNumber() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="Your number & switching"
          title="Keeping your number and changing provider"
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {CARDS.map(({ title, text, icon: Icon, steps, warning }) => (
            <div key={title} className="rounded-3xl border border-[#E6E9F2] bg-white p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-white">
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-2xl font-extrabold text-[#11183C]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4B5375] sm:text-base">{text}</p>
              <ol className="mt-5 space-y-3">
                {steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm font-bold text-[#11183C] sm:text-base">
                    <span
                      aria-hidden="true"
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7B3FE4] text-xs text-white"
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              {warning && (
                <p className="mt-5 flex items-start gap-3 rounded-2xl bg-[#FFF4E5] px-5 py-5 text-sm text-[#5C3300] sm:text-base">
                  <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2} aria-hidden="true" />
                  {warning}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
