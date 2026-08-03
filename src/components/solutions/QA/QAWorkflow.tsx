"use client";

import AnimatedWorkflowPipeline, { WorkflowStep } from "@/src/components/solutions/common/AnimatedWorkflowPipeline";
import GearIcon from "@/components/ui/gear-icon";
import CpuIcon from "@/components/ui/cpu-icon";
import LayersIcon from "@/components/ui/layers-icon";
import BugIcon from "@/components/ui/bug-icon";
import ShieldIcon from "@/components/ui/shield-icon";
import RocketIcon from "@/components/ui/rocket-icon";

const steps: WorkflowStep[] = [
  {
    id: "plan",
    title: "Plan & Analyze",
    description: "From requirement analysis to production deployment, AP2L automates and orchestrates testing",
    icon: GearIcon,
  },
  {
    id: "generate",
    title: "Generate tests",
    description: "Creates comprehensive test suites covering all layers",
    icon: CpuIcon,
  },
  {
    id: "execute",
    title: "Execute & Monitor",
    description: "Parallel execution across browsers with real-time monitoring",
    icon: LayersIcon,
  },
  {
    id: "analyze",
    title: "Analyze & Debug",
    description: "AI analytics identify failures and suggest fixes",
    icon: BugIcon,
  },
  {
    id: "secure",
    title: "Security & Compliance",
    description: "Automated scanning ensures enterprise security standards",
    icon: ShieldIcon,
  },
  {
    id: "deploy",
    title: "Deploy & Release",
    description: "Quality gates ensure only high-quality code reaches production",
    icon: RocketIcon,
  },
];

export default function QAWorkflow() {
  return (
    <AnimatedWorkflowPipeline
      title="Continuous Quality Across Every Stage"
      subtitle="Automate the testing lifecycle to deliver faster feedback, better collaboration, and consistent software quality."
      steps={steps}
    />
  );
}