import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ChevronRight,
  Headphones,
  Smartphone,
  Voicemail,
  Wifi,
  type LucideIcon,
} from "lucide-react";

const HEADLINE = [
  [{ text: "Manage your business", accent: false }],
  [
    { text: "connectivity with ", accent: false },
    { text: "clearer", accent: true },
  ],
  [{ text: "service coordination.", accent: true }],
] as const;

const ACTIONS = [
  { label: "Discuss your service needs", href: "/contact", primary: true },
  { label: "See how service works", href: "/faqs", primary: false },
] as const;

const SERVICES: readonly { label: string; icon: LucideIcon }[] = [
  { label: "Mobile", icon: Smartphone },
  { label: "Broadband", icon: Wifi },
  { label: "Voice", icon: Voicemail },
] as const;

const STAGES = [
  { n: 1, label: "Reported", note: "by your contact", state: "done" },
  { n: 2, label: "Triaged", note: "impact checked", state: "done" },
  { n: 3, label: "Provider referred", note: "update due", state: "current" },
  { n: 4, label: "Restored", note: "", state: "pending" },
  { n: 5, label: "Confirmed & closed", note: "", state: "pending" },
] as const;

export default function ManagedTelecomHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0d0b33] text-white">
      {/* Desktop photo panel, slanted left edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block"
        style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <Image
          src="/Images/mng/1.png"
          alt=""
          fill
          priority
          sizes="58vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-[1300px] px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="max-w-[560px]">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.06em]">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[#ff3d9a]"
            />
            Managed Telecom Services
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[40px]">
            {HEADLINE.map((line, i) => (
              <span key={i} className="block">
                {line.map((part) => (
                  <span
                    key={part.text}
                    className={
                      part.accent
                        ? "bg-gradient-to-r from-[#8fa2ff] to-[#e879f9] bg-clip-text text-transparent"
                        : ""
                    }
                  >
                    {part.text}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p className="mt-5 max-w-[470px] text-base leading-7 text-white/80">
            From onboarding and service changes to issue escalation, explore how
            Zoiko Telecom coordinates business mobile, broadband and voice
            services. Specific service commitments depend on your agreed terms.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {ACTIONS.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={
                  action.primary
                    ? "inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#e6007e] to-[#c4237f] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#e6007e]/30"
                    : "inline-flex items-center rounded-lg border border-white/60 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
                }
              >
                {action.label}
                {action.primary && (
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                )}
              </Link>
            ))}
          </div>

          <Link
            href="/faqs"
            className="mt-5 inline-flex items-center gap-2 border-b border-[#e6007e] pb-1 text-sm font-medium"
          >
            <Headphones className="h-4 w-4" aria-hidden="true" />
            Need help with an existing Zoiko service? Contact support
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile photo */}
        <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden rounded-2xl lg:hidden">
          <Image
            src="/Images/mng/1.png"
            alt="Business professional reviewing charts on a tablet"
            fill
            sizes="90vw"
            className="object-cover"
          />
        </div>

        {/* Floating UI */}
        <div className="relative mt-6 lg:absolute lg:bottom-6 lg:right-10 lg:mt-0 lg:w-[46%]">
          <ul className="mb-3 flex flex-wrap gap-2">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <li
                  key={s.label}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-[#1b1740] shadow-lg"
                >
                  <Icon className="h-4 w-4 text-[#e6007e]" aria-hidden="true" />
                  {s.label}
                </li>
              );
            })}
          </ul>

          <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto]">
            <div className="w-full max-w-[320px] rounded-2xl bg-white p-4 text-[#1b1740] shadow-2xl">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-bold">How a case could progress</p>
                <span className="rounded bg-[#f1f2f7] px-2 py-0.5 text-sm uppercase tracking-[0.04em] text-[#5b6578]">
                  Example
                </span>
              </div>
              <ol className="mt-3 space-y-2">
                {STAGES.map((stage) => (
                  <li key={stage.n} className="flex items-center gap-3">
                    <span
                      className={
                        stage.state === "done"
                          ? "flex h-5 w-5 items-center justify-center rounded-full bg-[#1f9d55] text-white"
                          : stage.state === "current"
                            ? "flex h-5 w-5 items-center justify-center rounded-full bg-[#8a2fd6] text-sm font-bold text-white ring-2 ring-[#e6b8f5]"
                            : "flex h-5 w-5 items-center justify-center rounded-full bg-[#eceef3] text-sm text-[#8a90a6]"
                      }
                    >
                      {stage.state === "done" ? (
                        <Check className="h-3 w-3" aria-hidden="true" />
                      ) : (
                        <span className="text-sm leading-none">{stage.n}</span>
                      )}
                    </span>
                    <span
                      className={`flex-1 text-sm ${
                        stage.state === "pending"
                          ? "text-[#8a90a6]"
                          : "font-bold"
                      }`}
                    >
                      {stage.label}
                    </span>
                    {stage.note && (
                      <span className="text-sm text-[#8a90a6]">
                        {stage.note}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-[#FFFFFF1F] px-4 py-3 shadow-xl backdrop-blur">
              <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-white/60">
                <Image
                  src="/Images/mng/2.png"
                  alt="Your service contact"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </span>
              <span>
                <span className="block text-sm font-bold">
                  Your service contact
                </span>
                <span className="block text-sm text-white/75">
                  Coordinates with suppliers for you
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
