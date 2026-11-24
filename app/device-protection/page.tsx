import type { Metadata } from "next";
import {
  DeviceProtectionHero,
  SituationExplorer,
  FourKindsSection,
  EightQuestionsSection,
  CoverageTableSection,
  ClaimsAndOptionsSection,
  ProtectionEnquiryForm,
  ProtectionFaqs,
  RelatedPages,
  ProtectionCta,
} from "./components";

export const metadata: Metadata = {
  title: "Device Protection | Zoiko Telecom",
  description:
    "Learn the difference between UK consumer rights, manufacturer warranties, repair services and optional device insurance — and where to ask for help.",
};

export default function DeviceProtectionPage() {
  return (
    <main>
      <DeviceProtectionHero />
      <SituationExplorer />
      <FourKindsSection />
      <EightQuestionsSection />
      <CoverageTableSection />
      <ClaimsAndOptionsSection />
      <ProtectionEnquiryForm />
      <ProtectionFaqs />
      <RelatedPages />
      <ProtectionCta />
    </main>
  );
}
