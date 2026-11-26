import Link from "next/link";
import { Check, ChevronRight, Shield, X } from "lucide-react";

const leftContent = {
  eyebrow: "GENERAL ENQUIRIES",
  heading: "Need company information?",
  description:
    "For general company enquiries, contact Zoiko Telecom through our Contact page. There’s no dedicated investor relations service, and we don’t promise a response time here.",
  primaryCta: { label: "Contact Zoiko", href: "/contact" },
  secondaryCta: { label: "Service help", href: "/support" },
} as const;

const rightContent = {
  heading: "Protect yourself",
  items: [
    { text: "Don’t send payment details", allowed: false },
    { text: "Don’t send identification documents", allowed: false },
    { text: "Don’t send investment instructions", allowed: false },
    { text: "Verify any request through our Contact page", allowed: true },
  ],
} as const;

export default function RegisterContactSection() {
  return (
    <section
      id="contact"
      className="w-full overflow-hidden grid grid-cols-1 lg:grid-cols-12"
    >
      {/* Left dark navy column */}
      <div className="bg-[#060f35] px-6 py-14 text-white sm:px-10 lg:col-span-6 lg:px-14 lg:py-16">
        <div className="mx-auto max-w-[480px] lg:ml-auto lg:mr-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#f472b6]">
            {leftContent.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.025em] text-white sm:text-4xl lg:text-[42px] lg:leading-[1.12]">
            {leftContent.heading}
          </h2>

          <p className="mt-4 text-[13.5px] leading-[1.65] text-white/75 sm:text-[14px]">
            {leftContent.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <Link
              href={leftContent.primaryCta.href}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#ea157d] to-[#cf1286] px-6 text-[13.5px] font-semibold text-white shadow-[0_10px_28px_rgba(234,21,125,0.45)] transition hover:brightness-110"
            >
              {leftContent.primaryCta.label}
              <ChevronRight
                className="h-4 w-4 stroke-[2.5]"
                aria-hidden="true"
              />
            </Link>

            <Link
              href={leftContent.secondaryCta.href}
              className="inline-flex h-11 items-center justify-center rounded-lg border border-white/25 bg-white/[0.04] px-5 text-[13.5px] font-semibold text-white/90 transition hover:border-white/45 hover:bg-white/[0.09]"
            >
              {leftContent.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Right magenta-to-violet gradient column */}
      <div className="bg-[linear-gradient(125deg,#e2147d_0%,#b81888_46%,#73189e_100%)] px-6 py-14 text-white sm:px-10 lg:col-span-6 lg:px-14 lg:py-16">
        <div className="mx-auto flex h-full max-w-[480px] flex-col justify-center lg:ml-4 lg:mr-auto">
          <div className="flex items-center gap-2.5">
            <Shield
              className="h-5 w-5 shrink-0 stroke-[2.2]"
              aria-hidden="true"
            />
            <h3 className="text-[20px] font-extrabold tracking-[-0.015em] text-white">
              {rightContent.heading}
            </h3>
          </div>

          <ul className="mt-5 space-y-3.5">
            {rightContent.items.map((item) => (
              <li
                key={item.text}
                className="flex items-center gap-3 text-[13.5px] font-medium text-white/95 sm:text-[14px]"
              >
                {item.allowed ? (
                  <Check
                    className="h-4 w-4 shrink-0 stroke-[2.5] text-[#6ee7b7]"
                    aria-hidden="true"
                  />
                ) : (
                  <X
                    className="h-4 w-4 shrink-0 stroke-[2.2] text-white/80"
                    aria-hidden="true"
                  />
                )}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
