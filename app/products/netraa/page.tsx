import NetraaHero from "@/src/components/products-hero/Netraa/Hero/Hero";
import BusinessValues from "@/src/components/products-hero/Netraa/BusinessValues/BusinessValues";
import KeyCapabilities from "@/src/components/products-hero/Netraa/KeyCapabilities/KeyCapabilities";
import CTA from "@/src/components/common/CTA/CTA";

export const metadata = {
  title: "Netraa AI-OPS | AP2L",
  description: "End-to-End Intelligent Observability, Powered By AI. Consolidate your logs, metrics, and traces into a single, AI-driven platform.",
};

export default function NetraaPage() {
  return (
    <main className="min-h-screen bg-white">
      <NetraaHero />
      <BusinessValues />
      <KeyCapabilities />
      <CTA forceLight={true} />
    </main>
  );
}
