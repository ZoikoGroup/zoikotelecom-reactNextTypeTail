import {
  ChevronRight,
  FileText,
  GitFork,
  Globe,
  MapPin,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const chips = [
  { label: "Site-by-site assessment", Icon: MapPin },
  { label: "Terms in writing", Icon: FileText },
  { label: "No uptime promises without a signed agreement", Icon: ShieldCheck },
] as const;

const layers = [
  {
    id: 3,
    tag: "LAYER 3",
    title: "Hosting",
    description: "Where workloads run",
    Icon: Server,
    iconClass: "bg-[#6d4aff]",
    className: "lg:left-[56.5%] lg:top-[18%] lg:w-[27.5%] lg:h-[16.5%]",
  },
  {
    id: 2,
    tag: "LAYER 2",
    title: "Cloud interconnect",
    description: "Private paths to cloud",
    Icon: GitFork,
    iconClass: "bg-[#e8157f]",
    className: "lg:left-[54.2%] lg:top-[37.5%] lg:w-[27.5%] lg:h-[16.5%]",
  },
  {
    id: 1,
    tag: "LAYER 1",
    title: "Internet access",
    description: "Broadband or dedicated",
    Icon: Globe,
    iconClass: "bg-[#2563eb]",
    className: "lg:left-[51.8%] lg:top-[57%] lg:w-[27.5%] lg:h-[16.5%]",
  },
] as const;

export default function ConnectivityCloudHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f6fc]">
      {/* Topographic background texture */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Images/cloud/1.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90"
      />

      <div className="relative mx-auto w-full max-w-[1440px] lg:h-[688px]">
        {/* Right image panel flush to the right edge with a curved left / bottom-left edge */}
        <div
          className="hidden overflow-hidden lg:absolute lg:right-0 lg:top-0 lg:block lg:h-[656px] lg:w-[50.5%]"
          style={{
            borderBottomLeftRadius: "130px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Images/cloud/2.png"
            alt="Professional working on a laptop with connectivity and cloud layers"
            className="h-full w-full object-cover object-left"
          />
        </div>

        {/* Mobile background image */}
        <div className="absolute inset-0 lg:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Images/cloud/2.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-15"
          />
        </div>

        {/* Dotted blue curve tracing the left side of the stacked cards */}
        <svg
          aria-hidden="true"
          className="pointer-events-none z-20 hidden lg:absolute lg:left-[48.8%] lg:top-[22.5%] lg:block lg:h-[260px] lg:w-[75px]"
          viewBox="0 0 75 260"
          fill="none"
        >
          <path
            d="M 4 22 C 24 72, 34 148, 36 254"
            stroke="#3b82f6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="1 7"
          />
        </svg>

        {/* Left content */}
        <div className="relative z-10 flex w-full flex-col justify-center px-6 py-14 sm:px-10 lg:absolute lg:left-0 lg:top-0 lg:h-full lg:w-[47%] lg:px-0 lg:py-0 lg:pl-[5.5%]">
          <div className="flex items-center gap-3">
            <span className="h-[1.5px] w-[28px] bg-[#2563eb]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#2563eb]">
              Zoiko for Business
            </span>
          </div>

          <h1 className="mt-4 text-[44px] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#0c1242] sm:text-[54px] lg:text-[54px]">
            Connectivity <span className="text-[#3b82f6]">&amp;</span>
            <br />
            <span className="text-[#3b82f6]">Cloud</span>
          </h1>

          <p className="mt-5 max-w-[360px] text-[14px] leading-[1.6] text-[#262b4d] sm:max-w-[400px] lg:max-w-[340px]">
            A starting point to discuss business internet access, hosting
            requirements and connectivity between your sites and systems.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="inline-flex h-[42px] items-center gap-2.5 rounded-[7px] bg-gradient-to-r from-[#ec1380] to-[#cf1172] px-5 text-[12px] font-semibold text-white shadow-[0_10px_22px_rgba(232,21,127,0.35)] transition hover:brightness-110"
            >
              Discuss connectivity &amp; hosting
              <ChevronRight
                className="h-3.5 w-3.5 stroke-[2.5]"
                aria-hidden="true"
              />
            </a>
            <a
              href="#"
              className="inline-flex h-[42px] items-center rounded-[7px] border border-[#141b4d]/70 bg-white/95 px-5 text-[12px] font-semibold text-[#0c1242] shadow-[0_2px_8px_rgba(12,18,66,0.06)] transition hover:bg-[#f0f3ff]"
            >
              Business Solutions
            </a>
          </div>

          <ul className="mt-5 flex max-w-[380px] flex-wrap gap-2">
            {chips.map(({ label, Icon }) => (
              <li key={label}>
                <a
                  href="#"
                  className="inline-flex h-[25px] items-center gap-1.5 rounded-full border border-[#e3e7f5] bg-white px-3 text-[9.5px] font-semibold text-[#0c1242] shadow-[0_2px_6px_rgba(15,22,70,0.04)] transition hover:border-[#c6cef0]"
                >
                  <Icon className="h-3 w-3 text-[#2563eb]" aria-hidden="true" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Staggered frosted layer cards */}
        <div className="relative z-20 flex w-full flex-col gap-6 px-6 pb-8 sm:px-10 lg:static lg:block lg:px-0 lg:pb-0">
          {layers.map(
            ({ id, tag, title, description, Icon, iconClass, className }) => (
              <div
                key={id}
                className={`relative w-full max-w-[360px] rounded-[18px] border border-white/45 bg-white/20 px-4 py-3.5 shadow-[0_18px_36px_rgba(10,14,45,0.28)] backdrop-blur-md lg:absolute lg:max-w-none ${className}`}
                style={{
                  transform: "perspective(950px) rotateX(4deg) rotate(-3.5deg)",
                }}
              >
                <span className="absolute -top-[9px] right-4 inline-flex h-[18px] items-center rounded-full bg-white px-2.5 text-[7px] font-extrabold uppercase tracking-[0.14em] text-[#0c1242] shadow-[0_3px_8px_rgba(15,22,70,0.22)]">
                  {tag}
                </span>
                <div className="flex h-full items-center gap-3.5">
                  <span
                    className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-lg text-white shadow-sm ${iconClass}`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col">
                    <h2 className="text-[12.5px] font-bold leading-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
                      {title}
                    </h2>
                    <p className="mt-0.5 text-[9.5px] leading-tight text-white/85 drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        {/* Bottom-right Managed network chip */}
        <a
          href="#"
          className="relative z-30 mx-6 mb-10 inline-flex w-fit items-center gap-2.5 rounded-[10px] bg-white px-3 py-2 shadow-[0_14px_28px_rgba(10,14,45,0.3)] sm:mx-10 lg:absolute lg:bottom-[4.5%] lg:right-[2.5%] lg:m-0"
        >
          <span className="flex h-[28px] w-[28px] items-center justify-center rounded-lg bg-[#16a34a] text-white">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className="flex flex-col">
            <span className="text-[10.5px] font-bold leading-tight text-[#0c1242]">
              Managed network
            </span>
            <span className="text-[8.5px] leading-tight text-[#6b708c]">
              Who runs each layer
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
