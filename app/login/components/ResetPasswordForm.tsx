"use client";
import React, { useState }  from "react";
import toast from "react-hot-toast";
import { FiMail, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import {
  headerClass,
  headingClass,
  subheadingClass,
  labelClass,
  inputClass,
  inputIconClass,
  primaryButtonClass,
  linkClass,
} from "./ui";

const API_URL =  process.env.NEXT_PUBLIC_API_BASE_URL;

export default function ResetPasswordForm({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const [email, setEmail] = useState("");
  const handleForgotPassword = async () => {
  try {
    const res = await fetch(`${API_URL}/api/accounts/forgot-password/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Frontend-Origin": window.location.origin,
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success(data.message);
    } else {
      toast.error(data.error);
    }

  } catch (err) {
    toast.error("Something went wrong");
  }
};

  return (
    <section className="w-full" id="reset-password">
      {/* Header */}
      <header className={headerClass}>
        <h2 className={headingClass}>Reset your password</h2>
        <p className={subheadingClass}>
          Enter your email address and we&apos;ll send you a link to reset your
          password.
        </p>
      </header>

      {/* Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleForgotPassword();
        }}
        className="flex flex-col gap-5"
      >
        <div>
          <label htmlFor="email" className={labelClass}>
            Email address *
          </label>
          <div className="relative">
            <FiMail size={20} className={inputIconClass} aria-hidden="true" />
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="name@example.com"
              required
              className={inputClass}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Submit */}
        <button type="submit" className={primaryButtonClass}>
          Send Reset Link
          <FiArrowRight
            size={22}
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </button>
      </form>

      {/* Footer */}
      <p className="mt-6 text-center">
        <button
          type="button"
          onClick={() => setActiveTab("login")}
          className={`${linkClass} inline-flex items-center gap-1.5`}
        >
          <FiArrowLeft aria-hidden="true" />
          Back to Login
        </button>
      </p>
    </section>
  );
}
