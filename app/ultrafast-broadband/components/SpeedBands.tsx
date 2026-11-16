import Link from "next/link";
import {
  Gauge,
  FileText,
  Wrench,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";

const QUICK_LINKS: readonly {
  title: string;
  subtitle: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Explain speeds",
    subtitle: "Bands & units",
    href: "/bt-broadband",
    icon: Gauge,
  },
  {
    title: "Compare plans",
    subtitle: "What's available",
    href: "/bt-broadband",
    icon: FileText,
  },
  {
    title: "Installation & switching",
    subtitle: "What to expect",
    href: "/faqs",
    icon: Wrench,
  },
  {
    title: "Contact us",
    subtitle: "Talk to our team",
    href: "/contact",
    icon: MessageSquare,
  },
] as const;

const BANDS = [
  {
    label: "Standard",
    speed: "Under ~30",
    description: "Mbit/s · browsing, email, light streaming",
    surface: "bg-[#6b7299]",
    current: false,
  },
  {
    label: "Superfast",
    speed: "~30 and above",
    description: "Mbit/s · HD streaming, most households",
    surface: "bg-[#3d5afe]",
    current: false,
  },
  {
    label: "Ultrafast",
    speed: "~300 and above",
    description: "Mbit/s · busy homes, 4K, big downloads",
    surface: "bg-gradient-to-br from-[#7b3fe4] to-[#e6007e]",
    current: true,
  },
  {
    label: "Gigabit-capable",
    speed: "~1,000",
    description: "Mbit/s · 1 Gbit/s networks",
    surface: "bg-[#0f1650]",
    current: false,
  },
] as const;

export default function SpeedBands() {
  return (
    <section className="w-full overflow-x-hidden bg-white px-6 pb-12 text-[#0f1b3d] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        {/* Quick links */}
        <ul className="grid overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(15,27,61,0.12)] sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="border-b border-[#eceef3] last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-6 py-5"
                >
                  <Icon
                    className="h-5 w-5 shrink-0 text-[#e6007e]"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="block text-sm font-bold leading-5">
                      {item.title}
                    </span>
                    <span className="block text-sm leading-5 text-[#5b6578]">
                      {item.subtitle}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Heading */}
        <div className="mt-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em]">
            Speed bands
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Where does ultrafast fit?
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-base leading-7 text-[#5b6578]">
            Broadband is often grouped by download speed. These are approximate
            bands used in UK consumer guidance.
          </p>
        </div>

        {/* Bands */}
        <ul className="mt-10 grid overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.25fr_1fr]">
          {BANDS.map((band) => (
            <li
              key={band.label}
              className={`relative flex min-h-[170px] flex-col justify-between p-5 text-white ${band.surface}`}
            >
              {band.current && (
                <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-0.5 text-sm font-bold text-[#e6007e]">
                  This page
                </span>
              )}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white/80">
                  {band.label}
                </p>
                <p className="mt-3 text-xl font-extrabold leading-7">
                  {band.speed}
                </p>
              </div>
              <p className="mt-6 text-sm leading-5 text-white/85">
                {band.description}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-3 text-sm text-[#5b6578]">
          Approximate bands based on Ofcom consumer guidance; exact definitions
          vary between publications. Reviewed November 2026.
        </p>
      </div>
    </section>
  );
}
