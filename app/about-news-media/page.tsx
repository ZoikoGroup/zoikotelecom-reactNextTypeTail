import {
  NewsMedia,
  FeaturedArticlesCard,
  BrowseTopicsSection,
  MediaResourcesSection,
  KeepExploringSection,
  NewsMediaFaqSection,
  LatestFromZoikoCta,
} from "./components";

export default function NewsMediaPage() {
  return (
    <main>
      <NewsMedia />
      <FeaturedArticlesCard />
      <BrowseTopicsSection />
      <MediaResourcesSection />
      <KeepExploringSection />
      <NewsMediaFaqSection />
      <LatestFromZoikoCta />
    </main>
  );
}
