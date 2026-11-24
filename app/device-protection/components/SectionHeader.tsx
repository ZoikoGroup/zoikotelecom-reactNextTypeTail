import React from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "max-w-3xl",
}: SectionHeaderProps) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#3A4268] sm:text-base">{eyebrow}</p>
      <h2 className="mt-2.5 text-3xl font-extrabold tracking-tight text-[#0A1446] sm:text-4xl lg:text-[40px] lg:leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm leading-relaxed text-[#3A4268] sm:text-base lg:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
