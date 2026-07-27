"use client";

import AnimatedWorkflowPipeline, { WorkflowStep } from "@/src/components/solutions/common/AnimatedWorkflowPipeline";
import {
  Search,
  FileCheck,
  ShieldCheck,
  Lock,
  GitBranch,
} from "lucide-react";

const steps: WorkflowStep[] = [
  {
    id: "discover",
    title: "Discover",
    description: "Continuous discovery of assets, dependencies, and potential threats.",
    icon: Search,
  },
  {
    id: "assess",
    title: "Assess",
    description: "Risk-based vulnerability assessment and compliance gap analysis.",
    icon: FileCheck,
  },
  {
    id: "remediate",
    title: "Remediate",
    description: "Automated patching and policy enforcement with AI-powered prioritization.",
    icon: ShieldCheck,
  },
  {
    id: "monitor",
    title: "Monitor",
    description: "Real‑time threat monitoring, anomaly detection, and incident alerting.",
    icon: Lock,
  },
  {
    id: "report",
    title: "Report",
    description: "Generate audit‑ready reports and compliance evidence on demand.",
    icon: GitBranch,
  },
];

const securityTheme = {
  glowTop: "bg-amber-500/10",
  glowBottom: "bg-rose-500/10",
  iconBorder: "border-amber-500/50 text-amber-400 hover:border-amber-400 hover:bg-amber-600 hover:text-white hover:shadow-lg hover:shadow-amber-500/30",
  iconActiveBg: "bg-amber-600 border-amber-400 text-white shadow-xl shadow-amber-500/40 scale-110",
  iconActiveText: "text-white",
  iconActiveShadow: "shadow-amber-500/40",
  connectorGradient: "from-amber-500/50 via-orange-400/70 to-rose-400/50",
  pulseBeamGradient: "from-transparent via-amber-300 to-transparent",
  titleActiveText: "text-amber-400",
};

export default function SecWorkflow() {
  return (
    <AnimatedWorkflowPipeline
      title="End‑to‑End Security & Compliance Workflow"
      subtitle="From discovery to reporting — AP2L automates the entire security lifecycle."
      steps={steps}
      themeColors={securityTheme}
    />
  );
}