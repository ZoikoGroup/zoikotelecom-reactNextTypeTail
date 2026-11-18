import React from "react";
import Link from "next/link";

export default function ReadyToTalkCta() {
  return (
    <section className="w-full bg-gradient-to-r from-[#C1328F] via-[#A3227F] to-[#7A2A93] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[42px]">
        Ready to talk about your lines?
      </h2>
      <p className="mt-3 text-sm text-white/90 sm:text-base">
        Our team will explain the options available to you.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
        <Link
          href="/contact"
          className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#A3227F] transition-transform hover:scale-[1.01] sm:w-auto sm:text-base"
        >
          Speak to our team
        </Link>
        <Link
          href="/ee-mobile-plans"
          className="inline-flex w-full items-center justify-center rounded-full border-2 border-white/70 bg-white/15 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/25 sm:w-auto sm:text-base"
        >
          See SIM-only plans
        </Link>
      </div>
    </section>
  );
}
