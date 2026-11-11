import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Handshake,
  Headphones,
  Info,
  Laptop,
  Layers,
  Mail,
  MapPin,
  Network,
  Phone,
  Smartphone,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import {
  FOOTER_BOTTOM_SECTIONS,
  FOOTER_CONTACT,
  FOOTER_LEGAL,
  FOOTER_POLICY_LINKS,
  FOOTER_SOCIALS,
  FOOTER_TAGLINE,
  FOOTER_TOP_SECTIONS,
  type NavSection,
} from "@/lib/navigation";

const ICONS: Record<NavSection["icon"], LucideIcon> = {
  smartphone: Smartphone,
  wifi: Wifi,
  phone: Phone,
  briefcase: Briefcase,
  network: Network,
  laptop: Laptop,
  headphones: Headphones,
  info: Info,
  handshake: Handshake,
  layers: Layers,
};

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2H21.5l-7.19 8.22L22.75 22h-6.62l-5.18-6.77L4.99 22H1.73l7.69-8.8L1.25 2h6.79l4.68 6.19L18.244 2Zm-1.16 18h1.83L6.99 3.9H5.03L17.084 20Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  x: XIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
} as const;

function FooterSection({ section }: { section: NavSection }) {
  const Icon = ICONS[section.icon];
  return (
    <div className="px-6 pb-8 pt-6 sm:px-5 lg:pb-10">
      <Link
        href={section.href}
        className="flex min-h-[40px] items-center gap-3 text-sm font-bold leading-tight text-white"
      >
        <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        {section.title}
      </Link>
      <span
        aria-hidden="true"
        className="mt-3 block h-[3px] w-6 bg-[#e6007e]"
      />
      <ul className="mt-5 space-y-3">
        {section.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm leading-5 text-white/75 transition-colors hover:text-white"
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
    <footer className="relative w-full overflow-hidden bg-[#0a0e4a] text-white">
      {/* Backgrounds */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_100%_45%,rgba(168,40,170,0.45),transparent_45%),radial-gradient(ellipse_at_0%_0%,rgba(40,50,170,0.45),transparent_50%),linear-gradient(180deg,#0b1050_0%,#0a0e4a_60%,#0c0f55_100%)]"
      />
      {/* Top glow line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-8 h-px bg-gradient-to-r from-transparent via-[#6d5cff] to-transparent shadow-[0_0_14px_3px_rgba(109,92,255,0.7)]"
      />
      {/* Bottom wave */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-[110px] hidden h-[110px] w-full lg:block"
        fill="none"
      >
        <path
          d="M0 90 C240 20 420 20 700 80 C980 140 1180 80 1440 40"
          stroke="#a855f7"
          strokeWidth="2"
          strokeOpacity="0.8"
        />
        <path
          d="M0 100 C240 40 420 40 700 95 C980 150 1180 100 1440 58"
          stroke="#ff2e93"
          strokeWidth="2"
          strokeOpacity="0.7"
        />
        <path
          d="M0 80 C240 10 420 10 700 66 C980 126 1180 62 1440 24"
          stroke="#4f8bff"
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />
      </svg>

      <div className="relative mx-auto max-w-[1300px] px-6 pt-14 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-[22%_78%]">
          {/* Brand column */}
          <div className="pb-10 lg:pr-8 lg:pt-2">
            <Link href="/" aria-label="Zoiko Telecom home">
              <Image
                src="/image/logo.png"
                alt="Zoiko Telecom"
                width={282}
                height={123}
                className="h-auto w-[170px]"
              />
            </Link>

            <p className="mt-6 max-w-[170px] text-base leading-6 text-white">
              {FOOTER_TAGLINE}
            </p>
            <span
              aria-hidden="true"
              className="mt-5 block h-0.5 w-full max-w-[155px] bg-gradient-to-r from-[#e6007e] via-[#8b5cf6] to-[#3b82f6]"
            />

            <div className="mt-7 flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <address className="text-sm not-italic leading-6 text-white/85">
                <strong className="block text-base font-bold text-white">
                  {FOOTER_CONTACT.addressTitle}
                </strong>
                {FOOTER_CONTACT.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <Link
              href={FOOTER_CONTACT.phone.href}
              className="mt-6 flex items-center gap-3 text-sm text-white/90"
            >
              <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
              {FOOTER_CONTACT.phone.label}
            </Link>

            <Link
              href={FOOTER_CONTACT.email.href}
              className="mt-5 flex items-center gap-3 text-sm text-white/90"
            >
              <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
              {FOOTER_CONTACT.email.label}
            </Link>

            <div className="mt-6 w-full max-w-[155px] border-t border-white/15 pt-6">
              <ul className="flex max-w-[155px] flex-wrap gap-3">
                {FOOTER_SOCIALS.map((social) => {
                  const Icon = SOCIAL_ICONS[social.id];
                  return (
                    <li key={social.id}>
                      <a
                        href={social.href}
                        aria-label={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Link grid */}
          <div className="border-white/15 lg:border-l">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-white/15">
              {FOOTER_TOP_SECTIONS.map((section) => (
                <FooterSection key={section.id} section={section} />
              ))}
            </div>
            <div className="grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-white/15">
              {FOOTER_BOTTOM_SECTIONS.map((section) => (
                <FooterSection key={section.id} section={section} />
              ))}
            </div>
          </div>
        </div>

        {/* Policies */}
        <div className="mt-24 border-t border-white/15 lg:mt-36">
          <ul className="flex flex-wrap items-center justify-center py-5">
            {FOOTER_POLICY_LINKS.map((link) => (
              <li
                key={link.label}
                className="border-white/20 px-5 py-1 text-sm text-white/85 lg:border-r lg:last:border-r-0"
              >
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="border-t border-white/15 pb-8 pt-5 text-center">
          {FOOTER_LEGAL.map((line) => (
            <p key={line} className="text-sm leading-6 text-white/60">
              {line}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}
