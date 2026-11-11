"use client";

import { NAV_MAIN } from "./data";
import MainNav from "./MainNav";
import MegaMenu from "./MegaMenu";
import TopBar from "./TopBar";
import { useMegaMenu } from "./useMegaMenu";

export default function Navbar() {
  const { openId, open, scheduleClose, cancelClose, closeNow } = useMegaMenu();
  const menu = NAV_MAIN.find((item) => item.id === openId)?.dropdown;

  return (
    <header
      className="relative z-50 w-full bg-white"
      onMouseLeave={scheduleClose}
    >
      <TopBar />
      <MainNav openId={openId} onOpen={open} onNavigate={closeNow} />
      {menu && (
        <MegaMenu
          key={openId}
          menu={menu}
          onNavigate={closeNow}
          onEnter={cancelClose}
        />
      )}
    </header>
  );
}
