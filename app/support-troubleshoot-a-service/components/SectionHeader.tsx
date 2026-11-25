import React from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeader({ eyebrow, title, subtitle, className = "max-w-3xl" }: SectionHeaderProps) {
  return (
    <div className={`mx-auto text-center ${className}`}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3A4268] sm:text-sm">{eyebrow}</p>
      <h2 className="mt-3 [font-family:var(--font-ts-heading)] text-3xl font-bold tracking-tight text-[#0A1446] sm:text-4xl lg:text-[40px] lg:leading-[1.15]">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-sm leading-relaxed text-[#3A4268] sm:text-base">{subtitle}</p>}
    </div>
  );
}
