import React from "next";

export const metadata = {
  title: "Cookie Policy",
  description: "Read the Cookie Policy for AP2L Enterprise Solutions.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-24 text-slate-900 dark:text-slate-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-urbanist font-bold mb-8">Cookie Policy</h1>
        
        <div className="space-y-8 font-manrope text-slate-700 dark:text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">1. What Are Cookies</h2>
            <p>
              As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">2. How We Use Cookies</h2>
            <p>
              We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">3. Disabling Cookies</h2>
            <p>
              You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">4. The Cookies We Set</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it (like dark or light mode).</li>
              <li><strong>Consent cookies:</strong> We use cookies to remember if you have accepted or declined our cookie consent banner.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">5. Third Party Cookies</h2>
            <p>
              In some special cases, we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
