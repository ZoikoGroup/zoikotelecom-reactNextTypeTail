import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  FileText,
  Globe,
  Lock,
  Shield,
  type LucideIcon,
} from "lucide-react";

const sectionContent = {
  eyebrow: "BEFORE YOU ENQUIRE",
  heading: "Keep it safe and simple",
  image: "/Images/cloud/8.png",
  imageAlt:
    "Close-up of structured network patch panel ports with blue and white Ethernet cables",
} as const;

interface GuardrailItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const guardrails: readonly GuardrailItem[] = [
  {
    title: "Don’t share sensitive details",
    description:
      "No network diagrams, IP lists, passwords or credentials in the public form.",
    icon: Lock,
  },
  {
    title: "No uptime promises here",
    description:
      "Only a signed, service-specific agreement can set any guarantee.",
    icon: Shield,
  },
  {
    title: "No assumed hosting location",
    description: "Don’t assume UK or EU hosting until a proposal confirms it.",
    icon: Globe,
  },
  {
    title: "Everything in writing",
    description:
      "Scope, exclusions, VAT, commitments and validity in a written proposal.",
    icon: FileText,
  },
] as const;

const ctaActions = {
  primary: {
    label: "Discuss connectivity & hosting",
    href: "/contact",
  },
  secondary: {
    label: "Existing customer help",
    href: "/support",
  },
} as const;

export default function BeforeYouEnquireSection() {
  return (
    <section
      id="before-you-enquire"
      className="relative w-full overflow-hidden bg-[#060c2c]"
    >
      <div className="grid w-full grid-cols-1 lg:grid-cols-12">
        {/* Left full-bleed network patch panel image */}
        <div className="relative min-h-[260px] w-full overflow-hidden bg-[#0a0f29] sm:min-h-[340px] lg:col-span-6 lg:min-h-full">
          <Image
            src={sectionContent.image}
            alt={sectionContent.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-left"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#060c2c]/45 hidden lg:block"
            aria-hidden="true"
          />
        </div>

        {/* Right full-bleed dark navy/violet guardrail column */}
        <div className="relative flex flex-col justify-center bg-[radial-gradient(ellipse_85%_75%_at_85%_18%,rgba(124,58,237,0.34)_0%,transparent_65%),radial-gradient(ellipse_75%_80%_at_15%_90%,rgba(219,39,119,0.22)_0%,transparent_65%),linear-gradient(135deg,#070d33_0%,#090826_55%,#14082b_100%)] px-6 py-12 text-white sm:px-10 lg:col-span-6 lg:px-14 lg:py-16">
          <div className="max-w-[540px]">
            <p className="text-[10.5px] font-extrabold uppercase tracking-[0.2em] text-[#e879f9]">
              {sectionContent.eyebrow}
            </p>

            <h2 className="mt-2.5 text-3xl font-extrabold tracking-[-0.025em] text-white sm:text-[38px] sm:leading-[1.12]">
              {sectionContent.heading}
            </h2>

            {/* Four guardrail rows */}
            <ul className="mt-7 space-y-5">
              {guardrails.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.title} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] text-[#d8b4fe]">
                      <Icon
                        className="h-4 w-4 stroke-[1.9]"
                        aria-hidden="true"
                      />
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-[14px] font-bold leading-snug text-white">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-[12px] leading-[1.52] text-white/70">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href={ctaActions.primary.href}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#e2187d] to-[#c91485] px-5 py-2 text-[12.5px] font-semibold leading-tight text-white shadow-[0_10px_24px_rgba(226,24,125,0.45)] transition hover:brightness-110"
              >
                <span className="max-w-[140px] text-left">
                  {ctaActions.primary.label}
                </span>
                <ChevronRight
                  className="h-3.5 w-3.5 shrink-0 stroke-[2.5]"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href={ctaActions.secondary.href}
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/25 bg-white/[0.04] px-5 py-2 text-[12.5px] font-semibold leading-tight text-white/90 transition hover:border-white/45 hover:bg-white/[0.09]"
              >
                <span className="max-w-[130px] text-center">
                  {ctaActions.secondary.label}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
