"use client";

import React, { useState } from "react";
import FormInput from "./FormInput";

interface ResetPasswordFormProps {
  onSwitchTab?: (tab: "login" | "register" | "reset") => void;
}

export default function ResetPasswordForm({ onSwitchTab }: ResetPasswordFormProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset password requested for:", email);
    // Add real reset logic here later
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h2 className="mb-2 text-[26px] font-medium text-[#111] dark:text-white">
        Reset Password
      </h2>
      <p className="mb-8 text-[14.5px] text-[#444] dark:text-neutral-400">
        Enter your email address and we'll send you a link to reset your password.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <FormInput
          label="Email Address"
          id="reset-email"
          type="email"
          placeholder="your@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="mt-4 w-full rounded-[10px] bg-[#7b2d8b] py-[14px] text-[15px] font-semibold text-white transition-colors hover:bg-[#6c237b]"
        >
          Send Reset Link
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
