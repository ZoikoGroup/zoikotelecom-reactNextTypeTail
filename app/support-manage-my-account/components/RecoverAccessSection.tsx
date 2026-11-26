"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AlertTriangle, ChevronRight, Fish, Info, KeyRound, Lock, Mail, Shield, type LucideIcon } from "lucide-react";
import { HEADING, PRIMARY_BTN, SectionHeader } from "./shared";

type Situation = {
  id: string;
  label: string;
  icon: LucideIcon;
  steps: string[];
  warning?: string;
};

const SITUATIONS: Situation[] = [
  {
    id: "forgot-password",
    label: "Forgot password",
    icon: KeyRound,
    steps: [
      "Go to the official Zoiko site by typing the address yourself.",
      "Use the password reset option on the sign-in page, if one is shown.",
      "Choose a new password you don’t use anywhere else.",
      "If the reset doesn’t arrive or work, contact our team.",
    ],
  },
  {
    id: "lost-email-phone",
    label: "Lost email or phone",
    icon: Mail,
    steps: [
      "Contact our team through the published Contact page.",
      "We’ll verify it’s you before changing any contact details.",
      "Have your account holder name and address ready.",
    ],
    warning: "Never send passwords, one-time codes or full card numbers to prove who you are.",
  },
  {
    id: "compromised",
    label: "Account compromised",
    icon: Shield,
    steps: [
      "Change your password straight away if you can still sign in.",
      "Change the password on your email account too.",
      "Contact us urgently and tell us what you’ve noticed.",
      "Check your bank or card statements for anything unexpected.",
    ],
    warning: "Don’t reply to any message that asked for your details — report it to us instead.",
  },
  {
    id: "locked-out",
    label: "Locked out",
    icon: Lock,
    steps: [
      "Wait before trying again — repeated attempts can extend a lockout.",
      "Check you’re on the official site and using the right email.",
      "If you still can’t get in, contact our team for help.",
    ],
  },
  {
    id: "suspicious-link",
    label: "Suspicious login link",
    icon: Fish,
    steps: [
      "Don’t click the link or enter any details.",
      "Go to the official site by typing the address yourself.",
      "Report the message to us through the Contact page.",
      "Delete the message once you’ve reported it.",
    ],
    warning: "We will never send you a link asking you to sign in to “confirm” or “unlock” your account.",
  },
];

export default function RecoverAccessSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = SITUATIONS.find((s) => s.id === activeId) ?? null;

  return (
    <section id="recover-access" className="w-full scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Recovery & lockout"
          title={
            <>
              Can’t get in? Choose what’s
              <br className="hidden sm:block" /> happening
            </>
          }
          subtitle="This changes the guidance only — nothing about your account is checked or shown."
        />

        <div role="radiogroup" aria-label="What’s happening" className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {SITUATIONS.map(({ id, label, icon: Icon }) => {
            const selected = id === activeId;
            return (
              <button
                key={id}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setActiveId(id)}
                className={`flex flex-col items-center gap-3 rounded-2xl border-2 px-3 py-5 text-center transition-colors ${
                  selected ? "border-[#7B3FE4] bg-[#F6F1FE]" : "border-[#E6E4F3] bg-[#F4F4F6] hover:border-[#D6CFF0]"
                }`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    selected ? "bg-[#7B3FE4] text-white" : "bg-[#EEE8FC] text-[#5B2FB8]"
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <span className={`${HEADING} text-sm font-semibold text-[#0F1452]`}>{label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 rounded-[22px] border border-[#E6E6EC] bg-[#F4F4F6] p-6 sm:p-7" aria-live="polite">
          {!active ? (
            <p
              className={`${HEADING} my-8 flex items-center gap-3 rounded-2xl border-2 border-dashed border-[#D9CCF5] bg-[#FAF6FE] px-6 py-6 text-[15px] font-medium text-[#5A6283]`}
            >
              <Info className="h-5 w-5 shrink-0 text-[#5B2FB8]" strokeWidth={2} aria-hidden="true" />
              Choose a situation above to see safe next steps.
            </p>
          ) : (
            <div className="rounded-2xl bg-white p-6">
              <h3 className={`${HEADING} text-lg font-semibold text-[#0F1452]`}>{active.label}: safe next steps</h3>
              <ol className="mt-4 space-y-3">
                {active.steps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm leading-relaxed text-[#3A4268] sm:text-[15px]">
                    <span
                      className={`${HEADING} flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EEE8FC] text-xs font-semibold text-[#5B2FB8]`}
                    >
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              {active.warning && (
                <p className="mt-5 flex gap-3 rounded-xl border border-[#F5E2BF] bg-[#FDF7EA] px-4 py-3.5 text-sm text-[#5B4318]">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#F09A1A]" strokeWidth={2.25} aria-hidden="true" />
                  {active.warning}
                </p>
              )}
              <Link href="/contact" className={`${PRIMARY_BTN} ${HEADING} mt-6`}>
                Contact support
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
