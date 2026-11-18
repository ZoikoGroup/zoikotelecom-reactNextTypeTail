import React from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** "plum" = magenta/charcoal sections, "navy" = navy/pink sections, "light" = on a coloured background */
  tone?: "plum" | "navy" | "light";
  align?: "center" | "left";
  className?: string;
};

const TONES = {
  plum: { eyebrow: "text-[#A3227F]", title: "text-[#1C1A33]", subtitle: "text-[#5F6275]" },
  navy: { eyebrow: "text-[#E11D74]", title: "text-[#11183C]", subtitle: "text-[#4B5375]" },
  light: { eyebrow: "text-white/80", title: "text-white", subtitle: "text-white/90" },
} as const;

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  tone = "plum",
  align = "center",
  className = "max-w-3xl",
}: SectionHeaderProps) {
  const t = TONES[tone];
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      <p className={`text-xs font-bold uppercase tracking-[0.14em] ${t.eyebrow}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[42px] lg:leading-[1.15] ${t.title}`}>
        {title}
      </h2>
      {subtitle && <p className={`mt-3 text-sm leading-relaxed sm:text-base ${t.subtitle}`}>{subtitle}</p>}
    </div>
  );
}
