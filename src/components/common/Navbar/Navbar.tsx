"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight, ChevronRight, ChevronDown, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { NavigationItem } from "./types";
import Image from "next/image";
import { navigation } from "./navigation";

// ================= Logo.tsx =================

interface LogoProps {
  priority?: boolean;
  scrolled?: boolean;
}

function Logo({
  priority = true,
  scrolled,
}: LogoProps) {
  return (
    <Link
      href="/"
      className="group relative flex items-center gap-2"
      aria-label="AP2L Home"
    >
      {/* Logo */}
      <motion.div
        whileHover={{
          scale: 1.06,
          rotate: 4,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 18,
        }}
        className="relative"
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-violet-500/40 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-slate-900/10 bg-slate-900/5 backdrop-blur-xl">
          <Image
            src="/logo/logo.png"
            alt="AP2L Logo"
            width={28}
            height={28}
            priority={priority}
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Brand */}
      <div className="flex flex-col leading-none">
        <motion.span
          whileHover={{
            x: 2,
          }}
          className={`text-lg font-bold tracking-tight ${scrolled ? "text-black" : "text-black dark:text-white"}`}
        >
          AP2L
        </motion.span>
        <span className={`mt-[2px] text-[8px] font-medium uppercase tracking-[0.2em] ${scrolled ? "text-slate-600" : "text-slate-600 dark:text-slate-300"}`}>
          ApMoSys Products
        </span>
      </div>
    </Link>
  );
}

// ================= CTAButton.tsx =================


function CTAButton({ scrolled }: { scrolled?: boolean }) {
  return (
    <Link href="/contact">
      <motion.div
        whileHover={{
          scale: 1.03,
          y: -1,
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 22,
        }}
        className="group relative overflow-hidden rounded-full"
      >
        {/* Button */}
        <div className={`relative flex h-9 items-center justify-center rounded-full px-5 text-[13px] font-semibold transition-colors duration-300 ${scrolled ? "bg-slate-200 text-slate-800 group-hover:bg-slate-300" : "bg-slate-200 dark:bg-white text-slate-800 dark:text-slate-900 group-hover:bg-slate-300 dark:group-hover:bg-slate-200"}`}>
          <span className="relative z-10">
            Contact
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

// ================= NavItem.tsx =================

interface NavItemProps {
  title: string;
  href: string;
  scrolled?: boolean;
}

function NavItem({
  title,
  href,
  scrolled,
}: NavItemProps) {
  const pathname = usePathname();

  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className="group relative flex h-12 items-center"
    >
      <span
        className={`
          relative
          font-[family-name:var(--font-manrope)]
          text-[11px]
          font-bold
          uppercase
          tracking-[0.2em]
          transition-all
          duration-300
          ${
            isActive ? (scrolled ? "text-slate-900" : "text-slate-900 dark:text-white") : (scrolled ? "text-slate-700 group-hover:text-slate-900" : "text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white")
          }
        `}
      >
        {title}
      </span>

      {/* Animated Underline */}
      <motion.span
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: isActive ? 1 : 0,
        }}
        whileHover={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        style={{
          transformOrigin: "left",
        }}
        className="
          absolute
          bottom-2
          left-0
          h-[2px]
          w-full
          rounded-full
          bg-gradient-to-r
          from-violet-500
          via-fuchsia-500
          to-purple-500
        "
      />

      {/* Glow */}
      <motion.span
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: 1,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          absolute
          -bottom-2
          left-1/2
          h-5
          w-5
          -translate-x-1/2
          rounded-full
          bg-violet-500/30
          blur-lg
          pointer-events-none
        "
      />
    </Link>
  );
}

// ================= Dropdown.tsx =================


interface DropdownProps {
  title: string;
  items: NavigationItem[];
  scrolled?: boolean;
}

