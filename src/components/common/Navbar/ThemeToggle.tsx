"use client";

import * as React from "react";
import SunIcon from "@/components/ui/sun-icon";
import MoonIcon from "@/components/ui/moon-icon";
import { useTheme } from "@/src/components/theme-provider";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/50 text-slate-700 shadow-sm backdrop-blur-md transition-colors hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200 dark:hover:bg-slate-800"
      aria-label="Toggle theme"
    >
      <SunIcon size={20} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon size={20} className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </motion.button>
  );
}
