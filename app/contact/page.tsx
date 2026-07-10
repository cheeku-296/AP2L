"use client";

import {
  ContactHero,
  ContactSection,
  GoogleMap,
  FAQ,
} from "../../src/components/contact-us";
import CTA from "@/src/components/common/CTA/CTA";
import ThemeBuilder from "@/src/components/common/ThemeBuilder/ThemeBuilder";
import { useThemeConfig } from "@/src/context/ThemeConfigContext";

const COMPONENTS = [
  { id: "contact_hero", label: "Contact Hero" },
  { id: "contact_section", label: "Contact Section" },
  { id: "google_map", label: "Google Map" },
  { id: "faq", label: "FAQ" },
  { id: "contact_cta", label: "Call to Action" },
];

export default function ContactPage() {
  const { componentThemes } = useThemeConfig();

  const renderWithTheme = (id: string, Component: React.ReactNode) => {
    const theme = componentThemes[id] || "global";
    
    if (theme === "global") {
      return Component;
    }
    
    if (theme === "dark") {
      return (
        <div className="dark">
          {Component}
        </div>
      );
    }
    
    if (theme === "light") {
      return (
        <div className="light">
           {Component}
        </div>
      );
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-50 min-h-screen flex flex-col transition-colors duration-500">
      <ThemeBuilder components={COMPONENTS} />
      
      <main className="flex-1 w-full flex flex-col relative z-0">
        {renderWithTheme("contact_hero", 
          <div className="">
            <ContactHero />
          </div>
        )}
        
        {renderWithTheme("contact_section", <ContactSection />)}
        {renderWithTheme("google_map", <GoogleMap />)}
        {renderWithTheme("faq", <FAQ />)}
        {renderWithTheme("contact_cta", 
          <CTA 
            headline="Ready To Accelerate Your Digital Transformation?" 
            description="Whether you're exploring AI, Cloud Engineering, Enterprise Automation, Cybersecurity or Intelligent Software Platforms, our experts are ready to help you choose the right solution for your organization."
            primaryButtonText="Contact Us"
            primaryButtonLink="/book-demo"
          />
        )}
      </main>
    </div>
  );
}