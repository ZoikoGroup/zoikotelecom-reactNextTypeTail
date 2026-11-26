import Image from "next/image";
import {
  AlertTriangle,
  ArrowUp,
  Check,
  Eye,
  FileSearch,
  Pencil,
  ShieldCheck,
} from "lucide-react";

const sectionContent = {
  step: "06",
  eyebrow: "REGISTRY SPECIFICATION",
  headingPrefix: "The registry ",
  headingAccent: "contract",
  description:
    "A controlled editorial configuration — not a new customer-facing application. Only authorised release operators can publish.",
} as const;

interface SchemaFieldLine {
  key: string;
  type: string;
  typeClass: string;
  comment: string;
}

const schemaFields: readonly SchemaFieldLine[] = [
  {
    key: "nav_id",
    type: "UUID",
    typeClass: "text-[#34d399]",
    comment: "// Immutable; distinct from display label; globally unique.",
  },
  {
    key: "menu_key",
    type: "enum",
    typeClass: "text-[#f472b6]",
    comment: "// One of the eight approved top-level families.",
  },
  {
    key: "source_label",
    type: "string",
    typeClass: "text-[#34d399]",
    comment:
      "// Exact recovered evidence text; record source version; never overwrite.",
  },
  {
    key: "public_label",
    type: "string",
    typeClass: "text-[#34d399]",
    comment:
      "// Non-blank; Product signed; accessible name matches visible label.",
  },
  {
    key: "rank",
    type: "integer",
    typeClass: "text-[#60a5fa]",
    comment:
      "// Non-negative; unique within parent and surface; explicit change approval.",
  },
  {
    key: "route_code",
    type: "string",
    typeClass: "text-[#34d399]",
    comment:
      "// R00–R13, G01–G12 or a new approved mapping; no unknown code published.",
  },
  {
    key: "resolved_uri",
    type: "URI",
    typeClass: "text-[#38bdf8]",
    comment:
      "// HTTPS allowlist; check redirects, status, actual content and origin.",
  },
  {
    key: "surfaces",
    type: "set",
    typeClass: "text-[#c084fc]",
    comment:
      "// Header desktop/mobile, footer, search, sitemap; scope explicit.",
  },
  {
    key: "state",
    type: "enum",
    typeClass: "text-[#f472b6]",
    comment:
      "// DRAFT, DESIGN_APPROVED, MAPPED, VERIFIED, RELEASE_APPROVED, PUBLISHED, HOLD.",
  },
  {
    key: "proof_id",
    type: "reference",
    typeClass: "text-[#fbbf24]",
    comment:
      "// Evidence record, test environment and verification time required before release.",
  },
  {
    key: "gate_codes",
    type: "array",
    typeClass: "text-[#c084fc]",
    comment:
      "// All applicable capability, operational and legal gates must pass.",
  },
  {
    key: "approval_refs",
    type: "array",
    typeClass: "text-[#c084fc]",
    comment:
      "// Design, content/route and release signatures; separation of duties.",
  },
  {
    key: "expires_at",
    type: "timestamp",
    typeClass: "text-[#34d399]",
    comment:
      "// Required where evidence has a validity limit; fail closed when expired.",
  },
  {
    key: "revision",
    type: "integer",
    typeClass: "text-[#60a5fa]",
    comment: "// Monotonic; optimistic concurrency rejects stale edits.",
  },
  {
    key: "rollback_ref",
    type: "reference",
    typeClass: "text-[#fbbf24]",
    comment:
      "// Previous signed known-good snapshot; never restore invalid routes.",
  },
] as const;

const dutyBanner = {
  image: "/Images/nav/10.png",
  alt: "Team members reviewing sticky notes and laptops around a desk during separation of duties planning",
  badge: "Separation of duties",
} as const;

const rolesList = [
  {
    title: "Viewer",
    description: "Read only.",
    icon: Eye,
  },
  {
    title: "Editor",
    description: "Edits draft labels and mappings — can’t approve own change.",
    icon: Pencil,
  },
  {
    title: "Product / Legal / Ops",
    description: "Approve within their own domain.",
    icon: ShieldCheck,
  },
  {
    title: "QA",
    description: "Attaches test evidence.",
    icon: Check,
  },
  {
    title: "Release operator",
    description: "Publishes a signed snapshot only.",
    icon: ArrowUp,
  },
  {
    title: "Auditor",
    description: "Reads append-only history.",
    icon: FileSearch,
  },
] as const;

