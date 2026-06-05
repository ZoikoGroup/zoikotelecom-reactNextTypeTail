"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";

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

      // if (!res.ok) {
      //   console.error("Backend Error:", data);
      //   toast.error(JSON.stringify(data));
      //   return;
      // }
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
    <section className="w-full dark:bg-gray-950 dark:text-white">
      {/* Header */}
      <header className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
          Create Account
        </h3>

        <p className="text-gray-600 mt-2 dark:text-gray-300">
          Fill in your details to get started.
        </p>
      </header>
      {showVerificationMessage && (
        <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4">
          <h4 className="font-semibold text-green-700">
            Verify Your Email
          </h4>

          <p className="mt-2 text-sm text-green-600">
            A verification link has been sent to your email address.
            If you don't see the email, check your Spam or Junk folder.
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
          <label
            htmlFor="username"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Username *
          </label>

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
            className="w-full mt-1 px-4 py-2.5 border border-gray-300 rounded-lg
                       focus:ring-2 focus:ring-[#10446C] focus:outline-none
                       dark:bg-gray-900 dark:border-gray-700 dark:text-white"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email *
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

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Password *
          </label>

          <div className="relative mt-1">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Create a strong password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 pr-12 border border-gray-300 rounded-lg
               focus:ring-2 focus:ring-[#10446C] focus:outline-none
               dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Confirm Password *
          </label>

          <div className="relative mt-1">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Re-enter your password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2.5 pr-12 border border-gray-300 rounded-lg
                       focus:ring-2 focus:ring-[#10446C] focus:outline-none
                       dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400"
            >
              {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#10446C] text-white py-3 rounded-lg font-semibold
                     hover:bg-[#0d3555] transition
                     dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      {/* Footer */}
      <footer className="text-sm text-center text-gray-600 dark:text-gray-400 mt-6">
        Already have an account?
        <a
          href="/login"
          className="text-[#10446C] dark:text-blue-400 ml-1 hover:underline"
        >
          Sign In
        </a>
      </footer>
    </section>
  );
}
