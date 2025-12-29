import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import JavaBackground from "./components/JavaBackground";
import JsonLd from "./components/JsonLd";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ramjee Prasad - Backend Developer | Java & Spring Boot",
  description: "Ramjee Prasad is a Backend Developer specializing in Java, Spring Boot, Microservices, and REST APIs. Portfolio of Ramjee Prasad showcasing backend development projects.",
  keywords: [
    "Ramjee Prasad",
    "Ramjee Prasad portfolio",
    "Ramjee Prasad developer",
    "Ramjee Prasad backend",
    "Ramjee Prasad Java",
    "Ramjee Prasad Spring Boot",
    "Backend Developer",
    "Java Developer",
    "Spring Boot Developer",
    "Microservices Developer",
    "REST API Developer",
    "Software Developer India",
    "Backend Developer Jamshedpur",
    "ramjeeprasad.online",
    "Java portfolio"
  ],
  authors: [{ name: "Ramjee Prasad", url: "https://ramjeeprasad.online" }],
  creator: "Ramjee Prasad",
  publisher: "Ramjee Prasad",
  alternates: {
    canonical: "https://ramjeeprasad.online/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ramjeeprasad.online/",
    title: "Ramjee Prasad - Backend Developer",
    description: "Ramjee Prasad - Backend Developer specializing in Java, Spring Boot, and Microservices. View portfolio and projects.",
    siteName: "Ramjee Prasad Portfolio",
    images: [
      {
        url: "https://ramjeeprasad.online/ramjee_passport.png",
        width: 800,
        height: 800,
        alt: "Ramjee Prasad - Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramjee Prasad - Backend Developer",
    description: "Ramjee Prasad - Backend Developer specializing in Java, Spring Boot, and Microservices.",
    images: ["https://ramjeeprasad.online/ramjee_passport.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/java.png", sizes: "32x32", type: "image/png" },
      { url: "/java.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/java.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/java.png",
  },
  verification: {
    google: "fFh1oRbnkwwsiJBKpbwLkcZb3HV6cyo6wvS74VZxpnw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8T2L676SSV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8T2L676SSV');
          `}
        </Script>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <JavaBackground />

        <div className="relative z-10">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
