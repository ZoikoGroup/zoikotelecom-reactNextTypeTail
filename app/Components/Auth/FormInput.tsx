"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type?: string;
  error?: string;
}

export default function FormInput({
  label,
  id,
  type = "text",
  error,
  ...props
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="mb-5 w-full">
      <label
        htmlFor={id}
        className="mb-1.5 block text-[13.5px] font-medium text-[#006366] dark:text-[#2daeb3]"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          className={`w-full rounded-[10px] border border-[#d9d9d9] bg-white px-4 py-[13px] text-[14px] text-[#111] transition-all placeholder:text-[#aaa] focus:border-[#006366] focus:outline-none focus:ring-1 focus:ring-[#006366] dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-500 dark:focus:border-[#2daeb3] dark:focus:ring-[#2daeb3] ${
            error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
          } ${isPassword ? "pr-11" : ""}`}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555] transition-colors hover:text-[#111] dark:text-neutral-400 dark:hover:text-neutral-100"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          </button>
        )}
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
