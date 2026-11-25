import React from "react";
import { Lock, X } from "lucide-react";
import { HEADING } from "./shared";

const NEVER_ASK = ["Passwords", "One-time codes", "Recovery links", "Full card numbers", "Security PINs"];

export default function NeverAskBanner() {
  return (
    <section className="w-full bg-white px-4 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 rounded-[20px] bg-gradient-to-r from-[#1B1560] via-[#2A1A78] to-[#3A1A8C] px-6 py-6 sm:flex-row sm:items-center sm:gap-5 sm:px-[26px]">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#F7A8CB]">
          <Lock className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
        </span>
        <div>
          <p className={`${HEADING} text-base font-semibold text-white sm:text-lg`}>
            We will never ask you to send these — by message, form or phone.
          </p>
          <ul className="mt-2.5 flex flex-wrap gap-2">
            {NEVER_ASK.map((item) => (
              <li
                key={item}
                className={`${HEADING} inline-flex items-center gap-1.5 rounded-full bg-white/12 px-3 py-1.5 text-[13px] font-semibold text-white`}
              >
                <X className="h-3.5 w-3.5 text-[#F472B6]" strokeWidth={2.5} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
