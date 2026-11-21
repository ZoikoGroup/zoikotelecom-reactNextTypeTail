import React from "react";
import { FileText, Layers, PoundSterling, Sun } from "lucide-react";

const AUDIENCES = [
  { label: "Equipment teams", icon: Sun },
  { label: "Systems integrators", icon: Layers },
  { label: "Procurement", icon: FileText },
  { label: "Finance", icon: PoundSterling },
] as const;

export default function UsefulForStrip() {
  return (
    <section className="w-full border-y border-[#F1E4EC] bg-white px-4 py-5 sm:px-6">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-3">
        <span className="mr-2 text-sm font-bold text-[#6B7194]">Useful for</span>
        <ul className="flex flex-wrap items-center justify-center gap-3">
          {AUDIENCES.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2.5 rounded-full border border-[#F7D3E5] bg-[#FFF5FA] px-5 py-2.5 text-sm font-bold text-[#11183C] sm:text-base"
            >
              <Icon className="h-4 w-4 text-[#E11D74]" strokeWidth={2} aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
