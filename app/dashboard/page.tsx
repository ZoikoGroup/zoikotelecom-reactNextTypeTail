"use client";

import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_BASE_URL;

/* Send the auth cookie with every request. */
const authFetch = (url: string, init: RequestInit = {}) =>
  fetch(url, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...(init.headers || {}) },
    ...init,
  });

const money = (v: any, currency = "GBP") => {
  const n = Number(v);
  if (Number.isNaN(n)) return "—";
  return `£${n.toFixed(2)}`;
};

const TYPE_LABELS: Record<string, string> = {
  broadband: "Broadband",
  ee_mobile: "EE Mobile",
  landline: "Landline",
  business_landline: "Business Landline",
  accessories: "Accessories",
  phone_equipment: "Phone & Equipment",
};

const TYPE_ORDER = [
  "broadband",
  "ee_mobile",
  "landline",
  "business_landline",
  "accessories",
  "phone_equipment",
];

/* ─────────────────────────── Orders ─────────────────────────── */

interface OrderRow {
  id: number;
  external_id: string;
  order_type: string;
  product_name: string;
  contract_term?: string;
  data_allowance?: string;
  total: string;
  currency: string;
  local_status: string;
  bt_state?: string;
  created_at: string;
  cart_raw?: any[];
  is_monthly?: boolean;
  monthly_amount?: string | null;
}

function OrderCard({ order }: { order: OrderRow }) {
  const cfg = Array.isArray(order.cart_raw) && order.cart_raw[0] ? order.cart_raw[0] : {};
  const isConfigured = order.order_type === "business_landline";

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            {order.product_name || TYPE_LABELS[order.order_type] || order.order_type}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">
            #{order.external_id} · {new Date(order.created_at).toLocaleDateString()}
          </p>
        </div>
        <span className="text-sm font-bold text-gray-900 dark:text-white whitespace-nowrap">
          {money(order.total, order.currency)}
        </span>
      </div>

      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400">
        {order.contract_term ? <span>Term: {order.contract_term}</span> : null}
        {order.data_allowance ? <span>Allowance: {order.data_allowance}</span> : null}
        <span>
          Status:{" "}
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            {order.bt_state || order.local_status || "—"}
          </span>
        </span>
      </div>

      {isConfigured && (
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-800 pt-3">
          {cfg.productType && <span>Product: {cfg.productType}</span>}
          {cfg.allowance && <span>Allowance: {cfg.allowance}</span>}
          {cfg.porting && <span>Porting: {cfg.porting}</span>}
          {cfg.planDuration && <span>Contract: {cfg.planDuration}</span>}
          {cfg.numberType && <span>Number: {cfg.numberType}</span>}
          {cfg.hardware && <span>Hardware: {cfg.hardware}</span>}
        </div>
      )}
    </div>
  );
}

function OrdersSection() {
  const [grouped, setGrouped] = useState<Record<string, OrderRow[]>>({});
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await authFetch(`${API}/api/v1/my-orders/`);
        if (res.status === 401 || res.status === 403) {
          setError("Please sign in to view your orders.");
          return;
        }
        const data = await res.json();
        setGrouped(data.grouped || {});
        setCount(data.count || 0);
      } catch {
        setError("Could not load your orders.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p className="text-sm text-gray-500">Loading your orders…</p>;
  if (error) return <p className="text-sm text-gray-500">{error}</p>;
  if (count === 0) return <p className="text-sm text-gray-500">You have no orders yet.</p>;

  return (
    <div className="space-y-8">
      {TYPE_ORDER.filter((t) => grouped[t]?.length).map((type) => (
        <div key={type}>
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-base font-bold text-gray-900 dark:text-white">
              {TYPE_LABELS[type]}
            </h3>
            <span className="text-xs font-semibold bg-[#BC2273]/10 text-[#BC2273] rounded-full px-2 py-0.5">
              {grouped[type].length}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {grouped[type].map((o) => (
              <OrderCard key={o.id} order={o} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────── Profile ─────────────────────────── */

function ProfileSection() {
  const [form, setForm] = useState<any>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        // Adjust this path to your accounts API if different.
        const res = await authFetch(`${API}/api/accounts/profile/`);
        if (res.ok) {
          const data = await res.json();
          const u = data?.data ?? data ?? {};
          setForm({
            first_name: u.first_name ?? "",
            last_name: u.last_name ?? "",
            email: u.email ?? "",
            phone: u.phone ?? "",
          });
        } else if (res.status === 401 || res.status === 403) {
          setErr("Please sign in to edit your profile.");
        }
      } catch {
        setErr("Could not load your profile.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const save = async () => {
    setMsg("");
    setErr("");
    setSaving(true);
    try {
      const res = await authFetch(`${API}/api/accounts/profile/`, {
        method: "PUT",
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.success !== false) {
        setMsg("Profile updated.");
      } else {
        setErr(data?.message || "Could not update your profile.");
      }
    } catch {
      setErr("Network error. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-sm text-gray-500">Loading profile…</p>;

  const field = (label: string, key: string, type = "text", disabled = false) => (
    <div>
      <label className="block text-sm font-semibold text-gray-800 dark:text-white mb-1">
        {label}
      </label>
      <input
        type={type}
        value={form[key] ?? ""}
        disabled={disabled}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        className="w-full h-10 border border-gray-300 dark:border-gray-600 rounded-md px-3 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#BC2273] disabled:opacity-60"
      />
    </div>
  );

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {field("First name", "first_name")}
        {field("Last name", "last_name")}
        {field("Email", "email", "email", true)}
        {field("Phone", "phone")}
      </div>

      {err && <p className="text-sm text-red-600 mt-3">{err}</p>}
      {msg && <p className="text-sm text-green-600 mt-3">{msg}</p>}

      <button
        onClick={save}
        disabled={saving}
        className="mt-4 h-10 px-6 rounded-md bg-[#BC2273] hover:bg-[#a51d63] text-white text-sm font-semibold transition-colors disabled:opacity-50"
      >
        {saving ? "Saving…" : "Save changes"}
      </button>
    </div>
  );
}

/* ─────────────────────────── Page ─────────────────────────── */

export default function DashboardPage() {
  const [tab, setTab] = useState<"orders" | "profile">("orders");

  const tabBtn = (key: typeof tab, label: string) => (
    <button
      onClick={() => setTab(key)}
      className={`px-4 py-2 text-sm font-semibold border-b-2 transition-colors ${
        tab === key
          ? "border-[#BC2273] text-[#BC2273]"
          : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#F7F5FA] dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
          My Dashboard
        </h1>

        <div className="flex gap-1 border-b border-gray-200 dark:border-gray-700 mb-6">
          {tabBtn("orders", "My Orders")}
          {tabBtn("profile", "Profile")}
        </div>

        {tab === "orders" && <OrdersSection />}
        {tab === "profile" && <ProfileSection />}
      </div>
    </div>
  );
}