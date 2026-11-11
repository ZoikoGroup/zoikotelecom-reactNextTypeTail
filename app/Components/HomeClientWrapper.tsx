"use client";

import { ReactNode } from "react";
import BlackFridayPopup from "./BlackFridayPopup";
// import WelcomePopup from "@/components/WelcomePopup";

export default function HomeClientWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {/* The popup runs here client-side */}
      <BlackFridayPopup showOnEveryReload={true} />

      {/* Your massive 2000-line homepage content */}
      {children}
    </>
  );
}
