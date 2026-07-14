import type { Metadata } from "next";
import { Urbanist, Inter, Manrope, Alata, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/common/Navbar/Navbar";
import Footer from "@/src/components/common/Footer/Footer";
import CookieBanner from "@/src/components/common/CookieBanner/CookieBanner";

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

const alata = Alata({
  weight: "400",
  variable: "--font-alata",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

import { ThemeProvider } from "@/src/components/theme-provider";
import { ThemeConfigProvider } from "@/src/context/ThemeConfigContext";

import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#1A1736",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ap2l.ai"),
  title: {
    default: "AP2L | AI-Powered Enterprise Software & Cloud Solutions",
    template: "%s | AP2L Enterprise",
  },
  description: "Enterprise software solutions built for high-performance teams. Discover our scalable AI, cybersecurity, intelligent automation platforms, and robust enterprise tools designed for the future of digital transformation.",
  keywords: [
    "Enterprise Software",
    "Cloud Engineering",
    "Cybersecurity",
    "Intelligent Automation",
    "Digital Transformation",
    "DevOps",
    "FinTech",
    "AI Platform",
    "Machine Learning Solutions",
    "Cloud Infrastructure",
    "Software as a Service",
    "B2B Enterprise Solutions",
    "Next-Generation Analytics"
  ],
  authors: [{ name: "ApMoSys Technologies", url: "https://apmosys.com" }],
  creator: "ApMoSys Technologies",
  publisher: "ApMoSys Technologies",
  alternates: {
    canonical: "https://ap2l.ai",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ap2l.ai",
    title: "AP2L | AI-Powered Enterprise Software & Cloud Solutions",
    description: "Enterprise software solutions built for high-performance teams. Discover our scalable AI, cybersecurity, and intelligent automation platforms.",
    siteName: "AP2L Enterprise Solutions",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AP2L Enterprise Solutions",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AP2L | AI-Powered Enterprise Software",
    description: "Enterprise software solutions built for high-performance teams.",
    creator: "@ApMoSys",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`dark ${urbanist.variable} ${inter.variable} ${manrope.variable} ${alata.variable} ${spaceGrotesk.variable}`}>
      <head>
      </head>
      <body suppressHydrationWarning className="font-sans antialiased text-slate-900 dark:text-slate-50 selection:bg-[#6843b7] selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ThemeConfigProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <CookieBanner />
          </ThemeConfigProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
