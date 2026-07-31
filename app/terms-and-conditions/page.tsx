import TermsConditionsPage from "./TermsAndCondition"

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Read Terms of Service and User Agreement | Zoiko Telecom",
  description:
    "Read Zoiko Telecom Terms and Conditions for comprehensive details on our services, policies & user agreements. Stay informed about our rules & guidelines.",
};

export default function (){
    return(
        <>
            <TermsConditionsPage/>
        </>
    )
}