function Dropdown({
  title,
  items,
  scrolled,
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}

      <button className={`group flex h-12 items-center gap-1 font-[family-name:var(--font-manrope)] text-[11px] font-bold uppercase tracking-[0.2em] transition duration-300 ${scrolled ? "text-slate-700 hover:text-slate-900" : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"}`}>
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
            className="absolute left-1/2 top-[68px] z-50 w-[540px] -translate-x-1/2"
          >
            <div
              className="
                overflow-hidden
                rounded-3xl
                border
                border-slate-900/10
                  dark:border-slate-800
                  bg-white/40
                  dark:bg-slate-900/40
                  backdrop-blur-2xl
                shadow-[0_20px_80px_rgba(0,0,0,0.1)]
              "
            >
              {/* Top Glow */}

              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

              <div className="grid grid-cols-2 gap-2 p-3">
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
                        p-3
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-violet-50/80
                        dark:hover:bg-violet-900/20
                        hover:shadow-sm
                        hover:shadow-violet-500/10
                      "
                    >
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white transition-colors group-hover/item:text-violet-600 dark:group-hover/item:text-violet-400">
                          {item.title}
                        </h4>

                        {item.description && (
                          <p className="mt-1 text-[13px] leading-relaxed text-slate-600 dark:text-slate-400">
                            {item.description}
                          </p>
                        )}
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="
                          mt-1
                          text-slate-500
                          opacity-0
                          transition-all
                          duration-300
                          group-hover/item:translate-x-1
                          group-hover/item:-translate-y-1
                          group-hover/item:opacity-100
                          group-hover/item:text-violet-600
                          dark:group-hover/item:text-violet-400
                        "
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ================= DesktopMenu.tsx =================

function DesktopMenu({ scrolled }: { scrolled?: boolean }) {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navigation.map((item) => {
        // Dropdown Menu
        if (item.children && item.children.length > 0) {
          return (
            <Dropdown
              key={item.title}
              title={item.title}
              items={item.children}
              scrolled={scrolled}
            />
          );
        }

        // Normal Navigation Link
        return (
          <NavItem
            key={item.title}
            title={item.title}
            href={item.href!}
            scrolled={scrolled}
          />
        );
      })}
    </nav>
  );
}

// ================= MobileMenu.tsx =================
function MobileMenu({ scrolled }: { scrolled?: boolean }) {
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
        className="rounded-xl border border-slate-900/10 bg-slate-900/5 p-2 text-slate-900 backdrop-blur lg:hidden"
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
              className="fixed right-0 top-0 z-50 flex h-screen w-[340px] flex-col border-l border-slate-900/10 bg-white/95 backdrop-blur-3xl"
            >
              {/* Header */}

              <div className="flex items-center justify-between border-b border-slate-900/10 p-6">

                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Navigation
                  </h2>

                  <p className="mt-1 text-sm text-slate-600">
                    Explore AP2L
                  </p>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 transition hover:bg-slate-900/5"
                >
                  <X
                    size={22}
                    className="text-slate-900"
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
                            : "text-slate-900 hover:bg-slate-900/5"
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
                        className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-slate-900 transition hover:bg-slate-900/5"
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
                                    className="block rounded-xl p-3 transition hover:bg-slate-900/5"
                                  >
                                    <h4 className="text-sm font-medium text-slate-900">
                                      {child.title}
                                    </h4>

                                    {child.description && (
                                      <p className="mt-1 text-xs leading-5 text-slate-600">
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

              <div className="border-t border-slate-900/10 p-6">

                <Link
                  href="/book-demo"
                  onClick={() => setOpen(false)}
                  className="group flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 font-semibold text-slate-900 transition hover:scale-[1.02]"
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

// ================= Navbar.tsx =================




export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      
      // If we're scrolling down (current > last) and passed a certain point, hide it
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -24,
      }}
      animate={{
        opacity: hidden ? 0 : 1,
        y: hidden ? -100 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`relative flex h-17 w-full items-center justify-between px-2 lg:px-4 transition-all duration-500 ${
          scrolled
            ? `bg-white/90 dark:bg-white backdrop-blur-xl`
            : `bg-transparent`
        }`}
      >
          {/* Background Glow */}
          <div
            className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-violet-600/15 blur-3xl" />
            <div className="absolute bottom-0 right-20 h-28 w-28 rounded-full bg-fuchsia-500/10 blur-3xl" />
          </div>

          {/* Left */}
          <div className="relative z-10 flex items-center">
            <Logo scrolled={scrolled} />
          </div>

          {/* Center */}
          <div className="relative z-10 hidden lg:flex">
            <DesktopMenu scrolled={scrolled} />
          </div>

          {/* Right */}
          <div className="relative z-10 flex items-center gap-3">

            <div className="hidden lg:flex lg:items-center lg:gap-3">
              <CTAButton scrolled={scrolled} />
            </div>

            <MobileMenu scrolled={scrolled} />
          </div>
        </div>
    </motion.header>
  );
}