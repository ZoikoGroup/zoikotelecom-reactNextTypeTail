import Link from "next/link";
import {
  Phone,
  Briefcase,
  Hash,
  Globe,
  Layers,
  type LucideIcon,
} from "lucide-react";

type RelatedServiceCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

const RELATED_SERVICES: readonly RelatedServiceCard[] = [
  {
    title: "Home Phone",
    description: "Digital landlines at home",
    icon: Phone,
    href: "/home-phone",
  },
  {
    title: "Business Voice",
    description: "Business calling for teams",
    icon: Briefcase,
    href: "/business-voice",
  },
  {
    title: "Virtual Numbers",
    description: "Numbers that route to you",
    icon: Hash,
    href: "/virtual-numbers",
  },
  {
    title: "International Calls",
    description: "Calling abroad from the UK",
    icon: Globe,
    href: "/international-calls",
  },
  {
    title: "Voice Bundles",
    description: "Calling packages explained",
    icon: Layers,
    href: "/voice-bundles",
  },
] as const;

export default function RelatedServicesSection() {
  return (
    <section className="w-full bg-white py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
            More from landlines &amp; voice
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight text-[#131138] sm:text-4xl lg:text-[42px]">
            Related services
          </h2>
        </div>

        {/* 3-column / 2-row Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RELATED_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col justify-between rounded-[24px] border border-[#ecebf4] bg-white p-7 shadow-[0_12px_32px_rgba(19,17,56,0.04)] transition hover:border-[#e6007e] hover:shadow-[0_16px_40px_rgba(230,0,126,0.08)] sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e6007e] to-[#7b3fe4] text-white shadow-md shadow-[#e6007e]/20">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-black tracking-tight text-[#131138] transition group-hover:text-[#e6007e]">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-[#545275]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
