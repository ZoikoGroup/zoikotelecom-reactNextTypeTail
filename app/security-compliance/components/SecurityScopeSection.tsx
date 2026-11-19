import Link from "next/link";
import { Shield, Users, FileText, Lock, Check, X } from "lucide-react";

const TOP_STRIP_ITEMS = [
  {
    title: "Scope first",
    subtitle: "What's covered — and what isn't",
    icon: Shield,
    iconColor: "text-[#e6007e]",
    href: "#scope",
  },
  {
    title: "Shared responsibility",
    subtitle: "Zoiko, suppliers and you",
    icon: Users,
    iconColor: "text-[#e6007e]",
    href: "#shared-responsibility",
  },
  {
    title: "Evidence on request",
    subtitle: "Only approved, current documents",
    icon: FileText,
    iconColor: "text-[#e6007e]",
    href: "#evidence",
  },
  {
    title: "Data handled carefully",
    subtitle: "Minimal details in public forms",
    icon: Lock,
    iconColor: "text-[#e6007e]",
    href: "#data-handling",
  },
] as const;

const COVERED_ITEMS = [
  "Security considerations for business mobile, broadband and voice",
  "Who is responsible for each part of your connection",
  "How we handle business information you share",
  "How to request relevant assurance information",
] as const;

const NOT_OFFERED_ITEMS = [
  "A managed cybersecurity service or security operations centre",
  "Certification claims (ISO 27001, Cyber Essentials, SOC 2) — none are published here",
  "Guaranteed breach response times or 24/7 security monitoring",
  "Legal advice on which regulations apply to your business",
] as const;

export default function SecurityScopeSection() {
  return (
    <div className="w-full bg-white text-[#141136]">
      {/* Top 4-column summary strip */}
      <div className="border-b border-[#e9ecf5] bg-white">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 divide-y divide-[#e9ecf5] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {TOP_STRIP_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="group flex items-center gap-3.5 px-6 py-4 transition hover:bg-[#fafbff]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md">
                  <Icon
                    className={`h-4 w-4 stroke-[2] ${item.iconColor}`}
                    aria-hidden="true"
                  />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-bold leading-snug text-[#141136] group-hover:text-[#e6007e]">
                    {item.title}
                  </p>
                  <p className="truncate text-[12px] leading-snug text-[#5d6478]">
                    {item.subtitle}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main Scope Section */}
      <section
        id="scope"
        className="mx-auto max-w-[1160px] px-6 py-16 sm:px-8 lg:py-20"
      >
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1c1846]">
            SCOPE
          </p>
          <h2 className="mt-2.5 text-3xl font-extrabold tracking-[-0.02em] text-[#0c0a2e] sm:text-[42px] sm:leading-[1.15]">
            What this page covers
          </h2>
          <p className="mt-3 text-[15px] text-[#5d6478]">
            We start with scope, before any trust claims.
          </p>
        </div>

        {/* Two comparison cards */}
        <div className="mt-11 grid grid-cols-1 gap-7 md:grid-cols-2">
          {/* Covered here */}
          <div className="rounded-2xl border border-[#1ea653]/80 border-t-4 bg-white p-7 shadow-[0_8px_24px_rgba(30,166,83,0.06)] sm:p-8">
            <div className="flex items-center gap-2.5">
              <Check
                className="h-4 w-4 shrink-0 stroke-[2.5] text-[#1ea653]"
                aria-hidden="true"
              />
              <h3 className="text-[16px] font-bold text-[#141136]">
                Covered here
              </h3>
            </div>

            <ul className="mt-5 space-y-3.5">
              {COVERED_ITEMS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-[14px] leading-[1.55] text-[#3a3f54]"
                >
                  <Check
                    className="mt-1 h-3.5 w-3.5 shrink-0 stroke-[2.5] text-[#1ea653]"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not offered on this page */}
          <div className="rounded-2xl border border-[#d63b2f]/80 border-t-4 bg-white p-7 shadow-[0_8px_24px_rgba(214,59,47,0.06)] sm:p-8">
            <div className="flex items-center gap-2.5">
              <X
                className="h-4 w-4 shrink-0 stroke-[2.5] text-[#d63b2f]"
                aria-hidden="true"
              />
              <h3 className="text-[16px] font-bold text-[#141136]">
                Not offered on this page
              </h3>
            </div>

            <ul className="mt-5 space-y-3.5">
              {NOT_OFFERED_ITEMS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-[14px] leading-[1.55] text-[#3a3f54]"
                >
                  <X
                    className="mt-1 h-3.5 w-3.5 shrink-0 stroke-[2.5] text-[#d63b2f]"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
