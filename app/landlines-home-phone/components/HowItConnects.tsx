import React from "react";
import Image from "next/image";

const STEPS = [
  { title: "Phone to router", text: "Most phones plug into a phone port on your router rather than the wall socket." },
  { title: "An adapter, if needed", text: "Some set-ups use a small adapter between the phone and router." },
  { title: "Check your handset", text: "Many existing phones work, but compatibility isn’t guaranteed. We’ll check with you." },
  { title: "Installation", text: "What’s needed depends on your provider and property. We confirm it with you first." },
] as const;

export default function HowItConnects() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="relative aspect-[576/460] w-full overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(17,24,60,0.15)]">
          <Image
            src="/Images/landlines-home-phone/setup-yellow-phone.webp"
            alt="Yellow push-button home phone on a wooden table"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">Setting up</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            How a digital home phone connects
          </h2>
          <ol className="mt-6 space-y-3">
            {STEPS.map((step, i) => (
              <li key={step.title} className="flex items-start gap-5 rounded-2xl border border-[#E6E9F2] bg-white p-5">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-sm font-bold text-white"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-extrabold text-[#11183C]">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#4B5375]">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
