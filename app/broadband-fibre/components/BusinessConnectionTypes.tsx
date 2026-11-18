import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Check,
  Network,
  Router,
  Server,
  Zap,
  ShieldCheck,
  FileText,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

type TopFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ConnectionCard = {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  badgeTone: string;
  features: readonly string[];
  actionText: string;
  actionHref: string;
};

type ComparisonRow = {
  feature: string;
  fttc: string;
  fttp: string;
  dedicated: string;
  backup: string;
};

const TOP_FEATURES: readonly TopFeature[] = [
  {
    title: "BT Wholesale infrastructure",
    description: "As described on our Business Solutions page",
    icon: Network,
  },
  {
    title: "Every site checked",
    description: "Availability confirmed per premises",
    icon: ShieldCheck,
  },
  {
    title: "Specialist options",
    description: "Static IP and dedicated lines to discuss",
    icon: SlidersHorizontal,
  },
  {
    title: "Clear terms first",
    description: "Costs and contract in writing",
    icon: FileText,
  },
] as const;

const CONNECTION_CARDS: readonly ConnectionCard[] = [
  {
    title: "Business broadband",
    subtitle: "Practical fixed connectivity",
    description: "Day-to-day connectivity for offices and shops.",
    imageSrc: "/Images/brod/2.png",
    imageAlt: "Busy open plan office workspace representing business broadband",
    badgeTone: "bg-[#fdf0f6] text-[#b81d70] border-[#f5cde2]",
    features: [
      "Often shared access, so speeds can vary at busy times",
      "May use part-fibre (FTTC) depending on the site",
      "Router and support confirmed per offer",
    ],
    actionText: "Ask about business broadband",
    actionHref: "/contact",
  },
  {
    title: "Full Fibre (FTTP)",
    subtitle: "Fibre to the premises",
    description: "Fibre all the way to your building, where available.",
    imageSrc: "/Images/brod/3.png",
    imageAlt:
      "Modern interior with desk and window view representing Full Fibre",
    badgeTone: "bg-[#f3f0fc] text-[#6a48d7] border-[#d8d0f6]",
    features: [
      "Can support higher upload speeds",
      "May need installation work at your premises",
      'Only called "full fibre" when it truly reaches the premises',
    ],
    actionText: "Ask about full fibre",
    actionHref: "/contact",
  },
  {
    title: "Dedicated connectivity",
    subtitle: "Specialist enquiry",
    description: "For critical systems and resilience needs.",
    imageSrc: "/Images/brod/4.png",
    imageAlt: "Modern skyscrapers representing dedicated connectivity",
    badgeTone: "bg-[#eaf7ef] text-[#1f9d55] border-[#bbf0cf]",
    features: [
      "A private connection rather than shared access — if confirmed",
      "Speeds, service levels and lead times set in writing",
      "Discussed with a specialist, not ordered online",
    ],
    actionText: "Ask about dedicated connectivity",
    actionHref: "/contact",
  },
] as const;

const COMPARISON_ROWS: readonly ComparisonRow[] = [
  {
    feature: "Shared or dedicated",
    fttc: "Shared",
    fttp: "Usually shared",
    dedicated: "Dedicated, if confirmed",
    backup: "Separate second line",
  },
  {
    feature: "Upload speed",
    fttc: "Lower than download",
    fttp: "Can be higher",
    dedicated: "Can match download, if specified",
    backup: "Depends on the service",
  },
  {
    feature: "Availability",
    fttc: "Widely available",
    fttp: "Where fibre reaches the building",
    dedicated: "Survey and lead time",
    backup: "Depends on the site",
  },
  {
    feature: "Good for",
    fttc: "Everyday office use",
    fttp: "Cloud, video and growing teams",
    dedicated: "Critical systems",
    backup: "Keeping running in an outage",
  },
  {
    feature: "Confirm with us",
    fttc: "Speeds at your line",
    fttp: "Installation needs",
    dedicated: "Service levels and cost",
    backup: "Failover and cost",
  },
] as const;

