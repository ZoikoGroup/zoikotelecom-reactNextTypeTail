import React from "react";
import SectionHeader from "./SectionHeader";

const TOPICS = [
  {
    topic: "Countries",
    ask: "Where devices operate, indoors or outdoors, and how long they stay abroad",
    notClaimed: "“Worldwide” or blanket EU coverage",
  },
  {
    topic: "Network technology",
    ask: "4G, 5G, LTE-M or NB-IoT needs, module bands and network switch-off risks",
    notClaimed: "Automatic availability or signal",
  },
  {
    topic: "SIM or eSIM",
    ask: "Physical SIM size or soldered eUICC, and how profiles are managed",
    notClaimed: "Consumer QR-code eSIM as industrial remote provisioning",
  },
  {
    topic: "IP & APN",
    ask: "Fixed or dynamic IP, public or private APN, VPN and inbound access",
    notClaimed: "A private APN or security package by default",
  },
  {
    topic: "Data routing",
    ask: "Where traffic breaks out, transport encryption and cross-border transfers",
    notClaimed: "UK-only data residency or full end-to-end encryption",
  },
  {
    topic: "Loss & misuse",
    ask: "Stolen SIMs, fraud and sudden usage spikes",
    notClaimed: "Real-time fraud blocking or usage alarms",
  },
  {
    topic: "Timing",
    ask: "Whether delays or bursts would matter",
    notClaimed: "Uptime, latency or 24/7 monitoring guarantees",
  },
  {
    topic: "Privacy",
    ask: "Whether identifiers or location could link to people",
    notClaimed: "Any use for surveillance or productivity monitoring",
  },
] as const;

export default function CoverageRoamingSecurity() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Coverage, roaming & security"
          title="Where and how your devices connect"
          subtitle="Each of these is confirmed for your deployment — none is assumed."
          className="max-w-3xl"
        />

        <div className="mt-10 overflow-x-auto rounded-[22px] border border-[#E6E9F2] bg-white">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr>
                <th scope="col" className="w-[200px] bg-[#11183C] px-5 py-4 font-bold text-white">
                  Topic
                </th>
                <th scope="col" className="bg-[#2357C9] px-5 py-4 font-bold text-white">
                  What we’ll ask
                </th>
                <th scope="col" className="bg-[#B42318] px-5 py-4 font-bold text-white">
                  Not claimed without evidence
                </th>
              </tr>
            </thead>
            <tbody>
              {TOPICS.map(({ topic, ask, notClaimed }) => (
                <tr key={topic} className="border-t border-[#E6E9F2]">
                  <th scope="row" className="bg-[#F5F7FC] px-5 py-4 align-top font-bold text-[#11183C]">
                    {topic}
                  </th>
                  <td className="px-5 py-4 align-top text-[#2B3150]">{ask}</td>
                  <td className="px-5 py-4 align-top text-[#2B3150]">{notClaimed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
