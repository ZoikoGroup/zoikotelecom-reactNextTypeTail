import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff, FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import SocialButtons from "./SocialButtons";
import {
  headerClass,
  headingClass,
  subheadingClass,
  labelClass,
  inputClass,
  inputIconClass,
  eyeButtonClass,
  primaryButtonClass,
  linkClass,
} from "./ui";


type Tab = "login" | "register" | "reset-password";
type Props = {
  setActiveTab: (tab: Tab) => void;
};

const API_URL =  process.env.NEXT_PUBLIC_API_BASE_URL;

export default function LoginForm({ setActiveTab }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/accounts/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Invalid credentials");
        return;
      }

      // Save token
      localStorage.setItem("token", data.token);

      // Save user (optional)
      localStorage.setItem("user", JSON.stringify(data.user));

       //  THIS IS THE FIX
  window.dispatchEvent(new Event("authChanged"));

      toast.success("Logged in successfully!");
      // Redirect
      router.push("/dashboard");

    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full">
      {/* HEADER */}
      <header className={headerClass}>
        <h2 className={headingClass}>Welcome back</h2>
        <p className={subheadingClass}>Sign in to your MyZoiko account.</p>
      </header>

      {/* FORM */}
      <form onSubmit={handleLogin} autoComplete="off" className="flex flex-col gap-5">
        {/* EMAIL */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email address
          </label>
          <div className="relative">
            <FiMail size={20} className={inputIconClass} aria-hidden="true" />
            <input
              id="email"
              type="email"
              autoComplete="new-email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div>
          <label htmlFor="password" className={labelClass}>
            Password
          </label>
          <div className="relative">
            <FiLock size={20} className={inputIconClass} aria-hidden="true" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`${inputClass} pr-12`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className={eyeButtonClass}
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>
        </div>

        {/* REMEMBER + FORGOT */}
        <div className="flex items-center justify-between gap-3 text-[15px]">
          <label className="flex cursor-pointer items-center gap-2.5 text-gray-800 dark:text-gray-300">
            <input
              type="checkbox"
              className="h-5 w-5 rounded accent-[#B21F97]"
            />
            Remember this device
          </label>
          <button
            type="button"
            onClick={() => setActiveTab("reset-password")}
            className={linkClass}
          >
            Forgot password?
          </button>
        </div>

        {/* LOGIN BUTTON */}
        <button type="submit" className={primaryButtonClass}>
          {loading ? "Logging in..." : "Log in"}
          {!loading && (
            <FiArrowRight
              size={22}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          )}
        </button>
      </form>

      {/* Social login (Google + Facebook) */}
      <div className="mt-6">
        <SocialButtons redirectTo="/dashboard" />
      </div>

      {/* FOOTER */}
      <p className="mt-6 text-center text-base text-gray-700 dark:text-gray-300">
        New to Zoiko Telecom?{" "}
        <button
          type="button"
          onClick={() => setActiveTab("register")}
          className={`${linkClass} ml-1`}
        >
          Register
        </button>
      </p>
    </section>
  );
}
