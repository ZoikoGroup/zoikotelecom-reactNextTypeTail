import React from "react";
import SectionHeader from "./SectionHeader";

const MOBILE_PATH = [
  { title: "Mobile network", text: "4G / 5G" },
  { title: "SIM or eSIM", text: "Active, compatible plan" },
  { title: "Hotspot or router", text: "Battery or mains" },
] as const;

const FIXED_PATH = [
  { title: "Fibre or fixed line", text: "Separate service" },
  { title: "Wi-Fi router", text: "Often no SIM slot" },
] as const;

const DEVICES = { title: "Your devices", text: "Over local Wi-Fi" } as const;

/** Node box for the desktop SVG diagram. */
function SvgNode({ x, y, title, text }: { x: number; y: number; title: string; text: string }) {
  return (
    <g>
      <rect x={x} y={y} width={196} height={80} rx={16} fill="#FFFFFF" stroke="#E4DDF6" strokeWidth={1.5} />
      <text x={x + 98} y={y + 36} textAnchor="middle" className="fill-[#11183C] text-[14px] font-bold">
        {title}
      </text>
      <text x={x + 98} y={y + 56} textAnchor="middle" className="fill-[#6B7194] text-[12px]">
        {text}
      </text>
    </g>
  );
}

/** Node box for the stacked mobile layout. */
function FlowNode({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-[#E4DDF6] bg-white px-4 py-3 text-center">
      <p className="text-sm font-bold text-[#11183C]">{title}</p>
      <p className="mt-0.5 text-xs text-[#6B7194]">{text}</p>
    </div>
  );
}

function FlowLink({ dashed = false }: { dashed?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`mx-auto block h-5 w-0 border-l-2 ${dashed ? "border-dashed border-[#3B82F6]" : "border-[#E11D74]"}`}
    />
  );
}

export default function HowTheyConnect() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="How they connect"
          title="Mobile internet vs fixed broadband"
          subtitle="Two different paths to the same Wi-Fi."
        />

        <figure className="mt-10 rounded-[24px] border border-[#E6E9F2] bg-white p-4 sm:p-6">
          {/* Desktop diagram */}
          <svg
            viewBox="0 0 1120 300"
            role="img"
            aria-labelledby="connect-diagram-title"
            className="hidden h-auto w-full lg:block"
          >
            <title id="connect-diagram-title">
              Mobile internet runs from the mobile network, through a SIM or eSIM, to a hotspot or router. Fixed
              broadband runs from a fibre or fixed line to a Wi-Fi router. Both share internet with your devices over
              local Wi-Fi.
            </title>

            <text x={0} y={22} className="fill-[#B0135F] text-[11px] font-bold tracking-[0.12em]">
              MOBILE INTERNET
            </text>
            <line x1={196} y1={78} x2={306} y2={78} stroke="#E11D74" strokeWidth={2} />
            <line x1={502} y1={78} x2={612} y2={78} stroke="#E11D74" strokeWidth={2} />
            <path d="M808 78 C870 78 860 158 920 158" fill="none" stroke="#E11D74" strokeWidth={2} />
            {MOBILE_PATH.map((node, i) => (
              <SvgNode key={node.title} x={i * 306} y={38} {...node} />
            ))}

            <text x={0} y={188} className="fill-[#B0135F] text-[11px] font-bold tracking-[0.12em]">
              FIXED BROADBAND
            </text>
            <line x1={196} y1={244} x2={306} y2={244} stroke="#3B82F6" strokeWidth={2} strokeDasharray="6 6" />
            <path
              d="M502 244 H780 C860 244 850 158 920 158"
              fill="none"
              stroke="#3B82F6"
              strokeWidth={2}
              strokeDasharray="6 6"
            />
            {FIXED_PATH.map((node, i) => (
              <SvgNode key={node.title} x={i * 306} y={204} {...node} />
            ))}

            <SvgNode x={920} y={118} {...DEVICES} />
          </svg>

          {/* Mobile / tablet stacked layout */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#B0135F]">Mobile internet</p>
              {MOBILE_PATH.map((node, i) => (
                <React.Fragment key={node.title}>
                  {i > 0 && <FlowLink />}
                  <FlowNode {...node} />
                </React.Fragment>
              ))}
              <FlowLink />
              <FlowNode {...DEVICES} />
            </div>
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#B0135F]">Fixed broadband</p>
              {FIXED_PATH.map((node, i) => (
                <React.Fragment key={node.title}>
                  {i > 0 && <FlowLink dashed />}
                  <FlowNode {...node} />
                </React.Fragment>
              ))}
              <FlowLink dashed />
              <FlowNode {...DEVICES} />
            </div>
          </div>
        </figure>

        {/* 5G ≠ Wi-Fi 6 */}
        <div className="mt-6 grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-[20px] border border-[#E6E9F2] bg-white px-6 py-7 text-center">
            <p className="text-3xl font-extrabold text-[#3B82F6]">5G</p>
            <p className="mt-2 text-sm text-[#4B5375] sm:text-base">
              A <strong className="text-[#11183C]">mobile network</strong> connection — between the router and the
              mast.
            </p>
          </div>
          <span
            aria-label="is not the same as"
            className="mx-auto text-3xl font-extrabold text-[#E11D74]"
          >
            ≠
          </span>
          <div className="rounded-[20px] border border-[#E6E9F2] bg-white px-6 py-7 text-center">
            <p className="text-3xl font-extrabold text-[#7C3AED]">Wi-Fi 6</p>
            <p className="mt-2 text-sm text-[#4B5375] sm:text-base">
              A <strong className="text-[#11183C]">local wireless</strong> standard — between the router and your
              devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
