"use client";

import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { NavigationItem } from "./types";

interface DropdownProps {
  title: string;
  items: NavigationItem[];
}

export default function Dropdown({
  title,
  items,
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}

      <button className="group flex h-12 items-center gap-1 text-[15px] font-medium text-zinc-300 transition duration-300 hover:text-white">
        <span>{title}</span>

        <ChevronDown
          size={16}
          className={`transition-all duration-300 ${
            open ? "rotate-180 text-violet-400" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 16,
            }}
            transition={{
              duration: 0.22,
            }}
            className="absolute left-1/2 top-[68px] z-50 w-[420px] -translate-x-1/2"
          >
            <div
              className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-[#0E0E18]/95
                backdrop-blur-3xl
                shadow-[0_20px_80px_rgba(0,0,0,0.45)]
              "
            >
              {/* Top Glow */}

              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

              <div className="p-3">
                {items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: -8,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="
                        group/item
                        flex
                        items-start
                        justify-between
                        rounded-2xl
                        p-4
                        transition-all
                        duration-300
                        hover:bg-white/5
                      "
                    >
                      <div>
                        <h4 className="font-semibold text-white transition-colors group-hover/item:text-violet-300">
                          {item.title}
                        </h4>

                        {item.description && (
                          <p className="mt-2 text-sm leading-6 text-zinc-400">
                            {item.description}
                          </p>
                        )}
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="
                          mt-1
                          text-zinc-500
                          opacity-0
                          transition-all
                          duration-300
                          group-hover/item:translate-x-1
                          group-hover/item:-translate-y-1
                          group-hover/item:opacity-100
                          group-hover/item:text-violet-400
                        "
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}

              <div className="border-t border-white/5 bg-white/[0.02] px-6 py-4">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Explore AP2L Solutions
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}