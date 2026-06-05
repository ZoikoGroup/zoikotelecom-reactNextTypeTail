"use client";
import React, { useState }  from "react";
import Link from "next/link";
import toast from "react-hot-toast";

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
    <section
      className="w-full dark:bg-gray-950 dark:text-white"
      id="reset-password"
    >
      
      {/* Header */}
      <header className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
          Reset Password
        </h3>

        <p className="text-gray-600 mt-2 dark:text-gray-300">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
      </header>

      {/* Form */}
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          handleForgotPassword();
        }}
      className="flex flex-col gap-5">
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email Address *
          </label>

          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            required
            className="w-full mt-1 px-4 py-2.5 border border-gray-300 rounded-lg
                       focus:ring-2 focus:ring-[#10446C] focus:outline-none
                       dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#10446C] text-white py-3 rounded-lg font-semibold
                     hover:bg-[#0d3555] transition
                     dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Send Reset Link
        </button>
      </form>

      {/* Footer */}
      <footer className="text-sm text-center text-gray-600 dark:text-gray-400 mt-6">
        <button
          onClick={() => setActiveTab("login")}
          className="text-[#10446C] dark:text-blue-400 hover:underline"
        >
          Back to Login
        </button>
      </footer>
    </section>
  );
}