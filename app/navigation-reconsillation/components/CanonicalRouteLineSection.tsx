import Image from "next/image";
import {
  AlertTriangle,
  Check,
  GitBranch,
  KeyRound,
  PenLine,
  ShieldCheck,
  Upload,
} from "lucide-react";

const sectionContent = {
  step: "04",
  eyebrow: "ROUTE CONTROLS",
  headingPrefix: "The canonical ",
  headingAccent: "route line",
  description:
    "The v6 register as recorded on 10 November 2026 — not a new live validation. Final route-owner sign-off is mandatory.",
} as const;

interface RouteNode {
  code: string;
  path?: string;
  title?: string;
  description: string;
}

const leftRouteColumn: readonly RouteNode[] = [
  {
    code: "R00",
    path: "/",
    description: "Home / services overview",
  },
  {
    code: "R01",
    path: "/ee-mobile-plans",
    description: "Mobile plans",
  },
  {
    code: "R02",
    path: "/bt-broadband",
    description: "Broadband",
  },
  {
    code: "R03",
    path: "/landlines",
    description: "Landlines",
  },
  {
    code: "R04",
    path: "/landline-business",
    description: "Digital line configurator",
  },
  {
    code: "R05",
    path: "/business-solutions",
    description: "Business service enquiries",
  },
  {
    code: "R06",
    path: "/accessories",
    description: "Catalogue shell; capability gate",
  },
] as const;

const rightRouteColumn: readonly RouteNode[] = [
  {
    code: "R07",
    path: "/phone-equipment",
    description: "Catalogue shell; capability gate",
  },
  {
    code: "R08",
    path: "/about-us",
    description: "Company information",
  },
  {
    code: "R09",
    path: "/faqs",
    description: "Help centre / FAQs",
  },
  {
    code: "R10",
    path: "/contact",
    description: "Verified contact intent only",
  },
  {
    code: "R11",
    path: "/become-a-reseller",
    description: "Partner programme",
  },
  {
    code: "R12",
    path: "/blogs-news",
    description: "News and insights",
  },
  {
    code: "R13",
    title: "Approved policy register",
    description: "Resolve policy-specific paths; no fabricated link",
  },
] as const;

const routeFootnote =
  "Paths are relative to https://zoikotelecom.com. R13 resolves policy-specific paths — no fabricated link.";

const publishGates = [
  {
    label: "DRAFT",
    icon: PenLine,
    badgeClass: "bg-[#6366f1] text-white",
  },
  {
    label: "DESIGN_APPROVED",
    icon: Check,
    badgeClass: "bg-[#8b5cf6] text-white",
  },
  {
    label: "MAPPED",
    icon: GitBranch,
    badgeClass: "bg-[#a855f7] text-white",
  },
  {
    label: "VERIFIED",
    icon: ShieldCheck,
    badgeClass: "bg-[#d946ef] text-white",
  },
  {
    label: "RELEASE_APPROVED",
    icon: KeyRound,
    badgeClass: "bg-[#ec4899] text-white",
  },
  {
    label: "PUBLISHED",
    icon: Upload,
    badgeClass: "bg-[#10b981] text-white",
  },
] as const;

const stateMachineCard = {
  image: "/Images/nav/7.png",
  alt: "Aerial view of tall city skyscrapers and urban skyline at daylight",
  eyebrow: "PUBLICATION STATE MACHINE",
  heading: "Six gates to publish",
  holdText: "Any failed or expired check → HOLD",
  holdFootnote:
    "HOLD suppresses the link across header, footer, search, sitemap and deep-link discovery.",
} as const;

