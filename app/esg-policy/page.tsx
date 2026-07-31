import ESGPolicyPage from "./EsgPolicy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zoiko Telecom ESG Policy | Sustainable Practices",
  description:
    "Learn about Zoiko Telecom's ESG (Environmental, Social, and Governance) Policy. Discover our commitment to sustainability, ethics, and social responsibility.",
};
export default function(){
    return(
    <>
        <ESGPolicyPage/>
    </>
    )
}