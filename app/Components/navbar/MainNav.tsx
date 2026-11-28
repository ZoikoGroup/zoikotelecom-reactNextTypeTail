import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LOGO, NAV_MAIN } from "./data";

const getCartCount = () => {
  try {
    const stored = JSON.parse(localStorage.getItem("cart") ?? "[]");
    if (!Array.isArray(stored)) return 0;
    return stored.reduce((count: number, item: { quantity?: unknown; qty?: unknown }) => {
      const quantity = Number(item.quantity ?? item.qty ?? 1);
      return count + (Number.isFinite(quantity) && quantity > 0 ? quantity : 1);
    }, 0);
  } catch {
    return 0;
  }
};

type MainNavProps = {
  openId: string | null;
  onOpen: (id: string) => void;
  onNavigate: () => void;
  mobileOpen: boolean;
  onToggleMobile: () => void;
  onOpenSearch: () => void;
};

export default function MainNav({
  openId,
  onOpen,
  onNavigate,
  mobileOpen,
  onToggleMobile,
  onOpenSearch,
}: MainNavProps) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => setCartCount(getCartCount());
    updateCartCount();
    window.addEventListener("cart-updated", updateCartCount);
    window.addEventListener("storage", updateCartCount);
    return () => {
      window.removeEventListener("cart-updated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  return (
    <div className="border-b border-[#eceef3]">
      <nav
        aria-label="Main"
        className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between gap-4 px-6 lg:px-10 xl:gap-6"
      >
        <Link href={NAV_LOGO.href} className="shrink-0" onClick={onNavigate}>
          <Image
            src={NAV_LOGO.src}
            alt={NAV_LOGO.alt}
            width={140}
            height={60}
            priority
            className="h-auto w-[110px] 2xl:w-[125px]"
          />
        </Link>

        <ul className="hidden min-w-0 flex-1 items-center justify-between xl:flex">
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
                      ? "flex items-center gap-1 whitespace-nowrap rounded-full bg-[#c4237f] px-2.5 py-2.5 text-[14px] font-bold text-white 2xl:px-3.5 2xl:text-[15px]"
                      : "flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2.5 text-[14px] font-bold text-[#0f1b3d] hover:text-[#c4237f] 2xl:px-3.5 2xl:text-[15px]"
                  }
                >
                  {item.label}
                  <ChevronDown
                    className={
                      isOpen
                        ? "h-4 w-4 shrink-0 rotate-180 transition-transform"
                        : "h-4 w-4 shrink-0 transition-transform"
                    }
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-5 text-[#0f1b3d]">
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label="Search (Ctrl+K)"
            aria-haspopup="dialog"
            className="rounded-full p-1 hover:text-[#c4237f]"
          >
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
          </button>
          <Link
            href="/checkout"
            onClick={onNavigate}
            aria-label={`Basket, ${cartCount} item${cartCount === 1 ? "" : "s"}`}
            className="relative"
          >
            <ShoppingCart className="h-5 w-5" aria-hidden="true" />
            <span className="absolute -right-2.5 -top-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#c4237f] text-sm font-bold leading-none text-white">
              {cartCount > 99 ? "99+" : cartCount}
            </span>
          </Link>
          <button
            type="button"
            onClick={onToggleMobile}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-[10px] border-2 border-[#eceef3] text-[#0f1b3d] hover:border-[#c4237f] hover:text-[#c4237f] xl:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}
