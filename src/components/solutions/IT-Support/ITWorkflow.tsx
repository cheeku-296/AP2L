"use client";

import AnimatedWorkflowPipeline, { WorkflowStep } from "@/src/components/solutions/common/AnimatedWorkflowPipeline";
import {
  Inbox,
  Cpu,
  Wrench,
  Users,
  BarChart3,
} from "lucide-react";

const steps: WorkflowStep[] = [
  {
    id: "ingest",
    title: "Ingest",
    description: "Unify tickets, chats, emails, and alerts into a single queue.",
    icon: Inbox,
  },
  {
    id: "triage",
    title: "Triage",
    description: "AI-powered categorization, prioritization, and routing.",
    icon: Cpu,
  },
  {
    id: "resolve",
    title: "Resolve",
    description: "Automated resolution via virtual agents or knowledge base.",
    icon: Wrench,
  },
  {
    id: "escalate",
    title: "Escalate",
    description: "Seamless handoff to human agents with full context.",
    icon: Users,
  },
  {
    id: "analyze",
    title: "Analyze",
    description: "Gain insights from ticket data to improve continuously.",
    icon: BarChart3,
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