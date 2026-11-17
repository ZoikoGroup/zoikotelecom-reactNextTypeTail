import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  House,
  Laptop,
  Monitor,
  Network,
  Router,
  Spline,
  BedDouble,
  Wifi,
  type LucideIcon,
} from "lucide-react";

const HEADLINE = [
  [
    { text: "Make sense of ", accent: false },
    { text: "Wi-Fi", accent: true },
  ],
  [{ text: "around your home.", accent: false }],
] as const;

const ACTIONS = [
  { label: "View broadband options", href: "/bt-broadband", primary: true },
  { label: "Ask about Wi-Fi support", href: "/contact", primary: false },
] as const;

const ROOMS = [
  { label: "Lounge", icon: Monitor, level: 4 },
  { label: "Home office", icon: Laptop, level: 3 },
  { label: "Back bedroom", icon: BedDouble, level: 1 },
] as const;

const BARS = [1, 2, 3, 4] as const;

const TIPS: readonly { label: string; icon: LucideIcon }[] = [
  { label: "Central router spot", icon: House },
  { label: "Cable where you can", icon: Spline },
  { label: "Mesh for bigger homes", icon: Network },
] as const;

function Signal({ level }: { level: number }) {
  const tone = level === 1 ? "bg-[#e6007e]" : "bg-[#1f9d55]";
  return (
    <span
      className="flex items-end gap-0.5"
      aria-label={`Signal ${level} of 4`}
      role="img"
    >
      {BARS.map((bar) => (
        <span
          key={bar}
          style={{ height: 6 + bar * 4 }}
          className={`w-1.5 rounded-sm ${bar <= level ? tone : "bg-[#e3e6ee]"}`}
        />
      ))}
    </span>
  );
}

export default function WholeHomeWifiHero() {
  return (
    <section className="w-full overflow-x-hidden bg-[#0d0b33] text-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0b0a2e] via-[#1a1155] to-[#3a1d78]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_75%,rgba(230,0,126,0.22),transparent_55%)]"
        />

        <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 px-6 py-12 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-16">
          {/* Left */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.06em]">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#ff3d9a]"
              />
              Whole Home Wi-Fi
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[52px]">
              {HEADLINE.map((line, i) => (
                <span key={i} className="block">
                  {line.map((part) => (
                    <span
                      key={part.text}
                      className={part.accent ? "text-[#c77dff]" : ""}
                    >
                      {part.text}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            <p className="mt-5 max-w-[420px] text-base leading-7 text-white/80">
              Find out why Wi-Fi may be weaker in some rooms, what you can try,
              and when to ask for help.
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
          </div>

          {/* Right */}
          <div className="relative mx-auto w-full max-w-[560px] pb-6 lg:max-w-none">
            <div className="relative mx-auto w-full max-w-[400px] rounded-[40px] border-2 border-dashed border-white/30 p-3 lg:mr-6 lg:ml-auto">
              <div className="relative aspect-[1.15] overflow-hidden rounded-[32px] shadow-2xl">
                <Image
                  src="/Images/whole/1.png"
                  alt="Wi-Fi router with glowing pink antennas"
                  fill
                  priority
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover"
                />
              </div>

              <span className="absolute -bottom-3 -right-3 flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-white/30 bg-gradient-to-br from-[#e6007e] to-[#6a2aa8] shadow-xl">
                <Router className="h-7 w-7" aria-hidden="true" />
              </span>
            </div>

            <div className="relative z-10 mt-6 w-full max-w-[290px] rounded-xl bg-white p-4 text-[#1b1740] shadow-2xl lg:absolute lg:left-[-6%] lg:top-6 lg:mt-0">
              <div className="flex items-center justify-between gap-3">
                <p className="flex items-center gap-2 text-sm font-bold">
                  <Wifi className="h-4 w-4 text-[#e6007e]" aria-hidden="true" />
                  Wi-Fi by room
                </p>
                <span className="rounded bg-[#f1f2f7] px-2 py-0.5 text-sm uppercase tracking-[0.04em] text-[#8a90a6]">
                  Illustration
                </span>
              </div>
              <ul className="mt-2">
                {ROOMS.map((room) => {
                  const Icon = room.icon;
                  return (
                    <li
                      key={room.label}
                      className="flex items-center justify-between border-t border-[#eceef3] py-2 first:border-t-0"
                    >
                      <span className="flex items-center gap-2 text-sm font-medium">
                        <Icon
                          className="h-4 w-4 text-[#7b3fe4]"
                          aria-hidden="true"
                        />
                        {room.label}
                      </span>
                      <Signal level={room.level} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tips strip */}
      <ul className="grid border-t border-white/10 bg-[#0b0a2e] sm:grid-cols-3">
        {TIPS.map((tip) => {
          const Icon = tip.icon;
          return (
            <li
              key={tip.label}
              className="flex items-center justify-center gap-3 border-white/10 px-6 py-4 text-sm font-semibold sm:border-r sm:last:border-r-0"
            >
              <Icon className="h-4 w-4 text-[#ff3d9a]" aria-hidden="true" />
              {tip.label}
            </li>
          );
        })}
      </ul>

      <p className="flex items-center justify-center gap-3 bg-[#14123f] px-6 py-3 text-center text-sm text-white/85">
        <Wifi className="h-4 w-4 shrink-0 text-[#ff3d9a]" aria-hidden="true" />
        All help on this page works without an account — no scans, no passwords,
        no sign-in.
      </p>
    </section>
  );
}
