import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Grid2x2,
  Hash,
  Layers,
  MessageSquare,
  Phone,
  PhoneCall,
  ShieldCheck,
  Smartphone,
  User,
  Wifi,
  type LucideIcon,
} from "lucide-react";

const HEADLINE = [
  { text: "Find the right", accent: false },
  { text: "calling package.", accent: true },
] as const;

const ACTIONS = [
  { label: "Discuss your voice needs", href: "/contact", primary: true },
  { label: "Explore business landlines", href: "/landlines", primary: false },
] as const;

const PILLS: readonly { label: string; icon: LucideIcon }[] = [
  { label: "Inclusive calls", icon: PhoneCall },
  { label: "Voice + features", icon: Layers },
  { label: "Multiple sites", icon: Grid2x2 },
  { label: "Voice + broadband/mobile", icon: Wifi },
] as const;

const INCLUDES = [
  {
    title: "Phone line or user seat",
    text: "The service your calls run on",
    icon: Smartphone,
    tone: "bg-[#fdf0f6]",
    iconTone: "bg-white text-[#e6007e]",
    offset: "",
  },
  {
    title: "Your number(s)",
    text: "New or kept from another provider",
    icon: Hash,
    tone: "bg-[#f3f0fc]",
    iconTone: "bg-white text-[#6a48d7]",
    offset: "translate-x-2",
  },
  {
    title: "Call allowance",
    text: "Which calls are included",
    icon: Phone,
    tone: "bg-[#eef4fc]",
    iconTone: "bg-white text-[#3b6ce0]",
    offset: "translate-x-4",
  },
  {
    title: "Features & extras",
    text: "Voicemail, menus, queues",
    icon: MessageSquare,
    tone: "bg-[#eaf7ef]",
    iconTone: "bg-white text-[#1f9d55]",
    offset: "translate-x-6",
  },
] as const;

