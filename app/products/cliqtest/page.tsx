import CliqtestHero from "@/src/components/products-hero/Cliqtest/Hero/Hero";
import BusinessValues from "@/src/components/products-hero/Cliqtest/BusinessValues/BusinessValues";
import KeyCapabilities from "@/src/components/products-hero/Cliqtest/KeyCapabilities/KeyCapabilities";
import Integrations from "@/src/components/products-hero/Cliqtest/Integrations/Integrations";
import CTA from "@/src/components/common/CTA/CTA";

export const metadata = {
  title: "Cliqtest | AP2L",
  description: "The AI-Powered Automated Testing Platform. Accelerate release cycles with flawless quality.",
};

export default function CliqtestPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <CliqtestHero />
      <BusinessValues />
      <KeyCapabilities />
      <Integrations />
      <CTA forceLight={true} />
    </main>
  );
}
