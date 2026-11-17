import Image from "next/image";
import Link from "next/link";
import { ChevronRight, House, Map, MapPin } from "lucide-react";

const HEADLINE = [
  [{ text: "Check broadband", accent: false }],
  [
    { text: "availability ", accent: false },
    { text: "for your", accent: true },
  ],
  [{ text: "address", accent: true }],
] as const;

const CHIPS = [
  {
    title: "Postcode",
    text: "Covers many homes",
    icon: Map,
    position: "left-0 top-[6%] lg:-left-4",
    tone: "bg-[#ece6fb] text-[#5b3fc4]",
  },
  {
    title: "Your address",
    text: "Flat or house number",
    icon: House,
    position: "right-0 top-[40%] lg:-right-2",
    tone: "bg-[#ece6fb] text-[#5b3fc4]",
  },
  {
    title: "Verified answer",
    text: "For your exact property",
    icon: MapPin,
    position: "bottom-[4%] left-[6%] lg:left-[2%]",
    tone: "bg-[#fde8f3] text-[#e6007e]",
  },
] as const;

export default function CheckAvailabilityHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0b0a2e] via-[#1a1155] to-[#2a1670] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_85%,rgba(230,0,126,0.25),transparent_50%)]"
      />

      <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 px-6 py-12 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:px-10 lg:py-14">
        {/* Left */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.06em]">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[#ff3d9a]"
            />
            Broadband &amp; Fibre · Check Availability
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[52px]">
            {HEADLINE.map((line, i) => (
              <span key={i} className="block">
                {line.map((part) => (
                  <span
                    key={part.text}
                    className={part.accent ? "text-[#e879f9]" : ""}
                  >
                    {part.text}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p className="mt-5 max-w-[440px] text-base leading-7 text-white/80">
            Services vary by exact property and installation conditions. Get a
            verified answer before choosing a plan.
          </p>

          <form
            action="/broadband/journey"
            className="mt-7 flex max-w-[500px] items-center gap-3 rounded-xl bg-white p-2 pl-4 shadow-xl"
          >
            <label htmlFor="check-postcode" className="sr-only">
              Enter your postcode
            </label>
            <input
              id="check-postcode"
              name="postcode"
              placeholder="Enter your postcode"
              autoComplete="postal-code"
              className="min-w-0 flex-1 bg-transparent text-sm text-[#1b1740] outline-none placeholder:text-[#8a90a6]"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-gradient-to-r from-[#e6007e] to-[#c4237f] px-5 py-3 text-sm font-semibold text-white"
            >
              Ask about availability
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>

          <Link
            href="/bt-broadband"
            className="mt-4 inline-flex items-center rounded-lg border border-white/50 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
          >
            Explore broadband options
          </Link>
        </div>

        {/* Right */}
        <div className="relative mx-auto aspect-[0.95] w-full max-w-[420px] lg:max-w-[440px]">
          <div className="absolute inset-[4%] rounded-full bg-gradient-to-br from-[#e6007e]/30 to-[#3d5afe]/30 blur-2xl" />

          {/* Map-pin shaped image */}
          <div
            className="absolute inset-x-[10%] top-0 h-[92%] bg-gradient-to-br from-[#e6007e] to-[#7b3fe4] p-[3px]"
            style={{
              clipPath: "path('M0 0')",
              borderRadius: "9999px 9999px 0 0",
            }}
          />
          <div className="absolute inset-x-[10%] top-0 h-[92%] rotate-45 overflow-hidden rounded-[50%_50%_0_50%] border-[6px] border-white bg-white shadow-2xl">
            <div className="absolute inset-[-20%] -rotate-45">
              <Image
                src="/Images/check/1.png"
                alt="Detached white house with a picket fence"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>

          {CHIPS.map((chip) => {
            const Icon = chip.icon;
            return (
              <div
                key={chip.title}
                className={`absolute z-10 flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-[#1b1740] shadow-xl ${chip.position}`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg ${chip.tone}`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-bold leading-4">
                    {chip.title}
                  </span>
                  <span className="block text-sm leading-4 text-[#5b6578]">
                    {chip.text}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
