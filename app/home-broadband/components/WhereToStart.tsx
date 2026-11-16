import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Server, Zap, Wrench, ChevronRight } from "lucide-react";

const TASKS_DATA = [
  {
    id: "compare-plan-terms",
    imageSrc: "/Images/broad/2.png",
    imageAlt: "Laptop glowing in a dark room displaying a screen",
    icon: Server,
    title: "Compare plan terms",
    description:
      "Monthly price, contract length, set-up costs and price changes.",
    ctaText: "Compare terms",
    href: "/broadband/terms",
  },
  {
    id: "understand-connection-types",
    imageSrc: "/Images/broad/3.png",
    imageAlt: "Server racks with network cables and indicator lights",
    icon: Zap,
    title: "Understand connection types",
    description: "Full fibre, part fibre and copper — what the labels mean.",
    ctaText: "See the differences",
    href: "/broadband/connections",
  },
  {
    id: "installation-switching-help",
    imageSrc: "/Images/broad/4.png",
    imageAlt:
      "Top-down view of person sketching architectural or wiring plans on a desk",
    icon: Wrench,
    title: "Installation & switching help",
    description: "How switching works and what happens on installation day.",
    ctaText: "Get help",
    href: "/broadband/help",
  },
] as const;

export default function WhereToStart() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            WHERE TO START
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            What would you like to do?
          </h2>
          <p className="mt-3.5 text-sm text-[#4B5563] sm:text-base">
            Pick a task — each one takes you to the right part of this page.
          </p>
        </div>

        {/* Three-Column Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TASKS_DATA.map((task) => {
            const Icon = task.icon;

            return (
              <div
                key={task.id}
                className="relative flex flex-col overflow-hidden rounded-3xl border border-[#ECEEF6] bg-white shadow-[0_4px_20px_rgba(17,24,60,0.04)]"
              >
                {/* Top Image */}
                <div className="relative z-0 h-48 w-full sm:h-52">
                  <Image
                    src={task.imageSrc}
                    alt={task.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className="object-cover object-center"
                  />
                </div>

                {/* High-Priority Floating Icon overlapping between image and content */}
                <div className="relative z-20 px-6">
                  <div className="-mt-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4297B] to-[#8A3FFC] text-white shadow-[0_6px_16px_rgba(244,41,123,0.35)]">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-1 flex-col justify-between p-6 pt-4 sm:p-7 sm:pt-4">
                  <div>
                    <h3 className="text-xl font-extrabold tracking-tight text-[#11183C]">
                      {task.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#4B5563]">
                      {task.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <Link
                      href={task.href}
                      className="inline-flex items-center gap-1 text-sm font-bold text-[#E11D74] transition-colors hover:text-[#C11260]"
                    >
                      <span>{task.ctaText}</span>
                      <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
