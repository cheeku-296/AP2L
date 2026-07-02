"use client";

import { useState } from "react";
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
  Building2,
  ArrowRight,
} from "lucide-react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    <section className="relative overflow-hidden bg-white dark:bg-slate-950 py-24">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[150px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">

          {/* LEFT PANEL */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-slate-900/10
              dark:border-slate-800
              bg-white/40
              dark:bg-slate-900/40
              backdrop-blur-2xl
              p-8
              lg:p-10
            "
          >

            {/* Glow */}

            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-[80px]" />

            <div className="relative z-10">

              {/* Badge */}

              <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 dark:border-slate-700 bg-white/50 dark:bg-slate-800/40 px-4 py-2 backdrop-blur-xl">

                <Building2 className="h-4 w-4 text-violet-500" />

                <span className="font-manrope text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">
                  Contact Information
                </span>

              </div>

              {/* Heading */}

              <h2 className="mt-8 text-4xl font-medium tracking-tight text-slate-900 dark:text-white leading-tight">
                We're Here To Help
              </h2>

              {/* Description */}

              <p className="mt-5 font-manrope text-[16px] leading-8 text-slate-600 dark:text-slate-400">
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
                        bg-white/50
                        dark:bg-slate-800/50
                        backdrop-blur-xl
                      ">
                        <Icon
                          className="h-5 w-5 text-violet-500"
                        />
                      </div>

                      <div>

                        <p className="
                          text-[11px]
                          uppercase
                          tracking-[0.18em]
                          font-bold
                          text-slate-500
                          dark:text-slate-400
                          font-manrope
                        ">
                          {item.title}
                        </p>

                        <p className="
                          mt-1
                          whitespace-pre-line
                          text-[15px]
                          leading-7
                          text-slate-900
                          dark:text-white
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
                        bg-white/50
                        dark:bg-slate-800/40
                        p-4
                        backdrop-blur-xl
                      "
                    >

                      <div className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-violet-500/10
                      ">

                        <Icon className="h-5 w-5 text-violet-500" />

                      </div>

                      <div>

                        <h4 className="
                          font-semibold
                          text-slate-900
                          dark:text-white
                        ">
                          {item.title}
                        </h4>

                        <p className="
                          mt-1
                          text-sm
                          text-slate-600
                          dark:text-slate-400
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
              rounded-[32px]
              border
              border-slate-900/10
              dark:border-slate-800
              bg-white/50
              dark:bg-slate-900/40
              backdrop-blur-2xl
              p-8
              lg:p-10
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

                  <p className="mt-1 text-slate-600 dark:text-slate-400">
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
                        <label className="mb-2 block font-manrope text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
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
                          placeholder="John"
                          className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-900/10
                            dark:border-slate-700
                            bg-white/70
                            dark:bg-slate-900/40
                            px-5
                            py-4
                            text-sm
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-slate-400
                            focus:border-violet-500
                            focus:ring-4
                            focus:ring-violet-500/10
                          "
                        />
                      </div>

                      {/* Last Name */}

                      <div>
                        <label className="mb-2 block font-manrope text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
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
                          placeholder="Doe"
                          className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-900/10
                            dark:border-slate-700
                            bg-white/70
                            dark:bg-slate-900/40
                            px-5
                            py-4
                            text-sm
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-slate-400
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

                        <label className="mb-2 block font-manrope text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
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
                            bg-white/70
                            dark:bg-slate-900/40
                            px-5
                            py-4
                            text-sm
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-slate-400
                            focus:border-violet-500
                            focus:ring-4
                            focus:ring-violet-500/10
                          "
                        />

                      </div>

                      {/* Designation */}

                      <div>

                        <label className="mb-2 block font-manrope text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
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
                          placeholder="Software Architect"
                          className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-900/10
                            dark:border-slate-700
                            bg-white/70
                            dark:bg-slate-900/40
                            px-5
                            py-4
                            text-sm
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-slate-400
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

                        <label className="mb-2 block font-manrope text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
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
                          placeholder="john@company.com"
                          className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-900/10
                            dark:border-slate-700
                            bg-white/70
                            dark:bg-slate-900/40
                            px-5
                            py-4
                            text-sm
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-slate-400
                            focus:border-violet-500
                            focus:ring-4
                            focus:ring-violet-500/10
                          "
                        />

                      </div>

                      {/* Phone */}

                      <div>

                        <label className="mb-2 block font-manrope text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
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
                            bg-white/70
                            dark:bg-slate-900/40
                            px-5
                            py-4
                            text-sm
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-slate-400
                            focus:border-violet-500
                            focus:ring-4
                            focus:ring-violet-500/10
                          "
                        />

                      </div>

                    </div>

                    {/* Product */}

                    <div>

                      <label className="mb-2 block font-manrope text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                        Interested Product
                      </label>

                      <select
                        required
                        value={formData.product}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            product: e.target.value,
                          })
                        }
                        className="
                          w-full
                          rounded-2xl
                          border
                          border-slate-900/10
                          dark:border-slate-700
                          bg-white/70
                          dark:bg-slate-900/40
                          px-5
                          py-4
                          text-sm
                          outline-none
                          transition-all
                          duration-300
                          focus:border-violet-500
                          focus:ring-4
                          focus:ring-violet-500/10
                        "
                      >
                        <option value="">
                          Select a Product
                        </option>

                        {products.map((product) => (
                          <option
                            key={product}
                            value={product}
                          >
                            {product}
                          </option>
                        ))}

                      </select>

                    </div>

                    {/* Message */}

                    <div>

                      <label className="mb-2 block font-manrope text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
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
                          bg-white/70
                          dark:bg-slate-900/40
                          px-5
                          py-4
                          text-sm
                          outline-none
                          transition-all
                          duration-300
                          placeholder:text-slate-400
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
                        bg-gradient-to-r
                        from-violet-600
                        to-fuchsia-600
                        px-7
                        py-4
                        text-sm
                        font-semibold
                        text-white
                        shadow-lg
                        shadow-violet-500/25
                        transition-all
                        duration-300
                        hover:scale-[1.01]
                        hover:shadow-xl
                        hover:shadow-fuchsia-500/30
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