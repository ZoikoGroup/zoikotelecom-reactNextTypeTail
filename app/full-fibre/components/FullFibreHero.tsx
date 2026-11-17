import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftRight,
  ArrowUp,
  BookOpen,
  ChevronRight,
  CircleDot,
  Gauge,
  House,
  Landmark,
  Sparkles,
  Spline,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const HEADLINE = [
  { text: "Full-fibre broadband,", accent: false },
  { text: "explained clearly.", accent: true },
] as const;

const ACTIONS = [
  { label: "Explore broadband options", href: "/bt-broadband", primary: true },
  {
    label: "Ask about full-fibre availability",
    href: "/contact",
    primary: false,
  },
] as const;

const PATH = [
  { label: "Exchange", icon: Landmark },
  { label: "Street", icon: CircleDot },
  { label: "Home", icon: House },
] as const;

const NAV_ITEMS: readonly { label: string; href: string; icon: LucideIcon }[] =
  [
    {
      label: "What is full fibre",
      href: "#what-is-full-fibre",
      icon: Sparkles,
    },
    { label: "Understand speed", href: "#speed", icon: Gauge },
    { label: "Explore plans", href: "/bt-broadband", icon: BookOpen },
    { label: "Installation", href: "#installation", icon: Wrench },
    { label: "Switching & support", href: "/faqs", icon: ArrowLeftRight },
  ] as const;

export default function FullFibreHero() {
  return (
    <section className="w-full overflow-x-hidden bg-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#14102f] via-[#2a1650] to-[#4a2a6e] px-6 py-10 text-white sm:px-8 lg:px-10 lg:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_80%,rgba(230,0,126,0.25),transparent_55%)]"
        />

        <div className="relative mx-auto grid max-w-[1300px] items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          {/* Left card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.06em]">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#ff3d9a]"
              />
              Full Fibre (FTTP)
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              {HEADLINE.map((line) => (
                <span
                  key={line.text}
                  className={
                    line.accent
                      ? "block bg-gradient-to-r from-[#ff3d9a] via-[#c77dff] to-[#7aa2ff] bg-clip-text text-transparent"
                      : "block"
                  }
                >
                  {line.text}
                </span>
              ))}
            </h1>

            <p className="mt-5 max-w-[440px] text-base leading-7 text-white/80">
              Full fibre uses fibre-optic cable to connect to your property.
              Explore what it means for speed, installation and choosing a
              suitable plan.
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

          {/* Right collage */}
          <div className="relative mx-auto w-full max-w-[560px] pb-24 pt-8 lg:max-w-none lg:pb-0 lg:pt-0">
            <div className="relative ml-auto aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/20 shadow-2xl lg:w-[92%]">
              <Image
                src="/Images/full/1.png"
                alt="Group video call on a laptop"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>

            <span className="absolute right-2 top-0 inline-flex items-center gap-2 rounded-lg bg-[#1b1740]/90 px-3 py-1.5 text-sm font-medium text-white shadow-lg lg:right-4 lg:-top-3">
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
              Built for uploads
            </span>

            <span className="absolute left-0 top-14 inline-flex items-center gap-2 rounded-lg bg-[#1b1740]/90 px-3 py-1.5 text-sm font-medium text-white shadow-lg lg:-left-4 lg:top-16">
              <Spline className="h-4 w-4" aria-hidden="true" />
              Light, not copper
            </span>

            <div className="absolute bottom-0 left-0 w-[88%] max-w-[380px] rounded-xl bg-white p-4 text-[#1b1740] shadow-2xl lg:-bottom-4 lg:left-[-4%]">
              <p className="flex items-center gap-2 text-sm font-bold">
                <Sparkles
                  className="h-4 w-4 text-[#e6007e]"
                  aria-hidden="true"
                />
                Your full-fibre path
              </p>
              <ol className="mt-3 flex items-center">
                {PATH.map((node, i) => {
                  const Icon = node.icon;
                  return (
                    <li
                      key={node.label}
                      className="flex flex-1 items-center last:flex-none"
                    >
                      <span className="flex flex-col items-center gap-1">
                        <span
                          className={
                            i === PATH.length - 1
                              ? "flex h-8 w-8 items-center justify-center rounded-lg bg-[#e6007e] text-white"
                              : "flex h-8 w-8 items-center justify-center rounded-lg bg-[#ece6fb] text-[#5b3fc4]"
                          }
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="text-sm text-[#5b6578]">
                          {node.label}
                        </span>
                      </span>
                      {i < PATH.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="mx-2 mb-5 h-1 flex-1 rounded-full bg-gradient-to-r from-[#4a6cf7] to-[#a855f7]"
                        />
                      )}
                    </li>
                  );
                })}
              </ol>
              <p className="mt-2 text-sm text-[#5b6578]">
                Fibre-optic cable all the way
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick nav */}
      <ul className="flex flex-wrap items-center justify-center gap-3 bg-white px-6 py-4">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full border border-[#e3e0f0] bg-white px-4 py-2 text-sm font-medium text-[#1b1740] shadow-sm"
              >
                <Icon className="h-4 w-4 text-[#e6007e]" aria-hidden="true" />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
