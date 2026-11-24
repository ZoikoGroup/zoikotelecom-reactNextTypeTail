"use client";

import React, { useState } from "react";
import {
  ClipboardList,
  Map,
  Settings,
  AlertTriangle,
  BarChart3,
  Network,
  Eye,
  Plug,
  SunMedium,
  FileText,
  Plus,
  Minus,
} from "lucide-react";

const FEASIBILITY_STEPS = [
  {
    step: "1",
    title: "Define",
    description: "Your sites, devices, goals and who owns what.",
    image: "/Images/sites/12.png",
    imageAlt: "Team members celebrating project alignment over a laptop",
  },
  {
    step: "2",
    title: "Discover",
    description: "Site readiness, indoor reach, systems and security.",
    image: "/Images/sites/13.png",
    imageAlt: "Engineer inspecting network diagnostics on a monitor",
  },
  {
    step: "3",
    title: "Validate",
    description: "Engineering checks on compatibility and design.",
    image: "/Images/sites/14.png",
    imageAlt: "Structured cabling and network patch panel hardware",
  },
  {
    step: "4",
    title: "Pilot or quote",
    description: "Only if separately approved — nothing is automatic.",
    image: "/Images/sites/15.png",
    imageAlt: "Technical site plans and drawings reviewed at a desk",
  },
] as const;

const READINESS_QUESTIONS = [
  {
    id: "building-type",
    title: "Building type",
    icon: "clipboard",
    details:
      "Whether your estate involves offices, warehouses, campuses, retail spaces, industrial plant or public buildings — and what physical layout constraints apply.",
  },
  {
    id: "sites-geography",
    title: "Sites & geography",
    icon: "map",
    details:
      "Single site or multi-site rollout, regional coverage needs, and whether premises are urban, rural, indoor-heavy or distributed across locations.",
  },
  {
    id: "system-role",
    title: "System role",
    icon: "settings",
    details:
      "How meters, sensors, gateways or site systems fit into your wider operations and which third-party platforms or integrators are involved.",
  },
  {
    id: "criticality",
    title: "Criticality",
    icon: "alert",
    details:
      "Whether connectivity supports monitoring, operational visibility or safety-sensitive workflows that require independent validation and local fallback.",
  },
  {
    id: "data-cadence",
    title: "Data cadence",
    icon: "chart",
    details:
      "Expected message frequency, payload sizes, event bursts and whether telemetry is periodic, threshold-driven or continuous.",
  },
  {
    id: "it-ot-boundaries",
    title: "IT / OT boundaries",
    icon: "network",
    details:
      "How operational technology (OT) and building systems stay separated from corporate IT, including gateway/DMZ placement and access controls.",
  },
  {
    id: "privacy-sensitivity",
    title: "Privacy sensitivity",
    icon: "eye",
    details:
      "Data sensitivity, tenant separation requirements, private addressing or VPN/APN options to review for each deployment.",
  },
  {
    id: "power-resilience",
    title: "Power & resilience",
    icon: "plug",
    details:
      "Mains, battery or backup power arrangements, local behaviour during network drops, and primary vs. backup connectivity options.",
  },
  {
    id: "deployment-maturity",
    title: "Deployment maturity",
    icon: "sun",
    details:
      "Where your site sits in its lifecycle — new-build, retrofit, expansion, relocation or decommissioning — and your current planning stage.",
  },
  {
    id: "commercial-ownership",
    title: "Commercial ownership",
    icon: "file",
    details:
      "Who owns devices, gateways, site platforms and connectivity contracts, plus approval steps before any pilot or commercial quote.",
  },
] as const;

function renderQuestionIcon(
  iconName: (typeof READINESS_QUESTIONS)[number]["icon"],
) {
  const iconClass = "h-3.5 w-3.5 text-[#4F46E5]";
  switch (iconName) {
    case "clipboard":
      return <ClipboardList className={iconClass} strokeWidth={2} />;
    case "map":
      return;
    case "settings":
      return <Settings className={iconClass} strokeWidth={2} />;
    case "alert":
      return <AlertTriangle className={iconClass} strokeWidth={2} />;
    case "chart":
      return <BarChart3 className={iconClass} strokeWidth={2} />;
    case "network":
      return <Network className={iconClass} strokeWidth={2} />;
    case "eye":
      return <Eye className={iconClass} strokeWidth={2} />;
    case "plug":
      return <Plug className={iconClass} strokeWidth={2} />;
    case "sun":
      return <SunMedium className={iconClass} strokeWidth={2} />;
    case "file":
      return <FileText className={iconClass} strokeWidth={2} />;
    default:
      return null;
  }
}

export default function SiteFeasibilitySection() {
  const [openIds, setOpenIds] = useState<readonly string[]>([]);

  const toggleQuestion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="w-full bg-[#F6F8FC] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2B3766]">
            SITE FEASIBILITY
          </p>

          <h2 className="mt-2.5 text-[30px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0B1B48] sm:text-[36px]">
            How a site project moves forward
          </h2>

          <p className="mt-2.5 text-[13.5px] font-normal leading-[1.6] text-[#4A5568] sm:text-[14.5px]">
            Each step only happens once the one before is complete.
          </p>
        </div>

        {/* 4-Step Progression Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {FEASIBILITY_STEPS.map((item) => (
            <div
              key={item.step}
              className="flex flex-col overflow-hidden rounded-[18px] border border-[#EDF1F7] bg-[#FFFFFF] shadow-[0_12px_30px_-10px_rgba(11,27,72,0.08)]"
            >
              <div className="relative h-[132px] w-full overflow-hidden bg-[#1E293B]">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#FFFFFF] text-[11px] font-bold text-[#2563EB] shadow-[0_4px_10px_rgba(11,27,72,0.18)]">
                  {item.step}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-[14.5px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0B1B48]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[11.5px] font-normal leading-[1.5] text-[#4A5568]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Site-readiness questions we'll work through */}
        <div className="mt-12">
          <h3 className="text-[16.5px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0B1B48]">
            Site-readiness questions we&apos;ll work through
          </h3>

          <div className="mt-4 grid grid-cols-1 items-start gap-x-6 gap-y-3.5 md:grid-cols-2 lg:gap-x-7">
            {READINESS_QUESTIONS.map((q) => {
              const isOpen = openIds.includes(q.id);
              return (
                <div
                  key={q.id}
                  className="overflow-hidden rounded-[12px] border border-[#E8ECF4] bg-[#FFFFFF] shadow-[0_6px_20px_-10px_rgba(11,27,72,0.06)] transition-colors hover:border-[#D8E0EE]"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleQuestion(q.id)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-[#EEF2FF]">
                        {renderQuestionIcon(q.icon)}
                      </span>
                      <span className="text-[12.5px] font-bold leading-[1.35] text-[#0B1B48] sm:text-[13px]">
                        {q.title}
                      </span>
                    </span>

                    {isOpen ? (
                      <Minus
                        className="h-3.5 w-3.5 shrink-0 text-[#2563EB]"
                        strokeWidth={2.5}
                      />
                    ) : (
                      <Plus
                        className="h-3.5 w-3.5 shrink-0 text-[#2563EB]"
                        strokeWidth={2.5}
                      />
                    )}
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#F1F5F9] px-4 pb-3.5 pt-2.5 pl-14 text-[12px] font-normal leading-[1.55] text-[#4A5568]">
                      {q.details}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
