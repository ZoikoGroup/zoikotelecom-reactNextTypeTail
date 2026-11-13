"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Phone, User } from "lucide-react";
import {
  NAV_ACCOUNT,
  NAV_AUDIENCE,
  NAV_MAIN,
  NAV_PHONE,
  NAV_UTILITY,
} from "./data";
import { NAV_ICONS } from "./icons";

type MobileMenuProps = {
  onNavigate: () => void;
};

export default function MobileMenu({ onNavigate }: MobileMenuProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div
      id="mobile-menu"
      className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-111px)] overflow-y-auto border-t border-[#eceef3] bg-white shadow-[0_20px_40px_rgba(15,27,61,0.15)] xl:hidden"
    >
      <nav aria-label="Mobile" className="px-6 pb-8 pt-2">
        <ul>
          {NAV_MAIN.map((item) => {
            const isOpen = expandedId === item.id;

            if (!item.dropdown) {
              return (
                <li key={item.id} className="border-b border-[#eceef3]">
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="block py-4 text-base font-bold text-[#0f1b3d]"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            return (
              <li key={item.id} className="border-b border-[#eceef3]">
                <button
                  type="button"
                  onClick={() => setExpandedId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between py-4 text-left text-base font-bold text-[#0f1b3d]"
                >
                  {item.label}
                  <ChevronDown
                    className={
                      isOpen
                        ? "h-5 w-5 rotate-180 text-[#c4237f] transition-transform"
                        : "h-5 w-5 transition-transform"
                    }
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <ul className="pb-4">
                    {item.dropdown.items.map((link) => {
                      const Icon = NAV_ICONS[link.icon];
                      return (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            onClick={onNavigate}
                            className="flex items-center gap-3 rounded-xl px-2 py-2.5 hover:bg-[#fbe6f1]"
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fbe6f1] text-[#c4237f]">
                              <Icon className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span className="text-sm font-semibold text-[#0f1b3d]">
                              {link.label}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                    <li className="mt-2 px-2">
                      <Link
                        href={item.dropdown.seeAll.href}
                        onClick={onNavigate}
                        className="text-sm font-bold text-[#c4237f] underline underline-offset-4"
                      >
                        {item.dropdown.seeAll.label}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {/* Audience + utility links (hidden in the top bar on small screens) */}
        <ul className="mt-6 flex flex-wrap gap-2">
          {NAV_AUDIENCE.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className={
                  item.active
                    ? "block rounded-full bg-[#0f1b3d] px-4 py-2 text-sm font-bold text-white"
                    : "block rounded-full border border-[#d9dde6] px-4 py-2 text-sm font-semibold text-[#0f1b3d]"
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="mt-6 space-y-3">
          {NAV_UTILITY.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className="text-sm font-semibold text-[#0f1b3d] hover:text-[#c4237f]"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={NAV_PHONE.href}
              className="flex items-center gap-2 text-sm font-bold text-[#0f1b3d]"
            >
              <Phone className="h-4 w-4 text-[#c4237f]" aria-hidden="true" />
              {NAV_PHONE.label}
            </Link>
          </li>
        </ul>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <Link
            href="/contact"
            onClick={onNavigate}
            className="flex items-center justify-center rounded-full border-2 border-[#c4237f] py-2.5 text-sm font-bold text-[#c4237f]"
          >
            Contact Us
          </Link>
          <Link
            href={NAV_ACCOUNT.href}
            onClick={onNavigate}
            className="flex items-center justify-center gap-2 rounded-full bg-[#c4237f] py-2.5 text-sm font-bold text-white"
          >
            <User className="h-4 w-4" aria-hidden="true" />
            {NAV_ACCOUNT.label}
          </Link>
        </div>
      </nav>
    </div>
  );
}
