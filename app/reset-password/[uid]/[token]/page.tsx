"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FormInput from "../../../Components/Auth/FormInput";

interface PageProps {
  params: Promise<{
    uid: string;
    token: string;
  }>;
}

export default function ResetPasswordConfirmPage({ params }: PageProps) {
  const { uid, token } = React.use(params);

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      const baseUrl = (process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000").replace(/\/$/, "");
      const response = await fetch(`${baseUrl}/api/accounts/reset-password/${uid}/${token}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          password: formData.password,
          password2: formData.confirmPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Password reset successful! Redirecting you to login...");
        setFormData({ password: "", confirmPassword: "" });
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        setError(data.non_field_errors?.[0] || data.password?.[0] || data.error || "Failed to reset password. The link may have expired or is invalid.");
      }
    } catch (err) {
      console.error("Reset password confirm error:", err);
      setError("Failed to connect to the authentication server.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <h2 className="mb-2 text-[26px] font-medium text-[#111] dark:text-white">
              Create New Password
            </h2>
            <p className="mb-8 text-[14.5px] text-[#444] dark:text-neutral-400">
              Enter your new password below to reset your credentials.
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
                label="New Password"
                id="reset-password"
                type="password"
                placeholder="Enter a strong new password"
                required
                requiredStar={true}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />

              <FormInput
                label="Confirm New Password"
                id="reset-confirm"
                type="password"
                placeholder="Confirm your new password"
                required
                requiredStar={true}
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
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
                    Updating Password...
                  </>
                ) : (
                  "Reset Password"
                )}
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center gap-1.5 text-[13.5px] font-medium">
              <Link href="/login" className="text-[#006366] transition-colors hover:text-[#C12172] dark:text-[#2daeb3] dark:hover:text-[#80e5eb]">
                Back to Login
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </main>
  );
}
