import ShieldVUEHero from "@/src/components/Products/ShieldVUE/Hero/Hero";

export const metadata = {
  title: "ShieldVUE | AP2L",
  description: "Gain complete visibility into software components, vulnerabilities, cryptographic assets, and compliance risks through a unified Software Bill of Materials and Cryptographic Assets Governance Platform.",
};

export default function ShieldVUEPage() {
  return (
    <main className="font-['Clash_Grotesk'] min-h-screen bg-white">
      <ShieldVUEHero />
      {/* Rest of the page content can go here */}
    </main>
  );
}
