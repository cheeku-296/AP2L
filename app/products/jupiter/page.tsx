import JupiterHero from "@/src/components/products-hero/Jupiter/Hero/Hero";
import BusinessValues from "@/src/components/products-hero/Jupiter/BusinessValues/BusinessValues";
import KeyCapabilities from "@/src/components/products-hero/Jupiter/KeyCapabilities/KeyCapabilities";
import CTA from "@/src/components/common/CTA/CTA";

export const metadata = {
  title: "Jupiter | AP2L",
  description: "AI-Powered IT Service Desk & Ticket Management Tool.",
};

export default function JupiterPage() {
  return (
    <main className="min-h-screen bg-white">
      <JupiterHero />
      <BusinessValues />
      <KeyCapabilities />
      <CTA forceLight={true} />
    </main>
  );
}
