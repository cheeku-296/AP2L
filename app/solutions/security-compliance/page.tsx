"use client";

import SecHero from "@/src/components/solutions/security/SecHero";
import SecChallenges from "@/src/components/solutions/security/SecChallenges";
import SecCapabilities from "@/src/components/solutions/security/SecCapabilities";
import SecWorkflow from "@/src/components/solutions/security/SecWorkflow";
import SecMetrics from "@/src/components/solutions/security/SecMetrics";
import SecTechnologies from "@/src/components/solutions/security/SecTechnologies";
import CTA from "@/src/components/common/CTA/CTA";
import ThemeBuilder from "@/src/components/common/ThemeBuilder/ThemeBuilder";
import { useThemeConfig } from "@/src/context/ThemeConfigContext";

const COMPONENTS = [

  { id: "security_challenges", label: "The Challenges" },
  { id: "security_capabilities", label: "Our Capabilities" },
  { id: "security_workflow", label: "How We Solve" },
  { id: "security_metrics", label: "Metrics" },
  { id: "security_technologies", label: "Technologies" },
  { id: "cta", label: "Call to Action" },
];

export default function SecurityPage() {
  const { componentThemes } = useThemeConfig();

  const renderWithTheme = (id: string, Component: React.ReactNode) => {
    const theme = componentThemes[id] || "global";
    if (theme === "global") return Component;
    if (theme === "dark") return <div className="dark">{Component}</div>;
    if (theme === "light") return <div className="light">{Component}</div>;
    return Component;
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen flex flex-col transition-colors duration-500">
      <ThemeBuilder components={COMPONENTS} />

      <main className="flex-1 w-full flex flex-col relative z-0">
        <div className="lg:p-2 bg-white">
          <div className="dark">
            <SecHero />
          </div>
        </div>

        {renderWithTheme("security_challenges", <SecChallenges />)}
        {renderWithTheme("security_capabilities", <SecCapabilities />)}
        {renderWithTheme("security_workflow", <SecWorkflow />)}
        {renderWithTheme("security_metrics", <SecMetrics />)}
        {renderWithTheme("security_technologies", <SecTechnologies />)}

        {renderWithTheme(
          "cta",
          <CTA
            headline="Strengthen Your Security & Compliance"
            description="Protect your applications, infrastructure, and software supply chain with AI-powered security, continuous compliance, vulnerability management, and enterprise-grade cyber resilience."
            primaryButtonText="Book a Demo"
            primaryButtonLink="/contact"
            secondaryButtonText="Explore Products"
            secondaryButtonLink="/products"
          />
        )}
      </main>
    </div>
  );
}