"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Monitor,
  Building2,
  Send,
  Smartphone,
  Check,
  ChevronRight,
} from "lucide-react";

const WORK_MODELS = [
  {
    id: "field-teams",
    title: "Field teams",
    tag: "Field teams",
    icon: Home,
    description: "Teams working on sites, on the road or outdoors.",
    features: [
      "Coverage can vary indoors, outdoors and in transit — tell us where your team works",
      "Sturdy devices and eSIM may suit some roles",
      "Plan for lost or damaged phones",
    ],
    image: "/Images/mbl/7.png",
  },
  {
    id: "office-hybrid",
    title: "Office & hybrid",
    tag: "Office & hybrid",
    icon: Monitor,
    description:
      "Teams splitting time between office desks and remote locations.",
    features: [
      "Reliable connectivity for desk-based tasks and video calls",
      "Seamless SIM transfers and flexible device management",
      "Secure data allowances tailored to usage patterns",
    ],
    image: "/Images/mbl/2.png",
  },
  {
    id: "multiple-sites",
    title: "Multiple sites",
    tag: "Multiple sites",
    icon: Building2,
    description: "Coordinating connectivity across several business locations.",
    features: [
      "Centralised billing and management across all offices",
      "Tailored coverage checks for every regional site",
      "Consistent support plans across the board",
    ],
    image: "/Images/mbl/3.png",
  },
  {
    id: "travelling",
    title: "Travelling",
    tag: "Travelling",
    icon: Send,
    description: "Frequent travellers needing reliable connection on the move.",
    features: [
      "Roaming options and data packages for national and international travel",
      "Robust devices built for travel conditions",
      "Quick replacement and support channels",
    ],
    image: "/Images/mbl/4.png",
  },
  {
    id: "small-team",
    title: "Small team",
    tag: "Small team",
    icon: Smartphone,
    description: "Compact teams looking for streamlined mobile plans.",
    features: [
      "Straightforward SIM-only or device bundles",
      "Easy number transfers without downtime",
      "Personalised guidance from our business team",
    ],
    image: "/Images/mbl/1.png",
  },
] as const;

export default function ChooseHowYourTeamWorks() {
  const [activeId, setActiveId] = useState<string>("field-teams");

  const currentModel =
    WORK_MODELS.find((m) => m.id === activeId) || WORK_MODELS[0];

  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            HOW YOUR TEAM WORKS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Choose how your team works
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            We&apos;ll show the things worth thinking about. It doesn&apos;t
            check eligibility.
          </p>
        </div>

        {/* Interactive Workspace Container */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: Vertical Navigation Tabs */}
          <div className="flex flex-col gap-3 lg:col-span-4">
            {WORK_MODELS.map((model) => {
              const Icon = model.icon;
              const isActive = model.id === activeId;

              return (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => setActiveId(model.id)}
                  className={`flex items-center gap-3.5 rounded-2xl border px-5 py-4 text-left transition-all ${
                    isActive
                      ? "border-[#E11D74] bg-[#FDECF3] shadow-md"
                      : "border-[#ECEEF6] bg-white hover:border-[#DCE1F0] hover:bg-[#FAFAFD]"
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                      isActive
                        ? "bg-[#E11D74] text-white"
                        : "bg-[#F3F4F6] text-[#434A6E]"
                    }`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={2.25} />
                  </div>
                  <span
                    className={`text-sm font-bold ${
                      isActive ? "text-[#E11D74]" : "text-[#11183C]"
                    }`}
                  >
                    {model.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Tab Content Panel */}
          <div className="rounded-3xl border border-[#ECEEF6] bg-white p-7 shadow-[0_8px_30px_rgba(17,24,60,0.04)] sm:p-10 lg:col-span-8">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              {/* Content Details */}
              <div className="lg:col-span-7">
                <h3 className="text-2xl font-extrabold tracking-tight text-[#11183C] sm:text-3xl">
                  {currentModel.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#4B5563]">
                  {currentModel.description}
                </p>

                {/* Features Checklist */}
                <div className="mt-6 space-y-3.5">
                  {currentModel.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FCE8F1] text-[#E11D74]">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </div>
                      <p className="text-xs leading-relaxed text-[#4B5563] sm:text-sm">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="mt-8">
                  <Link
                    href="/business/contact"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#E11D74] to-[#D6156C] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(225,29,116,0.32)] transition-transform hover:scale-[1.01]"
                  >
                    <span>Tell us about your team</span>
                    <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                  </Link>
                </div>
              </div>

              {/* Panel Image (/Images/mbl/7.png etc.) */}
              <div className="relative h-[280px] w-full overflow-hidden rounded-2xl shadow-md lg:col-span-5 sm:h-[320px]">
                <Image
                  src="/Images/mbl/7.png"
                  alt={currentModel.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
