"use client";



import Hero from "@/src/components/Landing/Hero/Hero";
import TrustedPartners from "@/src/components/Landing/TrustedPartners/TrustedPartners";
import PlatformOverview from "@/src/components/Landing/PlatformOverview/PlatformOverview";
import KeySolutions from "@/src/components/Landing/KeySolutions/KeySolutions";
import CoreFeatures from "@/src/components/Landing/CoreFeatures/CoreFeatures";
import ROIMetrics from "@/src/components/Landing/ROIMetrics/ROIMetrics";
import Testimonials from "@/src/components/Landing/Testimonials/Testimonials";
import CTA from "@/src/components/common/CTA/CTA";

import { useThemeConfig } from "@/src/context/ThemeConfigContext";
import ThemeBuilder from "@/src/components/common/ThemeBuilder/ThemeBuilder";

const COMPONENTS = [
  { id: "hero", label: "Hero Section" },
  { id: "partners", label: "Trusted Partners" },
  { id: "solutions", label: "Key Solutions" },
  { id: "platform", label: "Platform Overview" },
  { id: "features", label: "Core Features" },
  { id: "roi", label: "ROI Metrics" },
  { id: "testimonials", label: "Testimonials" },
  { id: "cta", label: "Call to Action" },
];

export default function Home() {
  const { componentThemes } = useThemeConfig();

  // Helper to wrap a component and force its theme using Tailwind's .dark class structure
  const renderWithTheme = (id: string, Component: React.ReactNode) => {
    const theme = componentThemes[id] || "global";

    if (theme === "global") {
      return Component;
    }

    if (theme === "dark") {
      // Force dark mode context
      return (
        <div className="dark">
          {Component}
        </div>
      );
    }

    if (theme === "light") {
      // Force light mode context using our updated globals.css selector
      return (
        <div className="light">
          {Component}
        </div>
      );
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-50 min-h-screen flex flex-col transition-colors duration-500">

      {/* Floating Theme Configurator */}
      <ThemeBuilder components={COMPONENTS} />

      <main className="flex-1 w-full flex flex-col relative z-0">
        {renderWithTheme("hero",
          <div className="">
            <Hero />
          </div>
        )}

        {renderWithTheme("partners", <TrustedPartners />)}
        {renderWithTheme("features", <CoreFeatures />)}
        {renderWithTheme("platform", <PlatformOverview />)}
        {renderWithTheme("solutions", <KeySolutions />)}
        {renderWithTheme("roi", <ROIMetrics />)}
        {renderWithTheme("testimonials", <Testimonials />)}

        {renderWithTheme("cta",
          <CTA
            headline="Transform your infrastructure starting today."
            description="Join hundreds of engineering teams using our AI-driven platforms to automate testing, secure their supply chain, and guarantee uptime."
          />
        )}
      </main>
    </div>
  );
}