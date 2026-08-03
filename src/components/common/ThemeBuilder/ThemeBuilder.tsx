"use client";

import { motion, AnimatePresence } from "framer-motion";
import GearIcon from "@/components/ui/gear-icon";
import XIcon from "@/components/ui/x-icon";
import { useThemeConfig } from "@/src/context/ThemeConfigContext";

interface ThemeBuilderProps {
  components: { id: string; label: string }[];
}

export default function ThemeBuilder({ components }: ThemeBuilderProps) {
  const { componentThemes, setComponentTheme, isPanelOpen, setIsPanelOpen } = useThemeConfig();

  const toggleTheme = (id: string, theme: "light" | "dark" | "global") => {
    setComponentTheme(id, theme);
  };

  return (
    <div className="hidden fixed right-4 top-1/2 -translate-y-1/2 z-[100] flex items-center">
      <AnimatePresence>
        {isPanelOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            className="mr-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl p-5 w-80 max-h-[85vh] overflow-y-auto"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="font-urbanist text-lg font-bold text-slate-900 dark:text-white">Theme Builder</h3>
                <p className="font-manrope text-xs text-slate-500">Customize per component</p>
              </div>
              <button
                onClick={() => setIsPanelOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1"
              >
                <XIcon size={18} />
              </button>
            </div>

            <div className="space-y-4">
              {components.map((comp) => {
                const currentTheme = componentThemes[comp.id] || "global";
                return (
                  <div key={comp.id} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800/50">
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 font-urbanist">{comp.label}</span>
                    <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1 gap-1">
                      <button 
                        onClick={() => toggleTheme(comp.id, "light")}
                        className={`px-2 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all ${currentTheme === 'light' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-700'}`}
                      >
                        L
                      </button>
                      <button 
                        onClick={() => toggleTheme(comp.id, "global")}
                        className={`px-2 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all ${currentTheme === 'global' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' : 'text-slate-400 hover:text-slate-700'}`}
                      >
                        Auto
                      </button>
                      <button 
                        onClick={() => toggleTheme(comp.id, "dark")}
                        className={`px-2 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all ${currentTheme === 'dark' ? 'bg-slate-900 shadow-sm text-white' : 'text-slate-400 hover:text-slate-700'}`}
                      >
                        D
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-[0_0_40px_rgba(109,40,217,0.4)] hover:bg-violet-700 transition-all hover:scale-105 active:scale-95"
        title="Component Theme Configurator"
      >
        <GearIcon size={24} className={isPanelOpen ? "animate-[spin_4s_linear_infinite]" : ""} />
      </button>
    </div>
  );
}