function RouteColumnList({ items }: { items: readonly RouteNode[] }) {
  return (
    <ol className="relative space-y-3.5">
      {items.map((node, index) => {
        const isLast = index === items.length - 1;

        return (
          <li key={node.code} className="relative flex items-start gap-3.5">
            {/* Vertical connecting line between route nodes */}
            {!isLast && (
              <span
                className="pointer-events-none absolute left-[15px] top-[30px] h-[calc(100%+4px)] w-[2px] bg-[#e9d5ff]"
                aria-hidden="true"
              />
            )}

            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#7c3aed] bg-white text-[10px] font-extrabold text-[#4c1d95]">
              {node.code}
            </span>

            <div className="min-w-0 flex-1 pt-0.5">
              {node.path ? (
                <code className="inline-block rounded-md bg-[#f5f3ff] px-2 py-0.5 font-mono text-[11px] font-bold text-[#7c3aed]">
                  {node.path}
                </code>
              ) : (
                <p className="text-[12px] font-extrabold leading-snug text-[#0c1438]">
                  {node.title}
                </p>
              )}

              <p className="mt-1 text-[11.5px] leading-[1.45] text-[#4b5563]">
                {node.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default function CanonicalRouteLineSection() {
  return (
    <section
      id="route-controls"
      className="w-full bg-[#F5F6FB] px-4 py-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Left-aligned section header */}
        <div>
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="italic text-[#e093b9]">{sectionContent.step}</span>
            <span className="text-[#9d175d]">{sectionContent.eyebrow}</span>
          </p>

          <h2 className="mt-2.5 text-3xl font-extrabold tracking-[-0.025em] text-[#0c1438] sm:text-[36px]">
            {sectionContent.headingPrefix}
            <span className="font-semibold italic text-[#b81d78]">
              {sectionContent.headingAccent}
            </span>
          </h2>

          <p className="mt-2 text-[13.5px] leading-[1.6] text-[#4b5563] sm:text-sm">
            {sectionContent.description}
          </p>
        </div>

        {/* Two-column layout: Left route register card + Right publication state machine */}
        <div className="mt-8 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {/* Left card: R00 - R13 route timeline */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#eaecf4] bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.04)] sm:p-8 lg:col-span-7">
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <RouteColumnList items={leftRouteColumn} />
              <RouteColumnList items={rightRouteColumn} />
            </div>

            <p className="mt-6 border-t border-[#f1f3f9] pt-4 text-[11px] leading-[1.55] text-[#64748b]">
              {routeFootnote}
            </p>
          </div>

          {/* Right card: Dark Publication State Machine */}
          <article className="flex flex-col overflow-hidden rounded-3xl bg-[#060c2c] text-white shadow-[0_14px_34px_rgba(6,12,44,0.2)] lg:col-span-5">
            <div className="relative h-[156px] w-full overflow-hidden bg-[#1e293b]">
              <Image
                src={stateMachineCard.image}
                alt={stateMachineCard.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f472b6]">
                  {stateMachineCard.eyebrow}
                </p>

                <h3 className="mt-1.5 text-[20px] font-extrabold tracking-[-0.015em] text-white">
                  {stateMachineCard.heading}
                </h3>

                <ol className="mt-4 space-y-2.5">
                  {publishGates.map((gate) => {
                    const Icon = gate.icon;

                    return (
                      <li
                        key={gate.label}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5"
                      >
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${gate.badgeClass}`}
                        >
                          <Icon
                            className="h-3.5 w-3.5 stroke-[2.3]"
                            aria-hidden="true"
                          />
                        </span>

                        <span className="font-mono text-[10.5px] font-bold tracking-[0.06em] text-white/95">
                          {gate.label}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between gap-2 rounded-xl bg-[#f43f5e] px-4 py-3 text-[11px] font-extrabold text-white shadow-[0_8px_20px_rgba(244,63,94,0.35)]">
                  <AlertTriangle
                    className="h-4 w-4 shrink-0 stroke-[2.2]"
                    aria-hidden="true"
                  />
                  <span className="text-right">
                    {stateMachineCard.holdText}
                  </span>
                </div>

                <p className="mt-3 text-[10.5px] leading-[1.5] text-white/60">
                  {stateMachineCard.holdFootnote}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
