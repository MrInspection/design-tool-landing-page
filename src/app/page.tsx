import { BrandsTicker } from "@/components/brands-ticker";
import { CallToAction } from "@/components/call-to-action";
import { FAQSection } from "@/components/faq-section";
import { FeaturesSection } from "@/components/features-section";
import { HeroSection } from "@/components/hero-section";
import { IntegrationsSection } from "@/components/integrations-section";
import { IntroductionSection } from "@/components/introduction-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandsTicker />
      <IntroductionSection />
      <FeaturesSection />
      <IntegrationsSection />
      <FAQSection />
      <CallToAction />
    </>
  );
}
