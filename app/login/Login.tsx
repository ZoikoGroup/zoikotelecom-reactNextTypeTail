"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiLock } from "react-icons/fi";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ResetPasswordForm from "./components/ResetPasswordForm";

type Tab = "login" | "register" | "reset-password";

// const LOGIN_BG = "/Images/Login_BG.jpg";
const LOGIN_BG = "/Images/Telecom_Login_BG.jpg";
const LOGIN_BG_ALT =
  "All your connections. One place. Manage your mobile, broadband and business communications with clarity and confidence.";

/**
 * The background artwork (1440×960) with our logo laid over it in the empty
 * space above the baked-in headline. Positions are percentages of the artwork,
 * so the logo stays aligned with the headline at any rendered size.
 * Headline begins at x=79px (5.5%), y=110px (11.5%) of the source image.
 */
function Artwork({ alt, sizes }: { alt: string; sizes: string }) {
  return (
    <>
      <Image src={LOGIN_BG} alt={alt} fill priority sizes={sizes} className="object-cover" />
      {/* <Image
        src="/Images/logo.png"
        alt=""
        width={301}
        height={98}
        priority
        className="absolute left-[5.5%] top-[2%] h-auto w-[17%]"
      /> */}
    </>
  );
}

const TABS: { id: Tab; label: string }[] = [
  { id: "login", label: "Login" },
  { id: "register", label: "Register" },
  { id: "reset-password", label: "Reset Password" },
];

export default function Login() {
  const [activeTab, setActiveTab] = useState<Tab>("login");

  return (
    <section
      aria-labelledby="login-hero-heading"
      className="relative isolate w-full overflow-hidden bg-[#f2f4f8] dark:bg-gray-950 dark:text-white xl:min-h-[66.666vw]"
    >
      {/* The headline is part of the artwork; keep it available to screen readers */}
      <h1 id="login-hero-heading" className="sr-only">
        All your connections. One place.
      </h1>

      {/* Desktop: full-bleed background artwork, anchored top-left so the logo + headline
          stay visible. The 3:2 box is sized to cover the section (like background-size: cover)
          using container units, so the logo overlay scales exactly with the artwork. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden overflow-hidden [container-type:size] xl:block"
      >
        <div className="absolute left-0 top-0 aspect-[3/2] w-[max(100cqw,150cqh)]">
          <Artwork alt="" sizes="100vw" />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-8 sm:px-8 md:py-12 xl:min-h-[66.666vw] xl:grid-cols-[1fr_520px] xl:px-12">
        {/* Below xl: show the artwork as a banner above the card */}
        <div className="relative mx-auto aspect-[3/2] w-full max-w-[640px] overflow-hidden rounded-3xl shadow-lg xl:hidden">
          <Artwork alt={LOGIN_BG_ALT} sizes="(max-width: 640px) 100vw, 640px" />
        </div>

        {/* Desktop spacer – the artwork shows through here */}
        <div className="hidden xl:block" aria-hidden="true" />

        {/* Auth card */}
        <div className="w-full max-w-[520px] justify-self-center overflow-hidden rounded-3xl border border-white/70 bg-white shadow-2xl shadow-[#5E2B97]/15 dark:border-gray-800 dark:bg-gray-950">
          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Account options"
            className="grid grid-cols-3 border-b border-gray-200 bg-gray-50/90 dark:border-gray-800 dark:bg-gray-900"
          >
            {TABS.map(({ id, label }) => {
              const active = activeTab === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(id)}
                  className={`relative py-4 text-sm font-semibold transition sm:text-base ${
                    active
                      ? "bg-white text-[#B21F97] dark:bg-gray-950 dark:text-pink-400"
                      : "text-gray-800 hover:text-[#B21F97] dark:text-gray-300"
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute inset-x-6 bottom-0 h-1 rounded-t-full bg-linear-to-r from-[#B21F97] to-[#8A2BB9]" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="px-6 pb-6 pt-8 sm:px-9">
            <div className="mb-5 flex justify-center">
              <Image
                src="/Images/logo.png"
                alt="Zoiko Telecom"
                width={301}
                height={98}
                className="h-auto w-56"
              />
            </div>

            {/* Render forms */}
            {activeTab === "login" && <LoginForm setActiveTab={setActiveTab} />}
            {activeTab === "register" && <RegisterForm />}
            {activeTab === "reset-password" && (
              <ResetPasswordForm
                setActiveTab={(tab: string) => setActiveTab(tab as Tab)}
              />
            )}

            <p className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <FiLock aria-hidden="true" />
              Secure access to your account
            </p>

            <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-gray-100 pt-4 text-xs text-gray-500 sm:flex-row dark:border-gray-800 dark:text-gray-400">
              <nav aria-label="Legal" className="flex items-center gap-2">
                <Link href="/privacy-policy" className="hover:text-[#B21F97]">
                  Privacy
                </Link>
                <span aria-hidden="true">|</span>
                <Link href="/terms-and-conditions" className="hover:text-[#B21F97]">
                  Terms
                </Link>
                <span aria-hidden="true">|</span>
                <Link href="/faqs" className="hover:text-[#B21F97]">
                  Help
                </Link>
              </nav>
              <span>&copy; {new Date().getFullYear()} Zoiko Telecom Ltd.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
