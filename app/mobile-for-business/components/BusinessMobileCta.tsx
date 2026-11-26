import Link from "next/link";
import { ChevronRight } from "lucide-react";

const bannerContent = {
  headingPrefix: "Let’s get your team ",
  headingAccent: "connected",
  description:
    "Tell us about your lines, devices and travel. There’s no commitment from an enquiry.",
  primary: {
    label: "Discuss business mobile",
    href: "/contact",
  },
  secondary: {
    label: "Existing customer help",
    href: "/support",
  },
} as const;

export default function BusinessMobileCta() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0c071c] bg-[radial-gradient(ellipse_55%_95%_at_92%_12%,rgba(131,20,88,0.62)_0%,rgba(66,13,56,0.28)_48%,transparent_78%),radial-gradient(ellipse_50%_80%_at_12%_92%,rgba(34,20,78,0.65)_0%,transparent_70%),linear-gradient(115deg,#0f0a24_0%,#140921_55%,#2b0b28_100%)] px-4 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1120px] flex-col items-stretch justify-between gap-8 md:flex-row md:items-center">
        {/* Left heading & subtext */}
        <div className="max-w-[660px]">
          <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-white sm:text-4xl lg:text-[42px] lg:leading-[1.12]">
            {bannerContent.headingPrefix}
            <span className="font-semibold italic text-[#f3a8cc]">
              {bannerContent.headingAccent}
            </span>
          </h2>

          <p className="mt-2.5 text-[14px] leading-[1.6] text-white/65 sm:text-[15px]">
            {bannerContent.description}
          </p>
        </div>

        {/* Right stacked buttons */}
        <div className="flex w-full shrink-0 flex-col gap-3 md:w-[272px]">
          <Link
            href={bannerContent.primary.href}
            className="inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-gradient-to-r from-[#e2187d] to-[#c91485] px-5 text-[13.5px] font-semibold text-white shadow-[0_8px_24px_rgba(226,24,125,0.45)] transition hover:brightness-110"
          >
            <span>{bannerContent.primary.label}</span>
            <ChevronRight
              className="h-4 w-4 shrink-0 stroke-[2.5]"
              aria-hidden="true"
            />
          </Link>

          <Link
            href={bannerContent.secondary.href}
            className="inline-flex h-12 w-full items-center justify-center whitespace-nowrap rounded-lg border border-white/25 bg-white/[0.03] px-5 text-[13.5px] font-semibold text-white/90 transition hover:border-white/45 hover:bg-white/[0.08]"
          >
            {bannerContent.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
