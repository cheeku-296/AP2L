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

const itSupportTheme = {
  glowTop: "bg-indigo-500/10",
  glowBottom: "bg-blue-500/10",
  iconBorder: "border-indigo-500/50 text-indigo-400 hover:border-indigo-400 hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:shadow-indigo-500/30",
  iconActiveBg: "bg-indigo-600 border-indigo-400 text-white shadow-xl shadow-indigo-500/40 scale-110",
  iconActiveText: "text-white",
  iconActiveShadow: "shadow-indigo-500/40",
  connectorGradient: "from-indigo-500/50 via-blue-400/70 to-sky-400/50",
  pulseBeamGradient: "from-transparent via-indigo-300 to-transparent",
  titleActiveText: "text-indigo-400",
};

export default function ITWorkflow() {
  return (
    <AnimatedWorkflowPipeline
      title="End‑to‑End IT Support Workflow"
      subtitle="From ticket ingestion to resolution — AP2L automates and streamlines every step."
      steps={steps}
      themeColors={itSupportTheme}
    />
  );
}