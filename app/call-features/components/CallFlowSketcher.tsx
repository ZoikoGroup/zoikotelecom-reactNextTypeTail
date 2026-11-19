"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertTriangle, ChevronRight, Check } from "lucide-react";

type OpenOption =
  | "Mon-Fri, 9am-5:30pm"
  | "Mon-Sat, 8am-6pm"
  | "24 hours, 7 days"
  | "It varies";
type OpeningHoursAction =
  | "Ring one person"
  | "Ring a group of phones"
  | "Play a menu first";
type NoAnswerAction =
  | "Take a voicemail"
  | "Hold in a queue"
  | "Forward to a mobile";
type OutOfHoursAction =
  | "Message, then voicemail"
  | "Voicemail only"
  | "Forward to an on-call mobile";

export default function CallFlowSketcher() {
  const [isOpenOption, setIsOpenOption] = useState<OpenOption>(
    "Mon-Fri, 9am-5:30pm",
  );
  const [openingAction, setOpeningAction] =
    useState<OpeningHoursAction>("Ring one person");
  const [menuChoices, setMenuChoices] = useState<Record<string, boolean>>({
    Sales: true,
    Support: true,
    Accounts: false,
    Bookings: false,
  });
  const [noAnswerAction, setNoAnswerAction] =
    useState<NoAnswerAction>("Take a voicemail");
  const [outOfHoursAction, setOutOfHoursAction] = useState<OutOfHoursAction>(
    "Message, then voicemail",
  );

  const toggleMenuChoice = (key: string) => {
    setMenuChoices((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="w-full bg-white py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
            Plan your call flow
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight text-[#131138] sm:text-4xl lg:text-[42px]">
            Sketch how you&rsquo;d like calls handled
          </h2>
          <p className="mx-auto mt-3 max-w-[580px] text-sm text-[#545275] sm:text-base">
            Answer a few questions to build a plain-language outline you can
            discuss with our team. It doesn&rsquo;t change any settings or check
            your plan.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left: Interactive Questionnaire */}
          <div className="space-y-8">
            {/* 1. When are you open? */}
            <div>
              <label className="block text-sm font-black tracking-tight text-[#131138]">
                When are you open?
              </label>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {(
                  [
                    "Mon-Fri, 9am-5:30pm",
                    "Mon-Sat, 8am-6pm",
                    "24 hours, 7 days",
                    "It varies",
                  ] as OpenOption[]
                ).map((opt) => {
                  const selected = isOpenOption === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setIsOpenOption(opt)}
                      className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-bold transition ${
                        selected
                          ? "border-[#e6007e] bg-[#fdf5fa] text-[#e6007e] shadow-xs"
                          : "border-[#ecebf4] bg-white text-[#545275] hover:border-[#d4d1e8]"
                      }`}
                    >
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded-full border ${selected ? "border-[#e6007e]" : "border-[#b0acc0]"}`}
                      >
                        {selected && (
                          <span className="h-2 w-2 rounded-full bg-[#e6007e]" />
                        )}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. When someone calls during opening hours */}
            <div>
              <label className="block text-sm font-black tracking-tight text-[#131138]">
                When someone calls during opening hours
              </label>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {(
                  [
                    "Ring one person",
                    "Ring a group of phones",
                    "Play a menu first",
                  ] as OpeningHoursAction[]
                ).map((opt) => {
                  const selected = openingAction === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setOpeningAction(opt)}
                      className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-bold transition ${
                        selected
                          ? "border-[#e6007e] bg-[#fdf5fa] text-[#e6007e] shadow-xs"
                          : "border-[#ecebf4] bg-white text-[#545275] hover:border-[#d4d1e8]"
                      }`}
                    >
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded-full border ${selected ? "border-[#e6007e]" : "border-[#b0acc0]"}`}
                      >
                        {selected && (
                          <span className="h-2 w-2 rounded-full bg-[#e6007e]" />
                        )}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Menu choices */}
            <div>
              <label className="block text-sm font-black tracking-tight text-[#131138]">
                Menu choices{" "}
                <span className="text-xs font-normal text-[#545275]">
                  (if you use a menu)
                </span>
              </label>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {(["Sales", "Support", "Accounts", "Bookings"] as const).map(
                  (choice) => {
                    const checked = !!menuChoices[choice];
                    return (
                      <button
                        key={choice}
                        type="button"
                        onClick={() => toggleMenuChoice(choice)}
                        className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-bold transition ${
                          checked
                            ? "border-[#e6007e] bg-[#fdf5fa] text-[#e6007e] shadow-xs"
                            : "border-[#ecebf4] bg-white text-[#545275] hover:border-[#d4d1e8]"
                        }`}
                      >
                        <span
                          className={`flex h-4 w-4 items-center justify-center rounded-md border ${checked ? "border-[#e6007e] bg-[#e6007e] text-white" : "border-[#b0acc0]"}`}
                        >
                          {checked && (
                            <Check
                              className="h-3 w-3"
                              strokeWidth={3}
                              aria-hidden="true"
                            />
                          )}
                        </span>
                        {choice}
                      </button>
                    );
                  },
                )}
              </div>
            </div>

            {/* 4. If nobody answers */}
            <div>
              <label className="block text-sm font-black tracking-tight text-[#131138]">
                If nobody answers
              </label>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {(
                  [
                    "Take a voicemail",
                    "Hold in a queue",
                    "Forward to a mobile",
                  ] as NoAnswerAction[]
                ).map((opt) => {
                  const selected = noAnswerAction === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setNoAnswerAction(opt)}
                      className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-bold transition ${
                        selected
                          ? "border-[#e6007e] bg-[#fdf5fa] text-[#e6007e] shadow-xs"
                          : "border-[#ecebf4] bg-white text-[#545275] hover:border-[#d4d1e8]"
                      }`}
                    >
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded-full border ${selected ? "border-[#e6007e]" : "border-[#b0acc0]"}`}
                      >
                        {selected && (
                          <span className="h-2 w-2 rounded-full bg-[#e6007e]" />
                        )}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. Out of hours and holidays */}
            <div>
              <label className="block text-sm font-black tracking-tight text-[#131138]">
                Out of hours and holidays
              </label>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {(
                  [
                    "Message, then voicemail",
                    "Voicemail only",
                    "Forward to an on-call mobile",
                  ] as OutOfHoursAction[]
                ).map((opt) => {
                  const selected = outOfHoursAction === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setOutOfHoursAction(opt)}
                      className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-bold transition ${
                        selected
                          ? "border-[#e6007e] bg-[#fdf5fa] text-[#e6007e] shadow-xs"
                          : "border-[#ecebf4] bg-white text-[#545275] hover:border-[#d4d1e8]"
                      }`}
                    >
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded-full border ${selected ? "border-[#e6007e]" : "border-[#b0acc0]"}`}
                      >
                        {selected && (
                          <span className="h-2 w-2 rounded-full bg-[#e6007e]" />
                        )}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Live Call Flow Sketch Card Output */}
          <div className="sticky top-8 rounded-[28px] bg-gradient-to-b from-[#1b1740] to-[#120f2e] p-7 text-white shadow-[0_24px_60px_rgba(27,23,64,0.3)] sm:p-8">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#e6007e]">
              Your call flow sketch
            </span>
            <h3 className="mt-1.5 text-xl font-black tracking-tight text-white sm:text-2xl">
              How calls would be handled
            </h3>

            <div className="mt-6 space-y-4 border-l border-white/20 pl-4 text-xs leading-5 sm:text-sm">
              <div>
                <span className="font-bold text-[#b8b4d8]">Opening hours:</span>{" "}
                <span className="text-white">{isOpenOption}</span>
              </div>
              <div>
                <span className="font-bold text-[#b8b4d8]">
                  During opening hours:
                </span>{" "}
                <span className="text-white">
                  {openingAction.toLowerCase()}
                </span>
              </div>
              <div>
                <span className="font-bold text-[#b8b4d8]">
                  If nobody answers:
                </span>{" "}
                <span className="text-white">
                  {noAnswerAction.toLowerCase()}
                </span>
              </div>
              <div>
                <span className="font-bold text-[#b8b4d8]">
                  Out of hours and holidays:
                </span>{" "}
                <span className="text-white">
                  {outOfHoursAction.toLowerCase()}
                </span>
              </div>
            </div>

            {/* Warning Banner */}
            <div className="mt-6 rounded-2xl bg-white/10 p-4 text-xs text-[#d0cbe7] backdrop-blur-xs">
              <div className="flex items-start gap-2.5">
                <AlertTriangle
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#e6007e]"
                  aria-hidden="true"
                />
                <p>
                  999 and 112 calls are never routed through your menu or
                  forwarding.
                </p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-6">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#e6007e] to-[#c41478] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_-6px_rgba(230,0,126,0.5)] transition hover:opacity-95"
              >
                Discuss this call flow
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <p className="mt-4 text-center text-[11px] text-[#8c88b4]">
              A planning outline only &mdash; our team will confirm what your
              service supports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
