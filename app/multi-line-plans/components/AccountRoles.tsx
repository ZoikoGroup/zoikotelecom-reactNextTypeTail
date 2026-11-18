import React from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const ROLES = [
  { badge: "AO", title: "Account owner", text: "Holds the account and agrees the contract." },
  { badge: "£", title: "Bill payer", text: "Pays for one or more lines." },
  { badge: "LU", title: "Line user", text: "Uses the number day to day, with their own privacy." },
] as const;

export default function AccountRoles() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1220px]">
        <SectionHeader
          eyebrow="Who does what"
          title="Account owner, payer and line user"
          subtitle="These can be different people. Each has different rights."
        />

        <div className="relative mt-8 aspect-[1200/452] w-full overflow-hidden rounded-3xl">
          <Image
            src="/Images/multi-line-plans/account-roles-meeting.webp"
            alt="Two people shaking hands with an adviser across a table"
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {ROLES.map((role) => (
            <li
              key={role.title}
              className="flex items-start gap-4 rounded-2xl border border-[#ECEDF3] bg-white p-6 shadow-[0_12px_30px_rgba(28,26,51,0.08)]"
            >
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F8EEF6] text-sm font-bold text-[#A3227F]"
              >
                {role.badge}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-[#1C1A33] sm:text-base">{role.title}</h3>
                <p className="mt-1 text-sm text-[#5F6275]">{role.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
