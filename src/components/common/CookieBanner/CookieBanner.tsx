"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 z-[100] w-full border-t border-slate-900/10 bg-white/95 shadow-[0_-4px_24px_rgba(0,0,0,0.05)] backdrop-blur-md dark:border-slate-800 dark:bg-[#090a1f]/95"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-3.5 sm:flex-row sm:px-6 lg:px-8">
            <div className="flex-1 text-center sm:text-left">
              <p className="text-[13px] leading-relaxed text-slate-600 dark:text-slate-300 font-manrope">
                We use cookies to enhance your browsing experience and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies. Read our{" "}
                <Link href="/cookie-policy" className="text-violet-600 underline hover:text-violet-500 dark:text-violet-400 font-semibold">
                  Cookie Policy
                </Link>.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <button
                onClick={handleDecline}
                className="rounded-full px-4 py-2 text-[13px] font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="rounded-full bg-violet-600 px-5 py-2 text-[13px] font-semibold text-white transition hover:bg-violet-500 shadow-md shadow-violet-600/20"
              >
                Accept All
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 sm:hidden ml-2"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
