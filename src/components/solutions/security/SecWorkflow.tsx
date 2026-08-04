"use client";

import AnimatedWorkflowPipeline, { WorkflowStep } from "@/src/components/solutions/common/AnimatedWorkflowPipeline";
import SearchIcon from "@/components/ui/search-icon";
import CheckIcon from "@/components/ui/check-icon";
import ShieldIcon from "@/components/ui/shield-icon";
import LockIcon from "@/components/ui/lock-icon";
import ChartLineIcon from "@/components/ui/chart-line-icon";

const steps: WorkflowStep[] = [
  {
    id: "discover",
    title: "Discover",
    description: "Continuous discovery of assets, dependencies, and potential threats.",
    icon: SearchIcon,
  },
  {
    id: "assess",
    title: "Assess",
    description: "Risk-based vulnerability assessment and compliance gap analysis.",
    icon: CheckIcon,
  },
  {
    id: "remediate",
    title: "Remediate",
    description: "Automated patching and policy enforcement with AI-powered prioritization.",
    icon: ShieldIcon,
  },
  {
    id: "monitor",
    title: "Monitor",
    description: "Real‑time threat monitoring, anomaly detection, and incident alerting.",
    icon: LockIcon,
  },
  {
    id: "report",
    title: "Report",
    description: "Generate audit‑ready reports and compliance evidence on demand.",
    icon: ChartLineIcon,
  },
];

export default function SecWorkflow() {
  return (
    <AnimatedWorkflowPipeline
      title="Continuous Software Security"
      subtitle="Automate vulnerability management, compliance, and monitoring for secure delivery."
      steps={steps}
    />
  );
}