import Link from "next/link";
import { Power } from "lucide-react";

const bannerContent = {
  id: "power-and-connectivity",
  heading: "Before anything else: power and connectivity",
  description:
    "A digital home phone usually stops working in a power cut or if your internet goes down. If you depend on your landline for emergency calls or a care alarm, tell us first.",
  cta: {
    label: "Get help first",
    href: "/support",
  },
} as const;

export default function BeforeAnythingElsePowerConnectivityBanner() {
  return (
    <section
      id={bannerContent.id}
      className="w-full bg-[#1e0836] px-4 py-8 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-[1120px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        {/* Left amber power badge + safety message */}
        <div className="flex items-start gap-4 sm:items-center">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ffc25c] text-[#1e0836] shadow-[0_6px_18px_rgba(255,194,92,0.22)]">
            <Power className="h-5 w-5 stroke-[2.3]" aria-hidden="true" />
          </div>

          <div>
            <h2 className="text-[16px] font-extrabold leading-snug tracking-[-0.015em] text-white sm:text-[17px]">
              {bannerContent.heading}
            </h2>
            <p className="mt-1 max-w-[740px] text-[11.5px] leading-[1.55] text-white/75 sm:text-[12px]">
              {bannerContent.description}
            </p>
          </div>
        </div>

        {/* Right secondary ghost CTA */}
        <div className="shrink-0">
          <Link
            href={bannerContent.cta.href}
            className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg border border-white/25 bg-[#2a1244]/80 px-4 text-[11.5px] font-semibold text-white transition hover:border-white/45 hover:bg-white/[0.1]"
          >
            {bannerContent.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
