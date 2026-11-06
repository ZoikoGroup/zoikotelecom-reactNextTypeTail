import Link from "next/link";

const ACTIONS = [
  {
    label: "Request a business quote",
    href: "#request",
    primary: true,
  },
  {
    label: "View broadband & eSIM plans",
    href: "/ee-mobile-plans",
    primary: false,
  },
] as const;

const TAGS = [
  {
    id: "black-friday",
    top: "Black",
    bottom: "Friday",
    position: "left-6 lg:left-[11%]",
    stem: "h-8",
  },
  {
    id: "sale",
    top: "Sale",
    bottom: "27–30 Nov",
    position: "right-6 lg:right-[7%]",
    stem: "h-6",
  },
] as const;

export default function BlackFridayCta() {
  return (
    <section className="relative w-full overflow-hidden bg-[#120b16] px-6 pb-16 pt-24 text-white sm:px-8 lg:px-10">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(142,36,140,0.55),transparent_60%)]"
      />

      {/* Watermark */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[120px] font-extrabold uppercase leading-none text-transparent lg:text-[200px]"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.14)" }}
      >
        Black Friday
      </p>

      {/* Hanging tags */}
      {TAGS.map((tag) => (
        <div
          key={tag.id}
          aria-hidden="true"
          className={`absolute top-0 hidden flex-col items-center md:flex ${tag.position}`}
        >
          <span className={`${tag.stem} w-px bg-[#f0459f]`} />
          <div className="border border-[#d4145a]/70 bg-[#120b16] px-4 py-2 text-center shadow-lg">
            <span className="mx-auto mb-1 block h-1.5 w-1.5 rounded-full bg-[#f0459f]" />
            <p className="text-sm font-bold uppercase leading-4 text-[#f0459f]">
              {tag.top}
            </p>
            <p className="text-sm font-extrabold uppercase leading-4">
              {tag.bottom}
            </p>
          </div>
        </div>
      ))}

      <div className="relative mx-auto flex max-w-[820px] flex-col items-center text-center">
        <span className="inline-block rounded-full bg-gradient-to-r from-[#c4237f] to-[#8a2fb3] px-5 py-1.5 text-sm font-bold uppercase tracking-[0.08em]">
          Black Friday 27 Nov · Cyber Monday 30 Nov
        </span>

        <h2 className="mt-6 text-4xl font-extrabold uppercase leading-[1.1] tracking-tight sm:text-5xl lg:text-[52px]">
          Your Black Friday connectivity starts here
        </h2>

        <p className="mt-6 max-w-[720px] text-base leading-7 text-white/85">
          20% off the monthly charge on eligible digital phone line packages for
          your first six months.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {ACTIONS.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className={
                action.primary
                  ? "inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#c4237f]"
                  : "inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white"
              }
            >
              {action.label}
            </Link>
          ))}
        </div>

        <p className="mt-6 text-sm text-white/60">
          Eligible UK businesses and new service agreements only. Offer subject
          to approval.
        </p>
      </div>
    </section>
  );
}
