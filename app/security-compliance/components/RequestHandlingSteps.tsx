"use client";

import React from "react";

interface RequestStepItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
}

const REQUEST_STEPS = [
  {
    id: "assess",
    title: "Assess",
    description: "Understand your request and service.",
    imageSrc: "/Images/comp/10.png",
    imageAlt: "Team assessing a service request together",
  },
  {
    id: "route",
    title: "Route",
    description: "Send it to the right reviewer.",
    imageSrc: "/Images/comp/11.png",
    imageAlt: "Routing request details on paper",
  },
  {
    id: "review",
    title: "Review",
    description: "Check what can be shared.",
    imageSrc: "/Images/comp/12.png",
    imageAlt: "Reviewing technical and compliance details",
  },
  {
    id: "update",
    title: "Update",
    description: "Reply with the answer or next step.",
    imageSrc: "/Images/comp/13.png",
    imageAlt: "Server infrastructure monitored during request update",
  },
  {
    id: "follow-up",
    title: "Follow up",
    description: "Close the loop with you.",
    imageSrc: "/Images/comp/14.png",
    imageAlt: "Team following up and closing the loop",
  },
] as const satisfies readonly RequestStepItem[];

export default function RequestHandlingSteps() {
  return (
    <section
      aria-labelledby="request-handling-heading"
      className="w-full bg-gradient-to-b from-[#FFFFFF] via-[#FAF9FE] to-[#F5F4FB] py-16 sm:py-20 px-4 sm:px-8 font-sans"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Centered Header */}
        <div className="text-center max-w-[760px] mx-auto mb-12 sm:mb-14">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#565B75] mb-2.5">
            HOW WE HANDLE REQUESTS
          </p>
          <h2
            id="request-handling-heading"
            className="text-[32px] sm:text-[42px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#070B2B]"
          >
            Assess, route, review, update, follow up
          </h2>
        </div>

        {/* 5-Step Horizontal Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {REQUEST_STEPS.map((step, index) => {
            const isLast = index === REQUEST_STEPS.length - 1;
            return (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center"
              >
                {/* Connector Line to Next Step on Desktop */}
                {!isLast && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute top-[34px] left-[calc(50%+38px)] right-[calc(-50%+38px)] border-t-[1.5px] border-dashed border-[#4F86F7]"
                  />
                )}

                {/* Gradient-Ringed Circular Image */}
                <div className="relative z-10 h-[68px] w-[68px] rounded-full p-[2.5px] bg-gradient-to-tr from-[#5B3DF5] via-[#C425B8] to-[#38BDF8] shadow-[0_8px_20px_rgba(15,23,66,0.1)] mb-4">
                  <div className="h-full w-full rounded-full overflow-hidden bg-white">
                    <img
                      src={step.imageSrc}
                      alt={step.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Step Title & Description */}
                <h3 className="text-[14px] font-bold leading-[1.3] text-[#070B2B] mb-1">
                  {step.title}
                </h3>
                <p className="text-[11.5px] leading-[1.45] text-[#5B6078] max-w-[165px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
