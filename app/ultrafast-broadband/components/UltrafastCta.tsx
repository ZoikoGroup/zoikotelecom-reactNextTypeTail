import Link from "next/link";
import { ChevronRight } from "lucide-react";

const ACTIONS = [
  {
    label: "View broadband plans",
    href: "/bt-broadband",
    primary: true,
  },
  {
    label: "Contact us",
    href: "/contact",
    primary: false,
  },
] as const;

export default function UltrafastCta() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#e6007e] via-[#8a2fd6] to-[#3d5afe] px-6 py-14 text-center text-white sm:px-8 lg:px-10">
      {/* Decorative rings */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-[260px] w-[260px] rounded-full border-[28px] border-white/10"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-16 h-[300px] w-[300px] rounded-full border-[28px] border-white/10"
      />

      <div className="relative mx-auto flex max-w-[1300px] flex-col items-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Ready to explore faster broadband?
        </h2>
        <p className="mt-4 max-w-[520px] text-base leading-7 text-white/85">
          View our plans or ask our team about the options for your home.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {ACTIONS.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className={
                action.primary
                  ? "inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#c4237f]"
                  : "inline-flex items-center rounded-lg border border-white/80 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
              }
            >
              {action.label}
              {action.primary && (
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              )}
            </Link>
          ))}
        </div>

        <Link
          href="/faqs"
          className="mt-6 text-sm font-medium text-white underline underline-offset-4"
        >
          Read our FAQs
        </Link>
      </div>
    </section>
  );
}
