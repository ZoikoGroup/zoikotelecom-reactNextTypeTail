"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "../Components/Auth/LoginForm";
import RegisterForm from "../Components/Auth/RegisterForm";
import ResetPasswordForm from "../Components/Auth/ResetPasswordForm";

type Tab = "login" | "register" | "reset";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<Tab>("login");

  return (
    <main className="flex min-h-[calc(100vh-95px)] items-center justify-center bg-[#fafafa] p-4 dark:bg-neutral-950 sm:p-6 md:p-8 lg:p-12">
      <div className="mx-auto flex w-full max-w-[1150px] min-h-[730px] flex-col md:flex-row bg-white dark:bg-neutral-900 border border-[#eaeaea] dark:border-neutral-800 rounded-[24px] overflow-hidden shadow-sm">
        
        {/* Left Side: Image Panel */}
        <div className="relative hidden w-[43%] overflow-hidden md:block">
          <Image
            src="/Images/Login/Zoiko-Login.webp"
            alt="Zoiko Connections"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Right Side: Form Panel */}
        <div className="flex w-full md:w-[57%] flex-col justify-center px-6 py-8 sm:px-12 md:px-14 lg:px-20 bg-white dark:bg-neutral-900">
          {/* Logo centered */}
          <div className="mb-8 flex justify-center">
            <Link href="/">
              <Image
                src="/Images/logo.png"
                alt="Zoiko Telecom"
                width={180}
                height={50}
                className="w-[150px] sm:w-[170px]"
                priority
              />
            </Link>
          </div>

          {/* Tabs */}
          <div className="mb-8 flex border-b border-[#eaeaea] dark:border-neutral-800">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 pb-3 text-center text-[15px] font-medium transition-colors ${
                activeTab === "login"
                  ? "border-b-2 border-[#006366] text-[#006366] dark:border-[#008c91] dark:text-[#008c91]"
                  : "text-[#777] hover:text-[#111] dark:text-neutral-500 dark:hover:text-neutral-300"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`flex-1 pb-3 text-center text-[15px] font-medium transition-colors ${
                activeTab === "register"
                  ? "border-b-2 border-[#006366] text-[#006366] dark:border-[#008c91] dark:text-[#008c91]"
                  : "text-[#777] hover:text-[#111] dark:text-neutral-500 dark:hover:text-neutral-300"
              }`}
            >
              Register
            </button>
            <button
              onClick={() => setActiveTab("reset")}
              className={`flex-1 pb-3 text-center text-[15px] font-medium transition-colors ${
                activeTab === "reset"
                  ? "border-b-2 border-[#006366] text-[#006366] dark:border-[#008c91] dark:text-[#008c91]"
                  : "text-[#777] hover:text-[#111] dark:text-neutral-500 dark:hover:text-neutral-300"
              }`}
            >
              Reset Password
            </button>
          </div>

          {/* Render Active Form */}
          <div className="min-h-[350px]">
            {activeTab === "login" && <LoginForm onSwitchTab={setActiveTab} />}
            {activeTab === "register" && <RegisterForm onSwitchTab={setActiveTab} />}
            {activeTab === "reset" && <ResetPasswordForm onSwitchTab={setActiveTab} />}
          </div>
        </div>
        
      </div>

      {/* Floating Get in Touch Badge */}
      <div className="fixed right-0 top-1/2 z-50 flex -translate-y-1/2 select-none">
        <button className="bg-[#C12172] hover:bg-[#a11a5e] text-white px-3 py-5 rounded-l-2xl font-semibold text-[13px] uppercase tracking-widest transition-colors duration-200 shadow-md [writing-mode:vertical-rl] rotate-180 cursor-pointer">
          Get in touch
        </button>
      </div>
    </main>
  );
}
