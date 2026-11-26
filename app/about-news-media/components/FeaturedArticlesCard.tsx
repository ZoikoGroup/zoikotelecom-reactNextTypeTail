import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const ARTICLE_TOPICS = [
  "Telecom insights",
  "Broadband and connectivity guides",
  "Digital skills and everyday tech",
];

export default function FeaturedArticlesCard() {
  return (
    <section
      aria-label="Featured articles"
      className="mx-auto w-full max-w-[1120px] px-4 py-8 sm:px-6"
    >
      <div className="grid overflow-hidden rounded-[22px] bg-[#13031E] text-white shadow-[0_20px_50px_rgba(12,2,20,0.28)] md:grid-cols-[44%_56%]">
        {/* Left Visual: Hands Typing on Laptop with Secondary Monitor */}
        <div className="relative min-h-[240px] w-full overflow-hidden bg-[#1D1520] sm:min-h-[290px] md:min-h-[340px]">
          <Image
            src="/Images/news/4.png"
            alt="Hands typing on a laptop keyboard in front of a second monitor"
            fill
            sizes="(min-width: 768px) 460px, 100vw"
            className="object-cover object-left"
          />
          {/* Soft Plum-Dark Vignette Along Right Edge & Bottom */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#13031E]/15 to-[#13031E]/80"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#13031E]/55 via-transparent to-transparent"
          />
        </div>

        {/* Right Editorial Panel */}
        <div className="relative flex flex-col justify-center bg-gradient-to-br from-[#190428] via-[#12021C] to-[#1D042C] px-7 py-8 sm:px-10 sm:py-10">
          {/* Subtle Ambient Magenta Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 right-4 h-44 w-56 rounded-full bg-[#9D174D]/20 blur-2xl"
          />

          <div className="relative z-10 max-w-[460px]">
            {/* Eyebrow */}
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#C874A8]">
              Featured
            </p>

            {/* Headline */}
            <h2 className="mt-2.5 text-[28px] font-extrabold leading-[1.15] tracking-[-0.025em] text-white sm:text-[34px]">
              Explore our latest articles
            </h2>

            {/* Description */}
            <p className="mt-3 text-[13.5px] leading-[1.6] text-white/70">
              Our articles cover telecoms topics, practical guides and updates
              from Zoiko Telecom. Read the full, up-to-date list on our blog.
            </p>

            {/* Topic Bullets with Right Arrows */}
            <ul className="mt-5 space-y-2 text-[13px] font-medium text-white/60">
              {ARTICLE_TOPICS.map((topic) => (
                <li key={topic} className="flex items-center gap-2.5">
                  <ArrowRight
                    className="h-3.5 w-3.5 shrink-0 text-white/45"
                    aria-hidden="true"
                  />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-xl border border-[#7A184C]/80 bg-[#3B0827]/90 px-4 py-2.5 text-[12.5px] font-semibold text-[#E879B9] transition-colors hover:border-[#A82268] hover:bg-[#4D0B33] hover:text-white"
              >
                <span>Go to the blog</span>
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
