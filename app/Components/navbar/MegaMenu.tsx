import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { NAV_ICONS } from "./icons";
import { MENU_HELP } from "./dropdowns";
import type { NavDropdown } from "./types";

type MegaMenuProps = {
  menu: NavDropdown;
  onNavigate: () => void;
  onEnter: () => void;
};

export default function MegaMenu({ menu, onNavigate, onEnter }: MegaMenuProps) {
  const rows = Math.ceil(menu.items.length / 2);

  return (
    <div
      className="absolute inset-x-0 top-full z-50 hidden px-6 xl:block"
      onMouseEnter={onEnter}
    >
      <div
        role="region"
        aria-label={`${menu.eyebrow} menu`}
        className="mx-auto w-[90%] max-w-[1300px] overflow-hidden rounded-b-2xl border-t-2 border-[#7b2d8b] bg-white shadow-[0_20px_50px_rgba(15,27,61,0.18)]"
      >
        <div className="grid grid-cols-[25%_75%]">
          {/* Image panel */}
          <div className="relative min-h-[380px]">
            <Image
              src={menu.image.src}
              alt={menu.image.alt}
              fill
              sizes="(min-width: 1280px) 320px, 25vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#1b1550]/95 via-[#1b1550]/25 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-2xl font-extrabold leading-8">
                {menu.image.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <Link
                href={menu.image.cta.href}
                onClick={onNavigate}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#c4237f]"
              >
                {menu.image.cta.label}
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-[#7b2d8b]">
                {menu.eyebrow}
              </p>
              <Link
                href={menu.seeAll.href}
                onClick={onNavigate}
                className="text-sm font-bold text-[#c4237f] underline underline-offset-4"
              >
                {menu.seeAll.label}
              </Link>
            </div>

            <ul
              className="mt-4 grid flex-1 grid-flow-col grid-cols-2 gap-x-6 gap-y-1"
              style={{ gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}
            >
              {menu.items.map((item) => {
                const Icon = NAV_ICONS[item.icon];
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className="group flex h-full items-center gap-4 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#fbe6f1] focus-visible:bg-[#fbe6f1]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fbe6f1] text-[#c4237f] transition-colors group-hover:bg-[#fbe6f1]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-base font-bold leading-5 text-[#0f1b3d]">
                          {item.label}
                        </span>
                        <span className="block text-sm leading-5 text-[#5b6578]">
                          {item.description}
                        </span>
                      </span>
                      <ChevronRight
                        className="h-4 w-4 shrink-0 text-[#0f1b3d]"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Help bar */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-[#f2f4f8] px-4 py-3">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <p className="text-sm font-bold text-[#0f1b3d]">
                  {MENU_HELP.label}
                </p>
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  {MENU_HELP.links.map((link) => {
                    const Icon = NAV_ICONS[link.icon];
                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          onClick={onNavigate}
                          className="flex items-center gap-2 text-sm font-semibold text-[#0f1b3d] hover:text-[#c4237f]"
                        >
                          <Icon
                            className="h-4 w-4 text-[#c4237f]"
                            aria-hidden="true"
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <button
                type="button"
                onClick={onNavigate}
                className="rounded-full bg-white px-5 py-2 text-sm font-bold text-[#0f1b3d] shadow-sm"
              >
                {MENU_HELP.close}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
