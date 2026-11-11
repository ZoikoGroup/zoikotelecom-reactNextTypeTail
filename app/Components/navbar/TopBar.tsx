import Link from "next/link";
import { Accessibility, Headphones, MapPin, Phone, User } from "lucide-react";
import {
  NAV_ACCOUNT,
  NAV_AUDIENCE,
  NAV_PHONE,
  NAV_REGION,
  NAV_UTILITY,
} from "./data";

const UTILITY_ICONS = {
  accessibility: Accessibility,
  support: Headphones,
  store: MapPin,
} as const;

function UnionJack() {
  return (
    <svg
      viewBox="0 0 60 30"
      className="h-3.5 w-5 shrink-0 rounded-[2px]"
      aria-hidden="true"
    >
      <rect width="60" height="30" fill="#012169" />
      <path d="M0 0 60 30M60 0 0 30" stroke="#fff" strokeWidth="6" />
      <path d="M0 0 60 30M60 0 0 30" stroke="#C8102E" strokeWidth="2.5" />
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

export default function TopBar() {
  return (
    <div className="bg-[#0f1b3d] text-white">
      <div className="mx-auto flex h-[41px] max-w-[1300px] items-center justify-between px-6 lg:px-10">
        <div className="flex h-full items-center gap-6">
          <span className="flex items-center gap-2 border-r border-white/20 pr-6 text-sm font-semibold">
            <UnionJack />
            {NAV_REGION.label}
          </span>
          <ul className="hidden h-full items-center gap-7 md:flex">
            {NAV_AUDIENCE.map((item) => (
              <li
                key={item.label}
                className="relative flex h-full items-center"
              >
                <Link
                  href={item.href}
                  className={
                    item.active
                      ? "text-sm font-bold"
                      : "text-sm text-white/85 hover:text-white"
                  }
                >
                  {item.label}
                </Link>
                {item.active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[3px] bg-[#e6007e]"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 lg:flex">
            {NAV_UTILITY.map((item) => {
              const Icon = UTILITY_ICONS[item.id];
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-white/90 hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href={NAV_PHONE.href}
                className="flex items-center gap-2 text-sm font-bold"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {NAV_PHONE.label}
              </Link>
            </li>
          </ul>
          <Link
            href={NAV_ACCOUNT.href}
            className="flex items-center gap-2 rounded-full border border-white/70 px-4 py-1.5 text-sm font-bold"
          >
            <User className="h-4 w-4" aria-hidden="true" />
            {NAV_ACCOUNT.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