export default function BusinessConnectionTypes() {
  return (
    <section className="w-full bg-white py-16 text-[#131138] sm:py-20">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        {/* Top Feature Badges Row */}
        <div className="grid grid-cols-1 gap-4 rounded-[24px] border border-[#ecebf4] bg-[#faf9fd] p-6 sm:grid-cols-2 lg:grid-cols-4">
          {TOP_FEATURES.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#e6007e] shadow-xs border border-[#ecebf4]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.06em] text-[#131138]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-4 text-[#545275]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Header */}
        <div className="mt-16 text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#545275]">
            Connection types
          </p>
          <h2 className="mt-2.5 text-3xl font-black tracking-tight text-[#131138] sm:text-4xl lg:text-[42px]">
            Three ways to connect your business
          </h2>
          <p className="mx-auto mt-3 max-w-[500px] text-sm text-[#545275] sm:text-base">
            Each is a different kind of service. What&rsquo;s possible depends
            on your premises.
          </p>
        </div>

        {/* 3 Connection Cards Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {CONNECTION_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-between overflow-hidden rounded-[28px] border border-[#ecebf4] bg-white shadow-[0_16px_40px_rgba(19,17,56,0.06)]"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-[200px] w-full bg-[#f0f1f6]">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 380px, 100vw"
                    className="object-cover"
                  />
                </div>

                {/* Content Area */}
                <div className="p-7 sm:p-8">
                  <span
                    className={`inline-flex rounded-md border px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.08em] ${card.badgeTone}`}
                  >
                    {card.subtitle}
                  </span>

                  <h3 className="mt-4 text-2xl font-black tracking-tight text-[#131138]">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#545275]">
                    {card.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {card.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-3 text-xs font-medium text-[#2c2a4a]"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#e6007e]"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="border-t border-[#f0f1f6] px-7 py-5 sm:px-8">
                <Link
                  href={card.actionHref}
                  className="inline-flex items-center gap-1 text-sm font-extrabold text-[#e6007e] transition hover:text-[#c41478]"
                >
                  {card.actionText}
                  <span aria-hidden="true">&rsaquo;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Compare Connection Types Section */}
        <div className="mt-24">
          <div className="text-center">
            <h3 className="text-2xl font-black tracking-tight text-[#131138] sm:text-3xl">
              Compare connection types
            </h3>
          </div>

          <div className="mt-10 overflow-hidden rounded-[28px] border border-[#ecebf4] bg-white shadow-[0_16px_40px_rgba(19,17,56,0.06)]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#f3f0fc] via-[#faf8fd] to-[#fdf0f6] text-[#131138]">
                    <th className="py-5 pl-7 pr-6 text-xs font-black uppercase tracking-[0.08em] w-1/5">
                      Feature
                    </th>
                    <th className="py-5 px-5 text-xs font-black uppercase tracking-[0.08em] w-1/5">
                      Part-fibre (FTTC)
                      <span className="block text-[10px] font-normal text-[#545275]">
                        Fibre to the cabinet
                      </span>
                    </th>
                    <th className="py-5 px-5 text-xs font-black uppercase tracking-[0.08em] w-1/5">
                      Full Fibre (FTTP)
                      <span className="block text-[10px] font-normal text-[#545275]">
                        Fibre to the premises
                      </span>
                    </th>
                    <th className="py-5 px-5 text-xs font-black uppercase tracking-[0.08em] w-1/5">
                      Dedicated line
                      <span className="block text-[10px] font-normal text-[#545275]">
                        Specialist service
                      </span>
                    </th>
                    <th className="py-5 pl-5 pr-7 text-xs font-black uppercase tracking-[0.08em] w-1/5">
                      Backup connection
                      <span className="block text-[10px] font-normal text-[#545275]">
                        Resilience add-on
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0f1f6] text-xs sm:text-sm">
                  {COMPARISON_ROWS.map((row) => (
                    <tr
                      key={row.feature}
                      className="transition hover:bg-[#fafafc]"
                    >
                      <td className="py-4.5 pl-7 pr-6 font-extrabold text-[#131138]">
                        {row.feature}
                      </td>
                      <td className="py-4.5 px-5 text-[#545275]">{row.fttc}</td>
                      <td className="py-4.5 px-5 text-[#545275]">{row.fttp}</td>
                      <td className="py-4.5 px-5 text-[#545275]">
                        {row.dedicated}
                      </td>
                      <td className="py-4.5 pl-5 pr-7 text-[#545275]">
                        {row.backup}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
