import Link from "next/link";
import {
  Smartphone,
  Briefcase,
  Hash,
  Globe,
  Layers,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

type RelatedService = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const RELATED_SERVICES: readonly RelatedService[] = [
  {
    title: "Home Phone",
    description: "Digital landlines at home",
    href: "/home-phone",
    icon: Smartphone,
  },
  {
    title: "Business Voice",
    description: "Business calling for teams",
    href: "/business-voice",
    icon: Briefcase,
  },
  {
    title: "Virtual Numbers",
    description: "Numbers that route to you",
    href: "/virtual-numbers",
    icon: Hash,
  },
  {
    title: "International Calls",
    description: "Calling abroad from the UK",
    href: "/international-calls",
    icon: Globe,
  },
  {
    title: "Call Features",
    description: "How your calls are handled",
    href: "/call-features",
    icon: Layers,
  },
] as const;

export default function RelatedServices() {
  return (
    <section className="w-full bg-white py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
            More from Landlines &amp; Voice
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight text-[#131138] sm:text-4xl lg:text-[42px]">
            Related services
          </h2>
        </div>

        {/* Grid of Related Services */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RELATED_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group flex items-center justify-between rounded-[24px] border border-[#ecebf4] bg-white p-6 shadow-[0_12px_32px_rgba(19,17,56,0.04)] transition hover:border-[#e6007e]/50 hover:shadow-[0_16px_40px_rgba(230,0,126,0.08)] sm:p-7"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e6007e] to-[#7b3fe4] text-white shadow-md shadow-[#e6007e]/20">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold tracking-tight text-[#131138] transition group-hover:text-[#e6007e]">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#545275]">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ChevronRight
                  className="h-5 w-5 text-[#b0acc0] transition group-hover:translate-x-1 group-hover:text-[#e6007e]"
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
