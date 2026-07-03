"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

// ─── API ────────────────────────────────────────────────────────────────────
const API_URL = "https://api.zoikotelecom.com/api/v1/plans/category/landline/";

interface ApiFeature {
  id: number;
  text: string;
  sort_order?: number;
}

interface ApiVariation {
  id: number;
  label: string;
  duration_value: number;
  duration_unit: string;
  duration_display: string;
  price: string;
  sale_price: string | null;
  is_default: boolean;
  is_active: boolean;
  sort_order?: number;
}

interface ApiPlan {
  id: number;
  name: string;
  slug: string;
  is_active: boolean;
  is_featured: boolean;
  sort_order?: number;
  features: ApiFeature[];
  variations: ApiVariation[];
}

interface ApiResponse {
  category: { id: number; name: string; slug: string };
  count: number;
  results: ApiPlan[];
}

// ─── Cart wiring ────────────────────────────────────────────────────────────────
// Matches the localStorage key the checkout page reads from.
const CART_KEY = "cart";

/** One raw cart line — same shape the checkout normaliser already understands. */
interface RawCartItem {
  planId?: number | string | null;
  bqPlanID?: string | null;
  planSlug?: string | null;
  planName?: string | null;
  planTitle?: string | null;
  price?: string | number | null;
  salePrice?: string | number | null;
  finalPrice?: number | null;
  planDuration?: string | null;
  durationDays?: number | null;
  planType?: string | null;
  category?: { id: number; name: string; slug: string } | null;
  features?: { id: number; title: string }[];
  lineType?: string | null;
  simType?: string | null;
  setupType?: string | null;
  qty?: number;
  timestamp?: number;
  formData?: { priceQty: number; price: number };
  [key: string]: unknown;
}

function readCart(): RawCartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CART_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? (parsed as RawCartItem[]) : [];
  } catch {
    return [];
  }
}

