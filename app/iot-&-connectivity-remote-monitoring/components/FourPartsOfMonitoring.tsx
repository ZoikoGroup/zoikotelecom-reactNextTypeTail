import React from "react";
import { ArrowRight, Cloud, Radio, RadioTower, User } from "lucide-react";
import SectionHeader from "./SectionHeader";

const PARTS = [
  {
    title: "Sensor produces",
    text: "A device takes a reading — temperature, level, run state.",
    owner: "You or your integrator",
    icon: Radio,
    border: "border-[#12936F]",
    top: "bg-[#12936F]",
  },
  {
    title: "Network carries",
    text: "The connection moves the reading from site to system.",
    owner: "Connectivity provider",
    icon: RadioTower,
    border: "border-[#3B6CF6]",
    top: "bg-[#3B6CF6]",
  },
  {
    title: "Platform interprets",
    text: "Software stores, displays and checks the reading.",
    owner: "Your platform supplier",
    icon: Cloud,
    border: "border-[#8E37E8]",
    top: "bg-[#8E37E8]",
  },
  {
    title: "Operator responds",
    text: "A named person decides what to do.",
    owner: "Your team",
    icon: User,
    border: "border-[#E11D74]",
    top: "bg-[#E11D74]",
  },
] as const;

const LAYERS = [
  {
    layer: "Device & sensor",
    owner: "You / integrator",
    confirmed: "Sensor type, calibration owner, power, maintenance and warranty",
    notStated: "That Zoiko supplies or certifies sensors",
  },
  {
    layer: "Gateway / edge",
    owner: "You / integrator",
    confirmed: "Protocol, buffering, firmware and patching, site network owner",
    notStated: "Automatic compatibility or always-on status",
  },
  {
    layer: "Connectivity",
    owner: "Telecom provider / partner",
    confirmed: "Bearer, SIM or eSIM, coverage tests, data allowance and roaming regions",
    notStated: "Universal coverage or unlimited data",
  },
  {
    layer: "Ingestion",
    owner: "Future platform",
    confirmed: "Secure ingestion, timestamps, deduplication and loss handling",
    notStated: "A working Zoiko telemetry API",
  },
  {
    layer: "Analytics & rules",
    owner: "Future platform",
    confirmed: "Validated rules, owners and false-alarm limits",
    notStated: "Predictive maintenance or zero false alerts",
  },
  {
    layer: "Response",
    owner: "You / integrator / service provider",
    confirmed: "Named escalation roles, hours and terms",
    notStated: "Zoiko-staffed 24/7 monitoring or emergency response",
  },
] as const;

export default function FourPartsOfMonitoring() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Who does what"
          title="Monitoring has four parts — connectivity is one"
          subtitle="Each part usually has a different owner. Naming them early avoids gaps."
          className="max-w-2xl"
        />

        <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch lg:gap-3">
          {PARTS.map(({ title, text, owner, icon: Icon, border, top }, i) => (
            <React.Fragment key={title}>
              {i > 0 && (
                <li aria-hidden="true" className="hidden items-center lg:flex">
                  <ArrowRight className="h-4 w-4 text-[#9AA0B8]" strokeWidth={2} />
                </li>
              )}
              <li className={`relative overflow-hidden rounded-[22px] border ${border} bg-white p-5 pt-7`}>
                <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${top}`} />
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F1F3F9] text-[#11183C]">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-[#11183C]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5375]">{text}</p>
                <span className="mt-4 inline-block rounded-md bg-[#F1F3F9] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#434A6E]">
                  {owner}
                </span>
              </li>
            </React.Fragment>
          ))}
        </ol>

        <h3 className="mt-14 text-xl font-extrabold text-[#11183C] sm:text-2xl">
          What must be true before anything is claimed
        </h3>

        <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E6E9F2]">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr>
                <th scope="col" className="w-[200px] bg-[#11183C] px-5 py-4 font-bold text-white">
                  Layer &amp; owner
                </th>
                <th scope="col" className="bg-[#0F7B63] px-5 py-4 font-bold text-white">
                  Confirmed before any claim
                </th>
                <th scope="col" className="bg-[#B42318] px-5 py-4 font-bold text-white">
                  Not stated without evidence
                </th>
              </tr>
            </thead>
            <tbody>
              {LAYERS.map(({ layer, owner, confirmed, notStated }) => (
                <tr key={layer} className="border-t border-[#E6E9F2]">
                  <th scope="row" className="bg-[#F5F7FC] px-5 py-4 align-top font-normal">
                    <span className="block font-bold text-[#11183C]">{layer}</span>
                    <span className="mt-0.5 block text-xs font-semibold text-[#434A6E]">{owner}</span>
                  </th>
                  <td className="px-5 py-4 align-top text-[#4B5375]">{confirmed}</td>
                  <td className="px-5 py-4 align-top text-[#4B5375]">{notStated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
