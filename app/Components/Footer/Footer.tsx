import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

type FooterLink = {
  id: string;
  label: string;
  href: string;
};

type Social = {
  id: string;
  label: string;
  href: string;
  svg: ReactNode;
};

const servicesLinks: FooterLink[] = [
  { id: "bt", label: "BT Broadband", href: "/bt-broadband" },
  { id: "ee", label: "EE Mobile", href: "/ee-mobile-plans" },
  { id: "iot", label: "IoT Services", href: "#" },
  { id: "voip", label: "VoIP Solutions", href: "#" },
];

const companyLinks: FooterLink[] = [
  { id: "about", label: "About Us", href: "/about-us" },
  // { id: "careers", label: "Careers", href: "#" },
  { id: "partner", label: "Partner Programme", href: "/become-a-reseller" },
  { id: "newsblogs", label: "News & Blogs", href: "/blogs-news" },
  
];

const quickLinks: FooterLink[] = [
  
  { id: "news", label: "News", href: "/blogs-news" },
  { id: "blogs", label: "Blogs", href: "/blogs-news" },
  { id: "faqs", label: "FAQs", href: "/faqs" },
];

const socials: Social[] = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/zoikotelecom/",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/zoiko_telecom/",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        width="16"
        height="16"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "twitter",
    label: "Twitter",
    href: "https://x.com/zoikotelecom",
    svg: (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 1s-4.18 2.64-6.63 2.64A4.48 4.48 0 0 0 8.24 7.7C4.09 7.49 1 4 1 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
),
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@zoikotelecom",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="22"
        height="22"
      >
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.96-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          className="fill-[#7b2d8b] dark:fill-neutral-900"
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
        />
      </svg>
    )
  },
];

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h3 className="mb-8 text-[18px] font-semibold text-white">
        {heading}
      </h3>

      <ul className="space-y-5">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className="text-[16px] text-white/70 transition hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#7B2D8B] text-white">
      <div className="mx-auto max-w-[1120px] px-6 pt-11 pb-4">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Left Side */}
          <div className="lg:w-[320px]">
            <Link href="/">
              <Image
                src="/image/Frame 1707483043.png"
                alt="Zoiko Telecom"
                width={282}
                height={123}
                className="h-auto w-[220px] lg:w-[282px]"
              />
            </Link>

            <h3 className="mt-7 mb-4 text-[18px] font-semibold text-white">
              Follow Us :
            </h3>

            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-3 lg:pl-10">
            <FooterColumn
              heading="Services"
              links={servicesLinks}
            />

            <FooterColumn
              heading="Company"
              links={companyLinks}
            />

            <FooterColumn
              heading="Quick Links"
              links={quickLinks}
            />
          </div>
        </div>

        {/* Policy Row */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[15px] text-white/60">
          <Link href="/terms-and-conditions">
            Terms and Conditions
          </Link>

          <Link href="/vulnerability-policy">
            Vulnerability Policy
          </Link>

          <Link href="/modern-slavery-policy">
            Modern Slavery Policy
          </Link>

          <Link href="/esg-policy">
            ESG Policy
          </Link>

          <Link href="#">
            Zoiko Policies
          </Link>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-white/10" />

        {/* Copyright */}
        <div className="pt-4 text-center">
          <p className="text-[14px] leading-8 text-white/60">
            © 2024 Zoiko Telecom Ltd is Registered in England and Wales
            (No. 15021457) | Information Commissioner's Office
            Registration Number ZB585887
          </p>

          <p className="text-[14px] leading-8 text-white/60">
            All rights reserved | VAT Registration Number: 465 1110 23
          </p>
        </div>
      </div>
    </footer>
  );
}