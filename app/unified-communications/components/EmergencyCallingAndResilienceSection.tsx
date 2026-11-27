import Image from "next/image";
import {
  AlertTriangle,
  Bell,
  MapPin,
  PhoneCall,
  Power,
  type LucideIcon,
} from "lucide-react";

const sectionContent = {
  id: "safety-first",
  eyebrow: "SAFETY FIRST",
  heading: "Emergency calling and resilience",
  description:
    "Internet-based calling works differently from a traditional line. We review these points with you before any service is offered.",
  image: "/Images/uni/8.png",
  imageAlt:
    "Low-angle architectural view of modern glass and steel office towers against a bright sky",
} as const;

interface SafetyPointItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const safetyPoints: readonly SafetyPointItem[] = [
  {
    title: "999 and 112 calls",
    description:
      "How emergency calls work on your service, and any limits by contract or location.",
    icon: PhoneCall,
  },
  {
    title: "Registered locations",
    description:
      "Each site’s emergency location is recorded securely — never shown publicly.",
    icon: MapPin,
  },
  {
    title: "Power or internet loss",
    description:
      "What happens if either fails, and what alternatives you’ll have.",
    icon: Power,
  },
  {
    title: "Critical equipment",
    description:
      "Alarms, lifts, telecare and similar systems go to an assisted review.",
    icon: Bell,
  },
] as const;

export default function EmergencyCallingAndResilienceSection() {
  return (
    <section
      id={sectionContent.id}
      className="grid w-full grid-cols-1 bg-[#14071d] lg:grid-cols-12"
    >
      {/* Left column: Full-bleed architectural photography */}
      <div className="relative min-h-[280px] w-full overflow-hidden bg-[#1b2432] sm:min-h-[360px] lg:col-span-6 lg:min-h-[520px]">
        <Image
          src={sectionContent.image}
          alt={sectionContent.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </div>

      {/* Right column: Dark plum-charcoal safety panel */}
      <div className="flex flex-col justify-center bg-[#18071f] px-6 py-12 text-white sm:px-10 lg:col-span-6 lg:px-12 lg:py-14">
        <div className="max-w-[540px]">
          <p className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#f472b6]">
            <AlertTriangle
              className="h-3.5 w-3.5 shrink-0 stroke-[2.2]"
              aria-hidden="true"
            />
            <span>{sectionContent.eyebrow}</span>
          </p>

          <h2 className="mt-2.5 text-2xl font-extrabold leading-[1.15] tracking-[-0.025em] text-white sm:text-[32px]">
            {sectionContent.heading}
          </h2>

          <p className="mt-2 text-[12px] leading-[1.55] text-white/65 sm:text-[12.5px]">
            {sectionContent.description}
          </p>

          {/* 2x2 dark glass-tinted safety cards */}
          <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {safetyPoints.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-[#23102c]/90 p-4 shadow-[0_6px_20px_rgba(0,0,0,0.22)]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#3b1534] text-[#f472b6]">
                    <Icon
                      className="h-3.5 w-3.5 stroke-[2]"
                      aria-hidden="true"
                    />
                  </span>

                  <h3 className="mt-3 text-[12.5px] font-bold leading-snug text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[10.5px] leading-[1.48] text-white/60">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
