"use client";

import { useEffect, useState } from "react";
import { NAV_MAIN } from "./data";
import MainNav from "./MainNav";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import TopBar from "./TopBar";
import { useMegaMenu } from "./useMegaMenu";

export default function Navbar() {
  const { openId, open, scheduleClose, cancelClose, closeNow } = useMegaMenu();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menu = NAV_MAIN.find((item) => item.id === openId)?.dropdown;

  const navigate = () => {
    closeNow();
    setMobileOpen(false);
  };

  // Close the mobile menu on Escape and when the screen grows to desktop size.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1280px)");
    const onResize = () => {
      if (desktop.matches) setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [mobileOpen]);

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white"
      onMouseLeave={scheduleClose}
    >
      <TopBar />
      <MainNav
        openId={openId}
        onOpen={open}
        onNavigate={navigate}
        mobileOpen={mobileOpen}
        onToggleMobile={() => setMobileOpen((o) => !o)}
      />
      {menu && (
        <MegaMenu
          key={openId}
          menu={menu}
          onNavigate={navigate}
          onEnter={cancelClose}
        />
      )}
      {mobileOpen && <MobileMenu onNavigate={navigate} />}
    </header>
  );
}
