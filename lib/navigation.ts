export type NavLink = {
  readonly label: string;
  readonly href: string;
};

export type NavSection = {
  readonly id: string;
  readonly title: string;
  readonly icon:
    | "smartphone"
    | "wifi"
    | "phone"
    | "briefcase"
    | "network"
    | "laptop"
    | "headphones"
    | "info"
    | "handshake"
    | "layers";
  readonly href: string;
  readonly links: readonly NavLink[];
};

export const FOOTER_TAGLINE =
  "Connecting people, places and businesses across the UK." as const;

export const FOOTER_CONTACT = {
  addressTitle: "UK Headquarters",
  addressLines: ["35 Berkeley Square,", "London W1J 5BF"],
  phone: { label: "020 8154 4880", href: "tel:02081544880" },
  email: {
    label: "hello@zoikotelecom.com",
    href: "mailto:hello@zoikotelecom.com",
  },
} as const;

export const FOOTER_SOCIALS = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/zoikotelecom/",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/zoiko_telecom/",
  },
  { id: "x", label: "X", href: "https://x.com/zoikotelecom" },
  { id: "linkedin", label: "LinkedIn", href: "#" },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@zoikotelecom",
  },
] as const;

/** Row 1 */
export const FOOTER_TOP_SECTIONS: readonly NavSection[] = [
  {
    id: "mobile",
    title: "Mobile",
    icon: "smartphone",
    href: "/ee-mobile-plans",
    links: [
      { label: "Mobile Plans", href: "/ee-mobile-plans" },
      { label: "Phone & SIM Plans", href: "#" },
      { label: "Multi-line Plans", href: "#" },
      { label: "Roaming & International", href: "/roaming-international" },
      { label: "eSIM", href: "/esim" },
      { label: "Student & Youth Plans", href: "#" },
    ],
  },
  {
    id: "broadband",
    title: "Broadband & Fibre",
    icon: "wifi",
    href: "/bt-broadband",
    links: [
      { label: "Broadband Plans", href: "/bt-broadband" },
      { label: "Full Fibre", href: "/fibre-packages" },
      { label: "Ultrafast Broadband", href: "#" },
      { label: "Home Broadband", href: "#" },
      { label: "Business Fibre", href: "#" },
      { label: "Check Availability", href: "/broadband" },
    ],
  },
  {
    id: "landlines",
    title: "Landlines & Voice",
    icon: "phone",
    href: "/landlines",
    links: [
      { label: "Home Phone", href: "#" },
      { label: "Business Voice", href: "/landline-business" },
      { label: "SIP & VoIP", href: "#" },
      { label: "Virtual Numbers", href: "#" },
      { label: "Call Features", href: "#" },
      { label: "International Calling", href: "#" },
    ],
  },
  {
    id: "business",
    title: "Business",
    icon: "briefcase",
    href: "/business-solutions",
    links: [
      { label: "Business Solutions", href: "/business-solutions" },
      { label: "Connectivity & Cloud", href: "#" },
      { label: "Mobile for Business", href: "#" },
      { label: "Unified Communications", href: "#" },
      { label: "IT & Network Services", href: "#" },
      { label: "Sector Solutions", href: "#" },
    ],
  },
  {
    id: "iot",
    title: "IoT & Connectivity",
    icon: "network",
    href: "#",
    links: [
      { label: "IoT Solutions", href: "#" },
      { label: "SIM for IoT", href: "#" },
      { label: "Fleet & Asset Tracking", href: "#" },
      { label: "Smart Connectivity", href: "#" },
      { label: "Private Networks", href: "#" },
      { label: "IoT Use Cases", href: "#" },
    ],
  },
] as const;

/** Row 2 */
export const FOOTER_BOTTOM_SECTIONS: readonly NavSection[] = [
  {
    id: "devices",
    title: "Devices",
    icon: "laptop",
    href: "/phone-equipment",
    links: [
      { label: "Mobile Phones", href: "#" },
      { label: "Tablets", href: "#" },
      { label: "Laptops", href: "#" },
      { label: "Routers & Hubs", href: "#" },
      { label: "Accessories", href: "/accessories" },
      { label: "Trade In & Upgrade", href: "#" },
    ],
  },
  {
    id: "support",
    title: "Support",
    icon: "headphones",
    href: "/faqs",
    links: [
      { label: "Help Centre", href: "/faqs" },
      { label: "Billing & Payments", href: "#" },
      { label: "Manage My Account", href: "/dashboard" },
      { label: "Service Status", href: "#" },
      { label: "Technical Support", href: "#" },
      { label: "Contact Support", href: "/contact" },
    ],
  },
  {
    id: "about",
    title: "About Zoiko",
    icon: "info",
    href: "/about-us",
    links: [
      { label: "Our Company", href: "/about-us" },
      { label: "Why Zoiko", href: "/why-zoiko" },
      { label: "Leadership & Governance", href: "#" },
      { label: "Sustainability (ESG)", href: "/esg-policy" },
      { label: "Careers", href: "#" },
      { label: "Our Network", href: "#" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    id: "partners",
    title: "Partners",
    icon: "handshake",
    href: "/become-a-reseller",
    links: [
      { label: "Partner Programme", href: "/become-a-reseller" },
      { label: "Become a Partner", href: "/become-a-reseller" },
      { label: "Partner Resources", href: "#" },
      { label: "Technology Partners", href: "#" },
      { label: "Channel Support", href: "#" },
      { label: "Partner Login", href: "#" },
    ],
  },
  {
    id: "resources",
    title: "News & Resources",
    icon: "layers",
    href: "/blogs-news",
    links: [
      { label: "News", href: "/blogs-news" },
      { label: "Blogs", href: "/blogs-news" },
      { label: "Press Releases", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Insights & Guides", href: "#" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
] as const;

export const FOOTER_POLICY_LINKS: readonly NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Policy", href: "/cookies-policy" },
  { label: "Accessibility", href: "#" },
  { label: "Vulnerability Policy", href: "/vulnerability-policy" },
  { label: "Modern Slavery Policy", href: "/modern-slavery-policy" },
  { label: "ESG Policy", href: "/esg-policy" },
  { label: "Zoiko Policies", href: "/privacy-policy" },
] as const;

export const FOOTER_LEGAL = [
  "© 2026 Zoiko Telecom Ltd is Registered in England and Wales (No. 15021457). Information Commissioner's Office Registration Number ZB585887. All rights reserved.",
  "VAT Registration Number: 465 1110 23",
] as const;
