import React from "react";
import Link from "next/link";
import { ChevronRight, Hash, Phone, Send } from "lucide-react";

const ROUTES = [
  {
    eyebrow: "Business",
    title: "Get business advice",
    text: "For organisations that call abroad often.",
    link: { label: "Talk to our team", href: "#ask-about-international-calling" },
    bg: "bg-gradient-to-br from-[#E11D74] to-[#9B2FC9]",
  },
  {
    eyebrow: "Existing customer",
    title: "Help with charges",
    text: "Questions about your plan or bill.",
    link: { label: "Contact billing support", href: "/contact" },
    bg: "bg-gradient-to-br from-[#3D5AFE] to-[#7B3FE4]",
  },
  {
    eyebrow: "Related",
    title: "Business Voice (VoIP)",
    text: "Calling for your whole team.",
    link: { label: "Explore", href: "/landlines-business-voice" },
    bg: "bg-gradient-to-br from-[#0B1445] to-[#2A1A6E]",
  },
] as const;

const RELATED_PAGES = [
  { title: "Virtual Numbers", text: "Numbers that route to you", href: "/landlines-virtual-numbers", icon: Hash },
  { title: "Mobile roaming", text: "Using your mobile abroad", href: "/roaming-international", icon: Send },
  { title: "Home Phone", text: "Digital landlines explained", href: "/landlines-home-phone", icon: Phone },
] as const;

export default function RelatedHelp() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
        {ROUTES.map((route) => (
          <Link
            key={route.title}
            href={route.link.href}
            className={`group rounded-3xl p-7 text-white shadow-[0_12px_30px_rgba(17,24,60,0.12)] transition-transform hover:-translate-y-0.5 ${route.bg}`}
          >
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-white/80">{route.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-extrabold">{route.title}</h2>
            <p className="mt-3 text-sm text-white/85 sm:text-base">{route.text}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold sm:text-base">
              {route.link.label}
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} aria-hidden="true" />
            </span>
          </Link>
        ))}

        {RELATED_PAGES.map(({ title, text, href, icon: Icon }) => (
          <Link
            key={title}
            href={href}
            className="flex items-center gap-4 rounded-2xl border border-[#E6E9F2] bg-white p-6 shadow-[0_10px_30px_rgba(17,24,60,0.06)] transition-colors hover:border-[#F7C6DD]"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#E11D74] to-[#8E37E8] text-white">
              <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-base font-extrabold text-[#11183C]">{title}</span>
              <span className="mt-1 block text-sm text-[#4B5375]">{text}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
