"use client";

import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * localStorage key that your cart-write logic uses.
 * Adjust this if your add-to-cart code stores under a different key.
 */
const CART_KEY = "cart";

const getCartCount = (): number => {
  if (typeof window === "undefined") return 0;
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return 0;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return 0;
    // Sum quantities (qty / quantity), falling back to 1 per row.
    return parsed.reduce((total: number, item: any) => {
      const q = Number(item?.qty ?? item?.quantity ?? 1);
      return total + (Number.isFinite(q) && q > 0 ? q : 1);
    }, 0);
  } catch {
    return 0;
  }
};

const CartIcon = () => {
  const router = useRouter();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCount = () => setCartCount(getCartCount());

    // Initial read happens client-side only, so server render (0) and first
    // client render match — no hydration mismatch.
    updateCount();

    // Same-tab updates: the add-to-cart code dispatches "cart-updated" after
    // writing localStorage["cart"]. We also listen for a couple of legacy
    // event names just in case.
    window.addEventListener("cart-updated", updateCount);
    window.addEventListener("cartChanged", updateCount);
    window.addEventListener("cartUpdated", updateCount);
    // Cross-tab updates (fires automatically when another tab writes).
    window.addEventListener("storage", updateCount);

    return () => {
      window.removeEventListener("cart-updated", updateCount);
      window.removeEventListener("cartChanged", updateCount);
      window.removeEventListener("cartUpdated", updateCount);
      window.removeEventListener("storage", updateCount);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => router.push("/checkout")}
      aria-label={
        cartCount > 0
          ? `Cart, ${cartCount} item${cartCount > 1 ? "s" : ""}`
          : "Cart"
      }
      className="relative flex h-11 w-11 items-center justify-center rounded-full text-[#111] transition-colors hover:text-[#C12172] dark:text-neutral-100 dark:hover:text-[#e94196]"
    >
      <ShoppingCart className="h-6 w-6" />

      {cartCount > 0 && (
        <span className="absolute right-0.5 top-0.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#C12172] px-1 text-[11px] font-bold leading-none text-white">
          {cartCount > 99 ? "99+" : cartCount}
        </span>
      )}
    </button>
  );
};

export default CartIcon;