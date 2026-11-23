"use client";

import React from "react";
import { Check, Radio, Lock } from "lucide-react";

const OT_ZONE_ITEMS = [
  "Controllers and field devices",
  "No direct internet exposure",
  "Controller addresses kept private",
] as const;

const IT_ZONE_ITEMS = [
  "Office network and applications",
  "Only approved data flows in",
  "Patched and monitored",
] as const;

export default function SecurityBoundariesSection() {
  return (
    <section className="w-full bg-[#F6F8FC] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2B3766]">
            SECURITY BOUNDARIES
          </p>

          <h2 className="mt-2.5 text-[30px] font-bold leading-[1.18] tracking-[-0.02em] text-[#0B1B48] sm:text-[36px]">
            Keep building systems and office IT
            <br />
            apart
          </h2>

          <p className="mt-2.5 text-[13.5px] font-normal leading-[1.6] text-[#4A5568] sm:text-[14.5px]">
            A simple model to discuss with your IT and facilities teams — not a
            certified design.
          </p>
        </div>

        {/* 3-Zone Security Diagram */}
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[1.25fr_0.95fr_1.25fr] lg:gap-5">
          {/* Left: OT ZONE */}
          <div className="flex flex-col justify-center rounded-[18px] border border-dashed border-[#F59E0B] bg-[#FFFBEB]/85 px-6 py-6 sm:px-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#D97706]">
              OT ZONE
            </p>
            <h3 className="mt-1.5 text-[16.5px] font-bold leading-[1.3] text-[#0B1B48]">
              Building &amp; plant systems
            </h3>

            <ul className="mt-4 space-y-2.5">
              {OT_ZONE_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[12.5px] font-normal leading-[1.45] text-[#4A5568]"
                >
                  <Check
                    className="mt-[2px] h-3.5 w-3.5 shrink-0 text-[#E11D48]"
                    strokeWidth={2.5}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center: GATEWAY ZONE */}
          <div className="flex flex-col items-center justify-center rounded-[18px] border border-dashed border-[#8B5CF6] bg-[#F5F3FF]/85 px-5 py-6 text-center sm:px-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-gradient-to-br from-[#3B82F6] to-[#6366F1] text-[#FFFFFF] shadow-[0_6px_14px_rgba(79,70,229,0.28)]">
              <Radio className="h-5 w-5" strokeWidth={2.2} />
            </div>

            <p className="mt-3 text-[9.5px] font-bold uppercase tracking-[0.12em] text-[#7C3AED]">
              GATEWAY ZONE
            </p>

            <h3 className="mt-1 text-[16px] font-bold leading-[1.3] text-[#0B1B48]">
              Gateway / DMZ
            </h3>

            <p className="mt-1.5 max-w-[205px] text-[11.5px] font-normal leading-[1.45] text-[#4A5568]">
              The controlled meeting point between zones.
            </p>
          </div>

          {/* Right: IT ZONE */}
          <div className="flex flex-col justify-center rounded-[18px] border border-dashed border-[#60A5FA] bg-[#EFF6FF]/85 px-6 py-6 sm:px-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#2563EB]">
              IT ZONE
            </p>
            <h3 className="mt-1.5 text-[16.5px] font-bold leading-[1.3] text-[#0B1B48]">
              Business systems
            </h3>

            <ul className="mt-4 space-y-2.5">
              {IT_ZONE_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[12.5px] font-normal leading-[1.45] text-[#4A5568]"
                >
                  <Check
                    className="mt-[2px] h-3.5 w-3.5 shrink-0 text-[#E11D48]"
                    strokeWidth={2.5}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Dark Navy Vendor Access Bar */}
        <div className="mt-4 flex items-center gap-3.5 rounded-[12px] bg-[#070E2B] px-5 py-4 text-[#FFFFFF] shadow-[0_12px_28px_-10px_rgba(7,14,43,0.3)]">
          <Lock className="h-4 w-4 shrink-0 text-[#E11D48]" strokeWidth={2.2} />
          <p className="text-[11.5px] font-normal leading-[1.5] text-[#CBD5E1] sm:text-[12px]">
            <strong className="font-bold text-[#FFFFFF]">
              Vendor access through a broker:
            </strong>{" "}
            least privilege, multi-factor sign-in, time-limited sessions and a
            clear patch lifecycle — no shared accounts or default passwords.
          </p>
        </div>
      </div>
    </section>
  );
}
