import BecomeSellerPage from "./Become-A-Reseller";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Zoiko Telecom Reseller | Start Earning Today",
  description:
    "Grow your business by becoming a Zoiko Telecom reseller. Access exclusive products and services, plus earn commissions by offering telecom solutions.",
};

export default function page(){
    return (
        <>
        <BecomeSellerPage/>
        </>
    )
}