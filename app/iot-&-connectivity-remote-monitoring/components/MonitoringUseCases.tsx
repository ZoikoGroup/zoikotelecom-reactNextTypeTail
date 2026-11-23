import React from "react";
import Image from "next/image";
import { Gauge, Map, Sun, Thermometer, X, Zap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const IMG = "/Images/iot-&-connectivity-remote-monitoring";

const USE_CASES = [
  {
    title: "Equipment condition",
    text: "Pump or motor run state, or a vendor diagnostic signal.",
    notIncluded: "guaranteed fault prediction.",
    image: "equipment-condition.webp",
    alt: "Engineer looking at code on a monitor",
    icon: Sun,
  },
  {
    title: "Cold storage & environment",
    text: "Temperature and humidity readings across cold stores.",
    notIncluded: "a validated food or medicine cold-chain logger.",
    image: "cold-storage.webp",
    alt: "Tall warehouse shelving aisle",
    icon: Thermometer,
  },
  {
    title: "Tanks, levels & meters",
    text: "Fill level, flow, meter pulses and pressure status.",
    notIncluded: "billing-grade measurement or calibration.",
    image: "tanks-levels-meters.webp",
    alt: "Antelope crossing open grassland",
    icon: Gauge,
  },
  {
    title: "Backup power",
    text: "UPS, generator or battery health flags.",
    notIncluded: "certified outage protection — this isn’t a backup product.",
    image: "backup-power.webp",
    alt: "Power lines at sunset",
    icon: Zap,
  },
  {
    title: "Distributed sites",
    text: "Device health across many branches or locations.",
    notIncluded: "a coverage or roaming promise.",
    image: "distributed-sites.webp",
    alt: "Clothing shop interior",
    icon: Map,
  },
] as const;

const NOT_FOR = [
  "Health or clinical monitoring",
  "Fire or life-safety alarms",
  "CCTV or tracking people",
  "Emergency response or 999 contact",
  "Remote control of machines",
  "Driver or worker location tracking",
] as const;

export default function MonitoringUseCases() {
  return (
    <section id="use-cases" className="w-full scroll-mt-24 bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Use cases"
          title="What businesses monitor remotely"
          subtitle="Illustrative applications — each one depends on suitable sensors and an approved system."
          className="max-w-2xl"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map(({ title, text, notIncluded, image, alt, icon: Icon }) => (
            <article
              key={title}
              className="flex flex-col overflow-hidden rounded-[22px] border border-[#E6E9F2] bg-white shadow-[0_12px_30px_rgba(17,24,60,0.06)]"
            >
              <div className="relative aspect-[385/180] w-full">
                <Image src={`${IMG}/${image}`} alt={alt} fill sizes="(min-width: 1024px) 385px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="flex items-center gap-2.5 text-lg font-bold text-[#11183C]">
                  <Icon className="h-5 w-5 shrink-0 text-[#12936F]" strokeWidth={2} aria-hidden="true" />
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5375]">{text}</p>
                <div className="mt-auto pt-4">
                  <p className="border-t border-dashed border-[#E2E5EF] pt-3 text-xs leading-relaxed text-[#6B7194]">
                    <span className="font-bold text-[#B42318]">Not included:</span> {notIncluded}
                  </p>
                </div>
              </div>
            </article>
          ))}

          <aside className="rounded-[22px] border border-[#F6CFD8] bg-[#FFF6F7] p-6">
            <h3 className="flex items-center gap-2.5 text-lg font-bold text-[#11183C]">
              <X className="h-5 w-5 text-[#B42318]" strokeWidth={2.5} aria-hidden="true" />
              Not for these uses
            </h3>
            <ul className="mt-4 space-y-3.5">
              {NOT_FOR.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#2B3150]">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-[#B42318]" strokeWidth={2} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
