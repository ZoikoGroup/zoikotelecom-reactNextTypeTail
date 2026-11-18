import React from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  dark = false,
  className = "max-w-3xl",
}: SectionHeaderProps) {
  return (
    <div className={`mx-auto text-center ${className}`}>
      <p
        className={`text-sm font-bold uppercase tracking-[0.14em] ${
          dark ? "text-[#D1D5EB]" : "text-[#434A6E]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[42px] lg:leading-[1.15] ${
          dark ? "text-white" : "text-[#11183C]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3.5 text-sm leading-relaxed sm:text-base ${
            dark ? "text-[#D1D5EB]" : "text-[#4B5375]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
