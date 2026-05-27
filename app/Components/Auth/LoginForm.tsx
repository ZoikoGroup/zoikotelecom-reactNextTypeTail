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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    // Add real authentication logic here later
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h2 className="mb-2 text-[26px] font-medium text-[#111] dark:text-white">
        Welcome back!
      </h2>
      <p className="mb-8 text-[14.5px] text-[#444] dark:text-neutral-400">
        Enter your credentials to access your account.
      </p>

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
          className="w-full rounded-[10px] bg-[#7b2d8b] py-[14px] text-[15px] font-semibold text-white transition-colors hover:bg-[#6c237b] mt-2"
        >
          Log In
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
