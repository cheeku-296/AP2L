import ShieldVUEHero from "@/src/components/Products/ShieldVUE/Hero/Hero";
import BusinessValues from "@/src/components/Products/ShieldVUE/BusinessValues/BusinessValues";
import KeyCapabilities from "@/src/components/Products/ShieldVUE/KeyCapabilities/KeyCapabilities";
import CTA from "@/src/components/common/CTA/CTA";

export const metadata = {
  title: "ShieldVUE | AP2L",
  description: "Gain complete visibility into software components, vulnerabilities, cryptographic assets, and compliance risks through a unified Software Bill of Materials and Cryptographic Assets Governance Platform.",
};

export default function ShieldVUEPage() {
  return (
    <main className="min-h-screen bg-white">
      <ShieldVUEHero />
      <BusinessValues />
      <KeyCapabilities />
      <CTA forceLight={true} />
    </main>
  );
}
