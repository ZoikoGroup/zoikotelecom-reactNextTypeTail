import React from "react";
import { Clock, FileText, Router, Wrench } from "lucide-react";
import SectionHeader from "./SectionHeader";

const ITEMS = [
  { title: "Router", text: "Your phone may connect through your broadband router.", icon: Router },
  { title: "Engineer visit", text: "Some set-ups need an engineer. We’ll arrange access with you.", icon: Wrench },
  { title: "Number transfer", text: "If you’re keeping your number, it moves once confirmed.", icon: FileText },
  { title: "Short interruption", text: "There may be a brief break in service during the change.", icon: Clock },
] as const;

export default function WhatInstallationInvolves() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="Installation"
          title="What installation can involve"
          subtitle="Timings are only given once confirmed for your property."
        />

        <ul className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ title, text, icon: Icon }) => (
            <li
              key={title}
              className="overflow-hidden rounded-3xl border border-[#E6E9F2] bg-white shadow-[0_10px_30px_rgba(17,24,60,0.06)]"
            >
              <div className="flex items-center gap-4 bg-gradient-to-r from-[#FDEFF6] to-[#F1ECFE] px-6 py-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-white">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-extrabold text-[#11183C]">{title}</h3>
              </div>
              <p className="px-6 py-5 text-sm leading-relaxed text-[#4B5375]">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
