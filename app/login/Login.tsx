"use client";
import { useState } from "react";
import Image from "next/image";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ResetPasswordForm from "./components/ResetPasswordForm";

export default function Login() {
  const [activeTab, setActiveTab] = useState<"login" | "register" | "reset-password">("login");
  return (
    <section
      aria-labelledby="benefits-heading"
      className="w-full bg-[#f2f4f5] py-12 dark:bg-gray-950  dark:text-white"
    >
      <div className=" max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="bg-white rounded-lg border-gray-50 grid grid-cols-1 lg:grid-cols-2 gap-10 dark:bg-gray-950  dark:text-white ">
          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/Images/Checkmypost/section-pi.png"
              alt="Customers enjoying reliable broadband connectivity"
              width={900}
              height={700}
              priority
              className="hidden lg:block w-full max-w-lg rounded-l-lg"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="px-2 md:px-4 py-12 ">
             <div className="flex justify-center">
            <img
              src="/image/Frame 1707483043.png"
              alt="Customers enjoying reliable broadband connectivity"
              className="w-50 h-30"
            />
          </div> 
            {/* tabs */}
            <div className="flex items-center gap-5 md:gap-6 mb-8 border-b-2 border-gray-200">
              <button
                onClick={() => setActiveTab("login")}
                className={`pb-1 font-semibold text-sm md:text-base ${
                  activeTab === "login"
                    ? "border-b-2 rounded-sm border-[#10446C]"
                    : "text-gray-500"
                }`}
              >
                {" "}
                Login
              </button>
              <button
                onClick={() => setActiveTab("register")}
                className={`pb-1 font-semibold text-sm md:text-base ${
                  activeTab === "register"
                    ? "border-b-2 rounded-sm border-[#10446C]"
                    : "text-gray-500"
                }`}
              >
                Register
              </button>
              <button
                onClick={() => setActiveTab("reset-password")}
                className={`pb-1 font-semibold text-sm md:text-base ${
                  activeTab === "reset-password"
                    ? "border-b-2 rounded-sm border-[#10446C]"
                    : "text-gray-500"
                }`}
              >
                Reset Password
              </button>
            </div>
            {/* Render forms */}
            {activeTab === "login" && <LoginForm setActiveTab={setActiveTab} />}
            {activeTab === "register" && <RegisterForm />}
            {activeTab === "reset-password" && (
              <ResetPasswordForm
                setActiveTab={(tab: string) =>
                  setActiveTab(tab as "login" | "register" | "reset-password")
                }
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