function writeCart(items: RawCartItem[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  // Let header badge / other listeners in the same tab refresh.
  window.dispatchEvent(new Event("cart:updated"));
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function BusinessLandlinePlans() {
  const [plans, setPlans] = useState<ApiPlan[]>([]);
  const [categorySlug, setCategorySlug] = useState("landline");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;

    async function fetchPlans() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        const data: ApiResponse = await res.json();
        if (cancelled) return;

        const activePlans = (data.results || []).filter((p) => p.is_active);
        setPlans(activePlans);
        setCategorySlug(data.category?.slug || "landline");
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Failed to load plans"
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchPlans();
    return () => {
      cancelled = true;
    };
  }, []);

  // Durations available across all plans, sorted longest-first (36, 24, 12 ...).
  const durations = useMemo(() => {
    const set = new Set<number>();
    plans.forEach((plan) =>
      plan.variations
        .filter((v) => v.is_active)
        .forEach((v) => set.add(v.duration_value))
    );
    return Array.from(set).sort((a, b) => b - a);
  }, [plans]);

  // Default the selected duration once data has loaded.
  useEffect(() => {
    if (selectedDuration === null && durations.length > 0) {
      setSelectedDuration(durations[0]);
    }
  }, [durations, selectedDuration]);

  const getVariation = (plan: ApiPlan, duration: number) =>
    plan.variations.find(
      (v) => v.duration_value === duration && v.is_active
    ) || null;

  const handleBuyNow = (plan: ApiPlan, variation: ApiVariation) => {
    const price = variation.sale_price
      ? parseFloat(variation.sale_price)
      : parseFloat(variation.price);
    const featureTitles = plan.features.map((f) => f.text);

    const item: RawCartItem = {
      planId: `landline-${plan.id}-${variation.duration_value}`,
      planSlug: plan.slug,
      planName: plan.name,
      planTitle: plan.name,
      price: variation.price,
      salePrice: variation.sale_price,
      finalPrice: price,
      // Months contract — store as a readable label so the checkout shows it as-is.
      planDuration: variation.duration_display,
      planType: "landline_manual",
      category: { id: 0, name: "Landline", slug: categorySlug },
      features: featureTitles.map((title, i) => ({ id: i + 1, title })),
      lineType: "landline",
      simType: "N/A",
      setupType: null,
      qty: 1,
      timestamp: Date.now(),
      formData: { priceQty: 1, price },
    };

    const cart = readCart();
    cart.push(item);
    writeCart(cart);
    window.dispatchEvent(new Event("cart-updated"));
    // Send the user to checkout. Change the path if your checkout route differs.
    router.push("/checkout");
  };

  return (
    <section className="w-full bg-[#FEF7FF] dark:bg-gray-900 py-[30px] md:py-[50px] px-4 sm:px-6 md:px-[40px]">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">

        {/* Heading */}
        <h2 className="text-[#2D3748] dark:text-white text-[28px] sm:text-[34px] md:text-[40px] font-bold leading-[40px] md:leading-[68px] text-center">
          Zoiko Telecom Business Landline Plans
        </h2>

        {/* Duration Tabs */}
        {durations.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            {durations.map((duration) => (
              <button
                key={duration}
                onClick={() => setSelectedDuration(duration)}
                className={`inline-flex items-center justify-center rounded-[50px] px-[24px] md:px-[33px] py-[12px] md:py-[14px] border-2 transition-all
                  ${
                    selectedDuration === duration
                      ? "border-[#C12172] bg-[#C12172] text-white"
                      : "border-[rgba(0,0,0,0.1)] dark:border-gray-700 bg-[#F8F9FA] dark:bg-gray-800 text-[#2D3748] dark:text-white"
                  }`}
              >
                <span className="text-[14px] md:text-[15px] font-semibold">
                  {duration}-Month Plans
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Loading state */}
        {loading && (
          <div className="mt-10 text-center text-gray-500 dark:text-gray-400">
            Loading landline plans...
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="mt-10 text-center text-red-500">
            Unable to load plans right now. Please try again later.
          </div>
        )}

        {/* Cards */}
        {!loading && !error && selectedDuration !== null && (
          <div className="mt-[40px] flex flex-wrap justify-center gap-8 w-full">
            {plans.map((plan) => {
              const variation = getVariation(plan, selectedDuration);
              if (!variation) return null;

              const displayPrice = variation.sale_price
                ? parseFloat(variation.sale_price)
                : parseFloat(variation.price);
              const sortedFeatures = [...plan.features].sort(
                (a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0)
              );

              return (
                <div
                  key={plan.id}
                  className={`relative w-full max-w-[340px] rounded-[20px] bg-white dark:bg-gray-800 px-[24px] md:px-[34px] pt-[34px] pb-[34px] flex flex-col items-center shadow-sm ${
                    plan.is_featured
                      ? "border-2 border-[#782984]"
                      : "border border-[#E2E8F0] dark:border-gray-700"
                  }`}
                >
                  {/* Most Popular badge */}
                  {plan.is_featured && (
                    <div className="absolute -top-4 rounded-full bg-[#782984] px-5 py-2">
                      <p className="text-white text-[12px] font-semibold uppercase">
                        Most Popular
                      </p>
                    </div>
                  )}

                  {/* Plan Name */}
                  <h3 className="text-[#C12172] text-[28px] md:text-[32px] font-bold leading-[40px] md:leading-[48px] text-center">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <p className="text-[#636567] dark:text-gray-300 text-[22px] md:text-[24px] font-normal leading-[34px] mt-3">
                    £{displayPrice.toFixed(2)}/m
                  </p>

                  {/* Duration label */}
                  <p className="text-[#718096] dark:text-gray-400 text-sm mt-1">
                    {variation.duration_display} contract
                  </p>

                  {/* Divider */}
                  <div className="w-full border-t border-[#E2E8F0] dark:border-gray-700 mt-5" />

                  {/* Features */}
                  <div className="mt-4 w-full">
                    {sortedFeatures.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-start gap-3 w-full border-b border-[#E2E8F0] dark:border-gray-700 py-[11px]"
                      >
                        {/* Checkmark */}
                        <svg
                          className="w-[16px] h-[16px] text-[#636567] dark:text-gray-300 shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-[#2D3748] dark:text-gray-200 text-[13px] leading-[20px]">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 flex w-full justify-center">
                    <button
                      onClick={() => handleBuyNow(plan, variation)}
                      className="flex h-[53.5px] w-full items-center justify-center rounded-[50px] px-0 py-[17px]"
                      style={{
                        background:
                          "linear-gradient(90deg, #C12172 0%, #782984 100%)",
                      }}
                    >
                      <span className="text-white text-[15px] font-semibold leading-[25.5px]">
                        Buy Now
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && plans.length === 0 && (
          <div className="mt-10 text-center text-gray-500">
            No landline plans available.
          </div>
        )}
      </div>
    </section>
  );
}