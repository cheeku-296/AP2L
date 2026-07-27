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

const devopsTheme = {
  glowTop: "bg-emerald-500/10",
  glowBottom: "bg-cyan-500/10",
  iconBorder: "border-emerald-500/50 text-emerald-400 hover:border-emerald-400 hover:bg-emerald-600 hover:text-white hover:shadow-lg hover:shadow-emerald-500/30",
  iconActiveBg: "bg-emerald-600 border-emerald-400 text-white shadow-xl shadow-emerald-500/40 scale-110",
  iconActiveText: "text-white",
  iconActiveShadow: "shadow-emerald-500/40",
  connectorGradient: "from-emerald-500/50 via-teal-400/70 to-cyan-400/50",
  pulseBeamGradient: "from-transparent via-emerald-300 to-transparent",
  titleActiveText: "text-emerald-400",
};

export default function DevWorkflow() {
  return (
    <AnimatedWorkflowPipeline
      title="End-to-End DevOps Workflow"
      subtitle="From code commit to production — AP2L automates and secures every step."
      steps={steps}
      themeColors={devopsTheme}
    />
  );
}