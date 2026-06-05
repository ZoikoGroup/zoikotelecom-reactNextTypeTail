import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";


type Tab = "login" | "register" | "reset-password";
type Props = {
  setActiveTab: (tab: Tab) => void;
};

const API_URL =  process.env.NEXT_PUBLIC_API_BASE_URL;

export default function LoginForm({ setActiveTab }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/accounts/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Invalid credentials");
        return;
      }

      // Save token
      localStorage.setItem("token", data.token);

      // Save user (optional)
      localStorage.setItem("user", JSON.stringify(data.user));

       //  THIS IS THE FIX
  window.dispatchEvent(new Event("authChanged"));

      toast.success("Logged in successfully!");
      // Redirect
      router.push("/dashboard");

    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full dark:bg-gray-950 dark:text-white">
      {/* HEADER */}
      <header className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
          Welcome back!
        </h3>

        <p className="text-gray-600 mt-2 dark:text-gray-300">
          Enter your credentials to access your account.
        </p>
      </header>

      {/* FORM */}
      <form onSubmit={handleLogin} autoComplete="off" className="flex flex-col gap-5">
        {/* EMAIL */}
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Username or Email Address
          </label>

          <input
            id="email"
            type="email"
            autoComplete="new-email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mt-1 px-4 py-2.5 border border-gray-300 rounded-lg
                       focus:ring-2 focus:ring-[#10446C] focus:outline-none
                       dark:bg-gray-900 dark:border-gray-700 dark:text-white"
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Password
          </label>
        <div className="relative mt-1">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mt-1 px-4 py-2.5 border border-gray-300 rounded-lg
                       focus:ring-2 focus:ring-[#10446C] focus:outline-none
                       dark:bg-gray-900 dark:border-gray-700 dark:text-white"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
          </div>
        </div>

        {/* GOOGLE + REMEMBER */}
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <input
              type="checkbox"
              className="accent-[#10446C] dark:accent-blue-500"
            />
            Remember for 30 days
          </label>
        </div>

        {/* LOGIN BUTTON */}
        <button
          type="submit"
          className="w-full bg-[#10446C] text-white py-3 rounded-lg font-semibold
                     hover:bg-[#0d3555] transition
                     dark:bg-blue-600 dark:hover:bg-blue-700"
        >
            {loading ? "Logging in..." : "Log In"}
        </button>
      </form>

      {/* FOOTER */}
      <footer className="text-sm text-center text-gray-600 dark:text-gray-400 mt-6">
        {/* Forgot password | create account */}
        <p className="mt-4">
          <button
            type="button"
            onClick={() => setActiveTab("reset-password")}
            className="text-[#10446C] dark:text-blue-400 hover:underline"
          >
            Forgot Password?
          </button>

          <span className="mx-1">|</span>

          <button
            type="button"
            onClick={() => setActiveTab("register")}
            className="text-[#10446C] dark:text-blue-400 hover:underline"
          >
            Create Account
          </button>
        </p>
        
        {/* OR continue with */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 border-t border-gray-300 "></div>

          <span className="text-sm text-gray-500 whitespace-nowrap">
            Or continue with
          </span>

          <div className="flex-1 border-t border-gray-300 "></div>
        </div>

        {/* Login with google */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg text-sm 
                       hover:bg-gray-50 transition
                       dark:border-gray-700 dark:hover:bg-gray-800"
        >
          <Image
            src="/google-logo.png"
            alt="Google login"
            height={60}
            width={60}
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <span>Login with Google</span>
        </button>
      </footer>
    </section>
  );
}
