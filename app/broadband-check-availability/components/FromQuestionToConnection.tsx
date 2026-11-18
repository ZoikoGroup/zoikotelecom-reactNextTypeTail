import React from "react";

const JOURNEY_STEPS = [
  {
    id: "discover-options",
    title: "Discover options",
    description: "Learn what kinds of broadband exist.",
    bg: "bg-[#FDECF3]",
    clipPathDesktop:
      "polygon(0% 0%, calc(100% - 20px) 0%, 100% 50%, calc(100% - 20px) 100%, 0% 100%)",
  },
  {
    id: "confirm-your-address",
    title: "Confirm your address",
    description: "Our team checks your exact property.",
    bg: "bg-[#EFEAFE]",
    clipPathDesktop:
      "polygon(0% 0%, calc(100% - 20px) 0%, 100% 50%, calc(100% - 20px) 100%, 0% 100%, 20px 50%)",
  },
  {
    id: "review-a-plan",
    title: "Review a plan",
    description: "See full costs and terms first.",
    bg: "bg-[#FDECF3]",
    clipPathDesktop:
      "polygon(0% 0%, calc(100% - 20px) 0%, 100% 50%, calc(100% - 20px) 100%, 0% 100%, 20px 50%)",
  },
  {
    id: "discuss-installation",
    title: "Discuss installation",
    description: "Any survey or permission needed.",
    bg: "bg-[#EFEAFE]",
    clipPathDesktop:
      "polygon(0% 0%, calc(100% - 20px) 0%, 100% 50%, calc(100% - 20px) 100%, 0% 100%, 20px 50%)",
  },
] as const;

export default function FromQuestionToConnection() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            NEXT STEPS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            From question to connection
          </h2>
        </div>

        {/* Chevron Process Steps */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-1">
          {JOURNEY_STEPS.map((step, index) => (
            <div
              key={step.id}
              style={{
                clipPath: step.clipPathDesktop,
              }}
              className={`flex min-h-[160px] flex-col justify-end rounded-2xl p-6 sm:p-7 lg:rounded-none ${
                step.bg
              } ${index === 0 ? "lg:pl-8" : "lg:pl-10"} lg:pr-9`}
            >
              <div>
                <h3 className="text-base font-extrabold tracking-tight text-[#11183C] sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#4B5563] sm:text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Disclaimer Note */}
        <p className="mt-6 text-center text-xs font-medium text-[#4B5563] sm:text-sm">
          An overview of the process — not an order tracker.
        </p>
      </div>
    </section>
  );
}
