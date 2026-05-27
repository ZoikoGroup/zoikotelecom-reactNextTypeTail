"use client";

import React, { useState } from "react";
import FormInput from "./FormInput";

interface RegisterFormProps {
  onSwitchTab?: (tab: "login" | "register" | "reset") => void;
}

export default function RegisterForm({ onSwitchTab }: RegisterFormProps) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register submitted:", formData);
    // Add real registration logic here later
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h2 className="mb-2 text-[26px] font-medium text-[#111] dark:text-white">
        Create Account
      </h2>
      <p className="mb-8 text-[14.5px] text-[#444] dark:text-neutral-400">
        Fill in your details to get started.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <FormInput
          label="Username"
          id="register-username"
          placeholder="Choose a username"
          required
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />

        <FormInput
          label="Email"
          id="register-email"
          type="email"
          placeholder="your@email.com"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <FormInput
          label="Password"
          id="register-password"
          type="password"
          placeholder="Create a strong password"
          required
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />

        <FormInput
          label="Confirm Password"
          id="register-confirm"
          type="password"
          placeholder="Re-enter your password"
          required
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />

        <button
          type="submit"
          className="mt-4 w-full rounded-[10px] bg-[#7b2d8b] py-[14px] text-[15px] font-semibold text-white transition-colors hover:bg-[#6c237b]"
        >
          Create Account
        </button>
      </form>

      <div className="mt-8 flex items-center justify-center gap-1.5 text-[13.5px] text-[#555] dark:text-neutral-400 font-medium">
        Already have an account?{" "}
        <button
          type="button"
          onClick={() => onSwitchTab?.("login")}
          className="text-[#006366] transition-colors hover:text-[#7b2d8b] dark:text-[#2daeb3] dark:hover:text-[#80e5eb]"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
