import type { NavDropdown, NavHelpLink } from "./types";

export const MENU_HELP = {
  label: "Need help choosing?",
  links: [
    { label: "0800 028 3030", href: "tel:08000283030", icon: "phone" },
    { label: "Live chat", href: "#", icon: "chat" },
    { label: "Find a store", href: "#", icon: "store" },
  ] satisfies readonly NavHelpLink[],
  close: "Close menu",
} as const;

export const MOBILE_MENU: NavDropdown = {
  eyebrow: "Mobile",
  seeAll: { label: "See all Mobile →", href: "/ee-mobile-plans" },
  image: {
    src: "/Images/navbar/1.png",
    alt: "Woman smiling at her phone on a city street",
    title: ["Mobile Plans for", "Every Lifestyle"],
    cta: { label: "View Mobile Plans", href: "/ee-mobile-plans" },
  },
  items: [
    {
      label: "SIM Only Plans",
      description: "Flexible plans on your own phone",
      href: "#",
      icon: "sim",
    },
    {
      label: "Multi-line Plans",
      description: "One account for the whole household",
      href: "#",
      icon: "users",
    },
    {
      label: "Switch & Save",
      description: "Bring your number to Zoiko",
      href: "#",
      icon: "switch",
    },
    {
      label: "eSIM",
      description: "Get connected without a physical SIM",
      href: "#",
      icon: "cpu",
    },
    {
      label: "Phone & SIM Plans",
      description: "A new phone with a plan to match",
      href: "#",
      icon: "smartphone",
    },
    {
      label: "Student & Youth Plans",
      description: "Plans for students and younger users",
      href: "#",
      icon: "star",
    },
    {
      label: "Roaming & International",
      description: "Use your phone abroad and call overseas",
      href: "#",
      icon: "globe",
    },
  ],
};

export const BROADBAND_MENU: NavDropdown = {
  eyebrow: "Broadband & Fibre",
  seeAll: { label: "See all Broadband & Fibre →", href: "/bt-broadband" },
  image: {
    src: "/Images/navbar/2.png",
    alt: "Wi-Fi routers beside a plant in a softly lit room",
    title: ["Fast, Reliable", "Broadband for", "Home and Work"],
    cta: { label: "View Mobile Plans", href: "/bt-broadband" },
  },
  items: [
    {
      label: "Home Broadband",
      description: "Everyday broadband for your home",
      href: "#",
      icon: "wifi",
    },
    {
      label: "Ultrafast Broadband",
      description: "Our fastest home speeds",
      href: "#",
      icon: "gauge",
    },
    {
      label: "Broadband & Mobile Bundles",
      description: "Combine services in one bill",
      href: "#",
      icon: "layers",
    },
    {
      label: "Check Availability",
      description: "See what's available at your address",
      href: "/broadband",
      icon: "pin",
    },
    {
      label: "Full Fibre",
      description: "Fibre all the way to your door",
      href: "/fibre-packages",
      icon: "zap",
    },
    {
      label: "Whole Home Wi-Fi",
      description: "Strong Wi-Fi in every room",
      href: "#",
      icon: "network",
    },
    {
      label: "Check Your Speed",
      description: "Test your current connection",
      href: "#",
      icon: "activity",
    },
  ],
};

export const LANDLINES_MENU: NavDropdown = {
  eyebrow: "Landlines & Voice",
  seeAll: { label: "See all Landlines & Voice →", href: "/landlines" },
  image: {
    src: "/Images/navbar/3.png",
    alt: "Desk phone in a modern office",
    title: ["Clear, Flexible", "Voice Solutions"],
    cta: { label: "Explore Voice", href: "/landlines" },
  },
  items: [
    {
      label: "Home Phone",
      description: "A reliable landline for your home",
      href: "#",
      icon: "phone",
    },
    {
      label: "Virtual Numbers",
      description: "Local and non-geographic numbers",
      href: "#",
      icon: "hash",
    },
    {
      label: "Call Features",
      description: "Voicemail, call divert and more",
      href: "#",
      icon: "forward",
    },
    {
      label: "Business Voice (VoIP)",
      description: "Internet calling for your team",
      href: "/landline-business",
      icon: "cloud",
    },
    {
      label: "International Calls",
      description: "Call friends and family abroad",
      href: "#",
      icon: "globe",
    },
    {
      label: "Voice Bundles",
      description: "Minutes and features together",
      href: "#",
      icon: "tag",
    },
  ],
};

export const BUSINESS_MENU: NavDropdown = {
  eyebrow: "Business",
  seeAll: { label: "See all Business →", href: "/business-solutions" },
  image: {
    src: "/Images/navbar/4.png",
    alt: "Colleagues reviewing work together on a laptop",
    title: ["Connectivity and", "Solutions for", "Business"],
    cta: { label: "Explore Business", href: "/business-solutions" },
  },
  items: [
    {
      label: "Business Mobile",
      description: "Mobile plans for teams of any size",
      href: "#",
      icon: "briefcase",
    },
    {
      label: "Business Voice & UCaaS",
      description: "Calls, meetings and messaging in one",
      href: "#",
      icon: "phone",
    },
    {
      label: "Managed Services",
      description: "We look after your connectivity",
      href: "#",
      icon: "server",
    },
    {
      label: "Sector Solutions",
      description: "Solutions shaped around your industry",
      href: "#",
      icon: "building",
    },
    {
      label: "Business Broadband & Fibre",
      description: "Reliable connectivity for your workplace",
      href: "#",
      icon: "wifi",
    },
    {
      label: "Cloud & Communication Tools",
      description: "Tools to help your team collaborate",
      href: "#",
      icon: "cloud",
    },
    {
      label: "Security & Compliance",
      description: "Protect your people and data",
      href: "#",
      icon: "shield",
    },
  ],
};

