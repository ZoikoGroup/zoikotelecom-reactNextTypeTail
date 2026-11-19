"use client";

import React from "react";

interface LifecycleStage {
  readonly stepNumber: string;
  readonly title: string;
  readonly description: string;
  readonly footnote: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly grayscale?: boolean;
}

const LIFECYCLE_STAGES: readonly LifecycleStage[] = [
  {
    stepNumber: "01",
    title: "Discover",
    description:
      "Confirm current services, number of sites, critical dependencies and the support you want.",
    footnote: "No passwords or device lists needed.",
    imageSrc: "/Images/mng/6.png",
    imageAlt: "Discover stage team collaboration",
  },
  {
    stepNumber: "02",
    title: "Onboard",
    description:
      "Validate requirements, installation dependencies, milestones and handover.",
    footnote: "Dates are estimates until the provider confirms.",
    imageSrc: "/Images/mng/7.png",
    imageAlt: "Onboard stage technical planning",
  },
  {
    stepNumber: "03",
    title: "Report an issue",
    description:
      "Tell us the affected service, the business impact and how to contact you.",
    footnote: "A case exists once we confirm it.",
    imageSrc: "/Images/mng/8.png",
    imageAlt: "Report an issue support desk",
    grayscale: true,
  },
  {
    stepNumber: "04",
    title: "Triage",
    description:
      "We check the evidence and identify the right team or supplier.",
    footnote: "Severity follows your agreed terms.",
    imageSrc: "/Images/mng/9.png",
    imageAlt: "Triage stage engineering review",
  },
  {
    stepNumber: "05",
    title: "Escalate",
    description:
      "We coordinate supplier escalation and keep your authorised contacts updated.",
    footnote: "Update timings follow your contract.",
    imageSrc: "/Images/mng/10.png",
    imageAlt: "Escalate stage network infrastructure",
  },
  {
    stepNumber: "06",
    title: "Restore",
    description:
      "Track carrier or line restoration work through to service recovery.",
    footnote: "Restoration times depend on supplier resolution.",
    imageSrc: "/Images/mng/11.png",
    imageAlt: "Restore stage connectivity recovery",
  },
  {
    stepNumber: "07",
    title: "Confirm & close",
    description:
      "Verify service stability with your team before closing the case.",
    footnote: "Closure confirmed with named contacts.",
    imageSrc: "/Images/mng/12.png",
    imageAlt: "Confirm and close service verification",
  },
  {
    stepNumber: "08",
    title: "Ongoing support",
    description:
      "Handle moves, adds, changes and service reviews across your estate.",
    footnote: "Governed by your agreed service terms.",
    imageSrc: "/Images/mng/13.png",
    imageAlt: "Ongoing support continuous coordination",
  },
] as const;

export default function LifecycleStagesSection() {
  return (
    <section
      aria-labelledby="lifecycle-heading"
      className="w-full bg-[#F7F8FC] py-16 sm:py-20 font-sans overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto px-4 sm:px-8 mb-11 sm:mb-12">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#565B75] mb-2.5">
            LIFECYCLE
          </p>
          <h2
            id="lifecycle-heading"
            className="text-[30px] sm:text-[38px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B] mb-3"
          >
            From activation to ongoing support — understand the responsibilities
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] leading-[1.55] text-[#5B6078] font-normal">
            Eight stages. Scroll across to see each one.
          </p>
        </div>

        <div
          role="region"
          aria-label="Eight lifecycle stages"
          className="flex gap-5 overflow-x-auto pb-4 px-4 sm:px-8 lg:pl-[76px] lg:pr-8 snap-x snap-mandatory scroll-smooth"
        >
          {LIFECYCLE_STAGES.map((stage) => (
            <article
              key={stage.stepNumber}
              className="w-[238px] sm:w-[244px] shrink-0 snap-start flex flex-col rounded-[18px] bg-white border border-[#ECEEF6] shadow-[0_10px_28px_rgba(15,23,66,0.05)] overflow-hidden"
            >
              <div className="relative h-[132px] w-full bg-[#E5E7EB] overflow-hidden">
                <img
                  src={stage.imageSrc}
                  alt={stage.imageAlt}
                  className={`h-full w-full object-cover object-center ${
                    stage.grayscale ? "grayscale contrast-110" : ""
                  }`}
                />
                <span className="absolute top-3 left-3 inline-flex h-[24px] min-w-[28px] items-center justify-center rounded-[6px] bg-[#24285B]/90 px-2 text-[11px] font-bold tracking-[0.02em] text-white shadow-sm">
                  {stage.stepNumber}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[15.5px] font-bold leading-[1.3] tracking-[-0.01em] text-[#070B2B] mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-[12px] leading-[1.48] text-[#4B5068] mb-3.5">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-dashed border-[#E2E5F0]">
                  <p className="text-[11px] leading-[1.4] text-[#8A90A8] font-normal">
                    {stage.footnote}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
