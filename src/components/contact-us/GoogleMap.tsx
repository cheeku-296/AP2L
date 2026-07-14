"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const locations = [
  {
    id: "chennai",
    city: "CHENNAI",
    address: "Office No. C315, 3rd Floor, Apeejay House,\n39/12, Haddows Road, Nungambakkam,\nChennai - 600 006",
    phone: "+91 44 4976 5601",
    email: "chennai@apmosys.com",
    image: "/images/locations/chennai.png",
  },
  {
    id: "bbsr",
    city: "BHUBANESWAR",
    address: "ApMoSys Technologies Pvt. Ltd., Fortune Towers,\n4th Floor, A Zone, Nandankanan Road,\nChandrasekharpur, Bhubaneswar - 751023, Odisha",
    phone: "+91 674 4976 5602",
    email: "bbsr@apmosys.com",
    image: "/images/locations/bbsr.png",
  },
  {
    id: "uae",
    city: "UNITED ARAB EMIRATES",
    address: "ApMoSys Technology FZ-LLC, B05-716A\nBusiness Center 04, RAKEZ Business Zone - FZ\nRAK, UAE. PO BOX 10055",
    phone: "+971 4 4976 5603",
    email: "uae@apmosys.com",
    image: "/images/locations/uae.png",
  }
];

export default function GoogleMap() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-950">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl"
          >
            Global Presence
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400"
          >
            Connect with our experts around the globe. Our distributed engineering teams are always within reach.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Image */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={location.image}
                  alt={location.city}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-lg font-bold tracking-wider text-slate-900 dark:text-white">
                  {location.city}
                </h3>

                <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {location.address}
                </p>

                <div className="mt-6 flex flex-col gap-2">
                  <a href={`tel:${location.phone.replace(/\s+/g, '')}`} className="text-sm font-semibold text-slate-800 hover:text-violet-600 dark:text-slate-200 dark:hover:text-violet-400">
                    {location.phone}
                  </a>
                  <a href={`mailto:${location.email}`} className="text-sm font-semibold text-slate-800 hover:text-violet-600 dark:text-slate-200 dark:hover:text-violet-400">
                    {location.email}
                  </a>
                </div>

                <div className="mt-auto pt-8">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-slate-200 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 transition-colors hover:border-slate-800 hover:bg-slate-800 hover:text-white dark:border-slate-700 dark:text-slate-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900"
                  >
                    View On Map
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}