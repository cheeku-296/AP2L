"use client";

import DevHero from "@/src/components/solutions/Devops/DevHero";
import DevChallenges from "@/src/components/solutions/Devops/DevChallenges";
import DevCapabilities from "@/src/components/solutions/Devops/DevCapabilities";
import DevWorkflow from "@/src/components/solutions/Devops/DevWorkflow";
import DevMetrics from "@/src/components/solutions/Devops/DevMetrics";
import DevTechnologies from "@/src/components/solutions/Devops/DevTechnologies";
import CTA from "@/src/components/common/CTA/CTA";
import ThemeBuilder from "@/src/components/common/ThemeBuilder/ThemeBuilder";
import { useThemeConfig } from "@/src/context/ThemeConfigContext";

const COMPONENTS = [

  { id: "devops_challenges", label: "The Problems" },
  { id: "devops_capabilities", label: "Our Capabilities" },
  { id: "devops_workflow", label: "How We Solve" },
  { id: "devops_metrics", label: "Metrics" },
  { id: "devops_technologies", label: "Technologies" },
  { id: "cta", label: "Call to Action" },
];

export default function DevOpsPage() {
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
        {/* 1. Hero Section */}
        <div className="">
          <div className="dark">
            <DevHero />
          </div>
        </div>

        {/* 2. The Problems */}
        {renderWithTheme("devops_challenges", <DevChallenges />)}

        {/* 3. Our Capabilities */}
        {renderWithTheme("devops_capabilities", <DevCapabilities />)}

        {/* 4. How We Solve */}
        {renderWithTheme("devops_workflow", <DevWorkflow />)}

        {/* 5. Metrics */}
        {renderWithTheme("devops_metrics", <DevMetrics />)}

        {/* 6. Technologies */}
        {renderWithTheme("devops_technologies", <DevTechnologies />)}

        {/* 7. Let's Talk */}
        {renderWithTheme(
          "cta",
          <CTA
            headline="Accelerate Your DevOps Journey"
            description="Build, secure, and deploy faster with intelligent CI/CD automation, cloud-native infrastructure, DevSecOps practices, and enterprise-grade deployment pipelines."
            primaryButtonText="Contact Us"
            primaryButtonLink="/contact"
          />
        )}
      </main>
    </div>
  );
}