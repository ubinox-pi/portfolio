import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ramjee Prasad Resume | Java Spring Boot Backend Developer | Download CV",
    description: "Download Ramjee Prasad's professional resume - Backend Developer from Jamshedpur, Jharkhand specializing in Java, Spring Boot, WebFlux, Microservices, REST APIs. B.Tech CSE at Silicon Institute of Technology. Available for hire.",
    keywords: [
        // Resume specific
        "Ramjee Prasad resume",
        "Ramjee Prasad CV",
        "Ramjee Prasad resume download",
        "download Ramjee Prasad resume",
        "Ramjee Prasad CV download",

        // Location + Resume
        "Ramjee Prasad resume Jamshedpur",
        "Ramjee Prasad resume Jharkhand",
        "Backend Developer resume Jamshedpur",
        "Java Developer resume Jharkhand",
        "Developer resume India",

        // Education + Resume
        "Ramjee Prasad Silicon Institute resume",
        "Silicon Institute of Technology student resume",
        "B.Tech CSE resume",
        "Computer Science student resume",

        // Technology + Resume
        "Java Developer resume",
        "Spring Boot Developer resume",
        "Spring Boot engineer resume",
        "Microservices developer resume",
        "WebFlux developer resume",
        "Docker developer resume",
        "REST API developer resume",
        "Backend Developer resume India",

        // Hiring keywords
        "hire Ramjee Prasad",
        "hire Java developer Jamshedpur",
        "hire Spring Boot developer",
        "fresher Java developer resume",
        "junior backend developer resume"
    ],
    openGraph: {
        title: "Ramjee Prasad Resume | Backend Developer",
        description: "Professional resume of Ramjee Prasad - Java & Spring Boot Developer",
        url: "https://www.ramjeeprasad.online/resume",
        siteName: "Ramjee Prasad Portfolio",
        type: "website",
        images: [
            {
                url: "https://www.ramjeeprasad.online/ramjee_passport.png",
                width: 800,
                height: 800,
                alt: "Ramjee Prasad - Backend Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ramjee Prasad Resume | Backend Developer",
        description: "Professional resume of Ramjee Prasad - Java & Spring Boot Developer",
        images: ["https://www.ramjeeprasad.online/ramjee_passport.png"],
    },
    alternates: {
        canonical: "https://www.ramjeeprasad.online/resume",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function ResumeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
