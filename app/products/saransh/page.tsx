import SaranshHero from "@/src/components/Products/Saransh/Hero/Hero";
import BusinessValues from "@/src/components/Products/Saransh/BusinessValues/BusinessValues";
import KeyCapabilities from "@/src/components/Products/Saransh/KeyCapabilities/KeyCapabilities";
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
