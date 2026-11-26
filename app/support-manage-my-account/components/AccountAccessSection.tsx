import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { HEADING, IMG, SectionHeader } from "./shared";

const PERSONAL_POINTS = [
  "You’re the account holder",
  "Someone else can only act for you once their authority is verified",
  "Sharing an address or phone number doesn’t give access",
];

const BUSINESS_POINTS = [
  "Organisation roles need verifying",
  "No self-service invitations are confirmed yet",
  "Removing a former staff member? Contact us urgently",
];

const ROLES = [
  { name: "Owner", body: "Full authority", perms: ["View", "Billing", "Manage"] },
  { name: "Admin", body: "Manages users", perms: ["View", "Manage"] },
  { name: "Billing only", body: "Finance records", perms: ["View", "Billing"] },
  { name: "Read only", body: "Views services", perms: ["View"] },
];

function PointList({ points }: { points: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {points.map((point) => (
        <li key={point} className="flex gap-3 text-[15px] leading-snug text-[#3A4268]">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#E0127C]" strokeWidth={2.5} aria-hidden="true" />
          {point}
        </li>
      ))}
    </ul>
  );
}

export default function AccountAccessSection() {
  return (
    <section id="account-access" className="w-full scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader eyebrow="Personal or business?" title="Account access works differently" />

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Personal */}
          <article className="overflow-hidden rounded-[22px] border border-[#E3E6F2] bg-white shadow-[0_20px_44px_rgba(30,30,90,0.08)]">
            <div className="relative h-[200px] w-full">
              <Image
                src={`${IMG}/access-personal-accounts.webp`}
                alt="Family holding hands on a beach at sunset"
                fill
                sizes="(min-width: 1024px) 590px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="px-6 pb-8 pt-7">
              <h3 className={`${HEADING} text-xl font-semibold text-[#0F1452]`}>Personal accounts</h3>
              <PointList points={PERSONAL_POINTS} />
            </div>
          </article>

          {/* Business */}
          <article className="overflow-hidden rounded-[22px] border border-[#E3E6F2] bg-white shadow-[0_20px_44px_rgba(30,30,90,0.08)]">
            <div className="relative h-[200px] w-full">
              <Image
                src={`${IMG}/access-business-accounts.webp`}
                alt="Team meeting in an open-plan office"
                fill
                sizes="(min-width: 1024px) 590px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="px-6 pb-6 pt-7">
              <h3 className={`${HEADING} text-xl font-semibold text-[#0F1452]`}>Business accounts</h3>
              <PointList points={BUSINESS_POINTS} />

              <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {ROLES.map(({ name, body, perms }) => (
                  <li key={name} className="rounded-2xl border border-dashed border-[#D9CCF5] bg-[#F8F5FE] p-3">
                    <p className={`${HEADING} text-sm font-semibold text-[#0F1452]`}>{name}</p>
                    <p className="mt-0.5 text-xs text-[#3A4268]">{body}</p>
                    <ul className="mt-3 flex flex-wrap gap-1">
                      {perms.map((perm) => (
                        <li
                          key={perm}
                          className={`${HEADING} rounded-md bg-[#5B2FB8] px-1.5 py-1 text-[10.5px] font-semibold text-white`}
                        >
                          {perm}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-[#6B7194]">Example roles — illustrative, not a live permission system.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
