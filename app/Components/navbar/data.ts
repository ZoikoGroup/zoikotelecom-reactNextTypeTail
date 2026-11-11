import {
  ABOUT_MENU,
  BROADBAND_MENU,
  BUSINESS_MENU,
  DEVICES_MENU,
  IOT_MENU,
  LANDLINES_MENU,
  MOBILE_MENU,
  SUPPORT_MENU,
} from "./dropdowns";
import type { NavMainItem } from "./types";

export const NAV_LOGO = {
  src: "/image/logo.png",
  alt: "Zoiko Telecom",
  href: "/",
} as const;

export const NAV_REGION = { label: "United Kingdom" } as const;

export const NAV_AUDIENCE = [
  { label: "Personal", href: "/", active: true },
  { label: "Business", href: "#", active: false },
  { label: "Partners", href: "/become-a-reseller", active: false },
] as const;

export const NAV_UTILITY = [
  { id: "accessibility", label: "Accessibility", href: "#" },
  { id: "support", label: "Support", href: "/faqs" },
  { id: "store", label: "Find a Store", href: "#" },
] as const;

export const NAV_PHONE = {
  label: "0800 028 3030",
  href: "tel:08000283030",
} as const;

export const NAV_ACCOUNT = { label: "My Account", href: "/login" } as const;

export const NAV_MAIN: readonly NavMainItem[] = [
  {
    id: "mobile",
    label: "Mobile",
    href: "/ee-mobile-plans",
    dropdown: MOBILE_MENU,
  },
  {
    id: "broadband",
    label: "Broadband & Fibre",
    href: "/bt-broadband",
    dropdown: BROADBAND_MENU,
  },
  {
    id: "landlines",
    label: "Landlines & Voice",
    href: "#",
    dropdown: LANDLINES_MENU,
  },
  { id: "business", label: "Business", href: "#", dropdown: BUSINESS_MENU },
  { id: "iot", label: "IoT & Connectivity", href: "#", dropdown: IOT_MENU },
  { id: "devices", label: "Devices", href: "#", dropdown: DEVICES_MENU },
  { id: "support", label: "Support", href: "/faqs", dropdown: SUPPORT_MENU },
  {
    id: "about",
    label: "About Zoiko",
    href: "/about-us",
    dropdown: ABOUT_MENU,
  },
] as const;
