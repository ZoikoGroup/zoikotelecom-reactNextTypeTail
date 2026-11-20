import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const IMG = "/Images/iot-&-connectivity-remote-monitoring";

const OPTIONS = [
  {
    title: "New to Zoiko",
    text: "Tell us about your monitoring project. No account or commitment is needed.",
    cta: "Start an enquiry",
    href: "#monitoring-enquiry",
    image: "new-to-zoiko.webp",
    alt: "Aerial view of solar panels in a green field",
  },
  {
    title: "Existing business customer",
    text: "Ask about adding monitoring connectivity. We’ll confirm your account details safely — we don’t assume anything from this form.",
    cta: "Contact our business team",
    href: "/contact",
    image: "existing-customer.webp",
    alt: "Analytics charts on a screen",
  },
] as const;

export default function StartingPoint() {
  return (
    <section className="w-full bg-[#F5F6FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Where are you starting from?"
          title="New enquiry or existing customer"
          className="max-w-3xl"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {OPTIONS.map(({ title, text, cta, href, image, alt }) => (
            <article
              key={title}
              className="grid grid-cols-[120px_1fr] overflow-hidden rounded-[22px] border border-[#E6E9F2] bg-white shadow-[0_12px_30px_rgba(17,24,60,0.07)] sm:grid-cols-[200px_1fr]"
            >
              <div className="relative min-h-[186px]">
                <Image src={`${IMG}/${image}`} alt={alt} fill sizes="200px" className="object-cover" />
              </div>
              <div className="flex flex-col p-5 sm:p-6">
                <h3 className="text-lg font-bold text-[#11183C] sm:text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5375]">{text}</p>
                <Link
                  href={href}
                  className="mt-auto inline-flex w-fit items-center gap-3 pt-4 text-sm text-[#11183C] sm:text-base"
                >
                  <span className="underline underline-offset-4">{cta}</span>
                  <ChevronRight className="h-4 w-4 text-[#F472B6]" strokeWidth={2.5} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
