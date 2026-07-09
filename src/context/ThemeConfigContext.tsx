"use client";

import { createContext, useContext, useState } from "react";

type ComponentThemes = Record<string, "light" | "dark" | "global">;

interface ThemeConfigContextType {
  componentThemes: ComponentThemes;
  setComponentTheme: (id: string, theme: "light" | "dark" | "global") => void;
  isPanelOpen: boolean;
  setIsPanelOpen: (isOpen: boolean) => void;
}

const ThemeConfigContext = createContext<ThemeConfigContextType | undefined>(undefined);

const defaultThemes: ComponentThemes = {
  // Landing Page
  hero: "dark",
  partners: "light",
  platform: "light",
  solutions: "light",
  features: "light",
  roi: "dark",
  testimonials: "light",
  cta: "light",

  // Blog Page
  blog_hero: "dark",
  featured_blogs: "light",
  blog_grid: "light",
  load_more: "light",

  // Contact Page
  contact_hero: "dark",
  contact_section: "light",
  google_map: "light",
  faq: "light",
  contact_cta: "light",
  // QA Page
  qa_challenges: "light",
  qa_capabilities: "light",
  qa_workflow: "dark",
  qa_benefits: "light",
  qa_metrics: "light",
  qa_industries: "light",
  qa_technologies: "light",
  qa_faq: "light",

  // DevOps Page
  devops_challenges: "light",
  devops_capabilities: "light",
  devops_workflow: "dark",
  devops_metrics: "light",
  devops_technologies: "light",

  // IT Support Page
  it_challenges: "light",
  it_capabilities: "light",
  it_workflow: "light",
  it_metrics: "light",
  it_technologies: "light",

  // Security Compliance Page
  security_challenges: "light",
  security_capabilities: "light",
  security_workflow: "dark",
  security_metrics: "light",
  security_technologies: "light",
};

export function ThemeConfigProvider({ children }: { children: React.ReactNode }) {
  const [componentThemes, setComponentThemes] = useState<ComponentThemes>(defaultThemes);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const setComponentTheme = (id: string, theme: "light" | "dark" | "global") => {
    setComponentThemes((prev) => ({ ...prev, [id]: theme }));
  };

  return (
    <ThemeConfigContext.Provider
      value={{ componentThemes, setComponentTheme, isPanelOpen, setIsPanelOpen }}
    >
      {children}
    </ThemeConfigContext.Provider>
  );
}

export function useThemeConfig() {
  const context = useContext(ThemeConfigContext);
  if (context === undefined) {
    throw new Error("useThemeConfig must be used within a ThemeConfigProvider");
  }
  return context;
}
