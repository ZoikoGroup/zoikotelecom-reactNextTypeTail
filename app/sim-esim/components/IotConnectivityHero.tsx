import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  ChevronRight,
  Cloud,
  Cpu,
  Factory,
  Radio,
  Signal,
  Truck,
  Wifi,
  type LucideIcon,
} from "lucide-react";

const HEADLINE = [
  [
    { text: "IoT connectivity ", tone: "from-[#0e9bb5] to-[#2a8bd6]" },
    { text: "for", tone: "from-[#e6007e] to-[#e6007e]" },
  ],
  [
    { text: "business ", tone: "from-[#2a8bd6] to-[#6a4fe0]" },
    { text: "devices.", tone: "from-[#8a2fd6] to-[#e6007e]" },
  ],
] as const;

const ACTIONS = [
  { label: "Discuss IoT requirements", href: "/contact", primary: true },
  { label: "Understand SIM and eSIM options", href: "/faqs", primary: false },
] as const;

const TAGS: readonly { label: string; icon: LucideIcon }[] = [
  { label: "Sensors", icon: Radio },
  { label: "Equipment", icon: Factory },
  { label: "Vehicles", icon: Truck },
  { label: "Buildings", icon: Building2 },
] as const;

const FLOW: readonly { label: string; icon: LucideIcon; tone: string }[] = [
  { label: "Device", icon: Radio, tone: "bg-[#e6f4f8] text-[#0e9bb5]" },
  { label: "SIM / eUICC", icon: Cpu, tone: "bg-[#ece6fb] text-[#5b3fc4]" },
  { label: "Network", icon: Signal, tone: "bg-[#fde8f3] text-[#e6007e]" },
  { label: "Your platform", icon: Cloud, tone: "bg-[#e8effd] text-[#2a5bd7]" },
] as const;

export default function IotConnectivityHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4f8fb] text-[#13213f]">
      {/* Background photo, faded to the left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] lg:block"
      >
        <Image
          src="/Images/sime/1.png"
          alt=""
          fill
          priority
          sizes="62vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f8fb] via-[#f4f8fb]/40 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-[1300px] items-center gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-14">
        {/* Left */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#bfe3ea] bg-[#e6f7f9] px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.06em] text-[#0b6f85]">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[#0e9bb5]"
            />
            IoT Connectivity · Business
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[52px]">
            {HEADLINE.map((line, i) => (
              <span key={i} className="block">
                {line.map((part) => (
                  <span
                    key={part.text}
                    className={`bg-gradient-to-r bg-clip-text text-transparent ${part.tone}`}
                  >
                    {part.text}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p className="mt-5 max-w-[470px] text-base leading-7 text-[#2f3c5c]">
            From sensors and gateways to connected equipment, the right SIM or
            eSIM approach depends on your devices, locations and deployment
            needs. Talk to us about how to assess your requirements.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {ACTIONS.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={
                  action.primary
                    ? "inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#e6007e] to-[#c4237f] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#e6007e]/30"
                    : "inline-flex items-center rounded-lg border border-[#13213f] bg-white px-6 py-3 text-sm font-semibold"
                }
              >
                {action.label}
                {action.primary && (
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                )}
              </Link>
            ))}
          </div>

          <ul className="mt-5 flex flex-wrap gap-2">
            {TAGS.map((tag) => {
              const Icon = tag.icon;
              return (
                <li
                  key={tag.label}
                  className="inline-flex items-center gap-2 rounded-full border border-[#dfe6ef] bg-white px-4 py-2 text-sm font-medium shadow-sm"
                >
                  <Icon className="h-4 w-4 text-[#0e9bb5]" aria-hidden="true" />
                  {tag.label}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right */}
        <div className="relative mx-auto h-[400px] w-full max-w-[560px] lg:max-w-none">
          {/* Mobile photo */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl lg:hidden">
            <Image
              src="/Images/sime/1.png"
              alt="Engineer working on connected equipment in a lab"
              fill
              sizes="90vw"
              className="object-cover"
            />
          </div>

          <p className="absolute left-0 top-[4%] z-10 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium shadow-lg lg:-left-6">
            <Wifi className="h-4 w-4 text-[#0e9bb5]" aria-hidden="true" />
            Device data, sent securely
          </p>

          <div className="absolute right-0 top-0 z-10 w-[38%] min-w-[150px] max-w-[180px] rounded-xl bg-white/90 p-3 shadow-xl backdrop-blur lg:right-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5b3fc4] text-white">
              <Cpu className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="mt-2 text-sm font-bold">IoT eSIM (eUICC)</p>
            <p className="text-sm leading-4 text-[#5b6578]">
              Profiles managed remotely, where supported
            </p>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10 rounded-2xl bg-white/90 p-4 shadow-2xl backdrop-blur lg:left-[-8%] lg:right-0">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-bold">
                How IoT connectivity fits together
              </p>
              <span className="rounded bg-[#f1f2f7] px-2 py-0.5 text-sm uppercase tracking-[0.04em] text-[#5b6578]">
                Concept
              </span>
            </div>
            <ol className="mt-4 flex items-center">
              {FLOW.map((step, i) => {
                const Icon = step.icon;
                return (
                  <li
                    key={step.label}
                    className="flex flex-1 items-center last:flex-none"
                  >
                    <span className="flex flex-col items-center gap-1">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-lg ${step.tone}`}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="whitespace-nowrap text-sm text-[#5b6578]">
                        {step.label}
                      </span>
                    </span>
                    {i < FLOW.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="mx-2 mb-5 h-0 flex-1 border-t-2 border-dashed border-[#0e9bb5]"
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
