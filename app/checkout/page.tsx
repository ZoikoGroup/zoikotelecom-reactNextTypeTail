"use client";
import { useEffect, useState, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { usStates } from "../utils/usStates";
import { processOrderStripe } from "../utils/stripeWebPaymentApi";
import StripePaymentForm, { StripePaymentFormRef } from "../Components/StripePaymentForm";
import { useTheme } from "next-themes";
import { useMemo } from "react";
import type { StripeElementsOptions } from "@stripe/stripe-js";
// ── Stub data for standalone compilation ──────────────────────────────────────

// const processOrderStripe = async (data: unknown) => ({ status: true, data });

// ─────────────────────────────────────────────────────────────────────────────


// ── Types ─────────────────────────────────────────────────────────────────────

/** Raw shape coming from localStorage (as stored by the plan-selection page) */
interface RawCartItem {
  id: string | number;
  name: string;
  price: number | string;
  speed?: string;
  validity?: string;
  description?: string;
  address?: {
    display: string;
    city: string;
    postcode: string;
    [key: string]: any;
  };
}

/** Normalised shape used throughout the component */
interface CartItem {
  id: string | number;
  title: string;
  price: number;
  description: string;
  validity: string;
  speed: string;
  serviceAddress?: string;
  _raw: RawCartItem;
  bt_plan_id?: string | null;
}

interface Address {
  firstName: string;
  lastName: string;
  companyName: string;
  region: string;
  state: string;
  city: string;
  street: string;
  houseNumber: string;
  zip: string;
  phone: string;
  email: string;
}

interface DiscountData {
  type: "percentage" | "flat";
  discount: string | number;
}

interface FormErrors {
  [key: string]: string;
}

// ── Normalise a raw localStorage item into CartItem ───────────────────────────

function normalizeCartItem(raw: RawCartItem): CartItem {

  return {
    id:          raw.id,
    title:       raw.name ?? "Unnamed Service",
    price:       typeof raw.price === "number" ? raw.price : parseFloat(String(raw.price)) || 0,
    description: raw.description ?? "",
    validity:    raw.validity ? `${raw.validity} Months` : "",
    speed:       raw.speed ? `${raw.speed} Mbps` : "",
    serviceAddress: raw.address?.display ?? "",
    _raw:        raw,
  };
}

// ── Small reusable components ─────────────────────────────────────────────────

const InputField = ({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
      {label}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
    {children}
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
);

const inputClass = (error?: string) =>
  `w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition-colors
   focus:ring-2 focus:ring-red-300 focus:border-red-400 
   ${error ? "border-red-400 bg-red-50 dark:bg-red-900" : "border-gray-200 bg-white dark:bg-gray-800 "}`;

const selectClass = (error?: string) =>
  `w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition-colors
   focus:ring-2 focus:ring-red-300 focus:border-red-400
   ${error ? "border-red-400 bg-red-50 dark:bg-red-900" : "border-gray-200 bg-white  dark:bg-gray-800"}`;

// ── Address Form ──────────────────────────────────────────────────────────────

const billingFieldMeta: Record<string, { label: string; placeholder: string; disabled?: boolean }> = {
  firstName:   { label: "First Name",       placeholder: "Enter your first name" },
  lastName:    { label: "Last Name",        placeholder: "Enter your last name" },
  companyName: { label: "Company Name",     placeholder: "Company name (optional)" },
  region:      { label: "Country / Region", placeholder: "United States (US)"},
  state:       { label: "State",            placeholder: "Select state" },
  city:        { label: "City",             placeholder: "Enter your city" },
  street:      { label: "Street Address",   placeholder: "Enter your street address" },
  houseNumber: { label: "Apt / Suite",      placeholder: "Apartment or suite" },
  zip:         { label: "ZIP Code",         placeholder: "Enter ZIP code" },
  phone:       { label: "Phone Number",     placeholder: "Enter phone number" },
  email:       { label: "Email Address",    placeholder: "Enter email address" },
};

const requiredBillingFields = ["firstName", "lastName", "state", "city", "houseNumber", "zip", "email", "phone"];

const AddressForm = ({
  address,
  setAddress,
  prefix,
  errors,
  loading,
  includeShipping = false,
}: {
  address: Address;
  setAddress: (a: Address) => void;
  prefix: string;
  errors: FormErrors;
  loading: boolean;
  includeShipping?: boolean;
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
    {(Object.keys(address) as Array<keyof Address>).map((key) => {
      const meta = billingFieldMeta[key] || { label: key, placeholder: key };
      const errKey = `${prefix}${key.charAt(0).toUpperCase() + key.slice(1)}`;
      const isRequired =
        requiredBillingFields.includes(key) ||
        (includeShipping &&
          ["firstName", "lastName", "state", "city", "houseNumber", "zip", "email"].includes(key));

      return (
        <InputField key={key} label={meta.label} required={isRequired} error={errors[errKey]}>
          
            <input
              type="text"
              className={inputClass(errors[errKey])}
              placeholder={meta.placeholder}
              value={address[key]}
              disabled={meta.disabled || loading}
              onChange={(e) => setAddress({ ...address, [key]: e.target.value })}
            />
          
        </InputField>
      );
    })}
  </div>
);

// ── Modal ─────────────────────────────────────────────────────────────────────
const Modal = ({
  show,
  onClose,
  title,
  children,
}: {
  show: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="font-bold text-gray-900">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
};



// ── Main Component ────────────────────────────────────────────────────────────

export default function CheckoutPage() {
  const stripeFormRef = useRef<StripePaymentFormRef>(null);
  const [showOrderErrorPopup, setShowOrderErrorPopup] = useState(false);
  const [orderError, setOrderError] = useState("");
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "");
  const [clientSecret, setClientSecret] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showShipping, setShowShipping] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [loading, setLoading] = useState(false);
  const [discountData, setDiscountData] = useState<DiscountData | null>(null);
  const [couponMessage, setCouponMessage] = useState("");
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showTermsPopup, setShowTermsPopup] = useState(false);
  const { resolvedTheme } = useTheme();
  const stripeOptions: StripeElementsOptions = useMemo(() => {
  const isDark = resolvedTheme === "dark";

  return {
    clientSecret,

    appearance: {
      theme: isDark ? "night" : "stripe",

      variables: {
        colorPrimary: "#ef4444",

        colorBackground: isDark
          ? "#1f2937"
          : "#ffffff",

        colorText: isDark
          ? "#f9fafb"
          : "#111827",

        colorDanger: "#ef4444",

        colorTextPlaceholder: isDark
          ? "#9ca3af"
          : "#6b7280",

        borderRadius: "12px",

        fontFamily: "Inter, sans-serif",
      },

      rules: {
        ".Input": {
          backgroundColor: isDark
            ? "#111827"
            : "#ffffff",

          border: isDark
            ? "1px solid #374151"
            : "1px solid #d1d5db",

          boxShadow: "none",
        },

        ".Input:focus": {
          border: "1px solid #ef4444",
          boxShadow: "0 0 0 1px #ef4444",
        },

        ".Tab": {
          backgroundColor: isDark
            ? "#111827"
            : "#f9fafb",

          border: isDark
            ? "1px solid #374151"
            : "1px solid #d1d5db",
        },

        ".Tab--selected": {
          border: "1px solid #ef4444",
          boxShadow: "0 0 0 1px #ef4444",
        },

        ".Label": {
          color: isDark
            ? "#f3f4f6"
            : "#111827",
        },
      },
    },
  };
}, [clientSecret, resolvedTheme]);
  const emptyAddress: Address = {
    firstName: "",
    lastName: "",
    companyName: "",
    region: "United States (US)",
    state: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
    phone: "",
    email: "",
  };

  const [billingAddress, setBillingAddress] = useState<Address>(emptyAddress);
  const [shippingAddress, setShippingAddress] = useState<Address>(emptyAddress);
  const [errors, setErrors] = useState<FormErrors>({});

  // ── Load & normalise cart ─────────────────────────────────────────────────
  useEffect(() => {
    try {
      const storedCart = JSON.parse(
        localStorage.getItem("cart") ?? "[]"
      ) as RawCartItem[];
      const normalized: CartItem[] = (Array.isArray(storedCart) ? storedCart : []).map(
        normalizeCartItem
      );
      setCart(normalized);
      if (typeof window !== "undefined" && localStorage.getItem("token")) {
        setIsLoggedIn(true);
      }
    } catch {
      setCart([]);
    }
  }, []);

  // ── Derived helpers ───────────────────────────────────────────────────────

  /**
   * Physical SIM items require shipping.
   * Triggered by:  simType === "pSIM"  OR  type === "device"
   */
 
  /**
   * Activation fee applies to prepaid-plan eSIM items only.
   * (pSIM activation is handled differently / already priced in.)
   */
 

 

  // ── Cart mutations ────────────────────────────────────────────────────────

  const handleRemove = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart.map((i) => i._raw)));
  };

  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // ── Coupon ────────────────────────────────────────────────────────────────

  const handleApplyCoupon = async () => {
    const user = JSON.parse(localStorage.getItem("user") ?? "null");
    if (!user) {
      setShowLoginPopup(true);
      return;
    }
    if (!coupon) {
      setCouponMessage("Please enter a coupon code");
      return;
    }
    setLoading(true);
    setCouponMessage("");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/apply-coupon/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ user_id: user.id, email: user.email, coupon_code: coupon }),
      });
      const data = await res.json();
      if (data.success) {
        setDiscountData(data.data);
        const num = parseFloat(data.data.discount);
        const clean = Number.isInteger(num) ? num.toString() : num.toFixed(2);
        setCouponMessage(
          `Coupon applied! Discount: ${
            data.data.type === "percentage" ? clean + "%" : "$" + clean + " flat"
          }`
        );
      } else {
        setDiscountData(null);
        setCouponMessage(data.message || "Invalid coupon code");
      }
    } catch {
      setDiscountData(null);
      setCouponMessage("Something went wrong, please try again.");
    }
    setLoading(false);
  };

  const handleCancelCoupon = () => {
    setCoupon("");
    setDiscountData(null);
    setCouponMessage("Coupon cancelled.");
  };

  // ── Totals ────────────────────────────────────────────────────────────────

  const subtotal = cart.reduce((acc, item) => {
    return acc + (item.price || 0);
  }, 0);

  const discountAmount = discountData
    ? discountData.type === "percentage"
      ? (subtotal * Number(discountData.discount)) / 100
      : Number(discountData.discount)
    : 0;



  const total = Math.max(subtotal - (discountAmount || 0), 0);

  // ── Create Stripe payment intent ──────────────────────────────────────────

  useEffect(() => {
    if (total > 0 && cart.length > 0) {
      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          total,
          subtotal,
          discountAmount,
          cart,
          billingAddress,
          shippingAddress,
        }),
      })
        .then((r) => r.json())
        .then((d) => {
          if (d.clientSecret) setClientSecret(d.clientSecret);
        })
        .catch(() => {});
    }
  }, [total,
  subtotal,
  discountAmount,
  cart,]);

  // ── Validation ────────────────────────────────────────────────────────────

  const validateFields = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRx = /^[0-9]{7,15}$/;
    newErrors.billingFirstName = billingAddress.firstName ? "" : "Required";
    newErrors.billingLastName = billingAddress.lastName ? "" : "Required";
    newErrors.billingState = billingAddress.state ? "" : "Required";
    newErrors.billingCity = billingAddress.city ? "" : "Required";
    newErrors.billingHouseNumber = billingAddress.houseNumber ? "" : "Required";
    newErrors.billingZip = billingAddress.zip ? "" : "Required";
    newErrors.billingEmail = emailRx.test(billingAddress.email) ? "" : "Invalid email";
    newErrors.billingPhone = phoneRx.test(billingAddress.phone) ? "" : "Invalid phone";
    if (showShipping) {
      newErrors.shippingFirstName = shippingAddress.firstName ? "" : "Required";
      newErrors.shippingLastName = shippingAddress.lastName ? "" : "Required";
      newErrors.shippingState = shippingAddress.state ? "" : "Required";
      newErrors.shippingCity = shippingAddress.city ? "" : "Required";
      newErrors.shippingHouseNumber = shippingAddress.houseNumber ? "" : "Required";
      newErrors.shippingZip = shippingAddress.zip ? "" : "Required";
      newErrors.shippingEmail = emailRx.test(shippingAddress.email) ? "" : "Invalid email";
      newErrors.shippingPhone = phoneRx.test(shippingAddress.phone) ? "" : "Invalid phone";
    }
    setErrors(newErrors);
    return !Object.values(newErrors).some((e) => e.length > 0);
  };

  const buildProducts = () =>
    cart.map((item) => {
      // We ensure the price is a valid number first
      const unitPrice = Number(item.price ?? 0);

      return {
        id: item.id,
        name: item.title,
        pricePerUnit: unitPrice,
        quantity: 1, // Fixed at 1 as per your requirement
        totalPrice: unitPrice, // No multiplication needed since qty is 1
        description: item.description,
        validity: item.validity,
        speed: item.speed,
        address: item.serviceAddress,
      };
  });

  // ── Place Order – Stripe ──────────────────────────────────────────────────

  const handlePlaceOrderStripe = async () => {
  if (!agreeTerms) { setShowTermsPopup(true); return; }
  if (!validateFields()) return;

  try {
    setLoading(true);

    // 1️⃣ Stripe payment
    if (stripeFormRef.current) {
      const result = await stripeFormRef.current.submitPayment();
      console.log("✅ Stripe result:", result);  // ← ADD
      if (!result.success) {
        setOrderError(result.error || "Payment failed.");
        setShowOrderErrorPopup(true);
        return;
      }
    }

    // 2️⃣ BT Wholesale order
    //    processOrderStripe() reads the raw cart from localStorage and forwards
    //    it (with product.characteristics / product.offering / zoikoPlan) to
    //    /api/BritishTelecom/process-order, which runs the full BT flow:
    //    RoBT lookup → appointment slot search → book → place product order.
    const products = buildProducts();
    const orderData = {
      billingAddress,
      shippingAddress: showShipping ? shippingAddress : billingAddress,
      coupon: discountData ? { ...discountData } : null,
      cart: products, // billing-summary view; the BT route uses the raw cart from localStorage
      totals: { subtotal, discount: discountAmount, total },
      agreedToTerms: agreeTerms,
      paymentMethod: "stripe",
      createdAt: new Date().toISOString(),
    };

    const response = await processOrderStripe(orderData);
    console.log("✅ processOrderStripe response:", response);  // ← ADD

    if (!response?.status) {
      setOrderError(response?.message || "Order processing failed.");
      setShowOrderErrorPopup(true);
      return;
    }

    const payload = (response as Record<string, unknown>).data ?? response;
    console.log("✅ payload to Django:", payload);  // ← ADD

    // 3️⃣ Save to Django
    const orderRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/bqorders/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const orderResData = await orderRes.json().catch(() => ({}));
    console.log("✅ Django response ok:", orderRes.ok, "status:", orderRes.status, "data:", orderResData);  // ← ADD

    if (!orderRes.ok || !orderResData?.success) {
      setOrderError(orderResData?.message || "Order could not be saved.");
      setShowOrderErrorPopup(true);
      return;
    }
    // localStorage.removeItem("cart");
    setShowThankYou(true);
    
    console.log("✅ showThankYou set to true");  // ← ADD

  } catch (err: any) {
    console.error("❌ caught error:", err);  // ← ADD
    setOrderError(err?.message || "Something went wrong.");
    setShowOrderErrorPopup(true);
  } finally {
    setLoading(false);
  }
};

  const formatDiscount = (value: string | number) => {
    const n = parseFloat(String(value));
    return Number.isInteger(n) ? n.toString() : n.toFixed(2);
  };

  // ── Empty Cart ────────────────────────────────────────────────────────────
  if (cart.length === 0) {
    return (
      <div className="min-h-screen dark:bg-gray-900 bg-gray-50 flex flex-col items-center justify-center px-4 py-16 text-center">
        <div className="w-40 h-40 bg-red-50 dark:bg-red-900 rounded-full flex items-center justify-center mb-6">
          <svg className="w-20 h-20 text-red-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">Looks like you haven't added anything yet.</p>
        
      </div>
    );
  }

  // ── Main Checkout ─────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen dark:bg-gray-900 bg-gray-50">
      {/* Page header */}
      {/* <div className=" border-b border-gray-100 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Checkout</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Connecting Every Possibility with Zoiko Mobile!</p>
          </div>
          <button
            onClick={handleClearCart}
            disabled={loading}
            className="self-start sm:self-auto flex items-center gap-2 px-4 py-2 rounded-lg border border-red-200 text-red-500 text-sm font-medium hover:bg-red-50 transition-colors disabled:opacity-50"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Clear Cart
          </button>
        </div>
      </div> */}

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── Left Column ── */}
          <div className="flex-1 space-y-6">

            {/* Cart Items */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-bold text-gray-900 dark:text-white">Your Items</h2>
                <span className="text-xs text-gray-400 font-medium">{cart.length} item{cart.length !== 1 ? "s" : ""}</span>
              </div>
              <div className="divide-y divide-gray-50">
                {cart.map((item, idx) => (
                  <div key={idx} className="px-6 py-4">
                    <div className="flex items-start gap-4">
                      {/* 📦 Plan Information */}
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-gray-900 dark:text-white text-lg leading-tight mb-1">
                          {item.title}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          {/* ⚡ Speed Badge */}
                          {item.speed && (
                            <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                              {item.speed}
                            </span>
                          )}
                          {/* 🗓️ Validity Label */}
                          {item.validity && (
                            <span className="text-xs text-gray-500 font-medium">
                              Contract: {item.validity}
                            </span>
                          )}
                        </div>

                        {/* 📍 Service Address */}
                        {item.serviceAddress && (
                          <p className="text-xs text-gray-400 flex items-start gap-1">
                            <svg className="w-3 h-3 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {item.serviceAddress}
                          </p>
                        )}
                      </div>

                      {/* 💰 Price Display */}
                      <div className="text-right shrink-0">
                        <p className="font-bold dark:text-white text-lg">
                          ${item.price.toFixed(2)}
                        </p>
                        <button
                          onClick={() => handleRemove(idx)}
                          className="text-xs text-red-500 hover:underline mt-1"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coupon */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 dark:text-white mb-4">Have a Coupon?</h2>
              <div className="flex flex-col md:flex-row gap-2">
                <input
                  type="text"
                  className="flex-1 rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-red-300"
                  placeholder="Enter coupon code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  disabled={loading}
                />
                <button
                  onClick={handleApplyCoupon}
                  disabled={loading}
                  className="px-4 flex-row md:flex-col py-2.5 rounded-lg bg-[#10446c] hover:bg-[#0d3a5a] text-white text-sm font-semibold transition-colors disabled:opacity-50"
                >
                  {loading ? "Applying…" : "Apply"}
                </button>
                {discountData && (
                  <button
                    onClick={handleCancelCoupon}
                    disabled={loading}
                    className="px-4 flex-row md:flex-col py-2.5 rounded-lg border border-red-200 text-red-500 text-sm font-semibold hover:bg-red-50 transition-colors disabled:opacity-50"
                  >
                    Remove
                  </button>
                )}
              </div>
              {couponMessage && (
                <p className={`mt-2 text-sm ${discountData ? "text-green-600" : "text-red-500"}`}>
                  {couponMessage}
                </p>
              )}
              {!isLoggedIn && (
                <p className="mt-2 text-xs text-[#10446c] dark:text-gray-400">
                  You need to be logged in to apply a coupon.
                </p>
              )}
            </div>

            {/* Billing Address */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 dark:text-white mb-5">Service / Billing Details</h2>
              <AddressForm
                address={billingAddress}
                setAddress={setBillingAddress}
                prefix="billing"
                errors={errors}
                loading={loading}
              />

              <label className="flex items-center gap-2.5 mt-5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showShipping}
                  onChange={(e) => setShowShipping(e.target.checked)}
                  disabled={loading}
                  className="w-4 h-4 accent-red-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">Ship to a different address?</span>
              </label>

              {showShipping && (
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-4">Shipping Address</h3>
                  <AddressForm
                    address={shippingAddress}
                    setAddress={setShippingAddress}
                    prefix="shipping"
                    errors={errors}
                    loading={loading}
                    includeShipping
                  />
                </div>
              )}
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="w-full lg:w-96 space-y-6">

            {/* Order Summary */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 dark:text-white mb-4">Order Summary</h2>

              <div className="space-y-3">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex items-start justify-between gap-2 text-sm">
                    <div className="min-w-0">
                      <p className="font-medium text-gray-900 dark:text-white truncate">{item.title}</p>
                      {item.speed && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          Speed: {item.speed}
                        </span>
                      )}
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white shrink-0">
                       ${item.price.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

            

              {discountData && (
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-500">
                    Discount (
                    {discountData.type === "percentage"
                      ? formatDiscount(discountData.discount) + "%"
                      : "$" + formatDiscount(discountData.discount)}
                    )
                  </span>
                  <span className="font-medium text-green-600">
                    −${discountAmount.toFixed(2)}
                  </span>
                </div>
              )}

              <div className="flex justify-between font-bold text-base mt-4 pt-4 border-t border-gray-100">
                <span>Total</span>
                <span className="text-red-500">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 dark:text-white mb-4">Payment</h2>

              {clientSecret ? (
                <Elements
                  stripe={stripePromise}
                  options={stripeOptions}
                >
                  <StripePaymentForm ref={stripeFormRef} />
                </Elements>
              ) : (
                <div className="flex items-center justify-center py-6 gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Loading payment form…
                </div>
              )}

              <label className="flex items-start gap-2.5 mt-5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  disabled={loading}
                  className="w-4 h-4 mt-0.5 accent-red-500"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  I have read and agree to the website{" "}
                  <a href="/terms-conditions" className="text-red-500 hover:underline">
                    terms and conditions
                  </a>
                  .
                </span>
              </label>

              <button
                onClick={handlePlaceOrderStripe}
                disabled={loading || !clientSecret}
                className="w-full mt-5 py-3.5 rounded-xl bg-[#10446c] hover:bg-[#0d3a5a] text-white font-bold text-sm transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Processing payment…
                  </>
                ) : (
                  "Place Order"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Modals ── */}
      <Modal
        show={showLoginPopup}
        onClose={() => setShowLoginPopup(false)}
        title="Login Required"
      >
        <div className="text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <p className="text-gray-600 mb-5 text-sm">
            You need to log in to apply a coupon code.
          </p>
          <a
            href={`/login?redirect=${encodeURIComponent(
              typeof window !== "undefined" ? window.location.href : "/"
            )}`}
            className="block w-full py-2.5 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold text-sm transition-colors mb-2"
          >
            Go to Login
          </a>
          <button
            onClick={() => setShowLoginPopup(false)}
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            Cancel
          </button>
        </div>
      </Modal>

      <Modal
        show={showTermsPopup}
        onClose={() => setShowTermsPopup(false)}
        title="Terms & Conditions Required"
      >
        <div className="text-center">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-gray-600 mb-5 text-sm">
            You must agree to the{" "}
            <a href="/terms-and-conditions" className="text-red-500 hover:underline">
              terms and conditions
            </a>{" "}
            before placing your order.
          </p>
          <button
            onClick={() => setShowTermsPopup(false)}
            className="w-full py-2.5 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold text-sm transition-colors"
          >
            OK, I understand
          </button>
        </div>
      </Modal>

      <Modal
        show={showThankYou}
        onClose={() => {
          setShowThankYou(false);
          setCart([]);
          window.location.href = "/dashboard";
        }}
        title=""
      >
        <div className="text-center py-4">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-30" />
            <div className="relative w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-1">Order Placed! 🎉</h2>
          <p className="text-sm font-medium text-green-600 mb-4">Payment successful</p>

          <div className="border-t border-gray-100 my-4" />

          <div className="bg-gray-50 rounded-xl p-4 mb-5 text-left space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-semibold text-gray-800">${subtotal.toFixed(2)}</span>
            </div>
            
            {discountAmount > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Discount</span>
                <span className="font-semibold text-green-600">−${discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="border-t border-gray-200 pt-2 flex justify-between text-base font-bold">
              <span className="text-gray-900">Total Paid</span>
              <span className="text-red-500">${total.toFixed(2)}</span>
            </div>
          </div>

          <p className="text-xs text-gray-400 mb-5">
            A confirmation email has been sent to{" "}
            <span className="font-medium text-gray-600">{billingAddress.email}</span>
          </p>

          <button
            onClick={() => {
              setShowThankYou(false);
              setCart([]);
              window.location.href = "/dashboard";
            }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg mb-2"
          >
            Go to Dashboard →
          </button>
          <button
            onClick={() => {
              setCart([]);
              window.location.href = "/";
            }}
            className="w-full py-2.5 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm font-medium transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </Modal>

      <Modal
        show={showOrderErrorPopup}
        onClose={() => setShowOrderErrorPopup(false)}
        title="Order Failed"
      >
        <div className="text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-gray-600 mb-5 text-sm">{orderError}</p>
          <button
            onClick={() => setShowOrderErrorPopup(false)}
            className="w-full py-2.5 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold text-sm transition-colors"
          >
            Try Again
          </button>
        </div>
      </Modal>



    </div>
    // </ProtectedRoute>
  );
}