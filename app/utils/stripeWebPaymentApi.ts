// app/utils/stripeWebPaymentApi.ts
//
// Forwards the localStorage cart (array of `Plan` items — each carrying the
// full BT `productOfferingQualificationItem`, the matched `zoikoPlan`, the
// chosen `zoikoVariation` and the selected `address`) to
// /api/BritishTelecom/process-order.
//
// That route then builds:
//   • searchTimeSlot
//   • appointment booking
//   • productOrder
// payloads directly from the cart row — no string sniffing.

import type { Plan, FormattedAddress } from "@/app/context/CartContext";

/** Read the cart from localStorage (returns [] on the server or on error). */
function readCart(): Plan[] {
  try {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("cart");
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? (parsed as Plan[]) : [];
  } catch {
    return [];
  }
}

/** Pull the address out of the first cart item. */
function getServiceAddress(): FormattedAddress | null {
  const items = readCart();
  return items[0]?.address ?? null;
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
    const serviceAddress = getServiceAddress();

    if (!serviceAddress?.id) {
      return {
        status: false,
        message:
          "No service address found in cart. Please go back and select your address again.",
      };
    }

    const rawCart = readCart();

    if (!rawCart.length) {
      return { status: false, message: "Your cart is empty." };
    }

    if (!rawCart[0].productOfferingQualificationItem) {
      return {
        status: false,
        message:
          "Cart item is missing the BT product details. " +
          "Please go back to /fibre-packages and re-select your plan.",
      };
    }

    const response = await fetch("/api/BritishTelecom/process-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...orderData,
        // Override the normalised cart with the Plan-shaped one so the
        // server has productOfferingQualificationItem etc.
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
        cart: orderData.cart, // billing-summary cart (display)
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