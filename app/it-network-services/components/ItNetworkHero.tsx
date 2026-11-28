import {
  ChevronRight,
  Lock,
  Network,
  Settings,
  ShieldCheck,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const HEX_CLIP =
  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

const nodes = [
  {
    id: 1,
    title: "Network design",
    description: "& connectivity",
    Icon: Network,
    iconClass: "bg-[#18c9b8] text-[#052928]",
    cardPosition: "lg:left-[42.5%] lg:top-[16.5%] lg:w-[15.5%]",
    lineStyle: {
      left: "58%",
      top: "23.5%",
      width: "7.5%",
      height: "3.5%",
      points: "0,100 72,100 100,0",
      stroke: "#2fd3c4",
    },
  },
  {
    id: 2,
    title: "Managed operations",
    description: "Monitoring & changes",
    Icon: Settings,
    iconClass: "bg-[#6d8cff] text-[#0a1336]",
    cardPosition: "lg:right-[2%] lg:top-[12%] lg:w-[15%]",
    lineStyle: {
      left: "77.5%",
      top: "17.5%",
      width: "4.5%",
      height: "3.5%",
      points: "0,100 35,0 100,0",
      stroke: "#5eead4",
    },
  },
  {
    id: 3,
    title: "IT service needs",
    description: "Support & devices",
    Icon: Wrench,
    iconClass: "bg-[#b794ff] text-[#1d0c3d]",
    cardPosition: "lg:left-[43%] lg:top-[73.5%] lg:w-[15.5%]",
    lineStyle: {
      left: "58.5%",
      top: "76.5%",
      width: "7%",
      height: "3.5%",
      points: "0,0 72,0 100,100",
      stroke: "#2fd3c4",
    },
  },
  {
    id: 4,
    title: "Security & resilience",
    description: "Requirements",
    Icon: ShieldCheck,
    iconClass: "bg-[#f472b6] text-[#380820]",
    cardPosition: "lg:right-[2%] lg:top-[77.5%] lg:w-[15.5%]",
    lineStyle: {
      left: "77.5%",
      top: "80.5%",
      width: "4.5%",
      height: "3.5%",
      points: "0,0 35,100 100,100",
      stroke: "#5eead4",
    },
  },
] as const;

export default function ItNetworkHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#040b18]">
      {/* Background gradient matching deep navy + subtle teal/violet corners */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 85% 15%, rgba(16, 78, 92, 0.35) 0%, transparent 50%), radial-gradient(ellipse at 12% 92%, rgba(72, 24, 112, 0.35) 0%, transparent 45%), linear-gradient(135deg, #050d1d 0%, #061124 55%, #040a16 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] lg:h-[755px]">
        {/* Hexagon image + gradient outer border */}
        <div className="pointer-events-none absolute left-[52.5%] top-[8.5%] hidden h-[81%] w-[36.5%] -translate-x-0 lg:block">
          {/* Outer gradient bevel */}
          <div
            className="absolute inset-0 opacity-85"
            style={{
              clipPath: HEX_CLIP,
              background:
                "linear-gradient(135deg, #27c7b8 0%, #1b6b7a 45%, #37417a 80%, #5b3a8c 100%)",
            }}
          />
          {/* Inner dark gap + clipped server image */}
          <div
            className="absolute inset-[10px] overflow-hidden bg-[#060f21]"
            style={{ clipPath: HEX_CLIP }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Images/it/1.png"
              alt="Network server rack with cabling"
              className="h-full w-full object-cover brightness-95 contrast-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[#050d1d]/20"
            />
          </div>
        </div>

        {/* Mobile background image */}
        <div className="pointer-events-none absolute inset-0 lg:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Images/it/1.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-20"
          />
        </div>

        {/* Left & right horizontal connector lines with dots */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[51.2%] top-[49.2%] hidden items-center lg:flex"
        >
          <span className="h-[6px] w-[6px] rounded-full bg-[#2fd3c4] shadow-[0_0_8px_rgba(47,211,196,0.8)]" />
          <span className="h-px w-[28px] bg-[#2fd3c4]/70" />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[88.7%] top-[50.5%] hidden items-center lg:flex"
        >
          <span className="h-px w-[34px] bg-[#2fd3c4]/70" />
          <span className="h-[6px] w-[6px] rounded-full bg-[#2fd3c4] shadow-[0_0_8px_rgba(47,211,196,0.8)]" />
        </div>

        {/* Angled leader lines connecting cards to hexagon */}
        {nodes.map((node) => (
          <svg
            key={`line-${node.id}`}
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute hidden lg:block"
            style={{
              left: node.lineStyle.left,
              top: node.lineStyle.top,
              width: node.lineStyle.width,
              height: node.lineStyle.height,
            }}
          >
            <polyline
              fill="none"
              stroke={node.lineStyle.stroke}
              strokeWidth="2.5"
              strokeOpacity="0.75"
              vectorEffect="non-scaling-stroke"
              points={node.lineStyle.points}
            />
          </svg>
        ))}

        {/* Left hero content */}
        <div className="relative z-10 flex w-full flex-col justify-center px-6 py-14 sm:px-10 lg:absolute lg:left-0 lg:top-0 lg:h-full lg:w-[46%] lg:px-0 lg:py-0 lg:pl-[6.2%]">
          <div className="flex items-center gap-3">
            <span className="h-[1.5px] w-[26px] bg-[#2fd3c4]" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#2fd3c4]">
              Zoiko for Business
            </span>
          </div>

          <h1 className="mt-4 text-[44px] font-extrabold leading-[1.08] tracking-[-0.02em] text-white sm:text-[56px] lg:text-[58px]">
            IT &amp; Network
            <br />
            <span className="text-[#2fd3c4]">Services</span>
          </h1>

          <p className="mt-5 max-w-[410px] text-[15px] font-normal leading-[1.6] text-white/75">
            Plan connectivity and network support around your business. Scope
            and availability are confirmed during consultation.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <a
              href="#"
              className="inline-flex h-[42px] items-center gap-2 rounded-md bg-gradient-to-r from-[#f0147e] to-[#d91172] px-5 text-[12.5px] font-semibold text-white shadow-[0_0_24px_rgba(240,20,126,0.45)] transition hover:brightness-110"
            >
              Discuss your requirements
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="inline-flex h-[42px] items-center rounded-md border border-white/20 bg-[#0b162c]/70 px-5 text-[12.5px] font-medium text-white/90 transition hover:border-white/40 hover:bg-white/10"
            >
              Existing customer?
            </a>
          </div>

          <div className="mt-5 flex w-full max-w-[405px] items-center gap-3 rounded-md border border-white/15 bg-[#0a1529]/75 px-3.5 py-3">
            <Lock
              className="h-3.5 w-3.5 shrink-0 text-[#2fd3c4]"
              aria-hidden="true"
            />
            <p className="text-[10.5px] leading-[1.45] text-white/65">
              Please don&rsquo;t share passwords, IP addresses or network
              diagrams in any public form.
            </p>
          </div>
        </div>

        {/* Callout cards */}
        <div className="relative z-20 flex w-full flex-col gap-3 px-6 pb-8 sm:px-10 lg:static lg:block lg:p-0">
          {nodes.map(
            ({ id, title, description, Icon, iconClass, cardPosition }) => (
              <a
                key={id}
                href="#"
                className={`flex w-full max-w-[280px] items-center gap-3 rounded-lg border border-[#2fd3c4]/25 bg-[#071324]/90 px-3.5 py-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.5)] backdrop-blur-md transition hover:border-[#2fd3c4]/60 lg:absolute lg:max-w-none ${cardPosition}`}
              >
                <span
                  className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-md ${iconClass}`}
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="text-[11px] font-bold leading-[1.2] text-white">
                    {title}
                  </span>
                  <span className="mt-0.5 text-[9.5px] leading-[1.25] text-white/60">
                    {description}
                  </span>
                </span>
              </a>
            ),
          )}
        </div>

        {/* Bottom scope pill below hexagon */}
        <a
          href="#"
          className="relative z-30 mx-6 mb-10 inline-flex w-fit items-center gap-2 rounded-full bg-[#57e6cf] px-4 py-1.5 text-[10.5px] font-semibold text-[#051a20] shadow-[0_6px_20px_rgba(87,230,207,0.25)] transition hover:brightness-105 sm:mx-10 lg:absolute lg:bottom-[2.5%] lg:left-[70.8%] lg:m-0 lg:-translate-x-1/2"
        >
          <CheckCircle2
            className="h-3.5 w-3.5 stroke-[2.25]"
            aria-hidden="true"
          />
          Scope confirmed in consultation
        </a>
      </div>
    </section>
  );
}
