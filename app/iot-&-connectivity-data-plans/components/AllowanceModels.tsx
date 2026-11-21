"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import SectionHeader from "./SectionHeader";

const BARS = [25, 100, 55, 100, 20, 70];

const ACCOUNT_RULES = [
  { label: "Group membership", value: "date" },
  { label: "Reset time", value: "time zone" },
  { label: "Rollover", value: "if any" },
  { label: "Over-use", value: "charge / limit" },
] as const;

const SCENARIOS = [
  {
    id: "per-device",
    question: "Per-device allowance",
    answer:
      "Each SIM has its own allowance. Unused data on one SIM doesn’t cover another, so a few busy devices can go over while others sit idle.",
  },
  {
    id: "shared-pool",
    question: "Shared pool",
    answer:
      "Eligible SIMs draw from one combined allowance. Pooling needs a specific contract — it isn’t automatic, and Zoiko pooling isn’t confirmed.",
  },
  {
    id: "hybrid",
    question: "Hybrid estate",
    answer:
      "Some devices on individual allowances and others in a pool. Useful when workloads differ, but each group’s rules need to be clear in the contract.",
  },
  {
    id: "runs-out",
    question: "Pool or allowance runs out",
    answer:
      "Depending on the signed terms, extra use may be charged, slowed or blocked. Automatic blocking isn’t promised, so plan for the cost of going over.",
  },
  {
    id: "joins",
    question: "Device joins mid-period",
    answer:
      "Whether a new device gets a full or part allowance, and when it starts counting, is set by the contract.",
  },
  {
    id: "leaves",
    question: "Device leaves a pool",
    answer:
      "The contract sets whether the pool shrinks straight away or at the next reset, and whether any per-SIM fees continue.",
  },
  {
    id: "reset",
    question: "Reset time & time zones",
    answer:
      "Allowances reset at a set time in a set time zone. Usage close to the reset can fall into either period, so check which one applies.",
  },
  {
    id: "firmware",
    question: "Firmware update burst",
    answer:
      "An over-the-air update across many devices can use more data than months of readings. Plan when updates run and how they count against allowances.",
  },
] as const;

export default function AllowanceModels() {
  const [openIds, setOpenIds] = useState<string[]>([]);
  const toggle = (id: string) =>
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));

  return (
    <section id="allowances" className="w-full scroll-mt-24 bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Allowance models"
          title="Per device, pooled and account rules"
          subtitle="How allowances are shared makes a big difference to cost and risk."
          className="max-w-3xl"
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Per device */}
          <article className="rounded-[22px] border border-[#E6E9F2] bg-white p-6">
            <div aria-hidden="true" className="flex h-[120px] items-end justify-center gap-3 rounded-2xl bg-[#F5F3FA] px-6 pb-3 pt-6">
              {BARS.map((fill, i) => (
                <span key={i} className="relative h-full w-7 overflow-hidden rounded-md bg-[#E4E1F2]">
                  <span
                    className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-[#E11D74] to-[#8E37E8]"
                    style={{ height: `${fill}%` }}
                  />
                </span>
              ))}
            </div>
            <p className="mt-3 rounded-md bg-[#EEF0F6] px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#434A6E]">
              Per device
            </p>
            <h3 className="mt-4 text-xl font-bold text-[#11183C]">Individual allowances</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4B5375]">
              Each SIM has its own allowance. Individual allowances aren’t automatically
              pooled, and per-SIM fees may apply.
            </p>
          </article>

          {/* Pooled */}
          <article className="rounded-[22px] border border-[#E6E9F2] bg-white p-6">
            <div aria-hidden="true" className="flex h-[120px] items-center justify-center rounded-2xl bg-[#F5F3FA] px-6">
              <span className="relative block h-[90px] w-[180px] overflow-hidden rounded-xl border-[3px] border-[#C8B8F2] bg-white">
                <span className="absolute inset-x-0 bottom-0 flex h-[70%] items-start justify-center bg-gradient-to-b from-[#E11D74] to-[#8E37E8] pt-1 text-xs font-bold text-white">
                  Shared pool
                </span>
              </span>
            </div>
            <p className="mt-3 rounded-md bg-[#EFE8FD] px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#6D28D9]">
              Pooled — concept
            </p>
            <h3 className="mt-4 text-xl font-bold text-[#11183C]">Shared allowances</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4B5375]">
              <span className="font-bold text-[#11183C]">
                Shared allowances need a specific eligible contract.
              </span>{" "}
              Being on one account doesn’t mean devices share data. Zoiko pooling isn’t
              confirmed.
            </p>
          </article>

          {/* Account rules */}
          <article className="rounded-[22px] border border-[#E6E9F2] bg-white p-6">
            <dl className="space-y-2 rounded-2xl bg-[#F5F3FA] p-3">
              {ACCOUNT_RULES.map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-xs">
                  <dt className="font-semibold text-[#11183C]">{label}</dt>
                  <dd className="text-[#8A90A6]">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 rounded-md bg-[#EEF0F6] px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#434A6E]">
              Account rules
            </p>
            <h3 className="mt-4 text-xl font-bold text-[#11183C]">Rules that apply to both</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4B5375]">
              Subscription groups, when devices join, reset times, rollover and what
              happens when you go over are all set by the contract.
            </p>
          </article>
        </div>

        <div className="mt-6 grid grid-cols-1 items-start gap-3 md:grid-cols-2">
          {SCENARIOS.map(({ id, question, answer }) => {
            const isOpen = openIds.includes(id);
            const panelId = `allowance-${id}`;
            return (
              <div key={id} className="overflow-hidden rounded-2xl border border-[#E6E9F2] bg-white">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(id)}
                  className="flex w-full items-center justify-between px-5 py-5 text-left"
                >
                  <span className="text-sm font-bold text-[#11183C] sm:text-base">{question}</span>
                  {isOpen ? (
                    <Minus className="ml-4 h-4 w-4 shrink-0 text-[#B0177A]" strokeWidth={2.5} aria-hidden="true" />
                  ) : (
                    <Plus className="ml-4 h-4 w-4 shrink-0 text-[#B0177A]" strokeWidth={2.5} aria-hidden="true" />
                  )}
                </button>
                {isOpen && (
                  <p id={panelId} className="border-t border-[#EEF0F7] px-5 py-4 text-sm leading-relaxed text-[#4B5563]">
                    {answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
