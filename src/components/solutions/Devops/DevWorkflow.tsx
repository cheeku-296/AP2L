"use client";

import AnimatedWorkflowPipeline, { WorkflowStep } from "@/src/components/solutions/common/AnimatedWorkflowPipeline";
import GearIcon from "@/components/ui/gear-icon";
import LayersIcon from "@/components/ui/layers-icon";
import ShieldIcon from "@/components/ui/shield-icon";
import EyeIcon from "@/components/ui/eye-icon";
import RocketIcon from "@/components/ui/rocket-icon";

const steps: WorkflowStep[] = [
  {
    id: "plan",
    title: "Plan & Code",
    description: "Version control and collaboration with automated code reviews.",
    icon: GearIcon,
  },
  {
    id: "build",
    title: "Build & Test",
    description: "Automated builds with integrated testing and quality gates.",
    icon: LayersIcon,
  },
  {
    id: "secure",
    title: "Security Scan",
    description: "Shift-left security scanning for vulnerabilities and compliance.",
    icon: ShieldIcon,
  },
  {
    id: "deploy",
    title: "Deploy & Monitor",
    description: "Automated deployment with real-time observability and alerts.",
    icon: EyeIcon,
  },
  {
    id: "release",
    title: "Release & Scale",
    description: "Seamless releases with auto‑scaling and performance optimization.",
    icon: RocketIcon,
  },
];

export default function DevWorkflow() {
  return (
    <AnimatedWorkflowPipeline
      title="Continuous Delivery Across Every Stage"
      subtitle="Automate the complete DevOps lifecycle for faster, secure, and reliable software delivery."
      steps={steps}
    />
  );
}