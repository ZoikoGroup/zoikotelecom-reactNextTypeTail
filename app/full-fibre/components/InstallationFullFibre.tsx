import React from "react";
import Image from "next/image";
import { PhoneCall, Check } from "lucide-react";

const INSTALLATION_STEPS = [
  {
    id: "survey",
    imageSrc: "/Images/full/6.png",
    imageAlt: "Engineer holding a clipboard during a survey",
    title: "Survey",
    description: "Some homes need a check or small works first.",
  },
  {
    id: "engineer-visit",
    imageSrc: "/Images/full/7.png",
    imageAlt: "Engineer looking closely at wall installation",
    title: "Engineer visit",
    description: "An appointment is arranged with you.",
  },
  {
    id: "fibre-box-ont",
    imageSrc: "/Images/full/14.png",
    imageAlt: "Optical Network Terminal (ONT) fibre box on a white background",
    title: "Fibre box (ONT)",
    description: "A small box is fitted on an inside wall.",
  },
  {
    id: "router-setup",
    imageSrc: "/Images/full/8.png",
    imageAlt:
      "Broadband router plugged into the fibre box with an ethernet cable",
    title: "Router set-up",
    description: "Your router plugs into the fibre box.",
  },
  {
    id: "test-go",
    imageSrc: "/Images/full/9.png",
    imageAlt: "People working on laptops at home checking speeds",
    title: "Test & go",
    description: "Check your devices and speeds.",
  },
] as const;

const TELECARE_CHECKLIST = [
  "Home phone and number",
  "Security alarms",
  "Telecare and personal alarms",
  "Back-up in a power cut",
] as const;

export default function InstallationFullFibre() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            INSTALLATION
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            How full fibre gets installed
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Timings and any work needed are confirmed when you order.
          </p>
        </div>

        {/* 5-Column Steps Grid */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {INSTALLATION_STEPS.map((step) => (
            <div
              key={step.id}
              className="flex flex-col overflow-hidden rounded-3xl border border-[#ECEEF6] bg-white shadow-[0_6px_24px_rgba(17,24,60,0.04)]"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 220px"
                  className="object-cover object-center"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <h3 className="text-base font-extrabold tracking-tight text-[#11183C]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner: Landline, alarms and telecare */}
        <div className="mx-auto mt-10 max-w-7xl rounded-3xl border border-[#F3D7C9] bg-gradient-to-r from-[#FFF5F0] via-[#FFF8F5] to-[#FEF3F0] p-6 sm:p-8 lg:p-10 shadow-[0_8px_30px_rgba(17,24,60,0.03)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
            {/* Left Icon Badge */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#D97706] text-white shadow-md">
              <PhoneCall className="h-8 w-8" strokeWidth={2} />
            </div>

            {/* Right Text Content & Checklist */}
            <div className="flex-1">
              <h3 className="text-xl font-extrabold tracking-tight text-[#3A1D0C] sm:text-2xl">
                Landline, alarms and telecare
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5C3A29] sm:text-base">
                UK landlines are moving to digital phone services. Before you
                switch, check anything that uses your phone line.
              </p>

              {/* 2-Column Checklist */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3.5">
                {TELECARE_CHECKLIST.map((item, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[#D97706]">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-bold text-[#3A1D0C]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
