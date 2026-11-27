import Link from "next/link";

const navItems = [
  { step: "01", label: "Company identity", href: "#company-identity" },
  { step: "02", label: "Public filings", href: "#public-filings" },
  { step: "03", label: "Reading filings", href: "#reading-filings" },
  { step: "04", label: "What’s not here", href: "#whats-not-here" },
  { step: "05", label: "Contact", href: "#contact" },
  { step: "06", label: "FAQs", href: "#faqs" },
] as const;

export default function RegisterJumpNav() {
  return (
    <nav
      aria-label="Page sections"
      className="w-full bg-white px-4 py-3 sm:px-8"
    >
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-3">
        {navItems.map((item) => (
          <Link
            key={item.step}
            href={item.href}
            className="inline-flex h-11 items-center gap-2.5 rounded-full border border-[#e5e8f2] bg-white px-5 text-[13.5px] font-bold tracking-[-0.01em] text-[#0c1438] transition hover:border-[#cfd5e6] hover:bg-[#fafbfe]"
          >
            <span className="text-[12px] font-extrabold text-[#b81d78]">
              {item.step}
            </span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
