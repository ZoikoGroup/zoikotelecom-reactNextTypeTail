import Image from "next/image";
import Link from "next/link";
import {
  ChartNoAxesColumn,
  ChevronRight,
  CircleCheck,
  FileText,
  MapPin,
  Repeat,
  Signal,
  User,
  Users,
} from "lucide-react";

const content = {
  eyebrow: "BUSINESS CONNECTIVITY · MOBILE",
  headingLine1: "Business mobile",
  headingLine2Prefix: "connectivity ",
  headingLine2Gradient: "for",
  headingLine3: "your team.",
  description:
    "Explore mobile SIM options for teams, discuss device needs and number transfers, and get guidance on the current plans and terms available to your business.",
  primary: { label: "Speak to the business team", href: "/business/contact" },
  secondary: { label: "Explore mobile options", href: "/business/mobile" },
  help: {
    label: "Already a business customer? Get help with your service",
    href: "/support",
  },
  network: "On the EE network",
  cardTitle: "Your team at a glance",
  cardTag: "EXAMPLE",
  proposal: "Proposal confirmed before you commit",
} as const;

const glanceRows = [
  { label: "People needing a SIM", value: "12", icon: Users },
  { label: "eSIM-ready devices", value: "8", icon: FileText },
  { label: "Numbers to keep", value: "9", icon: Repeat },
  { label: "Work locations", value: "2 sites", icon: MapPin },
  { label: "Data need", value: "Medium", icon: ChartNoAxesColumn },
] as const;

const photos = [
  {
    src: "/Images/mbl/1.png",
    alt: "Yellow toolbox and hand sketching a floor plan",
    className: "row-span-2",
  },
  {
    src: "/Images/mbl/2.png",
    alt: "Team meeting around a table",
    className: "",
  },
  {
    src: "/Images/mbl/3.png",
    alt: "Smartphone showing app icons",
    className: "",
  },
] as const;

export default function BusinessMobileHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#14104a] bg-[radial-gradient(ellipse_at_top_left,#3b1560_0%,transparent_45%),radial-gradient(ellipse_at_bottom_right,#2a1a8a_0%,transparent_55%),linear-gradient(135deg,#120f45,#1a1560_55%,#1d1a78)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 14px)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-12 px-6 py-12 sm:px-10 lg:flex-row lg:items-center lg:gap-6 lg:px-[7%] lg:py-[88px]">
        {/* Left content */}
        <div className="w-full lg:w-[50%]">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.06em] text-white">
            <span className="h-2 w-2 rounded-full bg-[#e8157f]" />
            {content.eyebrow}
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[58px]">
            {content.headingLine1}
            <br />
            {content.headingLine2Prefix}
            <span className="bg-gradient-to-r from-[#c58bff] to-[#ff7ac0] bg-clip-text text-transparent">
              {content.headingLine2Gradient}
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#e48cf0] to-[#ff6fb5] bg-clip-text text-transparent">
              {content.headingLine3}
            </span>
          </h1>

          <p className="mt-5 max-w-[560px] text-base leading-7 text-white/85 sm:text-lg">
            {content.description}
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={content.primary.href}
              className="inline-flex h-12 items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#e8157f] to-[#f0307f] px-7 text-sm font-bold text-white shadow-[0_8px_24px_rgba(232,21,127,0.35)] transition hover:brightness-110 sm:text-base"
            >
              {content.primary.label}
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href={content.secondary.href}
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/60 px-7 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
            >
              {content.secondary.label}
            </Link>
          </div>

          <Link
            href={content.help.href}
            className="mt-5 inline-flex items-center gap-2.5 border-b border-white/40 pb-1 text-sm font-medium text-white/90 transition hover:text-white"
          >
            <User className="h-4 w-4" aria-hidden="true" />
            {content.help.label}
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto flex w-full max-w-[560px] flex-col gap-4 lg:mx-0 lg:block lg:aspect-[0.98/1] lg:w-[50%] lg:max-w-none lg:gap-0">
          {/* Photos: occupy right ~73% so the first image stays visible beside the card */}
          <div className="grid h-[320px] w-full grid-cols-[1.15fr_1fr] grid-rows-2 gap-3 sm:h-[380px] lg:absolute lg:right-0 lg:top-[9%] lg:h-[83%] lg:w-[73%]">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className={`relative overflow-hidden rounded-2xl shadow-xl ${photo.className}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 16vw, 45vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* EE network pill */}
          <div className="z-20 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#1a1d4a] shadow-xl lg:absolute lg:left-[1%] lg:top-[1%]">
            <Signal className="h-4 w-4 text-[#e8157f]" aria-hidden="true" />
            {content.network}
          </div>

          {/* Glance card */}
          <div className="z-10 w-full rounded-2xl bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] lg:absolute lg:left-0 lg:top-[12%] lg:w-[48%] lg:p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-bold text-[#1a1d4a]">
                {content.cardTitle}
              </p>
              <span className="rounded bg-[#eceeff] px-2 py-0.5 text-sm font-semibold tracking-wide text-[#4a52d6]">
                {content.cardTag}
              </span>
            </div>

            <ul className="mt-2 divide-y divide-[#eef0f6]">
              {glanceRows.map(({ label, value, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center justify-between gap-2 py-2 text-sm"
                >
                  <span className="flex min-w-0 items-center gap-2.5 text-[#4b5068]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#fde8f2] text-[#e8157f]">
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span className="truncate">{label}</span>
                  </span>
                  <span className="shrink-0 font-bold text-[#1a1d4a]">
                    {value}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#e6e8f2]">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[#7a3cf0] to-[#e8157f]" />
            </div>
          </div>

          {/* Proposal pill */}
          <div className="z-20 inline-flex w-fit items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#1a1d4a] shadow-xl lg:absolute lg:bottom-[1%] lg:left-[4%]">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-[#7a3cf0] to-[#e8157f] text-white">
              <CircleCheck className="h-4 w-4" aria-hidden="true" />
            </span>
            {content.proposal}
          </div>
        </div>
      </div>
    </section>
  );
}
