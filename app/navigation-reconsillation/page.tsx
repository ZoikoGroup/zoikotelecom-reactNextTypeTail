import {
  NavigationReconciliationHero,
  FreezeReconcileSection,
  SourceHierarchySection,
  OpenReconciliationControlsSection,
  CanonicalRouteLineSection,
  OneShellOneRegistrySection,
  RegistryContractSection,
  CustomerJourneysQaSection,
  OpenDecisionsBeforeReleaseSection,
} from "./components";

export default function NavPage() {
  return (
    <main>
      <NavigationReconciliationHero />
      <FreezeReconcileSection />
      <SourceHierarchySection />
      <OpenReconciliationControlsSection />
      <CanonicalRouteLineSection />
      <OneShellOneRegistrySection />
      <RegistryContractSection />
      <CustomerJourneysQaSection />
      <OpenDecisionsBeforeReleaseSection />
    </main>
  );
}
