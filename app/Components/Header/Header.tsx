"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import CartIcon from "./CartIcon";
import toast from "react-hot-toast";
import {
  FaChevronDown,
  FaUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

interface DropdownItem {
  href: string;
  title: string;
  desc: string;
}

type NavItem =
  | { kind: "link"; href: string; label: string }
  | { kind: "dropdown"; id: string; label: string; heading: string; items: DropdownItem[] };

const navItems: NavItem[] = [
  { kind: "link", href: "/ee-mobile-plans", label: "EE Mobile" },
  {
    kind: "dropdown",
    id: "broadband",
    label: "Broadband",
    heading: "Broadband & Fibre",
    items: [
      {
        href: "/bt-broadband",
        title: "BT Broadband",
        desc: "High-speed BT broadband deals",
      },
      {
        href: "/fibre-packages",
        title: "Fibre Packages",
        desc: "Affordable full fibre plans",
      },
      {
        href: "/broadband",
        title: "Check Availability",
        desc: "See what's available at your address",
      },
    ],
  },
  { kind: "link", href: "/landlines", label: "Landlines" },
  {
    kind: "dropdown",
    id: "business",
    label: "Business",
    heading: "For You",
    items: [
      {
        href: "/business-solutions",
        title: "Business Solutions",
        desc: "Smart telecom services for businesses",
      },
      {
        href: "/accessories",
        title: "Accessories",
        desc: "Explore latest telecom accessories",
      },
      {
        href: "/phone-equipment",
        title: "Phone & Equipment",
        desc: "Premium devices and equipment",
      },
      {
        href: "/landline-business",
        title: "Landline Business",
        desc: "Reliable communication solutions",
      },
    ],
  },
  {
    kind: "dropdown",
    id: "company",
    label: "Company",
    heading: "About Zoiko",
    items: [
      {
        href: "/about-us",
        title: "About Us",
        desc: "Who we are and what we do",
      },
      {
        href: "/why-zoiko",
        title: "Why Zoiko",
        desc: "Why customers choose us",
      },
      {
        href: "/blogs-news",
        title: "Blogs & News",
        desc: "Latest updates and insights",
      },
      {
        href: "/faqs",
        title: "FAQs",
        desc: "Answers to common questions",
      },
      {
        href: "/become-a-reseller",
        title: "Become a Reseller",
        desc: "Partner with Zoiko Telecom",
      },
    ],
  },
];

function DropdownLink({
  item,
  onClick,
}: {
  item: DropdownItem;
  onClick: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="group/item mb-1 block rounded-xl px-3 py-2.5 transition-colors hover:bg-[#C12172]/10 dark:hover:bg-[#C12172]/20"
    >
      <h4 className="text-sm font-semibold leading-tight text-[#111] group-hover/item:text-[#C12172] dark:text-neutral-100 dark:group-hover/item:text-[#e94196] sm:text-[15px]">
        {item.title}
      </h4>
      <p className="mt-0.5 text-xs leading-snug text-[#888] dark:text-neutral-400 sm:text-[12.5px]">
        {item.desc}
      </p>
    </Link>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);

      let name = "";
      try {
        const raw = localStorage.getItem("user");
        if (raw) {
          const u = JSON.parse(raw);
          name =
            u.name ||
            [u.first_name, u.last_name].filter(Boolean).join(" ") ||
            u.username ||
            u.email ||
            "";
        }
      } catch {
        /* ignore */
      }
      setUserName(name);
    };

    checkAuth();

    window.addEventListener("authChanged", checkAuth);
    return () => {
      window.removeEventListener("authChanged", checkAuth);
    };
  }, []);

  // Close the user menu when clicking outside it.
  useEffect(() => {
    if (!userMenuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [userMenuOpen]);

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setUserMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsLoggedIn(false);
    setUserMenuOpen(false);

    window.dispatchEvent(new Event("authChanged"));

    toast.success("Logged out successfully!");

    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-[9999] w-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:bg-neutral-900 dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <nav className="flex h-20 items-center justify-between lg:h-[95px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeAll}>
              <Image
                src="/Images/logo.png"
                alt="Zoiko Telecom"
                width={180}
                height={50}
                priority
                className="w-[130px] sm:w-[150px] lg:w-[180px]"
              />
            </Link>
          </div>

          {/* Navigation */}
          <ul
            className={`
              ${menuOpen ? "flex" : "hidden"}
              absolute left-0 right-0 top-20 max-h-[calc(100vh-80px)] flex-col items-start gap-0
              overflow-y-auto border-t border-[#eee] bg-white px-5 pb-6 pt-3
              shadow-[0_12px_30px_rgba(0,0,0,0.08)]
              dark:border-neutral-700 dark:bg-neutral-900
              dark:shadow-[0_12px_30px_rgba(0,0,0,0.4)]
              lg:static lg:flex lg:max-h-none lg:flex-row lg:items-center lg:gap-8 lg:overflow-visible
              lg:border-0 lg:p-0 lg:shadow-none dark:lg:bg-transparent xl:gap-11
            `}
          >
            {navItems.map((item) => {
              if (item.kind === "link") {
                return (
                  <li
                    key={item.href}
                    className="w-full border-b border-[#f5f5f5] dark:border-neutral-800 lg:w-auto lg:border-0"
                  >
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      className="block py-3.5 text-base font-medium text-[#111] hover:text-[#C12172] dark:text-neutral-100 dark:hover:text-[#e94196] lg:py-0"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              const dropdownOpen = openDropdown === item.id;
              return (
            <li
              key={item.id}
              className="group relative w-full border-b border-[#f5f5f5] dark:border-neutral-800 lg:w-auto lg:border-0"
            >
              <button
                onClick={() => setOpenDropdown(dropdownOpen ? null : item.id)}
                aria-expanded={dropdownOpen}
                className="flex w-full items-center justify-between py-3.5 text-left text-base font-medium text-[#111] hover:text-[#C12172] dark:text-neutral-100 dark:hover:text-[#e94196] lg:w-auto lg:justify-start lg:gap-2 lg:py-0"
              >
                {item.label}
                <FaChevronDown
                  className={`text-xs transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  } lg:group-hover:rotate-180`}
                />
              </button>

              <div
                className={`
                  ${dropdownOpen ? "block" : "hidden"}
                  relative w-full overflow-hidden rounded-2xl border border-[#f0f0f0]
                  bg-white pb-3 pl-2 dark:border-neutral-700 dark:bg-neutral-800
                  lg:invisible lg:absolute lg:left-1/2 lg:top-[150%]
                  lg:block lg:w-[340px] lg:-translate-x-1/2 lg:pl-0
                  lg:opacity-0 lg:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                  lg:transition-all lg:duration-300
                  lg:group-hover:visible lg:group-hover:top-[135%]
                  lg:group-hover:opacity-100
                  ${
                    dropdownOpen
                      ? "lg:!visible lg:!top-[135%] lg:!opacity-100"
                      : ""
                  }
                `}
              >
                <span className="absolute -top-2 left-1/2 hidden h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-[#eee] bg-white dark:border-neutral-700 dark:bg-neutral-800 lg:block" />

                <div className="px-[18px] pb-1.5 pt-4 text-[11px] font-bold uppercase tracking-[0.08em] text-[#aaa] dark:text-neutral-500">
                  {item.heading}
                </div>

                <div className="px-2.5">
                  {item.items.map((link) => (
                    <DropdownLink
                      key={link.href}
                      item={link}
                      onClick={closeAll}
                    />
                  ))}
                </div>
              </div>
            </li>
              );
            })}

            {/* Mobile Contact Button Link inside menu list */}
            <li className="mt-3 w-full lg:hidden">
              <Link
                href="/contact"
                onClick={closeAll}
                className="flex w-full items-center justify-center rounded-full border-2 border-[#C12172] py-2.5 text-center text-sm font-semibold text-[#C12172] transition-all hover:bg-[#C12172] hover:text-white"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3 sm:gap-4">
            <CartIcon />
            <Link
              href="/contact"
              onClick={closeAll}
              className="hidden whitespace-nowrap rounded-full border-2 border-[#C12172] px-4 py-2 text-sm font-semibold text-[#C12172] transition-all duration-300 hover:bg-[#C12172] hover:text-white lg:inline-block xl:px-5 xl:text-base"
            >
              Contact Us
            </Link>

            {isLoggedIn ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen((o) => !o)}
                  aria-label="Account menu"
                  className="flex items-center gap-2 rounded-full bg-gradient-to-br from-[#C12172] to-[#d63d88] px-3 py-2 text-xs font-semibold text-white shadow-[0_10px_25px_rgba(193,33,114,0.3)] transition-transform hover:-translate-y-[2px] sm:px-3.5 sm:py-2.5 sm:text-sm"
                >
                  <FaUserCircle className="text-base sm:text-lg" />
                  {userName && (
                    <span className="hidden max-w-[100px] truncate sm:inline lg:max-w-[120px]">
                      {userName}
                    </span>
                  )}
                  <FaChevronDown
                    className={`text-[10px] transition-transform duration-200 ${
                      userMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 top-[calc(100%+10px)] w-52 overflow-hidden rounded-2xl border border-[#f0f0f0] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.14)] dark:border-neutral-700 dark:bg-neutral-800 sm:w-56">
                    {/* Name header */}
                    <div className="border-b border-[#f0f0f0] px-4 py-3 dark:border-neutral-700">
                      <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#aaa] dark:text-neutral-500">
                        Signed in as
                      </p>
                      <p className="mt-0.5 truncate text-sm font-semibold text-[#111] dark:text-neutral-100">
                        {userName || "My account"}
                      </p>
                    </div>

                    {/* Dashboard */}
                    <Link
                      href="/dashboard"
                      onClick={closeAll}
                      className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#111] transition-colors hover:bg-[#C12172]/10 hover:text-[#C12172] dark:text-neutral-100 dark:hover:bg-[#C12172]/20 dark:hover:text-[#e94196]"
                    >
                      Dashboard
                    </Link>

                    {/* Logout */}
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2 border-t border-[#f0f0f0] px-4 py-3 text-left text-sm font-medium text-[#C12172] transition-colors hover:bg-[#C12172]/10 dark:border-neutral-700 dark:text-[#e94196] dark:hover:bg-[#C12172]/20"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login">
                <button aria-label="Login" className="flex items-center justify-center rounded-full bg-gradient-to-br from-[#C12172] to-[#d63d88] p-2.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(193,33,114,0.3)] transition-transform hover:-translate-y-[2px] sm:px-3 sm:py-2.5">
                  <FaUserCircle className="text-lg" />
                </button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-[10px] border-2 border-[#eee] bg-white text-base text-[#111] hover:border-[#C12172] hover:text-[#C12172] dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 sm:h-11 sm:w-11 sm:text-lg lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}