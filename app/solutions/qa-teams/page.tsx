"use client";

import QAHero from "@/src/components/solutions/QA/Qahero";
import QAChallenges from "@/src/components/solutions/QA/QAChallenges";
import QACapabilities from "@/src/components/solutions/QA/QACapabilities";
import QAWorkflow from "@/src/components/solutions/QA/QAWorkflow";
import QABenefits from "@/src/components/solutions/QA/QABenefits";
import QAMetrics from "@/src/components/solutions/QA/QAMetrics";
import QAIndustries from "@/src/components/solutions/QA/QAIndustries";
import QATechnologies from "@/src/components/solutions/QA/QATechnologies";
import QAFAQ from "@/src/components/solutions/QA/QAFAQ";
import CTA from "@/src/components/common/CTA/CTA";
import ThemeBuilder from "@/src/components/common/ThemeBuilder/ThemeBuilder";
import { useThemeConfig } from "@/src/context/ThemeConfigContext";

const COMPONENTS = [

  { id: "qa_challenges", label: "The Problems" },
  { id: "qa_capabilities", label: "Our Capabilities" },
  { id: "qa_workflow", label: "How We Solve" },
  { id: "qa_benefits", label: "Benefits" },
  { id: "qa_metrics", label: "Metrics" },
  { id: "qa_industries", label: "Industries" },
  { id: "qa_technologies", label: "Technologies" },
  { id: "qa_faq", label: "FAQ" },
  { id: "cta", label: "Let's Talk" },
];

export default function QAPage() {
  const { componentThemes } = useThemeConfig();

  const renderWithTheme = (
    id: string,
    Component: React.ReactNode
  ) => {
    const theme = componentThemes[id] || "global";

    if (theme === "global") {
      return Component;
    }

    if (theme === "dark") {
      return <div className="dark">{Component}</div>;
    }

    if (theme === "light") {
      return <div className="light">{Component}</div>;
    }

    return Component;
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen flex flex-col transition-colors duration-500">
      <ThemeBuilder components={COMPONENTS} />

      <main className="flex-1 w-full flex flex-col relative z-0">
        
        {/* 1. Hero Section */}
        <div className="">
          <div className="dark">
            <QAHero />
          </div>
        </div>

        {/* 2. These are the problems */}
        {renderWithTheme("qa_challenges", <QAChallenges />)}

        {/* 3. These are our capabilities */}
        {renderWithTheme("qa_capabilities", <QACapabilities />)}

        {/* 4. Here's how we solve them */}
        {renderWithTheme("qa_workflow", <QAWorkflow />)}

        {/* 5. Here's the business value */}
        {renderWithTheme("qa_benefits", <QABenefits />)}
        {renderWithTheme("qa_metrics", <QAMetrics />)}
        {renderWithTheme("qa_industries", <QAIndustries />)}
        {renderWithTheme("qa_technologies", <QATechnologies />)}

        {/* 6. Let's talk */}
        {/* {renderWithTheme("qa_faq", <QAFAQ />)} */}
        {renderWithTheme(
          "cta",
          <CTA
            headline="Ready to Transform Your Quality Engineering?"
            description="Accelerate software quality with AI-powered testing, intelligent automation, and enterprise-grade QA solutions."
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