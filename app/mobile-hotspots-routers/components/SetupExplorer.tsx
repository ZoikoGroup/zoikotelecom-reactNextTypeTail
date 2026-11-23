"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  BatteryMedium,
  Building,
  CardSim,
  Check,
  Info,
  RadioTower,
  Router,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const IMG = "/Images/mobile-hotspots-routers";

type SetupId = "hotspot" | "router" | "wifi";

const SETUPS: {
  id: SetupId;
  title: string;
  text: string;
  icon: LucideIcon;
  image: string;
  alt: string;
  needs: string[];
}[] = [
  {
    id: "hotspot",
    title: "Portable mobile hotspot",
    text: "Battery-powered, pocket-sized mobile internet for travel and work away.",
    icon: Router,
    image: "setup-portable-hotspot.webp",
    alt: "Map, camera and notebook laid out for a trip",
    needs: [
      "An active SIM or eSIM with a plan that allows hotspot use",
      "A charged battery — runtime depends on the model and use",
      "Mobile signal where you’ll use it, including abroad if roaming",
      "A check of how many devices the model supports",
    ],
  },
  {
    id: "router",
    title: "4G / 5G router",
    text: "Usually mains-powered and placed in one spot — at home or on a site.",
    icon: Router,
    image: "setup-4g-5g-router.webp",
    alt: "Living room with a yellow armchair",
    needs: [
      "An active SIM or eSIM with a plan that allows router use",
      "Mains power and a spot with good indoor signal, often near a window",
      "Radio bands that match the network — check the exact model",
      "Ethernet ports or an external antenna, only if the model has them",
    ],
  },
  {
    id: "wifi",
    title: "Wi-Fi router for fixed broadband",
    text: "Shares an existing broadband connection around your home or office.",
    icon: Wifi,
    image: "setup-wifi-router.webp",
    alt: "Bright office corridor with glass-walled rooms",
    needs: [
      "An existing fixed broadband or fibre line — it’s a separate service",
      "A router compatible with that line or connected to the provider’s modem",
      "Usually no SIM — internet comes from the broadband connection",
      "Good placement, or mesh units for larger spaces if supported",
    ],
  },
];

const SITUATIONS: { title: string; text: string; image: string; setup: SetupId }[] = [
  { title: "Travel", text: "Internet on the move", image: "situation-travel.webp", setup: "hotspot" },
  {
    title: "Home without fixed broadband",
    text: "A router in one place",
    image: "situation-home.webp",
    setup: "router",
  },
  {
    title: "Temporary workplace",
    text: "Sites and pop-ups",
    image: "situation-temporary-workplace.webp",
    setup: "router",
  },
  {
    title: "Existing broadband",
    text: "Better Wi-Fi at home or work",
    image: "situation-existing-broadband.webp",
    setup: "wifi",
  },
];

const BASICS: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: RadioTower, title: "Signal", text: "Coverage maps are predictions." },
  { icon: CardSim, title: "SIM & plan", text: "An active, compatible plan is needed." },
  { icon: Building, title: "Indoors", text: "Walls and placement affect signal." },
  { icon: BatteryMedium, title: "Power", text: "Battery or mains, by model." },
];

