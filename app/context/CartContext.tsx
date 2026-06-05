"use client";

import { createContext, useContext, useEffect, useState } from "react";

// ─── Shared types (exported so /api/BritishTelecom/* and the checkout page
//     can share the same shape) ──────────────────────────────────────────────

export type FormattedAddress = {
  id: string;                   // Openreach NAD id, e.g. "A15113070302"
  display: string;
  streetNr: string;
  streetName: string;
  city: string;
  postcode: string;
  districtCode: string;
  uprn: string;
  exchangeGroupCode: string;
  qualifier: string;            // "Gold" | "Silver" | …
};

export type ProductCharacteristic = {
  name: string;
  value: string;
};

/** Place reference inside a POQ item — Openreach NAD address pointer. */
export type POQPlace = {
  id: string;                       // "A15113070302"
  role?: string;                    // "install address"
  "@referredType"?: string;         // "btNADLocationReference"
  districtId?: string;
};

/**
 * BT productOfferingQualificationItem — the exact shape returned by
 * /api/BritishTelecom/get-products under each row's wrapper.
 *
 * NOTE: this is the *canonical* BT shape — without the Zoiko-side
 * `zoikoPlan` / `bt_plan_id` fields that the get-products route adds at the
 * same level. Those Zoiko-side fields live separately on the Plan.
 */
export type BTProductOfferingQualificationItem = {
  id: string;                       // "5"
  "@type"?: string;                 // "btProductOfferingQualificationItem"
  product: {
    "@type"?: string;
    productOffering: { id: string; name?: string };
    productCharacteristic?: ProductCharacteristic[];
    place?: POQPlace[];
  };
  eligibilityUnavailabilityReason?: { cause: string }[];
};

export type ZoikoCategory = {
  id: number;
  name: string;
  slug: string;
  description?: string;
  is_active?: boolean;
  sort_order?: number;
};

export type ZoikoVariation = {
  id: number;
  label: string;
  duration_value: number;
  duration_unit: string;            // "month" | "year" | …
  duration_display: string;         // "24 Month(s)"
  price: string;
  sale_price: string | null;
  bt_plan_id: string;
  effective_bt_plan_id: string;
  is_default: boolean;
  is_active: boolean;
  sort_order: number;
};

export type ZoikoPlan = {
  id: number;
  name: string;
  slug: string;
  category?: ZoikoCategory;
  bt_plan_id: string;               // "E0000429"
  bt_plan_name: string;             // "SOGEA 0.5_0.5M"
  description?: string;
  is_active: boolean;
  is_featured?: boolean;
  sort_order?: number;
  variations: ZoikoVariation[];
};

// ─── The cart item ────────────────────────────────────────────────────────────

/**
 * Cart item stored in localStorage and shared with /api/BritishTelecom/process-order.
 *
 * Everything the BT route needs to build searchTimeSlot / bookAppointment /
 * productOrder payloads should be derivable from this object alone — no
 * string sniffing on `name`.
 *
 * Fields kept from the legacy Plan (so existing JSX keeps working):
 *   id, name, price, speed, variation, validity, description, bt_plan_id, address
 *
 * New required fields:
 *   productOfferingQualificationItem  ← full BT POQ row
 *   zoikoPlan                         ← matched Zoiko plan (category + all variations)
 *   zoikoVariation                    ← variation the user actually picked
 */
export type Plan = {
  // — display fields (legacy, still used) —
  id: string;
  name: string;
  price: number;
  speed: string;
  variation?: string;
  validity?: string;
  description?: string;
  bt_plan_id?: string | null;
  address?: FormattedAddress | null;

  // — BT / Zoiko enrichment (new — needed by /process-order) —
  productOfferingQualificationItem: BTProductOfferingQualificationItem;
  zoikoPlan: ZoikoPlan;
  zoikoVariation: ZoikoVariation | null;
};

// ─── Context ──────────────────────────────────────────────────────────────────

type CartContextType = {
  cart: Plan[];
  addToCart: (plan: Plan) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Plan[]>([]);

  // Load from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      if (stored) {
        try {
          setCart(JSON.parse(stored));
        } catch {
          // ignore corrupt cart
        }
      }
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Add plan (with full details)
  const addToCart = (plan: Plan) => {
    setCart([]);
    setCart((prev) => {
      const exists = prev.find((item) => item.id === plan.id);
      if (exists) return prev;
      return [...prev, plan];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};