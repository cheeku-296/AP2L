import Hero from "@/src/components/Landing/Hero/Hero";

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <main className="flex-1 w-full pt-1 lg:pt-2 lg:px-2 pb-2">
        <Hero />
      </main>
    </div>
  );
}