import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ConnectivityThatHelpsBanner() {
  return (
    <section
      id="connectivity-cta-banner"
      className="relative w-full overflow-hidden bg-[#090314] px-4 py-12 text-white antialiased sm:px-6 lg:py-16"
    >
      {/* Ambient Deep Violet & Magenta Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[8%] h-72 w-72 rounded-full bg-[#9D1763]/45 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 left-[18%] h-64 w-64 rounded-full bg-[#3B1278]/35 blur-[110px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1300px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">
        {/* Left: Headline & Subtitle */}
        <div className="max-w-[860px]">
          <h2 className="text-[32px] font-black leading-[1.12] tracking-[-0.025em] text-white sm:text-[42px]">
            Connectivity that helps you{" "}
            <span className="font-bold italic text-[#F4A6CD]">do what</span>
            <br />
            <span className="font-bold italic text-[#F4A6CD]">matters.</span>
          </h2>

          <p className="mt-3.5 text-[13px] font-normal text-white/65 sm:text-[14px]">
            Explore our services, get help, or talk to our team.
          </p>
        </div>

        {/* Right: Stacked Action Buttons */}
        <div className="flex w-full flex-col gap-2.5 sm:w-[228px] lg:shrink-0">
          <Link
            href="/services"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#E41976] px-5 py-3 text-[12px] font-bold text-white shadow-[0_8px_24px_rgba(228,25,118,0.42)] transition-colors hover:bg-[#cc1468]"
          >
            <span>Explore our services</span>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-lg border border-white/25 bg-[#12091E]/70 px-5 py-2.5 text-[12px] font-bold text-white transition-colors hover:border-white/45 hover:bg-white/10"
          >
            Contact us
          </Link>

          <Link
            href="/help"
            className="inline-flex w-full items-center justify-center rounded-lg border border-white/20 bg-[#12091E]/55 px-5 py-2.5 text-[12px] font-bold text-white/95 transition-colors hover:border-white/40 hover:bg-white/10"
          >
            Get help
          </Link>
        </div>
      </div>
    </section>
  );
}
