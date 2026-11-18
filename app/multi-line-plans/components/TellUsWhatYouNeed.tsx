"use client";

import React, { useState } from "react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const LINE_COUNTS = ["2", "3", "4", "5+"] as const;
const LINE_TYPES = ["New numbers", "Keeping existing numbers", "A mix of both"] as const;
const USAGE = ["Calls & texts", "Data & streaming", "A bit of everything"] as const;

const SELECT_CLASS =
  "mt-2 w-full rounded-xl border border-white bg-white px-4 py-3 text-sm text-[#1C1A33] outline-none focus:ring-2 focus:ring-white/60";

export default function TellUsWhatYouNeed() {
  const [count, setCount] = useState<(typeof LINE_COUNTS)[number]>("2");
  const [lineType, setLineType] = useState<string>(LINE_TYPES[0]);
  const [usage, setUsage] = useState<string>(USAGE[0]);

  const summary = `${count} lines · ${lineType} · ${usage}`;

  return (
    <section className="w-full bg-gradient-to-r from-[#C1328F] via-[#A3227F] to-[#7A2A93] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1220px]">
        <SectionHeader
          tone="light"
          eyebrow="Your needs"
          title="Tell us what you need"
          subtitle="No personal details needed. This only builds a summary to share with our team."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          <fieldset>
            <legend className="text-sm font-semibold">How many lines?</legend>
            <div className="mt-2 flex flex-wrap gap-2.5">
              {LINE_COUNTS.map((c) => {
                const selected = c === count;
                return (
                  <button
                    key={c}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setCount(c)}
                    className={`min-w-[72px] rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                      selected ? "bg-[#8A1C6B] text-white" : "bg-white text-[#1C1A33] hover:bg-white/90"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div>
            <label htmlFor="needs-line-type" className="text-sm font-semibold">Are the lines…</label>
            <select id="needs-line-type" value={lineType} onChange={(e) => setLineType(e.target.value)} className={SELECT_CLASS}>
              {LINE_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="needs-usage" className="text-sm font-semibold">Mostly used for…</label>
            <select id="needs-usage" value={usage} onChange={(e) => setUsage(e.target.value)} className={SELECT_CLASS}>
              {USAGE.map((u) => (
                <option key={u}>{u}</option>
              ))}
            </select>
          </div>
        </div>

        <div aria-live="polite" className="mt-3 rounded-2xl bg-[#F8EEF6] px-6 py-6 text-[#1C1A33]">
          <p className="text-sm font-bold">Your enquiry summary</p>
          <p className="mt-1.5 text-sm">{summary}</p>
        </div>

        <Link
          href="/contact"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1C1A33] transition-transform hover:scale-[1.01] sm:text-base"
        >
          Ask our team with this summary
        </Link>
        <p className="mt-3 text-xs text-white/85">
          Mention your summary when you contact us. It isn’t sent anywhere from this page.
        </p>
      </div>
    </section>
  );
}
