import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Ramjee Prasad | Backend Developer & Java Expert",
  description: "Backend Engineer specializing in Java, Spring Boot, Microservices, and Distributed Systems. Building scalable, high-performance applications.",
  keywords: ["Backend Developer", "Java Developer", "Spring Boot", "Microservices", "REST API", "Docker", "Kubernetes", "Portfolio"],
  authors: [{ name: "Ramjee Prasad" }],
  creator: "Ramjee Prasad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-three-azure-84.vercel.app/",
    title: "Ramjee Prasad | Backend Developer & Java Expert",
    description: "Backend Engineer specializing in Java, Spring Boot, Microservices, and Distributed Systems.",
    siteName: "Ramjee Prasad Portfolio",
    images: [
      {
        url: "/ramjee_passport.png",
        width: 800,
        height: 800,
        alt: "Ramjee Prasad - Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramjee Prasad | Backend Developer & Java Expert",
    description: "Backend Engineer specializing in Java, Spring Boot, Microservices, and Distributed Systems.",
    images: ["/ramjee_passport.png"],
  },
  robots: {
    index: true,
    follow: true,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
