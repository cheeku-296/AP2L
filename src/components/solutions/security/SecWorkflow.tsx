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

export default function SecWorkflow() {
  return (
    <AnimatedWorkflowPipeline
      title="Continuous Security Across the Software Lifecycle"
      subtitle="Automate software discovery, vulnerability management, compliance, and continuous monitoring for secure software delivery."
      steps={steps}
    />
  );
}