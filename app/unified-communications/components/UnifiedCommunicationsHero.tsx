import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  Check,
  ChevronRight,
  MessageSquare,
  Mic,
  MicOff,
  MonitorUp,
  Phone,
  PhoneOff,
  Video,
} from "lucide-react";

const heroContent = {
  eyebrow: "ZOIKO FOR BUSINESS",
  headingPrimary: "Unified",
  headingAccent: "communications",
  description:
    "Explore how calling, meetings and messaging could work together for your organisation — and what to assess before you choose.",
  primaryCta: {
    label: "Discuss your requirements",
    href: "/contact",
  },
  secondaryCta: {
    label: "What is UC?",
    href: "#what-is-uc",
  },
  trustPills: [
    {
      label: "Evaluation, not instant setup",
      icon: Check,
      iconClass: "text-[#0d9488]",
    },
    {
      label: "Emergency calling reviewed",
      icon: AlertTriangle,
      iconClass: "text-[#d97706]",
    },
  ],
  windowTitle: "Team meeting",
  windowBadge: "Illustrative",
  caption: "Illustrative interface — features and availability to be confirmed",
  backgroundImage: "/Images/cloud/1.png",
  tiles: {
    meetings: {
      label: "Meetings",
      image: "/Images/uni/1.png",
      alt: "Colleagues celebrating together over a laptop during a business meeting",
    },
    calling: {
      label: "Calling",
      image: "/Images/uni/2.png",
      alt: "Team presenter leading a group discussion in an open office space",
    },
    messaging: {
      label: "Messaging",
      image: "/Images/uni/3.png",
      alt: "Colleague working on a laptop in a modern office",
    },
  },
} as const;

