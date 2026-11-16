import React from "react";
import Image from "next/image";
import { Router, Wrench, FileText, Users } from "lucide-react";

const INSTALLATION_STEPS = [
  {
    id: "your-router",
    title: "Your router",
    description:
      "Sent to you or brought by the engineer. Plug in where the signal can reach.",
    icon: Router,
  },
  {
    id: "engineer-visit",
    title: "Engineer visit",
    description:
      "Some connections need an engineer. Timings are confirmed when you order.",
    icon: Wrench,
  },
  {
    id: "renting-or-flat",
    title: "Renting or in a flat?",
    description:
      "You may need your landlord's or building manager's permission for new cables.",
    icon: FileText,
  },
  {
    id: "need-extra-help",
    title: "Need extra help?",
    description:
      "Tell us about access needs and we'll arrange a suitable appointment.",
    icon: Users,
  },
] as const;

export default function InstallationDay() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Content Column */}
          <div className="lg:col-span-6">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
              INSTALLATION
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
              What happens on
              <br />
              installation day
            </h2>

            <div className="mt-9 space-y-6">
              {INSTALLATION_STEPS.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F4297B] to-[#8A3FFC] text-white shadow-sm">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold tracking-tight text-[#11183C]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#4B5563]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-[0_18px_40px_rgba(17,24,60,0.12)] sm:aspect-[16/13]">
              <Image
                src="/Images/broad/5.png"
                alt="Broadband engineer crimping a network cable indoors during installation"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
