import {
  EsgHero,
  EsgPillarsSection,
  EsgEvidenceSection,
  EsgPolicyBanner,
  EsgRelatedInfoSection,
  EsgFaqSection,
  EsgApproachCta,
} from "./components";

export default function EsgPage() {
  return (
    <main>
      <EsgHero />
      <EsgPillarsSection />
      <EsgEvidenceSection />
      <EsgPolicyBanner />
      <EsgRelatedInfoSection />
      <EsgFaqSection />
      <EsgApproachCta />
    </main>
  );
}