export default function SetupExplorer() {
  const [selected, setSelected] = useState<SetupId | null>(null);
  const [situation, setSituation] = useState<string | null>(null);
  const setupRef = useRef<HTMLElement>(null);

  const chooseSituation = (title: string, setup: SetupId) => {
    setSituation(title);
    setSelected(setup);
    setupRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const active = SETUPS.find((s) => s.id === selected);

  return (
    <>
      {/* Where you'll use it */}
      <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Where you’ll use it"
            title="Which situation sounds like you?"
            subtitle="Not a personalised score — just a way to start."
          />

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SITUATIONS.map(({ title, text, image, setup }) => {
              const isActive = situation === title;
              return (
                <button
                  key={title}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => chooseSituation(title, setup)}
                  className={`flex items-stretch overflow-hidden rounded-[20px] border bg-white text-left shadow-[0_12px_30px_rgba(17,24,60,0.08)] transition hover:-translate-y-0.5 ${
                    isActive ? "border-[#7C3AED] ring-2 ring-[#7C3AED]/25" : "border-[#E6E9F2]"
                  }`}
                >
                  <span className="relative w-24 shrink-0">
                    <Image src={`${IMG}/${image}`} alt="" fill sizes="96px" className="object-cover" />
                  </span>
                  <span className="flex flex-col justify-center px-4 py-4">
                    <span className="text-base font-bold text-[#11183C]">{title}</span>
                    <span className="mt-1 text-sm text-[#6B7194]">{text}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Choose a setup */}
      <section ref={setupRef} id="choose-setup" className="w-full scroll-mt-24 bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Choose a setup"
            title="Three kinds of device, three different jobs"
            subtitle="Select one to see what it needs. This is guidance only — not a device or network suitability guarantee."
            className="max-w-4xl"
          />

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {SETUPS.map(({ id, title, text, icon: Icon, image, alt }) => {
              const isActive = selected === id;
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={isActive}
                  aria-controls="setup-needs"
                  onClick={() => setSelected(id)}
                  className={`group overflow-hidden rounded-[20px] border bg-white text-left shadow-[0_12px_30px_rgba(17,24,60,0.08)] transition hover:-translate-y-0.5 ${
                    isActive ? "border-[#E11D74] ring-2 ring-[#E11D74]/25" : "border-[#E6E9F2]"
                  }`}
                >
                  <span className="relative block aspect-[384/170] w-full overflow-hidden">
                    <Image
                      src={`${IMG}/${image}`}
                      alt={alt}
                      fill
                      sizes="(min-width: 768px) 384px, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </span>
                  <span className="block px-5 pb-6 pt-5">
                    <span className="flex items-start gap-2.5">
                      <Icon className="mt-1 h-5 w-5 shrink-0 text-[#E11D74]" strokeWidth={2} aria-hidden="true" />
                      <span className="text-lg font-extrabold leading-snug text-[#11183C]">{title}</span>
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-[#4B5375]">{text}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Needs panel */}
          <div
            id="setup-needs"
            aria-live="polite"
            className="mt-6 rounded-[20px] border border-[#E6E9F2] bg-white p-5 sm:p-7"
          >
            {active ? (
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#E11D74]">What it needs</p>
                <h3 className="mt-1 text-xl font-extrabold text-[#11183C]">{active.title}</h3>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {active.needs.map((need) => (
                    <li key={need} className="flex items-start gap-3 text-sm leading-relaxed text-[#4B5375]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FCE7F3]">
                        <Check className="h-3 w-3 text-[#E11D74]" strokeWidth={3} aria-hidden="true" />
                      </span>
                      {need}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="flex items-center gap-3 rounded-xl border-2 border-dashed border-[#D9C8F5] bg-[#FAF7FF] px-5 py-5 text-sm font-semibold text-[#6B5A8E] sm:text-base">
                <Info className="h-5 w-5 shrink-0 text-[#B0135F]" aria-hidden="true" />
                Choose a setup above to see what it needs.
              </p>
            )}
          </div>

          {/* Basics strip */}
          <ul className="mt-6 grid grid-cols-1 overflow-hidden rounded-[20px] border border-[#F6D3E4] bg-[#FFF6FA] sm:grid-cols-2 lg:grid-cols-4">
            {BASICS.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="flex items-start gap-3 border-b border-[#F6D3E4] px-5 py-5 last:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#E11D74]" strokeWidth={2} aria-hidden="true" />
                <span>
                  <span className="block text-sm font-bold text-[#11183C] sm:text-base">{title}</span>
                  <span className="mt-0.5 block text-sm text-[#4B5375]">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
