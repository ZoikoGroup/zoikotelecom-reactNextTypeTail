import Link from "next/link";
import { Check, MessageSquare, PhoneCall, type LucideIcon } from "lucide-react";

type MenuOption = {
  key: string;
  label: string;
  tone: string;
};

const MENU_OPTIONS: readonly MenuOption[] = [
  {
    key: "1",
    label: "Sales and new enquiries",
    tone: "bg-[#fdf0f6] text-[#e6007e]",
  },
  {
    key: "2",
    label: "Support for existing customers",
    tone: "bg-[#fdf0f6] text-[#e6007e]",
  },
  {
    key: "3",
    label: "Accounts and billing",
    tone: "bg-[#fdf0f6] text-[#e6007e]",
  },
  { key: "0", label: "Speak to a person", tone: "bg-[#eaf7ef] text-[#1f9d55]" },
] as const;

const BEST_PRACTICES = [
  "Keep menus short — three or four choices is easier for callers",
  "Always include a way to reach a person",
  "Decide what happens if a caller presses nothing or a wrong key",
  "Make sure no option leads back round in a loop",
  "Menus must never interfere with emergency calls",
] as const;

export default function WelcomeCallersSection() {
  return (
    <section className="w-full bg-white py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#e6007e] to-[#7b3fe4] text-white shadow-md shadow-[#e6007e]/20">
            <PhoneCall className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
              Welcome callers
            </p>
            <h2 className="text-2xl font-black tracking-tight text-[#131138] sm:text-3xl lg:text-4xl">
              Help callers choose the right team
            </h2>
          </div>
        </div>
        <p className="mt-2.5 max-w-[620px] text-sm text-[#545275] sm:text-base">
          With a structured greeting and menu (often called an auto-attendant or
          IVR), where supported.
        </p>

        {/* Main Content Layout: Left Graphic / Right List */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Left Column: Greeting Box + Menu List */}
          <div className="grid gap-6 sm:grid-cols-[240px_1fr] sm:items-center">
            {/* Dark Greeting Card */}
            <div className="rounded-[24px] bg-gradient-to-b from-[#0A1446] to-[#2A1A6E] p-6 text-white shadow-[0_16px_40px_rgba(27,23,64,0.25)] sm:p-7">
              <span className="text-xs font-extrabold uppercase tracking-[0.1em] text-[#FF8FCB]">
                Greeting
              </span>
              <p className="mt-3 text-xs leading-5 text-[#d0cbe7] sm:text-[13px]">
                &ldquo;Thanks for calling Northfield Studio. Please choose from
                the following options.&rdquo;
              </p>
              <div className="mt-6">
                <span className="rounded-md bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#a4a0c8]">
                  Example
                </span>
              </div>
            </div>

            {/* Menu Options Stack */}
            <div className="space-y-3">
              {MENU_OPTIONS.map((opt) => (
                <div
                  key={opt.key}
                  className="flex items-center gap-3.5 rounded-2xl border border-[#ecebf4] bg-white p-3.5 shadow-[0_4px_16px_rgba(19,17,56,0.03)] sm:p-4"
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-black ${opt.tone}`}
                  >
                    {opt.key}
                  </span>
                  <span className="text-xs font-extrabold tracking-tight text-[#131138] sm:text-sm">
                    {opt.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Best Practices & Action */}
          <div>
            <ul className="space-y-3.5">
              {BEST_PRACTICES.map((practice) => (
                <li
                  key={practice}
                  className="flex items-start gap-3 text-sm font-medium text-[#2c2a4a]"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#e6007e]"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span>{practice}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs text-[#545275]">
              <strong className="font-bold text-[#131138]">Depends on:</strong>{" "}
              whether your voice platform and plan support menus, and any
              licence needed.
            </p>

            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#e6007e] to-[#c41478] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_-6px_rgba(230,0,126,0.45)] transition hover:opacity-95"
              >
                Request advice
                <span aria-hidden="true">&rsaquo;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
