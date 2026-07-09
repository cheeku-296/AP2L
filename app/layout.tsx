import type { Metadata } from "next";
import { Urbanist, Inter, Manrope, Alata } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/common/Navbar/Navbar";
import Footer from "@/src/components/common/Footer/Footer";

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

const alata = Alata({
  weight: "400",
  variable: "--font-alata",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/src/components/theme-provider";
import { ThemeConfigProvider } from "@/src/context/ThemeConfigContext";

export const metadata: Metadata = {
  title: {
    default: "AP2L | AI-Powered Enterprise Software & Cloud Solutions",
    template: "%s | AP2L",
  },
  description: "Enterprise software solutions built for high-performance teams. Discover our scalable AI, cybersecurity, and intelligent automation platforms.",
  keywords: [
    "Enterprise Software",
    "Cloud Engineering",
    "Cybersecurity",
    "Intelligent Automation",
    "Digital Transformation",
    "DevOps",
    "FinTech",
  ],
  authors: [{ name: "ApMoSys Technologies" }],
  creator: "ApMoSys Technologies",
  publisher: "ApMoSys Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ap2l.ai",
    title: "AP2L | AI-Powered Enterprise Software & Cloud Solutions",
    description: "Enterprise software solutions built for high-performance teams. Discover our scalable AI, cybersecurity, and intelligent automation platforms.",
    siteName: "AP2L",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AP2L Enterprise Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AP2L | AI-Powered Enterprise Software",
    description: "Enterprise software solutions built for high-performance teams.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`dark ${urbanist.variable} ${inter.variable} ${manrope.variable} ${alata.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="font-sans">
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
          </ThemeConfigProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
