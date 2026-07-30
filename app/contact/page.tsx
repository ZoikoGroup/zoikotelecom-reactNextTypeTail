import ContactSection from "./ContactUs";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Zoiko Telecom | Expert UK Telecom Solutions",
  description:
    "Contact Zoiko Telecom today for expert UK telecom solutions, including broadband, VoIP, cloud services, and reliable business communication support.",
};

export default function Page() {
  return (
    <>
      <ContactSection />
    </>
  );
}