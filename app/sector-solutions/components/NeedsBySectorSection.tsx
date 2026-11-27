import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Check,
  ChevronRight,
  CircleCheck,
  HardHat,
  HeartPulse,
  Home,
  ShieldAlert,
  Store,
  Truck,
  type LucideIcon,
} from "lucide-react";

const sectionContent = {
  id: "needs-by-sector",
  step: "02",
  eyebrow: "SIX SECTORS",
  headingPrefix: "Needs by ",
  headingAccent: "sector",
} as const;

interface SectorItem {
  number: string;
  badgeLabel: string;
  title: string;
  description: string;
  prioritiesTitle: string;
  priorities: readonly string[];
  servicesTitle: string;
  services: readonly string[];
  note: string;
  ctaLabel: string;
  href: string;
  image: string;
  alt: string;
  imageOnRight: boolean;
  icon: LucideIcon;
  accentIconBg: string;
  accentIconText: string;
  subCardBg: string;
  subCardHeadingText: string;
  priorityCheckText: string;
  serviceCheckText: string;
}

const sectors: readonly SectorItem[] = [
  {
    number: "01",
    badgeLabel: "SECTOR 01",
    title: "Professional Services",
    description:
      "Connectivity and calling for offices, client conversations and hybrid teams.",
    prioritiesTitle: "PRIORITIES TO DISCUSS",
    priorities: [
      "Client communication",
      "Secure access",
      "Remote collaboration",
      "Resilience and supplier checks",
    ],
    servicesTitle: "SERVICES TO EXPLORE",
    services: ["Business mobile", "Broadband & fibre", "Business voice"],
    note: "We never ask for client files, credentials or matter details.",
    ctaLabel: "Discuss professional services requirements",
    href: "/contact?sector=professional-services",
    image: "/Images/sector/1.png",
    alt: "Modern glass-walled meeting room and office collaboration space",
    imageOnRight: false,
    icon: Briefcase,
    accentIconBg: "bg-[#2563eb]",
    accentIconText: "text-white",
    subCardBg: "bg-[#eef2ff]",
    subCardHeadingText: "text-[#1d4ed8]",
    priorityCheckText: "text-[#2563eb]",
    serviceCheckText: "text-[#2563eb]",
  },
  {
    number: "02",
    badgeLabel: "SECTOR 02",
    title: "Retail & Hospitality",
    description:
      "Multi-site connectivity for tills, guest Wi-Fi and front-of-house calls.",
    prioritiesTitle: "PRIORITIES TO DISCUSS",
    priorities: [
      "Number of sites",
      "Till and payment dependencies",
      "Separate guest and staff networks",
      "Peak trading hours",
    ],
    servicesTitle: "SERVICES TO EXPLORE",
    services: [
      "Broadband",
      "Business voice",
      "Business mobile (optional)",
      "Backup — after assessment",
    ],
    note: "A backup connection is never promised before your sites are assessed.",
    ctaLabel: "Discuss retail and hospitality requirements",
    href: "/contact?sector=retail-hospitality",
    image: "/Images/sector/2.png",
    alt: "Retail store interior with racks of apparel and counter display",
    imageOnRight: true,
    icon: Store,
    accentIconBg: "bg-[#db2777]",
    accentIconText: "text-white",
    subCardBg: "bg-[#fdf2f8]",
    subCardHeadingText: "text-[#be185d]",
    priorityCheckText: "text-[#db2777]",
    serviceCheckText: "text-[#db2777]",
  },
  {
    number: "03",
    badgeLabel: "SECTOR 03",
    title: "Healthcare",
    description: "Connectivity and telephony needs for clinics and care teams.",
    prioritiesTitle: "PRIORITIES TO DISCUSS",
    priorities: [
      "Clinic sites",
      "Telephony access",
      "Power contingency",
      "Separate clinical and guest networks",
    ],
    servicesTitle: "SERVICES TO EXPLORE",
    services: [
      "Broadband",
      "Business voice",
      "Emergency-call continuity review",
    ],
    note: "No clinical uptime, patient-safety or NHS compliance claims — and never share patient-identifiable information.",
    ctaLabel: "Discuss clinic connectivity",
    href: "/contact?sector=healthcare",
    image: "/Images/sector/3.png",
    alt: "Clinician wearing a white coat and stethoscope holding a smartphone",
    imageOnRight: false,
    icon: HeartPulse,
    accentIconBg: "bg-[#15803d]",
    accentIconText: "text-white",
    subCardBg: "bg-[#f0fdf4]",
    subCardHeadingText: "text-[#15803d]",
    priorityCheckText: "text-[#16a34a]",
    serviceCheckText: "text-[#16a34a]",
  },
  {
    number: "04",
    badgeLabel: "SECTOR 04",
    title: "Trades & Construction",
    description:
      "Mobile-first crews working across changing and temporary sites.",
    prioritiesTitle: "PRIORITIES TO DISCUSS",
    priorities: [
      "Crew mobile use",
      "Changing sites",
      "Temporary premises",
      "Site access and power",
    ],
    servicesTitle: "SERVICES TO EXPLORE",
    services: ["Business mobile", "Premises connectivity", "Business voice"],
    note: "Temporary site networks aren’t promised. Site plans and coordinates are optional.",
    ctaLabel: "Discuss site-team needs",
    href: "/contact?sector=trades-construction",
    image: "/Images/sector/4.png",
    alt: "Construction crew workers in safety gear on an active building site",
    imageOnRight: true,
    icon: HardHat,
    accentIconBg: "bg-[#d97706]",
    accentIconText: "text-white",
    subCardBg: "bg-[#fffbeb]",
    subCardHeadingText: "text-[#b45309]",
    priorityCheckText: "text-[#d97706]",
    serviceCheckText: "text-[#d97706]",
  },
  {
    number: "05",
    badgeLabel: "SECTOR 05",
    title: "Logistics",
    description: "Depots and mobile workforces that need to stay in touch.",
    prioritiesTitle: "PRIORITIES TO DISCUSS",
    priorities: [
      "Depots",
      "Mobile workforces",
      "Number of connected assets",
      "Countries and coverage needs",
    ],
    servicesTitle: "SERVICES TO EXPLORE",
    services: ["Business mobile", "IoT connectivity — separate validation"],
    note: "Zoiko isn’t a fleet-tracking platform, and GPS accuracy or roaming isn’t promised.",
    ctaLabel: "Discuss logistics connectivity",
    href: "/contact?sector=logistics",
    image: "/Images/sector/5.png",
    alt: "Warehouse logistics aisles stocked with boxed inventory and shelving",
    imageOnRight: false,
    icon: Truck,
    accentIconBg: "bg-[#7c3aed]",
    accentIconText: "text-white",
    subCardBg: "bg-[#f5f3ff]",
    subCardHeadingText: "text-[#6d28d9]",
    priorityCheckText: "text-[#7c3aed]",
    serviceCheckText: "text-[#7c3aed]",
  },
  {
    number: "06",
    badgeLabel: "SECTOR 06",
    title: "Remote-First Organisations",
    description: "Distributed teams working from home and on the move.",
    prioritiesTitle: "PRIORITIES TO DISCUSS",
    priorities: [
      "Where staff are based",
      "Security",
      "Employee-owned devices",
      "Calling continuity",
    ],
    servicesTitle: "SERVICES TO EXPLORE",
    services: ["Business mobile", "Broadband", "Hosted voice"],
    note: "Service isn’t guaranteed at every worker’s address. We won’t collect home addresses without a clear purpose.",
    ctaLabel: "Discuss distributed-team requirements",
    href: "/contact?sector=remote-first",
    image: "/Images/sector/6.png",
    alt: "Laptop showing a video call with a ceramic mug beside it at a desk",
    imageOnRight: true,
    icon: Home,
    accentIconBg: "bg-[#c026d3]",
    accentIconText: "text-white",
    subCardBg: "bg-[#fdf4ff]",
    subCardHeadingText: "text-[#a21caf]",
    priorityCheckText: "text-[#c026d3]",
    serviceCheckText: "text-[#c026d3]",
  },
] as const;

