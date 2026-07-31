import AboutUs from "./AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zoiko Telecom About Us | Our Mission & Vision",
  description:
    "Learn about Zoiko Telecom, our mission, values and commitment to delivering reliable eSIM, broadband and telecom solutions for individuals and businesses.",
};

export default function Page() {
  return (
    <>
      <AboutUs />
    </>
  );
}