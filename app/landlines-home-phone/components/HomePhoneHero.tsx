import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  FileText,
  Heart,
  Phone,
  Plug,
  Router,
  Search,
  Smartphone,
} from "lucide-react";

const CHAIN = [
  { label: "Power", icon: Plug },
  { label: "Router", icon: Router },
  { label: "Phone", icon: Smartphone },
] as const;

const FEATURES = [
  { title: "Make & receive calls", text: "On your home number", icon: Phone },
  { title: "A numbered service", text: "New or kept number", icon: FileText },
  { title: "Uses home broadband", text: "For digital landlines", icon: Router },
  { title: "Subject to checks", text: "Availability confirmed with you", icon: Search },
] as const;

export default function HomePhoneHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#FBF8FF] via-white to-[#FDF1F7]">
      <Image
        src="/Images/landlines-home-phone/hero-contour-background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />

      <div className="relative mx-auto max-w-[1300px] px-4 pt-10 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          {/* Left */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#F7C6DD] bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#E11D74]">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#E11D74]" />
              Home phone · Digital landlines
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#3F6DB5] sm:text-5xl lg:text-[64px]">
              Home phone, explained for a{" "}
              <span className="bg-gradient-to-r from-[#E11D74] to-[#8E37E8] bg-clip-text text-transparent">
                changing UK network.
              </span>
            </h1>
            <p className="mt-5 max-w-[580px] text-base leading-7 text-[#4B5375] sm:text-lg">
              A plain-language guide to home landlines: how the technology is
              changing, staying safe, what works with your phone, and where to get help.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-7 py-3.5 text-base font-bold text-white shadow-[0_8px_22px_rgba(225,29,116,0.35)] transition-transform hover:scale-[1.01]"
              >
                Ask about home phone
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              </Link>
              <Link
                href="#whats-changing"
                className="inline-flex items-center justify-center rounded-xl border border-[#11183C] bg-white px-7 py-3.5 text-base font-bold text-[#11183C] transition-colors hover:bg-[#F5F6FB]"
              >
                How digital landlines work
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="relative aspect-[508/448] w-full overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_20px_60px_rgba(142,55,232,0.18)]">
              <Image
                src="/Images/landlines-home-phone/hero-floating-phone.webp"
                alt="Smartphone floating above an open hand by a river"
                fill
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="object-cover"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -right-3 -top-3 flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-[#F9C8E0] bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-white shadow-xl"
            >
              <Phone className="h-9 w-9" strokeWidth={2} />
            </span>

            <div className="absolute -left-4 bottom-8 w-[300px] max-w-[85%] rounded-2xl bg-white p-4 shadow-[0_16px_40px_rgba(17,24,60,0.15)] sm:-left-14">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-[#11183C]">Digital landline</p>
                <span className="rounded-md bg-[#F1F3F9] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#8A90A6]">
                  Illustration
                </span>
              </div>
              <ol className="mt-3 flex items-center" aria-label="Power, then router, then phone">
                {CHAIN.map(({ label, icon: Icon }, i) => (
                  <React.Fragment key={label}>
                    {i > 0 && <span aria-hidden="true" className="mx-1 mb-5 h-0.5 flex-1 bg-[#8E37E8]" />}
                    <li className="flex flex-col items-center gap-1.5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FDEFF6] text-[#E11D74]">
                        <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                      </span>
                      <span className="text-xs text-[#4B5375]">{label}</span>
                    </li>
                  </React.Fragment>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Safety alerts */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex items-start gap-4 rounded-2xl border border-[#F5D9A8] bg-[#FFF6E6] p-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E08A00] text-white">
              <Plug className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-lg font-extrabold text-[#5C3300]">Power cuts</h2>
              <p className="mt-1 text-sm leading-relaxed text-[#5C3300] sm:text-base">
                A digital landline generally needs mains-powered equipment. Calls may
                not work during a power cut unless you have a backup.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-[#F5C9DE] bg-[#FDF0F6] p-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E11D74] text-white">
              <Heart className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-lg font-extrabold text-[#701A47]">Telecare and alarms</h2>
              <p className="mt-1 text-sm leading-relaxed text-[#701A47] sm:text-base">
                If anyone at home uses a pendant, care alarm, or medical or telecare
                device, talk to your provider and the device supplier before making
                any changes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature strip */}
      <ul className="relative mt-10 grid grid-cols-1 divide-y divide-[#ECEEF6] border-t border-[#ECEEF6] bg-white sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {FEATURES.map(({ title, text, icon: Icon }) => (
          <li key={title} className="flex items-center gap-4 px-6 py-6 lg:px-8">
            <Icon className="h-5 w-5 shrink-0 text-[#E11D74]" strokeWidth={2} aria-hidden="true" />
            <span className="text-base font-bold text-[#11183C]">{title}</span>
            <span className="ml-auto text-xs text-[#4B5375]">{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
