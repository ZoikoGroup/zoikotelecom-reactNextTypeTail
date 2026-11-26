import {
  CareersHero,
  CurrentVacancyStatusSection,
  WorkContextSection,
  ListingPreviewSection,
  AccessSafetyPrivacySection,
  MoreAboutZoikoCareersSection,
  CareersFaqSection,
  CareersEnquiriesCta,
} from "./components";

export default function CareersAtZoikoPage() {
  return (
    <main>
      <CareersHero />
      <CurrentVacancyStatusSection />
      <WorkContextSection />
      <ListingPreviewSection />
      <AccessSafetyPrivacySection />
      <MoreAboutZoikoCareersSection />
      <CareersFaqSection />
      <CareersEnquiriesCta />
    </main>
  );
}
