import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  MessageSquare,
  Phone,
  PhoneCall,
  User,
  type LucideIcon,
} from "lucide-react";

const HEADLINE = [
  { text: "Choose how", accent: false },
  { text: "your business", accent: false },
  { text: "handles calls.", accent: true },
] as const;

const ACTIONS = [
  { label: "Discuss call features", href: "/contact", primary: true },
  { label: "Explore business voice", href: "/business-voice", primary: false },
] as const;

const FLOW_ITEMS: ReadonlyArray<{
  title: string;
  subtitle: string;
  icon: LucideIcon;
  tone: string;
}> = [
  {
    title: "Incoming call",
    subtitle: "to your business number",
    icon: PhoneCall,
    tone: "bg-[#fdf0f6] text-[#e6007e]",
  },
  {
    title: "Greeting & menu",
    subtitle: '"Press 1 for sales, 2 for support"',
    icon: MessageSquare,
    tone: "bg-[#fdf0f6] text-[#e6007e]",
  },
];

const QUEUE_TARGETS = [
  { label: "Sales team", tone: "bg-[#fdf0f6] text-[#e6007e]" },
  { label: "Support queue", tone: "bg-[#f3f0fc] text-[#6a48d7]" },
  { label: "Voicemail", tone: "bg-[#eef4fc] text-[#3b6ce0]" },
] as const;

const WAVE = [6, 10, 14, 8, 12, 6, 10];

/* Subtle topographic contour lines for the background */
const TOPO_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400' fill='none' stroke='%23e6b8d4' stroke-opacity='0.35' stroke-width='1'%3E%3Cpath d='M-20 80C80 30 160 130 260 80S440 30 620 90'/%3E%3Cpath d='M-20 110C80 60 160 160 260 110S440 60 620 120'/%3E%3Cpath d='M-20 140C80 90 160 190 260 140S440 90 620 150'/%3E%3Cpath d='M-20 260C100 210 180 310 290 260S460 210 620 270'/%3E%3Cpath d='M-20 290C100 240 180 340 290 290S460 240 620 300'/%3E%3Cpath d='M-20 320C100 270 180 370 290 320S460 270 620 330'/%3E%3Cellipse cx='120' cy='200' rx='60' ry='30'/%3E%3Cellipse cx='120' cy='200' rx='90' ry='48'/%3E%3Cellipse cx='480' cy='190' rx='50' ry='26'/%3E%3Cellipse cx='480' cy='190' rx='80' ry='44'/%3E%3C/svg%3E\")";

