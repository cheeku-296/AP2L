"use client";

import AnimatedWorkflowPipeline, { WorkflowStep } from "@/src/components/solutions/common/AnimatedWorkflowPipeline";
import {
  Code2,
  GitBranch,
  TestTube2,
  Bug,
  Shield,
  Rocket,
} from "lucide-react";

const steps: WorkflowStep[] = [
  {
    id: "plan",
    title: "Plan & Analyze",
    description: "AI analyzes your application and identifies test scenarios",
    icon: Code2,
  },
  {
    id: "generate",
    title: "Generate Tests",
    description: "Creates comprehensive test suites covering all layers",
    icon: TestTube2,
  },
  {
    id: "execute",
    title: "Execute & Monitor",
    description: "Parallel execution across browsers with real-time monitoring",
    icon: GitBranch,
  },
  {
    id: "analyze",
    title: "Analyze & Debug",
    description: "AI analytics identify failures and suggest fixes",
    icon: Bug,
  },
  {
    id: "secure",
    title: "Security & Compliance",
    description: "Automated scanning ensures enterprise security standards",
    icon: Shield,
  },
  {
    id: "deploy",
    title: "Deploy & Release",
    description: "Quality gates ensure only high-quality code reaches production",
    icon: Rocket,
  },
];

export default function QAWorkflow() {
  return (
    <AnimatedWorkflowPipeline
      title="Streamlined Testing Workflow"
      subtitle="From planning to deployment — AP2L automates every step of the testing lifecycle."
      steps={steps}
    />
  );
}