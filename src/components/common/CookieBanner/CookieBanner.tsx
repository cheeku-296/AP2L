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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="fixed bottom-0 left-0 z-[100] w-full p-4 sm:p-6"
        >
          <div className="mx-auto flex max-w-4xl flex-col items-start gap-4 rounded-2xl border border-slate-900/10 bg-white/95 p-6 shadow-2xl backdrop-blur-md dark:border-white/10 dark:bg-slate-950/95 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1 pr-4">
              <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white font-urbanist">
                We value your privacy
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-manrope">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies. Read our{" "}
                <Link href="/cookie-policy" className="text-violet-600 underline hover:text-violet-500 dark:text-violet-400">
                  Cookie Policy
                </Link>{" "}
                for more information.
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
              <button
                onClick={handleDecline}
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700 shadow-lg shadow-violet-600/20"
              >
                Accept All
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="absolute right-4 top-4 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 sm:hidden"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
