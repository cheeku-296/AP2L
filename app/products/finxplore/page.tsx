import FinxploreHero from "@/src/components/products-hero/Finxplore/Hero/Hero";
import BusinessValues from "@/src/components/products-hero/Finxplore/BusinessValues/BusinessValues";
import KeyCapabilities from "@/src/components/products-hero/Finxplore/KeyCapabilities/KeyCapabilities";
import Integrations from "@/src/components/products-hero/Finxplore/Integrations/Integrations";
import CTA from "@/src/components/common/CTA/CTA";

export const metadata = {
  title: "Finxplore | AP2L",
  description: "Real-time AI-Powered Risk & Fraud Detection for financial institutions. Protect your business with intelligent anomaly detection and AML compliance.",
};

export default function FinxplorePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <FinxploreHero />
      <BusinessValues />
      <KeyCapabilities />
      <Integrations />
      <CTA forceLight={true} />
    </main>
  );
}