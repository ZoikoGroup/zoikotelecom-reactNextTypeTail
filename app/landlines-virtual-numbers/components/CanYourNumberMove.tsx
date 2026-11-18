import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight, Lock, TriangleAlert } from "lucide-react";

const WHAT_WE_CHECK = [
  "Who owns the number, and your current provider",
  "The number type (for example 01, 03 or 080)",
  "Proof you’re authorised to move it",
] as const;

export default function CanYourNumberMove() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Image */}
        <div className="relative aspect-[572/617] w-full overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(27,22,96,0.25)]">
          <Image
            src="/Images/landlines-virtual-numbers/rotary-phone.webp"
            alt="Orange rotary telephone on a tree stump"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            Bring your number
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Can your existing number move?
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5375] sm:text-base">
            Ask us to check — moving a number isn&apos;t guaranteed.
          </p>

          <ul className="mt-7 space-y-3">
            {WHAT_WE_CHECK.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-[#4B5375]"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#E11D74]"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex items-start gap-3 rounded-2xl bg-[#FFF5E6] p-5">
            <TriangleAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-[#92400E]"
              strokeWidth={2}
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-[#78350F]">
              <strong className="font-bold">
                Don&apos;t cancel your old service first.
              </strong>{" "}
              Keep it running until the move is confirmed. We can&apos;t promise
              zero downtime.
            </p>
          </div>

          <div className="mt-3 flex items-start gap-3 rounded-2xl bg-[#EEF1FB] p-5">
            <Lock
              className="mt-0.5 h-5 w-5 shrink-0 text-[#434A6E]"
              strokeWidth={2}
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-[#434A6E]">
              Please don&apos;t upload documents through this page — we&apos;ll
              ask securely if needed.
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(225,29,116,0.35)] transition-transform hover:scale-[1.01]"
          >
            Speak to porting support
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
