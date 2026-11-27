import { ChevronRight, FileText, Smartphone, Users } from "lucide-react";

const pills = [
  {
    id: 1,
    label: "Business SIMs",
    Icon: FileText,
    iconClass: "bg-[#e8157f]",
    className: "lg:left-[53.5%] lg:top-[14.5%]",
  },
  {
    id: 2,
    label: "Devices",
    Icon: Smartphone,
    iconClass: "bg-[#6d28d9]",
    className: "lg:left-[56.5%] lg:top-[23%]",
  },
  {
    id: 3,
    label: "Team lines",
    Icon: Users,
    iconClass: "bg-[#2563eb]",
    className: "lg:left-[59.5%] lg:top-[31.5%]",
  },
] as const;

export default function BusinessMobileHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0b0e3a]">
      {/* Left background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 35% 8%, #1a247a 0%, transparent 55%), radial-gradient(ellipse at 12% 95%, #6a116b 0%, transparent 45%), linear-gradient(155deg, #0b0e3a 0%, #100e42 58%, #1a0d42 100%)",
        }}
      />

      {/* Full-width right image panel attached to the right edge of the screen */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[51%] overflow-hidden lg:block"
        style={{ borderTopLeftRadius: "420px 100%" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Images/mob/1.png"
          alt="Smartphones on a table"
          className="h-full w-full object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#0b0e3a]/10" />
      </div>

      {/* Mobile background image */}
      <div className="pointer-events-none absolute inset-0 lg:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Images/mob/1.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-20"
        />
      </div>

      {/* Centered content container */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] lg:h-[670px]">
        {/* Left content */}
        <div className="flex w-full flex-col justify-center px-6 py-14 sm:px-10 lg:absolute lg:left-0 lg:top-0 lg:h-full lg:w-[50%] lg:px-0 lg:py-0 lg:pl-[6.8%] lg:pt-[1.5%]">
          <div className="flex items-center gap-3">
            <span className="h-px w-[34px] bg-[#ff66b5]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff73ba]">
              Zoiko for Business
            </span>
          </div>

          <h1 className="mt-5 max-w-[450px] text-[42px] font-extrabold leading-[1.04] tracking-[-0.025em] text-white sm:text-[54px] lg:text-[52px]">
            Mobile
            <br />
            connectivity for
            <br />
            your <span className="text-[#ff7ec0]">organisation</span>
          </h1>

          <p className="mt-6 max-w-[430px] text-[14.5px] leading-[1.6] text-white/85">
            Business SIMs, devices and lines for your team — scoped with our
            business team before anything is agreed.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <a
              href="#"
              className="inline-flex h-[40px] items-center gap-4 rounded-md bg-gradient-to-r from-[#f01482] to-[#c91476] px-5 text-[12px] font-semibold text-white shadow-[0_10px_24px_rgba(232,21,127,0.35)] transition hover:brightness-110"
            >
              Discuss business mobile
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="inline-flex h-[40px] items-center rounded-md border border-white/35 bg-[#12164f]/40 px-6 text-[12px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Business Solutions
            </a>
          </div>

          <p className="mt-6 text-[11px] text-white/70">
            Delivered using partner network infrastructure. Looking for
            yourself?{" "}
            <a
              href="#"
              className="font-semibold text-[#ff7ec0] underline underline-offset-2 hover:text-[#ff9ad0]"
            >
              Personal plans
            </a>
          </p>
        </div>

        {/* Floating pills */}
        <ul className="flex flex-wrap gap-3 px-6 pb-6 sm:px-10 lg:static lg:block lg:p-0">
          {pills.map(({ id, label, Icon, iconClass, className }) => (
            <li key={id} className={`lg:absolute ${className}`}>
              <a
                href="#"
                className="inline-flex h-[34px] items-center gap-2.5 rounded-full border border-white/35 bg-white/20 py-1 pl-1.5 pr-5 text-[10.5px] font-semibold text-white shadow-[0_8px_20px_rgba(12,15,61,0.2)] backdrop-blur-md transition hover:bg-white/30"
              >
                <span
                  className={`flex h-[24px] w-[24px] items-center justify-center rounded-full text-white ${iconClass}`}
                >
                  <Icon className="h-3 w-3" aria-hidden="true" />
                </span>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Chat bubbles */}
        <div className="flex w-full flex-col gap-3 px-6 pb-12 sm:px-10 lg:static lg:block lg:p-0">
          {/* You bubble */}
          <div className="w-full max-w-[260px] rounded-xl bg-white px-4 py-3 shadow-[0_14px_28px_rgba(12,15,61,0.32)] lg:absolute lg:left-[62.5%] lg:top-[50%] lg:w-[250px] lg:max-w-none">
            <span className="block text-[8px] font-extrabold uppercase tracking-[0.18em] text-[#7c3aed]">
              You
            </span>
            <p className="mt-1 text-[11px] leading-[1.45] text-[#1b1233]">
              We&rsquo;re a team of 12 — can we keep our numbers and use eSIM?
            </p>
          </div>

          {/* Zoiko bubble */}
          <div className="w-full max-w-[270px] self-end rounded-xl bg-gradient-to-r from-[#e8157f] to-[#7c3aed] px-4 py-3 shadow-[0_14px_28px_rgba(88,28,135,0.38)] lg:absolute lg:left-[69.5%] lg:top-[64.5%] lg:w-[255px] lg:max-w-none">
            <span className="block text-[8px] font-extrabold uppercase tracking-[0.18em] text-white/90">
              Zoiko Business Team
            </span>
            <p className="mt-1 text-[11px] leading-[1.45] text-white">
              Possibly. We&rsquo;ll check number ownership, the transfer
              process, and eSIM support on your handsets and plan.
            </p>
          </div>

          {/* Typing indicator */}
          <div
            aria-hidden="true"
            className="inline-flex h-[24px] w-[46px] items-center justify-center gap-1 rounded-full bg-white shadow-[0_6px_14px_rgba(12,15,61,0.25)] lg:absolute lg:left-[63.5%] lg:top-[81%]"
          >
            <span className="h-[5px] w-[5px] rounded-full bg-[#7c3aed]" />
            <span className="h-[5px] w-[5px] rounded-full bg-[#7c3aed]" />
            <span className="h-[5px] w-[5px] rounded-full bg-[#7c3aed]" />
          </div>

          {/* Caption */}
          <span className="text-[9.5px] font-medium text-white/85 lg:absolute lg:bottom-4 lg:right-4">
            Illustrative conversation
          </span>
        </div>
      </div>
    </section>
  );
}
