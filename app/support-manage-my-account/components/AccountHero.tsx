import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, KeyRound, Lock, MessageSquare, MonitorSmartphone, Shield, User, Link2, type LucideIcon } from "lucide-react";
import { HEADING, IMG, PRIMARY_BTN, QuestionMark } from "./shared";

const GUIDE_ROWS: { label: string; icon: LucideIcon; iconBg: string; tag: "DO" | "DON’T" }[] = [
  { label: "Use a unique password", icon: KeyRound, iconBg: "bg-[#14A06B]", tag: "DO" },
  { label: "Only remember personal devices", icon: MonitorSmartphone, iconBg: "bg-[#3D7BFF]", tag: "DO" },
  { label: "Follow emailed sign-in links", icon: Link2, iconBg: "bg-[#E0127C]", tag: "DON’T" },
  { label: "Share one-time codes", icon: MessageSquare, iconBg: "bg-[#C0262D]", tag: "DON’T" },
];

const ROLES = ["Owner", "Admin", "Billing only", "Read only"];

/* Slanted left edge of the photo with a thin gradient rule along it (desktop only) */
const EDGE_CLIP = "lg:[clip-path:polygon(14.4%_0,100%_0,100%_100%,0_100%)]";
const PHOTO_CLIP = "lg:[clip-path:polygon(15%_0,100%_0,100%_100%,0.6%_100%)]";

