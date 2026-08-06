"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MailIcon from "@/components/ui/mail-icon";
import ArrowRightIcon from "@/components/ui/arrow-right-icon";
import CheckIcon from "@/components/ui/check-icon";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const DISALLOWED_FREE_DOMAINS = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "icloud.com",
    "aol.com",
    "live.com",
    "mail.com",
    "proton.me",
    "protonmail.com",
    "yandex.com",
    "gmx.com",
    "zoho.com",
  ];

  const validateBusinessEmail = (val: string) => {
    const trimmed = val.trim();
    if (!trimmed) return "Business email is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) return "Please enter a valid email address.";

    const domain = trimmed.split("@")[1]?.toLowerCase();
    if (domain && DISALLOWED_FREE_DOMAINS.includes(domain)) {
      return "Please enter a valid business email (personal domains like Gmail/Yahoo are not allowed).";
    }
    return null;
  };

  const handleEmailChange = (val: string) => {
    setEmail(val);
    const err = validateBusinessEmail(val);
    setError(err);
  };

  const handleEmailBlur = () => {
    const err = validateBusinessEmail(email);
    setError(err);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const emailErr = validateBusinessEmail(email);
    if (emailErr) {
      setError(emailErr);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to subscribe. Please try again.");
      }

      setIsSubscribed(true);
    } catch (err: unknown) {
      console.error("Subscription error:", err);
      setError(err instanceof Error ? err.message : "Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleReset() {
    setEmail("");
    setError(null);
    setIsSubscribed(false);
  }

  return (
    <section className="relative overflow-hidden bg-white py-12 dark:bg-slate-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-0 h-[380px] w-[380px] rounded-full bg-violet-500/10 blur-[140px]" />
        <div className="absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-slate-200
            bg-white/60
            p-8
            shadow-xl
            backdrop-blur-2xl
            dark:border-slate-800
            dark:bg-slate-900/40
            md:p-14
          "
        >
          <div className="absolute -left-12 top-0 h-44 w-44 rounded-full bg-violet-500/10 blur-[90px]" />
          <div className="absolute -right-12 bottom-0 h-44 w-44 rounded-full bg-cyan-500/10 blur-[90px]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl">
                Never Miss an Insight
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                Receive the latest articles, technology trends,
                enterprise insights, AI innovations, cybersecurity
                updates, and product announcements directly in your inbox.
              </p>
            </div>

            <div className="w-full max-w-xl">
              <AnimatePresence mode="wait">
                {!isSubscribed ? (
                  <motion.form
                    key="subscribe-form"
                    noValidate
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                  >
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <div className="relative flex-1">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                          <MailIcon size={20} />
                        </div>

                        <input
                          type="email"
                          aria-label="Email Address"
                          placeholder="Enter your business email"
                          value={email}
                          onChange={(e) => handleEmailChange(e.target.value)}
                          onBlur={handleEmailBlur}
                          className={`
                            w-full
                            rounded-full
                            border
                            ${error ? "border-red-500 dark:border-red-500 focus:border-red-500" : "border-slate-200 focus:border-violet-500 dark:border-slate-700"}
                            bg-white
                            py-4
                            pl-14
                            pr-5
                            text-sm
                            outline-none
                            transition
                            dark:bg-slate-900
                            dark:text-white
                          `}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="
                          group
                          inline-flex
                          items-center
                          justify-center
                          rounded-full
                          bg-slate-900
                          px-8
                          py-4
                          text-sm
                          font-semibold
                          text-white
                          transition-all
                          duration-300
                          hover:scale-105
                          disabled:opacity-70
                          disabled:cursor-not-allowed
                          dark:bg-white
                          dark:text-slate-900
                        "
                      >
                        {isSubmitting ? (
                          <>
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                              className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white dark:border-slate-900/40 dark:border-t-slate-900"
                            />
                            <span className="ml-2">Subscribing...</span>
                          </>
                        ) : (
                          <>
                            Subscribe
                            <ArrowRightIcon size={20} className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </div>

                    {error && (
                      <p className="mt-2.5 pl-4 text-xs font-medium text-red-500">
                        {error}
                      </p>
                    )}

                    <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                      No spam. Only high-value enterprise technology insights.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="subscribe-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-start rounded-3xl border border-violet-500/20 bg-violet-50/50 p-6 dark:border-violet-500/30 dark:bg-violet-950/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-white">
                        <CheckIcon size={20} />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                          Subscribed Successfully!
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          We&apos;ve added <span className="font-medium text-violet-600 dark:text-violet-400">{email}</span> to our newsletter list.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleReset}
                      className="mt-4 text-xs font-medium text-violet-600 dark:text-violet-400 hover:underline"
                    >
                      Subscribe another email
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}