import React from "react";
import SectionHeader from "./SectionHeader";

const TRANSFER_STEPS = [
  { title: "Current provider", text: "Who provides the number today" },
  { title: "Authorisation", text: "Confirming you can move it" },
  { title: "Number list", text: "Every number you want to keep" },
  { title: "Validation", text: "Operators check the request" },
  { title: "Cut-over", text: "Agreed switch date and time" },
] as const;

const UPDATE_STAGES = [
  { label: "Requested", attention: false },
  { label: "Validating", attention: false },
  { label: "Scheduled", attention: false },
  { label: "Completed", attention: false },
  { label: "Needs attention", attention: true },
] as const;

export default function KeepYourBusinessNumber() {
  return (
    <section
      id="keep-your-number"
      className="w-full scroll-mt-24 bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1300px]">
        <SectionHeader
          eyebrow="Keep your number"
          title="Ask to keep your business number"
          subtitle="Moving a number is a request that has to be checked by the operators involved."
        />

        <div className="mx-auto mt-12 max-w-6xl">
          {/* Timeline */}
          <ol className="relative grid grid-cols-1 gap-8 sm:grid-cols-5 sm:gap-4">
            <span
              aria-hidden="true"
              className="absolute left-[10%] right-[10%] top-8 hidden h-[3px] bg-gradient-to-r from-[#8E37E8] via-[#E11D74] to-[#8E37E8] sm:block"
            />
            {TRANSFER_STEPS.map((step) => (
              <li key={step.title} className="relative flex flex-col items-center text-center">
                <span
                  aria-hidden="true"
                  className="h-16 w-16 rounded-full border-[3px] border-[#8E37E8] bg-white"
                />
                <p className="mt-4 text-base font-extrabold text-[#11183C]">{step.title}</p>
                <p className="mt-1 text-sm text-[#4B5375]">{step.text}</p>
              </li>
            ))}
          </ol>

          {/* Example update stages */}
          <h3 className="mt-12 text-lg font-extrabold text-[#11183C]">
            What transfer updates look like
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#E6E9F2] bg-[#E6E9F2] sm:grid-cols-5">
            {UPDATE_STAGES.map((stage) => (
              <li
                key={stage.label}
                className="flex flex-col items-center gap-2 bg-white px-3 py-5 text-sm font-semibold last:col-span-2 sm:last:col-span-1"
              >
                <span
                  aria-hidden="true"
                  className={`h-3.5 w-3.5 rounded-full ${
                    stage.attention ? "bg-[#FCA5A5]" : "bg-[#DDE1EE]"
                  }`}
                />
                <span className={stage.attention ? "text-[#B45B5B]" : "text-[#8A90A6]"}>
                  {stage.label}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center text-xs text-[#8A90A6]">
            Example stages. Online transfer tracking isn’t available yet — our
            team keeps you updated.
          </p>
        </div>
      </div>
    </section>
  );
}