export default function UnifiedCommunicationsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4f5fb] px-4 py-14 sm:px-8 lg:px-12 lg:py-16">
      {/* Topographic / subtle background texture */}
      <Image
        src={heroContent.backgroundImage}
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="pointer-events-none object-cover object-center opacity-55"
      />

      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
        {/* Left copy & CTAs */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2.5">
            <span className="h-[1.5px] w-5 bg-[#c81878]" aria-hidden="true" />
            <p className="text-[10.5px] font-extrabold uppercase tracking-[0.18em] text-[#9d175d]">
              {heroContent.eyebrow}
            </p>
          </div>

          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-[50px]">
            <span className="block text-[#0c1438]">
              {heroContent.headingPrimary}
            </span>
            <span className="mt-0.5 block bg-gradient-to-r from-[#7c3aed] to-[#9333ea] bg-clip-text text-transparent">
              {heroContent.headingAccent}
            </span>
          </h1>

          <p className="mt-4 max-w-[420px] text-[14px] leading-[1.62] text-[#4b5563]">
            {heroContent.description}
          </p>

          {/* Primary & secondary buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={heroContent.primaryCta.href}
              className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-[#e2187d] to-[#c91485] px-5 text-[13px] font-semibold text-white shadow-[0_8px_22px_rgba(226,24,125,0.35)] transition hover:brightness-110"
            >
              <span>{heroContent.primaryCta.label}</span>
              <ChevronRight
                className="h-4 w-4 shrink-0 stroke-[2.5]"
                aria-hidden="true"
              />
            </Link>

            <Link
              href={heroContent.secondaryCta.href}
              className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-xl border border-[#cbd5e1] bg-white px-5 text-[13px] font-semibold text-[#0c1438] shadow-2xs transition hover:border-[#94a3b8] hover:bg-[#f8fafc]"
            >
              {heroContent.secondaryCta.label}
            </Link>
          </div>

          {/* Bottom disclaimer pills */}
          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            {heroContent.trustPills.map((pill) => {
              const Icon = pill.icon;

              return (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#e2e8f0] bg-white/95 px-3 py-1.5 text-[11px] font-medium text-[#334155] shadow-2xs"
                >
                  <Icon
                    className={`h-3.5 w-3.5 shrink-0 stroke-[2.2] ${pill.iconClass}`}
                    aria-hidden="true"
                  />
                  <span>{pill.label}</span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Right illustrative dark UC window */}
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-[26px] bg-[#080d28] p-4 shadow-[0_22px_50px_rgba(8,13,40,0.22)] sm:p-5">
            {/* Window header bar */}
            <div className="flex items-center justify-between gap-3 pb-3.5">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#fb7185]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
                </div>
                <span className="text-[11.5px] font-medium text-white/75">
                  {heroContent.windowTitle}
                </span>
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e2187d] px-2.5 py-0.5 text-[9.5px] font-bold tracking-[0.04em] text-white">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-white"
                  aria-hidden="true"
                />
                <span>{heroContent.windowBadge}</span>
              </span>
            </div>

            {/* Video & messaging grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-12">
              {/* Left large Meetings tile */}
              <div className="relative min-h-[250px] overflow-hidden rounded-2xl border-2 border-[#34d399] bg-[#111827] sm:col-span-7 sm:min-h-[300px]">
                <Image
                  src={heroContent.tiles.meetings.image}
                  alt={heroContent.tiles.meetings.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 58vw, 34vw"
                  className="object-cover object-center"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
                  aria-hidden="true"
                />

                <span
                  className="absolute top-2.5 right-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-black/35 text-white/80 backdrop-blur-xs"
                  aria-hidden="true"
                >
                  <Mic className="h-3 w-3" />
                </span>

                <span className="absolute bottom-2.5 left-2.5 inline-flex items-center gap-1.5 rounded-lg bg-[#080d28]/80 px-2.5 py-1 text-[10.5px] font-semibold text-white backdrop-blur-xs">
                  <Video
                    className="h-3 w-3 text-[#34d399]"
                    aria-hidden="true"
                  />
                  <span>{heroContent.tiles.meetings.label}</span>
                </span>
              </div>

              {/* Right 2 stacked tiles: Calling + Messaging */}
              <div className="flex flex-col gap-3 sm:col-span-5">
                {/* Top Calling tile */}
                <div className="relative min-h-[144px] flex-1 overflow-hidden rounded-2xl bg-[#111827]">
                  <Image
                    src={heroContent.tiles.calling.image}
                    alt={heroContent.tiles.calling.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 42vw, 24vw"
                    className="object-cover object-center"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                    aria-hidden="true"
                  />

                  <span
                    className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/35 text-white/80 backdrop-blur-xs"
                    aria-hidden="true"
                  >
                    <MicOff className="h-3 w-3" />
                  </span>

                  <span className="absolute bottom-2.5 left-2.5 inline-flex items-center gap-1.5 rounded-lg bg-[#080d28]/80 px-2.5 py-1 text-[10.5px] font-semibold text-white backdrop-blur-xs">
                    <Phone
                      className="h-3 w-3 text-[#38bdf8]"
                      aria-hidden="true"
                    />
                    <span>{heroContent.tiles.calling.label}</span>
                  </span>
                </div>

                {/* Bottom Messaging tile with floating Team Chat bubble */}
                <div className="relative min-h-[144px] flex-1 overflow-hidden rounded-2xl bg-[#111827]">
                  <Image
                    src={heroContent.tiles.messaging.image}
                    alt={heroContent.tiles.messaging.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 42vw, 24vw"
                    className="object-cover object-left"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                    aria-hidden="true"
                  />

                  <span
                    className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/35 text-white/80 backdrop-blur-xs"
                    aria-hidden="true"
                  >
                    <Mic className="h-3 w-3" />
                  </span>

                  {/* Floating Team Chat card */}
                  <div className="absolute top-6 right-2.5 left-9 rounded-xl bg-white p-2.5 shadow-[0_8px_20px_rgba(0,0,0,0.22)]">
                    <p className="text-[7.5px] font-extrabold uppercase tracking-[0.12em] text-[#64748b]">
                      TEAM CHAT
                    </p>

                    <div className="mt-1 flex items-start gap-1.5">
                      <span
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded-full bg-[#c026d3]"
                        aria-hidden="true"
                      />
                      <p className="rounded-md bg-[#f1f5f9] px-1.5 py-1 text-[8.5px] leading-[1.3] text-[#1e293b]">
                        Can we move today’s call to 3pm?
                      </p>
                    </div>

                    <div className="mt-1 flex items-center justify-end gap-1.5">
                      <p className="rounded-md bg-[#f3e8ff] px-1.5 py-0.5 text-[8.5px] leading-[1.3] text-[#581c87]">
                        Yes — I’ll update the invite.
                      </p>
                      <span
                        className="h-3.5 w-3.5 shrink-0 rounded-full bg-[#6366f1]"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <span className="absolute bottom-2.5 left-2.5 inline-flex items-center gap-1.5 rounded-lg bg-[#080d28]/80 px-2.5 py-1 text-[10.5px] font-semibold text-white backdrop-blur-xs">
                    <MessageSquare
                      className="h-3 w-3 text-[#c084fc]"
                      aria-hidden="true"
                    />
                    <span>{heroContent.tiles.messaging.label}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom call control dock */}
            <div
              className="mt-3.5 flex items-center justify-center gap-2.5"
              aria-hidden="true"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/85">
                <Mic className="h-3.5 w-3.5" />
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/85">
                <Video className="h-3.5 w-3.5" />
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/85">
                <MonitorUp className="h-3.5 w-3.5" />
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/85">
                <MessageSquare className="h-3.5 w-3.5" />
              </span>
              <span className="flex h-8 w-11 items-center justify-center rounded-full bg-[#f43f5e] text-white shadow-xs">
                <PhoneOff className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>

          <p className="mt-2.5 text-center text-[10.5px] text-[#64748b]">
            {heroContent.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