export default function CallFeaturesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#fcebf5] via-[#faf8fd] to-[#f4f1fc] text-[#1b1740]">
      {/* Topographic pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ backgroundImage: TOPO_BG, backgroundSize: "600px 400px" }}
      />

      <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 px-6 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-16">
        {/* Left */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#f5cde2] bg-white/80 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-[#b81d70] shadow-sm backdrop-blur-xs">
            <span
              aria-hidden="true"
              className="flex h-4 w-4 items-center justify-center rounded-full border border-[#e6007e]/40 bg-[#fdf0f6] text-[#e6007e]"
            >
              <Phone className="h-2.5 w-2.5" />
            </span>
            Landlines &amp; Voice &middot; Call features
          </p>

          <h1 className="mt-5 text-4xl font-black leading-[1.06] tracking-tight sm:text-5xl lg:text-[54px]">
            {HEADLINE.map((line) => (
              <span
                key={line.text}
                className={
                  line.accent
                    ? "block bg-gradient-to-r from-[#e6007e] to-[#7b3fe4] bg-clip-text text-transparent"
                    : "block text-[#4b5cab]"
                }
              >
                {line.text}
              </span>
            ))}
          </h1>

          <p className="mt-5 max-w-[440px] text-base leading-7 text-[#545275]">
            Understand how call routing, reception menus, voicemail and queue
            features may support your team. Availability depends on your
            selected voice service and plan.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3.5">
            {ACTIONS.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={
                  action.primary
                    ? "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#e6007e] to-[#c41478] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_-6px_rgba(230,0,126,0.45)] transition hover:opacity-95"
                    : "inline-flex items-center rounded-xl border border-[#3d3a68]/30 bg-white px-6 py-3.5 text-sm font-semibold text-[#1b1740] shadow-xs transition hover:border-[#1b1740]"
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
            className="mt-7 inline-flex items-center gap-2 border-b border-[#e6007e]/40 pb-1.5 text-sm font-semibold text-[#1b1740] transition hover:border-[#e6007e]"
          >
            <User className="h-4 w-4 text-[#5b6578]" aria-hidden="true" />
            Already use Zoiko? Ask about your current voice features
            <ChevronRight
              className="h-4 w-4 text-[#5b6578]"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Right */}
        <div className="relative mx-auto h-[480px] w-full max-w-[540px] sm:h-[520px] lg:max-w-none">
          {/* Blurred pink circle decoration */}
          <div
            aria-hidden="true"
            className="absolute left-[44%] top-[-4%] h-[22%] w-[18%] rounded-full bg-gradient-to-br from-[#f9c6e0] to-[#f4b4d6] opacity-80 blur-[2px]"
          />

          {/* Main pill-arched photo */}
          <div className="absolute right-0 top-[4%] h-[86%] w-[58%] overflow-hidden rounded-t-full rounded-b-[36px] border-4 border-white shadow-[0_24px_50px_rgba(27,23,64,0.12)]">
            <Image
              src="/Images/call/1.png"
              alt="Team member wearing a headset in an office environment"
              fill
              priority
              sizes="(min-width: 1024px) 30vw, 58vw"
              className="object-cover"
            />
          </div>

          {/* Opening hours rule badge */}
          <span className="absolute right-[-2%] top-0 z-20 inline-flex flex-col gap-1.5 rounded-2xl border border-[#eceaf5] bg-white p-3.5 shadow-[0_12px_30px_rgba(27,23,64,0.1)]">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1b1740]">
              <Clock
                className="h-3.5 w-3.5 text-[#e6007e]"
                aria-hidden="true"
              />
              Opening hours rule
            </span>
            <span className="flex items-end gap-1 pt-1">
              <span className="h-6 w-3.5 rounded-xs bg-[#c93a9c]" />
              <span className="h-6 w-3.5 rounded-xs bg-[#b843b0]" />
              <span className="h-6 w-3.5 rounded-xs bg-[#a24cc0]" />
              <span className="h-6 w-3.5 rounded-xs bg-[#8f4ccf]" />
              <span className="h-6 w-3.5 rounded-xs bg-[#7b3fe4]" />
              <span className="h-3 w-3.5 rounded-xs bg-[#d0cbe7]" />
              <span className="h-2 w-3.5 rounded-xs bg-[#e3e0f0]" />
            </span>
            <span className="flex justify-between text-[9px] font-semibold text-[#8c88b4]">
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                <span key={i} className="w-3.5 text-center">
                  {d}
                </span>
              ))}
            </span>
          </span>

          {/* Flow card */}
          <div className="absolute left-[2%] top-[14%] z-10 w-[50%] max-w-[300px] rounded-[20px] border border-white/80 bg-white p-4 shadow-[0_24px_60px_rgba(27,23,64,0.12)]">
            <div className="flex items-start justify-between gap-2">
              <p className="text-[11px] font-extrabold text-[#1b1740]">
                How a call could flow
              </p>
              <span className="rounded-md border border-[#e5e7ef] bg-[#f8f9fc] px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.06em] text-[#7b849b]">
                Illustration
              </span>
            </div>

            <div className="mt-3.5 space-y-3">
              {FLOW_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-center gap-2.5">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${item.tone}`}
                    >
                      <Icon className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-bold leading-4 text-[#1b1740]">
                        {item.title}
                      </span>
                      <span className="block truncate text-[9px] leading-3 text-[#646d82]">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Queue targets */}
              <div className="grid grid-cols-3 gap-1.5 pt-0.5">
                {QUEUE_TARGETS.map((target) => (
                  <div
                    key={target.label}
                    className={`flex min-h-[34px] items-center justify-center rounded-md px-1.5 py-1.5 text-center text-[9px] font-bold leading-3 ${target.tone}`}
                  >
                    {target.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Voicemail pill */}
          <div className="absolute bottom-[8%] left-[6%] z-20 inline-flex items-center gap-2.5 rounded-full border border-[#eceaf5] bg-white px-3.5 py-2 shadow-[0_10px_25px_rgba(27,23,64,0.1)]">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#eef4fc] text-[#3b6ce0]">
              <Phone className="h-3 w-3" aria-hidden="true" />
            </span>
            <span className="text-xs font-bold text-[#1b1740]">
              New voicemail
            </span>
            <span className="flex items-center gap-[2px]" aria-hidden="true">
              {WAVE.map((h, i) => (
                <span
                  key={i}
                  style={{ height: h }}
                  className="w-[2px] rounded-full bg-[#7b3fe4]"
                />
              ))}
            </span>
          </div>

          {/* Bottom warning banner */}
          <div className="absolute bottom-0 right-[2%] z-20 w-[46%] max-w-[260px] rounded-xl bg-[#131138] p-3 text-white shadow-xl">
            <div className="flex items-center gap-2.5">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#e6007e] text-[9px] font-bold text-[#e6007e]">
                i
              </span>
              <p className="text-[10px] leading-[14px] text-[#e4e0f5]">
                Menus and forwarding should never get in the way of 999 calls
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
