"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

// Expanded FAQ data
const faqData = [
  // Page 1 - General & AP2L Platform
  {
    question: "What is AP2L and how does it benefit my organization?",
    answer: "AP2L is an AI-powered enterprise software platform designed for high-performance teams. It consolidates cybersecurity, intelligent automation, and cloud engineering into a single unified solution."
  },
  {
    question: "Do you offer tailored solutions for DevOps teams?",
    answer: "Yes, our tools integrate seamlessly into your CI/CD pipelines to automate testing, secure your software supply chain, and guarantee uptime without slowing down deployments."
  },
  {
    question: "What kind of support is included with your platforms?",
    answer: "We offer 24/7 dedicated enterprise support, comprehensive documentation, and onboarding assistance for all our premium tier customers."
  },
  {
    question: "Can I migrate my existing data to AP2L platforms?",
    answer: "Absolutely. We provide seamless migration tools and dedicated engineering support to ensure your data transitions smoothly without operational downtime."
  },
  {
    question: "Do you offer API access for custom integrations?",
    answer: "Yes, we provide robust, well-documented RESTful APIs and webhooks that allow you to integrate our platforms deeply into your existing infrastructure."
  },
  {
    question: "What are the deployment options available?",
    answer: "We support flexible deployment options, including fully managed SaaS, dedicated private cloud instances, and on-premises enterprise deployments."
  },
  // Page 2 - ShieldVUE & Cybersecurity
  {
    question: "What is ShieldVUE?",
    answer: "ShieldVUE is our Software Supply Chain Security and SBOM Management platform that helps you identify, track, and mitigate vulnerabilities across your software lifecycle."
  },
  {
    question: "How does ShieldVUE help with SBOM management?",
    answer: "It automatically generates, manages, and analyzes Software Bill of Materials (SBOMs) at every stage of your build process, ensuring compliance with enterprise security standards."
  },
  {
    question: "Can ShieldVUE detect zero-day vulnerabilities?",
    answer: "Yes, our threat intelligence engine continuously monitors your dependencies and instantly flags newly discovered zero-day vulnerabilities before they can be exploited."
  },
  {
    question: "What compliance standards does ShieldVUE support?",
    answer: "We offer built-in reporting for major regulatory standards including SOC2, ISO 27001, HIPAA, and executive orders regarding software supply chain security."
  },
  {
    question: "Is SWIKRUTI designed for DPDPA compliance?",
    answer: "Yes, SWIKRUTI is specifically built to handle Consent Management and ensure full compliance with the Digital Personal Data Protection Act (DPDPA) and GDPR."
  },
  {
    question: "How does FINXPLORE detect fraudulent transactions?",
    answer: "FINXPLORE utilizes AI and advanced machine learning models to analyze transaction patterns in real-time, accurately flagging anomalous and high-risk activities."
  },
  // Page 3 - NETRAA & Automation (cliQTest)
  {
    question: "How does NETRAA AI-OPS improve system observability?",
    answer: "NETRAA AI-OPS uses Explainable AI to provide intelligent observability. It not only detects anomalies in your infrastructure but also explains the root cause in plain English."
  },
  {
    question: "What makes cliQTest different from other testing tools?",
    answer: "cliQTest is an AI-powered Test Automation platform that automatically generates test cases, maintains scripts during UI changes, and provides predictive quality analytics."
  },
  {
    question: "Does cliQTest support cross-browser testing?",
    answer: "Yes, it supports parallel execution across all major browsers, devices, and operating systems out-of-the-box via our secure cloud grid."
  },
  {
    question: "What is SARANSH Service Virtualization?",
    answer: "SARANSH enables you to simulate the behavior of dependent components (like third-party APIs or databases) so your QA teams can test applications in isolation without bottlenecks."
  },
  {
    question: "How does JUPITER streamline IT Service Desks?",
    answer: "JUPITER uses AI to automatically categorize, route, and resolve IT tickets. It includes a smart virtual agent that resolves common employee IT issues instantly."
  },
  {
    question: "Can NETRAA integrate with our existing monitoring tools?",
    answer: "Yes, NETRAA natively ingests data from Datadog, New Relic, Splunk, Prometheus, and other standard telemetry systems to provide a unified AI analysis layer."
  },
  // Page 4 - Pricing, Accounts & Contracts
  {
    question: "How is pricing structured for your platforms?",
    answer: "Our pricing is modular. You only pay for the specific platforms (like ShieldVUE or cliQTest) you need, with tiers based on usage volume and seat counts."
  },
  {
    question: "Do you offer a proof-of-concept (POC) trial?",
    answer: "Yes, we offer fully guided Proof of Concept trials for enterprise clients to validate our platforms against your specific business requirements."
  },
  {
    question: "What happens to our data if we cancel our contract?",
    answer: "You maintain full ownership of your data. Upon cancellation, you have a 30-day window to export your data before it is securely and permanently wiped from our systems."
  },
  {
    question: "Can we add more seats or usage limits mid-contract?",
    answer: "Absolutely. Our platform is designed to scale with you, and you can instantly provision additional seats or expand your usage limits at any time."
  },
  {
    question: "Are there any hidden implementation fees?",
    answer: "No. Our enterprise tiers include standard implementation support. For highly complex, custom on-premise integrations, we provide transparent statements of work upfront."
  },
  {
    question: "How can I request a customized demo?",
    answer: "You can request a demo by clicking the 'Contact' button on our website. Our technical sales team will reach out to tailor the presentation to your use case."
  }
];

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(faqData.length / itemsPerPage);
  
  const currentFaqs = faqData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const goToPage = (page: number) => {
    setCurrentPage(page);
    setOpenIndex(null); // Reset open FAQ when changing pages
  };

  return (
    <div className="min-h-screen bg-white pt-40 pb-24 px-4 md:px-8 relative overflow-hidden font-sans">
      {/* Background Text */}
      <div className="absolute top-20 left-0 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
        <h1 className="text-[10vw] font-bold whitespace-nowrap text-gray-50 opacity-80 mt-0">Frequently Ask Question</h1>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Frequently Ask Question</h2>
          <p className="text-gray-500 text-sm">
            <Link href="/contact" className="text-[#090A1F] cursor-pointer font-medium hover:underline">Contact us</Link>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Column - Accordion */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-4 min-h-[450px]">
              {currentFaqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-50 overflow-hidden transition-all duration-300"
                >
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium text-gray-700 text-sm md:text-[15px] pr-8">{faq.question}</span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-400 flex items-center justify-center transition-colors duration-300 shadow-sm">
                      {openIndex === index ? (
                        <Minus className="w-4 h-4 text-white" />
                      ) : (
                        <Plus className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination Numbers */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-10">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToPage(i + 1)}
                    className={`w-8 h-8 rounded flex items-center justify-center text-sm font-medium transition-colors ${
                      currentPage === i + 1 
                        ? 'bg-gray-400 text-white shadow-md' 
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Illustration & Form */}
          <div className="flex-1 flex flex-col items-center pt-4">
            {/* Illustration */}
            <div className="relative w-full max-w-sm h-64 mb-10 flex justify-center items-center">
               <Image 
                 src="/images/faq/question.png" 
                 alt="Frequently Asked Questions" 
                 fill
                 className="object-contain"
               />
            </div>

            <h3 className="text-[28px] font-bold mb-3 text-black">Any Question?</h3>
            <p className="text-gray-600 text-[15px] mb-10 text-center">You can ask anything you want to know about Feedback.</p>

            <div className="w-full max-w-[320px]">
              <div className="mb-4">
                <label className="text-[13px] text-gray-700 font-medium block mb-2">Let me know.</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Enter Here" 
                    className="w-full px-4 py-3 rounded border border-gray-400 focus:outline-none focus:border-gray-500 focus:ring-0 text-[13px] text-gray-900 placeholder-gray-500 bg-white"
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <button className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2.5 px-14 rounded-full shadow-[0_8px_20px_-4px_rgba(75,85,99,0.7)] transition-all">
                  Sent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
