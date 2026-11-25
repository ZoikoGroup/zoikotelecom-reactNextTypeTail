"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const SERVICE_OPTIONS = [
  "Mobile",
  "Broadband",
  "Landline & voice",
  "Business",
  "IoT",
  "Device",
  "Not sure",
] as const;

const AFFECTED_OPTIONS = [
  "Just me",
  "Several people",
  "Everyone here",
  "Not sure",
] as const;

const FREQUENCY_OPTIONS = [
  "All the time",
  "On and off",
  "Happened once",
  "Not sure",
] as const;

const WORKING_OPTIONS = [
  "Not at all",
  "Partly",
  "On and off",
  "Not sure",
] as const;

const STARTED_OPTIONS = [
  "Today",
  "Yesterday",
  "This week",
  "Longer ago",
  "Not sure",
] as const;

const TRIED_OPTIONS = [
  "Restarted device",
  "Restarted router",
  "Tried another device",
  "Checked settings",
  "Nothing yet",
] as const;

const MAX_DESCRIPTION_CHARS = 1500;

export default function GetYourDetailsReady() {
  const [service, setService] = useState<string>("");
  const [whoAffected, setWhoAffected] = useState<string>("");
  const [howOften, setHowOften] = useState<string>("");
  const [workingAtAll, setWorkingAtAll] = useState<string>("");
  const [whenStarted, setWhenStarted] = useState<string>("");
  const [triedItems, setTriedItems] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const [needsAccessibleHelp, setNeedsAccessibleHelp] =
    useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const toggleTried = (item: string) => {
    setTriedItems((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item],
    );
  };

  const summaryText = useMemo(() => {
    const lines: string[] = [];
    if (service) lines.push(`Service: ${service}`);
    if (whoAffected) lines.push(`Who's affected: ${whoAffected}`);
    if (howOften) lines.push(`How often: ${howOften}`);
    if (workingAtAll) lines.push(`Working at all: ${workingAtAll}`);
    if (whenStarted) lines.push(`When it started: ${whenStarted}`);
    if (triedItems.length > 0) {
      lines.push(`What I've tried: ${triedItems.join(", ")}`);
    }
    if (description.trim()) {
      lines.push(`Details: ${description.trim()}`);
    }
    if (needsAccessibleHelp) {
      lines.push("Accessibility: I need help using this service");
    }
    return lines.join("\n");
  }, [
    service,
    whoAffected,
    howOften,
    workingAtAll,
    whenStarted,
    triedItems,
    description,
    needsAccessibleHelp,
  ]);

  const handleCopySummary = async () => {
    if (!summaryText) return;
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const RadioPill = ({
    label,
    selected,
    onSelect,
  }: {
    label: string;
    selected: boolean;
    onSelect: () => void;
  }) => (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-bold transition-all ${
        selected
          ? "border-[#EC1C7A] bg-[#FCECF4] text-[#110C3A] shadow-[0_2px_8px_rgba(236,28,122,0.12)]"
          : "border-[#E6E3F0] bg-[#FAF9FD] text-[#3D3857] hover:border-[#D4CEE8] hover:bg-white"
      }`}
    >
      <span
        className={`flex h-4 w-4 items-center justify-center rounded-full border ${
          selected ? "border-[#EC1C7A]" : "border-[#C4C0D6] bg-white"
        }`}
      >
        {selected && <span className="h-2 w-2 rounded-full bg-[#EC1C7A]" />}
      </span>
      <span>{label}</span>
    </button>
  );

  const CheckboxPill = ({
    label,
    checked,
    onToggle,
    compact = false,
  }: {
    label: string;
    checked: boolean;
    onToggle: () => void;
    compact?: boolean;
  }) => (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={onToggle}
      className={`inline-flex items-center gap-2 rounded-full border text-[11px] font-bold transition-all ${
        compact ? "px-3.5 py-2" : "px-3.5 py-1.5"
      } ${
        checked
          ? "border-[#EC1C7A] bg-[#FCECF4] text-[#110C3A]"
          : "border-[#E6E3F0] bg-[#FAF9FD] text-[#3D3857] hover:border-[#D4CEE8] hover:bg-white"
      }`}
    >
      <span
        className={`flex h-4 w-4 items-center justify-center rounded-[4px] border ${
          checked
            ? "border-[#EC1C7A] bg-[#EC1C7A] text-white"
            : "border-[#C4C0D6] bg-white"
        }`}
      >
        {checked && (
          <svg
            viewBox="0 0 24 24"
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12.5l4.5 4.5L19 7" />
          </svg>
        )}
      </span>
      <span>{label}</span>
    </button>
  );

  return (
    <section
      id="get-details-ready"
      className="w-full bg-white px-4 py-14 text-[#18133E] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Header */}
        <div className="text-center">
          <p className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#5B5675]">
            Prepare your report
          </p>
          <h2 className="mt-2.5 text-[32px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#110C3A] sm:text-[42px]">
            Get your details ready
          </h2>
          <p className="mt-2.5 text-[13px] text-[#6E6A85]">
            Fill in what you can — this stays on your device. Nothing is sent,
            stored or tracked.
          </p>
        </div>

        {/* Two-Column Builder + Dark Summary Card */}
        <div className="mt-10 grid grid-cols-1 items-start gap-7 lg:grid-cols-[1fr_340px]">
          {/* Left Form Builder Card */}
          <div className="rounded-2xl border border-[#ECEAF2] bg-white p-6 shadow-[0_6px_24px_rgba(17,12,58,0.035)] sm:p-8">
            {/* Top Security Warning Banner */}
            <div className="flex items-center gap-2.5 rounded-lg border border-[#F8D5D5] bg-[#FFF6F6] px-4 py-2.5 text-[11px] text-[#9B2C2C]">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 text-[#D92D20]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
              <p>
                <span className="font-extrabold">Don&apos;t include</span>{" "}
                passwords, one-time codes, SIM QR codes, PIN/PUK numbers or card
                numbers.
              </p>
            </div>

            {/* Service */}
            <div className="mt-6">
              <h3 className="text-[12.5px] font-extrabold text-[#110C3A]">
                Service
              </h3>
              <div
                role="radiogroup"
                aria-label="Service"
                className="mt-2.5 flex flex-wrap gap-2"
              >
                {SERVICE_OPTIONS.map((option) => (
                  <RadioPill
                    key={option}
                    label={option}
                    selected={service === option}
                    onSelect={() =>
                      setService((prev) => (prev === option ? "" : option))
                    }
                  />
                ))}
              </div>
            </div>

            {/* Who's affected? */}
            <div className="mt-5">
              <h3 className="text-[12.5px] font-extrabold text-[#110C3A]">
                Who&apos;s affected?
              </h3>
              <div
                role="radiogroup"
                aria-label="Who's affected?"
                className="mt-2.5 flex flex-wrap gap-2"
              >
                {AFFECTED_OPTIONS.map((option) => (
                  <RadioPill
                    key={option}
                    label={option}
                    selected={whoAffected === option}
                    onSelect={() =>
                      setWhoAffected((prev) => (prev === option ? "" : option))
                    }
                  />
                ))}
              </div>
            </div>

            {/* How often? */}
            <div className="mt-5">
              <h3 className="text-[12.5px] font-extrabold text-[#110C3A]">
                How often?
              </h3>
              <div
                role="radiogroup"
                aria-label="How often?"
                className="mt-2.5 flex flex-wrap gap-2"
              >
                {FREQUENCY_OPTIONS.map((option) => (
                  <RadioPill
                    key={option}
                    label={option}
                    selected={howOften === option}
                    onSelect={() =>
                      setHowOften((prev) => (prev === option ? "" : option))
                    }
                  />
                ))}
              </div>
            </div>

            {/* Is the service working at all? */}
            <div className="mt-5">
              <h3 className="text-[12.5px] font-extrabold text-[#110C3A]">
                Is the service working at all?
              </h3>
              <div
                role="radiogroup"
                aria-label="Is the service working at all?"
                className="mt-2.5 flex flex-wrap gap-2"
              >
                {WORKING_OPTIONS.map((option) => (
                  <RadioPill
                    key={option}
                    label={option}
                    selected={workingAtAll === option}
                    onSelect={() =>
                      setWorkingAtAll((prev) => (prev === option ? "" : option))
                    }
                  />
                ))}
              </div>
            </div>

            {/* When did it start? */}
            <div className="mt-5">
              <h3 className="text-[12.5px] font-extrabold text-[#110C3A]">
                When did it start?
              </h3>
              <div
                role="radiogroup"
                aria-label="When did it start?"
                className="mt-2.5 flex flex-wrap gap-2"
              >
                {STARTED_OPTIONS.map((option) => (
                  <RadioPill
                    key={option}
                    label={option}
                    selected={whenStarted === option}
                    onSelect={() =>
                      setWhenStarted((prev) => (prev === option ? "" : option))
                    }
                  />
                ))}
              </div>
            </div>

            {/* What have you tried? (optional) */}
            <div className="mt-5">
              <h3 className="text-[12.5px] font-extrabold text-[#110C3A]">
                What have you tried?{" "}
                <span className="font-medium text-[#7A7691]">(optional)</span>
              </h3>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {TRIED_OPTIONS.map((option) => (
                  <CheckboxPill
                    key={option}
                    label={option}
                    checked={triedItems.includes(option)}
                    onToggle={() => toggleTried(option)}
                  />
                ))}
              </div>
            </div>

            {/* Describe the problem */}
            <div className="mt-6">
              <label
                htmlFor="problem-description"
                className="block text-[12.5px] font-extrabold text-[#110C3A]"
              >
                Describe the problem
              </label>
              <textarea
                id="problem-description"
                rows={4}
                maxLength={MAX_DESCRIPTION_CHARS}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What happened, in your own words"
                className="mt-2 w-full resize-y rounded-xl border border-[#DFDCEB] bg-white px-4 py-3 text-[12.5px] leading-[1.55] text-[#110C3A] placeholder-[#9A96AE] focus:border-[#EC1C7A] focus:outline-none focus:ring-2 focus:ring-[#EC1C7A]/15"
              />
              <div className="mt-1.5 flex items-center justify-between text-[10.5px] text-[#8A869E]">
                <span>Plain words are fine.</span>
                <span>
                  {description.length} / {MAX_DESCRIPTION_CHARS}
                </span>
              </div>
            </div>

            {/* Accessibility Checkbox */}
            <div className="mt-4">
              <CheckboxPill
                label="I need help using this service"
                checked={needsAccessibleHelp}
                onToggle={() => setNeedsAccessibleHelp((prev) => !prev)}
                compact
              />
            </div>
          </div>

          {/* Right Sticky Dark Summary Card */}
          <aside className="rounded-2xl bg-gradient-to-b from-[#090724] via-[#13103A] to-[#1A164A] p-6 text-white shadow-[0_14px_34px_rgba(9,7,36,0.22)] lg:sticky lg:top-6">
            <p className="text-[9.5px] font-extrabold uppercase tracking-[0.14em] text-[#FF8DC7]">
              Your summary
            </p>
            <h3 className="mt-2 text-[20px] font-extrabold leading-tight tracking-[-0.015em] text-white">
              Ready to paste into your message
            </h3>

            {/* Summary Preview Box */}
            <div className="mt-4 min-h-[124px] rounded-xl border border-white/12 bg-white/[0.04] p-3.5 text-[11.5px] leading-[1.55]">
              {summaryText ? (
                <pre className="whitespace-pre-wrap font-sans text-white/90">
                  {summaryText}
                </pre>
              ) : (
                <p className="text-white/55">
                  Choose options on the left to build your summary.
                </p>
              )}
            </div>

            {/* Copy Summary Button */}
            <button
              type="button"
              onClick={handleCopySummary}
              disabled={!summaryText}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/[0.06] px-4 py-2.5 text-[12px] font-bold text-white transition-colors hover:bg-white/[0.12] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="9" y="9" width="11" height="11" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span>{copied ? "Copied summary" : "Copy summary"}</span>
            </button>

            {/* Primary Contact Support CTA */}
            <Link
              href="/contact"
              className="mt-2.5 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#EC1C7A] px-4 py-3 text-[12px] font-bold text-white shadow-[0_8px_20px_rgba(236,28,122,0.35)] transition-colors hover:bg-[#d6166d]"
            >
              <span>Contact support</span>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <p className="mt-3 text-[10px] leading-[1.5] text-white/60">
              Nothing on this page is sent to us. Paste your summary into the
              Contact page.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
