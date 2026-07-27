import SaranshHero from "@/src/components/products-hero/Saransh/Hero/Hero";
import BusinessValues from "@/src/components/products-hero/Saransh/BusinessValues/BusinessValues";
import KeyCapabilities from "@/src/components/products-hero/Saransh/KeyCapabilities/KeyCapabilities";
import CTA from "@/src/components/common/CTA/CTA";

export const metadata = {
  title: "Saransh | AP2L",
  description: "AI-Enabled Service Virtualization & Dependency Simulation Platform.",
};

export default function SaranshPage() {
  return (
    <main className="min-h-screen bg-white">
      <SaranshHero />
      <BusinessValues />
      <KeyCapabilities />
      <CTA forceLight={true} />
    </main>
  );
}