export default function NeedsBySectorSection() {
  return (
    <section
      id={sectionContent.id}
      className="w-full bg-[#f5f6fb] px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Centered section header */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="italic text-[#e093b9]">{sectionContent.step}</span>
            <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold tracking-[-0.025em] text-[#0c1438] sm:text-[36px]">
            {sectionContent.headingPrefix}
            <span className="text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>
        </div>

        {/* Stacked sector cards */}
        <div className="mt-8 space-y-6">
          {sectors.map((sector) => {
            const Icon = sector.icon;

            const imagePanel = (
              <div
                className={`relative min-h-[240px] w-full overflow-hidden bg-[#1e293b] lg:col-span-5 lg:min-h-[340px] ${
                  sector.imageOnRight ? "order-1 lg:order-2" : "order-1"
                }`}
              >
                <Image
                  src={sector.image}
                  alt={sector.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />

                <span
                  className="pointer-events-none absolute top-4 left-4 text-4xl font-extrabold leading-none tracking-[-0.04em] text-white/45 select-none sm:text-[42px]"
                  aria-hidden="true"
                >
                  {sector.number}
                </span>
              </div>
            );

            const contentPanel = (
              <div
                className={`flex flex-col justify-between p-6 sm:p-7 lg:col-span-7 ${
                  sector.imageOnRight ? "order-2 lg:order-1" : "order-2"
                }`}
              >
                <div>
                  {/* Sector badge */}
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-md shadow-2xs ${sector.accentIconBg} ${sector.accentIconText}`}
                    >
                      <Icon
                        className="h-3.5 w-3.5 stroke-[2.2]"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#9d175d]">
                      {sector.badgeLabel}
                    </span>
                  </div>

                  {/* Title & summary */}
                  <h3 className="mt-2.5 text-xl font-extrabold leading-snug tracking-[-0.02em] text-[#0c1438] sm:text-[22px]">
                    {sector.title}
                  </h3>

                  <p className="mt-1 text-[12.5px] leading-[1.55] text-[#4b5563]">
                    {sector.description}
                  </p>

                  {/* Two inner detail boxes: Priorities & Services */}
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className={`rounded-xl p-3.5 ${sector.subCardBg}`}>
                      <p
                        className={`text-[9px] font-extrabold uppercase tracking-[0.14em] ${sector.subCardHeadingText}`}
                      >
                        {sector.prioritiesTitle}
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {sector.priorities.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-[11px] leading-[1.4] text-[#334155]"
                          >
                            <Check
                              className={`mt-0.5 h-3 w-3 shrink-0 stroke-[2.5] ${sector.priorityCheckText}`}
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`rounded-xl p-3.5 ${sector.subCardBg}`}>
                      <p
                        className={`text-[9px] font-extrabold uppercase tracking-[0.14em] ${sector.subCardHeadingText}`}
                      >
                        {sector.servicesTitle}
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {sector.services.map((service) => (
                          <li
                            key={service}
                            className="flex items-start gap-2 text-[11px] leading-[1.4] text-[#334155]"
                          >
                            <CircleCheck
                              className={`mt-0.5 h-3 w-3 shrink-0 stroke-[2.2] ${sector.serviceCheckText}`}
                              aria-hidden="true"
                            />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Advisory disclaimer callout */}
                  <div className="mt-3.5 flex items-start gap-2 rounded-lg border border-[#f5e4bc] bg-[#fff9eb] px-3 py-2 text-[10.5px] leading-[1.45] text-[#854d0e]">
                    <ShieldAlert
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 stroke-[2.2] text-[#b45309]"
                      aria-hidden="true"
                    />
                    <span>{sector.note}</span>
                  </div>
                </div>

                {/* Primary magenta action button */}
                <div className="mt-4">
                  <Link
                    href={sector.href}
                    className="inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#e2187d] to-[#c91485] px-5 text-[12px] font-semibold text-white shadow-[0_6px_18px_rgba(226,24,125,0.28)] transition hover:brightness-110"
                  >
                    <span>{sector.ctaLabel}</span>
                    <ChevronRight
                      className="h-3.5 w-3.5 shrink-0 stroke-[2.5]"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            );

            return (
              <article
                key={sector.number}
                className="grid grid-cols-1 overflow-hidden rounded-3xl border border-[#eaecf4] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.045)] lg:grid-cols-12"
              >
                {imagePanel}
                {contentPanel}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