export default function AccountHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#EFE8FD] via-[#F3F4FD] to-[#EEF4FE]">
      {/* Soft colour washes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#E2D6FB]/80 blur-[80px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-[28%] h-[300px] w-[360px] rounded-full bg-[#DDF3EC]/80 blur-[80px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 left-[12%] h-[320px] w-[420px] rounded-full bg-[#DCE6FD]/80 blur-[80px]"
      />

      {/* Decorations (left side, desktop) */}
      <QuestionMark className="left-[20.8%] top-[52px] hidden h-[56px] w-[38px] rotate-[8deg] text-[#C9B8F0]/80 lg:block" />
      <QuestionMark className="bottom-[52px] left-[1.6%] hidden h-[44px] w-[30px] -rotate-[8deg] text-[#C9B8F0]/80 lg:block" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[14.5%] top-[103px] hidden h-2.5 w-2.5 rounded-full bg-[#9B7BE0] lg:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[22%] top-[348px] hidden h-[26px] w-[40px] rounded-full bg-[#C6B2F3]/80 lg:block"
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 70 56"
        fill="none"
        className="pointer-events-none absolute bottom-[80px] left-[17.2%] hidden h-[56px] w-[70px] text-[#C9B8F0]/80 lg:block"
      >
        <path
          d="M6 3h58a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H28l-12 12V39H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 760 120"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 hidden h-[120px] w-[50%] text-[#C3C8E8]/80 lg:block"
      >
        <path d="M0 70 C140 30 260 30 400 52 S640 96 760 60" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M0 92 C160 56 280 60 420 80 S650 116 760 88"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
      </svg>

      <div className="relative mx-auto max-w-[1440px] lg:min-h-[652px]">
        {/* Left column */}
        <div className="relative z-10 flex flex-col justify-center px-4 py-12 sm:px-8 lg:min-h-[652px] lg:w-[50%] lg:py-16 lg:pl-[112px] lg:pr-0">
          <p
            className={`${HEADING} inline-flex w-fit items-center gap-2.5 rounded-full border border-white bg-white px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#5B2FB8] shadow-[0_8px_20px_rgba(91,47,184,0.08)]`}
          >
            <User className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden="true" />
            Manage my account
          </p>

          <h1
            className={`${HEADING} mt-6 text-[38px] font-bold leading-[1.02] tracking-[-0.035em] text-[#0F1452] sm:text-[56px] lg:text-[66px]`}
          >
            <span className="block sm:whitespace-nowrap">
              Get help with{" "}
              <span className="bg-gradient-to-r from-[#1E9AD6] to-[#14A08A] bg-clip-text text-transparent">your</span>
            </span>
            <span className="block pb-1 sm:whitespace-nowrap">
              <span className="bg-gradient-to-r from-[#6A2FD0] to-[#3D6FEA] bg-clip-text text-transparent">account,</span>{" "}
              <span className="bg-gradient-to-r from-[#3D7BFF] to-[#14A08A] bg-clip-text text-transparent">safely.</span>
            </span>
          </h1>

          <p className="mt-5 max-w-[520px] text-base leading-[1.75] text-[#3A4268] sm:text-lg">
            Find sign-in and recovery guidance, see how to request changes to your details, and learn how business account
            access works.
          </p>

          <div className={`${HEADING} mt-10 flex flex-col gap-3 sm:flex-row sm:gap-3.5`}>
            <Link href="#account-tasks" className={`${PRIMARY_BTN} px-[26px] py-4`}>
              Choose a task
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-[#0F1452] bg-white px-[24px] py-4 text-base font-semibold text-[#0F1452] transition-colors hover:bg-[#F5F6FB]"
            >
              Contact support
            </Link>
          </div>
        </div>

        {/* Right: slanted photo with overlay cards */}
        <div
          className={`${HEADING} relative h-[620px] lg:absolute lg:inset-y-0 lg:left-[48%] lg:right-0 lg:h-auto`}
        >
          <div
            aria-hidden="true"
            className={`absolute inset-0 hidden bg-gradient-to-b from-[#6A2FD0] via-[#3D7BFF] to-[#14A08A] lg:block ${EDGE_CLIP}`}
          />
          <div className={`absolute inset-0 overflow-hidden ${PHOTO_CLIP}`}>
            <Image
              src={`${IMG}/hero-laptop-and-phone.webp`}
              alt="Person using a laptop and a smartphone at a café table"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2A1F6E]/10 to-[#2A1F6E]/70"
            />
          </div>

          {/* Security first pill */}
          <div className="absolute right-4 top-6 z-20 flex items-center gap-2 rounded-full bg-white py-2 pl-2 pr-4 shadow-[0_14px_30px_rgba(30,30,90,0.2)] sm:right-8 lg:right-[40px] lg:top-[44px]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#5B2FB8] text-white">
              <Shield className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden="true" />
            </span>
            <span className="text-[13px] font-semibold text-[#0F1452]">Security first</span>
          </div>

          {/* Before you sign in card */}
          <div className="absolute left-4 top-[84px] z-10 w-[min(330px,calc(100%-2rem))] rounded-[20px] border border-white/80 bg-white/90 p-5 shadow-[0_24px_50px_rgba(30,30,90,0.22)] backdrop-blur-md sm:left-8 lg:left-[18%] lg:top-[80px]">
            <div className="flex items-center justify-between">
              <p className="text-[15px] font-bold text-[#0F1452]">Before you sign in</p>
              <span className="rounded-md bg-[#F1F2F8] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#6B7194]">
                Guide
              </span>
            </div>
            <p className="mt-3 flex items-center gap-2 rounded-lg bg-[#E6F6EF] px-3 py-2 text-[12px] font-medium text-[#0E7F55]">
              <Lock className="h-3.5 w-3.5 shrink-0" strokeWidth={2.25} aria-hidden="true" />
              Check you’re on the official Zoiko site
            </p>
            <ul className="mt-2 divide-y divide-[#EEF0F7] border-t border-[#EEF0F7]">
              {GUIDE_ROWS.map(({ label, icon: Icon, iconBg, tag }) => (
                <li key={label} className="flex items-center gap-3 py-2.5">
                  <span className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-lg text-white ${iconBg}`}>
                    <Icon className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1 text-[12.5px] font-medium leading-snug text-[#0F1452]">{label}</span>
                  <span
                    className={`shrink-0 rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-[0.06em] ${
                      tag === "DO" ? "bg-[#E6F6EF] text-[#0E8A5F]" : "bg-[#FDECEC] text-[#C0262D]"
                    }`}
                  >
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business accounts card */}
          <div className="absolute bottom-6 right-4 z-10 w-[250px] rounded-[18px] bg-[#111A4D] p-4 shadow-[0_24px_50px_rgba(10,20,70,0.35)] sm:right-8 lg:bottom-[44px] lg:right-[36px]">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#AEB6E8]">Business accounts</p>
            <p className="mt-1.5 text-[15px] font-semibold text-white">Roles need verifying</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {ROLES.map((role) => (
                <li key={role} className="rounded-md bg-white/12 px-2 py-1.5 text-[11px] font-semibold text-white">
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
