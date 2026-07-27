"use client";

import AnimatedWorkflowPipeline, { WorkflowStep } from "@/src/components/solutions/common/AnimatedWorkflowPipeline";
import {
  Code2,
  GitBranch,
  Shield,
  Activity,
  Rocket,
} from "lucide-react";

const steps: WorkflowStep[] = [
  {
    id: "plan",
    title: "Plan & Code",
    description: "Version control and collaboration with automated code reviews.",
    icon: Code2,
  },
  {
    id: "build",
    title: "Build & Test",
    description: "Automated builds with integrated testing and quality gates.",
    icon: GitBranch,
  },
  {
    id: "secure",
    title: "Security Scan",
    description: "Shift-left security scanning for vulnerabilities and compliance.",
    icon: Shield,
  },
  {
    id: "deploy",
    title: "Deploy & Monitor",
    description: "Automated deployment with real-time observability and alerts.",
    icon: Activity,
  },
  {
    id: "release",
    title: "Release & Scale",
    description: "Seamless releases with auto‑scaling and performance optimization.",
    icon: Rocket,
  },
];

export default function DevWorkflow() {
  return (
    <AnimatedWorkflowPipeline
      title="End-to-End DevOps Workflow"
      subtitle="From code commit to production — AP2L automates and secures every step."
      steps={steps}
    />
  );
}