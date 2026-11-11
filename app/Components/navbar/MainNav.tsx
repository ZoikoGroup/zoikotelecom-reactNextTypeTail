import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ShoppingCart } from "lucide-react";
import { NAV_LOGO, NAV_MAIN } from "./data";

type MainNavProps = {
  openId: string | null;
  onOpen: (id: string) => void;
  onNavigate: () => void;
};

export default function MainNav({ openId, onOpen, onNavigate }: MainNavProps) {
  return (
    <div className="border-b border-[#eceef3]">
      <nav
        aria-label="Main"
        className="mx-auto flex h-[70px] max-w-[1300px] items-center justify-between gap-4 px-6 lg:px-10"
      >
        <Link href={NAV_LOGO.href} className="shrink-0" onClick={onNavigate}>
          <Image
            src={NAV_LOGO.src}
            alt={NAV_LOGO.alt}
            width={140}
            height={60}
            priority
            className="h-auto w-[110px] lg:w-[125px]"
          />
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-0.5 xl:flex">
          {NAV_MAIN.map((item) => {
            const isOpen = openId === item.id;
            return (
              <li
                key={item.id}
                onMouseEnter={() => onOpen(item.id)}
                onFocus={() => onOpen(item.id)}
              >
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  aria-haspopup={item.dropdown ? "true" : undefined}
                  aria-expanded={item.dropdown ? isOpen : undefined}
                  className={
                    isOpen
                      ? "flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#c4237f] px-5 py-2.5 text-[15px] font-bold text-white"
                      : "flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2.5 text-[15px] font-bold text-[#0f1b3d] hover:text-[#c4237f]"
                  }
                >
                  {item.label}
                  <ChevronDown
                    className={
                      isOpen
                        ? "h-4 w-4 rotate-180 transition-transform"
                        : "h-4 w-4 transition-transform"
                    }
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-5 text-[#0f1b3d]">
          <Link href="#" aria-label="Search">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </Link>
          <Link href="#" aria-label="Basket" className="relative">
            <ShoppingCart className="h-5 w-5" aria-hidden="true" />
            <span className="absolute -right-2.5 -top-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#c4237f] text-sm font-bold leading-none text-white">
              0
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
