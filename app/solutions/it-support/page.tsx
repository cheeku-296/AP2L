"use client";

import ITHero from "@/src/components/solutions/IT-Support/Ithero";
import ITChallenges from "@/src/components/solutions/IT-Support/ITChallenges";
import ITCapabilities from "@/src/components/solutions/IT-Support/ITCapabilities";
import ITWorkflow from "@/src/components/solutions/IT-Support/ITWorkflow";
import ITMetrics from "@/src/components/solutions/IT-Support/ITMetrics";
import ITTechnologies from "@/src/components/solutions/IT-Support/ITTechnologies";
import CTA from "@/src/components/common/CTA/CTA";
import ThemeBuilder from "@/src/components/common/ThemeBuilder/ThemeBuilder";
import { useThemeConfig } from "@/src/context/ThemeConfigContext";

const COMPONENTS = [

  { id: "it_challenges", label: "The Challenges" },
  { id: "it_capabilities", label: "Our Capabilities" },
  { id: "it_workflow", label: "How We Solve" },
  { id: "it_metrics", label: "Metrics" },
  { id: "it_technologies", label: "Technologies" },
  { id: "cta", label: "Call to Action" },
];

export default function ITSupportPage() {
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
        <div className="">
          <div className="dark">
            <ITHero />
          </div>
        </div>

        {renderWithTheme("it_challenges", <ITChallenges />)}
        {renderWithTheme("it_capabilities", <ITCapabilities />)}
        {renderWithTheme("it_workflow", <ITWorkflow />)}
        {renderWithTheme("it_metrics", <ITMetrics />)}
        {renderWithTheme("it_technologies", <ITTechnologies />)}

        {renderWithTheme(
          "cta",
          <CTA
            headline="Modernize Your IT Support with AI"
            description="Transform service delivery, automate repetitive workflows, accelerate incident resolution, and provide exceptional support experiences with AP2L's intelligent IT operations platform."
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