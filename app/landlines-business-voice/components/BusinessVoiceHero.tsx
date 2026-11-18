import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AudioLines,
  ChevronRight,
  CornerUpRight,
  FileText,
  Laptop,
  ListFilter,
  Phone,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";

const ANSWER_ON = [
  { label: "Desk phone", icon: Phone },
  { label: "Laptop app", icon: Laptop },
  { label: "Mobile", icon: Smartphone },
] as const;

const ASK_ABOUT = [
  { label: "Call queues", icon: ListFilter },
  { label: "Menu options", icon: FileText },
  { label: "Call forwarding", icon: CornerUpRight },
] as const;

const CALL_FLOW = [
  { title: "Customer calls", text: "Your business number", icon: Phone },
  { title: "Welcome menu", text: "Press 1 for sales…", icon: FileText },
  { title: "Right team answers", text: "Desk phone, app or mobile", icon: Users },
] as const;

const AVATARS = [
  "/Images/landlines-business-voice/avatar-1.webp",
  "/Images/landlines-business-voice/avatar-2.webp",
  "/Images/landlines-business-voice/avatar-3.webp",
] as const;

export default function BusinessVoiceHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#F7F3FF] via-white to-[#FDEFF6]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_90%,rgba(61,90,254,0.12),transparent_45%)]"
      />

      <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 px-4 py-12 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:px-10 lg:py-14">
        {/* Left */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#F7C6DD] bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#E11D74]">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#E11D74]" />
            Business Voice · Hosted VoIP options
          </p>

          <p className="mt-5 text-lg font-bold text-[#7B3FE4]">
            Business Voice (VoIP)
          </p>
          <h1 className="mt-1 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#3F4FA6] sm:text-5xl lg:text-[52px]">
            Business calling built around{" "}
            <span className="bg-gradient-to-r from-[#E11D74] to-[#8E37E8] bg-clip-text text-transparent">
              the way your team works.
            </span>
          </h1>

          <p className="mt-5 max-w-[560px] text-base leading-7 text-[#4B5375] sm:text-lg">
            Understand digital business lines, hosted team voice, numbers,
            set-up and support — then talk to Zoiko Telecom about what suits
            your organisation.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(225,29,116,0.35)] transition-transform hover:scale-[1.01] sm:text-base"
            >
              Discuss business voice
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <Link
              href="/landlines"
              className="inline-flex items-center justify-center rounded-xl border border-[#11183C] bg-white px-7 py-3.5 text-sm font-bold text-[#11183C] transition-colors hover:bg-[#F5F6FB] sm:text-base"
            >
              Explore business landlines
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm font-bold text-[#11183C]">
              Ask about:
            </span>
            {ASK_ABOUT.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#ECEEF6] bg-white px-3.5 py-1.5 text-sm font-semibold text-[#11183C] shadow-sm"
              >
                <Icon className="h-4 w-4 text-[#E11D74]" strokeWidth={2} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          <p className="mt-5 flex max-w-[520px] items-start gap-2.5 text-sm leading-relaxed text-[#4B5375]">
            <Shield className="mt-0.5 h-4 w-4 shrink-0 text-[#7B3FE4]" strokeWidth={2} aria-hidden="true" />
            Terms, features, numbers and installation are confirmed for the
            relevant service before you agree.
          </p>
        </div>

        {/* Right: illustrative composition */}
        <div className="relative mx-auto w-full max-w-[560px] pb-10 pt-16 sm:pb-0">
          <div
            aria-hidden="true"
            className="absolute -right-10 top-24 h-[420px] w-[420px] rounded-full border-[10px] border-[#8E9BFF]/40"
          />

          {/* Answer on */}
          <div className="absolute right-0 top-0 z-20 flex flex-wrap items-center gap-1.5 rounded-2xl bg-gradient-to-r from-[#E11D74] to-[#8E37E8] p-2 text-xs font-semibold text-white shadow-lg sm:text-sm">
            <span className="px-2 font-bold">Answer on</span>
            {ANSWER_ON.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/20 px-2.5 py-1.5"
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          {/* Main photo */}
          <div className="relative ml-auto aspect-[490/460] w-[88%] overflow-hidden rounded-3xl border-[6px] border-white/70 shadow-[0_20px_50px_rgba(17,24,60,0.18)]">
            <Image
              src="/Images/landlines-business-voice/hero-team-meeting.webp"
              alt="Colleagues in a meeting with laptops"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>

          {/* Incoming call */}
          <div className="absolute left-0 top-28 z-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-[#BBF7D0] bg-[#22C55E] text-white">
              <Phone className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-bold text-[#11183C]">Incoming call</span>
              <span className="block text-xs text-[#4B5375]">Sales line · routing to team</span>
            </span>
            <AudioLines className="ml-2 h-6 w-6 text-[#C026D3]" strokeWidth={2} aria-hidden="true" />
          </div>

          {/* Your team */}
          <div className="absolute right-0 top-[48%] z-10 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:flex">
            <span className="flex -space-x-2">
              {AVATARS.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </span>
            <span>
              <span className="block text-sm font-bold text-[#11183C]">Your team</span>
              <span className="block text-xs text-[#4B5375]">Office, home or on the go</span>
            </span>
          </div>

          {/* How a call could flow */}
          <div className="relative z-10 -mt-24 w-[72%] max-w-[330px] rounded-2xl bg-white p-5 shadow-[0_20px_50px_rgba(17,24,60,0.15)]">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-bold text-[#11183C]">How a call could flow</p>
              <span className="rounded-md bg-[#F1F3F9] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#8A90A6]">
                Illustration
              </span>
            </div>
            <ol className="mt-4 space-y-3">
              {CALL_FLOW.map(({ title, text, icon: Icon }) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FDEFF6] text-[#E11D74]">
                    <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-[#11183C]">{title}</span>
                    <span className="block text-xs text-[#4B5375]">{text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Tilted inset photo */}
          <div className="absolute bottom-0 right-2 z-10 hidden aspect-[211/249] w-[38%] rotate-[4deg] overflow-hidden rounded-xl border-4 border-white shadow-xl sm:block">
            <Image
              src="/Images/landlines-business-voice/hero-professional.webp"
              alt="Smiling professional"
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
