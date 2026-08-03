"use client";

import AnimatedWorkflowPipeline, { WorkflowStep } from "@/src/components/solutions/common/AnimatedWorkflowPipeline";
import LayersIcon from "@/components/ui/layers-icon";
import CpuIcon from "@/components/ui/cpu-icon";
import GearIcon from "@/components/ui/gear-icon";
import UsersIcon from "@/components/ui/users-icon";
import ChartLineIcon from "@/components/ui/chart-line-icon";

const steps: WorkflowStep[] = [
  {
    id: "ingest",
    title: "Ingest",
    description: "Unify tickets, chats, emails, and alerts into a single queue.",
    icon: LayersIcon,
  },
  {
    id: "triage",
    title: "Triage",
    description: "AI-powered categorization, prioritization, and routing.",
    icon: CpuIcon,
  },
  {
    id: "resolve",
    title: "Resolve",
    description: "Automated resolution via virtual agents or knowledge base.",
    icon: GearIcon,
  },
  {
    id: "escalate",
    title: "Escalate",
    description: "Seamless handoff to human agents with full context.",
    icon: UsersIcon,
  },
  {
    id: "analyze",
    title: "Analyze",
    description: "Gain insights from ticket data to improve continuously.",
    icon: ChartLineIcon,
  },
];

export default function ITWorkflow() {
  return (
    <AnimatedWorkflowPipeline
      title="Intelligent Service Delivery Across Every Stage"
      subtitle="Automate incident management, ticket routing, service fulfilment, and continuous improvement for faster, more reliable IT support."
      steps={steps}
    />
  );
}