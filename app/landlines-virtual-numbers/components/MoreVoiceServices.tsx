import React from "react";
import Link from "next/link";
import { Globe, Phone, Users } from "lucide-react";

const RELATED_SERVICES = [
  {
    id: "business-landlines",
    title: "Business landlines",
    text: "Lines for your premises",
    icon: Phone,
    href: "/landlines",
  },
  {
    id: "business-voip",
    title: "Business Voice (VoIP)",
    text: "Calling for your team",
    icon: Users,
    href: "/landlines-business-voice",
  },
  {
    id: "international-calls",
    title: "International calls",
    text: "Calling abroad from the UK",
    icon: Globe,
    href: "/landlines-international-calls",
  },
] as const;

const CARD_CLASS =
  "flex items-center gap-4 rounded-2xl border border-[#E6E9F2] bg-white p-6 shadow-[0_10px_30px_rgba(17,24,60,0.06)]";

export default function MoreVoiceServices() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#434A6E]">
            Related
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#11183C] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            More voice services
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
          {RELATED_SERVICES.map((service) => {
            const Icon = service.icon;
            const content = (
              <>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-white">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-base font-extrabold text-[#11183C]">
                    {service.title}
                  </span>
                  <span className="mt-1 block text-sm text-[#4B5375]">
                    {service.text}
                  </span>
                </span>
              </>
            );

            return (
              <Link
                key={service.id}
                href={service.href}
                className={`${CARD_CLASS} transition-colors hover:border-[#F7C6DD]`}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
