import PrivacyPolicyPage from "./Privacypolicy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Protection | Zoiko Telecom",
  description:
    "Read the Zoiko Telecom Privacy Policy to understand how personal data is collected, used, protected, and managed across Zoiko Telecom services and platforms.",
};

export default function (){
    return (
        <>
            <PrivacyPolicyPage/>
        </>
    )
}