"use client";

import React, { useState } from "react";
import FormInput from "./FormInput";

interface ResetPasswordFormProps {
  onSwitchTab?: (tab: "login" | "register" | "reset") => void;
}

export default function ResetPasswordForm({ onSwitchTab }: ResetPasswordFormProps) {
  const [email, setEmail] = useState("");
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
      const response = await fetch(`${baseUrl}/api/accounts/forgot-password/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-Frontend-Origin": window.location.origin,
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Password reset link sent successfully! Please check your email inbox.");
        setEmail("");
      } else {
        setError(data.non_field_errors?.[0] || data.email?.[0] || data.error || "Failed to request password reset.");
      }
    } catch (err) {
      console.error("Forgot password error:", err);
      setError("Failed to connect to the authentication server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h2 className="mb-2 text-[26px] font-medium text-[#111] dark:text-white">
        Reset Password
      </h2>
      <p className="mb-8 text-[14.5px] text-[#444] dark:text-neutral-400">
        Enter your email address and we'll send you a link to reset your password.
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
          label="Email Address"
          id="reset-email"
          type="email"
          placeholder="your@email.com"
          required
          requiredStar={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 w-full rounded-[10px] bg-[#C12172] py-[14px] text-[15px] font-semibold text-white transition-colors hover:bg-[#a01a60] disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending Reset Link...
            </>
          ) : (
            "Send Reset Link"
          )}
        </button>
      </form>

      <div className="mt-8 flex items-center justify-center gap-1.5 text-[13.5px] font-medium">
        <button
          type="button"
          onClick={() => onSwitchTab?.("login")}
          className="text-[#006366] transition-colors hover:text-[#7b2d8b] dark:text-[#2daeb3] dark:hover:text-[#80e5eb]"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}
