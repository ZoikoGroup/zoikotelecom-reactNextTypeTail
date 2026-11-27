import Image from "next/image";
import { MapPin } from "lucide-react";

const sectionContent = {
  step: "03",
  eyebrow: "YOUR LOCATIONS",
  headingPrefix: "Every site is checked ",
  headingAccent: "separately",
  description:
    "A postcode is context — never an availability result. We can discuss availability for each location.",
} as const;

const statusRows = [
  {
    statusLabel: "Confirmed",
    statusClass: "text-[#15803d]",
    barClass: "bg-[#eaf8ef]",
    title: "Checked with an authoritative source",
    detail: "Shown with the date, technology and source.",
  },
  {
    statusLabel: "Cannot confirm",
    statusClass: "text-[#b45309]",
    barClass: "bg-[#fff4de]",
    title: "No match or no answer yet",
    detail: "That isn’t the same as “not available”.",
  },
  {
    statusLabel: "Assisted only",
    statusClass: "text-[#475569]",
    barClass: "bg-[#eef0f7]",
    title: "Discussed with our team",
    detail: "Where no online checker is connected",
  },
] as const;

const checkerFootnote = {
  badge: "NOT LIVE",
  text: "Online site checker",
} as const;

const locationPhotoCard = {
  image: "/Images/cloud/7.png",
  alt: "Team members collaborating around laptops at a wooden table during location planning",
  calloutTitle: "Several sites?",
  calloutDescription:
    "List them in your enquiry — each one is reviewed on its own.",
} as const;

export default function YourLocationsSection() {
  return (
    <section
      id="your-locations"
      className="w-full bg-white px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left column: Header + 3 status rows + checker footer */}
          <div className="lg:col-span-6">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
              <span className="italic text-[#e093b9]">
                {sectionContent.step}
              </span>
              <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
            </p>

            <h2 className="mt-2.5 text-3xl font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1438] sm:text-[36px]">
              {sectionContent.headingPrefix}
              <span className="font-semibold italic text-[#b81d78]">
                {sectionContent.headingAccent}
              </span>
            </h2>

            <p className="mt-2.5 max-w-[490px] text-[13.5px] leading-[1.6] text-[#4b5563] sm:text-sm">
              {sectionContent.description}
            </p>

            {/* Three status rows */}
            <div className="mt-6 space-y-3">
              {statusRows.map((row) => (
                <div
                  key={row.statusLabel}
                  className="flex flex-col gap-3 rounded-2xl border border-[#eaecf4] bg-white px-4 py-3.5 shadow-[0_4px_16px_rgba(15,23,42,0.03)] sm:flex-row sm:items-center sm:gap-4"
                >
                  <div
                    className={`flex h-9 w-full shrink-0 items-center rounded-lg px-3.5 text-[11px] font-bold sm:w-[195px] ${row.barClass} ${row.statusClass}`}
                  >
                    {row.statusLabel}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[12.5px] font-bold leading-snug text-[#0c1438]">
                      {row.title}
                    </h3>
                    <p className="mt-0.5 text-[11.5px] leading-[1.45] text-[#64748b]">
                      {row.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom status line */}
            <div className="mt-4 flex items-center gap-2.5">
              <span className="inline-flex items-center rounded-md bg-[#fef2d6] px-2.5 py-1 text-[9.5px] font-extrabold uppercase tracking-[0.12em] text-[#92400e]">
                {checkerFootnote.badge}
              </span>
              <span className="text-[12px] font-medium text-[#64748b]">
                {checkerFootnote.text}
              </span>
            </div>
          </div>

          {/* Right column: Photo card with overlaid "Several sites?" card */}
          <div className="lg:col-span-6">
            <article className="relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-3xl bg-[#1e293b] p-5 shadow-[0_14px_34px_rgba(15,23,42,0.12)] sm:min-h-[385px] sm:p-6">
              <Image
                src={locationPhotoCard.image}
                alt={locationPhotoCard.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />

              {/* Overlaid callout card */}
              <div className="relative z-10 flex items-center gap-3.5 rounded-2xl border border-white/80 bg-white/95 px-4 py-3.5 shadow-[0_10px_28px_rgba(15,23,42,0.18)] backdrop-blur-sm sm:px-5 sm:py-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f3e8ff] text-[#7c3aed]">
                  <MapPin className="h-4 w-4 stroke-[2.2]" aria-hidden="true" />
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[13px] font-extrabold leading-snug text-[#0c1438]">
                    {locationPhotoCard.calloutTitle}
                  </h3>
                  <p className="mt-0.5 text-[11.5px] leading-[1.45] text-[#4b5563]">
                    {locationPhotoCard.calloutDescription}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
