import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface LimitationCard {
  title: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
}

const limitations: LimitationCard[] = [
  {
    title: "Case number",
    description: "Only our team can give you a reference.",
    badge: "Not online yet",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 text-[#0D9488]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 4v16" />
        <path d="M5 5h11.5l-2.2 3.8 2.2 3.7H5" />
      </svg>
    ),
  },
  {
    title: "Track a fault",
    description: "There's no online fault tracker yet.",
    badge: "Not online yet",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 text-[#0284C7]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="6.5" />
        <path d="M16 16l4 4" />
      </svg>
    ),
  },
  {
    title: "Repair time",
    description: "It depends on the fault and your service terms.",
    badge: "Not promised",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 text-[#0D9488]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l2.8 1.8" />
      </svg>
    ),
  },
  {
    title: "Compensation",
    description: "Depends on your contract and circumstances.",
    badge: "Not promised",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 text-[#0D9488]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <circle cx="8" cy="8" r="2" />
        <circle cx="16" cy="16" r="2" />
      </svg>
    ),
  },
];

export default function WhatThisPageCanAndCantDo() {
  return (
    <section
      id="after-you-report"
      className="w-full bg-white px-4 py-14 text-[#18133E] antialiased sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Header */}
        <div className="text-center">
          <p className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[#5B5675]">
            After you report
          </p>
          <h2 className="mt-2.5 text-[32px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#110C3A] sm:text-[42px]">
            What this page can and can&apos;t do
          </h2>
        </div>

        {/* Top 4-Column Limitation Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {limitations.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-2xl border border-[#ECEAF2] bg-white p-5 shadow-[0_4px_18px_rgba(17,12,58,0.035)]"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E6F4F1]">
                    {item.icon}
                  </span>
                  <span className="rounded bg-[#ECEEF6] px-2 py-0.5 text-[8.5px] font-extrabold uppercase tracking-[0.08em] text-[#5B5675]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-[13.5px] font-extrabold text-[#110C3A]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[11.5px] leading-[1.55] text-[#6E6A85]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 2-Column Follow-up Cards */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card 1: Already reported this? */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-[#ECEAF2] bg-white shadow-[0_6px_22px_rgba(17,12,58,0.035)]">
            <div className="relative h-[195px] w-full shrink-0 bg-[#E6E5EA] sm:h-[215px]">
              <Image
                src="/Images/prob/6.png"
                alt="Two people shaking hands across a table"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <span className="inline-block rounded-md bg-[#E8ECFC] px-2.5 py-1 text-[9.5px] font-bold text-[#4B5EA8]">
                  Already reported?
                </span>

                <h3 className="mt-3.5 text-[18px] font-extrabold tracking-[-0.015em] text-[#110C3A]">
                  Already reported this?
                </h3>

                <p className="mt-2 text-[12px] leading-[1.6] text-[#6E6A85]">
                  Contact us and mention any reference you were given. We
                  can&apos;t look up cases on this page.
                </p>
              </div>

              <div className="mt-5 border-t border-[#F1EFF6] pt-4">
                <p className="text-[11px] text-[#7A7691]">
                  <span className="font-extrabold text-[#110C3A]">
                    Depends on:
                  </span>{" "}
                  your existing report.
                </p>

                <Link
                  href="/contact"
                  className="mt-2.5 inline-flex items-center gap-1 text-[12px] font-bold text-[#EC1C7A] transition-colors hover:text-[#c71465]"
                >
                  <span>Contact support</span>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Unhappy with the response? */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-[#ECEAF2] bg-white shadow-[0_6px_22px_rgba(17,12,58,0.035)]">
            <div className="relative h-[195px] w-full shrink-0 bg-[#E6E5EA] sm:h-[215px]">
              <Image
                src="/Images/prob/6.png"
                alt="Two people shaking hands across a table"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <span className="inline-block rounded-md bg-[#FBF0DC] px-2.5 py-1 text-[9.5px] font-bold text-[#9C6F24]">
                  Complaints
                </span>

                <h3 className="mt-3.5 text-[18px] font-extrabold tracking-[-0.015em] text-[#110C3A]">
                  Unhappy with the response?
                </h3>

                <p className="mt-2 text-[12px] leading-[1.6] text-[#6E6A85]">
                  Ask to make a formal complaint. Eligible customers can usually
                  go to free ADR after six weeks, or sooner with a deadlock
                  letter.
                </p>
              </div>

              <div className="mt-5 border-t border-[#F1EFF6] pt-4">
                <p className="text-[11px] text-[#7A7691]">
                  <span className="font-extrabold text-[#110C3A]">
                    Depends on:
                  </span>{" "}
                  Ofcom&apos;s current guidance.
                </p>

                <Link
                  href="#complaints"
                  className="mt-2.5 inline-flex items-center gap-1 text-[12px] font-bold text-[#EC1C7A] transition-colors hover:text-[#c71465]"
                >
                  <span>Ask about complaints</span>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
