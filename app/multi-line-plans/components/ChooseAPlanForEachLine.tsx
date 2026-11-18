"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Briefcase, Copy, House, Minus, Plus, Trash2, TriangleAlert } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { PLANS, PRICE_TYPE_LABELS, formatPrice, type PriceType } from "./plans";

const MAX_LINES = 10;

type Sim = "Physical SIM" | "eSIM";
type NumberChoice = "New number" | "Keep my number";

type Line = {
  key: number;
  name: string;
  planId: string;
  priceType: PriceType;
  sim: Sim;
  number: NumberChoice;
};

const PRICE_TYPE_NOTES: Record<PriceType, string> = {
  standard: "Standard price · per month",
  thirtyDay: "30-day price · per month",
  esim: "eSIM price · per month",
};

const SELECT_CLASS =
  "mt-2 w-full rounded-lg border border-[#D3D8E8] bg-white px-3.5 py-3 text-sm text-[#11183C] outline-none focus:border-[#E11D74] focus:ring-2 focus:ring-[#E11D74]/15";

const planFor = (id: string) => PLANS.find((p) => p.id === id) ?? PLANS[0];
const priceFor = (line: Line) => planFor(line.planId).prices[line.priceType];

export default function ChooseAPlanForEachLine() {
  const [audience, setAudience] = useState<"household" | "business">("household");
  const [lines, setLines] = useState<Line[]>([
    { key: 1, name: "", planId: "z-comfort", priceType: "standard", sim: "Physical SIM", number: "New number" },
    { key: 2, name: "", planId: "z-essentials", priceType: "standard", sim: "Physical SIM", number: "New number" },
  ]);
  const nextKey = useRef(3);

  const updateLine = (key: number, patch: Partial<Line>) =>
    setLines((prev) =>
      prev.map((line) => {
        if (line.key !== key) return line;
        const next = { ...line, ...patch };
        // An eSIM price only applies to an eSIM, and only where the plan has one.
        if (patch.priceType === "esim") next.sim = "eSIM";
        if (patch.sim === "Physical SIM" && next.priceType === "esim") next.priceType = "standard";
        if (planFor(next.planId).prices[next.priceType] === null) next.priceType = "standard";
        return next;
      }),
    );

  const addLine = (template?: Line) => {
    if (lines.length >= MAX_LINES) return;
    const key = nextKey.current++;
    const line: Line = template
      ? { ...template, key, name: "" }
      : { key, name: "", planId: "z-essentials", priceType: "standard", sim: "Physical SIM", number: "New number" };
    setLines((prev) => (prev.length >= MAX_LINES ? prev : [...prev, line]));
  };

  const removeLine = (key: number) =>
    setLines((prev) => (prev.length <= 1 ? prev : prev.filter((l) => l.key !== key)));

  const setLineCount = (count: number) => {
    if (count < 1 || count > MAX_LINES) return;
    if (count > lines.length) addLine();
    else setLines((prev) => prev.slice(0, count));
  };

  const total = lines.reduce((sum, line) => sum + (priceFor(line) ?? 0), 0);

  const summaryRows = [
    { label: "Multi-line discount", value: "Not applied" },
    { label: "VAT", value: "Shown as published" },
    { label: "Upfront / delivery", value: "Confirmed in your quote" },
    { label: "Future price changes", value: "In £ and pence, in your quote" },
  ];

  return (
    <section
      id="build-your-lines"
      className="w-full scroll-mt-24 bg-gradient-to-b from-[#F5F6FB] to-white px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1220px]">
        <SectionHeader
          tone="navy"
          align="left"
          className="max-w-3xl"
          eyebrow="Build your lines"
          title="Choose a plan for each line"
          subtitle="Choose the right data allowance for each line and review the total in one place."
        />

        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_380px]">
          {/* Builder */}
          <div>
            <div className="grid grid-cols-1 gap-3 sm:max-w-[560px] sm:grid-cols-2" role="radiogroup" aria-label="Who are the lines for?">
              {(
                [
                  { id: "household", label: "Family & household", icon: House },
                  { id: "business", label: "Business & teams", icon: Briefcase },
                ] as const
              ).map(({ id, label, icon: Icon }) => {
                const selected = audience === id;
                return (
                  <button
                    key={id}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => setAudience(id)}
                    className={`flex items-center gap-3 rounded-xl border-2 px-5 py-3.5 text-sm font-bold transition-colors ${
                      selected
                        ? "border-[#E11D74] bg-[#FDEFF6] text-[#11183C]"
                        : "border-[#E6E9F2] bg-white text-[#11183C] hover:border-[#D3D8E8]"
                    }`}
                  >
                    <Icon className="h-5 w-5 text-[#E11D74]" strokeWidth={2} aria-hidden="true" />
                    {label}
                  </button>
                );
              })}
            </div>

            {audience === "business" && (
              <p className="mt-3 rounded-xl bg-[#EEF1FB] px-4 py-3 text-sm text-[#1E2A78]">
                Business lines have their own route. Use this as a starting point —{" "}
                <Link href="/business-solutions" className="font-bold underline underline-offset-2">
                  see business mobile
                </Link>{" "}
                or request a quote.
              </p>
            )}

            {/* Line count */}
            <div className="mt-4 flex items-center justify-between rounded-2xl border border-[#E6E9F2] bg-white px-5 py-3.5">
              <p id="line-count-label" className="text-sm font-bold text-[#11183C] sm:text-base">
                How many lines do you need?
              </p>
              <div className="flex items-center gap-4" aria-labelledby="line-count-label">
                <button
                  type="button"
                  onClick={() => setLineCount(lines.length - 1)}
                  disabled={lines.length <= 1}
                  aria-label="Remove a line"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#11183C] text-[#11183C] disabled:opacity-30"
                >
                  <Minus className="h-5 w-5" strokeWidth={2} />
                </button>
                <span aria-live="polite" className="w-6 text-center text-xl font-extrabold text-[#11183C]">
                  {lines.length}
                </span>
                <button
                  type="button"
                  onClick={() => setLineCount(lines.length + 1)}
                  disabled={lines.length >= MAX_LINES}
                  aria-label="Add a line"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#11183C] text-[#11183C] disabled:opacity-30"
                >
                  <Plus className="h-5 w-5" strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Lines */}
            <ol className="mt-4 space-y-4">
              {lines.map((line, index) => {
                const plan = planFor(line.planId);
                const price = priceFor(line);
                const n = index + 1;
                return (
                  <li key={line.key} className="rounded-2xl border border-[#E6E9F2] bg-white p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-xs font-bold text-white">
                        {n}
                      </span>
                      <label htmlFor={`line-${line.key}-name`} className="sr-only">
                        Name line {n} (optional)
                      </label>
                      <input
                        id={`line-${line.key}-name`}
                        value={line.name}
                        onChange={(e) => updateLine(line.key, { name: e.target.value })}
                        placeholder="Name this line (optional)"
                        className="min-w-0 flex-1 border-b border-dashed border-[#D3D8E8] bg-transparent py-1.5 text-base font-semibold text-[#11183C] outline-none placeholder:text-[#8A90A6] focus:border-[#E11D74]"
                      />
                      <button
                        type="button"
                        onClick={() => addLine(line)}
                        disabled={lines.length >= MAX_LINES}
                        aria-label={`Duplicate line ${n}`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E6E9F2] text-[#4B5375] hover:bg-[#F5F6FB] disabled:opacity-30"
                      >
                        <Copy className="h-4 w-4" strokeWidth={2} />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeLine(line.key)}
                        disabled={lines.length <= 1}
                        aria-label={`Remove line ${n}`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E6E9F2] text-[#4B5375] hover:bg-[#F5F6FB] disabled:opacity-30"
                      >
                        <Trash2 className="h-4 w-4" strokeWidth={2} />
                      </button>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
                      <div>
                        <label htmlFor={`line-${line.key}-plan`} className="text-xs font-bold text-[#11183C]">Plan</label>
                        <select
                          id={`line-${line.key}-plan`}
                          value={line.planId}
                          onChange={(e) => updateLine(line.key, { planId: e.target.value })}
                          className={SELECT_CLASS}
                        >
                          {PLANS.map((p) => (
                            <option key={p.id} value={p.id}>{p.name} · {p.data}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor={`line-${line.key}-price`} className="text-xs font-bold text-[#11183C]">Price shown</label>
                        <select
                          id={`line-${line.key}-price`}
                          value={line.priceType}
                          onChange={(e) => updateLine(line.key, { priceType: e.target.value as PriceType })}
                          className={SELECT_CLASS}
                        >
                          {(Object.keys(PRICE_TYPE_LABELS) as PriceType[]).map((t) => (
                            <option key={t} value={t} disabled={plan.prices[t] === null}>
                              {PRICE_TYPE_LABELS[t]}
                              {plan.prices[t] === null ? " (not shown)" : ""}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor={`line-${line.key}-sim`} className="text-xs font-bold text-[#11183C]">SIM</label>
                        <select
                          id={`line-${line.key}-sim`}
                          value={line.sim}
                          onChange={(e) => updateLine(line.key, { sim: e.target.value as Sim })}
                          className={SELECT_CLASS}
                        >
                          <option>Physical SIM</option>
                          <option>eSIM</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor={`line-${line.key}-number`} className="text-xs font-bold text-[#11183C]">Number</label>
                        <select
                          id={`line-${line.key}-number`}
                          value={line.number}
                          onChange={(e) => updateLine(line.key, { number: e.target.value as NumberChoice })}
                          className={SELECT_CLASS}
                        >
                          <option>New number</option>
                          <option>Keep my number</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-[#EEF0F7] pt-4">
                      <p className="text-xs text-[#4B5375] sm:text-sm">{PRICE_TYPE_NOTES[line.priceType]}</p>
                      <p className="text-2xl font-extrabold text-[#E11D74]">
                        {price === null ? "Not shown" : formatPrice(price)}
                        <span className="ml-1 text-xs font-normal text-[#4B5375]">/mo</span>
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <button
              type="button"
              onClick={() => addLine()}
              disabled={lines.length >= MAX_LINES}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#C9B8F0] bg-white py-4 text-base font-bold text-[#7B3FE4] hover:bg-[#FAF7FF] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Plus className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              Add another line
            </button>

            <p className="mt-4 flex items-start gap-3 rounded-2xl bg-[#FFF4E5] px-5 py-4 text-sm text-[#5C3300]">
              <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />
              Each line has its own data allowance unless your confirmed plan says
              otherwise. For more than {MAX_LINES} lines, please request a quote.
            </p>
          </div>

          {/* Summary */}
          <aside
            aria-label="Your monthly summary"
            className="rounded-3xl bg-gradient-to-b from-[#14125A] to-[#3A1F8A] p-6 text-white shadow-[0_20px_50px_rgba(17,24,60,0.25)] lg:sticky lg:top-24"
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#F472B6]">Your monthly summary</p>
            <p className="mt-2 text-xl font-extrabold">Price per line, and in total</p>

            <ul className="mt-4 space-y-3" aria-live="polite">
              {lines.map((line, index) => {
                const plan = planFor(line.planId);
                const price = priceFor(line);
                return (
                  <li key={line.key} className="flex justify-between gap-4">
                    <span>
                      <span className="block text-sm font-bold">{line.name.trim() || `Line ${index + 1}`}</span>
                      <span className="block text-xs text-white/60">
                        {plan.name} {plan.data} · {PRICE_TYPE_LABELS[line.priceType]} price · {line.sim}
                      </span>
                    </span>
                    <span className="text-sm font-bold">{price === null ? "—" : formatPrice(price)}</span>
                  </li>
                );
              })}
            </ul>

            <dl className="mt-5 space-y-2.5 border-y border-white/15 py-5 text-sm">
              {summaryRows.map((row) => (
                <div key={row.label} className="flex justify-between gap-4">
                  <dt className="text-white/70">{row.label}</dt>
                  <dd className="text-right font-bold">{row.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 flex items-center justify-between">
              <p className="text-base font-bold">Monthly total</p>
              <p aria-live="polite" className="bg-gradient-to-r from-[#F472B6] to-[#C4B5FD] bg-clip-text text-3xl font-extrabold text-transparent">
                {formatPrice(total)}
              </p>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-white/70">
              Prices are taken from Zoiko Telecom’s current published pages, which
              differ by page and term. They’re indicative — we’ll confirm the price
              for each line and your total before you agree to anything. Any
              eligible multi-line offer will be shown in your confirmed quote.
            </p>

            <Link
              href="/contact"
              className="mt-5 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] py-3.5 text-base font-bold text-white"
            >
              Request a confirmed quote
            </Link>
            <Link
              href="#all-plans"
              className="mt-3 flex w-full items-center justify-center rounded-xl border-2 border-white/70 py-3.5 text-base font-bold text-white hover:bg-white/10"
            >
              Review my plans
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