export const IOT_MENU: NavDropdown = {
  eyebrow: "IoT & Connectivity",
  seeAll: { label: "See all IoT & Connectivity →", href: "#" },
  image: {
    src: "/Images/navbar/5.png",
    alt: "Woman smiling at her phone near a red London bus",
    title: ["Connected", "Solutions for", "People, Vehicles", "and Things"],
    cta: { label: "Explore IoT", href: "#" },
  },
  items: [
    {
      label: "IoT Connectivity (SIM, eSIM)",
      description: "Connect devices at scale",
      href: "#",
      icon: "network",
    },
    {
      label: "Smart Buildings & Sites",
      description: "Connected sensors and systems",
      href: "#",
      icon: "building",
    },
    {
      label: "IoT Data Plans",
      description: "Data plans built for devices",
      href: "#",
      icon: "cpu",
    },
    {
      label: "Connected Vehicles & Fleets",
      description: "Keep vehicles and drivers connected",
      href: "#",
      icon: "car",
    },
    {
      label: "Remote Monitoring",
      description: "Track assets and equipment remotely",
      href: "#",
      icon: "activity",
    },
    {
      label: "IoT Platforms & APIs",
      description: "Manage your estate and integrations",
      href: "#",
      icon: "code",
    },
  ],
};

export const DEVICES_MENU: NavDropdown = {
  eyebrow: "Devices",
  seeAll: { label: "See all Devices →", href: "/phone-equipment" },
  image: {
    src: "/Images/navbar/6.png",
    alt: "Laptop, tablet and phone glowing with neon colours",
    title: ["The Latest", "Devices, Built for", "Connectivity"],
    cta: { label: "Shop Devices", href: "/phone-equipment" },
  },
  items: [
    {
      label: "Mobile Phones",
      description: "The latest smartphones",
      href: "#",
      icon: "smartphone",
    },
    {
      label: "Mobile Hotspots & Routers",
      description: "Take your connection with you",
      href: "#",
      icon: "router",
    },
    {
      label: "Trade In & Upgrade",
      description: "Trade in your old device",
      href: "#",
      icon: "refresh",
    },
    {
      label: "Tablets",
      description: "Cellular and Wi-Fi tablets",
      href: "#",
      icon: "tablet",
    },
    {
      label: "Accessories",
      description: "Cases, chargers and audio",
      href: "/accessories",
      icon: "headphones",
    },
    {
      label: "Device Protection",
      description: "Cover for loss, theft and damage",
      href: "#",
      icon: "shield",
    },
  ],
};

export const SUPPORT_MENU: NavDropdown = {
  eyebrow: "Support",
  seeAll: { label: "See all Support →", href: "/faqs" },
  image: {
    src: "/Images/navbar/7.png",
    alt: "Smiling support agent wearing a headset",
    title: ["We’re Here to", "Help"],
    cta: { label: "Get Support", href: "/faqs" },
  },
  items: [
    {
      label: "Help Centre & FAQs",
      description: "Answers to common questions",
      href: "/faqs",
      icon: "help",
    },
    {
      label: "Activate Your SIM",
      description: "Get your new SIM up and running",
      href: "#",
      icon: "sim",
    },
    {
      label: "Report a Problem",
      description: "Tell us about a fault or outage",
      href: "#",
      icon: "alert",
    },
    {
      label: "Track an Order",
      description: "See where your order is",
      href: "#",
      icon: "package",
    },
    {
      label: "Troubleshoot a Service",
      description: "Fix common issues step by step",
      href: "#",
      icon: "pencil",
    },
    {
      label: "Book a Call or Visit",
      description: "Talk to us at a time that suits you",
      href: "/contact",
      icon: "calendar",
    },
  ],
};

export const ABOUT_MENU: NavDropdown = {
  eyebrow: "About Zoiko",
  seeAll: { label: "See all About Zoiko →", href: "/about-us" },
  image: {
    src: "/Images/navbar/8.png",
    alt: "Engineer in a hard hat holding a tablet in a warehouse",
    title: ["A Modern UK", "Telecoms", "Company"],
    cta: { label: "About Zoiko", href: "/about-us" },
  },
  items: [
    {
      label: "Our Story",
      description: "How Zoiko Telecom began",
      href: "/about-us",
      icon: "book",
    },
    {
      label: "Leadership & Board",
      description: "The people who lead Zoiko",
      href: "#",
      icon: "users",
    },
    {
      label: "News & Media",
      description: "Latest news and press resources",
      href: "/blogs-news",
      icon: "news",
    },
    {
      label: "Investors",
      description: "Information for investors",
      href: "#",
      icon: "chart",
    },
    {
      label: "Why Zoiko",
      description: "Why customers choose Zoiko",
      href: "/why-zoiko",
      icon: "star",
    },
    {
      label: "Our Purpose & Values",
      description: "What we stand for",
      href: "#",
      icon: "target",
    },
    {
      label: "Sustainability (ESG)",
      description: "Our environmental and social commitments",
      href: "/esg-policy",
      icon: "leaf",
    },
    {
      label: "Careers at Zoiko",
      description: "Join our team",
      href: "#",
      icon: "briefcase",
    },
  ],
};
