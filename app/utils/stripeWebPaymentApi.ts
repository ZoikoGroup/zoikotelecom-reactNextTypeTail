// app/utils/stripeWebPaymentApi.ts
//
// Forwards the localStorage cart to the right place per order type and returns
// a flat `data` payload that the checkout posts to Django (/api/v1/bqorders/):
//
//   • broadband        → runs the full BT flow via /api/BritishTelecom/process-order
//                        (searchTimeSlot → bookAppointment → productOrder), then
//                        returns the BT result merged with the customer data.
//   • ee_mobile / landline → NOT placed with BT. We generate an externalId and
//                        return the order data directly; Django saves it and
//                        emails orders@zoikotelecom.com.
//
// The order type is read from the cart item's `planType` (written by each plan
// page): "broadband" | "ee_mobile_manual" | "landline_manual".

import type { Plan, FormattedAddress } from "@/app/context/CartContext";

/** Cart rows carry per-type extras beyond the base Plan shape. */
type CartRow = Plan & {
  planType?: string;
  dataAllowance?: string;
  simType?: string;
  [key: string]: unknown;
};

type OrderType = "broadband" | "ee_mobile" | "landline";

/** Read the cart from localStorage (returns [] on the server or on error). */
function readCart(): CartRow[] {
  try {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("cart");
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? (parsed as CartRow[]) : [];
  } catch {
    return [];
  }
}

/** Pull the address out of the first cart item (broadband only). */
function getServiceAddress(): FormattedAddress | null {
  const items = readCart();
  return (items[0]?.address as FormattedAddress | undefined) ?? null;
}

/** Decide the order family from the first cart row. */
function deriveOrderType(cart: CartRow[]): OrderType {
  const t = String(cart[0]?.planType ?? "").toLowerCase();
  if (t === "ee_mobile" || t === "ee_mobile_manual") return "ee_mobile";
  if (t === "landline" || t === "landline_manual") return "landline";
  if (t === "broadband") return "broadband";
  // Fallback: a BT-qualified item is broadband even if planType is missing.
  if (cart[0]?.productOfferingQualificationItem) return "broadband";
  return "broadband";
}

/** Generate the WC-{timestamp}-{nnnnn} external id Django expects. */
function generateExternalId(): string {
  const n = Math.floor(Math.random() * 100000).toString().padStart(5, "0");
  return `WC-${Date.now()}-${n}`;
}

export interface ProcessOrderInput {
  billingAddress: object;
  shippingAddress: object;
  coupon: { type: string; discount: string | number } | null;
  cart?: unknown; // billing-summary cart — overridden by raw cart below
  totals: { subtotal: number; discount: number; total: number };
  agreedToTerms: boolean;
  paymentMethod: string;
  createdAt: string;
  /** Allow consumers to pass extra fields (e.g. coupon details) without TS friction. */
  [key: string]: unknown;
}

export async function processOrderStripe(orderData: ProcessOrderInput) {
  try {
    const rawCart = readCart();

    if (!rawCart.length) {
      return { status: false, message: "Your cart is empty." };
    }

    const orderType = deriveOrderType(rawCart);

    // ── EE mobile / landline: no BT order, save + email via Django ──────────
    if (orderType !== "broadband") {
      return {
        status: true,
        data: {
          orderType,
          externalId: generateExternalId(),
          billingAddress: orderData.billingAddress,
          shippingAddress: orderData.shippingAddress,
          // Full raw cart so Django stores all order data (planType, dataAllowance,
          // simType, validity, price, etc.).
          cart: rawCart,
          totals: orderData.totals,
          coupon: orderData.coupon,
          paymentMethod: orderData.paymentMethod,
          createdAt: orderData.createdAt,
          agreedToTerms: orderData.agreedToTerms,
        },
      };
    }

    // ── Broadband: run the full BT flow ─────────────────────────────────────
    const serviceAddress = getServiceAddress();

    if (!serviceAddress?.id) {
      return {
        status: false,
        message:
          "No service address found in cart. Please go back and select your address again.",
      };
    }

    if (!rawCart[0].productOfferingQualificationItem) {
      return {
        status: false,
        message:
          "Cart item is missing the BT product details. " +
          "Please go back and re-select your broadband plan.",
      };
    }

    const response = await fetch("/api/BritishTelecom/process-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...orderData,
        // Override the normalised cart with the raw one so the server has
        // productOfferingQualificationItem etc.
        cart: rawCart,
        serviceAddress,
      }),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok || !result?.success) {
      return {
        status: false,
        message: result?.message ?? "BT order processing failed.",
      };
    }

    return {
      status: true,
      data: {
        orderType,
        btOrderId: result.btOrderId,
        externalId: result.externalId,
        appointmentId: result.appointmentId,
        appointmentStart: result.appointmentStart,
        appointmentEnd: result.appointmentEnd,
        btStatus: result.status,
        btData: result.data,
        // fields Django needs
        billingAddress: orderData.billingAddress,
        shippingAddress: orderData.shippingAddress,
        // Full raw cart (carries BT productOfferingQualificationItem / zoikoPlan).
        cart: rawCart,
        totals: orderData.totals,
        coupon: orderData.coupon,
        paymentMethod: orderData.paymentMethod,
        createdAt: orderData.createdAt,
        agreedToTerms: orderData.agreedToTerms,
        serviceAddress,
      },
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unexpected error";
    return { status: false, message };
  }
}