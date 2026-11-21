import React from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const IMG = "/Images/iot-&-connectivity-remote-monitoring";

const INDICATORS = [
  {
    title: "Latency",
    text: "How long readings take to arrive from the device.",
    image: "latency.webp",
    alt: "Yellow network cables plugged into a switch",
  },
  {
    title: "Dropouts",
    text: "How often the connection is lost, and for how long.",
    image: "dropouts.webp",
    alt: "Bundle of fibre network cables",
  },
  {
    title: "Buffering",
    text: "How many readings are waiting to be sent after a gap.",
    image: "buffering.webp",
    alt: "Rows of server racks",
  },
] as const;

const RECORD_FIELDS = [
  "Value",
  "Units",
  "Event time",
  "Receive time",
  "Status",
  "Calibration",
  "Quality flag",
] as const;

export default function ConnectivityHealth() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Proposed — not live"
          title="Connectivity health and reading quality"
          subtitle="These indicators could be part of a future service. None are live on this website, and nothing here reflects real equipment."
          className="max-w-3xl"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDICATORS.map(({ title, text, image, alt }) => (
            <article
              key={title}
              className="rounded-[24px] border-2 border-dashed border-[#CFD4EE] bg-[#FAFBFE] p-5 shadow-[0_12px_30px_rgba(17,24,60,0.06)]"
            >
              <div className="relative aspect-[343/138] w-full overflow-hidden rounded-xl">
                <Image src={`${IMG}/${image}`} alt={alt} fill sizes="(min-width: 1024px) 345px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#11183C]">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#2B3150]">{text}</p>
              <span className="mt-3 inline-block rounded-md bg-[#ECEEF6] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#4B5375]">
                Proposed · Not live
              </span>
            </article>
          ))}
        </div>

        <h3 className="mt-10 text-base font-bold text-[#11183C]">
          A good reading record would include (future only):
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {RECORD_FIELDS.map((field) => (
            <li
              key={field}
              className="rounded-xl border-2 border-dashed border-[#DCE0EC] px-3.5 py-2 text-sm font-semibold text-[#2B3150]"
            >
              {field}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
