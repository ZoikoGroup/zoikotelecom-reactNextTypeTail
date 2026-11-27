import Link from "next/link";
import {
  ArrowRight,
  CreditCard,
  Lock,
  Settings,
  ShieldAlert,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const sectionContent = {
  step: "04",
  eyebrow: "EXISTING CUSTOMERS",
  headingPrefix: "Get to the ",
  headingAccent: "right team",
  description: "Sales, faults, changes and security each have their own route.",
} as const;

interface TeamRouteCard {
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  icon: LucideIcon;
  iconBoxClass: string;
  borderClass: string;
}

const teamRoutes: readonly TeamRouteCard[] = [
  {
    title: "Report a fault",
    description: "Something isn’t working on an existing service.",
    ctaLabel: "Go to Support",
    href: "/support",
    icon: Wrench,
    iconBoxClass: "bg-[#e6faf5] text-[#0d9488]",
    borderClass:
      "border-[#eaecf4] border-t-[2.5px] border-t-[#14b8a6] hover:border-[#99f6e4]",
  },
  {
    title: "Request a change",
    description: "Changes go through approved change control.",
    ctaLabel: "Go to Support",
    href: "/support",
    icon: Settings,
    iconBoxClass: "bg-[#eff6ff] text-[#3b82f6]",
    borderClass:
      "border-[#eaecf4] border-t-[2.5px] border-t-[#3b82f6] hover:border-[#bfdbfe]",
  },
  {
    title: "Billing question",
    description: "Invoices, charges and payments.",
    ctaLabel: "Go to Support",
    href: "/support",
    icon: CreditCard,
    iconBoxClass: "bg-[#f3e8ff] text-[#7c3aed]",
    borderClass:
      "border-[#eaecf4] border-t-[2.5px] border-t-[#7c3aed] hover:border-[#ddd6fe]",
  },
  {
    title: "Suspected security incident",
    description:
      "Contact us — don’t send credentials or customer data in a public form.",
    ctaLabel: "Contact us",
    href: "/contact",
    icon: ShieldAlert,
    iconBoxClass: "bg-[#ffe4e6] text-[#e11d48]",
    borderClass:
      "border-[#eaecf4] border-t-[2.5px] border-t-[#e11d48] hover:border-[#fecdd3]",
  },
] as const;

const secureEvidenceBanner = {
  title: "Secure evidence sharing",
  description:
    "A restricted, invitation-only way to share sanitised documents with an assigned assessment team. No credentials, keys or unredacted configs — ever.",
  statusBadge: "NOT LIVE",
} as const;

export default function GetToTheRightTeamSection() {
  return (
    <section
      id="existing-customers"
      className="w-full bg-[#f5f6fb] px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Left-aligned section header */}
        <div>
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="italic text-[#e093b9]">{sectionContent.step}</span>
            <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold tracking-[-0.025em] text-[#0c1438] sm:text-[36px]">
            {sectionContent.headingPrefix}
            <span className="text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>

          <p className="mt-2 text-[13.5px] leading-[1.6] text-[#4b5563] sm:text-sm">
            {sectionContent.description}
          </p>
        </div>

        {/* Four routing cards */}
        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamRoutes.map((route) => {
            const Icon = route.icon;

            return (
              <article
                key={route.title}
                className={`flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition ${route.borderClass}`}
              >
                <div>
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-xl ${route.iconBoxClass}`}
                  >
                    <Icon className="h-4 w-4 stroke-[2]" aria-hidden="true" />
                  </span>

                  <h3 className="mt-4 text-[14.5px] font-extrabold leading-snug text-[#0c1438]">
                    {route.title}
                  </h3>

                  <p className="mt-1.5 text-[11.5px] leading-[1.52] text-[#4b5563]">
                    {route.description}
                  </p>
                </div>

                <div className="mt-5">
                  <Link
                    href={route.href}
                    className="inline-flex items-center gap-1.5 text-[11.5px] font-bold text-[#e11d74] transition hover:underline"
                  >
                    <span>{route.ctaLabel}</span>
                    <ArrowRight
                      className="h-3.5 w-3.5 stroke-[2.2]"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom dashed callout banner */}
        <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-2xl border border-dashed border-[#a5f3fc] bg-gradient-to-r from-[#edfcf9] via-[#f4f7fe] to-[#f6f1fe] px-5 py-4 sm:flex-row sm:items-center sm:px-6">
          <div className="flex items-start gap-3.5 sm:items-center">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0d9488] shadow-xs">
              <Lock className="h-4 w-4 stroke-[2]" aria-hidden="true" />
            </span>

            <div>
              <h3 className="text-[13.5px] font-extrabold leading-snug text-[#0c1438]">
                {secureEvidenceBanner.title}
              </h3>
              <p className="mt-0.5 text-[11.5px] leading-[1.5] text-[#4b5563]">
                {secureEvidenceBanner.description}
              </p>
            </div>
          </div>

          <span className="inline-flex shrink-0 items-center rounded-md bg-[#fef3c7] px-2.5 py-1 text-[9.5px] font-extrabold uppercase tracking-[0.12em] text-[#92400e]">
            {secureEvidenceBanner.statusBadge}
          </span>
        </div>
      </div>
    </section>
  );
}