export default function VoiceBundlesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#fcebf5] via-[#faf8fd] to-[#f4f1fc] text-[#1b1740]">
      <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 px-6 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-16">
        {/* Left */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#f5cde2] bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.06em] text-[#b81d70] shadow-sm backdrop-blur-xs">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[#e6007e] ring-4 ring-[#e6007e]/20"
            />
            Landlines &amp; Voice · Voice Bundles
          </p>

          <h1 className="mt-5 text-4xl font-black leading-[1.06] tracking-tight sm:text-5xl lg:text-[54px]">
            {HEADLINE.map((line) => (
              <span
                key={line.text}
                className={
                  line.accent
                    ? "block bg-gradient-to-r from-[#e6007e] to-[#7b3fe4] bg-clip-text text-transparent"
                    : "block text-[#484c96]"
                }
              >
                {line.text}
              </span>
            ))}
          </h1>

          <p className="mt-5 max-w-[440px] text-base leading-7 text-[#4a4869]">
            Explore what an inclusive calling package may cover and ask our team
            to confirm the right service for your business.
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

          <ul className="mt-6 flex max-w-[480px] flex-wrap gap-2.5">
            {PILLS.map((pill) => {
              const Icon = pill.icon;
              return (
                <li
                  key={pill.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white bg-white/95 px-4 py-2 text-xs font-semibold text-[#1b1740] shadow-[0_4px_14px_rgba(27,23,64,0.05)]"
                >
                  <Icon
                    className="h-3.5 w-3.5 text-[#e6007e]"
                    aria-hidden="true"
                  />
                  {pill.label}
                </li>
              );
            })}
          </ul>

          <Link
            href="/faqs"
            className="mt-6 inline-flex items-center gap-2 border-b border-[#e6007e]/40 pb-1.5 text-sm font-semibold text-[#1b1740] transition hover:border-[#e6007e]"
          >
            <User className="h-4 w-4 text-[#5b6578]" aria-hidden="true" />
            Already a customer? Get help with your current plan
            <ChevronRight
              className="h-4 w-4 text-[#5b6578]"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Right */}
        <div className="relative mx-auto h-[470px] w-full max-w-[540px] sm:h-[510px] lg:max-w-none">
          {/* Dashed outer circle */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-[-8%] top-[-6%] hidden h-[106%] w-[72%] rounded-full border border-dashed border-[#e8aed4] lg:block"
          />

          {/* Main pill-arched photo */}
          <div className="absolute right-[2%] top-0 h-[82%] w-[48%] overflow-hidden rounded-t-full rounded-b-[40px] border-4 border-white shadow-[0_24px_50px_rgba(27,23,64,0.12)]">
            <Image
              src="/Images/voice/1.png"
              alt="Colleagues in a business meeting with a laptop"
              fill
              priority
              sizes="(min-width: 1024px) 26vw, 48vw"
              className="object-cover"
            />
          </div>

          {/* Tilted card frame with counter-rotated inner image so the image itself stays straight */}
          <div className="absolute bottom-[1%] right-[1%] z-20 h-[31%] w-[26%] min-w-[115px] -rotate-[4deg] overflow-hidden rounded-[22px] border-[5px] border-white shadow-[0_18px_36px_rgba(27,23,64,0.16)]">
            <div className="relative h-full w-full rotate-[4deg] scale-[1.12]">
              <Image
                src="/Images/voice/2.png"
                alt="Team working together in an office"
                fill
                sizes="150px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Uptime pill overlapping top-right of card & photo */}
          <span className="absolute right-[-1%] top-[16%] z-20 inline-flex items-center gap-2 rounded-full border border-[#eceaf5] bg-white px-4 py-2 text-xs font-semibold text-[#1b1740] shadow-[0_10px_25px_rgba(27,23,64,0.1)]">
            <ShieldCheck
              className="h-4 w-4 shrink-0 text-[#1f9d55]"
              aria-hidden="true"
            />
            Up to 24-month terms for small businesses
          </span>

          {/* Package card */}
          <div className="absolute left-[2%] top-[6%] z-10 w-[62%] max-w-[300px] rounded-[24px] border border-white/80 bg-white p-5 shadow-[0_24px_60px_rgba(27,23,64,0.12)]">
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-extrabold leading-5 text-[#1b1740]">
                What a calling package
                <br />
                can include
              </p>
              <span className="rounded-md border border-[#e5e7ef] bg-[#f8f9fc] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.06em] text-[#7b849b]">
                Example
              </span>
            </div>

            <ul className="mt-3.5 space-y-2.5">
              {INCLUDES.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.title}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 shadow-[0_2px_8px_rgba(27,23,64,0.03)] ${item.tone} ${item.offset}`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg shadow-2xs ${item.iconTone}`}
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold leading-4 text-[#1b1740]">
                        {item.title}
                      </span>
                      <span className="mt-0.5 block text-[11px] leading-3.5 text-[#646d82]">
                        {item.text}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 flex items-center justify-between border-t border-[#f0f1f6] pt-3.5">
              <span className="text-xs font-semibold leading-4 text-[#646d82]">
                Monthly
                <br />
                total
              </span>
              <span className="rounded-full bg-[#fde8f3] px-3.5 py-1.5 text-xs font-bold text-[#d81b7a]">
                Confirmed in your quote
              </span>
            </div>
          </div>

          {/* Bottom gradient CTA pill */}
          <Link
            href="/contact"
            className="absolute bottom-[5%] left-[12%] z-20 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e6007e] to-[#7b3fe4] px-5 py-2.5 text-xs font-semibold text-white shadow-[0_12px_28px_-4px_rgba(180,30,160,0.45)] transition hover:opacity-95"
          >
            <PhoneCall className="h-3.5 w-3.5" aria-hidden="true" />
            Ask which UK calls are included
          </Link>
        </div>
      </div>
    </section>
  );
}
