import {
  InvestorsHero,
  RegisterJumpNav,
  CompanyIdentitySection,
  PublicFilingsSection,
  ReadingFilingsSection,
  ScopeExclusionsSection,
  RegisterContactSection,
  MoreAboutZoikoSection,
  InvestorFaqSection,
  CompanyRecordsCta,
} from "./components";

export default function InvestorsPage() {
  return (
    <main>
      <InvestorsHero />
      <RegisterJumpNav />
      <CompanyIdentitySection />
      <PublicFilingsSection />
      <ReadingFilingsSection />
      <ScopeExclusionsSection />
      <RegisterContactSection />
      <MoreAboutZoikoSection />
      <InvestorFaqSection />
      <CompanyRecordsCta />
    </main>
  );
}
