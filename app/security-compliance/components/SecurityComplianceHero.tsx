import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  CircleAlert,
  Lock,
  User,
  Check,
  FileText,
} from "lucide-react";

const HEADLINE = [
  [{ text: "Security and compliance", accent: false }],
  [{ text: "for connected businesses.", accent: true }],
] as const;

const ACTIONS = [
  {
    label: "Discuss security requirements",
    href: "/contact",
    primary: true,
    chevron: true,
  },
  {
    label: "Explore business solutions",
    href: "/business",
    primary: false,
    chevron: false,
  },
] as const;

const WHO_LOOKS = [
  {
    text: "Account changes verified by Zoiko",
    icon: Check,
    tone: "text-[#1f9d55]",
  },
  {
    text: "Number ports need authorisation",
    icon: Check,
    tone: "text-[#1f9d55]",
  },
  {
    text: "Your Wi-Fi & devices: your team",
    icon: User,
    tone: "text-[#4a6cf7]",
  },
] as const;

const HEX_CLIP = "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)";

export default function SecurityComplianceHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#070826] via-[#0c0e3d] to-[#121659] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_50%,rgba(65,98,255,0.24),transparent_58%)]"
      />

      <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 px-6 py-12 sm:px-8 lg:grid-cols-[1.06fr_1fr] lg:px-10 lg:py-16">
        {/* Left */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/90">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#ff2a85]"
            />
            Business Security &amp; Compliance
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-[43px]">
            {HEADLINE.map((line, i) => (
              <span key={i} className="block">
                {line.map((part) => (
                  <span
                    key={part.text}
                    className={
                      part.accent
                        ? "bg-gradient-to-r from-[#4cc9f0] via-[#7c8cff] to-[#b565f2] bg-clip-text text-transparent"
                        : "text-white"
                    }
                  >
                    {part.text}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p className="mt-5 max-w-[490px] text-[15px] leading-[1.65] text-white/75">
            Understand the safeguards and responsibilities that matter when
            choosing business mobile, broadband and voice services. Talk to our
            team about the information your organisation needs.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            {ACTIONS.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={
                  action.primary
                    ? "inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#e6007e] to-[#c71574] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_-4px_rgba(230,0,126,0.55)] transition hover:brightness-110"
                    : "inline-flex items-center gap-1.5 rounded-lg border border-white/25 bg-[#0e1247]/80 px-5 py-3 text-sm font-semibold text-white/95 transition hover:border-white/45 hover:bg-white/10"
                }
              >
                <span>{action.label}</span>
                {action.chevron && (
                  <ChevronRight
                    className="h-4 w-4 text-white/90"
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </div>

          <Link
            href="/faqs"
            className="mt-6 inline-flex items-center gap-2 border-b border-[#e6007e]/80 pb-1 text-[13px] font-medium text-white/90 transition hover:text-white"
          >
            <CircleAlert
              className="h-4 w-4 shrink-0 text-white/80"
              aria-hidden="true"
            />
            <span>
              Worried about a suspicious service change? See what to do
            </span>
            <ChevronRight
              className="h-3.5 w-3.5 shrink-0 text-white/80"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Right */}
        <div className="relative mx-auto h-[410px] w-full max-w-[540px] sm:h-[440px] lg:max-w-none">
          {/* Outer subtle hexagon backdrop */}
          <div
            aria-hidden="true"
            className="absolute right-[4%] top-[2%] aspect-[0.95] w-[70%] bg-white/[0.07]"
            style={{ clipPath: HEX_CLIP }}
          />

          {/* Main gradient-bordered hexagon image */}
          <div
            className="absolute right-[7%] top-[6%] aspect-[0.95] w-[64%] bg-gradient-to-br from-[#4cc9f0]/80 via-[#4361ee]/70 to-[#7b3fe4]/80 p-[2px]"
            style={{ clipPath: HEX_CLIP }}
          >
            <div
              className="relative h-full w-full overflow-hidden bg-[#0c0e3d]"
              style={{ clipPath: HEX_CLIP }}
            >
              <Image
                src="/Images/comp/1.png"
                alt="Laptop and phone showing a secure padlock"
                fill
                priority
                sizes="(min-width: 1024px) 34vw, 75vw"
                className="object-cover"
              />
              <span className="absolute left-1/2 top-[46%] flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/25 bg-white/25 shadow-lg backdrop-blur-md">
                <Lock
                  className="h-7 w-7 stroke-[2.2] text-white"
                  aria-hidden="true"
                />
              </span>
            </div>
          </div>

          {/* Evidence chip */}
          <div className="absolute right-[1%] top-[10%] z-10 flex max-w-[235px] items-start gap-2.5 rounded-xl border border-white/15 bg-[#151a52]/90 px-3.5 py-2.5 text-xs leading-[1.45] text-white/90 shadow-xl backdrop-blur-md">
            <FileText
              className="mt-0.5 h-4 w-4 shrink-0 text-[#4cc9f0]"
              aria-hidden="true"
            />
            <span>Evidence on request — no badges without proof</span>
          </div>

          {/* Who looks after what */}
          <div className="absolute bottom-[4%] left-[4%] z-10 w-[62%] max-w-[295px] rounded-xl bg-white p-4 text-[#161336] shadow-[0_20px_50px_rgba(4,5,24,0.55)]">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[13px] font-bold tracking-[-0.01em] text-[#161336]">
                Who looks after what
              </p>
              <span className="rounded bg-[#eef0f6] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#646e82]">
                Example
              </span>
            </div>
            <ul className="mt-3 space-y-2.5">
              {WHO_LOOKS.map((row) => {
                const Icon = row.icon;
                return (
                  <li
                    key={row.text}
                    className="flex items-center gap-2 text-[12px] leading-snug text-[#2d2a4a]"
                  >
                    <Icon
                      className={`h-3.5 w-3.5 shrink-0 stroke-[2.4] ${row.tone}`}
                      aria-hidden="true"
                    />
                    <span>{row.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Telecom scope */}
          <div className="absolute bottom-[2%] right-[1%] z-10 rounded-xl border border-white/15 bg-[#12164c]/90 px-4 py-2.5 shadow-xl backdrop-blur-md">
            <p className="text-[12px] font-bold text-white">Telecom scope</p>
            <p className="mt-0.5 text-[11px] text-white/70">
              Mobile · Broadband · Voice
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
