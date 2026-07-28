"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const locations = [
  {
    id: "mumbai",
    city: "MUMBAI (Head Office)",
    address: "ApMoSys Technologies Pvt. Ltd.\nRupa Solitaire, Millennium Business Park, Mahape,\nNavi Mumbai, Maharashtra - 400710",
    phone: "+91 2241-222-250",
    email: "sales@ap2l.ai",
    image: "/images/common/locations/mumbai.png",
    embedUrl: "https://maps.google.com/maps?q=19.1143299,73.0143532&z=15&output=embed",
    mapLink: "https://www.google.com/maps/place/ApMoSys+Technologies+Pvt+Ltd/@19.114525,73.0150251,512m/data=!3m1!1e3!4m6!3m5!1s0x3be7c08bf79e4fbb:0x189e2a9695ebca54!8m2!3d19.1143299!4d73.0143532!16s%2Fg%2F11t9h1n9ct?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: "chennai",
    city: "CHENNAI",
    address: "Office No. C315, 3rd Floor, Apeejay House,\n39/12, Haddows Road, Nungambakkam,\nChennai - 600 006",
    phone: "+91 2241-222-251",
    email: "sales@ap2l.ai",
    image: "/images/common/locations/chennai.png",
    embedUrl: "https://maps.google.com/maps?q=13.0631753,80.2479313&z=15&output=embed",
    mapLink: "https://www.google.com/maps/place/Apeejay+Business+Centre/@13.0566917,80.2240391,12.65z/data=!4m6!3m5!1s0x3a526669439ac537:0x2e28741298f598ea!8m2!3d13.0631753!4d80.2479313!16s%2Fg%2F1tjtgpsz?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: "bbsr",
    city: "BHUBANESWAR",
    address: "ApMoSys Technologies Pvt. Ltd., Fortune Towers,\n4th Floor, A Zone, Nandankanan Road,\nChandrasekharpur, Bhubaneswar - 751023, Odisha",
    phone: "+91 2241-222-250",
    email: "sales@ap2l.ai",
    image: "/images/common/locations/bbsr.png",
    embedUrl: "https://maps.google.com/maps?q=20.3094975,85.8195144&z=15&output=embed",
    mapLink: "https://www.google.com/maps/place/ApMoSys+Technologies+Pvt+Ltd/@20.3099567,85.8175093,15.33z/data=!4m6!3m5!1s0x3a1909005ebd71a1:0xf02ca3f5e8cf8ad5!8m2!3d20.3094975!4d85.8195144!16s%2Fg%2F11xt2cgl14?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: "uae",
    city: "UNITED ARAB EMIRATES",
    address: "ApMoSys Technology FZ-LLC, B05-716A\nBusiness Center 04, RAKEZ Business Zone - FZ\nRAK, UAE. PO BOX 10055",
    phone: "+91 2241-222-251",
    email: "sales@ap2l.ai",
    image: "/images/common/locations/uae.png",
    embedUrl: "https://maps.google.com/maps?q=25.8008984,55.9683029&z=15&output=embed",
    mapLink: "https://www.google.com/maps/place/Ras+Al+Khaimah+Economic+Zone+-+RAKEZ/@25.8009003,55.9678196,97m/data=!3m1!1e3!4m6!3m5!1s0x3ef67131f14a49b1:0xd3b5ffc06b24ab09!8m2!3d25.8008984!4d55.9683029!16s%2Fg%2F1ptvtx9_5?coh=225991&entry=tts&g_ep=EgoyMDI0MTIxMS4wIPu8ASoASAFQAw%3D%3D",
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
              {/* Map Embed */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <iframe
                  src={location.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700 h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold tracking-wider text-slate-900 dark:text-white">
                  {location.city}
                </h3>

                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {location.address}
                </p>

                <div className="mt-4 flex flex-col gap-1.5">
                  <a href={`tel:${location.phone.replace(/\s+/g, '')}`} className="text-sm font-semibold text-slate-800 hover:text-violet-600 dark:text-slate-200 dark:hover:text-violet-400">
                    {location.phone}
                  </a>
                  <a href={`mailto:${location.email}`} className="text-sm font-semibold text-slate-800 hover:text-violet-600 dark:text-slate-200 dark:hover:text-violet-400">
                    {location.email}
                  </a>
                </div>

                <div className="mt-auto pt-5">
                  <a
                    href={location.mapLink}
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