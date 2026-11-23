import {
  ABOUT_MENU,
  BROADBAND_MENU,
  BUSINESS_MENU,
  DEVICES_MENU,
  IOT_MENU,
  LANDLINES_MENU,
  MOBILE_MENU,
  SUPPORT_MENU,
} from "../navbar/dropdowns";
import type { NavIconName } from "../navbar/icons";
import type { NavDropdown } from "../navbar/types";

export type SearchCategory =
  | "Mobile"
  | "Broadband"
  | "Landlines"
  | "Business"
  | "IoT"
  | "Devices"
  | "Support"
  | "About";

export type SearchEntry = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: NavIconName;
  category: SearchCategory;
  keywords: string[];
};

/** Public shape returned by the API (keywords stay on the server). */
export type SearchResult = Omit<SearchEntry, "keywords">;

/** Words people use for each area that may not appear in page titles. */
const CATEGORY_KEYWORDS: Record<SearchCategory, string[]> = {
  Mobile: ["mobile", "phone", "sim", "plan", "data", "5g", "4g", "contract", "network"],
  Broadband: ["broadband", "internet", "wifi", "wi-fi", "fibre", "fiber", "router", "speed", "home"],
  Landlines: ["landline", "phone line", "home phone", "calls", "voice", "telephone"],
  Business: ["business", "company", "sme", "enterprise", "office", "work"],
  IoT: ["iot", "internet of things", "m2m", "sensor", "connectivity", "device data"],
  Devices: ["device", "devices", "hardware", "handset", "gadget"],
  Support: ["help", "support", "contact", "faq", "question", "problem"],
  About: ["about", "zoiko", "company", "who we are"],
};

/** Extra words for individual pages, keyed by href. */
const PAGE_KEYWORDS: Record<string, string[]> = {
  "/sim-only-plans": ["sim only", "no contract", "monthly", "rolling", "cheap"],
  "/multi-line-plans": ["family", "household", "multiple lines", "shared"],
  "/switch-and-save": ["switch", "port", "pac code", "keep my number", "move provider"],
  "/esim": ["esim", "digital sim", "embedded sim"],
  "/sim-esim": ["esim", "sim card", "physical sim"],
  "/student-youth-plans": ["student", "youth", "young", "university", "cheap"],
  "/roaming-international": ["roaming", "abroad", "travel", "international", "overseas", "eu"],
  "/home-broadband": ["home internet", "wifi", "home"],
  "/ultrafast-broadband": ["gigabit", "fast", "1gb", "ultrafast", "speed"],
  "/mobile-bundles": ["bundle", "broadband and mobile", "combo", "deal"],
  "/broadband-check-availability": ["availability", "postcode", "address", "coverage", "check"],
  "/full-fibre": ["ftth", "fttp", "full fibre", "fiber"],
  "/whole-home-wif": ["mesh", "wifi extender", "booster", "coverage", "dead spots"],
  "/check-your-speed": ["speed test", "slow internet", "mbps", "test"],
  "/landlines-home-phone": ["home phone", "landline"],
  "/landlines-virtual-numbers": ["virtual number", "0800", "0300", "non-geographic"],
  "/call-features": ["voicemail", "call forwarding", "caller id", "call waiting"],
  "/landlines-business-voice": ["voip", "sip", "hosted phone", "pbx"],
  "/landlines-international-calls": ["international calls", "call abroad", "overseas calls"],
  "/voice-bundles": ["minutes", "call bundle", "ucaas", "teams"],
  "/business-mobile": ["work phone", "company mobile", "fleet"],
  "/managed-services": ["managed it", "outsourced", "it support"],
  "/broadband-fibre": ["business internet", "leased line", "office broadband"],
  "/security-compliance": ["security", "gdpr", "cyber", "compliance"],
  "/iot-&-connectivity-data-plans": ["iot sim", "data plan", "m2m data", "pooled data"],
  "/iot-&-connectivity-remote-monitoring": ["telemetry", "sensors", "monitoring", "alerts", "cold storage"],
  "/devices-accessories": ["case", "charger", "cable", "headphones", "screen protector", "accessories"],
  "/faqs": ["faq", "help centre", "questions", "answers"],
  "/login": ["track order", "order status", "my account", "sign in", "login", "bill", "billing"],
  "/contact": ["contact","call us", "email", "book", "appointment", "visit"],
  "/blogs-news": ["blog", "news", "press", "articles"],
  "/esg-policy": ["esg", "environment", "sustainability", "green"],
  "/why-zoiko": ["why", "reviews", "benefits"],
};

