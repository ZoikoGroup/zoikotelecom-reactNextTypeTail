import type { Metadata } from "next";
import CheckoutFlow from "./CheckoutFlow";

export const metadata: Metadata = {
  title: "Checkout | Zoiko Telecom",
};

export default function CheckoutPage() {
  return <CheckoutFlow view="checkout" />;
}
