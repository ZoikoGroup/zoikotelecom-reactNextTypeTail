import React from "react";

export const IMG = "/Images/support-manage-my-account";

/** Poppins heading font (loaded in page.tsx). */
export const HEADING = "[font-family:var(--font-ma-heading)]";

export const PRIMARY_BTN =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F0168A] to-[#C8106E] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(224,18,124,0.32)] transition-transform hover:scale-[1.01] sm:text-base";

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeader({ eyebrow, title, subtitle, align = "center", className = "max-w-3xl" }: SectionHeaderProps) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      <p className={`${HEADING} text-sm font-semibold uppercase tracking-[0.2em] text-[#3A4268] sm:text-base`}>{eyebrow}</p>
      <h2
        className={`${HEADING} mt-2 text-3xl font-bold tracking-[-0.02em] text-[#0F1452] sm:text-4xl lg:text-[40px] lg:leading-[1.2]`}
      >
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-sm leading-relaxed text-[#3A4268] sm:text-base lg:text-lg">{subtitle}</p>}
    </div>
  );
}

export function QuestionMark({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 60" fill="none" className={`pointer-events-none absolute ${className}`}>
      <path
        d="M9 17c0-7 5-12 11.5-12S32 10 32 16.5c0 8.5-11 9.5-11 19"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="21" cy="48" r="5" stroke="currentColor" strokeWidth="3.5" />
    </svg>
  );
}
