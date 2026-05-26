
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

const resourceLinks: FooterLink[] = [
  { id: "zoiko-res-bt", label: "BT Broadband", href: "/bt-broadband" },
  { id: "zoiko-res-ee", label: "EE Mobile", href: "/ee-mobile-plans" },
  { id: "zoiko-res-landlines", label: "Landlines", href: "#" },
  { id: "zoiko-res-reseller", label: "Become a Reseller", href: "/become-a-reseller" },
];

const companyLinks: FooterLink[] = [
  { id: "zoiko-co-about", label: "About Us", href: "#" },
  { id: "zoiko-co-careers", label: "Careers", href: "#" },
  { id: "zoiko-co-partner", label: "Partner Programme", href: "#" },
  { id: "zoiko-co-news", label: "News & Blogs", href: "#" },
  { id: "zoiko-co-faqs", label: "FAQs", href: "/faqs" },
];

const legalLinks: FooterLink[] = [
  { id: "zoiko-leg-privacy", label: "Privacy and Policy", href: "#" },
  { id: "zoiko-leg-terms", label: "Terms and Conditions", href: "#" },
  { id: "zoiko-leg-vulnerability", label: "Vulnerability Policy", href: "#" },
  { id: "zoiko-leg-slavery", label: "Modern Slavery Policy", href: "#" },
  { id: "zoiko-leg-esg", label: "ESG Policy", href: "#" },
  { id: "zoiko-leg-cookies", label: "Cookies Policies", href: "#" },
];

const socials: Social[] = [
  {
    id: "zoiko-social-facebook",
    label: "Facebook",
    href: "#",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="22"
        height="22"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    id: "zoiko-social-twitter",
    label: "X (Twitter)",
    href: "#",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="22"
        height="22"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: "zoiko-social-youtube",
    label: "YouTube",
    href: "#",
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
    ),
  },
  {
    id: "zoiko-social-linkedin",
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="22"
        height="22"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    id: "zoiko-social-instagram",
    label: "Instagram",
    href: "#",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="22"
        height="22"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

type FooterColumnProps = {
  heading: string;
  links: FooterLink[];
};

function FooterColumn({ heading, links }: FooterColumnProps) {
  return (
    <div className="flex min-w-[140px] flex-col">
      <h3 className="mb-5 text-base md:text-lg font-bold tracking-[0.01em] text-white">
        {heading}
      </h3>
      <ul className="flex flex-col gap-3.5">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className="inline-block text-sm md:text-base font-normal leading-snug text-white/90 transition-colors hover:text-white hover:underline hover:underline-offset-[3px]"
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
    <footer className="w-full bg-[#7b2d8b] font-sans text-white dark:bg-neutral-950">
      {/* Main Row */}
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-12 md:py-16 lg:flex-row lg:items-start lg:gap-0">
        {/* Brand Block */}
        <div className="flex w-full flex-col items-start lg:w-[280px] lg:shrink-0 lg:pr-5 xl:w-[340px]">
          <div className="mb-5">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Zoiko Telecom"
                width={180}
                height={50}
                className="block h-auto w-[180px]"
              />
            </Link>
          </div>

          <p className="m-0 mb-6 max-w-[260px] text-xs md:text-sm font-normal uppercase leading-[1.7] tracking-[0.04em] text-white">
            Empowering connections with cutting-edge telecom solutions across the UK.
          </p>

          {/* Social Icons */}
          <div className="mt-2 flex flex-row items-center flex-wrap gap-3.5">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border-2 border-white/20 bg-white/15 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/30 dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/20"
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Nav Columns */}
        <nav
          aria-label="Footer Navigation"
          className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 lg:flex lg:flex-1 lg:justify-between"
        >
          <FooterColumn heading="Resources" links={resourceLinks} />
          <FooterColumn heading="Company" links={companyLinks} />
          <FooterColumn heading="Legal" links={legalLinks} />
        </nav>
      </div>

      {/* Divider */}
      <div className="mx-auto h-px w-[calc(100%-48px)] max-w-[1200px] bg-white/25 dark:bg-white/15" />

      {/* Bottom Bar */}
      <div className="mx-auto max-w-[1200px] px-6 py-5 text-center md:py-6">
        <p className="m-0 text-sm leading-6 tracking-[0.01em] text-white/85 md:text-base">
          © 2026 Zoiko Telecom Ltd registered in England and Wales (No. 15021457) | Information Commissioner&apos;s Office Registration Number: ZB585887 | VAT Registration Number: 465 1110 23 | Authorised Reseller for BT Wholesale | All rights reserved.
        </p>
      </div>
    </footer>
  );
}

