import React from "react";
import { FileText, Scale, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";

const KINDS: {
  title: string;
  description: string;
  badge: string;
  icon: LucideIcon;
  iconColor: string;
  borderClass: string;
  badgeClass: string;
  heightClass: string;
}[] = [
  {
    title: "Consumer rights",
    description: "Remedies for faulty goods under UK law — whatever else you buy.",
    badge: "Free · by law",
    icon: Scale,
    iconColor: "text-[#0E9E7B]",
    borderClass: "border-[#0E9E7B]",
    badgeClass: "bg-[#E3F7F1] text-[#0E7A62]",
    heightClass: "lg:min-h-[240px]",
  },
  {
    title: "Manufacturer warranty",
    description: "The maker’s own promise. It doesn’t replace the seller’s responsibilities.",
    badge: "Varies by maker",
    icon: FileText,
    iconColor: "text-[#3D7BFF]",
    borderClass: "border-[#3D7BFF]",
    badgeClass: "bg-[#EEF0F6] text-[#4A5275]",
    heightClass: "lg:min-h-[270px]",
  },
  {
    title: "Repair service",
    description: "A one-off repair or a service agreement. No repair partner or timescale is implied here.",
    badge: "Conditional",
    icon: Wrench,
    iconColor: "text-[#7B3FE4]",
    borderClass: "border-[#7B3FE4]",
    badgeClass: "bg-[#EEF0F6] text-[#4A5275]",
    heightClass: "lg:min-h-[300px]",
  },
  {
    title: "Insurance",
    description: "Optional, regulated cover with its own terms, exclusions and excess. No Zoiko policy is offered here.",
    badge: "Not confirmed",
    icon: ShieldCheck,
    iconColor: "text-[#E0127C]",
    borderClass: "border-[#E0127C]",
    badgeClass: "bg-[#FEE7E7] text-[#B42318]",
    heightClass: "lg:min-h-[330px]",
  },
];

export default function FourKindsSection() {
  return (
    <section id="four-kinds" className="w-full scroll-mt-24 bg-[#F5F6FB] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Four kinds of protection"
          title="They’re not the same thing"
          subtitle="From free legal rights to optional, regulated insurance."
        />

        {/* Stepped 4-column cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-end lg:gap-0">
          {KINDS.map(({ title, description, badge, icon: Icon, iconColor, borderClass, badgeClass, heightClass }, idx) => (
            <div
              key={title}
              className={`flex flex-col rounded-[24px] border border-t-[6px] bg-white p-6 shadow-[0_18px_30px_rgba(30,30,90,0.08)] lg:rounded-b-none ${borderClass} ${heightClass} ${
                idx > 0 ? "lg:-ml-px" : ""
              }`}
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#F3F5FB] ${iconColor}`}>
                <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="mt-3 text-lg font-bold text-[#0A1446]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1E1B2E]">{description}</p>
              <span
                className={`mt-4 inline-block w-fit rounded-lg px-2.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.08em] ${badgeClass}`}
              >
                {badge}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom legal rights banner */}
        <div className="mt-5 flex items-start gap-4 rounded-[22px] border border-[#CDE8E0] bg-gradient-to-r from-[#E3F7F1] to-[#EAF1FF] px-6 py-5 sm:items-center">
          <Scale className="mt-0.5 h-7 w-7 shrink-0 text-[#0E7A62] sm:mt-0" strokeWidth={2} aria-hidden="true" />
          <div>
            <p className="text-base font-bold text-[#0A1446] sm:text-lg">
              Your legal rights are separate from any paid cover.
            </p>
            <p className="mt-0.5 text-sm text-[#1E1B2E]">
              You never need insurance to use your statutory rights for faulty goods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
