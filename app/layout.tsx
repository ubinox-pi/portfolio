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
  title: "Ramjee Prasad - Backend Developer | Java & Spring Boot Expert",
  description: "Ramjee Prasad from Jamshedpur, Jharkhand - Backend Developer specializing in Java, Spring Boot, Microservices, and REST APIs. B.Tech CSE student at Silicon Institute of Technology. View portfolio and resume.",
  keywords: [
    // Personal brand - standalone
    "Ramjee Prasad",
    "ramjee prasad",
    "Ramjee",
    "ramjeeprasad",
    "Ramjee Prasad Ashish",
    "Ashish Kushwaha",
    "Ramjee Ashish",

    // Location keywords - Jharkhand
    "Ramjee Prasad India",
    "Ramjee Prasad Jamshedpur",
    "Ramjee Prasad Jharkhand",
    "Ramjee Prasad Jamshedpur Jharkhand",
    "Ramjee Prasad Jamshedpur India",
    "Developer Jamshedpur",
    "Java Developer Jamshedpur",
    "Java Developer Jharkhand",
    "Backend Developer Jamshedpur",
    "Backend Developer Jharkhand",
    "Backend Developer India",
    "Spring Boot Developer India",
    "Ramjee Prasad Ranchi",
    "Ramjee Prasad Bokaro",
    "Ramjee Prasad Dhanbad",
    "Developer Ranchi",
    "Developer Bokaro",
    "Developer Dhanbad",
    "Java Developer Ranchi",
    "Backend Developer Ranchi",

    // Location keywords - Bihar
    "Ramjee Prasad Bihar",
    "Ramjee Prasad Patna",
    "Developer Bihar",
    "Developer Patna",
    "Java Developer Bihar",
    "Java Developer Patna",
    "Backend Developer Bihar",
    "Backend Developer Patna",
    "Spring Boot Developer Bihar",

    // Location keywords - Odisha
    "Ramjee Prasad Odisha",
    "Ramjee Prasad Sambalpur",
    "Ramjee Prasad Bhubaneswar",
    "Developer Odisha",
    "Developer Sambalpur",
    "Developer Bhubaneswar",
    "Java Developer Odisha",
    "Java Developer Sambalpur",
    "Java Developer Bhubaneswar",
    "Backend Developer Odisha",
    "Backend Developer Sambalpur",
    "Backend Developer Bhubaneswar",
    "Spring Boot Developer Odisha",
    "Spring Boot Developer Sambalpur",

    // Education - Silicon Institute of Technology
    "Ramjee Prasad Silicon",
    "Ramjee Prasad Silicon Institute",
    "Ramjee Prasad Silicon Institute of Technology",
    "Ramjee Prasad SIT",
    "Ramjee Prasad SIT Sambalpur",
    "Silicon Institute Ramjee",
    "SIT Ramjee Prasad",
    "Silicon Institute of Technology Ramjee",
    "Silicon Institute of Technology Sambalpur",
    "SIT Sambalpur Ramjee",
    "SIT Sambalpur student",
    "Silicon Institute student",

    // Education - Silicon University
    "Ramjee Prasad Silicon University",
    "Silicon University Ramjee",
    "Silicon University Sambalpur",
    "Silicon University student",
    "Silicon University Odisha",
    "Silicon University developer",

    // Education - BPUT
    "Ramjee Prasad BPUT",
    "Ramjee Prasad Biju Patnaik",
    "Ramjee Prasad Biju Patnaik University",
    "Ramjee Prasad Biju Patnaik University of Technology",
    "BPUT Ramjee",
    "BPUT Ramjee Prasad",
    "Biju Patnaik University Ramjee",
    "BPUT student Ramjee",
    "BPUT developer",
    "BPUT Java developer",
    "BPUT Odisha",

    // Education - Gayatri Shiksha Niketan High School
    "Ramjee Prasad Gayatri Shiksha Niketan",
    "Ramjee Prasad Gayatri Shiksha Niketan High School",
    "Ramjee Prasad GSN",
    "Ramjee Prasad GSN High School",
    "Gayatri Shiksha Niketan Ramjee",
    "Gayatri Shiksha Niketan High School Ramjee",
    "GSN Ramjee Prasad",
    "GSN High School Ramjee",
    "Gayatri Shiksha Niketan Jamshedpur",
    "GSN Jamshedpur",
    "GSN High School Jamshedpur",
    "Gayatri Shiksha Niketan student",
    "GSN student Ramjee",
    "Gayatri Shiksha Niketan alumni",

    // Education - Degree
    "Ramjee Prasad B.Tech",
    "Ramjee Prasad BTech",
    "Ramjee Prasad CSE",
    "Ramjee Prasad Computer Science",
    "Ramjee Prasad Computer Science Engineering",
    "B.Tech CSE Ramjee",
    "BTech CSE Ramjee Prasad",
    "Computer Science Ramjee",
    "CSE student Ramjee",

    // Professional keywords
    "Ramjee Prasad developer",
    "Ramjee Prasad portfolio",
    "Ramjee Prasad backend",
    "Ramjee Prasad resume",
    "Ramjee Prasad CV",
    "Ramjee Prasad software engineer",
    "Ramjee Prasad programmer",
    "Ramjee Prasad coder",
    "Ramjee Prasad engineer",
    "Ramjee Prasad fresher",
    "Ramjee Prasad backend developer",
    "Ramjee Prasad backend engineer",

    // Java keywords
    "Ramjee Prasad Java",
    "Ramjee Prasad Java Developer",
    "Ramjee Prasad Java Engineer",
    "Ramjee Prasad Java programmer",
    "Ramjee Java",
    "ramjeeprasad java",
    "Java developer Ramjee",

    // Spring Framework keywords
    "Ramjee Prasad Spring",
    "Ramjee Prasad Spring Boot",
    "Ramjee Prasad Spring Framework",
    "Ramjee Prasad Spring MVC",
    "Ramjee Prasad Spring Security",
    "Ramjee Prasad Spring Data",
    "Ramjee Spring Boot",
    "Spring Boot developer Ramjee",
    "Spring framework Ramjee Prasad",

    // WebFlux & Reactive keywords
    "Ramjee Prasad WebFlux",
    "Ramjee Prasad Reactive",
    "Ramjee Prasad Reactive Programming",
    "Ramjee Prasad Spring WebFlux",
    "Ramjee WebFlux",

    // Database keywords
    "Ramjee Prasad Postgres",
    "Ramjee Prasad PostgreSQL",
    "Ramjee Prasad MySQL",
    "Ramjee Prasad MongoDB",
    "Ramjee Prasad Redis",
    "Ramjee Prasad Database",
    "Ramjee Prasad SQL",

    // Other technologies
    "Ramjee Prasad JSP",
    "Ramjee Prasad Servlet",
    "Ramjee Prasad Microservices",
    "Ramjee Prasad Docker",
    "Ramjee Prasad Kubernetes",
    "Ramjee Prasad REST API",
    "Ramjee Prasad API",
    "Ramjee Prasad Kafka",
    "Ramjee Prasad Git",
    "Ramjee Prasad GitHub",
    "Ramjee Prasad Maven",
    "Ramjee Prasad Gradle",
    "Ramjee Prasad IntelliJ",
    "Ramjee Prasad JPA",
    "Ramjee Prasad Hibernate",

    // Social media usernames
    "ramjeeprasad.java",
    "ramjeeprasad.java instagram",
    "ramjee__prasad",
    "ramjee__prasad twitter",
    "ramjee__prasad x",
    "ubinox-pi",
    "ubinox-pi github",
    "ubinox pi",

    // Social media + name combinations
    "Ramjee Prasad Instagram",
    "Ramjee Prasad Twitter",
    "Ramjee Prasad X",
    "Ramjee Prasad GitHub",
    "Ramjee Prasad LinkedIn",
    "Ramjee Prasad GeeksforGeeks",
    "Ramjee Prasad GFG",
    "Ramjee Prasad Discord",
    "Ramjee Prasad Instagram Java",
    "Ramjee Prasad GitHub profile",
    "Ramjee Prasad LinkedIn profile",

    // Generic professional keywords
    "Backend Developer",
    "Java Developer",
    "Spring Boot Developer",
    "Microservices Developer",
    "REST API Developer",
    "Software Developer India",
    "Full Stack Java Developer",
    "Java Backend Developer",
    "Spring Framework Developer",
    "Reactive Developer",
    "WebFlux Developer",

    // Hiring keywords - Name combinations
    "hire Ramjee Prasad",
    "hire Ramjee",
    "Ramjee Prasad hire",
    "Ramjee Prasad for hire",
    "Ramjee Prasad available",
    "Ramjee Prasad freelance",
    "Ramjee Prasad consulting",
    "contact Ramjee Prasad",
    "Ramjee Prasad contact",
    "Ramjee Prasad email",

    // Hiring keywords - Technology combinations
    "hire Java developer",
    "hire Java developer India",
    "hire Java developer Jamshedpur",
    "hire Spring Boot developer",
    "hire Spring Boot developer India",
    "hire Spring developer",
    "hire Spring Framework developer",
    "hire Microservices developer",
    "hire Microservices developer India",
    "hire backend developer",
    "hire backend developer India",
    "hire backend developer Jamshedpur",
    "hire backend developer Jharkhand",
    "hire REST API developer",
    "hire REST API developer India",
    "hire WebFlux developer",
    "hire Reactive developer",
    "hire Docker developer",
    "hire PostgreSQL developer",
    "hire Kafka developer",

    // Looking for keywords
    "looking for Java developer",
    "looking for Spring Boot developer",
    "looking for backend developer India",
    "need Java developer",
    "need Spring Boot developer",
    "need backend developer",
    "Java developer available",
    "Spring Boot developer available",
    "backend developer available",

    // Freelance and consulting
    "Java freelancer India",
    "Spring Boot freelancer",
    "backend freelancer India",
    "Java consultant India",
    "Spring Boot consultant",
    "backend consultant Jamshedpur",

    // Domain and online presence
    "ramjeeprasad.online",
    "ramjee prasad online",
    "ramjeeprasad online",
    "www.ramjeeprasad.online",

    // Blog and content keywords
    "Ramjee Prasad blog",
    "Ramjee Prasad tutorials",
    "Ramjee Prasad articles",
    "Ramjee Prasad tech blog",

    // Portfolio keywords
    "Ramjee Prasad portfolio",
    "Ramjee portfolio",
    "Java developer portfolio",
    "Java developer portfolio India",
    "Spring Boot developer portfolio",
    "backend developer portfolio",
    "backend developer portfolio India",
    "Microservices developer portfolio",
    "portfolio Ramjee Prasad",
    "portfolio ramjeeprasad",

    // Resume keywords
    "Ramjee Prasad resume",
    "Ramjee Prasad CV",
    "Ramjee resume",
    "Java developer resume",
    "Java developer resume India",
    "Spring Boot developer resume",
    "backend developer resume",
    "backend developer resume India",
    "Microservices developer resume",
    "resume Ramjee Prasad",
    "CV Ramjee Prasad",
    "download Ramjee Prasad resume",

    // Social media + technology combinations
    "Java developer Instagram",
    "Java developer Twitter",
    "Java developer GitHub",
    "Java developer LinkedIn",
    "Spring Boot developer Instagram",
    "Spring Boot developer Twitter",
    "Spring Boot developer GitHub",
    "Spring Boot developer LinkedIn",
    "backend developer Instagram",
    "backend developer Twitter",
    "backend developer GitHub",
    "backend developer LinkedIn",
    "ramjeeprasad.java Instagram",
    "ramjee__prasad Twitter",
    "ubinox-pi GitHub",

    // Technology + location + social
    "Java developer Jamshedpur GitHub",
    "Java developer India LinkedIn",
    "Spring Boot developer India GitHub",
    "backend developer Jamshedpur LinkedIn",

    // Tech stack combinations
    "Java Spring Boot developer",
    "Java Spring Boot Microservices",
    "Java Spring Boot REST API",
    "Java Spring Boot PostgreSQL",
    "Java Spring Boot Docker",
    "Java Spring Boot Kafka",
    "Java backend Microservices",
    "Spring Boot Microservices developer",
    "Spring Boot REST API developer",
    "Spring Boot PostgreSQL developer",
    "Spring Boot Docker developer",
    "Spring Boot Kafka developer",

    // Hiring + technology + location
    "hire Java Spring Boot developer",
    "hire Java Spring Boot developer India",
    "hire Microservices developer Jamshedpur",
    "hire backend Java developer",
    "hire backend Spring Boot developer",
    "hire fullstack Java developer",

    // Project and work keywords
    "Ramjee Prasad projects",
    "Ramjee Prasad work",
    "Ramjee Prasad experience",
    "Ramjee Prasad skills",
    "Java projects Ramjee",
    "Spring Boot projects Ramjee",

    // Interview and job keywords
    "Ramjee Prasad interview",
    "Java developer job India",
    "Spring Boot developer job India",
    "backend developer job Jamshedpur",
    "fresher Java developer India",
    "fresher Spring Boot developer",
    "fresher backend developer India",
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
    title: "Ramjee Prasad | Backend Developer & Java Spring Boot Expert",
    description: "Ramjee Prasad is a Backend Developer from India specializing in Java, Spring Boot, Microservices, REST APIs, and distributed systems. Hire Ramjee Prasad.",
    siteName: "Ramjee Prasad Portfolio",
    images: [
      {
        url: "https://ramjeeprasad.online/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ramjee Prasad - Backend Developer | Java, Spring Boot, Microservices",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramjee Prasad | Backend Developer & Java Spring Boot Expert",
    description: "Ramjee Prasad - Backend Developer specializing in Java, Spring Boot, Microservices, and REST APIs.",
    images: ["https://ramjeeprasad.online/og-image.png"],
    creator: "@ramjee__prasad",
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
