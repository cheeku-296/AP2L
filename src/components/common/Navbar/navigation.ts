import { NavigationSection } from "./types";

export const navigation: NavigationSection[] = [
  {
    title: "Platform",
    children: [
      {
        title: "ShieldVUE",
        description: "Software Supply Chain Security & SBOM Management.",
        href: "/products/shieldvue",
      },
      {
        title: "NETRAA AI-OPS",
        description: "Explainable AI for Intelligent Observability.",
        href: "/products/netraa",
      },
      {
        title: "cliQTest",
        description: "AI-Powered Test Automation Platform.",
        href: "/products/cliqtest",
      },
      {
        title: "JUPITER",
        description: "AI-Powered IT Service Desk & Ticket Management.",
        href: "/products/jupiter",
      },
      {
        title: "FINXPLORE",
        description: "AI-Powered Risk & Fraud Detection.",
        href: "/products/finxplore",
      },
      {
        title: "SWIKRUTI",
        description: "Consent Management & DPDPA Compliance.",
        href: "/products/swikruti",
      },
      {
        title: "SARANSH",
        description: "AI-Enabled Service Virtualization.",
        href: "/products/saransh",
      },
    ],
  },

  {
    title: "Solutions",
    children: [
      {
        title: "For QA Teams",
        description: "Accelerate testing and improve requirement coverage.",
        href: "/solutions/qa-teams",
      },
      {
        title: "For DevOps",
        description: "Integrate security and observability into CI/CD pipelines.",
        href: "/solutions/devops",
      },
      {
        title: "For Security & Compliance",
        description: "Ensure regulatory readiness and vulnerability management.",
        href: "/solutions/security-compliance",
      },
      {
        title: "For IT Support",
        description: "Automate incident management and service delivery.",
        href: "/solutions/it-support",
      },
    ],
  },

  {
    title: "Resources",
    children: [
      {
        title: "Documentation",
        description: "Technical guides, API references, and product manuals.",
        href: "/resources/documentation",
      },
      {
        title: "Case Studies",
        description: "Real-world customer success stories and business outcomes.",
        href: "/resources/case-studies",
      },
      {
        title: "Blog",
        description: "Insights, updates, and technology trends from our experts.",
        href: "/resources/blog",
      },
    ],
  },

  {
    title: "Pricing",
    href: "/pricing",
  },

  {
    title: "Company",
    href: "/company",
  },

  {
    title: "Contact",
    href: "/contact",
  },
];