import {
  ConnectivityCloudHero,
  FourNeedsSection,
  ConnectivityVsCloudSection,
  YourLocationsSection,
  CloudRequirementsSection,
  BeforeYouEnquireSection,
  MoreForBusinessSection,
  ConnectivityAndCloudFaqsSection,
  ConnectivityCloudCta,
} from "./components";

export default function CloudPage() {
  return (
    <main>
      <ConnectivityCloudHero />
      <FourNeedsSection />
      <ConnectivityVsCloudSection />
      <YourLocationsSection />
      <CloudRequirementsSection />
      <BeforeYouEnquireSection />
      <MoreForBusinessSection />
      <ConnectivityAndCloudFaqsSection />
      <ConnectivityCloudCta />
    </main>
  );
}
