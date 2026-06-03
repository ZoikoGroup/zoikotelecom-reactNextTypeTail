"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const forYouLinks = [
  {
    href: "/business-solutions",
    title: "Business Solutions",
    desc: "Smart telecom services for businesses",
    active: true,
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
];


interface DropdownItem {
  href: string;
  title: string;
  desc: string;
  active?: boolean;
}

function DropdownLink({ item, onClick }: { item: DropdownItem; onClick: () => void }) {
  return (
 <Link
  href={item.href}
  onClick={onClick}
  className="group/item mb-0.5 block rounded-xl px-3 py-2.5 transition-colors hover:bg-[#C12172]/10 dark:hover:bg-[#C12172]/20"
>
  <h4 className="text-[15px] font-semibold leading-tight text-[#111] group-hover/item:text-[#C12172] dark:text-neutral-100 dark:group-hover/item:text-[#e94196]">
    {item.title}
  </h4>
  <p className="mt-1 text-[12.5px] leading-snug text-[#888] dark:text-neutral-400">
    {item.desc}
  </p>
</Link>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-[9999] w-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:bg-neutral-900 dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      <div className="mx-auto max-w-[1320px] px-5">
        <nav className="flex h-[95px] items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeAll}>
              <Image
                src="/Images/logo.png"
                alt="Zoiko Telecom"
                width={180}
                height={50}
                priority
                className="w-[140px] sm:w-[180px]"
              />
            </Link>
          </div>

          {/* Nav Links */}
          <ul
            className={`
          ${menuOpen ? "flex" : "hidden"}
          absolute left-0 right-0 top-[95px] flex-col items-start gap-0
          border-t border-[#eee] bg-white px-5 pb-5 pt-2.5
          shadow-[0_12px_30px_rgba(0,0,0,0.08)]
          dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-[0_12px_30px_rgba(0,0,0,0.4)]
          lg:static lg:flex lg:flex-row lg:items-center lg:gap-11
          lg:border-0 lg:p-0 lg:shadow-none dark:lg:bg-transparent
        `}
          >
            {[
              { href: "/ee-mobile-plans", label: "EE Mobile" },
              { href: "/bt-broadband", label: "BT-Broadband" },
              { href: "/landlines", label: "Landlines" },
            ].map((item) => (
              <li
                key={item.href}
                className="w-full border-b border-[#f5f5f5] dark:border-neutral-800 lg:w-auto lg:border-0 dark:lg:border-0"
              >
                <Link
                  href={item.href}
                  onClick={closeAll}
                  className="block py-3.5 text-[17px] font-medium text-[#111] transition-colors hover:text-[#C12172] dark:text-neutral-100 dark:hover:text-[#e94196] lg:py-0 lg:text-base"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Dropdown */}
            <li className="group relative w-full border-b border-[#f5f5f5] dark:border-neutral-800 lg:w-auto lg:border-0 dark:lg:border-0">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex w-full items-center gap-2 py-3.5 text-left text-[17px] font-medium text-[#111] transition-colors hover:text-[#C12172] dark:text-neutral-100 dark:hover:text-[#e94196] lg:w-auto lg:py-0 lg:text-base"
              >
                Business
                <FaChevronDown
                  className={`
                text-xs transition-transform duration-300
                ${dropdownOpen ? "rotate-180" : ""}
                lg:group-hover:rotate-180
              `}
                />
              </button>

              {/* Mega Dropdown */}
              <div
                className={`
              ${dropdownOpen ? "block" : "hidden"}
              relative w-full overflow-hidden rounded-2xl border border-[#f0f0f0] bg-white pb-3
              dark:border-neutral-700 dark:bg-neutral-800

              lg:invisible lg:absolute lg:left-1/2 lg:top-[150%] lg:block
              lg:w-[340px] lg:-translate-x-1/2 lg:rounded-2xl lg:border lg:border-[#eee]
              lg:opacity-0 lg:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              lg:transition-all lg:duration-300
              dark:lg:border-neutral-700 dark:lg:bg-neutral-800
              dark:lg:shadow-[0_20px_60px_rgba(0,0,0,0.5)]

              lg:group-hover:visible lg:group-hover:top-[135%] lg:group-hover:opacity-100

              ${dropdownOpen ? "lg:!visible lg:!top-[135%] lg:!opacity-100" : ""}
            `}
              >
                {/* Arrow (desktop only) */}
                <span
                  className="
                absolute -top-2 left-1/2 hidden h-4 w-4 -translate-x-1/2 rotate-45
                border-l border-t border-[#eee] bg-white
                dark:border-neutral-700 dark:bg-neutral-800
                lg:block
              "
                />

                {/* FOR YOU */}
                <div className="px-[18px] pb-1.5 pt-4 text-[11px] font-bold uppercase tracking-[0.08em] text-[#aaa] dark:text-neutral-500">
                  For You
                </div>
                <div className="px-2.5">
                  {forYouLinks.map((item) => (
                    <DropdownLink key={item.href} item={item} onClick={closeAll} />
                  ))}
                </div>
              </div>
            </li>

            <li className="w-full border-b border-[#f5f5f5] dark:border-neutral-800 lg:w-auto lg:border-0 dark:lg:border-0">
              <Link
                href="/about"
                onClick={closeAll}
                className="block py-3.5 text-[17px] font-medium text-[#111] transition-colors hover:text-[#C12172] dark:text-neutral-100 dark:hover:text-[#e94196] lg:py-0 lg:text-base"
              >
                About Us
              </Link>
            </li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              onClick={closeAll}
              className="hidden whitespace-nowrap rounded-full border-2 border-[#C12172] px-7 py-3 text-base font-semibold text-[#C12172] transition-all duration-300 hover:bg-[#C12172] hover:text-white lg:inline-block"
            >
              Contact Us
            </Link>

            <button
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-br from-[#C12172] to-[#d63d88] text-lg text-white shadow-[0_10px_25px_rgba(193,33,114,0.3)] transition-transform hover:-translate-y-[3px] sm:h-[50px] sm:w-[50px] sm:text-[22px]"
              aria-label="User account"
            >
              <FaUserCircle />
            </button>

            <button
              className="flex h-11 w-11 items-center justify-center rounded-[10px] border-2 border-[#eee] bg-white text-lg text-[#111] transition-colors hover:border-[#C12172] hover:text-[#C12172] dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-[#e94196] dark:hover:text-[#e94196] lg:hidden"
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