/** Pages that are not in the navbar menus but should be findable. */
const EXTRA_PAGES: Omit<SearchEntry, "id" | "keywords">[] = [
  { title: "Mobile Plans", description: "Browse all Zoiko mobile plans", href: "/ee-mobile-plans", icon: "smartphone", category: "Mobile" },
  { title: "SIM & eSIM", description: "Choose a physical SIM or an eSIM", href: "/sim-esim", icon: "sim", category: "Mobile" },
  { title: "Broadband & Fibre Plans", description: "Compare home broadband options", href: "/bt-broadband", icon: "wifi", category: "Broadband" },
  { title: "Fibre Packages", description: "Fibre broadband packages and prices", href: "/fibre-packages", icon: "zap", category: "Broadband" },
  { title: "Landlines & Voice", description: "Home and business phone lines", href: "/landlines", icon: "phone", category: "Landlines" },
  { title: "Business Landlines", description: "Phone lines for your business", href: "/landline-business", icon: "building", category: "Business" },
  { title: "Business Solutions", description: "Connectivity and tools for business", href: "/business-solutions", icon: "briefcase", category: "Business" },
  { title: "Become a Reseller", description: "Partner with Zoiko Telecom", href: "/become-a-reseller", icon: "users", category: "Business" },
  { title: "Phone Equipment", description: "Phones and equipment for home and work", href: "/phone-equipment", icon: "smartphone", category: "Devices" },
  { title: "Black Friday Deals", description: "Our latest offers and discounts", href: "/black-friday", icon: "tag", category: "Mobile" },
  { title: "Contact Us", description: "Get in touch with our team", href: "/contact", icon: "chat", category: "Support" },
  { title: "My Account", description: "Sign in to manage your services", href: "/login", icon: "users", category: "Support" },
  { title: "Privacy Policy", description: "How we use and protect your data", href: "/privacy-policy", icon: "shieldCheck", category: "About" },
  { title: "Terms & Conditions", description: "Our terms of service", href: "/terms-and-conditions", icon: "book", category: "About" },
  { title: "Cookies Policy", description: "How we use cookies", href: "/cookies-policy", icon: "book", category: "About" },
  { title: "Vulnerability Policy", description: "Support for customers in vulnerable circumstances", href: "/vulnerability-policy", icon: "shield", category: "About" },
  { title: "Modern Slavery Policy", description: "Our modern slavery statement", href: "/modern-slavery-policy", icon: "book", category: "About" },
];

const MENUS: [SearchCategory, NavDropdown][] = [
  ["Mobile", MOBILE_MENU],
  ["Broadband", BROADBAND_MENU],
  ["Landlines", LANDLINES_MENU],
  ["Business", BUSINESS_MENU],
  ["IoT", IOT_MENU],
  ["Devices", DEVICES_MENU],
  ["Support", SUPPORT_MENU],
  ["About", ABOUT_MENU],
];

function buildIndex(): SearchEntry[] {
  const seen = new Set<string>();
  const entries: SearchEntry[] = [];

  const add = (entry: Omit<SearchEntry, "id" | "keywords">) => {
    // Skip placeholder links and duplicate titles.
    if (!entry.href || entry.href === "#") return;
    const key = entry.title.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    entries.push({
      ...entry,
      id: `${entry.category}-${entries.length}`,
      keywords: [
        ...(PAGE_KEYWORDS[entry.href] ?? []),
        ...CATEGORY_KEYWORDS[entry.category],
      ],
    });
  };

  for (const [category, menu] of MENUS) {
    for (const item of menu.items) {
      add({
        title: item.label,
        description: item.description,
        href: item.href,
        icon: item.icon,
        category,
      });
    }
  }
  EXTRA_PAGES.forEach(add);
  return entries;
}

export const SEARCH_INDEX: readonly SearchEntry[] = buildIndex();
