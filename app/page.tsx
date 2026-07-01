import Hero from "@/src/components/Landing/Hero/Hero";
import Trust from "@/src/components/Landing/Trust/Trust";
import ProductSuite from "@/src/components/Landing/ProductSuite/ProductSuite";
import Features from "@/src/components/Landing/Features/Features";

export default function Home() {
  return (
    <div className="bg-[#05050A] min-h-screen">
      <main>
        <Hero />
        <Trust />
        <ProductSuite />
        <Features />
      </main>
    </div>
  );
}