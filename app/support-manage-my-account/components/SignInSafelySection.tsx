import React from "react";
import { Check, Info, KeyRound, Lock, MonitorSmartphone, Shield, X, type LucideIcon } from "lucide-react";
import { HEADING, SectionHeader } from "./shared";

const HABITS: { title: string; body: string; icon: LucideIcon; iconBg: string }[] = [
  {
    title: "Use the official site",
    body: "Type the address yourself rather than following a copied link.",
    icon: Lock,
    iconBg: "bg-[#5B2FB8]",
  },
  {
    title: "Use a unique password",
    body: "A password manager can help you keep one for each account.",
    icon: KeyRound,
    iconBg: "bg-[#3D7BFF]",
  },
  {
    title: "Shared device?",
    body: "Don’t choose “remember this device” on a computer others use.",
    icon: MonitorSmartphone,
    iconBg: "bg-[#14A06B]",
  },
  {
    title: "Extra security",
    body: "Stronger sign-in checks would be explained here once available — none are claimed yet.",
    icon: Shield,
    iconBg: "bg-[#E0127C]",
  },
];

const SITE_CHECKS = [
  { label: "You typed the address yourself", safe: true },
  { label: "You arrived from a bookmark you created", safe: true },
  { label: "A link in an unexpected email or text", safe: false },
  { label: "Someone asks for your code to “verify” you", safe: false },
];

export default function SignInSafelySection() {
  return (
    <section id="sign-in-safely" className="w-full scroll-mt-24 bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-8 lg:grid-cols-[730px_1fr] lg:gap-[30px]">
        <div>
          <SectionHeader
            align="left"
            className=""
            eyebrow="Signing in"
            title="Sign in safely"
            subtitle="Good habits that protect your account — wherever you sign in."
          />

          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {HABITS.map(({ title, body, icon: Icon, iconBg }) => (
              <li key={title} className="rounded-2xl border border-[#E3E6F2] bg-white p-5">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-white ${iconBg}`}>
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <p className={`${HEADING} mt-4 text-base font-semibold text-[#0F1452]`}>{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#3A4268]">{body}</p>
              </li>
            ))}
          </ul>

          <p className="mt-4 flex gap-3 rounded-2xl bg-[#EAF0FD] px-6 py-5 text-sm leading-relaxed text-[#2A3470] sm:text-[15px]">
            <Info className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2} aria-hidden="true" />
            A sign-in page with Google and Facebook buttons appears on our site, but those options and the account dashboard
            aren’t confirmed to work yet. We don’t promote them here.
          </p>
        </div>

        <div className="rounded-[22px] border border-[#E3E6F2] bg-white p-6 shadow-[0_20px_44px_rgba(30,30,90,0.08)]">
          <h3 className={`${HEADING} text-lg font-semibold text-[#0F1452]`}>Is this the real Zoiko site?</h3>
          <ul className="mt-3 space-y-2.5">
            {SITE_CHECKS.map(({ label, safe }) => (
              <li
                key={label}
                className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium ${
                  safe
                    ? "border-[#BFE5D3] bg-[#E6F6EF] text-[#0E7F55]"
                    : "border-dashed border-[#F3C0C0] bg-[#FDF0F0] text-[#C0262D]"
                }`}
              >
                {safe ? (
                  <Check className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                ) : (
                  <X className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                )}
                <span>
                  <span className="sr-only">{safe ? "Safe: " : "Not safe: "}</span>
                  {label}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-[#3A4268]">
            If anything feels wrong, stop and contact us through the published Contact page.
          </p>
        </div>
      </div>
    </section>
  );
}
