import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Laptop, Router, Server } from "lucide-react";

const HEADLINE = [
  { text: "Check your", accent: false },
  { text: "broadband speed", accent: false },
  { text: "with confidence.", accent: true },
] as const;

const ACTIONS = [
  { label: "How to test your speed", href: "/bt-broadband", primary: true },
  { label: "Get broadband help", href: "/faqs", primary: false },
] as const;

const NODES = [
  { label: "Network", icon: Server },
  { label: "Router", icon: Router },
  { label: "Device", icon: Laptop },
] as const;

const LEGEND = [
  { label: "Speed to your home", dashed: false },
  { label: "Wi-Fi to your device", dashed: true },
] as const;

function DiagramCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-xl bg-white p-4 text-[#1b1740] shadow-2xl ${className}`}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-bold">Where speed is measured</p>
        <p className="text-sm uppercase tracking-[0.06em] text-[#8a90a6]">
          Illustration
        </p>
      </div>

      <ol className="mt-4 flex items-center">
        {NODES.map((node, i) => {
          const Icon = node.icon;
          return (
            <li
              key={node.label}
              className="flex flex-1 items-center last:flex-none"
            >
              <span className="flex flex-col items-center gap-1">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fde8f3] text-[#e6007e]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm text-[#5b6578]">{node.label}</span>
              </span>
              {i < NODES.length - 1 && (
                <span
                  aria-hidden="true"
                  className={
                    i === 0
                      ? "mx-2 mb-5 h-0.5 flex-1 bg-[#7b3fe4]"
                      : "mx-2 mb-5 h-0 flex-1 border-t-2 border-dashed border-[#e6007e]"
                  }
                />
              )}
            </li>
          );
        })}
      </ol>

      <ul className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 border-t border-[#eceef3] pt-3">
        {LEGEND.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-2 text-sm text-[#5b6578]"
          >
            <span
              aria-hidden="true"
              className={
                item.dashed
                  ? "h-0 w-4 border-t-2 border-dashed border-[#e6007e]"
                  : "h-0.5 w-4 bg-[#7b3fe4]"
              }
            />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SpeedHelpHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0d0b33] text-white">
      {/* Desktop image panel: right half, slanted left edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[50.5%] lg:block"
      >
        <div
          className="absolute inset-0"
          style={{ clipPath: "polygon(17% 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <Image
            src="/Images/speed/1.png"
            alt=""
            fill
            priority
            sizes="50vw"
            className="object-cover object-center"
          />
        </div>

        {/* Single gradient line on the same slant (pink top, blue bottom) */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#e6007e] via-[#8a2fd6] to-[#3d5afe]"
          style={{
            clipPath: "polygon(17% 0, calc(17% + 3px) 0, 3px 100%, 0 100%)",
          }}
        />
      </div>

      {/* Desktop diagram card, floating over the image */}
      <DiagramCard className="absolute right-[5%] top-[12%] z-10 hidden w-[29%] max-w-[400px] lg:block" />

      <div className="relative mx-auto max-w-[1300px] px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="max-w-[520px] lg:max-w-[46%]">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.06em]">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[#ff3d9a]"
            />
            Broadband Speed Help
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            {HEADLINE.map((line) => (
              <span
                key={line.text}
                className={
                  line.accent
                    ? "block bg-gradient-to-r from-[#ff3d9a] to-[#c77dff] bg-clip-text text-transparent"
                    : "block"
                }
              >
                {line.text}
              </span>
            ))}
          </h1>

          <p className="mt-5 max-w-[440px] text-base leading-7 text-white/80">
            Learn how to measure your connection, understand the numbers, and
            find help if it feels slow.
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

        {/* Mobile: card + image stacked */}
        <div className="mt-10 space-y-5 lg:hidden">
          <DiagramCard className="w-full max-w-[400px]" />
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/Images/speed/1.png"
              alt="Technician with a laptop showing an internet speed test gauge"
              fill
              sizes="90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
