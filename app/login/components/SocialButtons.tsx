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
    "w-full h-12 flex items-center justify-center gap-3 px-3 rounded-xl border border-gray-300 bg-white " +
    "text-[15px] font-medium text-gray-900 shadow-sm transition hover:bg-gray-50 hover:border-gray-400 " +
    "disabled:opacity-60 disabled:cursor-not-allowed " +
    "dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800";

  return (
    <div className="flex flex-col gap-4">
      {/* OR continue with */}
      <div className="flex items-center gap-4">
        <div className="flex-1 border-t border-gray-300 dark:border-gray-700" />
        <span className="text-[15px] text-gray-600 whitespace-nowrap dark:text-gray-400">
          or continue with
        </span>
        <div className="flex-1 border-t border-gray-300 dark:border-gray-700" />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {/* Google */}
        <button
          type="button"
          onClick={() => handleSocial("google")}
          disabled={pending !== null}
          className={baseBtn}
        >
          <FcGoogle size={22} className="shrink-0" />
          <span className="truncate">
            {pending === "google" ? "Connecting..." : "Continue with Google"}
          </span>
        </button>

        {/* Facebook */}
        <button
          type="button"
          onClick={() => handleSocial("facebook")}
          disabled={pending !== null}
          className={baseBtn}
        >
          <FaFacebookF size={20} className="shrink-0 text-[#1877F2]" />
          <span className="truncate">
            {pending === "facebook" ? "Connecting..." : "Continue with Facebook"}
          </span>
        </button>
      </div>
    </div>
  );
}

export { SocialButtons };