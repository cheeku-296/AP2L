import SwikrutiHero from "@/src/components/products-hero/Swikruti/Hero/Hero";
import BusinessValues from "@/src/components/products-hero/Swikruti/BusinessValues/BusinessValues";
import KeyCapabilities from "@/src/components/products-hero/Swikruti/KeyCapabilities/KeyCapabilities";
import Integrations from "@/src/components/products-hero/Swikruti/Integrations/Integrations";
import CTA from "@/src/components/common/CTA/CTA";

export const metadata = {
  title: "Swikruti | AP2L",
  description: "Consent Management & DPDPA Compliance platform for enterprise privacy. Keep your customer data compliant, secure, and fully auditable.",
};

export default function SwikrutiPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SwikrutiHero />
      <BusinessValues />
      <KeyCapabilities />
      <Integrations />
      <CTA forceLight={true} />
    </main>
  );
}