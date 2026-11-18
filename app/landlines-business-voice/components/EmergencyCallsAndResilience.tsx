import React from "react";
import { Building2, CircleAlert, MapPin, TriangleAlert } from "lucide-react";
import SectionHeader from "./SectionHeader";

const CRITICAL_DEVICES = [
  "Alarms",
  "Lift lines",
  "Fax",
  "Card terminals",
  "Monitoring equipment",
] as const;

const CARDS = [
  {
    id: "power-and-backup",
    title: "Power and backup",
    text: "VoIP depends on power and broadband. Providers must give access to 999 — talk to us about practical protection such as backup power or a mobile alternative. No service can promise to work 100% of the time.",
    icon: CircleAlert,
    card: "bg-[#FDF2F2]",
    iconBg: "bg-[#DC2626]",
    heading: "text-[#8B1D1D]",
    body: "text-[#7F1D1D]",
  },
  {
    id: "emergency-location",
    title: "Emergency location",
    text: "Emergency services need to know where a caller is. Keep each user’s and site’s address up to date, especially if people move between locations or work remotely.",
    icon: MapPin,
    card: "bg-[#FFF4E5]",
    iconBg: "bg-[#E08A00]",
    heading: "text-[#6B3A00]",
    body: "text-[#5C3300]",
  },
  {
    id: "multiple-sites",
    title: "Multiple sites",
    text: "Each site needs its own address, numbers and a plan for local emergency access. We’ll review this with you.",
    icon: Building2,
    card: "bg-[#EEF1FD]",
    iconBg: "bg-[#3D5AFE]",
    heading: "text-[#1E2A78]",
    body: "text-[#283593]",
  },
] as const;

function IconTile({ icon: Icon, bg }: { icon: typeof MapPin; bg: string }) {
  return (
    <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-white ${bg}`}>
      <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
    </span>
  );
}

export default function EmergencyCallsAndResilience() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="Safety & resilience"
          title="Emergency calls and keeping your business reachable"
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
          {CARDS.map((item) => (
            <div key={item.id} className={`flex items-start gap-5 rounded-3xl p-7 ${item.card}`}>
              <IconTile icon={item.icon} bg={item.iconBg} />
              <div>
                <h3 className={`text-lg font-extrabold ${item.heading}`}>{item.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${item.body}`}>{item.text}</p>
              </div>
            </div>
          ))}

          <div className="flex items-start gap-5 rounded-3xl bg-[#FDEFF6] p-7">
            <IconTile icon={TriangleAlert} bg="bg-[#E11D74]" />
            <div>
              <h3 className="text-lg font-extrabold text-[#701A47]">Critical devices</h3>
              <p className="mt-2 text-sm text-[#6B1C44]">
                Do any of these use your phone lines?
              </p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {CRITICAL_DEVICES.map((device) => (
                  <li
                    key={device}
                    className="rounded-full border border-[#F3C4DA] bg-white px-4 py-2 text-sm font-semibold text-[#11183C]"
                  >
                    {device}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-bold text-[#8B1D5B]">
                If none apply, tell us anyway — we’ll check together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
