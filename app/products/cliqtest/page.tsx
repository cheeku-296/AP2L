import CliqtestHero from "@/src/components/Products/Cliqtest/Hero/Hero";

export const metadata = {
  title: "Cliqtest | AP2L",
  description: "The AI-Powered Automated Testing Platform. Accelerate release cycles with flawless quality.",
};

export default function CliqtestPage() {
  return (
    <main className="font-space-grotesk min-h-screen bg-white text-white">
      <CliqtestHero />
    </main>
  );
}
