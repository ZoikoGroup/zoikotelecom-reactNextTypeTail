import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftRight,
  ChevronRight,
  Gamepad2,
  House,
  MessageSquare,
  PoundSterling,
  Router,
  Tv,
  Video,
  Wifi,
  type LucideIcon,
} from "lucide-react";

const HEADLINE = [
  [{ text: "Explore home", accent: false }],
  [{ text: "broadband plans for", accent: false }],
  [{ text: "your household.", accent: true }],
] as const;

const ACTIONS = [
  { label: "View broadband plans", href: "/bt-broadband", primary: true },
  { label: "Ask about availability", href: "/contact", primary: false },
] as const;

const DEVICES = [
  { label: "Streaming in the lounge", icon: Tv },
  { label: "Video call upstairs", icon: Video },
  { label: "Gaming in the bedroom", icon: Gamepad2 },
] as const;

const FEATURES: readonly { label: string; icon: LucideIcon }[] = [
  { label: "Plans for UK homes", icon: House },
  {
    label: "Prices shown in £ and pence",
    icon: PoundSterling,
  },
  { label: "One Touch Switch explained", icon: ArrowLeftRight },
  { label: "Help from our UK team", icon: MessageSquare },
] as const;

export default function HomeBroadbandHero() {
  return (
    <section className="w-full overflow-x-hidden bg-[#0d0b33] text-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0b0a2e] via-[#1a1155] to-[#2a1670]">
        {/* Bottom wave */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[60px] w-full"
          fill="none"
        >
          <path
            d="M0 60 C300 10 600 90 900 40 C1100 8 1300 30 1440 20"
            stroke="#a855f7"
            strokeWidth="2"
            strokeOpacity="0.8"
          />
          <path
            d="M0 70 C300 25 600 100 900 55 C1100 22 1300 44 1440 34"
            stroke="#ff2e93"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
        </svg>

        <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 px-6 pb-20 pt-12 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10 lg:pt-16">
          {/* Left */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.06em]">
              <span aria-hidden="true" className="text-[#ff3d9a]">
                ✱
              </span>
              Broadband &amp; Fibre · Home Broadband
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[52px]">
              {HEADLINE.map((line, i) => (
                <span key={i} className="block">
                  {line.map((part) => (
                    <span
                      key={part.text}
                      className={part.accent ? "text-[#ff3d9a]" : ""}
                    >
                      {part.text}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            <p className="mt-5 max-w-[420px] text-base leading-7 text-white/80">
              Review broadband options, contract terms and the next steps for
              checking availability where you live.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {ACTIONS.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className={
                    action.primary
                      ? "inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#e6007e] to-[#c4237f] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#e6007e]/30"
                      : "inline-flex items-center rounded-lg border border-white/50 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
                  }
                >
                  {action.label}
                  {action.primary && (
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative mx-auto w-full max-w-[560px] pb-10 lg:max-w-none lg:pb-0">
            {/* Outer offset border frame matching the top-left curve */}
            <div className="relative lg:ml-auto lg:w-[92%]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3 rounded-[160px_32px_32px_32px] border border-[#e6007e]/50"
              />

              {/* Main clipped image container with large top-left sweep */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[150px_24px_24px_24px] lg:aspect-[1.08]">
                <Image
                  src="/Images/broad/1.png"
                  alt="Family silhouetted against a sunset on the beach"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Top-right floating badge */}
            <span className="absolute -right-2 top-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#e6007e] to-[#7b3fe4] px-4 py-2.5 text-sm font-semibold shadow-lg">
              <Wifi className="h-4 w-4" aria-hidden="true" />
              Every room, every device
            </span>

            {/* Bottom-left floating status card */}
            <div className="absolute -bottom-2 left-0 w-[82%] max-w-[320px] rounded-2xl bg-white p-4 text-[#0f1b3d] shadow-2xl lg:bottom-8 lg:left-[-4%]">
              <p className="flex items-center gap-2 text-sm font-bold">
                <Router className="h-4 w-4 text-[#e6007e]" aria-hidden="true" />
                Your home, connected
              </p>
              <ul className="mt-3 space-y-2.5">
                {DEVICES.map((device) => {
                  const Icon = device.icon;
                  return (
                    <li
                      key={device.label}
                      className="flex items-center justify-between gap-2 text-sm"
                    >
                      <span className="flex items-center gap-2 text-[#334155]">
                        <Icon
                          className="h-4 w-4 text-[#7b3fe4]"
                          aria-hidden="true"
                        />
                        {device.label}
                      </span>
                      <span className="rounded-md bg-[#d9f7e4] px-2 py-0.5 text-xs font-bold text-[#168a45]">
                        Online
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Feature strip */}
      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 bg-white px-6 py-4 text-[#0f1b3d]">
        {FEATURES.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label}>
              <p className="flex items-center gap-2 text-sm font-medium">
                <Icon className="h-4 w-4 text-[#e6007e]" aria-hidden="true" />
                {item.label}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
