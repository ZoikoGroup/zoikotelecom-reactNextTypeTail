import { ChevronRight } from "lucide-react";

const tags = [
  "Telecom insights",
  "Guides & how-tos",
  "Broadband",
  "Digital skills",
  "Company updates",
  "Mobile",
  "Landlines & voice",
] as const;

const cards = [
  {
    id: 1,
    src: "/Images/news/7.png",
    alt: "Zoiko guides card",
    badge: "GUIDES",
    topRightLabel: "",
    title: "",
    subtitle: "",
    className: "left-[8%] top-[13%] z-10 h-[72%] w-[44%] -rotate-[10deg]",
  },
  {
    id: 2,
    src: "/Images/news/6.png",
    alt: "Zoiko updates card",
    badge: "UPDATES",
    topRightLabel: "",
    title: "",
    subtitle: "",
    className: "left-[27%] top-[4%] z-20 h-[74%] w-[45%] -rotate-[1deg]",
  },
  {
    id: 3,
    src: "/Images/news/8.jpg",
    alt: "Zoiko insights card",
    badge: "INSIGHTS",
    topRightLabel: "INSIGHTS",
    title: "Insights",
    subtitle: "Telecom insights, how-tos & how-tos",
    className: "right-[6%] top-[8%] z-30 h-[75%] w-[45%] rotate-[9deg]",
  },
] as const;

export default function NewsMedia() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#e11579] via-[#9e2ec4] to-[#5a42e8]">
      {/* Subtle wavy/contour background lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 15% 120%, transparent 0, transparent 14px, rgba(255,255,255,0.28) 15px, transparent 16px)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 px-6 py-14 sm:px-10 lg:min-h-[500px] lg:flex-row lg:gap-8 lg:px-16 lg:py-12">
        {/* Left content */}
        <div className="flex w-full flex-col items-start lg:w-[50%]">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[1.5px] w-8 bg-white/70" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85">
              About Zoiko
            </span>
          </div>

          <h1 className="flex flex-wrap items-center gap-x-3.5 text-[44px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[56px] lg:text-[62px]">
            <span>News</span>
            <span className="inline-flex h-[46px] w-[46px] -rotate-[6deg] items-center justify-center rounded-xl bg-white text-[34px] font-black text-[#1b1233] shadow-md sm:h-[54px] sm:w-[54px] sm:text-[42px] lg:h-[58px] lg:w-[58px] lg:text-[44px]">
              &amp;
            </span>
            <span>Media</span>
          </h1>

          <p className="mt-6 max-w-[430px] text-[15px] leading-[1.6] text-white/90">
            Read Zoiko Telecom updates, telecom insights and guides — all in one
            place.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <a
              href="#"
              className="inline-flex h-[44px] items-center gap-1.5 rounded-lg bg-[#2b6cb0] px-6 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_rgba(20,40,120,0.3)] transition hover:bg-[#245c99]"
            >
              Read the latest articles
              <ChevronRight
                className="h-4 w-4 stroke-[2.5]"
                aria-hidden="true"
              />
            </a>
            <a
              href="#"
              className="inline-flex h-[44px] items-center rounded-lg border border-white/55 bg-white/10 px-6 text-[13.5px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Media enquiries
            </a>
          </div>

          <ul className="mt-7 flex max-w-[500px] flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag}>
                <a
                  href="#"
                  className="inline-flex items-center rounded-full border border-white/30 bg-white/15 px-3.5 py-1 text-[11.5px] font-medium text-white/95 backdrop-blur-xs transition hover:bg-white/25"
                >
                  {tag}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right visuals */}
        <div className="relative h-[360px] w-full sm:h-[430px] lg:h-[420px] lg:w-[50%]">
          {/* "On the blog" floating badge */}
          <a
            href="#"
            className="absolute left-[3%] top-[3%] z-40 flex h-[80px] w-[80px] flex-col items-center justify-center gap-1 rounded-full bg-[#19112c] text-white shadow-[0_12px_28px_rgba(0,0,0,0.4)] transition-transform hover:scale-105 sm:h-[88px] sm:w-[88px]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 text-white"
              aria-hidden="true"
            >
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
            </svg>
            <span className="text-center text-[8.5px] font-bold uppercase leading-[1.2] tracking-[0.12em]">
              On the
              <br />
              blog
            </span>
          </a>

          {/* Stacked fanned cards with white borders */}
          {cards.map((card) => (
            <a
              key={card.id}
              href="#"
              className={`group absolute overflow-hidden rounded-2xl border-[4px] border-white bg-[#1e1a2e] shadow-[-10px_18px_36px_rgba(20,8,60,0.4)] transition-transform duration-300 hover:scale-[1.03] ${card.className}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.src}
                alt={card.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Subtle dark gradient vignette for crisp text & border contrast */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/65"
              />

              {/* Top Zoiko header inside card */}
              <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-3.5 pt-3">
                <span className="text-[11px] font-black tracking-[0.14em] text-white drop-shadow">
                  ZOIKO
                </span>
                {card.topRightLabel && (
                  <span className="text-[7px] font-semibold uppercase tracking-[0.16em] text-white/80">
                    {card.topRightLabel}
                  </span>
                )}
              </div>

              {/* Bottom badge & title inside card */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-start p-3.5">
                <span className="rounded bg-[#e11579] px-2 py-0.5 text-[7px] font-extrabold uppercase tracking-[0.14em] text-white shadow-sm">
                  {card.badge}
                </span>
                {card.title && (
                  <span className="mt-1.5 text-[15px] font-extrabold leading-tight text-white">
                    {card.title}
                  </span>
                )}
                {card.subtitle && (
                  <span className="mt-0.5 text-[11px] font-bold leading-snug text-white/95">
                    {card.subtitle}
                  </span>
                )}
              </div>
            </a>
          ))}

          {/* Dashed pink/dark lanyard thread extending up from the badge slot */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[37%] right-[16.5%] z-40 h-[125px] w-[2px] origin-bottom rotate-[5deg]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, #19112c 0px, #19112c 4px, #e11579 4px, #e11579 8px)",
            }}
          />

          {/* "Press & media" ID card badge */}
          <a
            href="#"
            className="absolute bottom-[3%] right-[0%] z-50 w-[46%] max-w-[205px] rotate-[6deg] rounded-2xl border border-white/80 bg-white px-4 pb-3.5 pt-2.5 shadow-[0_16px_35px_rgba(25,10,70,0.4)] transition-transform hover:-translate-y-0.5"
          >
            {/* Lanyard slot cutout */}
            <span
              aria-hidden="true"
              className="mx-auto mb-2 block h-[5px] w-9 rounded-full bg-[#e4e4ec] shadow-inner"
            />
            <span className="block text-[8px] font-bold uppercase tracking-[0.18em] text-[#d6197f]">
              Media enquiries
            </span>
            <span className="mt-0.5 block text-[17px] font-extrabold leading-tight text-[#19112c]">
              Press &amp; media
            </span>
            {/* Slanted barcode */}
            <span
              aria-hidden="true"
              className="mt-2 block h-[12px] w-full opacity-85"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(105deg, #19112c 0px, #19112c 1.5px, transparent 1.5px, transparent 3.5px)",
              }}
            />
            <span className="mt-1.5 block text-[8.5px] font-medium text-[#6b6b80]">
              Via our Contact page
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
