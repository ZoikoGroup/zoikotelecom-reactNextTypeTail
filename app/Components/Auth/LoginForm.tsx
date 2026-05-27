"use client";

import React, { useState } from "react";
import FormInput from "./FormInput";

interface LoginFormProps {
  onSwitchTab?: (tab: "login" | "register" | "reset") => void;
}

export default function LoginForm({ onSwitchTab }: LoginFormProps) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsSubmitting(true);

    try {
      const baseUrl = (process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000").replace(/\/$/, "");
      const response = await fetch(`${baseUrl}/api/accounts/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Login successful! Redirecting...");
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        // Handle standard DRF errors
        const errMsg = 
          data.non_field_errors?.[0] || 
          data.detail || 
          data.error || 
          (typeof data === "string" ? data : null) ||
          "Invalid credentials. Please try again.";
        setError(errMsg);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Failed to connect to the authentication server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h2 className="mb-2 text-[26px] font-medium text-[#111] dark:text-white">
        Welcome back!
      </h2>
      <p className="mb-8 text-[14.5px] text-[#444] dark:text-neutral-400">
        Enter your credentials to access your account.
      </p>

      {error && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 rounded-xl text-sm font-medium border border-red-200 dark:border-red-900/50 animate-fadeIn">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 rounded-xl text-sm font-medium border border-green-200 dark:border-green-900/50 animate-fadeIn">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <FormInput
          label="Username or Email Address"
          id="login-username"
          placeholder=""
          required
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />

        <FormInput
          label="Password"
          id="login-password"
          type="password"
          placeholder=""
          required
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />

        <div className="mb-6 mt-1 flex items-center gap-2">
          <input
            type="checkbox"
            id="remember"
            className="h-4 w-4 rounded border-[#ddd] text-[#C12172] focus:ring-[#C12172] dark:border-neutral-600 dark:bg-neutral-800 dark:ring-offset-neutral-900"
            checked={formData.remember}
            onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
          />
          <label
            htmlFor="remember"
            className="text-[13.5px] text-[#444] dark:text-neutral-400"
          >
            Remember for 30 days
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-[10px] bg-[#8c2269] py-[14px] text-[15px] font-semibold text-white transition-colors hover:bg-[#761c59] mt-2 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Logging In...
            </>
          ) : (
            "Log In"
          )}
        </button>
      </form>

      <div className="mt-8 flex items-center justify-center gap-2 text-[13.5px] text-[#555] dark:text-neutral-400 font-medium">
        <button
          type="button"
          onClick={() => onSwitchTab?.("reset")}
          className="text-[#006366] transition-colors hover:text-[#7b2d8b] dark:text-[#2daeb3] dark:hover:text-[#80e5eb]"
        >
          Forgot Password?
        </button>
        <span className="text-[#ccc] select-none">|</span>
        <button
          type="button"
          onClick={() => onSwitchTab?.("register")}
          className="text-[#006366] transition-colors hover:text-[#7b2d8b] dark:text-[#2daeb3] dark:hover:text-[#80e5eb]"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
