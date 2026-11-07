"use client";

import Link from "next/link";

const FIELDS = [
  { id: "name", label: "Name", type: "text", autoComplete: "name" },
  {
    id: "company",
    label: "Company",
    type: "text",
    autoComplete: "organization",
  },
  { id: "email", label: "Work email", type: "email", autoComplete: "email" },
  { id: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
] as const;

const LINE_OPTIONS = [
  "1 line",
  "2–5 lines",
  "6–10 lines",
  "10+ lines",
] as const;

const INTEREST_OPTIONS = [
  "Digital lines only",
  "Digital lines + broadband",
  "Digital lines + eSIM",
  "Full bundle",
] as const;

const inputClass =
  "mt-1.5 h-11 w-full rounded-lg border border-[#e3dfe6] bg-white px-3 text-sm text-[#120b16] outline-none transition-all focus:border-[#c4237f] focus:ring-2 focus:ring-[#c4237f]/20";

export default function RequestQuote() {
  return (
    <section
      id="request"
      className="w-full overflow-x-hidden bg-white px-4 py-8 sm:px-8 sm:py-12 lg:px-10"
    >
      <div className="relative mx-auto max-w-[1300px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#c4237f] via-[#9a2d86] to-[#7a2a8a] shadow-2xl">
        {/* Watermark */}
        <p
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-10px] left-0 right-0 hidden select-none whitespace-nowrap text-center text-[150px] font-extrabold uppercase leading-none text-transparent lg:block"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.18)" }}
        >
          Black Friday
        </p>

        <div className="relative grid items-center gap-8 px-5 py-8 sm:px-10 sm:py-12 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:px-12">
          {/* Left Column */}
          <div className="text-white">
            <span className="inline-block rounded-full bg-[#120b16] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.12em] sm:px-4 sm:text-sm">
              Black Friday · 27–30 Nov
            </span>
            <h2 className="mt-4 max-w-[420px] text-3xl font-extrabold leading-tight tracking-tight sm:mt-5 sm:text-4xl lg:text-5xl">
              Request a business quote
            </h2>
            <p className="mt-3 max-w-[400px] text-sm leading-6 text-white/90 sm:mt-5 sm:text-base sm:leading-7">
              Get 20% off the monthly charge on eligible digital-line packages
              for your first six months.
            </p>
            <p className="mt-3 max-w-[400px] text-xs leading-5 text-white/75 sm:mt-4 sm:text-sm">
              Our business team will reply with a written proposal, including
              minimum term, installation and the full price after the offer.
            </p>
          </div>

          {/* Right Column (Form) */}
          <div className="relative">
            {/* Hanging tag */}
            <div
              aria-hidden="true"
              className="absolute -top-10 left-4 z-10 hidden flex-col items-center md:flex lg:-top-16"
            >
              <span className="h-6 w-px bg-white/70 lg:h-8" />
              <div className="rounded-lg bg-[#120b16] px-3.5 py-1.5 text-center text-white shadow-lg lg:px-4 lg:py-2">
                <span className="mx-auto mb-1 block h-1.5 w-1.5 rounded-full bg-[#f0459f]" />
                <p className="text-xs font-bold uppercase leading-3 text-[#f0459f] lg:text-sm lg:leading-4">
                  Black
                </p>
                <p className="text-xs font-extrabold uppercase leading-3 lg:text-sm lg:leading-4">
                  Friday
                </p>
              </div>
            </div>

            <form className="rounded-2xl bg-white p-5 shadow-2xl sm:p-6 lg:p-8">
              <div className="grid gap-x-5 gap-y-3.5 sm:grid-cols-2 sm:gap-y-4">
                {FIELDS.map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-xs font-bold text-[#120b16] sm:text-sm"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      className={inputClass}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="lines"
                    className="block text-xs font-bold text-[#120b16] sm:text-sm"
                  >
                    Number of lines
                  </label>
                  <select id="lines" name="lines" className={inputClass}>
                    {LINE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-xs font-bold text-[#120b16] sm:text-sm"
                  >
                    Also interested in
                  </label>
                  <select id="interest" name="interest" className={inputClass}>
                    {INTEREST_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <label className="mt-4 flex items-start gap-2.5 text-xs text-[#3c3544] sm:gap-3 sm:text-sm">
                <input
                  type="checkbox"
                  name="consent"
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#cfc9d4] accent-[#c4237f]"
                />
                <span className="leading-5">
                  I agree to Zoiko Telecom contacting me about this quote. [
                  <Link
                    href="/privacy"
                    className="underline underline-offset-2 hover:text-[#c4237f]"
                  >
                    Privacy notice link
                  </Link>
                  ]
                </span>
              </label>

              <button
                type="submit"
                className="mt-5 w-full rounded-full bg-gradient-to-r from-[#c4237f] to-[#a82a86] px-6 py-3.5 text-center text-xs font-bold text-white shadow-lg transition hover:opacity-95 sm:text-sm"
              >
                Request a business quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
