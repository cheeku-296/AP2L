"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function GoogleMap() {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-slate-950">
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/50 px-4 py-2 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/40">
            <MapPin className="h-4 w-4 text-violet-500" />

            <span className="font-manrope text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">
              Visit Our Office
            </span>
          </div> */}

          <h2 className="mt-8 text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Find Us Easily
          </h2>

          <p className="mt-6 font-manrope text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Our headquarters is located in Navi Mumbai. Schedule a visit or
            connect with our team for a personalized consultation.
          </p>
        </motion.div>

        {/* Map Card */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[32px] border border-slate-900/10 bg-white/40 shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:border-slate-800 dark:bg-slate-900/40"
        >
          <div className="relative h-[550px] w-full overflow-hidden">
            <iframe
              title="AP2L Office Location"
              src="https://www.google.com/maps?q=ApMoSys%20Technologies%20Mahape%20Navi%20Mumbai&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>

          {/* Bottom Info */}

          <div className="flex flex-col gap-6 border-t border-slate-900/10 p-8 dark:border-slate-800 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                AP2L Technologies
              </h3>

              <p className="mt-2 font-manrope leading-7 text-slate-600 dark:text-slate-400">
                ApMoSys Technologies Pvt. Ltd.
                <br />
                Mahape, Navi Mumbai,
                Maharashtra, India
              </p>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-violet-500/40"
            >
              <Navigation className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}