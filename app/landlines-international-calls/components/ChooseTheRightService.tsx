import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const SERVICE_CARDS = [
  {
    title: "Home & personal",
    text: "Calling abroad from a home phone. International rates depend on your plan.",
    link: { label: "Home phone guide", href: "/landlines-home-phone" },
    image: "/Images/landlines-international-calls/home-personal.webp",
    alt: "Smartphone floating above an open hand by a lake",
  },
  {
    title: "Business",
    text: "International calls on business landlines or business voice, with options to discuss.",
    link: { label: "Business landlines", href: "/landline-business" },
    image: "/Images/landlines-international-calls/business-team.webp",
    alt: "Team working on laptops in an office",
  },
] as const;

const COLUMNS = ["International calls", "Roaming", "International number"] as const;

const ROWS = [
  { label: "What it is", values: ["Calling abroad from the UK", "Using your mobile while abroad", "A number in another country"] },
  { label: "Where you are", values: ["In the UK", "Outside the UK", "Anywhere — callers are abroad"] },
  { label: "Charges set by", values: ["Your UK plan", "Your mobile plan’s roaming terms", "The number service"] },
] as const;

export default function ChooseTheRightService() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="Home or business"
          title="Choose the right service"
          subtitle="International calling depends on which Zoiko Telecom service you use."
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICE_CARDS.map((card) => (
            <article
              key={card.title}
              className="flex overflow-hidden rounded-3xl border border-[#E6E9F2] bg-white"
            >
              <div className="relative w-[34%] shrink-0">
                <Image src={card.image} alt={card.alt} fill sizes="200px" className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-[#11183C]">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5375]">{card.text}</p>
                <Link
                  href={card.link.href}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#E11D74] hover:underline"
                >
                  {card.link.label}
                  <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-6xl overflow-hidden rounded-3xl border border-[#E6E9F2] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <caption className="sr-only">International calls, roaming and international numbers compared</caption>
              <thead className="bg-[#0B1445] text-white">
                <tr>
                  <td className="w-[17%] bg-[#060B33] px-5 py-5" />
                  {COLUMNS.map((col) => (
                    <th key={col} scope="col" className="px-5 py-5 font-bold">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EEF0F7]">
                {ROWS.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="px-5 py-5 font-bold text-[#11183C]">{row.label}</th>
                    {row.values.map((value, i) => (
                      <td key={i} className="px-5 py-5 text-[#4B5375]">{value}</td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th scope="row" className="px-5 py-5 font-bold text-[#11183C]">Learn more</th>
                  <td className="px-5 py-5 text-[#4B5375]">This page</td>
                  <td className="px-5 py-5">
                    <Link href="/roaming-international" className="text-[#434A6E] underline underline-offset-4 hover:text-[#E11D74]">
                      Roaming guide
                    </Link>
                  </td>
                  <td className="px-5 py-5">
                    <Link href="/landlines-virtual-numbers" className="text-[#434A6E] underline underline-offset-4 hover:text-[#E11D74]">
                      Virtual numbers
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="px-5 pb-5 text-xs text-[#4B5375]">Each has its own page and its own charges.</p>
        </div>
      </div>
    </section>
  );
}
