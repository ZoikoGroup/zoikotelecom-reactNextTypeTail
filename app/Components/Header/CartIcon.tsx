"use client";

import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";

const CartIcon = () => {
  const router = useRouter();
  const { cart } = useCart();

  const cartCount = cart.length;

  return (
    <div
      className="relative cursor-pointer"
      onClick={() => router.push("/checkout")}
    >
      <ShoppingCart className="w-6 h-6" />

      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#C12172] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;