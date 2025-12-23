import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import JavaBackground from "./components/JavaBackground";
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
  title: "Ramjee Prasad | Backend Developer & Java Spring Boot Expert",
  description: "Ramjee Prasad is a Backend Engineer and Java Developer specializing in Spring Boot, Microservices, REST APIs, and Distributed Systems. Hire Ramjee Prasad for scalable, high-performance backend development.",
  keywords: [
    "Ramjee Prasad",
    "Ramjee Prasad backend engineer",
    "Ramjee Prasad developer",
    "Ramjee Prasad Java developer",
    "Ramjee Prasad Spring Boot",
    "Backend Developer",
    "Backend Engineer",
    "Java Developer",
    "Spring Boot Developer",
    "Java Spring Boot Expert",
    "Microservices Developer",
    "REST API Developer",
    "Docker Developer",
    "Kubernetes Developer",
    "Full Stack Developer",
    "Software Engineer India",
    "Backend Developer Jamshedpur",
    "Java Developer Portfolio",
    "Spring WebFlux Developer",
    "Distributed Systems Engineer",
    "Software Developer India"
  ],
  authors: [{ name: "Ramjee Prasad", url: "https://github.com/ubinox-pi" }],
  creator: "Ramjee Prasad",
  publisher: "Ramjee Prasad",
  alternates: {
    canonical: "https://portfolio-three-azure-84.vercel.app/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-three-azure-84.vercel.app/",
    title: "Ramjee Prasad | Backend Developer & Java Spring Boot Expert",
    description: "Ramjee Prasad - Backend Engineer specializing in Java, Spring Boot, Microservices, and Distributed Systems. Building scalable applications.",
    siteName: "Ramjee Prasad - Backend Developer Portfolio",
    images: [
      {
        url: "/ramjee_passport.png",
        width: 800,
        height: 800,
        alt: "Ramjee Prasad - Backend Developer and Java Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramjee Prasad | Backend Developer & Java Expert",
    description: "Ramjee Prasad - Backend Engineer specializing in Java, Spring Boot, Microservices, and Distributed Systems.",
    images: ["/ramjee_passport.png"],
    creator: "@ramjeeprasad",
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
    <html lang="en">
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
