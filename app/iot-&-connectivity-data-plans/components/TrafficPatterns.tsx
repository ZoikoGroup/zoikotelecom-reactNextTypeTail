import React from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const IMG = "/Images/iot-&-connectivity-data-plans";

// `level` is a rough relative indicator (0–100) for the "Data use" meter, not a measurement.
const WORKLOADS = [
  {
    title: "Low-frequency sensors",
    text: "Small periodic readings, heartbeat pings and small event bursts.",
    caution: "Count protocol, keepalives and retries too. NB-IoT / LTE-M support must be verified.",
    image: "low-frequency-sensors.webp",
    alt: "Rack of hand tools in a workshop",
    level: 12,
  },
  {
    title: "Tracking beacons",
    text: "Variable messages, location payloads and bursts when moving.",
    caution: "GPS reporting isn’t the same as permission to use location.",
    image: "tracking-beacons.webp",
    alt: "Aerial view of a container port",
    level: 35,
  },
  {
    title: "Industrial gateways",
    text: "Many devices aggregated, larger packets and remote logs.",
    caution: "Often much higher than a single sensor; security and APN needed.",
    image: "industrial-gateways.webp",
    alt: "Network cables in a server cabinet",
    level: 65,
  },
  {
    title: "Fleet telematics",
    text: "Varying intervals, firmware events and travel abroad.",
    caution: "Roaming, network and privacy need a separate review.",
    image: "fleet-telematics.webp",
    alt: "Lorry on a mountain road",
    level: 50,
  },
  {
    title: "Retail endpoints",
    text: "Card terminal or transaction data, plus patches.",
    caution: "Connectivity alone doesn’t make a terminal PCI compliant.",
    image: "retail-endpoints.webp",
    alt: "Customer paying at a shop counter",
    level: 35,
  },
  {
    title: "Camera & audio devices",
    text: "High, variable throughput and media uploads.",
    caution: "Never plan these on low-data assumptions.",
    image: "camera-audio-devices.webp",
    alt: "Rows of wall-mounted cameras",
    level: 100,
  },
  {
    title: "Firmware-heavy estates",
    text: "Large over-the-air updates across many devices at once.",
    caution: "Peaks and retries must be planned; costs aren’t guaranteed.",
    image: "firmware-heavy-estates.webp",
    alt: "Code on a laptop screen",
    level: 80,
  },
  {
    title: "Smart building gateways",
    text: "Equipment updates across dense, indoor sites.",
    caution: "Indoor signal isn’t assured; no worker monitoring.",
    image: "smart-building-gateways.webp",
    alt: "Looking up at office towers",
    level: 50,
  },
] as const;

export default function TrafficPatterns() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Traffic patterns"
          title="Typical IoT workloads and their data character"
          subtitle="Illustrative examples to help you describe your devices — not plan names."
          className="max-w-4xl"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WORKLOADS.map(({ title, text, caution, image, alt, level }) => (
            <article
              key={title}
              className="flex flex-col overflow-hidden rounded-[20px] border border-[#E6E9F2] bg-white shadow-[0_12px_30px_rgba(17,24,60,0.07)]"
            >
              <div className="relative aspect-[285/150] w-full">
                <Image
                  src={`${IMG}/${image}`}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 285px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-md bg-white px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#11183C] shadow-sm">
                  Data use
                  <span
                    role="img"
                    aria-label={`Relative data use: ${level >= 80 ? "high" : level >= 45 ? "medium" : "low"}`}
                    className="block h-1.5 w-7 overflow-hidden rounded-full bg-[#ECE6F7]"
                  >
                    <span className="block h-full rounded-full bg-[#E11D74]" style={{ width: `${level}%` }} />
                  </span>
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-[#11183C]">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#4B5375]">{text}</p>
                <p className="mt-auto pt-4">
                  <span className="block rounded-lg bg-[#FFF4F4] px-3 py-2.5 text-xs leading-relaxed text-[#9B1C1C] sm:text-[13px]">
                    {caution}
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
