"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import {
  getGoogleAccessToken,
  getFacebookAccessToken,
  exchangeSocialToken,
  persistAuth,
  type SocialProvider,
} from "../lib/socialAuth";

type Props = {
  /** Where to send the user after a successful social login. */
  redirectTo?: string;
};

export default function SocialButtons({ redirectTo = "/dashboard" }: Props) {
  const [pending, setPending] = useState<SocialProvider | null>(null);
  const router = useRouter();

  const handleSocial = async (provider: SocialProvider) => {
    if (pending) return;
    setPending(provider);
    try {
      const accessToken =
        provider === "google"
          ? await getGoogleAccessToken()
          : await getFacebookAccessToken();

      const data = await exchangeSocialToken(provider, accessToken);
      persistAuth(data);

      toast.success("Logged in successfully!");
      router.push(redirectTo);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Social login failed");
    } finally {
      setPending(null);
    }
  };

  const baseBtn =
    "w-full flex items-center justify-center gap-3 py-2.5 border rounded-lg text-sm font-medium " +
    "transition disabled:opacity-60 disabled:cursor-not-allowed";

  return (
    <div className="flex flex-col gap-3">
      {/* OR continue with */}
      <div className="flex items-center gap-4 my-2">
        <div className="flex-1 border-t border-gray-300 dark:border-gray-700" />
        <span className="text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
          Or continue with
        </span>
        <div className="flex-1 border-t border-gray-300 dark:border-gray-700" />
      </div>

      {/* Google */}
      <button
        type="button"
        onClick={() => handleSocial("google")}
        disabled={pending !== null}
        className={`${baseBtn} border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800`}
      >
        <FcGoogle size={20} />
        <span>{pending === "google" ? "Connecting..." : "Continue with Google"}</span>
      </button>

      {/* Facebook */}
      <button
        type="button"
        onClick={() => handleSocial("facebook")}
        disabled={pending !== null}
        className={`${baseBtn} border-[#1877F2] bg-[#1877F2] text-white hover:bg-[#166fe0]`}
      >
        <FaFacebookF size={18} />
        <span>
          {pending === "facebook" ? "Connecting..." : "Continue with Facebook"}
        </span>
      </button>
    </div>
  );
}

export { SocialButtons };