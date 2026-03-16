import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Akshay Sable - Research Assistant | IoT & Embedded Systems",
  description:
    "sableakshay100@gmail.com | +91-8600858026 | Research Assistant at IIT Bombay",
  keywords: [
    "Akshay Sable",
    "Research Assistant",
    "IIT Bombay",
    "IoT",
    "Embedded Systems",
    "Electronics",
  ],
  authors: [{ name: "Akshay Sable" }],
  creator: "Akshay Sable",
  publisher: "Akshay Sable",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    siteName: "Akshay Sable - Research Assistant | IoT & Embedded Systems",
    title:
      "Akshay Sable - Research Assistant | IoT & Embedded Systems",
    description:
      "Research Assistant at IIT Bombay. BE in Electronics and Telecommunication from I2IT Pune. IoT, embedded systems, PCB design.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Akshay Sable – Research Assistant at IIT Bombay, IoT & Embedded Systems.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Akshay Sable - Research Assistant | IoT & Embedded Systems",
    description:
      "Research Assistant at IIT Bombay. BE in Electronics and Telecommunication from I2IT Pune.",
    images: ["/og-image.jpg"],
    creator: "",
  },
  alternates: {
    canonical: "",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Akshay Sable",
              jobTitle: "Research Assistant",
              description:
                "Research Assistant at Indian Institute of Technology Bombay. BE in Electronics and Telecommunication from I2IT Pune.",
              url: "",
              sameAs: [
                "https://www.linkedin.com/in/akshaysable17",
              ],
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "International Institute of Information Technology (I2IT), Pune",
                  description: "BE Electronics and Telecommunication Engineering",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "Government Polytechnic Pune",
                  description: "Diploma in Computer Engineering",
                },
              ],
              worksFor: [
                {
                  "@type": "Organization",
                  name: "Indian Institute of Technology Bombay",
                  description: "Research Assistant",
                },
              ],
              knowsAbout: [
                "IoT",
                "BLE",
                "Embedded Systems",
                "PCB Design",
                "Python",
                "KiCAD",
                "OpenCV",
                "Machine Learning",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
