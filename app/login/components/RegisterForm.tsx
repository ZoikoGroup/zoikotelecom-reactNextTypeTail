"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff, FiMail, FiLock, FiUser, FiArrowRight } from "react-icons/fi";
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
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showVerificationMessage, setShowVerificationMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/accounts/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Frontend-Origin": window.location.origin, // Send the frontend origin for CORS validation
        },
        body: JSON.stringify({
          username,
          email,
          password,
          password2: confirmPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Backend Error:", data);

        let errorMessage = "Something went wrong";

        if (typeof data === "object") {
          const firstKey = Object.keys(data)[0];

          if (Array.isArray(data[firstKey])) {
            errorMessage = data[firstKey][0];
          } else {
            errorMessage = data[firstKey];
          }
        }

        toast.error(errorMessage);
        return;
      }

      toast.success("Registered successfully!");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setShowVerificationMessage(true);

      // ONLY redirect on success
      router.push("/login");
    } catch (error) {
      console.error(error);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full">
      {/* Header */}
      <header className={headerClass}>
        <h2 className={headingClass}>Create your account</h2>
        <p className={subheadingClass}>Fill in your details to get started.</p>
      </header>

      {showVerificationMessage && (
        <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-green-950/40">
          <h4 className="font-semibold text-green-700 dark:text-green-400">
            Verify Your Email
          </h4>

          <p className="mt-2 text-sm text-green-600 dark:text-green-300">
            A verification link has been sent to your email address.
            If you don&apos;t see the email, check your Spam or Junk folder.
          </p>
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}
        className="flex flex-col gap-5"
      >
        {/* Username */}
        <div>
          <label htmlFor="username" className={labelClass}>
            Username *
          </label>
          <div className="relative">
            <FiUser size={20} className={inputIconClass} aria-hidden="true" />
            <input
              id="username"
              type="text"
              autoComplete="username"
              placeholder="Choose a username"
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className={inputClass}
            />
          </div>
        </div>

        {/* Email */}
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

        {/* Password */}
        <div>
          <label htmlFor="password" className={labelClass}>
            Password *
          </label>
          <div className="relative">
            <FiLock size={20} className={inputIconClass} aria-hidden="true" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Create a strong password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

        {/* Confirm Password */}
        <div>
          <label htmlFor="confirmPassword" className={labelClass}>
            Confirm password *
          </label>
          <div className="relative">
            <FiLock size={20} className={inputIconClass} aria-hidden="true" />
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Re-enter your password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`${inputClass} pr-12`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              className={eyeButtonClass}
            >
              {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>
        </div>

        {/* Submit */}
        <button type="submit" className={primaryButtonClass}>
          {loading ? "Creating Account..." : "Create Account"}
          {!loading && (
            <FiArrowRight
              size={22}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          )}
        </button>
      </form>

      {/* Social signup (Google + Facebook) */}
      <div className="mt-6">
        <SocialButtons redirectTo="/dashboard" />
      </div>

      {/* Footer */}
      <p className="mt-6 text-center text-base text-gray-700 dark:text-gray-300">
        Already have an account?
        <a href="/login" className={`${linkClass} ml-1`}>
          Sign In
        </a>
      </p>
    </section>
  );
}
