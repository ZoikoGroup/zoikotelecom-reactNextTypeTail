import ModernSlaveryPolicyPage from "./ModernSlaveryPolicy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modern Slavery & Human Rights Policy | Zoiko Telecom",
  description:
    "Read Zoiko Telecom's modern slavery & human rights policy, outlining our zero-tolerance approach to exploitation and commitment to ethical practices.",
};
export default function(){
    return(
        <>
            <ModernSlaveryPolicyPage/>
        </>
    )
}