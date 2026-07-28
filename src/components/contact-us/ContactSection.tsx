"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  Headphones,
  Send,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Check,
} from "lucide-react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    designation: "",
    email: "",
    phone: "",
    product: "",
    message: "",
    consent: false,
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Corporate Office",
      value: "ApMoSys Technologies Pvt. Ltd.\nMahape, Navi Mumbai",
    },
    {
      icon: Mail,
      title: "Sales",
      value: "sales@ap2l.ai",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 89768 19122",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Monday - Friday\n09:00 AM - 06:00 PM",
    },
  ];

  const products = [
    "ShieldVUE",
    "NETRAA AI-OPS",
    "JUPITER",
    "FINXPLORE",
    "SARANSH",
    "cliQTest",
    "SWIKRUTI",
    "General Enquiry",
  ];

  const highlights = [
    {
      icon: Clock,
      title: "Quick Response",
      description: "Usually within 24 hours",
    },
    {
      icon: Shield,
      title: "Secure Communication",
      description: "Enterprise-grade privacy",
    },
    {
      icon: Headphones,
      title: "Enterprise Experts",
      description: "Talk directly with specialists",
    },
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated network round-trip — replace with your real submission call
    // (API route, server action, or third-party form handler).
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  }

  function resetForm() {
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      designation: "",
      email: "",
      phone: "",
      product: "",
      message: "",
      consent: false,
    });
    setIsSubmitted(false);
  }

  return (
    <section id="contact-form" className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 py-16">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[150px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">

          {/* LEFT PANEL */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-slate-900/10
              dark:border-slate-800
              bg-slate-800
              dark:bg-slate-900
              p-6
              lg:p-8
            "
          >

            {/* Glow */}

            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-[80px]" />

            <div className="relative z-10">

              {/* Heading */}

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white leading-tight">
                We&apos;re Here To Help
              </h2>

              {/* Description */}

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Connect with our experts to explore AI-powered enterprise
                software, cybersecurity, cloud engineering, intelligent
                automation and digital transformation solutions tailored to
                your business.
              </p>

              {/* Contact Details */}

              <div className="mt-10 space-y-6">

                {contactInfo.map((item) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={item.title}
                      className="flex items-start gap-4"
                    >

                      <div className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-slate-900/10
                        dark:border-slate-700
                        bg-white/10
                        dark:bg-white/5
                      ">
                        <Icon
                          className="h-5 w-5 text-white"
                        />
                      </div>

                      <div>

                        <p className="
                          text-[11px]
                          uppercase
                          tracking-wider
                          font-semibold
                          text-slate-400
                        ">
                          {item.title}
                        </p>

                        <p className="
                          mt-1
                          whitespace-pre-line
                          text-sm
                          leading-relaxed
                          text-white
                          font-medium
                        ">
                          {item.value}
                        </p>

                      </div>

                    </div>

                  );

                })}

              </div>

              {/* Highlights */}

              <div className="mt-12 space-y-4">

                {highlights.map((item) => {

                  const Icon = item.icon;

                  return (

                    <motion.div
                      key={item.title}
                      whileHover={{
                        x: 6,
                      }}
                      className="
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-slate-900/10
                        dark:border-slate-700
                        dark:border-slate-700
                        bg-white/5
                        dark:bg-white/5
                        p-4
                      "
                    >

                      <div className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-white/10
                      ">

                        <Icon className="h-5 w-5 text-white" />

                      </div>

                      <div>

                        <h4 className="
                          font-semibold
                          text-white
                        ">
                          {item.title}
                        </h4>

                        <p className="
                          text-sm
                          text-slate-300
                        ">
                          {item.description}
                        </p>

                      </div>

                    </motion.div>

                  );

                })}

              </div>

            </div>

          </motion.div>

          {/* RIGHT PANEL */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-slate-900/10
              dark:border-slate-800
              bg-white
              dark:bg-slate-900
              p-6
              lg:p-8
            "
          >

            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-violet-500/10 blur-[90px]" />

            <div className="relative z-10">

              <div className="flex items-center gap-4">

                <div className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-violet-500/10
                ">
                  <Mail className="h-6 w-6 text-violet-500" />
                </div>

                <div>

                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    Send Us A Message
                  </h3>

                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Fill in your details and our team will get back to you.
                  </p>

                </div>

              </div>

              <AnimatePresence mode="wait">

                {!isSubmitted ? (

                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="mt-10 space-y-6"
                  >
                    <div className="grid gap-6 md:grid-cols-2">

                      {/* First Name */}

                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          First Name
                        </label>

                        <input
                          required
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              firstName: e.target.value,
                            })
                          }
                          placeholder="Arpit"
                          className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-900/10
                            dark:border-slate-700
                            bg-white
                            dark:bg-slate-800/80
                            px-5
                            py-3
                            text-sm
                            text-slate-900
                            dark:text-white
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-slate-400
                            dark:placeholder:text-slate-500
                            focus:border-violet-500
                            focus:ring-4
                            focus:ring-violet-500/10
                          "
                        />
                      </div>

                      {/* Last Name */}

                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Last Name
                        </label>

                        <input
                          required
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              lastName: e.target.value,
                            })
                          }
                          placeholder="G"
                          className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-900/10
                            dark:border-slate-700
                            bg-white
                            dark:bg-slate-800/80
                            px-5
                            py-3
                            text-sm
                            text-slate-900
                            dark:text-white
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-slate-400
                            dark:placeholder:text-slate-500
                            focus:border-violet-500
                            focus:ring-4
                            focus:ring-violet-500/10
                          "
                        />
                      </div>

                    </div>

                    <div className="grid gap-6 md:grid-cols-2">

                      {/* Company */}

                      <div>

                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Company
                        </label>

                        <input
                          required
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                          placeholder="Your Company"
                          className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-900/10
                            dark:border-slate-700
                            bg-white
                            dark:bg-slate-800/80
                            px-5
                            py-3
                            text-sm
                            text-slate-900
                            dark:text-white
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-slate-400
                            dark:placeholder:text-slate-500
                            focus:border-violet-500
                            focus:ring-4
                            focus:ring-violet-500/10
                          "
                        />

                      </div>

                      {/* Designation */}

                      <div>

                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Designation
                        </label>

                        <input
                          required
                          value={formData.designation}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              designation: e.target.value,
                            })
                          }
                          placeholder="Software Developer"
                          className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-900/10
                            dark:border-slate-700
                            bg-white
                            dark:bg-slate-800/80
                            px-5
                            py-3
                            text-sm
                            text-slate-900
                            dark:text-white
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-slate-400
                            dark:placeholder:text-slate-500
                            focus:border-violet-500
                            focus:ring-4
                            focus:ring-violet-500/10
                          "
                        />

                      </div>

                    </div>

                    <div className="grid gap-6 md:grid-cols-2">

                      {/* Email */}

                      <div>

                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Business Email
                        </label>

                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                          placeholder="arpit@apmosys.com"
                          className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-900/10
                            dark:border-slate-700
                            bg-white
                            dark:bg-slate-800/80
                            px-5
                            py-3
                            text-sm
                            text-slate-900
                            dark:text-white
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-slate-400
                            dark:placeholder:text-slate-500
                            focus:border-violet-500
                            focus:ring-4
                            focus:ring-violet-500/10
                          "
                        />

                      </div>

                      {/* Phone */}

                      <div>

                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Phone Number
                        </label>

                        <input
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value,
                            })
                          }
                          placeholder="+91 98765 43210"
                          className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-900/10
                            dark:border-slate-700
                            bg-white
                            dark:bg-slate-800/80
                            px-5
                            py-3
                            text-sm
                            text-slate-900
                            dark:text-white
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-slate-400
                            dark:placeholder:text-slate-500
                            focus:border-violet-500
                            focus:ring-4
                            focus:ring-violet-500/10
                          "
                        />

                      </div>

                    </div>

                    {/* Product */}

                    <div>

                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Interested Product
                      </label>

                      <div className="relative" ref={dropdownRef}>
                        {/* Hidden native select for HTML5 form validation */}
                        <select
                          required
                          value={formData.product}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              product: e.target.value,
                            })
                          }
                          className="sr-only"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option value="">Select a Product</option>
                          {products.map((product) => (
                            <option key={product} value={product}>
                              {product}
                            </option>
                          ))}
                        </select>

                        {/* Custom Dropdown Trigger */}
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen((prev) => !prev)}
                          className="
                            w-full
                            flex
                            items-center
                            justify-between
                            rounded-2xl
                            border
                            border-slate-900/10
                            dark:border-slate-700
                            bg-white
                            dark:bg-slate-800/80
                            px-5
                            py-3
                            text-sm
                            text-left
                            outline-none
                            transition-all
                            duration-300
                            focus:border-violet-500
                            focus:ring-4
                            focus:ring-violet-500/10
                            cursor-pointer
                          "
                        >
                          <span
                            className={
                              formData.product
                                ? "text-slate-900 dark:text-white font-medium"
                                : "text-slate-400 dark:text-slate-500"
                            }
                          >
                            {formData.product || "Select a Product"}
                          </span>
                          <ChevronDown
                            className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${
                              isDropdownOpen ? "rotate-180 text-violet-500" : ""
                            }`}
                          />
                        </button>

                        {/* Custom Dropdown Menu */}
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -8, scale: 0.98 }}
                              animate={{ opacity: 1, y: 4, scale: 1 }}
                              exit={{ opacity: 0, y: -8, scale: 0.98 }}
                              transition={{ duration: 0.15, ease: "easeOut" }}
                              className="
                                absolute
                                left-0
                                right-0
                                z-50
                                mt-1
                                max-h-60
                                overflow-y-auto
                                rounded-2xl
                                border
                                border-slate-200
                                dark:border-slate-700
                                bg-white
                                dark:bg-slate-900
                                p-2
                                shadow-xl
                                backdrop-blur-xl
                              "
                            >
                              {products.map((product) => {
                                const isSelected = formData.product === product;
                                return (
                                  <button
                                    key={product}
                                    type="button"
                                    onClick={() => {
                                      setFormData({ ...formData, product });
                                      setIsDropdownOpen(false);
                                    }}
                                    className={`
                                      flex
                                      w-full
                                      items-center
                                      justify-between
                                      rounded-xl
                                      px-4
                                      py-2.5
                                      text-sm
                                      transition-colors
                                      duration-150
                                      cursor-pointer
                                      ${
                                        isSelected
                                          ? "bg-violet-50 dark:bg-violet-950/60 font-semibold text-violet-600 dark:text-violet-400"
                                          : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                                      }
                                    `}
                                  >
                                    <span>{product}</span>
                                    {isSelected && (
                                      <Check className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                                    )}
                                  </button>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                    </div>

                    {/* Message */}

                    <div>

                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Tell us about your requirements
                      </label>

                      <textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        placeholder="Describe your project or business requirement..."
                        className="
                          w-full
                          resize-none
                          rounded-3xl
                          border
                          border-slate-900/10
                          dark:border-slate-700
                          bg-white
                          dark:bg-slate-800/80
                          px-5
                          py-3
                          text-sm
                          text-slate-900
                          dark:text-white
                          outline-none
                          transition-all
                          duration-300
                          placeholder:text-slate-400
                          dark:placeholder:text-slate-500
                          focus:border-violet-500
                          focus:ring-4
                          focus:ring-violet-500/10
                        "
                      />
                    </div>

                    {/* Consent */}

                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        required
                        checked={formData.consent}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            consent: e.target.checked,
                          })
                        }
                        className="
                          mt-0.5
                          h-4
                          w-4
                          shrink-0
                          rounded
                          border-slate-300
                          text-violet-600
                          focus:ring-violet-500/40
                          dark:border-slate-700
                          dark:bg-slate-900
                        "
                      />
                      <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        I agree to be contacted by AP2L regarding my inquiry
                        and consent to the processing of my data as per the
                        privacy policy.
                      </span>
                    </label>

                    {/* Submit */}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="
                        group
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-slate-800
                        dark:bg-white
                        dark:text-slate-900
                        px-7
                        py-4
                        text-sm
                        font-semibold
                        text-white
                        shadow-lg
                        transition-all
                        duration-300
                        hover:scale-[1.01]
                        hover:shadow-xl
                        active:scale-[0.99]
                        disabled:cursor-not-allowed
                        disabled:opacity-70
                        disabled:hover:scale-100
                        sm:w-auto
                      "
                    >
                      {isSubmitting ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.8,
                              ease: "linear",
                            }}
                            className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>

                  </motion.form>

                ) : (

                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="mt-10 flex min-h-[420px] flex-col items-center justify-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.1,
                        type: "spring",
                        stiffness: 200,
                        damping: 14,
                      }}
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-violet-600
                        to-fuchsia-600
                        text-white
                        shadow-lg
                        shadow-violet-500/30
                      "
                    >
                      <CheckCircle className="h-8 w-8" />
                    </motion.div>

                    <h3 className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">
                      Message Sent
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      Thank you for reaching out. A member of our team will
                      get back to you within 24 hours.
                    </p>

                    <button
                      onClick={resetForm}
                      className="
                        mt-8
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-slate-900/10
                        dark:border-slate-700
                        bg-white/50
                        dark:bg-slate-800/40
                        px-6
                        py-3
                        text-sm
                        font-semibold
                        text-slate-900
                        dark:text-white
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:scale-[1.03]
                        hover:border-violet-500/30
                      "
                    >
                      Send Another Message
                      <ArrowRight className="h-4 w-4" />
                    </button>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}