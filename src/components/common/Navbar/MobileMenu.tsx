"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import { navigation } from "./navigation";

export default function MobileMenu() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setExpanded((prev) =>
      prev === title ? null : title
    );
  };

  return (
    <>
      {/* Hamburger */}

      <button
        onClick={() => setOpen(true)}
        className="rounded-xl border border-white/10 bg-white/5 p-2 text-white backdrop-blur lg:hidden"
      >
        <Menu size={22} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            {/* Drawer */}

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[340px] flex-col border-l border-white/10 bg-[#0B0B14]/95 backdrop-blur-3xl"
            >
              {/* Header */}

              <div className="flex items-center justify-between border-b border-white/10 p-6">

                <div>
                  <h2 className="text-xl font-semibold text-white">
                    Navigation
                  </h2>

                  <p className="mt-1 text-sm text-zinc-400">
                    Explore AP2L
                  </p>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 transition hover:bg-white/5"
                >
                  <X
                    size={22}
                    className="text-white"
                  />
                </button>
              </div>

              {/* Navigation */}

              <div className="flex-1 overflow-y-auto px-5 py-6">

                {navigation.map((item) => {

                  // Simple Nav Link

                  if (!item.children) {
                    const active =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href!);

                    return (
                      <Link
                        key={item.title}
                        href={item.href!}
                        onClick={() => setOpen(false)}
                        className={`mb-2 flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
                          active
                            ? "bg-violet-600/20 text-violet-300"
                            : "text-white hover:bg-white/5"
                        }`}
                      >
                        {item.title}
                      </Link>
                    );
                  }

                  // Dropdown Section

                  return (
                    <div
                      key={item.title}
                      className="mb-2"
                    >
                      <button
                        onClick={() =>
                          toggleSection(item.title)
                        }
                        className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-white transition hover:bg-white/5"
                      >
                        <span>{item.title}</span>

                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            expanded === item.title
                              ? "rotate-180 text-violet-400"
                              : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {expanded === item.title && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.25,
                            }}
                            className="overflow-hidden"
                          >
                            <div className="mt-2 ml-3 space-y-2 border-l border-violet-500/20 pl-4">

                              {item.children.map(
                                (child) => (
                                  <Link
                                    key={child.title}
                                    href={child.href}
                                    onClick={() =>
                                      setOpen(false)
                                    }
                                    className="block rounded-xl p-3 transition hover:bg-white/5"
                                  >
                                    <h4 className="text-sm font-medium text-white">
                                      {child.title}
                                    </h4>

                                    {child.description && (
                                      <p className="mt-1 text-xs leading-5 text-zinc-400">
                                        {
                                          child.description
                                        }
                                      </p>
                                    )}
                                  </Link>
                                )
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Footer */}

              <div className="border-t border-white/10 p-6">

                <Link
                  href="/book-demo"
                  onClick={() => setOpen(false)}
                  className="group flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 font-semibold text-white transition hover:scale-[1.02]"
                >
                  Book Demo

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}