const engineeringNotice = {
  lead: "Engineering",
  rest: " must verify actual role-based access — no live console is assumed.",
} as const;

export default function RegistryContractSection() {
  return (
    <section
      id="registry-contract"
      className="w-full bg-white px-4 py-14 sm:px-8 lg:px-12"
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

        {/* Two-column layout: Left dark schema window + Right duty banner & roles */}
        <div className="mt-8 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {/* Left column: Dark editor window */}
          <div className="flex flex-col overflow-hidden rounded-3xl bg-[#060c2c] text-white shadow-[0_16px_40px_rgba(6,12,44,0.22)] lg:col-span-6">
            {/* Window header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-[#0a123b] px-5 py-3.5">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              </div>

              <span className="font-mono text-[11px] font-medium text-white/70">
                registry.schema - revision draft
              </span>

              <span className="w-10" aria-hidden="true" />
            </div>

            {/* Schema body */}
            <div className="flex-1 px-5 py-5 font-mono text-[11px] leading-[1.62] sm:px-6 sm:text-[11.5px]">
              <p className="text-[#94a3b8]">
                // nav_registry_item — proposed contract, not a live console
              </p>
              <p className="mt-1 text-white/90">{"{"}</p>

              <div className="mt-1 space-y-2 pl-2">
                {schemaFields.map((field) => (
                  <div key={field.key} className="break-words">
                    <span className="text-[#f472b6]">
                      &quot;{field.key}&quot;
                    </span>
                    <span className="text-white/70">: </span>
                    <span className={`font-semibold ${field.typeClass}`}>
                      {field.type}
                    </span>
                    <span className="text-white/70">, </span>
                    <span className="text-[#94a3b8]">{field.comment}</span>
                  </div>
                ))}
              </div>

              <p className="mt-1 text-white/90">{"}"}</p>
            </div>
          </div>

          {/* Right column: Image banner + Role cards + Engineering callout */}
          <div className="flex flex-col justify-between gap-4 lg:col-span-6">
            {/* Top image banner */}
            <div className="relative h-[184px] w-full overflow-hidden rounded-2xl border border-[#eaecf4] bg-[#eef0f6] shadow-[0_6px_20px_rgba(15,23,42,0.04)]">
              <Image
                src={dutyBanner.image}
                alt={dutyBanner.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover object-top"
              />

              <span className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-[#0d1744]/90 px-3 py-1 text-[10.5px] font-bold text-white shadow-sm backdrop-blur-xs">
                {dutyBanner.badge}
              </span>
            </div>

            {/* Six role cards */}
            <div className="space-y-2.5">
              {rolesList.map((role) => {
                const Icon = role.icon;

                return (
                  <div
                    key={role.title}
                    className="flex items-center gap-3.5 rounded-2xl border border-[#eaecf4] bg-white px-4 py-3 shadow-[0_3px_12px_rgba(15,23,42,0.025)]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#d91c81] text-white shadow-xs">
                      <Icon
                        className="h-3.5 w-3.5 stroke-[2.2]"
                        aria-hidden="true"
                      />
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-[13px] font-bold leading-tight text-[#0c1438]">
                        {role.title}
                      </h3>
                      <p className="mt-0.5 text-[11.5px] leading-snug text-[#64748b]">
                        {role.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom amber engineering notice */}
            <div className="flex items-start gap-3 rounded-2xl border border-[#f8dfa8] bg-[#fffaf0] px-4 py-3.5 text-[11.5px] leading-[1.5] text-[#78350f]">
              <AlertTriangle
                className="mt-0.5 h-4 w-4 shrink-0 stroke-[2.2] text-[#d97706]"
                aria-hidden="true"
              />
              <p>
                <strong className="font-bold text-[#92400e]">
                  {engineeringNotice.lead}
                </strong>
                {engineeringNotice.rest}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
