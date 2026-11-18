"use client";

import React, { useState } from "react";
import { TriangleAlert } from "lucide-react";

const NUMBER_TYPES = [
  {
    id: "geographic",
    number: "01 / 02",
    title: "Geographic",
    description:
      "Linked to a UK area code. An area code doesn’t prove you have premises there.",
    cost: "Standard rate for callers",
    tone: "green",
  },
  {
    id: "nationwide",
    number: "03",
    title: "Nationwide 03",
    description:
      "Not tied to an area. 030 is reserved for public bodies and charities.",
    cost: "Same cost as calling 01/02",
    tone: "green",
  },
  {
    id: "freephone",
    number: "080",
    title: "Freephone",
    description:
      "Free for callers from UK landlines and mobiles — your business pays for the calls instead.",
    cost: "Free for UK callers",
    tone: "blue",
  },
  {
    id: "service",
    number: "084 / 087",
    title: "Service numbers",
    description:
      "Callers pay an extra service charge on top of their provider’s access charge. This must be clearly shown wherever you advertise the number.",
    cost: "Extra charge for callers",
    tone: "amber",
  },
] as const;

const COST_TONES = {
  green: { dot: "bg-[#16A34A]", text: "text-[#15803D]" },
  blue: { dot: "bg-[#3B82F6]", text: "text-[#2563EB]" },
  amber: { dot: "bg-[#F59E0B]", text: "text-[#B45309]" },
} as const;

const GOALS = [
  {
    id: "local",
    label: "Look local to an area",
    number: "01 / 02",
    text: "A geographic number can give a local presence. Callers pay standard rates.",
  },
  {
    id: "national",
    label: "One national number",
    number: "03",
    text: "A nationwide 03 number isn’t tied to one area. Callers pay the same as calling an 01 or 02 number.",
  },
  {
    id: "free",
    label: "Free calls for customers",
    number: "080",
    text: "A freephone number is free for callers from UK landlines and mobiles. Your business pays for the calls instead.",
  },
  {
    id: "unsure",
    label: "Not sure yet",
    number: "Let’s talk",
    text: "Tell our team how customers contact you today and we’ll talk through the number types that could fit.",
  },
] as const;

const COMPARISON_ROWS = [
  {
    type: "01 / 02",
    pay: "Standard geographic rate",
    routing: "To your chosen destination",
    who: "Businesses, subject to checks",
  },
  {
    type: "03",
    pay: "Same as 01/02, often in bundles",
    routing: "To your chosen destination",
    who: "030: public bodies and charities",
  },
  {
    type: "080",
    pay: "Free from UK landlines & mobiles",
    routing: "To your chosen destination",
    who: "Businesses, subject to checks",
  },
  {
    type: "084 / 087",
    pay: "Access charge + service charge",
    routing: "To your chosen destination",
    who: "Must show the call cost clearly",
  },
] as const;

type GoalId = (typeof GOALS)[number]["id"];

export default function ChooseHowCustomersReachYou() {
  const [goalId, setGoalId] = useState<GoalId>("local");
  const goal = GOALS.find((g) => g.id === goalId) ?? GOALS[0];

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            Number types
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Choose how customers reach you
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5375] sm:text-base">
            Read what callers pay before you choose — it matters to your
            customers.
          </p>
        </div>

        {/* Number type cards */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {NUMBER_TYPES.map((item) => {
            const tone = COST_TONES[item.tone];
            const isAmber = item.tone === "amber";
            return (
              <div
                key={item.id}
                className={`flex flex-col rounded-2xl border p-6 ${
                  isAmber
                    ? "border-[#F8DDA8] bg-[#FFFBF2]"
                    : "border-[#E6E9F2] bg-white"
                }`}
              >
                <p className="bg-gradient-to-r from-[#E11D74] to-[#8E37E8] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-[44px]">
                  {item.number}
                </p>
                <h3 className="mt-3 text-lg font-extrabold text-[#11183C]">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#4B5375]">
                  {item.description}
                </p>
                <p
                  className={`mt-6 inline-flex items-center gap-2 text-sm font-bold ${tone.text}`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 rounded-full ${tone.dot}`}
                  />
                  {item.cost}
                </p>
              </div>
            );
          })}
        </div>

        {/* Other number types note */}
        <div className="mx-auto mt-5 flex max-w-7xl items-start gap-3 rounded-2xl bg-[#F5F6FB] p-5">
          <TriangleAlert
            className="mt-0.5 h-5 w-5 shrink-0 text-[#7B3FE4]"
            strokeWidth={2}
            aria-hidden="true"
          />
          <p className="text-sm leading-relaxed text-[#4B5375]">
            <strong className="font-bold text-[#11183C]">
              Other number types:
            </strong>{" "}
            070 numbers are personal numbers, not mobiles, and can be expensive
            to call. 09 numbers are premium rate. Neither is offered as a
            standard choice here.
          </p>
        </div>

        {/* Goal picker */}
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-2">
          <fieldset className="rounded-2xl border border-[#E6E9F2] bg-white p-6 sm:p-7">
            <legend className="sr-only">What’s your main goal?</legend>
            <p
              aria-hidden="true"
              className="text-lg font-extrabold text-[#11183C]"
            >
              What’s your main goal?
            </p>
            <div className="mt-5 space-y-2.5">
              {GOALS.map((option) => {
                const selected = option.id === goalId;
                return (
                  <label
                    key={option.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors sm:text-base ${
                      selected
                        ? "border-[#E11D74] bg-[#FDEFF6] text-[#11183C]"
                        : "border-[#E6E9F2] bg-white text-[#2B3252] hover:border-[#D3D8E8]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="virtual-number-goal"
                      value={option.id}
                      checked={selected}
                      onChange={() => setGoalId(option.id)}
                      className="h-4 w-4 accent-[#E11D74]"
                    />
                    {option.label}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div
            aria-live="polite"
            className="flex flex-col justify-start rounded-2xl bg-gradient-to-br from-[#14125A] via-[#1C1A6E] to-[#6A35D8] p-7 text-white sm:p-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#F472B6]">
              Worth discussing
            </p>
            <p className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {goal.number}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base">
              {goal.text}
            </p>
            <p className="mt-5 text-xs text-white/60">
              A starting point for your conversation — not a recommendation or
              price approval.
            </p>
          </div>
        </div>

        {/* Comparison table */}
        <div className="mx-auto mt-10 max-w-7xl overflow-hidden rounded-2xl border border-[#E6E9F2] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <caption className="sr-only">
                UK number types compared by caller cost, routing and who can
                use them
              </caption>
              <thead className="bg-[#0B1445] text-white">
                <tr>
                  {["Number type", "What callers pay", "Routing", "Who can use it"].map(
                    (heading) => (
                      <th
                        key={heading}
                        scope="col"
                        className="px-5 py-4 font-bold"
                      >
                        {heading}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EEF0F7]">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.type}>
                    <th
                      scope="row"
                      className="px-5 py-4 font-bold text-[#11183C]"
                    >
                      {row.type}
                    </th>
                    <td className="px-5 py-4 text-[#4B5375]">{row.pay}</td>
                    <td className="px-5 py-4 text-[#4B5375]">{row.routing}</td>
                    <td className="px-5 py-4 text-[#4B5375]">{row.who}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="border-t border-[#EEF0F7] px-5 py-3 text-xs text-[#6B7280]">
            UK numbering only. International numbers are discussed separately.
          </p>
        </div>
      </div>
    </section>
  );
}
