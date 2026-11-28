import type { Metadata } from "next";
import CheckoutFlow from "../checkout/CheckoutFlow";

export const metadata: Metadata = {
  title: "Your Basket | Zoiko Telecom",
};

export default function CartPage() {
  return <CheckoutFlow view="cart" />;
}
