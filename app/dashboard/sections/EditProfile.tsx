"use client";
import React, { useState } from "react";

type Tab = "profile" | "password";

export default function EditProfile() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");

  // ── Profile state ──────────────────────────────────────────────
  const getStoredUser = () => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem("user") : null;
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  };
  const storedUser = getStoredUser();

  const [profile, setProfile] = useState({
    first_name: storedUser.first_name || "",
    last_name: storedUser.last_name || "",
    username: storedUser.username || "",
    email: storedUser.email || "",
  });
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileMsg, setProfileMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // ── Password state ─────────────────────────────────────────────
  const [passwords, setPasswords] = useState({
    current_password: "",
    new_password: "",
    new_password2: "",
  });
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // ── Helpers ────────────────────────────────────────────────────
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ── Submit profile ─────────────────────────────────────────────
  const submitProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setProfileLoading(true);
    setProfileMsg(null);
    try {
      const res = await fetch("/api/accounts/update-profile/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(profile),
      });
      const data = await res.json();
      if (res.ok) {
        setProfileMsg({ type: "success", text: "Profile updated successfully." });
      } else {
        const errors = Object.values(data).flat().join(" ");
        setProfileMsg({ type: "error", text: errors || "Failed to update profile." });
      }
    } catch {
      setProfileMsg({ type: "error", text: "Network error. Please try again." });
    } finally {
      setProfileLoading(false);
    }
  };

  // ── Submit password ────────────────────────────────────────────
  const submitPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.new_password !== passwords.new_password2) {
      setPasswordMsg({ type: "error", text: "New passwords do not match." });
      return;
    }
    setPasswordLoading(true);
    setPasswordMsg(null);
    try {
      const res = await fetch("/api/accounts/change-password/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(passwords),
      });
      const data = await res.json();
      if (res.ok) {
        setPasswordMsg({ type: "success", text: "Password changed successfully." });
        setPasswords({ current_password: "", new_password: "", new_password2: "" });
      } else {
        const errors = Object.values(data).flat().join(" ");
        setPasswordMsg({ type: "error", text: errors || "Failed to change password." });
      }
    } catch {
      setPasswordMsg({ type: "error", text: "Network error. Please try again." });
    } finally {
      setPasswordLoading(false);
    }
  };

  // ── Shared input style ─────────────────────────────────────────
  const inputClass =
    "w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 " +
    "bg-white dark:bg-gray-700 text-[#10446C] dark:text-white " +
    "text-sm focus:outline-none focus:ring-2 focus:ring-[#F5C241] transition";

  const labelClass = "block text-sm font-medium text-[#10446C] dark:text-gray-300 mb-1";

  const EyeIcon = ({ open }: { open: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      {open ? (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
          <circle cx="12" cy="12" r="3" />
        </>
      ) : (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.94 17.94A10.94 10.94 0 0112 19C5 19 1 12 1 12a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M3 3l18 18" />
        </>
      )}
    </svg>
  );

  return (
    <section className="min-h-screen bg-[#f8fafc] dark:bg-gray-900 transition-colors duration-300">

      {/* ── Header ── */}
      <div className="bg-[#10446C] dark:bg-gray-800 text-white py-12 px-6 sm:px-8 lg:px-20">
        <h1 className="text-2xl sm:text-3xl font-bold">Edit Profile</h1>
        <p className="mt-2 text-white/80 dark:text-gray-300 text-sm sm:text-base">
          Manage your personal information and account security
        </p>
      </div>

      {/* ── Body ── */}
      <div className="px-6 sm:px-8 lg:px-20 py-10 max-w-3xl mx-auto">

        {/* Tabs */}
        <div className="flex gap-2 bg-white dark:bg-gray-800 rounded-xl p-1.5 shadow-sm mb-8 border border-gray-200 dark:border-gray-700">
          {(["profile", "password"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition
                ${activeTab === tab
                  ? "bg-[#fefbf4] dark:bg-gray-700 border-b-2 border-[#F5C241] text-[#10446C] dark:text-yellow-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-[#10446C] dark:hover:text-white"
                }`}
            >
              {tab === "profile" ? "Personal Information" : "Change Password"}
            </button>
          ))}
        </div>

        {/* ── Profile form ── */}
        {activeTab === "profile" && (
          <form
            onSubmit={submitProfile}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 sm:p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>First Name</label>
                <input
                  name="first_name"
                  value={profile.first_name}
                  onChange={handleProfileChange}
                  placeholder="John"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Last Name</label>
                <input
                  name="last_name"
                  value={profile.last_name}
                  onChange={handleProfileChange}
                  placeholder="Smith"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Username</label>
              <input
                name="username"
                value={profile.username}
                onChange={handleProfileChange}
                placeholder="johnsmith"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Email Address</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                placeholder="john@example.com"
                className={inputClass}
              />
            </div>

            {profileMsg && (
              <p
                className={`text-sm font-medium px-4 py-3 rounded-lg ${
                  profileMsg.type === "success"
                    ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                }`}
              >
                {profileMsg.text}
              </p>
            )}

            <button
              type="submit"
              disabled={profileLoading}
              className="w-full sm:w-auto px-8 py-2.5 bg-[#10446C] hover:bg-[#0d3859] dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:text-gray-900 text-white text-sm font-semibold rounded-lg transition disabled:opacity-60"
            >
              {profileLoading ? "Saving…" : "Save Changes"}
            </button>
          </form>
        )}

        {/* ── Password form ── */}
        {activeTab === "password" && (
          <form
            onSubmit={submitPassword}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 sm:p-8 space-y-5"
          >
            {/* Current password */}
            <div>
              <label className={labelClass}>Current Password</label>
              <div className="relative">
                <input
                  type={showCurrent ? "text" : "password"}
                  name="current_password"
                  value={passwords.current_password}
                  onChange={handlePasswordChange}
                  placeholder="Enter current password"
                  className={`${inputClass} pr-11`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowCurrent((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#10446C] dark:hover:text-white transition"
                >
                  <EyeIcon open={showCurrent} />
                </button>
              </div>
            </div>

            {/* New password */}
            <div>
              <label className={labelClass}>New Password</label>
              <div className="relative">
                <input
                  type={showNew ? "text" : "password"}
                  name="new_password"
                  value={passwords.new_password}
                  onChange={handlePasswordChange}
                  placeholder="Enter new password"
                  className={`${inputClass} pr-11`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowNew((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#10446C] dark:hover:text-white transition"
                >
                  <EyeIcon open={showNew} />
                </button>
              </div>
            </div>

            {/* Confirm new password */}
            <div>
              <label className={labelClass}>Confirm New Password</label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  name="new_password2"
                  value={passwords.new_password2}
                  onChange={handlePasswordChange}
                  placeholder="Confirm new password"
                  className={`${inputClass} pr-11`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#10446C] dark:hover:text-white transition"
                >
                  <EyeIcon open={showConfirm} />
                </button>
              </div>
            </div>

            {/* Password strength hint */}
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Password must be at least 8 characters and cannot be entirely numeric.
            </p>

            {passwordMsg && (
              <p
                className={`text-sm font-medium px-4 py-3 rounded-lg ${
                  passwordMsg.type === "success"
                    ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                }`}
              >
                {passwordMsg.text}
              </p>
            )}

            <button
              type="submit"
              disabled={passwordLoading}
              className="w-full sm:w-auto px-8 py-2.5 bg-[#10446C] hover:bg-[#0d3859] dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:text-gray-900 text-white text-sm font-semibold rounded-lg transition disabled:opacity-60"
            >
              {passwordLoading ? "Updating…" : "Update Password"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
