"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_BASE_URL;

/* Where to send visitors who aren't logged in. Adjust to your login route. */
const LOGIN_PATH = "/login";

/* Auth scheme for the Authorization header. Your login stores `data.token` in
 * localStorage, which is DRF TokenAuthentication → "Token". If your backend
 * uses SimpleJWT instead, change this to "Bearer". */
const AUTH_SCHEME = "Token";

/* Attach the saved token (localStorage) to every request. Token auth is
 * header-based, so we do NOT send cookies — sending credentials would force
 * stricter CORS (Access-Control-Allow-Credentials) that the API isn't set up
 * for, which silently blocks the response in the browser. */
const authFetch = (url: string, init: RequestInit = {}) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `${AUTH_SCHEME} ${token}` } : {}),
      ...(init.headers || {}),
    },
    ...init,
  });
};

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
    username: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        // DashboardAPI returns the current user's fields.
        const res = await authFetch(`${API}/api/accounts/dashboard/`);
        if (res.ok) {
          const u = await res.json();
          setForm({
            first_name: u.first_name ?? "",
            last_name: u.last_name ?? "",
            email: u.email ?? "",
            username: u.username ?? "",
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
      // UpdateUserAPI accepts PUT with partial data.
      const res = await authFetch(`${API}/api/accounts/update-profile/`, {
        method: "PUT",
        body: JSON.stringify({
          first_name: form.first_name,
          last_name: form.last_name,
          email: form.email,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setMsg("Profile updated.");
        // Keep the header's cached user name in sync.
        try {
          const raw = localStorage.getItem("user");
          const stored = raw ? JSON.parse(raw) : {};
          localStorage.setItem(
            "user",
            JSON.stringify({
              ...stored,
              first_name: form.first_name,
              last_name: form.last_name,
              email: form.email,
            })
          );
          window.dispatchEvent(new Event("authChanged"));
        } catch {
          /* ignore */
        }
      } else {
        setErr(
          data?.email?.[0] ||
            data?.detail ||
            data?.message ||
            "Could not update your profile."
        );
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
        {field("Email", "email", "email")}
        {field("Username", "username", "text", true)}
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

/* ────────────────────── Change password ─────────────────────── */

function ChangePasswordSection() {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const submit = async () => {
    setMsg("");
    setErr("");
    if (!current || !next) return setErr("Please fill in all fields.");
    if (next.length < 8) return setErr("New password must be at least 8 characters.");
    if (next !== confirm) return setErr("New passwords do not match.");

    setSaving(true);
    try {
      // Adjust the path/field names to your accounts API if different.
      const res = await authFetch(`${API}/api/accounts/change-password/`, {
        method: "POST",
        body: JSON.stringify({
          old_password: current,
          new_password: next,
          confirm_password: confirm,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.success !== false && !data?.error) {
        setMsg("Password changed successfully.");
        setCurrent("");
        setNext("");
        setConfirm("");
      } else {
        setErr(
          data?.error ||
            data?.message ||
            (data?.old_password && `Current password: ${data.old_password}`) ||
            (data?.new_password && `New password: ${data.new_password}`) ||
            "Could not change your password."
        );
      }
    } catch {
      setErr("Network error. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const field = (
    label: string,
    value: string,
    setter: (v: string) => void
  ) => (
    <div>
      <label className="block text-sm font-semibold text-gray-800 dark:text-white mb-1">
        {label}
      </label>
      <input
        type="password"
        value={value}
        onChange={(e) => setter(e.target.value)}
        className="w-full h-10 border border-gray-300 dark:border-gray-600 rounded-md px-3 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#BC2273]"
      />
    </div>
  );

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">
        Change password
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {field("Current password", current, setCurrent)}
        <div className="hidden sm:block" />
        {field("New password", next, setNext)}
        {field("Confirm new password", confirm, setConfirm)}
      </div>

      {err && <p className="text-sm text-red-600 mt-3">{err}</p>}
      {msg && <p className="text-sm text-green-600 mt-3">{msg}</p>}

      <button
        onClick={submit}
        disabled={saving}
        className="mt-4 h-10 px-6 rounded-md bg-[#BC2273] hover:bg-[#a51d63] text-white text-sm font-semibold transition-colors disabled:opacity-50"
      >
        {saving ? "Updating…" : "Update password"}
      </button>
    </div>
  );
}

/* ─────────────────────────── Page ─────────────────────────── */

export default function DashboardPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"orders" | "profile">("orders");
  // null = checking, true = authed, false = not authed
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      // No token at all → straight to login.
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;
      if (!token) {
        setAuthed(false);
        router.replace(`${LOGIN_PATH}?next=${encodeURIComponent("/dashboard")}`);
        return;
      }
      try {
        // my-orders is auth-gated (IsAuthenticated) — a 200 means the token is
        // valid, 401/403 means it isn't.
        const res = await authFetch(`${API}/api/v1/my-orders/`);
        if (res.status === 401 || res.status === 403) {
          setAuthed(false);
          router.replace(`${LOGIN_PATH}?next=${encodeURIComponent("/dashboard")}`);
          return;
        }
        setAuthed(res.ok);
        if (!res.ok) router.replace(LOGIN_PATH);
      } catch (e) {
        console.error("Dashboard auth check failed:", e);
        setAuthed(false);
        router.replace(LOGIN_PATH);
      }
    })();
  }, [router]);

  // While checking (or redirecting), don't render the dashboard.
  if (authed !== true) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F5FA] dark:bg-gray-950">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {authed === false ? "Redirecting to sign in…" : "Loading…"}
        </p>
      </div>
    );
  }

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
        {tab === "profile" && (
          <div className="space-y-6">
            <ProfileSection />
            <ChangePasswordSection />
          </div>
        )}
      </div>
    </div>
  );
}