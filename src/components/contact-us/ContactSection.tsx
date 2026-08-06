"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MailIcon from "@/components/ui/mail-icon";
import PhoneIcon from "@/components/ui/phone-icon";
import MapPinIcon from "@/components/ui/map-pin-icon";
import ClockIcon from "@/components/ui/clock-icon";
import ShieldIcon from "@/components/ui/shield-icon";
import RocketIcon from "@/components/ui/rocket-icon";
import CheckIcon from "@/components/ui/check-icon";
import ArrowRightIcon from "@/components/ui/arrow-right-icon";
import ChevronDownIcon from "@/components/ui/chevron-down-icon";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
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
      icon: MapPinIcon,
      title: "Corporate Office",
      value: "ApMoSys Technologies Pvt. Ltd.\nMahape, Navi Mumbai",
    },
    {
      icon: MailIcon,
      title: "Sales",
      value: "sales@ap2l.ai",
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      value: "+91 89768 19122",
    },
    {
      icon: ClockIcon,
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
      icon: ClockIcon,
      title: "Quick Response",
      description: "Usually within 24 hours",
    },
    {
      icon: ShieldIcon,
      title: "Secure Communication",
      description: "Enterprise-grade privacy",
    },
    {
      icon: RocketIcon,
      title: "Enterprise Experts",
      description: "Talk directly with specialists",
    },
  ];

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

  const validateBusinessEmail = (email: string) => {
    const trimmed = email.trim();
    if (!trimmed) return "Business email is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) return "Please enter a valid email address.";

    const domain = trimmed.split("@")[1]?.toLowerCase();
    if (domain && DISALLOWED_FREE_DOMAINS.includes(domain)) {
      return "Please enter a valid business email (personal domains like Gmail/Yahoo are not allowed).";
    }
    return null;
  };

  const validatePhone = (phone: string) => {
    if (!phone.trim()) return "Phone number is required.";
    const digits = phone.replace(/\D/g, "");
    if (!/^\+?[0-9\s\-\(\)]{7,20}$/.test(phone.trim()) || digits.length < 7 || digits.length > 15) {
      return "Please enter a valid phone number (7 to 15 digits).";
    }
    return null;
  };

  const validateSingleField = (name: string, value: unknown): string | null => {
    switch (name) {
      case "firstName":
        return !String(value || "").trim() ? "First name is required." : null;
      case "lastName":
        return !String(value || "").trim() ? "Last name is required." : null;
      case "company":
        return !String(value || "").trim() ? "Company name is required." : null;
      case "designation":
        return !String(value || "").trim() ? "Designation is required." : null;
      case "email":
        return validateBusinessEmail(String(value || ""));
      case "phone":
        return validatePhone(String(value || ""));
      case "product":
        return !String(value || "").trim() ? "Please select an interested product." : null;
      case "message":
        return !String(value || "").trim() ? "Please describe your requirement." : null;
      case "consent":
        return !value ? "You must agree to the privacy policy." : null;
      default:
        return null;
    }
  };

  const handleFieldChange = (name: string, value: unknown) => {
    setFormData((prev) => {
      const nextData = { ...prev, [name]: value };
      return nextData;
    });

    const err = validateSingleField(name, value);
    setFieldErrors((prev) => ({
      ...prev,
      [name]: err || "",
    }));
  };

  const handleFieldBlur = (name: string) => {
    const value = formData[name as keyof typeof formData];
    const err = validateSingleField(name, value);
    setFieldErrors((prev) => ({
      ...prev,
      [name]: err || "",
    }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const errors: Record<string, string> = {};

    Object.keys(formData).forEach((key) => {
      const err = validateSingleField(key, formData[key as keyof typeof formData]);
      if (err) errors[key] = err;
    });

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      console.error("Form submission error:", err);
      setFieldErrors({
        form: err instanceof Error ? err.message : "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
    setFieldErrors({});
    setIsSubmitted(false);
  }

  return (
    <section id="contact-form" className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 py-12">
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
                  <MailIcon size={24} className="text-violet-500" />
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
                    noValidate
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
                          First Name <span className="text-red-500">*</span>
                        </label>

                        <input
                          value={formData.firstName}
                          onChange={(e) => handleFieldChange("firstName", e.target.value)}
                          onBlur={() => handleFieldBlur("firstName")}
                          placeholder="First Name"
                          className={`
                            w-full
                            rounded-2xl
                            border
                            ${fieldErrors.firstName ? "border-red-500 dark:border-red-500 focus:border-red-500" : "border-slate-900/10 dark:border-slate-700 focus:border-violet-500"}
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
                            focus:ring-4
                            focus:ring-violet-500/10
                          `}
                        />
                        {fieldErrors.firstName && (
                          <p className="mt-1.5 text-xs font-medium text-red-500">{fieldErrors.firstName}</p>
                        )}
                      </div>

                      {/* Last Name */}

                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Last Name <span className="text-red-500">*</span>
                        </label>

                        <input
                          value={formData.lastName}
                          onChange={(e) => handleFieldChange("lastName", e.target.value)}
                          onBlur={() => handleFieldBlur("lastName")}
                          placeholder="Last Name"
                          className={`
                            w-full
                            rounded-2xl
                            border
                            ${fieldErrors.lastName ? "border-red-500 dark:border-red-500 focus:border-red-500" : "border-slate-900/10 dark:border-slate-700 focus:border-violet-500"}
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
                            focus:ring-4
                            focus:ring-violet-500/10
                          `}
                        />
                        {fieldErrors.lastName && (
                          <p className="mt-1.5 text-xs font-medium text-red-500">{fieldErrors.lastName}</p>
                        )}
                      </div>

                    </div>

                    <div className="grid gap-6 md:grid-cols-2">

                      {/* Company */}

                      <div>

                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Company <span className="text-red-500">*</span>
                        </label>

                        <input
                          value={formData.company}
                          onChange={(e) => handleFieldChange("company", e.target.value)}
                          onBlur={() => handleFieldBlur("company")}
                          placeholder="Your Company"
                          className={`
                            w-full
                            rounded-2xl
                            border
                            ${fieldErrors.company ? "border-red-500 dark:border-red-500 focus:border-red-500" : "border-slate-900/10 dark:border-slate-700 focus:border-violet-500"}
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
                            focus:ring-4
                            focus:ring-violet-500/10
                          `}
                        />
                        {fieldErrors.company && (
                          <p className="mt-1.5 text-xs font-medium text-red-500">{fieldErrors.company}</p>
                        )}

                      </div>

                      {/* Designation */}

                      <div>

                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Designation <span className="text-red-500">*</span>
                        </label>

                        <input
                          value={formData.designation}
                          onChange={(e) => handleFieldChange("designation", e.target.value)}
                          onBlur={() => handleFieldBlur("designation")}
                          placeholder="Designation"
                          className={`
                            w-full
                            rounded-2xl
                            border
                            ${fieldErrors.designation ? "border-red-500 dark:border-red-500 focus:border-red-500" : "border-slate-900/10 dark:border-slate-700 focus:border-violet-500"}
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
                            focus:ring-4
                            focus:ring-violet-500/10
                          `}
                        />
                        {fieldErrors.designation && (
                          <p className="mt-1.5 text-xs font-medium text-red-500">{fieldErrors.designation}</p>
                        )}

                      </div>

                    </div>

                    <div className="grid gap-6 md:grid-cols-2">

                      {/* Email */}

                      <div>

                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Business Email <span className="text-red-500">*</span>
                        </label>

                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleFieldChange("email", e.target.value)}
                          onBlur={() => handleFieldBlur("email")}
                          placeholder="sample@company.com"
                          className={`
                            w-full
                            rounded-2xl
                            border
                            ${fieldErrors.email ? "border-red-500 dark:border-red-500 focus:border-red-500" : "border-slate-900/10 dark:border-slate-700 focus:border-violet-500"}
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
                            focus:ring-4
                            focus:ring-violet-500/10
                          `}
                        />
                        {fieldErrors.email && (
                          <p className="mt-1.5 text-xs font-medium text-red-500">{fieldErrors.email}</p>
                        )}

                      </div>

                      {/* Phone */}

                      <div>

                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Phone Number <span className="text-red-500">*</span>
                        </label>

                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleFieldChange("phone", e.target.value)}
                          onBlur={() => handleFieldBlur("phone")}
                          placeholder="+91 98765 43210"
                          className={`
                            w-full
                            rounded-2xl
                            border
                            ${fieldErrors.phone ? "border-red-500 dark:border-red-500 focus:border-red-500" : "border-slate-900/10 dark:border-slate-700 focus:border-violet-500"}
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
                            focus:ring-4
                            focus:ring-violet-500/10
                          `}
                        />
                        {fieldErrors.phone && (
                          <p className="mt-1.5 text-xs font-medium text-red-500">{fieldErrors.phone}</p>
                        )}

                      </div>

                    </div>

                    {/* Product */}

                    <div>

                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Interested Product <span className="text-red-500">*</span>
                      </label>

                      <div className="relative" ref={dropdownRef}>
                        {/* Custom Dropdown Trigger */}
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen((prev) => !prev)}
                          onBlur={() => handleFieldBlur("product")}
                          className={`
                            w-full
                            flex
                            items-center
                            justify-between
                            rounded-2xl
                            border
                            ${fieldErrors.product ? "border-red-500 dark:border-red-500 focus:border-red-500" : "border-slate-900/10 dark:border-slate-700 focus:border-violet-500"}
                            bg-white
                            dark:bg-slate-800/80
                            px-5
                            py-3
                            text-sm
                            text-left
                            outline-none
                            transition-all
                            duration-300
                            focus:ring-4
                            focus:ring-violet-500/10
                            cursor-pointer
                          `}
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
                          <ChevronDownIcon
                            size={16}
                            className={`text-slate-400 transition-transform duration-300 ${
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
                                      handleFieldChange("product", product);
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
                                      <CheckIcon size={16} className="text-violet-600 dark:text-violet-400" />
                                    )}
                                  </button>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      {fieldErrors.product && (
                        <p className="mt-1.5 text-xs font-medium text-red-500">{fieldErrors.product}</p>
                      )}

                    </div>

                    {/* Message */}

                    <div>

                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Tell us about your requirements <span className="text-red-500">*</span>
                      </label>

                      <textarea
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleFieldChange("message", e.target.value)}
                        onBlur={() => handleFieldBlur("message")}
                        placeholder="Describe your project or business requirement..."
                        className={`
                          w-full
                          resize-none
                          rounded-3xl
                          border
                          ${fieldErrors.message ? "border-red-500 dark:border-red-500 focus:border-red-500" : "border-slate-900/10 dark:border-slate-700 focus:border-violet-500"}
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
                          focus:ring-4
                          focus:ring-violet-500/10
                        `}
                      />
                      {fieldErrors.message && (
                        <p className="mt-1.5 text-xs font-medium text-red-500">{fieldErrors.message}</p>
                      )}
                    </div>

                    {/* Consent */}

                    <div>
                      <label className="flex cursor-pointer items-start gap-3">
                        <input
                          type="checkbox"
                          checked={formData.consent}
                          onChange={(e) => handleFieldChange("consent", e.target.checked)}
                          onBlur={() => handleFieldBlur("consent")}
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
                      {fieldErrors.consent && (
                        <p className="mt-1.5 text-xs font-medium text-red-500">{fieldErrors.consent}</p>
                      )}
                    </div>

                    {fieldErrors.form && (
                      <div className="rounded-xl border border-red-200 bg-red-50 dark:border-red-900/50 dark:bg-red-950/40 p-4 text-sm text-red-600 dark:text-red-400 font-medium">
                        {fieldErrors.form}
                      </div>
                    )}

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
                          <RocketIcon size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
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
                      <CheckIcon size={32} />
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
                      <ArrowRightIcon size={16} />
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