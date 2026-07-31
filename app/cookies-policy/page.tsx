import CookiesPolicyPage from "./CookiesPolicy"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zoiko Telecom Cookie Policy | Manage Cookie Use",
  description:
    "Learn how Zoiko Telecom uses cookies to improve website performance, enhance user experience, and manage preferences securely & transparently.",
};
export default function(){
    return(
    <>
    
        <CookiesPolicyPage/>
    </>
    )
}