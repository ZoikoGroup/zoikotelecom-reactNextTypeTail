import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Cpu, Headphones } from "lucide-react";

const sectionContent = {
  step: "01",
  eyebrow: "WHAT WE CAN DISCUSS",
  headingPrefix: "Business mobile, ",
  headingAccent: "your way",
  description:
    "Each card is a conversation starter — not a price or an entitlement.",
} as const;

const featuredCard = {
  badge: "BUSINESS SIMS",
  badgeClass: "bg-[#3b82f6] text-white",
  title: "SIM plans for one person or a whole team",
  description:
    "Single lines or teams. Terms and allowances come only from a confirmed business proposal.",
  ctaLabel: "Ask about business sims",
  href: "/contact",
  image: "/Images/mob/2.png",
  alt: "Close-up of a smartphone home screen showing messaging and productivity app icons",
} as const;

const topRightCards = [
  {
    badge: "DEVICES",
    badgeClass: "bg-[#8b5cf6] text-white",
    title: "Handsets or SIM only",
    description:
      "Bring your own devices or ask about new ones — stock isn’t shown here.",
    ctaLabel: "Ask about devices",
    href: "/contact",
    image: "/Images/mob/3.png",
    alt: "Top-down view of a smartphone displaying colourful app icons on a light surface",
  },
  {
    badge: "ROAMING",
    badgeClass: "bg-[#e11d74] text-white",
    title: "Roaming & travel",
    description: "Zones, caps, fair use and charges vary by plan and country.",
    ctaLabel: "Ask about roaming",
    href: "/contact",
    image: "/Images/mob/4.png",
    alt: "Aircraft wing flying above soft clouds against a pale blue sky",
  },
] as const;

const wideBottomCard = {
  badge: "TEAMS",
  badgeClass: "bg-[#10b981] text-white",
  title: "Multiple lines",
  description:
    "Billing account, employee lines and cost centres — discussed with the business team. Online line management isn’t confirmed.",
  ctaLabel: "Ask about teams",
  href: "/contact",
  image: "/Images/mob/5.png",
  alt: "Team colleagues working together on laptops around a shared desk",
} as const;

const bottomCallouts = [
  {
    title: "Need SIMs for devices or machines?",
    description: "IoT and M2M SIMs are a separate product family.",
    icon: Cpu,
  },
  {
    title: "Already a business customer?",
    description:
      "Add lines or replace SIMs through Support, not a sales enquiry.",
    icon: Headphones,
  },
] as const;

export default function BusinessMobileYourWaySection() {
  return (
    <section
      id="what-we-can-discuss"
      className="w-full bg-white px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Left-aligned section header */}
        <div>
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="italic text-[#e093b9]">{sectionContent.step}</span>
            <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold tracking-[-0.025em] text-[#0c1438] sm:text-[36px]">
            {sectionContent.headingPrefix}
            <span className="font-semibold italic text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>

          <p className="mt-2 text-[13.5px] leading-[1.6] text-[#4b5563] sm:text-sm">
            {sectionContent.description}
          </p>
        </div>

        {/* Bento grid: Left tall card + Right 2 top cards & 1 wide bottom card */}
        <div className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Left tall feature card */}
          <article className="relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-3xl bg-[#070d2e] p-6 text-white shadow-[0_14px_34px_rgba(7,13,46,0.16)] sm:p-7 lg:col-span-4 lg:min-h-[450px]">
            <Image
              src={featuredCard.image}
              alt={featuredCard.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-center"
            />

            <div className="relative z-10">
              <span
                className={`inline-flex items-center rounded-md px-2.5 py-1 text-[9.5px] font-extrabold uppercase tracking-[0.12em] ${featuredCard.badgeClass}`}
              >
                {featuredCard.badge}
              </span>

              <h3 className="mt-3 text-[20px] font-extrabold leading-[1.24] tracking-[-0.015em] text-white">
                {featuredCard.title}
              </h3>

              <p className="mt-2 text-[12px] leading-[1.55] text-white/80">
                {featuredCard.description}
              </p>

              <div className="mt-4">
                <Link
                  href={featuredCard.href}
                  className="inline-flex items-center gap-1 text-[12px] font-bold text-[#f472b6] transition hover:text-white"
                >
                  <span>{featuredCard.ctaLabel}</span>
                  <ChevronRight
                    className="h-3.5 w-3.5 stroke-[2.5]"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </article>

          {/* Right 8-column stack */}
          <div className="flex flex-col gap-5 lg:col-span-8">
            {/* Top 2 equal cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {topRightCards.map((card) => (
                <article
                  key={card.title}
                  className="relative flex min-h-[215px] flex-col justify-end overflow-hidden rounded-3xl bg-[#070d2e] p-6 text-white shadow-[0_12px_30px_rgba(7,13,46,0.14)]"
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060c2c] via-[#060c2c]/72 to-[#060c2c]/15"
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <span
                      className={`inline-flex items-center rounded-md px-2.5 py-1 text-[9.5px] font-extrabold uppercase tracking-[0.12em] ${card.badgeClass}`}
                    >
                      {card.badge}
                    </span>

                    <h3 className="mt-2.5 text-[18px] font-extrabold leading-snug tracking-[-0.015em] text-white">
                      {card.title}
                    </h3>

                    <p className="mt-1.5 text-[11.5px] leading-[1.52] text-white/80">
                      {card.description}
                    </p>

                    <div className="mt-3.5">
                      <Link
                        href={card.href}
                        className="inline-flex items-center gap-1 text-[11.5px] font-bold text-[#f472b6] transition hover:text-white"
                      >
                        <span>{card.ctaLabel}</span>
                        <ChevronRight
                          className="h-3.5 w-3.5 stroke-[2.5]"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom wide card */}
            <article className="relative flex min-h-[215px] flex-col justify-end overflow-hidden rounded-3xl bg-[#070d2e] p-6 text-white shadow-[0_12px_30px_rgba(7,13,46,0.14)] sm:p-7">
              <Image
                src={wideBottomCard.image}
                alt={wideBottomCard.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060c2c] via-[#060c2c]/78 to-[#060c2c]/20"
                aria-hidden="true"
              />

              <div className="relative z-10 max-w-[560px]">
                <span
                  className={`inline-flex items-center rounded-md px-2.5 py-1 text-[9.5px] font-extrabold uppercase tracking-[0.12em] ${wideBottomCard.badgeClass}`}
                >
                  {wideBottomCard.badge}
                </span>

                <h3 className="mt-2.5 text-[18px] font-extrabold leading-snug tracking-[-0.015em] text-white">
                  {wideBottomCard.title}
                </h3>

                <p className="mt-1.5 text-[11.5px] leading-[1.52] text-white/80">
                  {wideBottomCard.description}
                </p>

                <div className="mt-3.5">
                  <Link
                    href={wideBottomCard.href}
                    className="inline-flex items-center gap-1 text-[11.5px] font-bold text-[#f472b6] transition hover:text-white"
                  >
                    <span>{wideBottomCard.ctaLabel}</span>
                    <ChevronRight
                      className="h-3.5 w-3.5 stroke-[2.5]"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Bottom two informational strip cards */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {bottomCallouts.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-3.5 rounded-2xl border border-[#eaecf4] bg-white px-5 py-4 shadow-[0_4px_16px_rgba(15,23,42,0.03)]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f3e8ff] text-[#7c3aed]">
                  <Icon className="h-4 w-4 stroke-[2]" aria-hidden="true" />
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[12.5px] font-extrabold leading-snug text-[#0c1438]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[11.5px] leading-[1.45] text-[#64748b]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
